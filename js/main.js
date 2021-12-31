const hamburger = document.querySelector(".hamburger");
const icon = document.querySelector(".x");
const navBar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar a");


hamburger.addEventListener("click", () => {
	icon.classList.add('show');
  navBar.classList.add("open");
  	hamburger.classList.add("hide");

  links.forEach(link => {
    link.classList.add("fade");
  });


});
icon.addEventListener('click', () => {
	icon.classList.remove('show');
	hamburger.classList.remove("hide");
	navBar.classList.remove("open");

	links.forEach(link => {
    link.classList.remove("fade");
   

  });
});

document.querySelectorAll('a').forEach(item => {
  item.addEventListener('click', event => {
    icon.classList.remove('show');
  hamburger.classList.remove("hide");
     navBar.classList.remove("open");

  })
})

// Change on scroll

const navContainer = document.querySelector(".navContainer");
const header = document.querySelector("#Home");

const headerOptions = {
   
     threshold: 0.3

};

var headerObserver = new IntersectionObserver(function(
  entries,
  headerObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
     
        navContainer.classList.add('scrolled');

    } else {
       
      navContainer.classList.remove('scrolled');
      
    }
  });
},
headerOptions);

headerObserver.observe(header);



const nav_1 = document.querySelector(".navbar a:nth-child(1)");
const sectionOne = document.querySelector("#Home");

const sectionOneOptions = {
   
     threshold: 0.3



};

var sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
     
        nav_1.style.color = 'white';

    } else {
       
       nav_1.style.color = '#358a30';
      
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);





