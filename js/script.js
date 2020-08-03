const line1 = document.querySelector('.l1');
const line2 = document.querySelector('.l2');
const line3 = document.querySelector('.l3');
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const services = document.querySelector('#services');



function toggler() {
  toggle.classList.toggle('close');
  menu.classList.toggle('active');
}
let scrollPageTo = (to, duration = 1000) => {
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  const easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  return new Promise((resolve, reject) => {
    const element = document.scrollingElement;

    if (typeof to === 'string') {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }

    let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    const animateScroll = function () {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    };
    animateScroll();
  });
}


let first = (localStorage.getItem("first") === null) ? true : localStorage.getItem("first");
if (first == true) {
  setTimeout(() => {
    if (first) {
      window.onload = whenOnload();
      localStorage.setItem('first', 'false');
    }
  }, 5300);
}
else {
  whenOnload();
}
function whenOnload() {
  console.log("Loaded");
  document.querySelector(".preload-cont").style.display = "none";
  document.querySelector("body").style.overflow = "visible";
}