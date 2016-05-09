(function () {
 angular.module('onePageDirectives', [])
.directive("featured", function () {
    return {
        restrict: "E",
        templateUrl: appInfo.template_directory + "app/home/sectionTemplates/featured.html",
        controller: "featuredCtrl"
        
    }
})

.directive("about", function () {
    return {
        restrict: "E",
        templateUrl: appInfo.template_directory + "app/home/sectionTemplates/about.html"
        
    }
})

.directive("contact", function () {
    return {
        restrict: "E",
        templateUrl: appInfo.template_directory + "app/home/sectionTemplates/contact.html"
        
    }
})

.directive("scrollio", function(){
    yoScrollio = function(scope, element, attrs, $window, $scope) {
        var $snaps = $('.snap');
	console.log($snaps);
	console.log('snapDB: ', $snaps.selector);
		var currentPageIndex = 0;
		var debounceDuration = 1000;
		var canScroll = true;

		var previousTouchPosition;
		window.addEventListener('touchmove', function(event) {
			if(previousTouchPosition !== undefined) {
				scroll(previousTouchPosition > event.touches[0].clientY);
			}

			previousTouchPosition = event.touches[0].clientY;
		});

		window.addEventListener('wheel', function(event) {
			scroll(event.wheelDelta < 0);
			console.log(event.wheelDelta);
			console.log('currentPageIndex:', currentPageIndex);
			console.log('snapLength: ', $snaps.length)
		});

		function scroll(scrollingDown) {
			if(!canScroll) {
				return;
			}

			if (scrollingDown) {
				if(currentPageIndex < $snaps.length-1) {
					currentPageIndex++;
					$snaps.eq(currentPageIndex).addClass('sticky');
				}
			} else if (currentPageIndex > 0) {
				$snaps.eq(currentPageIndex).removeClass('sticky');
				currentPageIndex--;
			}

			canScroll = false;

			window.setTimeout(function() {
				canScroll = true;
				previousTouchPosition = undefined;
			}, debounceDuration);
		}
// $scope.$apply();
    }
    
    return {
        restrict: "A",
        link: yoScrollio
    }
})


})();