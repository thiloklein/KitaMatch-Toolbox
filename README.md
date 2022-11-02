<p align="center">
    <h1 align="center">KitaMatch-Toolbox</h1>
    <p align="center">Mit dem Ziel einer gerechteren und schnelleren Kitaplatzvergabe hat das ZEW - Leibniz-Zentrum für Europäische Wirtschaftsforschung seit 2017 mit KitaMatch ein Verfahren entwickelt, das eine transparente, faire und schnelle Vergabe ermöglicht, bei der die Wünsche von Eltern und Kitas optimal zusammenkommen. Inzwischen wird das Verfahren in einigen Modellstädten erfolgreich und regelmäßig implementiert. Um dieses Verfahren deutschlandweit allen Städten und Gemeinden zugänglich zu machen, wurde das vorliegende Manual entwickelt, mit dem Anwender:innen das vom ZEW entwickelte Vergabeverfahren selbstständig umsetzen können.</p>
    <p align="center"><strong><a href="http://kitamatch.com/">KitaMatch-Toolbox</a></strong></p>
    <br><br><br>
</p>

Die Website nutzt eine Documentation-Theme von [Jekyll - Just the Docs](https://just-the-docs.github.io/just-the-docs/), somit sind die wichtigsten Informationen zur Bearbeitung [hier](https://just-the-docs.github.io/just-the-docs/) gegeben.

![jtd](https://user-images.githubusercontent.com/896475/47384541-89053c80-d6d5-11e8-98dc-dba16e192de9.gif)

<br><br><br>

---

Im Folgenden werden die für diese Website am häufigsten verwendeten Befehle erklärt:

## Allgemeine Gestaltung

Fast alle Einstellungen, die alle Seiten betreffen, sind in **_config.yml_** zu finden. Diese Datei ist mit einigen Kommentaren versehen und versteht sich somit ziemlich von selbst. ([Hier eine genauere Dokumentation zu dieser Datei](https://just-the-docs.github.io/just-the-docs/docs/configuration/))

### site-footer

Lediglich die Logos vom ZEW und der Bertelsmann Stiftung unterhalb der Navigationsleiste, findet man in **_layouts/default.html_** unter _footer class="site-footer"_ wieder.

---

## Graphische Elemente

Besonders die Startseite (**_index.md_**) beinhaltet einige dynamische/graphische Inhalte (Slideshow, "Vorteile im Überblick", "In der Presse"), die in HTML und CSS geschrieben wurden. Der CSS-Teil ist im **_style_**-Bereich zu finden.

### Download-Buttons

Buttons [Button](Link){: .btn .btn-purple } können durch den Befehl  
```markdown
[Link button](http://example.com/){: .btn .btn-purple }
```
erstellt werden.

### Wichtig-Boxen

Solche Boxen, die wichtige Inhalte hervorheben, können durch den Befehl

> Überschrift der Box
>
> Inhalt der Box.

```markdown
{: .note-title}
> Überschrift der Box
>
> Inhalt der Box.
```
erzeugt werden. Hierbei steht in der ersten Zeile immer die "Überschrift der Box".

Soll es keine Übeschrift geben, verwendet man den Befehl

{: .highlight}
> Inhalt der Box

```markdown
{: .highlight}
> Inhalt der Box
```

---

## Aufbau

Alle Unterseiten sind in dem Ordner **_docs_** zu finden und sind gleich sortiert wie die Navigationsleiste der Website.

So beginnt jede Markdown Datei:

```markdown
---
layout: default
title: Titel der Seite
has_children: true      <- default-Wert ist false. (true = es existieren Unterkapitel)
nav_order: 4            <- gibt die Position in der Navigationsleiste an
has_toc: false          <- default-Wert ist true. (Nur relevant, wenn has_children = true) Erzeugt TOC an Unterkapiteln und steht am Ende der Seite.
permalink: /docs/Das-Gale-Shapley-Verfahren     <- nur ein Beispiel
---
```



