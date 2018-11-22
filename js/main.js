const home = document.querySelector('.home');
const bubble1 = document.querySelector('.bubble1');
const bubble2 = document.querySelector('.bubble2');
const bubble3 = document.querySelector('.bubble3');
const nav = document.querySelector('nav');

function moveBubbles(e) {
    let valueX = (e.pageX * - 1);    
    let valueY = (e.pageY * - 1);
    
    bubble1.style.transform = `translate3d(${valueX / 30}px, ${valueY / 20}px, 0)`;
    bubble2.style.transform = `translate3d(${valueX / 15}px, ${valueY / 20}px, 0)`;
}

const homeOffset = home.offsetTop;
let lastScrollTop;

function onScroll() {    
    let currentScrollTop = this.scrollY;
    
    if (currentScrollTop > 80) {
        nav.classList.add("hidden");
        nav.style.top = "5px";
        nav.style.border = "2px solid #263238";
        if(currentScrollTop < lastScrollTop) {
            nav.classList.remove("hidden");
        }
    }
    else {
        nav.style.top = "0px";
        nav.style.border = "0";
        nav.classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop;
    
}


window.addEventListener('scroll', onScroll)
home.addEventListener('mousemove', moveBubbles);
