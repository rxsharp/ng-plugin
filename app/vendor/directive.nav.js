(function () {
 angular.module('navDirective', [])
.directive('waNav', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/nav/' + 'nav.html',
    controller: function($scope, $http) {
  $http({ method: 'GET', url: appInfo.wp_json})
  .then(function successCallback(response) {
        $scope.title = response.data;
        console.log($scope.title + 'API load success');
    
  }, 
    function errorCallback(response) {
        console.log('API failed to load');
    })
    }
  };
});

  
})();