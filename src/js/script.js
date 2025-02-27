// Const {name} = require('commander');
// const {required} = require('yargs');

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

	// $('.button_mini').each(function (i) {
	// 	$(this).on('click', () => {
	// 		$('#order, .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
	// 	});
	// });

	$('.button_mini').on('click', () => {
		$('.overlay, #order').fadeIn('slow');
	});

	$('#order form').validate();
	 function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				phone: 'required',
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required: 'Пожалуйста, введите свое имя',
					minlength: jQuery.validator.format('Введите {0} символа!'),
				},
				phone: 'Пожалуйста, введите свой номер телефона',
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введен адрес почты',
				},
			},
		});
	}

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask('+7 (999) 999-99-99');

	// Smooth scrool
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('pageup').fadeOut();
		}
	});
	$('a[href=#\']').click(function () {
		const _href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(_href).offset().top + 'px'});
	});

	// Const element = document.querySelector('.header__animete');
	// element.addEventListener('mouseenter', () => {
	// 	element.classList.add('animate__animated', 'animate__bounce');
	// });

	// element.addEventListener('mouseleave', () => {
	// 	element.classList.remove('animate__animated', 'animate__bounce');
	// });
	 new WOW().init();
});

