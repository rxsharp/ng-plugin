(function () {
 angular.module('postDirectives', [])
.directive('postContent', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/projects/' + 'postContent.php'
  };
})
.directive('scrollify', function($timeout) {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/projects/' + 'scrollifyContent.php',
    link: function ($scope, element, attrs) {
      $scope.$on('dataloaded', function () {
        $timeout(function () {
          // Scrollify jquery plugin initialization
          $.scrollify({ section : ".section-class-name",
		      setHeights: true
	});
	console.log('scrollify');
          
        }, 0, false);})
      
      }
  
    

  };
});

  
})();

