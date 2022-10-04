---
layout: default
title: Das Gale-Shapley Verfahren
has_children: true
nav_order: 4
permalink: /docs/Das-Gale-Shapley-Verfahren
---

# Das Gale-Shapley Verfahren
{: .no_toc }
In diesem Kapitel stellen wir das Zuteilungsverfahren (Mechanismus) vor, welches der Kitaplatz-Vergabe respektive der Software KITAMATCH zugrunde liegt.  Das heisst, wir beschreiben wie basierend auf dem Kriterienkatalog (Prioritäten) auf Seite der Kitas und der Präferenzen der Eltern eine Zuteilung von Kindern auf die Verfügbaren Kitaplätze ermittelt wird. 
In [Unterkapitel 1.3.1](#der-deferred-acceptance-mechanismus) wird das Zuteilungsverfahren — der Deferred Acceptance Mechanismus — zusammen mit wichtigen Begrifflichkeiten beschrieben und definiert. [Unterkapitel 1.3.2](#semi-dezentraler-deferred-acceptance-mechanismus-für-kitamatch) beschreibt, wie das Verfahren für die Kitaplatzvergabe angepasst wird, damit Kitas die Möglichkeit haben, in besonderen Fällen vom Kriterienkatalog abzuweichen: Der Semi-Dezentrale Deferred Acceptance Mechanismus. Im [Unterkapitel 1.3.3](#stabilität-und-strategie-sicherheit) werden die Vorteile des Deferred Acceptance Mechanismus beschrieben und definiert: Strategie-Sicherheit und Stabilität. 
Für das praktische Verständnis wird im [Unterkapitel 1.3.4](#beispiele-deferred-acceptance-first-preference-first-und-unkoordiniert) der Deferred Acceptance Mechanismus anhand eines Beispiels beschrieben und mit zwei herkömmlichen Zuteilungsverfahren verglichen: Dem First-Preference-First Mechanismus und der Unkoordinierten Vergabe. Hierbei wird aufgezeigt, dass die herkömmlichen Zuteilungsverfahren weder Strategie-Sicher noch Stabil sind.
Abschließend werden im [Unterkapitel 1.3.5](#wo-sind-die-grenzen-des-algorithmussystems) potenzielle Limitationen und Grenzen von Vergabeverfahren in der Kitaplatzvergabe diskutiert. Hier wird auch aufgezeigt, welche Vorteile ein semi-dezentrales Deferred Acceptance Mechanismus gegenüber einem zentralisierten Deferred Acceptance Mechanismus aufweist. 


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




