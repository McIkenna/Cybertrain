

  const dash = document.querySelector('.dash');
  const nav = document.querySelector('.nav-inner');
  const navlinks = document.querySelectorAll('.nav-inner li');

  dash.addEventListener('click', event => {
  nav.classList.toggle('nav-active');
  navlinks.forEach((link, index) => {
  	if(link.style.animation){
  		link.style.animation = '';

      }else {
      	link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
      }
  });
  dash.classList.toggle('toggle');
});

window.addEventListener("click", function(event){
	if(event.target == nav){
		console.log('clicked');
		nav.style.display = "none";
	}
});

 window.addEventListener("scroll", function(){
 var navbar = document.querySelector(".nav-div");
 navbar.classList.toggle(".nav-div-sticky", window.scrollY > 0);
 console.log('scroll');
  });

  const accordionTitle = document.querySelectorAll(".accordion-title");
    accordionTitle.forEach(accordionTitle =>{
            accordionTitle.addEventListener("click", event => {
            const OpenAccordion = document.querySelector(".accordion-title.active");
            if(OpenAccordion && OpenAccordion !== accordionTitle){
                OpenAccordion.classList.toggle("active");
                OpenAccordion.nextElementSibling.style.maxHeight = 0;
                }
                accordionTitle.classList.toggle("active");
                const accordionBody = accordionTitle.nextElementSibling;
                if(accordionTitle.classList.contains("active")){
                    accordionBody.style.maxHeight =  accordionBody.scrollHeight + "px";
                    }
                    else{
                    accordionBody.style.maxHeight = 0;
                    }
                });
            });