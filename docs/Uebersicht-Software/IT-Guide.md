---
layout: default
title: IT Guide
parent: Übersicht Software
nav_order: 4
permalink: /docs/Uebersicht-Software/IT-Guide
---

# IT Guide
{: .no_toc }

Das folgende Kapitel wendet sich an den Systemadministrator einer Kommune. Die Beschreibungen unten befähigen diese Person mit starkem IT Background dazu, KitaMatch in einer bestimmten Kommune eigenständig umzusetzen.


## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Zusammenfassung der benötigten Installationen

- RStudio (R-Version 4.0.3 64-bit)
- Notepad++
- PHP
- git
- MySQL

## Zusammenfassung der benötigten Dateien:

- Vorlage_Kitamatch_Stadt.xlsx
- Create_initial_tables.R → Erzeugt CSV-Dateien für phpMyAdmin
  - Benötigte Pakete/Installationen:
    - stringr
    - dplyr
    - bcrypt
    - devtools
    - PasswordGen
    - xlsx oder openxlsx
    - Rtools


---

## Erstellen einer neuen Umgebung für die Stadt

Im Folgenden wird dargestellt, wie die Kitamatch-Umgebung mithilfe PHP konfiguriert wird. Bei abweichender Serversoftware gehen Sie analog vor.

**1.** Erstellen Sie einen neuen mit Ordner mit dem Stadtnamen unter (/var/www/html):
       
       $ mkdir {Stadtname}

**2.** Navigieren Sie zu diesem Ordner und klonen Sie das folgende git Repository:
       
       $ git clone https://github.com/svengiegerich/kitamatch.git

**3.** Wechseln Sie zum git Branch uiFix:
       
       $ git checkout uiFix

**4.** Richten Sie die Umgebungsvariablen in der .env Datei ein:
       
       $ Is -a        // Um versteckte Ordner zu sehen
       
       $ sudo nano .env
       
  Aktualisieren Sie *APP_NAME*, *APP_URL* & *DB_DATABASE*

**5.** Nehmen Sie die Kita-spezifischen Konfigurationen unter config/kitamatch_config.php vor:
       
       $ cd config/
       
       $ sudo nano kitamatch_config.php

  In dieser Datei finden Sie Konfigurationen bezüglich des Matching-Prozesses. Achten Sie hierbei insbesondere auf die Einstellungen des Betreuungsumfangs, des Betreuungsbeginns und der Alterskohorten. Zu Beginn des R-Skripts haben Sie die Option, folgende Parameter festzulegen:

<mark>Abbildung: Parameter festlegen</mark>

![Parameter_festlegen.png](../../assets/images/Parameter_festlegen.png)
    
  Diese Parameter finden Sie auch in der Datei *kitamatch_config.php* (“care_scopes” = Betreuungsumfang, “care_starts” = Betreuungsbeginn, “age_cohorts” = Alterskohorten). Um die Umgebung korrekt vorzubereiten, stellen Sie sicher, dass die *Anzahl* und *Reihenfolge* dieser 3 Parameter mit den Einstellungen im R-Skript übereinstimmen. Nach dem obigen Beispiel müsste “care_starts” in der PHP-Konfigurationsdatei also mit “Q2” beginnen. Alternative Formate wie z. B. “2020-Q1” sind ebenfalls zulässig, solange Format und Reihenfolge im R-Skript und PHP-Konfigurationsdatei gleich sind. Ebenso kann auch nur ein Betreuungsumfang oder -beginn eingestellt werden (“single-scope”).

  Der Matching-Prozess der KitaMatch-Software basiert auf einem System, das Bewerbern Punkte zuordnet, wenn sie bestimmte Kriterien erfüllen. In der Konfigurationsdatei können bei Bedarf zusätzlich manuelle Kriterien festgelegt werden. Unter “additionalCriteriaBonus_x” kann das x-te Kiterium ein- oder ausgestellt werden. Zusätzlich kann manuell eine Punktezahl für jedes Kriterium festgelegt werden.

**6.** Konfigurieren Sie die Stadt in /var/www/html/{Stadtname}/public/.htacces:

       $ cd /var/www/html/{Stadtname}/public/
       
       $ sudo nano .htaccess

**7.** Konfigurieren Sie eine neue Stadt in /etc/apache2/sites-available/000-default.conf:

       $ cd /etc/apache2/sites-available/
       
       $ sudo nano 000-default.conf


---

## Vorbereitung der Bewerberliste.xlsx

Diese Datei wird zur Stadt geschickt und von dieser ausgefüllt. Diese trägt Informationen über die Bewerber ein. Die folgenden Schritte sind nötig, um die Daten in die Datenbank hochzuladen und das Matching vorzubereiten:

**1.** Überprüfen Sie die Tabelle der Bewerberliste auf Korrektheit. Ist der Name einer Kita beispielsweise in einer Zeile fehlerhaft, behandelt das Programm den falsch geschriebenen Namen als eigene Kita. Datumsangaben sollten das richtige Format haben (dd.mm.yyyy).

**2.** Kopieren Sie anschließend die gesamte Tabelle in eine leere Excel-Datei, sodass die Spaltennamen (ID, Nachname, Vorname…) in Zeile 1 stehen. Nutzen Sie die Funktion “Speichern unter…” um die Datei als CSV-Datei zu speichern. Geben Sie der Datei einen Namen und wählen Sie den Dateityp “CSV UTF-8 (durch Trennzeichen getrennt)” aus.

**3.** Abschließend müssen Sie die soeben erstellte CSV-Datei mit dem Text-Editor Notepad++ öffnen, um die Kodierung zu ändern. Öffnen Sie im Programm den Menüpunkt “Kodierung” (Encoding) und konvertieren Sie die Datei in das Format “UTF-8”. Dieser Schritt stellt sicher, dass Umlaute durch das R-Skript korrekt eingelesen werden. Speichern Sie nun die Datei mithilfe der Tastenkombination “Strg+S” oder im Menü unter “Datei (File) → Speichern (Save)”.

<mark>Abbildung: Umlaute richtig einlesen</mark>

![Umlaute_einlesen.png](../../assets/images/Umlaute_einlesen.png)


---

## Ausführung des R-Skripts

Nachdem Sie die CSV-Datei vorbereitet haben, wird im nächsten Schritt das R-Skript ausgeführt. Das Skript generiert die Tabellen, die in die Datenbank des KitaMatch-Systems hochgeladen werden müssen. Damit die Dateien ordnungsgemäß erzeugt werden können, sind einige Schritte zu beachten, die in der folgenden Anleitung geschildert sind:

**4.** Öffnen Sie die R-Datei im Programm RStudio. Im R-Skript muss das aktuelle Verzeichnis (in dem sich auch die CSV-Datei befindet) als “Working Directory” gesetzt werden. Dazu setzen Sie den Dateipfad des Verzeichnisses in den Befehl “setwd()” ein. Dieser befindet sich am Anfang des Skripts. Anschließend wird im Befehl “read.csv()” der Platzhalter durch den Namen der CSV-Datei aus Schritt 2 ersetzt. Stellen Sie sicher, dass die Option “encoding = “UTF-8”” ausgewählt ist.

<mark>Abbildung: CSV-Datei einlesen</mark>

![CSV-Datei_einlesen.png](../../assets/images/CSV-Datei_einlesen.png)

**5.** Überprüfen Sie, ob die benötigten Pakete installiert sind. Eine Auflistung der benötigten Pakete und Installationen finden Sie am Anfang dieser Anleitung. Installieren Sie fehlende Pakete, indem Sie zum Menüpunkt “Tools → Install Packages…” navigieren und dort den Namen des Pakets eingeben.

  **Hinweis**: Das Paket “bcrypt” kann Probleme verursachen. Diese werden normalerweise durch das Deinstallieren und Installieren dieses Pakets behoben. Außerdem muss das Paket “PasswordGen” separat installiert werden. Eine Anleitung dazu finden Sie unter https://github.com/mpascariu/PasswordGen

**6.** Wenn alle benötigten Pakete installiert sind, kann das R-Skript ausgeführt werden. Markieren Sie den gesamten Code mithilfe “STRG+A” und drücken Sie auf “Run” im oberen Menübereich (alternativ “STRG+Enter”). Es kann nun einige Momente dauern, bis das Skript vollständig ausgeführt wurde. Die durch das Skript produzierten CSV-Dateien werden im Verzeichnis gespeichert, das als Working Directory ausgewählt wurde. Folgende Dateien werden generiert:

  - applicants.csv
    - Allgemeine Informationen der Bewerber wie Name, Geburtsdatum, Erwerbsumfang der Eltern…
  - users.csv
    - Hier werden Anmeldedaten für jeden Bewerber und jede Betreuungsgruppe erstellt.
  - providers.csv
    - Allgemein Informationen der Kitas wie Telefonnummer, Adresse…
  - programs.csv
    - Übersicht der Betreuungsangebote. Hier finden Sie eine Auflistung jeder Altersgruppe der verschiedenen Kitas.
  - preferences.csv
    - Diese Tabelle enthält weitere Daten, die die Plattform für das Matching benötigt.
  - capacities.csv
    - Enthält Informationen über die verfügbaren Plätze der einzelnen Betreuungsangebote.
  - Passwortliste.xlsx
    - Diese Tabelle enthält die Anmeldedaten, die die Kitas benötigen, um sich auf der Kitamatch-Plattform anzumelden.

  **Hinweis**: Sollten nicht alle Dateien korrekt erzeugt werden, versuchen Sie, Ihre R-Version zu ändern. Dieses Manual wurde unter R-Version 4.0.3 (64-bit) erstellt.

---

## Hochladen der Tabellen in die Datenbank phpMyAdmin

**7.** Öffnen Sie den folgenden Link in Ihrem Browser: https://kitamatch.de/phpmyadmin/. Melden Sie sich an und wählen Sie anschließend die gewünschte Datenbank/Stadt auf der linken Seite aus. Im Folgenden wird der Import der Tabellen anhand der fiktiven Datenbank “kita_test” demonstriert.

<mark>Abbildung: Hochladen der Tabellen in die Datenbank phpMyAdmin</mark>

![phpMyAdmin.png ](../../assets/images/phpMyAdmin.png)

**8.** Nachdem Sie eine Datenbank geöffnet haben, sehen Sie eine Auflistung der Tabellen. Leeren Sie folgende Tabellen, um den Datenimport vorzubereiten:

  - applicants
  - capacities
  - matches
  - preferences
  - programs
  - providers
  - users

  Nutzen Sie hierfür die Funktion “*Leeren*” (nicht “Löschen”!). Beim Leeren der Tabelle “users” muss außerdem das Feld “Fremdschlüsselüberprüfung aktivieren” deaktiviert sein.


<mark>Abbildung: Leeren von Tabellen, um Datenimport vorzubereiten</mark>

![Leeren.png](../../assets/images/Leeren.png)

**9.** Als Nächstes laden Sie die CSV-Dateien in die jeweiligen Tabellen hoch. Die Dateien für “applicants” und “users” müssen jeweils als Erstes und als Zweites hochgeladen werden. Danach spielt die Reihenfolge des Uploads keine Rolle. Um eine Datei zu importieren, wählen Sie die gewünschte Tabelle in der Datenbank aus und wählen Sie im oberen Menü die Übersicht “Importieren” aus. Das Feld “Datei auswählen” bietet Ihnen nun die Möglichkeit, die gleichnamige CSV-Datei auf Ihrem Rechner für den Upload auszuwählen. Bestätigen Sie die Auswahl mit dem Button “OK” am Ende der Seite, um den Upload abzuschließen. Sie erhalten eine Meldung, wenn der Upload fehlerfrei verlaufen ist. Verfahren Sie anschließend analog mit den anderen Dateien, die durch das R-Skript erzeugt wurden. 

  **Hinweis**: Sollte ein Upload nicht ordnungsgemäß gelingen, versuchen Sie, die Option “Fremdschlüsselüberprüfung aktivieren” zu deaktivieren.

<mark>Abbildung: Importieren der CSV-Dateien</mark>

![CSV-Datei_importieren.png](../../assets/images/CSV-Datei_importieren.png)


