---
layout: default
title: Warum Gale-Shapley´s Deferred Acceptance Mechanismus?
parent: Einführung
nav_order: 3
has_children: true
---

# Warum Gale-Shapley´s Deferred Acceptance Mechanismus?
{: .no_toc }
In diesem Kapitel stellen wir das Zuteilungsverfahren (Mechanismus) vor, welches der Kitaplatz-Vergabe respektive der Software KITAMATCH zugrunde liegt.  Das heisst, wir beschreiben wie basierend auf dem Kriterienkatalog (Prioritäten) auf Seite der Kitas und der Präferenzen der Eltern eine Zuteilung von Kindern auf die Verfügbaren Kitaplätze ermittelt wird. 
In Unterkapitel 1.3.1 wird das Zuteilungsverfahren — der Deferred Acceptance Mechanismus — zusammen mit wichtigen Begrifflichkeiten beschrieben und definiert. Unterkapitel 1.3.2 beschreibt, wie das Verfahren für die Kitaplatzvergabe angepasst wird, damit Kitas die Möglichkeit haben, in besonderen Fällen vom Kriterienkatalog abzuweichen: Der Semi-Dezentrale Deferred Acceptance Mechanismus. Im Unterkapitel 1.3.3 werden die Vorteile des Deferred Acceptance Mechanismus beschrieben und definiert: Strategie-Sicherheit und Stabilität. 
Für das praktische Verständnis wird im Unterkapitel 1.3.4 der Deferred Acceptance Mechanismus anhand eines Beispiels beschrieben und mit zwei herkömmlichen Zuteilungsverfahren verglichen: Dem First-Preference-First Mechanismus und der Unkoordinierten Vergabe. Hierbei wird aufgezeigt, dass die herkömmlichen Zuteilungsverfahren weder Strategie-Sicher noch Stabil sind.
Abschließend werden im Unterkapitel 1.3.5 potenzielle Limitationen und Grenzen von Vergabeverfahren in der Kitaplatzvergabe diskutiert. Hier wird auch aufgezeigt, welche Vorteile ein semi-dezentrales Deferred Acceptance Mechanismus gegenüber einem zentralisierten Deferred Acceptance Mechanismus aufweist. 


## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Der Deferred Acceptance Mechanismus ist ein von David Gale und Loyed Shapley entwickeltes Zuteilungsverfahren, welches 1962 im Journal ,,American Mathematics Monthly” erschienen ist (Gale and Shapley, 1962). Die Autoren beschrieben, wie mit Hilfe des Deferred Acceptance Mechanismus eine stabile Zuteilung von Schülern auf Schulen erreicht werden kann.
Das ZEW hat in Kooperation mit dem deutschen Städtetag, dem Landesjugendamt Baden-Württemberg und mehreren Kommunen in Nordrhein-Westfalen und Rheinland-Pfalz den Deferred Acceptance Mechanismus unter Berücksichtigung von praktischen Problemen auf die koordinierte Vergabe von Kitaplätzen angepasst.
An dieser Stelle werden die grundsätzliche Funktionsweise des Deferred Acceptance Mechansimus, seine Merkmale und Stärken beschrieben. Anschließend  wird die Theory anhand von stilisierten Beispielen verdeutlicht und mit zwei alternativen, in der Praxis verwendeten Verfahren kontrastiert.

Außerdem werden potenzielle Limitationen des Deferred Acceptance Mechanismums, im Kontext der Kitavergabe, diskutiert. Zusätzlich wird jeweils beschrieben, wie diese Probleme in der praktischen Implementierung mitigiert werden können.


## Der Deferred Acceptance Mechanismus

An dieser Stelle beschreiben wir den Deferred Acceptance Mechanismus in seiner grundlegenden Art — ohne zusätzliche Anpassungen --- erklärt. Grundsätzlich lässt sich der Mechanismus  relativ einfach auf komplexere Situationen — zum Beispiel Kitas mit unterschiedlichen Betreuungsplätzen bedingt durch heterogene Betreuungsumfänge und Alterskategorien — anpassen.
Der Deferred Acceptance Mechanismus dient der Koordination von Präferenzen und Prioritäten von:
- **Bewerbern**: 
  Eltern/Familien, die Betreuungsplätze für ihre Kinder suchen, werden von nun an als „Bewerber“ bezeichnet.
- **Kitas**:
  Kitaleitungen und FB KTP, welche Betreuungsplätze anbieten, werden von nun an als „Kitas“ bezeichnet. 
 
Für das Funktionieren des Mechanismus werden deshalb drei Angaben der Beteiligten benötigt --- eine auf Seiten der Bewerber und zwei auf Seiten der Kitas:
 
- Für jeden Bewerber ein **Ranking  über die Kitas**:
  Rankings von Bewerbern über Kitas geben Auskunft über die Präferenzen der Bewerber. Die erste angegebene Wahl benennt die ,,Lieblingskita” des Bewerbers, die zweite Wahl die zweitbeste Kita aus der Sicht der Bewerbers, und so weiter und so fort. 
  **Wichtig für Bewerber**: 
  **A)** Falls ein Bewerber eine oder mehrere Kitas nicht auflistet, können diese Kitas diesem Bewerber während der Vergabe nicht zugeteilt werden. 
  **B)** Eine ehrliche Angabe der Präferenzen/Rankings ist im besten Interesse aller Bewerber — ein wichtiger Vorteil des Deferred Acceptance Mechanismus gegenüber anderer Verteilungsverfahren.
 
- Für jede Kita eine **Priorität  über die Bewerber**:
    Prioritäten der Kitas bilden das Gegenstück zu den Rankings der Bewerber. Je höher die Priorität eines Bewerbers/Kindes an einer bestimmten Kita, desto besser seine Chancen in dieser Kita einen Platz zu bekommen. Zum Beispiel, wenn eine Kita nur einen Platz für mehrere Bewerber hat, dann erhält das Kind mit der höchsten Priorität (= höchsten Punktezahl dem Prioritätenkatalog folgend) den Betreuungsplatz. Wie bei den Rankings der Bewerber kann grundsätzlich jede Kita eine eigene Prioritätsreihenfolge haben.
 
- Für jede Kita die **Anzahl an verfügbaren Betreuungsplätzen**:
  Betreuungsplätze bezeichnet die Anzahl an neuen Bewerbern, die eine Kita während der Zuteilung aufnehmen kann.
 
Als nächstes wird der Ablauf des Deferred-Acceptance Mechanismus  beschrieben. Da dem Mechanismus ein Algorithmus unterliegt, wird der Ablauf schematisch in Schritten aufgezeigt.
 
**(Kita-Anbieten) Deferred-Acceptance Mechanismus**[^2]: 

**Schritt 1**.
1 **Kita Angebote**: 
  Kitas machen für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar beginnend mit den höchst priorisierten der Reihe nach folgend.
2 **Bewerber Annahmen**: 
  Bewerber, die mindestens ein Angebot erhalten haben,  nehmen das beste Angebot vorläufig an und geben den anderen Kitas, die ihnen in der Runde ein Angebot gemacht haben, eine definitive Absage. 
 
 
**Schritt k>1**.
1 **Kita Angebote**: 
  Kitas, die mindestens eine Absage erhalten haben, machen neue Angebote für jede Absage --- außer sie haben keine Bewerber mehr, denen sie ein Angebot unterbreiten möchten. Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein weiteres Angebot.
2 **Bewerber Annahmen**: 
  Bewerbern welche zusätzlich Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Danach erteilen sie allen anderen Kitas, die ihnen in der Runde ein Angebot gemacht haben,  eine definitive Absage.
3 **Ende**: 
  Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht. Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie zuletzt vorläufig gehalten haben — vorläufige Annahmen werden jetzt zu definitiven Annahmen. Bewerbern, die kein Angebot halten, gehen leer aus.



[^2]: Tatsächlich gibt es zwei Hauptvarianten des Deferred Acceptance Mechanismus welche davon abhängen welche Seite Angebote unterbreitet respektive Angebote vorläufig annimmt. Diese weisen auch theoretische Unterschiede auf. Wir beschränken uns auf die Variante bei der die Kitas Angebote unterbreiten — da sich diese in der Praxis durchgesetzt hat.


