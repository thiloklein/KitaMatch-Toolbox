---
layout: default
title: how to
nav_order: 7
permalink: /docs/how-to
---

## How to design this markdown website

...

---

<style type="text/css">

    #slider {
        overflow: hidden;
    }

    #slider figure {
        position: relative;
        width: 500%;
        margin: 0;
        left: 0;
        animation: 20s slider infinite;
    }

    #slider figure img {
        float: left;
        width: 20%;
    }

    @keyframes slider {
        0% {
            left: 0;
        }
        18% {
            left: 0;
        }
        20% {
            left: -100%;
        }
        38% {
            left: -100%;
        }
        40% {
            left: -200%;
        }
        58% {
            left: -200%;
        }
        60% {
            left: -300%;
        }
        78% {
            left: -300%;
        }
        80% {
            left: -400%;
        }
        98% {
            left: -400%;
        }
        100% {
            left: -500%;
        }
    }
</style>
<div id="slider">
        <figure>
            <img src="../assets/images/1.png">
            <img src="../assets/images/2.png">
            <img src="../assets/images/3.png">
            <img src="../assets/images/4.png">
            <img src="../assets/images/5.png">
        </figure>
    </div>

---

Video, das automatisch startet und in Dauerschleiche läuft:
<div style="width: 100%;">
<video src="../assets/images/time.mp4" type="mp4/video" width="100%" autoplay="autoplay" loop="loop" controls="controls"></video> 
</div>


Video, das automatisch startet und in Dauerschleiche läuft:
<div style="width: 100%;">
<video src="../assets/images/time.mp4" type="mp4/video" width="640" height="480" style="max-width:500px;" autoplay="autoplay" loop="loop" controls="controls"></video> 
</div>

---

### Bilder hinzufügen

![small-image.jpg](../assets/images/small-image.jpg)
<br>
<b>Just a small image with a caption</b>


{:style="text-align:center;"}
![small-image.jpg](../assets/images/small-image.jpg)
<br>
<b>Centering image and caption</b>


{:style="text-align:center;"}
![small-image.jpg](../assets/images/small-image.jpg){:height="36px" width="36px"}
![small-image.jpg](../assets/images/small-image.jpg){:height="36px" width="36px"}
<br>
<b>Centering multiple images and changing  the size</b>

---

### Fußnoten

Im Fließtext [^1] können Sie ganz einfach Fußnoten [^2] unterbringen.

[^1]: Hier finden Sie den Text zu der Fußnote.
[^2]: **Fußnoten** selbst können auch *formatiert* werden.

---

### Links

[Hyperlink](http://www.kreis-soest.de/familie_soziales/familie/betreuung/kita/kita_karte.php) oder [Interner Link](Verzeichnis angeben)

---
