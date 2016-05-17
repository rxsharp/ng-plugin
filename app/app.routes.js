(function () {
 angular.module( 'wpAngularTheme')
 
.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	
		.state( 'main', {
			url: '/',
			controller: 'homeCtrl',
			templateUrl: appInfo.template_directory + 'app/home/main.html'
		})

		.state( 'main.projects', {
			url: 'projectsyo',
			controller: 'ListCtrl',
			templateUrl: appInfo.template_directory + 'app/projects/projects.html'
		});
});

})();
