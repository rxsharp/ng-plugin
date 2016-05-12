(function() {
	angular.module('onePageDirectives', [])
		.directive("featured", function() {
			return {
				restrict: "E",
				templateUrl: appInfo.template_directory + "app/home/sectionTemplates/featured.html",
				controller: "featuredCtrl"

			}
		})

	.directive("about", function() {
		return {
			restrict: "E",
			templateUrl: appInfo.template_directory + "app/home/sectionTemplates/about.html"

		}
	})

	.directive("contact", function() {
		return {
			restrict: "E",
			templateUrl: appInfo.template_directory + "app/home/sectionTemplates/contact.html"

		}
	})

	.directive("backgroundEffect", function() {

		imgMove = function(scope, element, attrs, $window, $scope) {
			var movementStrength = 25;
			var height = movementStrength / $(window).height();
			var width = movementStrength / $(window).width();
			$("#top-image").mousemove(function(e) {
				var pageX = e.pageX - ($(window).width() / 2);
				var pageY = e.pageY - ($(window).height() / 2);
				var newvalueX = width * pageX * -1 - 25;
				var newvalueY = height * pageY * -1 - 50;
				$('#top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
			});

		};
		return {
			restrict: "E",
			template: '  <div id="top-image"></div>',
			link: imgMove
		}
	})

	.directive("scrollio", function() {
		yoScrollio = function(scope, element, attrs, $window, $scope) {
			var $snaps = $('.snap');
			console.log($snaps);
			console.log('snapDB: ', $snaps.selector);
			var currentPageIndex = 0;
			var debounceDuration = 500;
			var canScroll = true;
			var previousTouchPosition;
			window.addEventListener('touchmove', function(event) {
				if (previousTouchPosition !== undefined) {
					scroll(previousTouchPosition > event.touches[0].clientY);
				}

				previousTouchPosition = event.touches[0].clientY;
			});

			window.addEventListener('wheel', function(event) {
				if (event.wheelDelta > 50 || event.wheelDelta < -50) {
					scroll(event.wheelDelta < 0);
				}
			});

			function scroll(scrollingDown) {
				if (!canScroll) {
					return;
				}

				if (scrollingDown) {
					if (currentPageIndex < $snaps.length - 1) {
						currentPageIndex++;
						$snaps.eq(currentPageIndex - 1).addClass('stickyTop');
						$snaps.eq(currentPageIndex).addClass('sticky');
					}
				}
				else if (currentPageIndex > 0) {
					$snaps.eq(currentPageIndex).removeClass('sticky');
					$snaps.eq(currentPageIndex - 1).removeClass('stickyTop');

					currentPageIndex--;
				}

				canScroll = false;

				window.setTimeout(function() {
					canScroll = true;
					previousTouchPosition = undefined;
				}, debounceDuration);
			}
		}

		return {
			restrict: "A",
			link: yoScrollio
		}
	})


})();