$(document).ready(() => {
	$('.slider__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button type="button" class="prev"><img src="icons/left.svg"></button>',
		nextArrow: '<button type="button" class="next"><img src="icons/right.svg"></button>',
		responsive: [{
			breakpoint: 992,
			settings: {
				dots: true,
				arrows: false,
			},
		}],
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	// $('.catalog-item__link').each(function (i) {
	// 	$(this).on('click', e => {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
	// 		$('.catalog-item__list').toggleClass('.catalog-item__list_active');
	// 	});
	// });

	// $('.catalog-item__back').each(function (i) {
	// 	$(this).on('click', e => {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
	// 		$('.catalog-item__list').toggleClass('.catalog-item__list_active');
	// 	});
	// });

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', e => {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('.catalog-item__content_active');
				$('.catalog-item__list').toggleClass('.catalog-item__list_active');
			});
		});
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// MODAL
	$('[data-modal="consultation"]').on('click', () => {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', () => {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', () => {
			$('#order, .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
		});
	});

	$('.button_mini').on('click', () => {
		$('.overlay, #order').fadeIn('slow');
	});

	// $('input[name=phone]').mask('+38 (096) 000 00 00');
});

// Const slider = ({
// 	container: '.slider__inner',
// 	items: 1,
// 	slideBy: 'page',
// 	autoplay: false,
// 	controls: false,
// 	// Nav: false,
// });

// document.querySelector('.prev').onclick = function () {
// 	slider.goTo('prev');
// };

// document.querySelector('.next').onclick = function () {
// 	slider.goTo('next');
// };

