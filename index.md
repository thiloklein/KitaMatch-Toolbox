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
        width: 25%;
        float: left;
    }
    .articlelink {
        width: 65%;
        float: right;
    }
    
    
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
  
.tooltip-wrap {
  position: relative;
}
.tooltip-wrap .tooltip-content {
  display: none;
  position: absolute;
  bottom: 7%;
  left: 65%;
  right: 5%;
  text-align: right;
  background-color: rgb(137, 69, 137);
  color: white;
  font-size: small;
  padding: 0.5%;
}
.tooltip-wrap:hover .tooltip-content {
  display: block;
}
</style>

<div class="tooltip-wrap">
  <a href="mailto:thilo.klein@zew.de"><img src="assets/images/banner2.PNG" alt="Banner" title="Zum Kontaktieren hier klicken" /></a>
<div class="tooltip-content">
  Bildnachweis: iStock.com/Kamaga
</div> 
</div> 

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
      <img src="assets/images/1_Screen.PNG" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/2_Screen.PNG" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/3_Screen.PNG" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/4_Screen.PNG" alt="">
    </div>
    <div class="slide">
      <img src="assets/images/5_Screen.PNG" alt="">
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
[Fact Sheet - Kitas](){: .btn .btn-purple } 
[Fact Sheet - Jugendamt](){: .btn .btn-purple }

---

## Gefördert durch

{:style="text-align:center;"}
[![bertelsmann_small.JPG](assets/images/bertelsmann_small.JPG){:width="30%"}](https://www.bertelsmann-stiftung.de/de/startseite)
[![Leibniz_small.JPG](assets/images/Leibniz_small.JPG){:width="30%"}](https://www.leibniz-gemeinschaft.de/)
[![ZEW_small.JPG](assets/images/ZEW_small.JPG){:width="30%"}](https://www.zew.de/)

---

## Unsere Projekte

{:style="text-align:center;"}
[![kreis_steinfurt_logo.png](assets/images/kreis_steinfurt_logo.png){:height="200px" width="200px"}](https://www.kreis-steinfurt.de/kv_steinfurt/Home/)
[![Stadt-Kaiserslautern_logo.png](assets/images/Stadt-Kaiserslautern_logo.png){:height="150px" width="150px"}](https://www.kaiserslautern.de/)


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
        <a href="https://www.wiwo.de/politik/deutschland/hilfreiche-software-kita-match-ein-kitaplatz-per-algorithmus/27890190.html">„Kita-Match“: Ein Kitaplatz per Algorithmus</a>
    </div>
</div>

<div class="breakline"></div>

<div class="presse">
    <div class="zeitung">
        <img src="assets/images/wiwo_logo.png" alt="dvsbadfy" width="50%">
    </div>
    <div class="date">
        <b>WirtschaftsWoche</b>
    </div>
    <div class="articlelink">
        <a href="https://www.wiwo.de/my/politik/konjunktur/vwl-marktdesign-oekonomie-ohne-elfenbeinturm/25470414.html?ticket=ST-14212654-6IVplpejhVf9Uz4Iv59q-ap1">Marktdesign: Ökonomie ohne Elfenbeinturm – der neue Kitaalgorithmus</a>
    </div>
</div>

<div class="breakline"></div>

<div class="presse">
    <div class="zeitung">
        <img src="assets/images/faz_logo.png" alt="dvsbadfy" width="30%">
    </div>
    <div class="date">
        <b>FAZ</b>
    </div>
    <div class="articlelink">
        <a href="https://www.faz.net/aktuell/wirtschaft/wie-ein-algorithmus-kitaplaetze-fairer-vergeben-soll-16510418.html">Gegen den Kita-Frust – wie ein Algorithmus Kitaplätze fairer vergeben soll</a>
    </div>
</div>

<div class="breakline"></div>

<div class="presse">
    <div class="zeitung">
        <img src="assets/images/faz_logo.png" alt="dvsbadfy" width="30%">
    </div>
    <div class="date">
        <b>FAZ</b>
    </div>
    <div class="articlelink">
        <a href="https://www.faz.net/aktuell/wirtschaft/kinderbetreuung-raus-aus-der-kita-warteschlange-15053793.html">Raus aus der Kita-Warteschlange</a>
    </div>
</div>

<div class="breakline"></div>


---

## Aktuelles

**ZEW Expertise:** [Können Algorithmen eine bessere Kitaplatzvergabe ermöglichen?](https://www.zew.de/das-zew/aktuelles/koennen-algorithmen-eine-bessere-kitaplatzvergabe-ermoeglichen)

Im Interview erklärt Marktdesignexperte Prof. Dr. Thilo Klein ein neues Verfahren, das von Ökonomen des ZEW, der Universität Münster und der University of Oxford pilotiert wird, und eine schnelle, faire und transparente Platzvergabe möglich macht. 

**ZEW Pressemitteilung:** [Kitaplätze schnell, fair und transparent mit einem dezentralen Mechanismus vergeben](https://www.zew.de/presse/pressearchiv/kitaplaetze-schnell-fair-und-transparent-mit-einem-dezentralen-mechanismus-vergeben)

Ein akuter Mangel an Betreuungsplätzen in Kindertagesstätten in Deutschland, komplizierte Anmeldeverfahren und intransparente Vergabekriterien: Das führt zu beruflicher Planungsunsicherheit für Eltern und deren Arbeitgebern, zu Benachteiligungen bildungsferner Haushalte und zu vermeidbarem Verwaltungsaufwand für Kita-Personal.

**ZEW Pressemitteilung:** [ZEW-Förderkreis vergibt erneut Wissenschaftspreise](https://www.zew.de/das-zew/aktuelles/zew-foerderkreis-vergibt-erneut-wissenschaftspreise)

Der ZEW-Förderkreis Wissenschaft und Praxis e.V. zeichnet auch 2020/21 herausragende wissenschaftliche Leistungen und wirtschaftspolitische Beratungsprojekte am ZEW aus. Mit dem Preis für das beste wirtschaftspolitische Beratungsprojekt wurde „KitaMatch“ ausgezeichnet. Das Projektteam entwickelte eine Open Source-Software, um die Kitaplatzvergabe in Deutschland neu zu gestalten.

**ZEW News:** [Wie Städte dem Ansturm auf Kindertagesstätten begegnen können](https://www.zew.de/das-zew/aktuelles/wie-staedte-dem-ansturm-auf-kindertagesstaetten-begegnen-koennen)

In vielen deutschen Städten ist die Vergabe von freien Plätzen in Kindertagesstätten intransparent und mit erheblichen Kosten für Eltern und Kita-Personal verbunden. Neben dem aktuellen Mangel an Kita-Plätzen führen auch ineffiziente Vergabeverfahren dazu, dass der Mangel größer erscheint, als er tatsächlich ist. Eine Möglichkeit zur flächendeckenden Lösung des Problems wären zentrale Vergabesysteme, die gutes Marktdesign durch den Einsatz von bewährten Algorithmen liefern kann.





