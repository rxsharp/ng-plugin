(function () {
 angular.module( 'wpAngularTheme', [
	'ui.router', 
	'ngResource',
	'ngAnimate',
	'postDirectives',
	'scrollDirectives',
	'navDirective',
	'dataFactories'
	
	] )

.controller( 'ListCtrl', ['$scope', 'Posts', function( $scope, Posts ) {
	console.log('ListCtrl');
	$scope.page_title = 'Blog Listing Page';

	Posts.query(function( res ) {
		$scope.posts = res;
	});
	
}])

.controller( 'DetailCtrl', ['$scope', '$stateParams', 'Posts', function( $scope, $stateParams, Posts ) {
	console.log( $stateParams );
	Posts.get( { ID: $stateParams.id}, function(res){
		$scope.post = res;
	});
}])

.controller( 'homeCtrl', ['$scope', '$http', function( $scope, $http) {
	document.documentElement.scrollTop = document.body.scrollTop = 10;

}])

.controller( 'featuredCtrl', ['$http', '$rootScope', 'Posts', function($http, $rootScope, Posts) {
  $http({ method: 'GET', url: appInfo.api_url + 'pages/?slug=home'})
  .then(function successCallback(response) {
        $rootScope.featuredPost = response.data[0].acf.featured_post;
        console.log($rootScope.featuredPost.guid + 'FEATURED CONTROLLER');
        
   $rootScope.postThumb = Posts.get({ ID: $rootScope.featuredPost.ID }, function() {
    console.log( $rootScope.postThumb.acf.featured_image + 'THUMBNAIL');
  }); // get() returns a single entry     
        
        
    
  }, 
    function errorCallback(response) {
        console.log('Pages API failed to load');
    })
  
  
    
    }
    
])

.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	};
}]);

 
})();
