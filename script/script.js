$('.menu-icon').click(function () {
    $('.item-center').toggleClass("active");
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


gsap.registerPlugin(ScrollToPlugin);