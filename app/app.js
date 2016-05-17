(function () {
 angular.module( 'wpAngularTheme', [
	'ui.router', 
	'ngResource',
	'ngAnimate',
	'postDirectives',
	'onePageDirectives',
	'navDirective',
	'dataFactories'
	
	] )
.run(function($rootScope) {
    cpi = $rootScope.currentPageIndex = 0;
    console.log(cpi);
})
	
// All cosole.log functions are for debugging purposes
// The console.log functions will be removed in the production phase.
.controller( 'homeCtrl', ['$scope', '$http', '$window', function( $scope, $http, $window) {
	$scope.directory= appInfo.template_directory;

}])

.controller( 'featuredCtrl', ['$http', '$rootScope', 'Posts', function($http, $rootScope, Posts) {
  $http({ method: 'GET', url: appInfo.api_url + 'pages/?slug=home'})
  .then(function successCallback(response) {
        $rootScope.featuredPost = response.data[0].acf.featured_post;
        console.log($rootScope.featuredPost.guid + 'FEATURED CONTROLLER');
        
   $rootScope.featuredResource = Posts.get({ ID: $rootScope.featuredPost.ID }, function() {
    console.log( $rootScope.featuredResource.acf.featured_image + 'THUMBNAIL');
  	}); // The postThumb variable calls the post API to retreive the acf featured_image    

  }, 
    function errorCallback(response) {
        console.log('Pages API failed to load');
    })
}])

.controller( 'ListCtrl', ['$scope', 'Posts', '$timeout', function( $scope, Posts, $timeout ) {
	console.log('ListCtrl Start');
	$scope.init = function() {
		console.log('Init run');
	}
	Posts.query(function( res ) {
		$scope.loading = [];
		$scope.posts = res;
		$scope.$broadcast('dataloaded');
		console.log('Broadcast of dataloaded');
		console.log('posts', $scope.posts.acf);
		$scope.popInit = function(input){
			console.log('Pop initialized');
		}
		
	});
	$scope.init();
	
}])

.controller( 'DetailCtrl', ['$scope', '$stateParams', 'Posts', function( $scope, $stateParams, Posts ) {
	console.log( $stateParams );
	Posts.get( { ID: $stateParams.id}, function(res){
		$scope.post = res;
	});
}])


.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	};
}]);

angular.element(document).ready(function () {
    console.log('Doc Ready Function');
});
 
})();
