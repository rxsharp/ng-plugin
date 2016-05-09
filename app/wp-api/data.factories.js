(function () {
 angular.module( 'dataFactories', ['ngResource'])

.factory( 'Posts', ['$resource', function( $resource ) {
	return $resource( appInfo.api_url + 'posts/:ID', {
		ID: '@id'
	})
}])


 
})();
