$(function() {

	navbar();

	$(document).ready(function(){

		$('#marque').stop();
		$('.store li a').attr('data-modal-id','store_pop');
		$('.store li a').attr('class','pop_btn');
		$('#section5 a').attr('class','pop_btn');

		$(window).on('resize', function(){
			if($(window).width() < 1025){
				$('html').removeClass('on');
				$('.tabs > ul').removeClass('is-expanded');
				if($('nav').css("display") == "block"){
					$('html').addClass('on');
				}
			}
		});

		// 전체메뉴
		$('.navbar_toggle a').click(function(){
			$('.navbar_toggle').toggleClass('navbar_on');
			$('nav').slideToggle('1000');
			$('nav').removeClass('nav_hide');

			if($('.navbar_toggle').hasClass('navbar_on')){
				$('#fp-nav').css('z-index', '-1');
				$('html').addClass('on');
				$('body').css('overflow-y', 'hidden');
				$('html').on('scroll touchmove mousewheel', function(event){
				  event.preventDefault();
				  event.stopPropagation();
				  return false;
				});
			}else{
				if($(window).width() < 1025){
					$('html').removeClass('on');
				}
				$('#fp-nav').css('z-index', '1');
				$('html').off('scroll touchmove mousewheel');
				$('body.page').css('overflow-y', 'auto');
			}
		});

		// 전체메뉴 이벤트
		$("#gnb a").on("click", function (){
			$('.navbar_toggle').toggleClass('navbar_on');
			$('nav').slideToggle('1000');
			$('nav').removeClass('nav_hide');
			$('html').removeClass('on');
			if($(window).width() < 1025) {
				$('html').css('overflow-y', 'auto');
			}
			$('#fp-nav').css('z-index', '1');
			$('html').off('scroll touchmove mousewheel');
		});

		// 탭메뉴
		$('.tabs a').click(function(){
			var tab_id = $(this).attr('data-tab');
			var tab_id1 = $(this).attr('id');

			$(".map_pop").addClass('on');
			$(".map_pop").removeAttr('id');
			$("#map").hide();
			$(".map_pop").attr('id', tab_id1);

			$('.tabs li').removeClass('on');
			$('.tab_content').removeClass('on');
			$('g').removeClass('on');
			$('path').removeClass('on');

			$(this).parent("li").addClass('on');
			$("#"+tab_id).addClass('on');
			$("g#"+tab_id1).addClass('on');
			$(".map_pop img").attr("src", "resources/img/content/pop_" + tab_id1 +".png");
			$('#tabs').val(tab_id1).prop("selected", "true");
		});

		$('#t1').click(function(){
			$(".t").attr('fill', '#EFEFEF');
			$(".map").show();
			$("#map").show();
			$(".map_pop").removeClass('on');
		});

		$('.map .t').click(function(){
			var tab_id1 = $(this).attr('id');
			$(".map_pop").addClass('on');
			$(".map_pop").removeAttr('id');
			$("#map").hide();
			$(".map_pop").attr('id', tab_id1);
		});

		$('.map_pop a').click(function(){
			$(".map_pop").removeClass('on');
			$(".map_pop").removeAttr('id');
			$("#map").show();
		});
		
		$('#map g').on('click', function(){
			var m_id = $(this).attr("id");
			var m_id1 = $(this).attr("data-tab");
			$('svg').hide();
			$('#map g').removeClass('on');
			$(".map_pop").addClass('on');
			$(this).addClass('on');
			$(".tabs li").removeClass('on');
			$('.tab_content').removeClass('on');
			$(".tabs #" + m_id).parent().addClass('on');
			$('.tab_content#' + m_id1).addClass('on');
			$(".map_pop").removeAttr('id');
			$(".map_pop").attr('id', m_id);
			$(".map_pop img").attr("src", "resources/img/content/pop_" + m_id +".png");
			$('#tabs').val(m_id).prop("selected", "true");
		});
		$(".map_pop a").on('click', function(){
			$(".map_pop").removeClass('on');
			$('svg').show();
		});

		$(".store li a").on("click", function(e) {
			var id = $(this).parent('li').attr('id');
			var info1 = $(this).parent('li').children('.hide').find('.city').text();
			var info2 = $(this).parent('li').children('.name').text();
			var info3 = $(this).parent('li').children('.hide').find('.addr').text();
			var info4 = $(this).parent('li').children('.hide').find('.state').text();
			e.preventDefault();
			var appendthis =  ("<div class='modal_overlay js-modal_close product'></div>");
			$('.store_pop').css('display', 'block');
			$(".store_pop img").attr("src", "resources/img/pop/" + id +".jpg");
			$(".store_pop .pop_1").text(info1);
			$(".store_pop .pop_2").text(info2);
			$(".store_pop .pop_3").text(info3);
			$(".store_pop .pop_4").text(info4);
			$("body").append(appendthis);
			$(".modal_overlay").fadeTo(500, 0.6);
		});

		$("#section5 a").on("click", function(e) {
			e.preventDefault();
			var appendthis =  ("<div class='modal_overlay js-modal_close product'></div>");
			$('.private_pop').css('display', 'block');
			$("body").append(appendthis);
			$(".modal_overlay").fadeTo(500, 0.6);
		});

		$(".cancel").on("click", function(e) {
			e.preventDefault();
			$('.popup').css('display','none');
			if($(window).width() < 1025){
				$('html').removeClass('on');
				$('html, body').css('overflow-y', 'auto');
			}
			$('html').off('scroll touchmove mousewheel');
			$(".modal_overlay").fadeOut(700, function() {
				$(".modal_overlay").remove();
			});
		});

		$('.pop_btn').click(function(){
			const con = document.getElementById("popview");
			$('html').addClass('on');
			$('html, body').css('overflow-y', 'hidden');
			$('html').on('scroll touchmove mousewheel', function(event){
				event.preventDefault();
				event.stopPropagation();
				return false;
			});
		});

		// fullpage
		$('#fullpage').fullpage({
			verticalCentered: true,
			anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6'],
			navigation: true,
			navigationPosition: 'right',
			responsiveWidth: 1025,
			
			// 특정 인덱스일 때
			'afterLoad': function (anchorLink, index) {

				if (index == 3) {
					$({ val : 0 }).animate({ val : 22 }, {
						duration: 1000,
						step: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_01").text(num);
						},
						complete: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_01").text(num);
						}
					});
					$({ val : 0 }).animate({ val : 41 }, {
						duration: 1000,
						step: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_02").text(num);
						},
						complete: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_02").text(num);
						}
					});
					$({ val : 0 }).animate({ val : 3594 }, {
						duration: 1000,
						step: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_03").text(num);
						},
						complete: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_03").text(num);
						}
					});
					$({ val : 0 }).animate({ val : 10070 }, {
						duration: 1000,
						step: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_04").text(num);
						},
						complete: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_04").text(num);
						}
					});
					$({ val : 0 }).animate({ val : 255764 }, {
						duration: 1000,
						step: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_05").text(num);
						},
						complete: function() {
							var num = numberWithCommas(Math.floor(this.val));
							$(".num_05").text(num);
						}
					});
				}

			},

		});

		// 메인 배너
		$('.visual').slick({
			pauseOnHover: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			fade: true,
			autoplaySpeed:5000,
			focusOnSelect: true,
			appendDots: $('.slider-dots-box'),
			dotsClass: 'slider-dots'
		});

		// 메인 배너 dot
		jQuery(".slider-dots-box a").each(function( index ) {		

			$('.slider-dots-box a')
				 .html(`<svg class="progress-svg" width="53" height="53">
				<g transform="translate(27,27)">
				<circle class="circle-bg" r="25" cx="0" cy="0"></circle>
				<text class="circle-tx" x="0" y="3" alignment-baseline="middle" stroke-width="0" text-anchor="middle"></text>
				</g>
				</svg>`);

		});

		jQuery(".slider-dots-box a text").each(function(index) {		  	

			$(this).text("0"+ (index + 1) +"");

		});

		jQuery(".slider-dots-box a circle").each(function(index) {		  	
			
			if (index == 0) {
				$(this).removeClass("circle-bg")
				$(this).addClass("circle-go")
			}

		});

		// On before slide change
		$('.visual').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			jQuery( ".slider-dots-box a" ).each(function( index ) {		  	
				jQuery('.slider-dots-box a circle').removeClass('circle-go');
				jQuery('.slider-dots-box a circle').addClass('circle-bg');
				jQuery('.slider-dots-box a').eq( nextSlide ).addClass('active');
			});
		});

		// On before slide change
		$('.visual').on('afterChange', function(event, slick, currentSlide){
			 $('.slider-dots-box .slick-active a')
				 .html(`<svg class="progress-svg" width="53" height="53">
				<g transform="translate(27,27)">
			  <circle class="circle-go" r="25" cx="0" cy="0"></circle>
			  <text class="circle-tx" x="0" y="3" alignment-baseline="middle" stroke-width="0" text-anchor="middle">0${(currentSlide || 0) + 1}</text>
				</g>
			</svg>`);
		});

		// 메인 비주얼 정지, 재생
		$('.visual_btn .btn_play').on('click', function(){
			var $pauseBtn = $(this);
			if ($pauseBtn.hasClass('on')){
				$(".visual").slick('slickPlay');
				$('.circle-go').css('animation-play-state','running');
				$(this).text("정지");
				$pauseBtn.removeClass('on');
			}else{
				$(".visual").slick('slickPause');
				$('.circle-go').css('animation-play-state','paused');
				$(this).text("재생");
				$pauseBtn.addClass('on');
			}
		});

		// 스마트로컬푸드 솔루션 특장점
		$('.benefit').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});

		$('.pop').on('click', function(){
			var has_id = $(this).attr("id");
			$(".popwrap").show();
			$("#pop_" + has_id).css("display","flex");
			$(".pop_cont").removeClass("on");
			$("#pop_" + has_id).addClass("on");
		});

		$('.pop_close').on('click', function(){
			$(".popwrap").hide();
			$(".pop_cont").hide(); 
			$(".pop_cont").removeClass("on");
		});

		// 매장
		$('.store').slick({
			dots: false,
			infinite: true,
			speed: 500,
			fade: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			cssEase: 'linear'
		});

	});

});

function navbar() {
	var navbar = $('#navbar');
	var toggle_button = navbar.find('.btn_close');

	toggle_button.on('click',function(){
		if (navbar.hasClass('open')){
			navbar.removeClass('open');
		}else{
			navbar.addClass('open');
		}
	});
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function changeSelect() {
	var selt_id = $("#tabs option:selected").attr("id");
	var selt_id1 = $("#tabs option:selected").attr('data-tab');
	
	$(".map_pop").addClass('on');
	$(".map_pop").removeAttr('id');
	$("#map").hide();
	$(".map_pop").attr('id', selt_id1);

	$('.tabs li').removeClass('on');
	$('.tab_content').removeClass('on');
	$('g').removeClass('on');
	$('path').removeClass('on');

	$('.tabs li a#' + selt_id).parent("li").addClass('on');
	$("#" + selt_id1).addClass('on');
	$("g#" + selt_id).addClass('on');
	$(".map_pop img").attr("src", "resources/img/content/pop_" + selt_id +".png");

	if(selt_id == "t1") {
		$(".t").attr('fill', '#EFEFEF');
		$(".map").show();
		$("#map").show();
		$(".map_pop").removeClass('on');
	}
}