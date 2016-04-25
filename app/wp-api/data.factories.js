(function () {
 angular.module( 'dataFactories', ['ngResource'])

.factory( 'Posts', ['$resource', function( $resource ) {
	return $resource( appInfo.api_url + 'posts/:ID', {
		ID: '@id'
	})
}])

.factory( 'DataFeatured', ['$resource', function($resource) {
  return $resource(appInfo.api_url + 'media/:ID'); // Note the full endpoint address
  
}

  

])

.directive('featuredPost', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/featured/' + 'featuredPost.php',
    controller: function($rootScope, $http) {
  $http({ method: 'GET', url: appInfo.api_url + 'pages/?slug=home'})
  .then(function successCallback(response) {
        // $scope.featuredPost = response.data[0].acf.featured_post.ID;
        console.log($rootScope.featuredPost.guid + 'FP API load success');
    
  }, 
    function errorCallback(response) {
        console.log('Pages API failed to load');
    })
    }
  };
})

.directive('featuredImage', function() {
  return {
    restrict: 'AE',
    templateUrl: appInfo.template_directory + 'app/featured/' + 'featuredImage.php',
    controller: function($rootScope, DataFeatured, Posts) {
      $rootScope.test="test";
      $rootScope.testID = 43;
        $rootScope.entry = DataFeatured.get({ ID: $rootScope.testID }, function() {
    console.log($rootScope.entry);
  });
  
  
      
    }
  
    
  };
});


 
})();
