
const navbarCollapse = document.getElementById("navbarCollapse");
const navbarNav = document.getElementById("navbarNav");

navbarCollapse.addEventListener("click",function(e){
  e.preventDefault();

  if (navbarNav.classList.contains("hidden")) {
    navbarNav.classList.remove("hidden");
    navbarNav.classList.add("show");
  }else{
    navbarNav.classList.remove("show");
    navbarNav.classList.add("hidden");

  }
})

const skillProgress = document.querySelectorAll(".myskill-bar");

for (let i = 0; i < skillProgress.length; i++) {
  skillProgress[i].style.width = skillProgress[i].getAttribute("data-bar")+"%";
  
}

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll(".nav-link");

window.onscroll= () =>{
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 100;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if(top >= offset && top < offset + height){
      menu.forEach((link) => {
        link.classList.remove("active");
        document.querySelector("a.nav-link[href*=" + id + "]").classList.add("active");
      })
    }

  })
}

function reveal(){
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }else{
      reveals[i].classList.remove("active");

    }
    
  }
}

window.addEventListener("scroll",reveal);

reveal();

