(function () {
 angular.module('navDirective', [])
.directive('waNav', function($rootScope, $location, $state, $timeout) {
  navControl = function($scope, $http) {
      $scope.projectGo = function(){
            //will reload projects
            // $state.go('main.project')
// $location.path('/projects')
            $state.go('main.projects');
                    // $timeout(function () {
                        // $state.reload('main.projects');
//                         console.log('Run Reload');
// }, 500)
            console.log('Project Go!');
            $rootScope.homeScroll=false;
      }
    $scope.home = function(){
        $state.reload('main');
        $state.go('^');
        console.log('home reloaded');
        yo= $rootScope.currentPageIndex = 0;
        $rootScope.homeScroll=true;
        console.log('index', yo);
        $('*').removeClass('sticky');
        $('*').removeClass('stickyTop');
      	$('home').addClass('sticky');
    }

    $scope.about = function(){
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