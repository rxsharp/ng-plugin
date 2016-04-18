(function () {
 angular.module( 'wpAngularTheme')
 
.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state( 'list', {
			url: '/',
			controller: 'ListCtrl',
			templateUrl: appInfo.template_directory + 'app/portfolio/list.php'
		})
		.state( 'detail', {
			url: '/posts/:id',
			controller: 'DetailCtrl',
			templateUrl: appInfo.template_directory + 'app/portfolio/individual.php'
		});
});

})();
