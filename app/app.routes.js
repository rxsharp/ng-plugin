(function () {
 angular.module( 'wpAngularTheme')
 
.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state( 'home', {
			url: '/',
			controller: 'homeCtrl',
			templateUrl: appInfo.template_directory + 'app/home/home.html'
		})

		.state( 'projectsList', {
			url: '/projects',
			controller: 'ListCtrl',
			templateUrl: appInfo.template_directory + 'app/projects/list.php'
		})
		.state( 'detail', {
			url: '/project/:id',
			controller: 'DetailCtrl',
			templateUrl: appInfo.template_directory + 'app/projects/individual.php'
		});
});

})();
