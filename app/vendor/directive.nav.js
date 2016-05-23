(function () {
 angular.module('navDirective', [])
.directive('waNav', function($rootScope, $location, $state, $timeout) {
    navControl = function($scope, $http) {
        $scope.projectGo = function(){
        $state.go('main.projects');
        $rootScope.homeScroll=false;
            
        $rootScope.projectSwitch=true;
        console.log('FIRST: Project switch TRUE on Directive');
      }
    $scope.home = function(){
        $rootScope.projectSwitch=false;
        $state.go('main');
        console.log('home reloaded');
        yo= $rootScope.currentPageIndex = 0;
        $rootScope.homeScroll=true;
        console.log('index', yo);
        $('*').removeClass('sticky');
        $('*').removeClass('stickyTop');
      	$('home').addClass('sticky');
    }

    $scope.about = function(){
        $rootScope.projectSwitch=false;
        $state.go('main');
        console.log('ok Rick');
        $rootScope.homeScroll=true
        console.log('about 2.0');
        yo = $rootScope.currentPageIndex = 2;
      	$('home').addClass('stickyTop');
      	$('featured').addClass('sticky stickyTop');
      	$('contact').removeClass('sticky');
      	$('about').removeClass('stickyTop');
      	$('about').addClass('sticky');
      	console.log('index', yo);
    }

        $scope.contact = function(){
            window.setTimeout(function() {
                $rootScope.projectSwitch=false;
                $state.go('main');
                $rootScope.homeScroll=true
                console.log('contact yo');
              	$('home').addClass('sticky stickyTop');
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