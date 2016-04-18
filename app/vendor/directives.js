(function () {
 angular.module('myDirectives', [])
.directive('postContent', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/portfolio/' + 'postContent.php'
  };
});
  
}
)();