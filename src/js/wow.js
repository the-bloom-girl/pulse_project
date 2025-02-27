const wow = new WOW(
	{
		boxClass: 'wow', // Animated element css class (default is wow)
		animateClass: 'animated', // Animation css class (default is animated)
		offset: 0, // Distance to the element when triggering the animation (default is 0)
		mobile: true, // Trigger animations on mobile devices (default is true)
		live: true, // Act on asynchronously loaded content (default is true)
		callback(box) {
			// The callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null, // Optional scroll container selector, otherwise use window,
		resetAnimation: true, // Reset animation on end (default is true)
	},
);
wow.init();
