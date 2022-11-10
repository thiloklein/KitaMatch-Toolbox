---
layout: default
title: Referenzen
nav_order: 10
permalink: /docs/Referenzen
---

  <style>
    .slider {
        position: relative;
        width: 100%;
        margin: 5%;
        overflow: hidden;
        border-radius: 2%;
    }
    .slider .slide {
        position: absolute;
        width: 100%;
        height: 100%;
        clip-path: circle(0% at 0 50%);
    }
    .slider .slide.active{
        clip-path: circle(150% at 0 50%);
        transition: 2s;
    }
    .slider .slide img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .navigation {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    .slider:hover .navigation{
        opacity: 1;
    }
    .prev-btn, .next-btn {
        z-index: 999;
        font-size: 2em;
        color: purple;
        background: rgba(255, 255, 255, 0.8);
        padding: 2%;
        cursor: pointer;
    }
    .prev-btn{
        border-top-right-radius: 0.5%;
        border-bottom-right-radius: 0.5%;
    }
    .prev-btn{
        border-top-left-radius: 0.5%;
        border-bottom-left-radius: 0.5%;
    }
    .navigation-visibility{
        z-index: 999;
        display: flex;
        justify-content: center;
    }
    .navigation-visibility .slide-icon{
        z-index: 999;
        background: rgba(255, 255, 255, 0.5);
        width: 5%;
        height: 3%;
        transform: translateY(-10%);
        margin: 0 6px;
        border-radius: 2px;
        box-shadow: 0 5px 25px rgb(1 1 1 / 20%);
    }
    .navigation-visibility .slide-icon.active{
        background: purple;
    }

  </style>


<div class="slider">
    <div class="slide active">
       <img src="1_Screen.png" alt="">
    </div>
    <div class="slide">
        <img src="2_Screen.png" alt="">
    </div>
    <div class="slide">
        <img src="3_Screen.png" alt="">
    </div>
    <div class="slide">
        <img src="4_Screen.png" alt="">
    </div>
    <div class="slide">
        <img src="5_Screen.png" alt="">
    </div>

    <div class="navigation">
        <i class="fas fa-chevron-left prev-btn"></i>
        <i class="fas fa-chevron-right next-btn"></i>
    </div>
    <div class="navigation-visibility">
        <div class="slide-icon active"></div>
        <div class="slide-icon"></div>
        <div class="slide-icon"></div>
        <div class="slide-icon"></div>
        <div class="slide-icon"></div>
    </div>
</div>

<script type="text/javascript">
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber--;

        if(slideNumber < 0){
            slideNumber = (numberOfSlides - 1);
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    });

    //image slider auto play
    var playSlider;

    var repeater = () => {
        playSlider = setInterval(function(){
            slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
        }, 4000);
    }
    repeater();

    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
        clearInterval(playslider);
    });

    //start the image slider autoplay again when mouseout
    slider.addEventListener("mouseout", () => {
        repeater();
    });
</script>



# Referenzen

Reischmann/Klein/Giegerich (2021). *An iterative deferred acceptance mechanism for decentralized, fast, and fair childcare assignment, Journal of Mechanism and Institution Design, volume 5. (im Erscheinen)*

Gretschko/Klein/Wambach (2019). *Die Regeln machen den Unterschied: Marktdesign, Wirtschaftswissenschaftliches Studium, 48(4): 22-28.*

Fugger/Klein/Riehm (2017). Dezentrale Kitaplatzvergabe ohne Warteschlange: *Ein Leitfaden, ZEW policy brief no. 17-04.*

Herzog/Klein (2017). Matching Practices for Childcare in Germany, *Matching-in-Practice Country Profile no. 26.*

Gale, David, and Lloyd S. Shapley. "College admissions and the stability of marriage." *The American Mathematical Monthly 69.1 (1962): 9-15.*
