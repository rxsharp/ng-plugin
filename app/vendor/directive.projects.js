(function() {
  angular.module('postDirectives', [])
  .factory('Projects', function($timeout) {
    return {
       scrollify: function(scope, element, attrs, $window, $scope, $rootScope) {
       							$timeout(function () {

         console.log("SECOND: FACTORY LOADED Projects Scrollified");
			var projectPageIndex = 0;
			console.log('Project page index', projectPageIndex);
			var $snaps = $('.projectSnap');
			$snaps.eq(0).addClass('sticky');
			console.log('project snap',$snaps);
			var debounceDuration = 500;
			var canScroll = true;
			var projectScroll = true;
			console.log(projectScroll);
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
					console.log('Delta IN');
				}
			});

			function scroll(scrollingDown) {
				if (!canScroll) {
					return;
				}

				if (scrollingDown) {
					if (projectPageIndex < $snaps.length - 1) {
						projectPageIndex++;
						$snaps.eq(projectPageIndex - 1).addClass('stickyTop');
						$snaps.eq(projectPageIndex).addClass('sticky');
						console.log('Scrolling Down. Project Index: ', projectPageIndex);
					}
				}
				else if (projectPageIndex > 0) {
					$snaps.eq(projectPageIndex).removeClass('sticky');
					$snaps.eq(projectPageIndex - 1).removeClass('stickyTop');
						console.log('Scrolling Up. Project Index: ', projectPageIndex);
					projectPageIndex--;
				}

				canScroll = false;

				window.setTimeout(function() {
					canScroll = true;
					previousTouchPosition = undefined;
				}, debounceDuration);
			}
       }, 450)
     }//End of main function
    }
  }) 


    .directive('postContent', function() {
      return {
        restrict: 'AE',
        templateUrl: appInfo.template_directory + 'app/projects/' + 'postContent.php'
      };
    })
    .directive('projectRepeat', function() {
      return {
        restrict: 'AE',
        templateUrl: appInfo.template_directory + 'app/projects/' + 'projects.html'
      };
    })

	.directive("projectscrollio", ['$rootScope', '$timeout', function($rootScope, $timeout) {
		projectScrollio = function(scope, element, attrs, $window, $scope) {
        	$rootScope.$on('$viewContentLoaded', 
						function(event){ 
	
						$timeout(function () {
	
    // Access to all the view config properties.
    // and one special property 'targetView'
    // viewConfig.targetView 

		          //$scope.$on('dataloaded', function () {

			console.log('PROJECT SCROLL VIEW CONTENT LOADED 2.0');
			$rootScope.projectPageIndex=0;
			console.log('Project page index', $rootScope.projectPageIndex);
			var $snaps = $('.projectSnap');
			$snaps.eq(0).addClass('sticky');
			console.log('project snap',$snaps);
			var debounceDuration = 500;
			var canScroll = true;
			$rootScope.projectScroll = true;
			console.log($rootScope.projectScroll);
			var previousTouchPosition;
			window.addEventListener('touchmove', function(event) {
				if (previousTouchPosition !== undefined) {
					scroll(previousTouchPosition > event.touches[0].clientY);
				}

				previousTouchPosition = event.touches[0].clientY;
			});

			window.addEventListener('wheel', function(event) {
				if (event.wheelDelta > 50 || event.wheelDelta < -50 && $rootScope.projectScroll==true) {
					scroll(event.wheelDelta < 0);
				}
			});

			function scroll(scrollingDown) {
				if (!canScroll) {
					return;
				}

				if (scrollingDown) {
					if ($rootScope.projectPageIndex < $snaps.length - 1) {
						$rootScope.projectPageIndex++;
						$snaps.eq($rootScope.projectPageIndex - 1).addClass('stickyTop');
						$snaps.eq($rootScope.projectPageIndex).addClass('sticky');
						console.log('Scrolling Down. Project Index: ', $rootScope.projectPageIndex);
					}
				}
				else if ($rootScope.projectPageIndex > 0) {
					$snaps.eq($rootScope.projectPageIndex).removeClass('sticky');
					$snaps.eq($rootScope.projectPageIndex - 1).removeClass('stickyTop');
						console.log('Scrolling Up. Project Index: ', $rootScope.projectPageIndex);
					$rootScope.projectPageIndex--;
				}

				canScroll = false;

				window.setTimeout(function() {
					canScroll = true;
					previousTouchPosition = undefined;
				}, debounceDuration);
			}
		           }, 1000);
        // });
});
		}
		

		return {
			restrict: "A",
			link: projectScrollio
		}
	}])


})();
