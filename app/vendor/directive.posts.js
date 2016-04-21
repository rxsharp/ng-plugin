(function () {
 angular.module('postDirectives', [])
.directive('postContent', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/projects/' + 'postContent.php'
  };
});

  
})();

