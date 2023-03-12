// click function
let menu = document.querySelector(".menu i");
menu.addEventListener("click", function(){
  menu.classList.toggle("uil-times");
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
})

//scroll function
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header .navbar li a");
window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offSet = section.offsetTop - 150;
    console.log(offSet);
    let Height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offSet && top < offSet + Height) {
       navLinks.forEach(link =>{
        link.classList.remove("active");
        document.querySelector(".header .navbar li a[href*=" + id + "]").classList.add("active");
      });
    };
  });
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100)
};

// javascript code for typing effect
var typed = new Typed('.typing', {
    strings: ['Brand Designer', 'UI/UX Designer', 'Graphic Designer.'],
  typeSpeed: 70,
  backSpeed: 25,
  loop: true
});

// javascript code for animate on scroll effect
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// javascript code for mouse follower effect
const cursor = new MouseFollower({
    container: '.container',
    speed: 0.3
});