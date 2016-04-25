(function () {
 angular.module( 'dataFactories', ['ngResource'])

.factory( 'Posts', ['$resource', function( $resource ) {
	return $resource( appInfo.api_url + 'posts/:ID', {
		ID: '@id'
	})
}])

.directive('featuredPost', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/featured/' + 'featuredPost.php',
    controller: function($scope, $http) {
  $http({ method: 'GET', url: appInfo.api_url + 'pages/?slug=home'})
  .then(function successCallback(response) {
        $scope.featuredPost = response.data[0].acf.featured_post;
        console.log($scope.featuredPost.guid + 'Pages API load success');
    
  }, 
    function errorCallback(response) {
        console.log('Pages API failed to load');
    })
    }
  };
});


 
})();
