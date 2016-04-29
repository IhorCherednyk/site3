$(document).ready(function() {


	// http://codepen.io/CreativeJuiz/pen/oCBxz готовое меню
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	// Скролит в самый низ при клике
	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".arrow-bottom").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+150 }, "slow");
		return false;
	});

	$(".main-bottom").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});



	$(".section-content .info-item").equalHeights();
	$(".s1-bottom .info-item").equalHeights();
	$(".s2-items .s2-item").equalHeights();

	// WAYPOINT
	$(".section_4 h2").waypoint(function(){
		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");	
			}, 150*index);
		});

	}, {
		offset: "25%"
	});

	$(".section_6 h2").waypoint(function(){
		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("team-off").addClass("team-on");	
			}, 150*index);
		});

	}, {
		offset: "25%"
	});

	$(".section_5 h2").waypoint(function(){
		$(".section_5 .tc-item").each(function(index) {
			var ths = $(this);
			setTimeout(function() {
				var myAnimation = new DrawFillSVG({
					elementId: "tc-svg" + index
				});			
				ths.removeClass("").addClass("");	
			}, 600*index);
		});

		this.destroy();

	}, {
		offset: "25%"
	});

	// Карусель
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		fluidSpeed : 2000,
		autoplaySpeed : 2000,
		navSpeed : 1000,
		dotsSpeed : 1000,
		dragEndSpeed : 1000
	});

	$(".seaction-head h2, .seaction-head p").animated("fadeInDown")
	$(".info-item-wrapp").animated("zoomIn")
	$(".slider .slide").animated("fadeIn");
	$(".homesect.section_8 .forms").animated("fadeInRight");

	$(".section_2").waypoint(function() {
		$(".s2-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});

	$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "30%"
	});
	// POPUP
	$('.section-bottom .buttons').magnificPopup({
		type:'inline'
	});

	// Медленная прорисовка свг 1.присвоить свг id 2. stroke:#f39f18;stroke-width:5px добавить в конец обводку
	// var myAnimation = new DrawFillSVG({
	// 	elementId: "tc-svg1"
	// });


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback Замена свг на имж 
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
