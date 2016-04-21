(function () {
 angular.module( 'wpAngularTheme', [
	'ui.router', 
	'ngResource',
	'ngAnimate',
	'postDirectives',
	'scrollDirectives',
	'navDirective'
	
	] )

.factory( 'Posts', function( $resource ) {
	return $resource( appInfo.api_url + 'posts/:ID', {
		ID: '@id'
	})
})

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

.controller( 'homeCtrl', ['$scope', '$window', '$location', function( $scope, $window, $location) {
	$scope.title = "Wolf Nectar";
	document.documentElement.scrollTop = document.body.scrollTop = 10;

}])

.controller( 'featuredCtrl', ['$scope', function( $scope) {
	document.documentElement.scrollTop = document.body.scrollTop = 10;
	$scope.title="featured"
}])

.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	};
}]);

 
})();
