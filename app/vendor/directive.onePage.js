(function() {
	angular.module('onePageDirectives', [])

		.directive("home", function() {
			return {
				restrict: "E",
				templateUrl: appInfo.template_directory + "app/home/sectionTemplates/home.html"

			}
		})

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

	.directive("scrollio", function($rootScope) {
		yoScrollio = function(scope, element, attrs, $window, $scope, $state) {
			var $snaps = $('.snap');
			console.log('home snap',$snaps);
			var debounceDuration = 500;
			var canScroll = true;
			$rootScope.homeScroll = true;
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
					if ($rootScope.currentPageIndex < $snaps.length - 1) {
						$rootScope.currentPageIndex++;
						$snaps.eq($rootScope.currentPageIndex - 1).addClass('stickyTop');
						$snaps.eq($rootScope.currentPageIndex).addClass('sticky');
						console.log('INDEX CHECK: ', $rootScope.currentPageIndex);
						console.log('snapLENGTH', $snaps.length);
					}
				}
				else if ($rootScope.currentPageIndex > 0) {
					$snaps.eq($rootScope.currentPageIndex).removeClass('sticky');
					$snaps.eq($rootScope.currentPageIndex - 1).removeClass('stickyTop');

					$rootScope.currentPageIndex--;
					console.log('INDEX CHECK: ', $rootScope.currentPageIndex);
											console.log('snapLENGTH', $snaps.length);

				
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