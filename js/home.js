
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      
      content.style.maxHeight = null;
    } else {
      
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;
    }
  }
}




const about = document.querySelector("#about h1");
const aboutP = document.querySelector("#about p");
const sectionAbout = document.querySelector("#about");

const sectionAboutOptions = {
  
  threshold: 0.4
   
};

var sectionAboutObserver = new IntersectionObserver(function(
  entries,
  sectionAboutObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
     
         
         about.classList.remove('fade');
         aboutP.classList.remove('fade');
    } else {
       
       
     about.classList.add('fade');
      aboutP.classList.add('fade');
      
    }
  });
},
sectionAboutOptions);

sectionAboutObserver.observe(sectionAbout);


const bike = document.querySelector(".bike-container");
const kayak = document.querySelector(".kayak-container");
const sectionActivities = document.querySelector("#activities");

const sectionActivitiesOptions = {

  threshold: 0.4
   
};

var sectionActivitiesObserver = new IntersectionObserver(function(
  entries,
  sectionActivitiesObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
     
         
         bike.classList.remove('scrolled');
         kayak.classList.remove('scrolled');
          
    } else {
       
       
     bike.classList.add('scrolled');
     kayak.classList.add('scrolled');
     sectionActivitiesObserver.unobserve(entry.target);
      
      
    }
  });
},
sectionActivitiesOptions);

sectionActivitiesObserver.observe(sectionActivities);



const nav_2 = document.querySelector(".navbar a:nth-child(2)");
const sectionTwo = document.querySelector("#about");

const sectionTwoOptions = {
  threshold: 0.4
   
};

var sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
     
         nav_2.style.color = 'white';

    } else {
       
       
     
      nav_2.style.color = '#358a30';
    }
  });
},
sectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);


const nav_3 = document.querySelector(".navbar a:nth-child(3)");
const sectionThree = document.querySelector("#activities");

const sectionThreeOptions = {
      threshold: 0.3
    
};

var sectionThreeObserver = new IntersectionObserver(function(
  entries,
  sectionThreeObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
       
      nav_3.style.color = 'white';
        

    } else {
       
    

      nav_3.style.color = '#358a30';
    }
  });
},
sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);


const nav_4 = document.querySelector(".navbar a:nth-child(4)");
const sectionFour = document.querySelector("#location");

const sectionFourOptions = {
      threshold: 0.3
    
};

var sectionFourObserver = new IntersectionObserver(function(
  entries,
  sectionFourObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
       
      nav_4.style.color = 'white';
        

    } else {
       
    

      nav_4.style.color = '#358a30';
    }
  });
},
sectionFourOptions);

sectionFourObserver.observe(sectionFour);


const nav_5 = document.querySelector(".navbar a:nth-child(5)");
const sectionFive = document.querySelector("#testimonial");

const sectionFiveOptions = {
      threshold: 0.3
    
};

var sectionFiveObserver = new IntersectionObserver(function(
  entries,
  sectionFiveObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
       
      nav_5.style.color = 'white';
        

    } else {
       
    

      nav_5.style.color = '#358a30';
    }
  });
},
sectionFiveOptions);

sectionFiveObserver.observe(sectionFive);