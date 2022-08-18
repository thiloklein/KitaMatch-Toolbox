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

---

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

---

## Semi-Dezentraler Deferred Acceptance Mechanismus für KITAMATCH

**Zentrale Durchführung**: Normalerweise wird der Deferred Acceptance Mechanismus zentral durchgeführt. D.h. Prioritäten der Kitas und Präferenzen/Rankings der Bewerber werden zentral gesammelt, und anschließend wird eine Zuteilung via Deferred Acceptance Mechanismus direkt ermittelt.

**Semi-Zentrale Durchführung**: Die koordinierte Vergabe von Kitaplätzen wird semi-zentral durchgeführt. In diesem Fall werden die Präferenzen/Rankings der Bewerber zentral gesammelt, aber die Kitas nehmen dezentralisiert an der Vergabe teil, d.h. sie durchlaufen jeden Schritt der Vergabe. In diesem Zusammenhang hat sich das ZEW mit dem deutschen Städtetag, dem Landesjugendamt Baden-Württemberg und mehreren Städten in Nordrhein-Westfalen und Rheinland-Pfalz auf das Kita-Anbieten-Deferred-Acceptance Verfahren geeinigt — dies ist das Verfahre, das grundlegend der Kita-Software unterliegt, und funktioniert wie folgt:


**Semi-Zentraler (Kita-Anbieten) Deferred-Acceptance-Mechanismus**:


**Schritt 1.**

1 Gemäß ihrer vorsortierten Liste machen Kitas für jeden ihrer Plätze ein Angebot an einen Bewerber — und zwar generell beginnend mit den höchst priorisierten der Reihe nach folgend. 

**Dezentral: Aufgrund der semi-dezentralen Natur des Verfahrens haben Kitas jedoch die Flexibilität, bei Bedarf von dem Kriterienkatalog/Prioritäten abzuweichen.**

**Wichtig: Weicht eine Kita vom Kriterienkatalog ab, sollte dies begründet werden.** 

2 Bewerber nehmen ein Angebot vorläufig an und geben den anderen Kitas, die ihnen in der Runde ein Angebot gemacht haben, eine definitive Absage. Zentralisiert: Dies geschieht automatisch  über die hinterlegten Präferenzen.


**Schritt k>1.**

1 Kitas, die mindestens eine Absage erhalten haben machen neue Angebote für jede Absage. Kitas, bei denen kein einziges Angebot abgelehnt worden ist, machen kein     weiteres Angebot. 

**Dezentral: Auch in jedem dieser Schritte können Kitas bei Bedarf von dem Kriterienkatalog/Prioritäten abweichen.**

2 Bewerber, welche zusätzlich Angebote erhalten, können entweder ein neues Angebot vorläufig annehmen oder ihr derzeit gehaltenes Angebot beibehalten. Dann erteilen sie allen anderen Kitas eine definitive Absage. 

Zentralisiert: Dies geschieht automatisch über die hinterlegten Präferenzen.

3 Falls kein einziges neues Angebot gemacht wurde, ist eine finale Zuteilung erreicht:
Bewerber haben einen Kitaplatz bei der Kita, deren Angebot sie halten. Bewerber, die kein Angebot halten, bleiben zunächst unversorgt.


---

## Stabilität und Strategie-Sicherheit


Als nächstes werden die theoretischen  Merkmale und Stärken des Deferred-Acceptance Mechanismus beschrieben, bevor alles anhand von Beispielen nochmals erläutert wird. Die Stärken des Deferred-Acceptance Mechanismus sind die Stabilität der resultierenden Zuteilung und die Strategie-Sicherheit des Zuteilungsverfahrens:

- **Stabilität**:

  Der Deferred Acceptance Mechanismus führt zu einer stabilen Zuteilung. Stabilität ist wichtig für die Akzeptanz und Legitimierung einer Zuteilung — vgl. Rechtlicher Rahmen — Münster Urteil. Im spezifischen gilt folgendes für eine stabile Zuteilung:

**Bewerber-Sicht**:

Jede Kita, die von einem Bewerber — nennen wir ihn ,,Bewerber A” — höher gerankt wurde als die ihm zugeteilte Kita, ist

1 voll belegt und

2 jeder dort (bei einer von ,,Bewerber A” höher gerankten Kita) zugeteilte Bewerber hat eine höhere Priorität als ,,Bewerber A”.

 
**Kita-Sicht**:

Jeder Bewerber, der nicht einer Kita zugeteilt wurde —nennen wir sie ,,Kita B” — und eine höhere ,,Kita B”-Priorität aufweist als der Bewerber mit der tiefsten ,,Kita B”-Priorität bei ”Kita B” — also gewissermaßen von Kita-B bevorzugt, ist einer Kita zugeteilt, die er höher gerankt hat/präferiert.
 
- **Strategie-Sicherheit**

Bewerber Strategie-Sicherheit hat zwei Komponenten.

1 Immun gegen Verkürzen der Rankingliste: Ein Bewerber kann unter keinen Umständen eine bessere Kita zugeteilt bekommen, wenn sie weniger Kitas aufgelistet.

2 Immun gegen  Ändern der Rankingliste: Ein Bewerber kann unter keinen Umständen eine bessere Kita zugeteilt bekommen, wenn er die Reihenfolge der aufgelisteten Kitas ändert (besser wird nach der originalen Reihenfolge definiert).

Der (Kita-Anbieter) Deferred-Acceptance ist immun gegen  Ändern der Rankingliste, aber nicht gegen Verkürzen. In der Praxis ist es aber das Risiko des Verkürzens der Rangliste — keiner Kita zugeteilt werden — viel höher als der potenzielle Gewinn bei einer erfolgreichen Manipulation. Aus praktischer Sicht ist es deshalb in jedem Falls für Bewerber von Vorteil ihre Präferenzen/Rankings wahrheitsgetreu anzugeben.


---

[^2]: Tatsächlich gibt es zwei Hauptvarianten des Deferred Acceptance Mechanismus welche davon abhängen welche Seite Angebote unterbreitet respektive Angebote vorläufig annimmt. Diese weisen auch theoretische Unterschiede auf. Wir beschränken uns auf die Variante bei der die Kitas Angebote unterbreiten — da sich diese in der Praxis durchgesetzt hat.


