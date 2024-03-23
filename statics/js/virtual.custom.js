$(document).ready(function () {
	$(".navbar-light .dmenu").hover(
		function () {
			$(this).find(".sm-menu").first().stop(true, true).slideDown(150);
		},
		function () {
			$(this).find(".sm-menu").first().stop(true, true).slideUp(105);
		}
	);
});

$(document).ready(function () {
	$(".megamenu").on("click", function (e) {
		e.stopPropagation();
	});
});

// ============ YHome Slider Start ===============
jQuery(document).ready(function () {
	jQuery(".c-slider-init").slick({
	  dots: false,
	  nav: false,
	  arrows: false,
	  infinite: true,
	  speed:1200,
	  autoplaySpeed:3000,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  autoplay: true,
	  draggable: true,
	  pauseOnFocus: false,
	  pauseOnHover: false
	});
  
	jQuery(".slick-current").addClass("initialAnimation");
  
	let transitionSetup = {
	  target: ".slick-list",
	//   enterClass: "u-scale-out",
	  doTransition: function () {
		var slideContainer = document.querySelector(this.target);
		slideContainer.classList.add(this.enterClass);
		jQuery(".slick-current").removeClass("animateIn");
	  },
	  exitTransition: function () {
		var slideContainer = document.querySelector(this.target);
		setTimeout(() => {
		  slideContainer.classList.remove(this.enterClass);
		  jQuery(".slick-current").addClass("animateIn");
		}, 1000);
	  }
	};
  
	var i = 0;
	// On before slide change
	jQuery(".c-slider-init").on(
	  "beforeChange",
	  function (event, slick, currentSlide, nextSlide) {
		if (i == 0) {
		  event.preventDefault();
		  transitionSetup.doTransition();
		  i++;
		} else {
		  i = 0;
		  transitionSetup.exitTransition();
		}
  
		setTimeout(() => {
		jQuery(".slick-current").removeClass("initialAnimation");
		jQuery(".c-slider-init").slick("slickNext");

		}, 3000)

	  }
	);
  });
  



//   Project Tab Js ============
const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => tabClicked(tab));
});

function tabClicked(tab) {
  tabButtons.forEach((tab) => {
    tab.classList.remove("active");
  });
  tab.classList.add("active");

  const contents = document.querySelectorAll(".content");

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  const contentId = tab.getAttribute("content-id");
  const contentSelected = document.getElementById(contentId);

  contentSelected.classList.add("show");
  //console.log(contentId)
}


// Project Slider  Js ================

$(document).ready(function() {
    $(".project_slider").owlCarousel({
        items : 3,
        itemsDesktop:[1399,4],
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true
    });
});
  

  