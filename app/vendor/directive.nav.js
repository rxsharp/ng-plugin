(function () {
 angular.module('navDirective', [])
.directive('waNav', function($rootScope, $location) {
  navControl = function($scope, $http) {
  $http({ method: 'GET', url: appInfo.wp_json})
  .then(function successCallback(response) {
        $scope.title = response.data;
        console.log($scope.title + 'API load success');
    
  }, 
    function errorCallback(response) {
        console.log('API failed to load');
    })

    $scope.home = function(){
        yo= $rootScope.currentPageIndex = 0;
        console.log('index', yo);
        $('*').removeClass('sticky');
        $('*').removeClass('stickyTop');
      	$('.homePage').addClass('sticky');
    }

    $scope.about = function(){
      	$('.homePage').addClass('stickyTop');
      	$('featured').addClass('sticky stickyTop');
      	$('contact').removeClass('sticky');
      	$('about').removeClass('stickyTop');
      	$('about').addClass('sticky');
      	yo = $rootScope.currentPageIndex = 2;
      	console.log('index', yo);
    }

    $scope.contact = function(){
        $location.path('/');
        window.setTimeout(function() {
      	$('.homePage').addClass('stickyTop');
      	$('featured').addClass('sticky stickyTop');
      	$('about').addClass('sticky stickyTop');
      	$('contact').addClass('sticky');
      	yo = $rootScope.currentPageIndex = 3;
      	console.log('index', yo);
				}, 0);
    }
    }
  
  
  
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/nav/' + 'nav.html',
    controller: navControl
  };
});

  
})();