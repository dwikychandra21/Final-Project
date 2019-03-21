const home = document.querySelector('header + div');
const bubble1 = document.querySelector('.bubble1');
const bubble2 = document.querySelector('.bubble2');
const bubble3 = document.querySelector('.bubble3');
const nav = document.querySelector('nav');
const backdrop = document.querySelector('.backdrop');
const certificatesBtn = document.querySelectorAll('.certificate-desc button');
const closesBtn = document.querySelectorAll('.close-button');

let modalTarget;

function moveBubbles(e) {
    let valueX = (e.pageX * - 1);    
    let valueY = (e.pageY * - 1);
    
    bubble1.style.transform = `translate3d(${valueX / 30}px, ${valueY / 20}px, 0)`;
    bubble2.style.transform = `translate3d(${valueX / 15}px, ${valueY / 20}px, 0)`;
}

// const homeOffset = home.offsetTop;
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

function showModal(e) {
    modalTarget = document.querySelector(`#${e.target.dataset.modal}`);
    modalTarget.classList.add('show');
    backdrop.style.display = 'block';
}

function closeModal() {
    modalTarget.classList.remove('show');
    backdrop.style.display = 'none';
}

window.addEventListener('scroll', onScroll)
home.addEventListener('mousemove', moveBubbles);
certificatesBtn.forEach(certificateBtn => {
    certificateBtn.addEventListener('click', showModal);
});
closesBtn.forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModal);
});
backdrop.addEventListener('click', closeModal);