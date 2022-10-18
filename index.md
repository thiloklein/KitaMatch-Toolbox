---
layout: default
title: Startseite
nav_order: 1
permalink: /
---

<style type="text/css">
    
    .breakline {
        clear: both;
    }
    
    .row {
        width: 100%;
    }
    .columnleft {
        width: 50%;
        float: left;
    }
    .columnright {
        width: 50%;
        float: right;
    }
    .imgicon {
        width: 15%;
        float: left;
        text-align: center;
    }
    .texticon {
        width: 85%;
        float: right;
    }
    
  
    
        .presse {
        width: 100%;
    }
    .zeitung {
        width: 10%;
        float: left;
        text-align: center;
    }
    .date {
        width: 35%;
        float: left;
    }
    .articlelink {
        width: 55%;
        float: right;
    }
    
    
  .slideshow{
    width: 800px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
  }
  .slides{
    width: 500%;
    height: 500px;
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
    width: 800px;
    height: 500px;
  }
  
  /*css for manual slide navigation*/
  
  .navigation-manual{
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }
  .manual-btn{
    width: 50px;
    height: 10px;
    border: 2px solid rgb(0, 0, 0);
    margin: 6px;
    cursor: pointer;
  }
  .manual-btn:not(:last-child){
    margin-right: 40px;
  } 
  .manual-btn:hover{
    background: #000000;
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
    width: 800px;
    justify-content: center;
    margin-top: 460px;
  }
  .navigation-auto div{
    width: 50px;
    height: 10px;
    margin: 6px;
    cursor: pointer;
    border: 2px solid #000000;
    transition: 0.5s;
  } 
  .navigation-auto div:not(:last-child){
    margin-right: 40px;
  }
  
  #radio1:checked ~ .navigation-auto .auto-btn1{
    background: #000000;
  }
  #radio2:checked ~ .navigation-auto .auto-btn2{
    background: #000000;
  }
  #radio3:checked ~ .navigation-auto .auto-btn3{
    background: #000000;
  }
  #radio4:checked ~ .navigation-auto .auto-btn4{
    background: #000000;
  }
  #radio5:checked ~ .navigation-auto .auto-btn5{
    background: #000000;
  }    
    
</style>

[![assets/images/banner.PNG](assets/images/banner.PNG "Zum Kontaktieren hier klicken")](mailto:thilo.klein@zew.de)


---

## Kitaplatzvergabe in 5 Schritten

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
      <img src="assets/images/1_Karten.png" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/2_Karten.png" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/3_Karten.png" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/4_Karten.png" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/5_Karten.png" alt="">
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
  </div>
  <!--manual navigation start-->
  <div class="navigation-manual">
    <label for="radio1" class="manual-btn"></label>
    <label for="radio2" class="manual-btn"></label>
    <label for="radio3" class="manual-btn"></label>
    <label for="radio4" class="manual-btn"></label>
    <label for="radio5" class="manual-btn"></label>
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

## Vorteile im Überblick
<div class="row">
    <div class="columnleft">
        <div class="imgicon">
            <img src="assets/images/icon_schnell.png" alt="dvsbadfy" width="45%">
        </div>
        <div class="texticon">
            <b>SCHNELL</b><br>
            Platzvergabe erfolgt in wenigen Stunden. Unnötige Wartezeiten werden eliminiert.
            <p></p>
        </div>
    </div>
    <div class="columnright">
        <div class="imgicon">
            <img src="assets/images/icon_sparen.png" alt="dvsbadfy" width="45%">
        </div>
        <div class="texticon">
            <b>RESSOURCEN-SPAREND</b><br>
            Effiziente und vereinfachte Prozesse sparen Kosten und Personalaufwand bei Kitas und Jugendamt.
            <p></p>
        </div>
    </div>
</div>

<div class="breakline"></div>

<div class="row">
    <div class="columnleft">
        <div class="imgicon">
            <img src="assets/images/icon_fair.png" alt="dvsbadfy" width="45%">
        </div>
        <div class="texticon">
            <b>FAIR</b><br>
            Eltern werden strategische Abwegungen erspart. Damit entstehen keine unfairen Nachteile für schlechter informierte Eltern.
            <p></p>
        </div>
    </div>
    <div class="columnright">
        <div class="imgicon">
            <img src="assets/images/icon_individuell.png" alt="dvsbadfy" width="45%">
        </div>
        <div class="texticon">
            <b>INDIVIDUALISIERBAR</b><br>
            Jede Stadt ist anders. Unsere Lösungen passen sich Ihren Bedürfnissen an.
            <p></p>
        </div>
    </div>
</div>

<div class="breakline"></div>

<div class="row">
    <div class="columnleft">
        <div class="imgicon">
            <img src="assets/images/icon_transparenz.png" alt="dvsbadfy" width="45%">
        </div>
        <div class="texticon">
            <b>TRANSPARENT</b><br>
            Bestehende Vergabekriterien werden respektiert. Es ist klar nachvollziehbar wer wo warum einen Platz bekommen hat - und wer nicht.
            <p></p>
        </div>
    </div>
    <div class="columnright">
        <div class="imgicon">
            <img src="assets/images/icon_open-source.png" alt="dvsbadfy" width="45%">
        </div>
        <div class="texticon">
            <b>OPEN SOURCE</b><br>
            Software-Lösung ist frei Nutzbar und Modifizierbar. Komplementär zu bestehenden Kita-Verwaltungsplattformen.
            <p></p>
        </div>
    </div>
</div>

<div class="breakline"></div>

---

## Was zeichnet KitaMatch aus?

Entwickelt von einem Team...
 - mit über 10 Jahren Erfahrung mit Platzvergabeverfahren im Bildungsbereich
 - sehr gutem Verständnis für die Bedürfnisse von Eltern, Kitas und Jugendämtern
 - an der Spitze der Forschung im Bereich Marktdesign und Matching-Märkte
 - mit einer Vielzahl erfolgreicher Projekte

---

[PDF-Download](){: .btn .btn-purple }

---

## Gefördert durch

{:style="text-align:center;"}
[![bertelsmann_logo2.png](assets/images/bertelsmann_logo2.png){:height="200px" width="200px"}]()
[![Leibniz_logo2.png](assets/images/Leibniz_logo2.png){:height="200px" width="200px"}]()
[![ZEW_logo2.png](assets/images/ZEW_logo2.png){:height="150px" width="150px"}]()

---

## Unsere Projekte

{:style="text-align:center;"}
[![kreis_steinfurt_logo.png](assets/images/kreis_steinfurt_logo.png){:height="200px" width="200px"}]()
[![Stadt-Kaiserslautern_logo.png](assets/images/Stadt-Kaiserslautern_logo.png){:height="150px" width="150px"}]()


---

## In der Presse

<div class="presse">
    <div class="zeitung">
        <img src="assets/images/wiwo_logo.png" alt="dvsbadfy" width="50%">
    </div>
    <div class="date">
        <b>WirtschaftsWoche</b>
    </div>
    <div class="articlelink">
        <a href="Link-Ziel">Marktdesign: Ökonomie ohne Elfenbeinturm – der neue Kitaalgorithmus</a>
    </div>
</div>

<div class="breakline"></div>

<div class="presse">
    <div class="zeitung">
        <img src="assets/images/faz_logo.png" alt="dvsbadfy" width="30%">
    </div>
    <div class="date">
        <b>Frankfurter Allgemeine Zeitung</b>
    </div>
    <div class="articlelink">
        <a href="Link-Ziel">Gegen den Kita-Frust – wie ein Algorithmus Kitaplätze fairer vergeben soll</a>
    </div>
</div>

<div class="breakline"></div>

<div class="presse">
    <div class="zeitung">
        <img src="assets/images/faz_logo.png" alt="dvsbadfy" width="30%">
    </div>
    <div class="date">
        <b>Frankfurter Allgemeine Zeitung</b>
    </div>
    <div class="articlelink">
        <a href="Link-Ziel">Raus aus der Kita-Warteschlange</a>
    </div>
</div>

<div class="breakline"></div>


---

## Aktuelles

**ZEW Expertise:** [Können Algorithmen eine bessere Kitaplatzvergabe ermöglichen?]()

Im Interview erklärt Marktdesignexperte Prof. Dr. Thilo Klein ein neues Verfahren, das von Ökonomen des ZEW, der Universität Münster und der University of Oxford pilotiert wird, und eine schnelle, faire und transparente Platzvergabe möglich macht. 

**ZEW Pressemitteilung:** [Kitaplätze schnell, fair und transparent mit einem dezentralen Mechanismus vergeben]()

Ein akuter Mangel an Betreuungsplätzen in Kindertagesstätten in Deutschland, komplizierte Anmeldeverfahren und intransparente Vergabekriterien: Das führt zu beruflicher Planungsunsicherheit für Eltern und deren Arbeitgebern, zu Benachteiligungen bildungsferner Haushalte und zu vermeidbarem Verwaltungsaufwand für Kita-Personal.

**ZEW Pressemitteilung:** [ZEW-Förderkreis vergibt erneut Wissenschaftspreise]()

Der ZEW-Förderkreis Wissenschaft und Praxis e.V. zeichnet auch 2020/21 herausragende wissenschaftliche Leistungen und wirtschaftspolitische Beratungsprojekte am ZEW aus. Mit dem Preis für das beste wirtschaftspolitische Beratungsprojekt wurde „KitaMatch“ ausgezeichnet. Das Projektteam entwickelte eine Open Source-Software, um die Kitaplatzvergabe in Deutschland neu zu gestalten.

**ZEW News:** [Wie Städte dem Ansturm auf Kindertagesstätten begegnen können]()

In vielen deutschen Städten ist die Vergabe von freien Plätzen in Kindertagesstätten intransparent und mit erheblichen Kosten für Eltern und Kita-Personal verbunden. Neben dem aktuellen Mangel an Kita-Plätzen führen auch ineffiziente Vergabeverfahren dazu, dass der Mangel größer erscheint, als er tatsächlich ist. Eine Möglichkeit zur flächendeckenden Lösung des Problems wären zentrale Vergabesysteme, die gutes Marktdesign durch den Einsatz von bewährten Algorithmen liefern kann.





