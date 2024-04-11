$('.menu-icon').click(function () {
    $('.item-center').toggleClass("active");
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    // console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

const images = gsap.utils.toArray(".journey__card-wrap .journey__card");
let endSize = 700;
const endTime = endSize * images.length;

// const listItems = gsap.utils.toArray(".desktop-stacked .panel__options span");
let startPos = "150px";
mm.add("(min-width: 992px)", () => {
    gsap.set(".journey__card-wrap", {
        height: () => {
            //const offset = 20; // same as CSS on line 203 --spacer
            const cards = document.querySelectorAll(".journey__card-wrap .journey__card"); // get all cards
            const height = cards[0].offsetHeight; // get the height of the card
            return height + cards.length; //* offset; // cacludate how heigh the container should be height of card + offset times number of cards.
        },
    });


    gsap.set(".journey__card-wrap .journey__progress li:nth-child(1)", { scale: 1.5, backgroundColor: "#FFDE13", color: "#191D27" });

    let tl = gsap.timeline({
        //  yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: ".journey__card-wrap",
            fastScrollEnd: true,
            pin: true, // pin the trigger element while active
            start: `0% ${startPos}`, // when the top of the trigger hits the top of the viewport
            end: `'+=${endTime}px'`,
            pinSpacing: true,
            scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: false,
        },
    });

    tl.from(".journey__card-wrap .journey__card:nth-child(2)", { y: () => window.innerHeight }, 'a');

    tl.set(".journey__card-wrap .journey__progress li:nth-child(1)", { scale: 1, backgroundColor: "#252B38", color: "#FFFFFF" }, "-=.1");
    tl.set(".journey__card-wrap .journey__progress li:nth-child(2)", { scale: 1.5, backgroundColor: "#FFDE13", color: "#191D27" }, "-=.1");

    tl.to(".journey__card-wrap .journey__card:nth-child(1)", { scale: 0.8, duration: 0.3, transformOrigin: "top" }, 'a');


    tl.from(".journey__card-wrap .journey__card:nth-child(3)", { y: () => window.innerHeight }, 'b');

    tl.set(".journey__card-wrap .journey__progress li:nth-child(2)", { scale: 1, backgroundColor: "#252B38", color: "#FFFFFF" }, "-=.1");
    tl.set(".journey__card-wrap .journey__progress li:nth-child(3)", { scale: 1.5, backgroundColor: "#FFDE13", color: "#191D27" }, "-=.1");

    tl.to(".journey__card-wrap .journey__card:nth-child(2)", { scale: 0.8, duration: 0.3, transformOrigin: "top" }, 'b');
});

mm.add("(min-width: 1365px)", () => {
    endSize = 500;
});