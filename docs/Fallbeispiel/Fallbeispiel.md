---
layout: default
title: Fallbeispiel
nav_order: 3
has_children: true
has_toc: false
permalink: /docs/Fallbeispiel
---

# Fallbeispiel: Erfahrung im Landkreis Steinfurt
{: .no_toc }

Im Kreis Steinfurt, in der Gemeinde Saerbeck, wurde bei der Verteilung der Kinder auf die Betreuungsplätze erstmals zum Kitajahr 2019/20 das algorithmusbasierte Gale-Shapley-Verfahren angewendet. Rund 100 Kinder in drei Altersgruppen (unter Zweijährige, Zweijährige, über Dreijährige) wurden auf die zur Verfügung gestellten Plätze verteilt. An dem Verfahren haben sich sechs Kindertageseinrichtungen und die Fachberatung für Kindertagespflege, die im Auftrag des Jugendamtes die Vermittlung von Kindertagespflegen übernimmt, beteiligt.

Während das Kreisjugendamt über die Anzahl der Plätze pro Kitajahr und Einrichtung entscheidet, obliegt die Entscheidung über die endgültige Aufnahme der Kinder der Einrichtung/dem Träger anhand der geltenden Kriterien. Bisher wurden die Plätze nach dem First-Preference-First-Prinzip (<mark>vgl. Kapitel 2.3</mark>) vergeben. Neben dem Urteil des Verwaltungsgerichts (VG) Münster (<mark>siehe Kapitel 2.1</mark>) haben u. a. die im Folgenden beschriebenen Gründe die Politik bzw. die Verwaltung bewogen, gemeinsam mit den örtlichen Trägern das Pilotprojekt umzusetzen.



## Inhalt
{: .no_toc .text-delta }

1. TOC
{:toc}

---

<style type="text/css">
  .slideshow{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
  .slides{
    width: 500%;
    display: flex;
  } 
  .slides input{
    display: none;
  } 
  .slide{
    width: 20%;
    transition: 1s;
  } 
  .slide img{
    width: 100%;
    height: 100%;
  }
  
  /*css for manual slide navigation*/
  
  .navigation-manual{
    position: absolute;
    width: 100%;
    display: flex;
    margin-top: 50%;
  }
  .manual-btn{
    width: 50px;
    height: 10px;
    border: 2px solid grey;
    margin: 6px;
    cursor: pointer;
    margin-left: 5%;
  }
  .manual-btn:hover{
    background: purple;
  }
  
  #radio1:checked ~ .first{
    margin-left: 0;
  }
  #radio2:checked ~ .first{
    margin-left: -20%;
  }
  #radio3:checked ~ .first{
    margin-left: -40%;
  }
  #radio4:checked ~ .first{
    margin-left: -60%;
  }
  #radio5:checked ~ .first{
    margin-left: -80%;
  }

  /*css for automatic navigation*/

  .navigation-auto{
    position: absolute;
    display: flex;
    width: 100%;
    margin-top: 50%;
  }
  .navigation-auto div{
    width: 50px;
    height: 10px;
    margin: 6px;
    cursor: pointer;
    border: 2px solid grey;
    transition: 0.5s;
    margin-left: 5%;

  } 
  
  #radio1:checked ~ .navigation-auto .auto-btn1{
    background: purple;
  }
  #radio2:checked ~ .navigation-auto .auto-btn2{
    background: purple;
  }
  #radio3:checked ~ .navigation-auto .auto-btn3{
    background: purple;
  }
  #radio4:checked ~ .navigation-auto .auto-btn4{
    background: purple;
  }
  #radio5:checked ~ .navigation-auto .auto-btn5{
    background: purple;
  }    
</style>

## Gründe für die Einführung
{: .no_toc }

**Größere Transparenz bei der Vergabe von Betreuungsplätzen**	

In den vergangenen Jahren stieg die Zahl der Nachfragen von Eltern, die eine Absage von ihrer Wunscheinrichtung erhalten haben, bei den Kindertageseinrichtungen. Ebenso kontaktierten Eltern vermehrt das Kreisjugendamt, um die für die Zu- bzw. Absage ausschlaggebenden Gründe zu erfahren. Das Kreisjugendamt verwies die Eltern in diesen Fällen an die entsprechenden Träger der Einrichtungen, die die Entscheidung über die Platzvergabe im Rahmen ihrer Trägerautonomie vertreten. Im Rahmen der Bedarfsplanung ist der Kreis Steinfurt als Träger der öffentlichen Jugendhilfe verantwortlich für die Bereitstellung der Plätze bzw. bedarfsgerechten Versorgung der Kinder. Daher war es dem Kreisjugendamt ein Anliegen, in enger Kooperation mit den Trägern mehr Transparenz bei der Vergabe der Betreuungsplätze zu schaffen. Damit verbunden war der Wunsch, dass die Eltern die Vergabe (insbesondere die Entscheidung für eine Absage) besser nachvollziehen können.

Ein weiterer Grund für die Einführung war der Wunsch nach Arbeitserleichterung und Zeitersparnis für alle Prozessbeteiligten.

**Gerechterer Zugang zu Betreuungsplätzen**	

Darüber hinaus galt das Ziel, dass die Eltern keine strategischen Überlegungen mehr anstellen sollten. Die Entscheidung über die Platzvergabe ist streng persönlich und höchst sensibel, da viele Eltern die beste frühkindliche Bildung und Betreuung für ihr Kind wünschen. Daher ist es plausibel, dass sie einiges unternehmen, um ihren Wunschplatz zu erhalten. Hierbei haben besser informierte Eltern sicherlich einen Vorteil und gegebenenfalls bessere Chancen auf den Wunschplatz. Vor diesem Hintergrund wurde das Ziel verfolgt, den Zugang zur frühkindlichen Bildung für alle Kinder gleichermaßen zu ermöglichen.

**Umsetzung des Onlinezugangsgesetzes**	

Im Zuge der Modernisierung und Digitalisierung der Kreisverwaltung Steinfurt hat der zuständige Kreisjugendhilfeausschuss entschieden, nicht nur ein Onlineanmeldeprogramm im Bereich der Kindertagesbetreuung einzuführen, sondern auch das algorithmusbasierte „Gale-Shapley-Vergabeverfahren“. Dies stand auch unter der Prämisse des Onlinezugangsgesetzes (OZG), wonach das Kreisjugendamt verpflichtet ist, die <mark>Link?</mark>  Verwaltungsleistungen auch elektronisch über Verwaltungsportale anzubieten und diese miteinander zu einem Portalverbund zu verknüpfen (vgl. [§ 1 OZG](https://www.gesetze-im-internet.de/ozg/__1.html)).

<!--image slider start-->
<div class="slideshow">
  <div class="slides">
    <!--radio buttons start-->
    <input type="radio" name="radio-btn" id="radio1">
    <input type="radio" name="radio-btn" id="radio2">
    <input type="radio" name="radio-btn" id="radio3">
    <input type="radio" name="radio-btn" id="radio4">
    <input type="radio" name="radio-btn" id="radio5">
    <!--radio buttons end-->
    <!--slide images start-->
    <div class="slide first">
      <img src="../../assets/images/1_Karten.PNG" alt="">
    </div>
    <div class="slide">
      <img src="../../assets/images/2_Karten.PNG" alt="">
    </div>
    <div class="slide">
      <img src="../../assets/images/3_Karten.PNG" alt="">
    </div>
    <div class="slide">
      <img src="../../assets/images/4_Karten.PNG" alt="">
    </div>
    <div class="slide">
      <img src="../../assets/images/5_Karten.PNG" alt="">
    </div>
    <!--slide images end-->
    <!--automatic navigation start-->
    <div class="navigation-auto">
      <div class="auto-btn1"></div>
      <div class="auto-btn2"></div>
      <div class="auto-btn3"></div>
      <div class="auto-btn4"></div>
      <div class="auto-btn5"></div>
    </div>
    <!--automatic navigation end-->
  <!--manual navigation start-->
  <div class="navigation-manual">
    <label for="radio1" class="manual-btn"></label>
    <label for="radio2" class="manual-btn"></label>
    <label for="radio3" class="manual-btn"></label>
    <label for="radio4" class="manual-btn"></label>
    <label for="radio5" class="manual-btn"></label>
  </div>
  </div>
  <!--manual navigation end-->
</div>
<!--image slider end-->

<script type="text/javascript">
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 5000);
</script>


---

## Einführung des neuen Verfahrens 

Dem Kreis Steinfurt war es von Anfang an ein Anliegen, alle Beteiligten in die Vergabe der Kitaplätze frühzeitig mit einzubinden. Für die Einführung dieses neuen Verfahrens zum Kitajahr 2019/20 informierte das Jugendamt das zuständige Gremium (Arbeitsgruppe nach § 78 SGB VIII) im Sommer/Herbst 2018, sodass Fragen der Träger- und Kitavertretungen undder Bürgermeister:innen beantwortet werden konnten. 

In der Pilotkommune Saerbeck hat die zuständige Bedarfsplanerin des Kreisjugendamtes ebenso frühzeitig den beteiligten Kitaleitungen, Trägervertretungen sowie dem Bürgermeister das neue Verfahren vorgestellt. Sie übernahm im Rahmen der Einführung die Aufgaben einer Projektleitung, die im <mark>Kapitel 5</mark> näher erläutert werden. 

Gemeinsam mit der pädagogischen Fachberatung des Kreises ging die Projektleitung offen in die Gespräche und nahm die Interessen, aber auch skeptischen Überlegungen und Zweifel der Beteiligten von Beginn an ernst. Die Akteure zeigten sich interessiert und neugierig, ob das neue Verfahren tatsächlich die angedeuteten Vorteile (mehr Transparenz, erhöhte Arbeitserleichterung etc., <mark>Kapitel</mark> vgl. Kapitel 2.2.1) erfüllen kann. 

Über das neue Verfahren wurden die Eltern in einem Elternbrief informiert. Einen Elternbrief schickt das Jugendamt jedes Jahr im August an die Eltern von unter dreijährigen Kindern in verschiedenen Sprachen mit Informationen rund um die Anmeldung oder beispielsweise zu Elternbeiträgen. Im Sommer 2019 wurde explizit auf das neue Vergabeverfahren und auf Kontaktdaten für eventuelle Fragen hingewiesen.

Im Gespräch mit den Prozessbeteiligten war es dem Kreisjugendamt wichtig, dass diese das Verfahren verstehen, die Vorteile erkennen und das Matching für sich adaptieren (möchten). 

{: .note-title}
> Hinweis
> 
> Für eine erfolgreiche Umsetzung waren ein Informationsgespräch und das Einverständnis aller Beteiligten erforderlich!



---

## Erstellung der Aufnahmekriterien

In der Pilotkommune Saerbeck hat das Jugendamt im Sommer 2019 die beteiligten Träger und Kitaleitungen frühzeitig zu einem gemeinsamen Gespräch eingeladen und die Erstellung eines einheitlichen Kriterienkatalogs für die Verteilung der Kinder auf die Betreuungsplätze moderiert. Da die Einrichtungen in der Vergangenheit oftmals nach denselben Aufnahmekriterien vorgingen, konnte schnell eine erste gemeinsame Basis gefunden werden, in der jede Einrichtung die für sie wichtigen Kriterien wiederfand.

Es stellte sich als hilfreich heraus, den Beteiligten ein wenig Zeit zu geben, den Kriterienkatalog „reifen zu lassen“ und in einem weiteren Treffen erneut zu diskutieren und manche Begriffe, zum Beispiel „Härtefälle“, zu konkretisieren. Erst dann konnten mögliche Punktwerte pro Kriterium festgelegt werden. Beispielsweise könnte das Kind, das als Geschwisterkind in einer Einrichtung angemeldet wurde, 3 Punkte erhalten, während ein anderes Kind, das kein Geschwisterkind ist, 0 Punkte bekommt. Dabei wurden die Beteiligten gebeten, verschiedene Familienszenarien (zum Beispiel alleinerziehende Sorgeberechtigte oder Mehrlingsfamilien) möglichst praxisnah durchzuspielen. Der auf diese Weise entwickelte Katalog beinhaltete klare und eindeutige Formulierungen und wurde vom Rat der jeweiligen Kindertageseinrichtung verabschiedet. Im darauffolgenden Jahr haben die Verantwortlichen den ursprünglichen Kriterienkatalog auf Aktualität geprüft, gegebenenfalls angepasst und verabschiedet. Dieses Verfahren wird auch in Zukunft beibehalten, sodass der Kriterienkatalog – als Grundlage fürs Matching – stets hinterfragt und aktualisiert wird.

Wie ein solcher Kriterienkatalog entwickelt werden kann, beschreibt <mark>Kapitel</mark> Kapitel 4.

{: .note-title}
> Hinweise
> 
> - Die Aufnahmekriterien sollten präzise und eindeutig formuliert sein.
> - Idealerweise sollten die beteiligten Kitaleitungen/Trägervertretungen einen Kriterienkatalog erarbeiten, der von allen akzeptiert wird. 



---

## Matching-Day

In Vorbereitung auf das Matching haben die Kitaleitungen (i. d. R. der Erstwunscheinrichtung) jedes Kind, das die Einrichtung als erste Präferenz angegeben hat, bepunktet bzw. entschieden, ob das jeweilige Kriterium des Katalogs auf das Kind zutrifft oder nicht. Die hierfür erforderlichen Informationen haben die Eltern zunächst im Zuge des Anmeldeverfahrens im Online-Portal angegeben und Kitaleitungen im Rahmen eines Elterngesprächs ergänzt. 

Auf Basis dieser Bepunktung wurde in Anlehnung an das Kinderbildungsgesetz (KiBiz) NRW eine Bewerberliste für drei Altersgruppen pro Einrichtung erstellt: unter Zweijährige, Zweijährige und Drei- bis Sechsjährige. Diese Bewerberliste hat die jeweilige Kitaleitung in dem KitaMatch-Programm auf Vollständigkeit und Plausibilität geprüft (vgl. <mark>Kapitel</mark> Kapitel 3.1.5). Die Leitungen bzw. Trägervertretungen hatten sodann im Rahmen ihrer Trägerautonomie die Möglichkeit, diese Liste nach Rücksprache mit dem Jugendamt aus „gutem Grund“ zu ändern. Ferner hatte das Jugendamt die Aufgabe, im Vorfeld des Matchings die **Zahl der freien Plätze** (in Abstimmung mit den beteiligten Trägervertretungen und Kitaleitungen) in den jeweiligen Altersgruppen festzulegen (siehe <mark>Kapitel</mark> Kapitel 3.1.5.3.1).

Ebenso war das Jugendamt aufgefordert, zu entscheiden, welcher **Aufnahmezeitraum berücksichtigt** werden soll. In der Pilotkommune Saerbeck wurden die Betreuungswünsche für einen Zeitpunkt zwischen dem 1. August und 30. November 2019 berücksichtigt.

Eine weitere wichtige Aufgabe in Vorbereitung auf das Matching war die Prüfung von besonderen Konstellationen. Dazu gehören beispielsweise die **Wechselkinder**; also diejenigen Kinder, die bereits einen Platz in einer Betreuungseinrichtung haben, aber wechseln möchten. Für diese Fälle wurden bedarfsplanungsrechtliche Lösungen mit den hiesigen Trägern und Kitaleitungen erarbeitet (<mark>Kapitel</mark> vgl. Kapitel 5.4 ).

**Die Durchführung der Platzvergabe**

Für die Platzvergabe des Kitajahres 2019/20 kamen die beteiligten Kitaleitungen und Trägervertretungen im Januar 2020 zum sogenannten „Matching-Day“ im IT-Schulungsraum des Kreises zusammen, um den Eltern über das KitaMatch-Programm (<mark>Kapitel</mark> siehe Kapitel 3) **virtuelle Platzangebote** zu machen. Auf Basis der Wunschreihenfolge der Eltern hat das KitaMatch-Programm daraufhin die Angebote im Namen der Eltern angenommen oder abgelehnt – und zwar so lange, bis alle Plätze vergeben waren bzw. bis sich die Bewerber nicht mehr besserstellen konnten. 

Das Matching kann auch online durchgeführt werden. Hierfür bedarf es aber sowohl technischer als auch organisatorischer Hilfestellung (z. B. jeweils zwei Endgeräte für die Kitaleitungen, mit der sie zur besseren Übersicht das Matching verfolgen bzw. das Matching-Tool bedienen können).

Im Februar 2020 schließlich schickten die Kitaleitungen genau wie ihre Kolleg:innen in den anderen Orten des Jugendamtsbezirks, den Eltern über das Kreis **ST**einfurt **E**ltern**P**ortal (STEP) eine verbindliche Zusage bzw. Absage.



---

## Das Matching aus Sicht der Eltern, der Kitaleitungen/Trägervertretungen und des Jugendamtes

In der Pilotkommune Saerbeck haben die beteiligten Kitaleitungen/Trägervertretungen mit Vertreter:innen des Jugendamts ein paar Wochen nach dem Matching Day das neuartige Verfahren reflektiert, Schwachstellen im Verfahrensablauf aufgedeckt und Optimierungen formuliert. Im Ergebnis waren sich alle Beteiligten schnell einig: Das Matching soll auf jeden Fall beibehalten werden, da es sehr transparent, fair und zeitsparend ist. Die wesentlichen Erfahrungen der drei zentralen Akteursgruppen Eltern, Kitaleitungen/Trägervertretungen und Jugendämtern werden im Folgenden aufgeführt:

**Aus Sicht der Eltern**

Die Eltern haben – nach wie vor – gemäß § 5 Achtes Buch Sozialgesetzbuch (SGB VIII) ihr Wunsch- und Wahlrecht, das für ein gelungenes Matchingverfahren zwingend notwendig ist. Sie sind gehalten, ihre **wahren** Präferenzen anzugeben. Je mehr Wünsche sie angeben, desto besser kann ihrem Recht nachgekommen werden. Eltern müssen nicht mehr strategisch abwägen, wie sie sich besserstellen können. Mögliche strategische Überlegungen von Eltern bei den Angaben der Präferenzen, die es sicherlich im bisherigen **First-Preference-First-Verfahren** gegeben hat, sind hinfällig. Denn die Eltern können sicher sein, dass es grundsätzlich **stabile Entscheidungen** gibt: Sie bekommen bei einer von ihnen ausgewählten Wunscheinrichtung einen Platz, weil sie dort eine höhere Priorität gemäß dem Kriterienkatalog haben als die Eltern, die in dieser Einrichtung keinen Platz erhalten. Durch höhere Kriterientreue wird die Platzvergabe fairer. Die Eltern können besser nachvollziehen, warum sie (k)einen Platz bekommen haben, weil die Kriterien und das Vergabeverfahren transparenter sind.

{: .note-title}
> Hinweise
> 
> - Es empfiehlt sich eine frühzeitige, umfassende Information an die Eltern. 
> - Es sollten genügend Informationen (zum Beispiel Geburtsdatum, ob es ein Geschwisterkind ist) über jedes angemeldete Kind vorliegen.
> - Strategische Überlegungen werden überflüssig.
> - Durch Priorisierung der Wunscheinrichtungen wird das Wunsch- und Wahlrecht berücksichtigt.
> - Das Vergabeverfahren ist transparent und nachvollziehbar.
> - Das Matchingergebnis ist das fairste Resultat für die Bewerber. 


**Aus Sicht der Kitaleitungen/Trägervertretungen**

Nach Aussagen der Kitaleitungen/Trägervertretungen war es gut, wenn sich die beteiligten Akteure noch einmal bewusst über die Aufnahmekriterien und deren Gewichtung austauschen. Sie kamen zur Erkenntnis, dass „man gar nicht so weit voneinander entfernt [liege; Anm. d. Verf.]“ und durchaus in der Lage sei, einen gemeinsamen Kriterienkatalog zu entwickeln. Es sei optimal, dass die Kriterientreue grundsätzlich durch das Matching garantiert wird. Das Matchingverfahren sei „eine Art Erleichterung, da die Kinder sachlich, neutral sortiert und ausgewählt werden“. Dies zeige, wie groß der Erklärungs- und Rechtfertigungsdruck im Rahmen des anderen Verfahrens war. Die Kitaleitungen erleben scheinbar eine emotionale und organisatorische Erleichterung, die sie motiviert, das Matchingverfahren beizubehalten.

Ein weiterer Vorteil war aus ihrer Sicht die Wahrung der gesetzlich verankerten Trägerautonomie (vgl. § 47 SGB VIII). Denn die Leitungen bzw. Trägervertretungen haben in jeder Altersgruppe die Möglichkeit, aus „gutem Grund“ eine Abweichung von der eigentlichen Bewerberliste vorzunehmen. Dies sei für sie eine Erleichterung, weil die familiären Schicksale im Alltag flexibles und unkompliziertes Handeln und Entscheiden erfordern.

Insgesamt stellten die Kitaleitungen einen reduzierten Aufwand fest: Durch das Programm erhielten sie alle für sie relevanten Anmeldungen (egal, ob erster, zweiter oder fünfter Wunsch). Darüber hinaus wurden alle für die Anmeldung relevanten Daten der Kinder verarbeitet und keine Daten übersehen. Im Matchingverfahren zeigte das Programm in jeder Runde immer nur die angemeldeten Kinder, die nicht bereits ein Angebot von einer höher präferierter Einrichtung erhalten haben. Dies erleichtere die Abwicklung, insbesondere bei Kitas mit sehr vielen Anmeldungen.

Zudem war es den Kitaleitungen wichtig, das Kind auf der Bewerberliste „bewusst“ im Programm anzuklicken und es nicht ausschließlich dem Computer zu überlassen. Sie fanden es überaus effizient, dass fast alle Kinder durch die Koordinierungsrunden im Rahmen des Matching-Days direkt einen (zunächst virtuellen) Platz erhalten haben und am Ende des Matchings deutlich wurde, welche Kinder die Einrichtung aufnimmt.

{: .note-title}
> Hinweise
> 
> - Das überwiegende Empfinden der Beteiligten nach dem Matching ist: „Erleichterung“ und ein „gutes Gefühl“.
> - Die Trägerautonomie bzw. die Flexibilität der Einrichtungen bei der Entscheidung über die angemeldeten Kinder, denen sie ein Angebot machen möchten, bleibt gewahrt.
> - Das Verfahren erfordert weniger Aufwand.


**Aus Sicht des Jugendamtes**

Grundsätzlich hat das Jugendamt die Pflicht, ein bedarfsgerechtes Angebot vorzuhalten. Dabei ist es wünschenswert, dass die Eltern möglichst den Wunschplatz erhalten bzw. nachvollziehen können, warum sie diesen (nicht) bekommen haben. Höhere Transparenz ist ebenso ein Ziel wie Fairness und Nachvollziehbarkeit.

Grundlegende Voraussetzung für das Matchingverfahren war jedoch zunächst die Legitimation durch die Politik. Es war sinnvoll und erforderlich, sie von Anfang an mit einzubinden und fortlaufend zu informieren. Dadurch konnten eine breite Akzeptanz und eine vielversprechende (Vertrauens)Basis für dieses algorithmusbasierte Vergabeverfahren geschaffen werden.

Nicht weniger wichtig war das offene und vertrauensvolle Gespräch mit allen Prozessbeteiligten. Dies war ein entscheidender Faktor für den Erfolg des Matchings. Dabei spielten das Jugendamt und die Projektleitung eine besondere Lenkungs- und Kommunikationsrolle.

Auch das Kreisjugendamt verzeichnet nach Anwendung des Matchings eine Zeitersparnis. Denn die Bedarfsplaner:innen erhalten aufgrund des KitaMatch-Programms schneller und einfacher eine Übersicht, welches Kind in welcher Einrichtung einen Platz (nicht) erhält. Gleichzeitig wird deutlich, welche Kinder noch keinen Platz erhalten haben und zunächst unversorgt sind. Für diese Kinder konnten dann rechtzeitig in der Praxis Alternativangebote in den Einrichtungen mit freien Kapazitäten geschaffen werden.

{: .note-title}
> Hinweise
> 
> - Die umfassende Information an die Politik war notwendig, um die Legitimation für dieses Verfahren zu erhalten. 
> - Die Gespräche bzw. Einverständnisse der beteiligten Kitas bzw. Trägervertretungen erwiesen sich als wichtig. 
> - Die Kommunikation mit allen an dem Matching Beteiligten war von Anfang an entscheidend.
> - Diese Vorgehensweise führte zu mehr Transparenz.
> - Die direkten Datenexporte von (un)versorgten Kindern führten zu Zeitersparnis.


**Weitere Erkenntnisse**

Das Matching nach dem Gale-Shapley-Verfahren löst nicht das Problem des oftmals vorherrschenden Platzmangels. Es kann aber, wie die Erfahrungen im Kreisjugendamtsbezirk Steinfurt zeigen, ein wichtiger Baustein sein, um die Platzvergabe transparenter und fairer durchzuführen.

Den Beteiligten ist bewusst geworden, dass die Verstetigung dieses Matchingverfahrens ein mehrjähriger Prozess ist. Es braucht Zeit, bis die Kitaleitungen/Trägervertretungen dem neuen Verfahren „vertrauen" und verstehen, was wann passiert. Es braucht ebenso Zeit, bis die Eltern diesem Matching „vertrauen" und ihre wahren Präferenzen ohne taktische Überlegungen angeben.

In den Kommunen im Kreisjugendamtsbezirk Steinfurt wird einmal im Jahr gematcht, sodass es umso wichtiger ist, die Erfahrungen zeitnah schriftlich festzuhalten, mit den Beteiligten im Gespräch zu bleiben und das Verfahren stets zu reflektieren und weiterzuentwickeln.
 
**Grenzen des Verfahrens**

Besonders im Zuge der Reflexion ist es wichtig, das KitaMatch-Verfahren im Hinblick auf seine Nachteile zu hinterfragen und gegebenenfalls Schwachstellen zu erkennen, zu besprechen und Lösungsansätze zu entwickeln. Zu den Grenzen des Verfahrens, die sich im Prozess der Implementierung herauskristallisiert haben, zählt, dass die Erstwunscheinrichtung nicht in jedem Fall zugeteilt wird. Zudem ist die Frage, wie man am besten mit den Nachmeldungen, das heißt den Meldungen nach dem Stichtag, verfährt, auch über dieses Verfahren schwierig zu beantworten. Abschließend müssen Eltern frühzeitig darüber informiert werden, dass es wichtig ist, idealerweise fünf Präferenzen über ihre Wunscheinrichtungen anzugeben. Sonst kann es passieren, dass sie zunächst unversorgt bleiben.



---

## Fazit zur Platzvergabe mit dem KitaMatch-Verfahren im Landkreis Steinfurt

Insgesamt ist festzuhalten, dass das Matching im Kreisjugendamtsbezirk Steinfurt als transparentes, schnelles und faires Verfahren für die Kommunen wahrgenommen wurde. Alle Beteiligten waren von dem Verfahren positiv überrascht und möchten es beibehalten bzw. ausweiten. Eine entsprechende Beschlussvorlage des Kreisjugendhilfeausschusses für die Ausweitung auf alle 20 Kommunen des Kreisjugendamtsbezirks liegt vor.[^5] Dabei ist der stetige Austausch mit allen Beteiligten ein entscheidender Baustein für ein erfolgreiches (algorithmusbasiertes) Matchingverfahren. Es kann einen Beitrag dazu leisten, jedem Kind eine faire Chance auf frühkindliche Betreuung, Bildung, Erziehung zu geben, sofern genügend Plätze zur Verfügung stehen.. 




---

[^5]: Vgl. B 040/2020 unter SessionNet - Planung der Kindertagesbetreuung im Kreisjugendamtsbezirk Steinfurt für das Kindergartenjahr 2020/2021 (krz.de)

