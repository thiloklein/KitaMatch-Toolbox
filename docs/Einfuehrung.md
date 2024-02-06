---
layout: default
title: Einführung
nav_order: 2
has_toc: false
permalink: /docs/Einfuehrung
---

# Einführung: Eine schnelle, faire und transparente Kitaplatzvergabe
{: .no_toc }

Mit dem Ziel einer gerechten und schnelleren Kitaplatzvergabe hat das ZEW – Leibniz-Zentrum für Europäische Wirtschaftsforschung seit 2017 mit KitaMatch ein softwarebasiertes Verfahren entwickelt, das eine transparente, faire und schnelle Vergabe von Kita- und Tagespflegeplätzen ermöglicht, bei der die Wünsche von Eltern und Kitas optimal zusammenkommen. Inzwischen wird das Verfahren in mehreren Kommunen erfolgreich verwendet. Um dieses Verfahren deutschlandweit allen Städten und Gemeinden zugänglich zu machen, wurde das vorliegende **Manual** entwickelt, mit dem Anwender:innen das vom ZEW entwickelte Vergabeverfahren selbstständig umsetzen können. Dieses Manual besteht aus verschiedenen Dokumenten, die den gesamten Prozess der Platzvergabe abbilden und dabei die einzelnen Prozessschritte für jede der beteiligten Zielgruppen – Kitas/Trägervertretungen, Jugendämter, Eltern und IT-Unterstützung – erläutern. Gleichzeitig werden relevante Dokumente bzw. die Programmiercodes auf dieser Website bereitgestellt.

Im ZEW-Podcast "Wirtschaft - Forschung - Debatten" macht Marktdesign-Experte Thilo Klein deutlich, dass Kitaplätze effizienter als bisher verteilt werden können.

<script class="podigee-podcast-player" src="https://player.podigee-cdn.net/podcast-player/javascripts/podigee-podcast-player.js" data-configuration="https://wirtschaft-forschung-debatten.podigee.io/36-auf-die-platze-fertig-los-so-gelingt-die-kitaplatzvergabe/embed?context=external"></script>


Im Folgenden geben wir einen allgemeinen Überblick über den Status quo und die Probleme der Kitaplatzvergabe in Deutschland, das in KitaMatch umgesetzte Vergabeverfahren und die Vorteile dieser Lösung.



## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Status quo: Probleme bei der Kitaplatzvergabe

In Deutschland lassen sich zwei grundlegende Typen von Aufnahmeverfahren unterscheiden (Herzog und Klein 2017). Diese werden in diesem Manual mit „[First Preference First](/docs/Gale-Shapley-Verfahren/First-Preference-First-Mechanismus)“ und „[unkoordiniertes Verfahren](/docs/Gale-Shapley-Verfahren/Unkoordiniertes-Verfahren)“ bezeichnet (siehe [Kapitel 2](/docs/Gale-Shapley-Verfahren) für eine Diskussion der Eigenschaften). Die großen Anbieter für Kitasoftware bieten den Kommunen meist eine Wahl zwischen beiden Verfahren an. Ein First-Preference-First-Verfahren liegt in der Regel dann vor, wenn Eltern bei der Vormerkung eine Rangliste über ihre Wunschkitas angeben können. Andernfalls wird ein unkoordiniertes Verfahren verwendet. Gemeinsam sind diesen Verfahren folgende Probleme, die an zwei Beispielen deutlich werden.

Beispiel 1 (**Unkoordiniertes Verfahren**): Eine alleinerziehende Mutter mit einem Vollzeitjob hat Bedarf für einen Vollzeitbetreuungsplatz, erhält aber zunächst ein Angebot für eine Teilzeitbetreuung.

1.	Problem: **Strategische Unsicherheit**.
    Sofern die Mutter noch auf eine Rückmeldung zu einem Vollzeitplatz wartet, wird sie hier vor eine Entscheidung gestellt, die sie mit den momentan verfügbaren Informationen eigentlich nicht sicher treffen kann.

2.	Problem: **Verletzung der Vergabekriterien**.
    Nimmt sie das Angebot an, kann es sein, dass sie später einen Vollzeitbetreuungsplatz angeboten bekommt. Damit hat sie „berechtigten Neid“ gegenüber einer anderen Familie, die den Vollzeitplatz stattdessen bekommt. Die Vergabe ist [unfair bzw. instabil](/docs/Gale-Shapley-Verfahren/Stabilität-und-Strategie-Sicherheit) und damit anfechtbar[^1], wenn die Mutter als Alleinerziehende Vorrang vor der Familie hat (siehe [Kapitel 4](/docs/Kriterienkatalog-Erstellen)).

3.	Problem: **Lange Wartezeiten**. 
    Wenn sie das Angebot vorübergehend zurückhält, verlängert sie die Wartezeit der anderen Eltern, was zu Planungsunsicherheiten aufseiten der Eltern und Arbeitgeber führt.

Beispiel 2 (**First Preference First**): Eine alleinerziehende Mutter gibt eine Rangliste über ihre Wunschkitas an.

1.	Problem: **Verletzung der Vergabekriterien**.
    Im First-Preference-First-Verfahren werden in einem ersten Schritt alle Erstwünsche geprüft. Die alleinerziehende Mutter erhält bei ihrer Erstwunschkita keinen Platz, da sich dort beispielsweise mehr alleinerziehende Mütter bewerben, als es Plätze gibt (und damit zum Beispiel das Geburtsdatum des Kindes als Entscheidungskriterium verwendet wird). In den nächsten Schritten werden die Zweit- und Drittwünsche etc. geprüft. Wenn es in den von der Mutter angegeben Kitas im ersten Schritt mehr Bewerber:innen als Plätze gab, findet sie keinen Betreuungsplatz. Damit hat sie „berechtigten Neid“ gegenüber einer anderen Familie, die den Platz in der Zweitwunscheinrichtung der Mutter bekommt. Die Vergabe ist unfair bzw. instabil, und damit nicht gerichtsfest, wenn die Mutter als Alleinerziehende Vorrang vor der Familie hat.

2.	Problem: **Strategische Unsicherheit**.
    Das Verfahren benachteiligt Bewerber:innen, die wenige Informationen haben und sich nicht strategisch Verhalten. Die Mutter hätte ihren Zweitwunsch bekommen können, wenn sie gewusst hätte, dass ihre Erstwunschkita stark nachgefragt ist und sie stattdessen strategisch gehandelt und ihren Zweitwunsch als ihren Erstwunsch angegeben hätte.

Natürlich kann kein Zuteilungsverfahren mehr Betreuungsplätze vergeben, als Betreuungsplätze vorhanden sind. Langfristig kann die Kitaplatzvergabe deshalb vor allem durch einen Ausbau von Betreuungsplätzen verbessert werden.

Mittelfristig machen der in vielen Kommunen bestehende Mangel und die daraus resultierende Konkurrenz um Betreuungsplätze jedoch eine transparente, faire und schnelle Platzvergabe notwendig. 



## Wie die algorithmusbasierte Kitaplatzvergabe funktioniert

Das ZEW hat in Kooperation mit dem Deutschen Städtetag, dem Landesjugendamt Baden-Württemberg und mehreren Städten und Gemeinden in Nordrhein-Westfalen und Rheinland-Pfalz ein Verfahren entwickelt, das die oben genannten Probleme und deren gesellschaftliche Folgen auflösen kann (Reischmann, Klein und Giegerich 2021). Dieses Verfahren wurde in Zusammenarbeit mit Eltern, Trägern, Kitaleitungen und Kommunen entwickelt und basiert auf dem sogenannten ["Gale-Shapley-Verfahren"](/docs/Das-Gale-Shapley-Verfahren). Das Gale-Shapley-Verfahren hat sich bereits in der Schul- und Studienplatzvergabe bewährt, u.a. in New York, London und Paris. Für die zugrunde liegende Theorie wurden Alvin Roth und Lloyd Shapley 2012 mit dem Nobelpreis „für die Theorie stabiler Verteilungen und die Praxis des Marktdesigns“ ausgezeichnet. 

Das Gale-Shapley-Verfahren ist ein Algorithmus mit sogenannter „verzögerter Annahme“. Nachdem die Eltern ihre Präferenzen angegeben haben, machen Kitas/Trägervertretungen im Rahmen der KitaMatch-Software den angemeldeten Kindern Angebote. Bewerber:innen können sie halten und abwarten, ob sie in einer späteren Runde ein besseres Angebot bekommen. Eine finale Annahme der gehaltenen Angebote erfolgt erst, wenn Kitas keine neuen Angebote mehr machen können. Die Zuteilung ist strategiesicher (es schadet nicht eine frühe Platzzusage einer Kita anzunehmen, da der Platz immer noch durch ein späteres Platzangebot der Wunschkita ersetzt werden kann), verletzt keine Vergabekriterien und kann innerhalb eines Tages durchgeführt werden. 

Die Umsetzung des Verfahrens für die Kitaplatzvergabe umfasst einen mehrstufigen Prozess, der gemeinsam mit den Kitas/Trägervertretungen, Eltern und Kommunen durchgeführt wird. Dieser **Prozess** der Kitaplatzvergabe läuft folgendermaßen ab: 

1. Eine Kommune und die ihr angeschlossenen Kitas einigen sich auf **objektive Aufnahmekriterien**, nach denen die Plätze vergeben werden. Dabei kann der Kriterienkatalog entweder für alle Kitas der Kommune gleich sein oder Kitas legen der Vergabe unterschiedliche Kriterien und/oder Gewichtungen zugrunde.
2. Kommune und Kitaleitungen kommunizieren den Eltern das neue Vergabeverfahren. Hierbei wird insbesondere auf die Tatsache hingewiesen, dass die Eltern **keine strategischen Abwägungen** mehr treffen müssen. 
3. Eltern reichen bei der Kommune einen Papier- oder Onlineanmeldebogen mit ihren persönlichen Daten und einer **Liste ihrer Wunscheinrichtungen** geordnet nach ihren Präferenzen ein.
4. Auf Basis der in Schritt a) festgelegten Kriterien wird eine Liste der zu matchenden Kinder in der Reihenfolge erstellt, nach der die Kitas/Trägervertretungen den Eltern Platzangebote machen wollen. Hierbei entsteht für jede Kita (und Alterskohorte) eine **sortierte Liste von Kindern**, die in die KitaMatch-Software eingepflegt wird.
5. Am Vergabetag, dem sogenannten „Matching-Day“, treffen sich die Kitaleitungen/Trägervertretungen, um die Platzangebote zunächst in der Software zu machen. Dieser Prozess läuft über das eigens hierfür entwickelte **dezentrale Gale-Shapley-Verfahren** und dauert je nach Größe der Kommune zwischen einer Stunde und vier Stunden. Das Matching kann alternativ auch online (etwa über Zoom, Skype o.Ä.) stattfinden oder als „Matching-Woche“ organisiert werden, in der Kitas täglich ohne zeitliche Einschränkung Platzangebote machen können. Am Ende des Matching-Days können die Kitaleitungen den Eltern dann basierend auf der so gefundenen Zuordnung „tatsächlich“ eine Zu- bzw. Absage erteilen. 



## Die Vorteile der algorithmusbasierten Kitaplatzvergabe

Vorteile für **Jugendämter**:

-	Transparenz: Das Jugendamt kann sicher sein, dass alle Kitaplätze mit Kindern besetzt wurden, die bezüglich der Aufnahmekriterien der Kitas höher priorisiert waren als abgelehnte Kinder.
-	Fairness: Das Gale-Shapley-Verfahren ermöglicht eine gerichtsfeste Platzvergabe.
-	Open Source: Es fallen keine Lizenzkosten an. Es entsteht kein Lock-in-Effekt wie bei proprietärer Software.

Vorteile für **Kitas/Trägervertretungen**: 

-	Transparenz: Die Ablehnung eines Kindes kann damit begründet werden, dass alle vergebenen Plätze mit Kindern besetzt wurden, die bezüglich der Aufnahmekriterien der Kita höher priorisiert waren.
-	Fairness: Die Vorsortierung der Bewerber:innen nach den Kriterien des Kriterienkatalogs erleichtert die gerichtsfeste Vergabe für Kitas.
-	Flexibilität: Die dezentrale Vergabe wahrt die Trägerautonomie und erlaubt Flexibilität, zum Beispiel bezüglich Geschlechts- und Altersstruktur der Gruppen.

Vorteile für **Eltern**: 

-	Transparenz: Die Ablehnung durch eine Kita ist damit nachzuvollziehen, dass alle vergebenen Plätze mit Kindern besetzt wurden, die bezüglich der Aufnahmekriterien der Kita höher priorisiert waren als das eigene Kind.
-	Fairness: Die Vergabe erfüllt die gesetzlichen Vorgaben, sodass es sich nicht lohnt, darüber nachzudenken, einen Kitaplatz einzuklagen.
-	Schnelligkeit: Zu Platzvergabe erfolgt zwei Wochen nach dem Stichtag für die Vormerkung. Danach können Eltern mit einer Zu- oder Absage innerhalb einer Woche rechnen.
-	Strategiesicherheit: Viele Kitas in der Vormerkung anzugeben, bedeutet keinen Nachteil, sondern erhöht die Chance, einen Platz zu erhalten. Darüber hinaus lohnt es sich, die Wunschkita auf Platz eins anzugeben. Es sind also keine strategischen Erwägungen notwendig.



## Kindertagespflege

Die KitaMatch-Software ist nicht nur für die Vergabe von Betreuungsplätzen in Kindertageseinrichtungen geeignet, sondern auch in der Kindertagespflege. Wie diese Form der Betreuung organisiert ist, hängt u.a. von den rechtlichen Vorschriften und Möglichkeiten des jeweiligen Bundeslandes ab. Daher wird die Kindertagespflege im Folgenden zwar mitgedacht, aber wegen der besseren Lesbarkeit durch „Kitaleitungen“ implizit dargestellt und nicht immer explizit erwähnt. 



---

[^1]: Siehe beispielsweise das [Urteil des OVG Münster vom 18.12.2017](http://www.justiz.nrw.de/nrwe/ovgs/ovg_nrw/j2017/12_B_930_17_Beschluss_20171218.html). Der Fall lässt sich wie folgt zusammenfassen: Die Eltern erhalten eine Platzzusage für eine Tagespflegeeinrichtung, hätten aber einen Platz in einer Kita bevorzugt. Daraufhin fordern sie einen Kitaplatz für ihr Kind ein. Die Stadt lehnt das ab und verweist auf die bereits erteilte Platzzusage für eine Tagespflegeeinrichtung. Die Eltern reichen Klage ein. Laut OVG-Urteil ist der Anspruch der Eltern auf einen Kitaplatz nicht zu beanstanden. In der Begründung heißt es, dass die Stadt nicht nachweisen konnte, dass alle Plätze in öffentlichen Kitas an Kinder vergeben wurden, die bezüglich der Aufnahmekriterien der Kitas höher priorisiert waren als das Kind der Antragstellenden. Das OVG bemängelt also das Vergabeverfahren als nicht „ordnungsgemäß“, da es zu einer instabilen Zuordnung führt.

