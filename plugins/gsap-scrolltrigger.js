import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/scrolltrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".horizontal-scroll",
    start: "top top",
    end: "300% top", // 3ページ分の幅とする
    pin: true,
    scrub: true,
    horizontal: true
});
