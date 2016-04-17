var myDirectives = angular.module('myDirectives', []);

myDirectives.directive('beaverContent', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/templates/' + 'beaverContent.php'
  };
});