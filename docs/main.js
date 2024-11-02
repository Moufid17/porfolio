/*==== MENU SHOW ====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*==== ACTIVE AND REMOVE MENU ====*/
const navLink = document.querySelectorAll('.nav__link') /* NEW: Get All element with this classname */

function linkAction(){
    //  Active link
    navLink.forEach(n => n.classList.remove('active')) /*Apply method remove class for each n in navLink*/
    this.classList.add('active') /* then add it to current*/
    
    //  Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show') /*Remove nav after click on one nav item*/
}

navLink.forEach(n => n.addEventListener('click',linkAction)) /*Method linkAction include with Event click for current navLink*/

/*==== SCROLL REVEAL ANIMATION ====*/
const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*==== SCROLL HOME ====*/
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home__social-icon',{interval:200})

/*==== SCROLL ABOUT ====*/
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay:200})
sr.reveal('.about__text',{delay:400})

/*==== SCROLL SKILLS ====*/
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay:200})
sr.reveal('.skills__data',{delay:200})
sr.reveal('.skills__img',{delay:400})

/*==== SCROLL WORK ====*/
sr.reveal('.work__img',{interval:200})

/*==== SCROLL CONTACT ====*/
sr.reveal('.contact__input',{interval:200})

/*==== SWITCH MODE ====*/

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light");
}

var icon = document.getElementById("mode__icon");
let localData = localStorage.getItem("theme");

if(localData == "light"){
    icon.src = "assets/img/moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
    icon.src = "assets/img/sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src = "assets/img/sun.png";
        localStorage.setItem("theme", "dark");
    }else{
        icon.src = "assets/img/moon.png";
        localStorage.setItem("theme", "light");
    }
}
            
