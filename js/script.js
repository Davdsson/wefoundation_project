/*!
Template Name: Charity Hope
Title: charity website template free download bootstrap Charity Hope
Description: charity website template with bootstrap framework for free download and best suited for ngos charities.
Keyword: charity website template, bootstrap charity template free, charity website templates bootstrap, donation website template free, charity website templates bootstrap free download
Author: Yepi le codeur
Author URI: https://my-portfolio-78090.web.app/
Template URI: https://bootstrapwebtemplates.com/free-download-bootstrap-charity-website-template
Tags: charity, charity hub, donate, donations, foundation, fundraising, ngo, non profit, non-profit, nonprofit, organization, social, volunteer, welfare, Causes
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
*/

(function($) {
    "use strict"; // Start of use strict
	$(".copyright").after(atob(""));
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};
	
	
	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};
	
		var goToTop = function() {

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};
	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};
		var counterWayPoint = function() {
		if ($('#bwt-counter').length > 0 ) {
			$('#bwt-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	$(function(){
	contentWayPoint();
	dropdown();
	testimonialCarousel();
	goToTop();
	counterWayPoint();
	});
})(jQuery); // End of use strict


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// lightbox plugin
	$(function()
		{
			$('[rel="lightbox"]').lightbox();
	});


var myElement = document.getElementById("title");
//s.innerHTML = newvalue
myElement.innerHTML="wefondation";
function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
   setFavicon.setAttribute('rel','shortcut icon');
   setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('newdoc/myicon.jpg');


var ctn = document.getElementById("contact_phrase");
var ctn_value = document.getElementById("contact_value");

var email_phrase = document.getElementById("email_phrase");
var email_value = document.getElementById("email_value");

ctn.innerHTML="Contactez-nous sur:";
ctn_value.innerHTML="+90-534-886-9113";

email_phrase.innerHTML="Envoyez-nous mail sur:";
email_value.innerHTML="wefoundation.ong.info@gmail.com";
