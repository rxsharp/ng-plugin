(function () {
 angular.module('navDirective', [])
.directive('waNav', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/nav/' + 'nav.html'
  };
});

  
})();