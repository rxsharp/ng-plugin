(function () {
 angular.module('navDirective', [])
.directive('waNav', function($rootScope, $location, $state) {
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
        console.log('home');
        yo= $rootScope.currentPageIndex = 0;
        $rootScope.homeScroll==true
        console.log('index', yo);
        $('*').removeClass('sticky');
        $('*').removeClass('stickyTop');
      	$('home').addClass('sticky');
    }

    $scope.about = function(){
        console.log('about');
      	$('.homePage').addClass('stickyTop');
      	$('featured').addClass('sticky stickyTop');
      	$('contact').removeClass('sticky');
      	$('about').removeClass('stickyTop');
      	$('about').addClass('sticky');
      	yo = $rootScope.currentPageIndex = 2;
      	$rootScope.homeScroll==true
      	console.log('index', yo);
    }

    $scope.contact = function(){
        window.setTimeout(function() {
            console.log('contact yo');
          	$('.homePage').addClass('sticky stickyTop');
          	$('featured').addClass('sticky stickyTop');
          	$('about').addClass('sticky stickyTop');
          	$('contact').addClass('sticky');
          	yo = $rootScope.currentPageIndex = 3;
          	$rootScope.homeScroll==true
          	console.log('index', yo);
        }, 100);
    }
    }
  
  
  
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/nav/' + 'nav.html',
    controller: navControl
  };
});

  
})();