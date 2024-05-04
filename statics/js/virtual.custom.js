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


const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu-inner");
const menuArrow = menu.querySelector(".menu-arrow");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

// Navbar Menu Toggle Function
function toggleMenu() {
   menu.classList.toggle("is-active");
   overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
   subMenu = children.querySelector(".submenu");
   subMenu.classList.add("is-active");
   subMenu.style.animation = "slideLeft 0.35s ease forwards";
   const menuTitle = children.querySelector("i").parentNode.childNodes[0]
      .textContent;
   menu.querySelector(".menu-title").textContent = menuTitle;
   menu.querySelector(".menu-header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.35s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("is-active");
   }, 300);

   menu.querySelector(".menu-title").textContent = "";
   menu.querySelector(".menu-header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
   if (!menu.classList.contains("is-active")) {
      return;
   }
   if (e.target.closest(".menu-dropdown")) {
      const children = e.target.closest(".menu-dropdown");
      showSubMenu(children);
   }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 992) {
      if (menu.classList.contains("is-active")) {
         toggleMenu();
      }
   }
});



// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);



// Custom PreLoader Js-----------------
$(document).ready(preloderFunction());

function preloderFunction() {
  setTimeout(function () {
    // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)

    // Model 1 - Fast
    document.getElementById("page-top").scrollIntoView();

    // Model 2 - Smooth
    // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});

    // Removing Preloader:

    $("#ctn-preloader").addClass("loaded");
    // Once the preloader has finished, the scroll appears
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      // It is so that once the preloader is gone, the entire preloader section will removed
      $("#preloader")
        .delay(1000)
        .queue(function () {
          $(this).remove();

          // If you want to do something after removing preloader:
          afterLoad();
        });
    }
  }, 3000);
}

function afterLoad() {
  // After Load function body!
}

//Code by Mohammad Rahat





//   Project Tab Js ===================
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
  


//Home CounterUp ========================
$('.counter').counterUp({
  delay: 30,
  time: 3000
});