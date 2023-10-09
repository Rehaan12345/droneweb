// ********** Animating items on scroll: ********** //
// Intersection observer (source link: https://www.youtube.com/watch?v=T33NN_pPeNI&t=199s)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
})

/*
// ********* Header Animation: ********** //
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
})
*/            

// ********** GSAP Animations: ********** //
gsap.registerPlugin(ScrollTrigger);

/*
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".dronepictrigger",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "restart none none none",
        pin: ".dronepic",
        markers: true
    }
});

tl.to(".dronepic", {x: 500, y:200, duration: 3});
tl.to(".dronepic", {y:-50, duration: 1})
tl.to(".dronepic", {x:-100, y:-10, duration: 1})
tl.to(".dronepic", {x:-15, y: 50, duration: 1})
*/

gsap.to(".dronepic", {
    x: 700,
    duration: 5,
    scrollTrigger: {
        trigger: ".dronepictrigger",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
        toggleActions: "restart none none none",
        pin: ".dronepic",
        markers: true
    }
}); 
