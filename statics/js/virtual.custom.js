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
  


//Home CounterUp ========================
$('.counter').counterUp({
  delay: 30,
  time: 3000
});