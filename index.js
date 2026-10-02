// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


// =============================
// INITIAL PAGE LOAD ANIMATION
// =============================

const introTimeline = gsap.timeline();


// Small heading
introTimeline.from(".small-text", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: "power3.out"
});


// Main heading
introTimeline.from(".hero-title", {
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: 1.2,
    ease: "power4.out"
}, "-=0.3");


// Description
introTimeline.from(".hero-description", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: "power3.out"
}, "-=0.6");


// Statistics one by one
introTimeline.from(".stat", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.18,
    ease: "power3.out"
}, "-=0.3");


// Car initial animation
introTimeline.from(".car-container", {
    opacity: 0,
    scale: 0.7,
    y: 100,
    duration: 1.3,
    ease: "power3.out"
}, "-=0.8");


// =============================
// SCROLL-DRIVEN CAR ANIMATION
// =============================

gsap.to(".car-container", {

    // Move horizontally
    x: 250,

    // Move vertically
    y: -180,

    // Make the car slightly bigger
    scale: 1.25,

    // Rotate slightly
    rotation: 8,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1,

        // markers: true
    }

});


// =============================
// HERO TITLE SCROLL ANIMATION
// =============================

gsap.to(".hero-title", {

    y: -120,

    opacity: 0.25,

    scale: 0.9,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1
    }

});


// =============================
// BACKGROUND CIRCLE
// =============================

gsap.to(".circle-1", {

    scale: 1.5,

    rotation: 120,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1.5
    }

});


gsap.to(".circle-2", {

    scale: 0.8,

    rotation: -90,

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 2
    }

});