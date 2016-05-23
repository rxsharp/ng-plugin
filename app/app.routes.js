(function () {
 angular.module( 'wpAngularTheme')
 
.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	
		.state( 'main', {
			url: '/',
			controller: 'bootLoad',
            templateUrl: appInfo.template_directory + 'app/main/main.html'
	
		})


		.state( 'main.projects', {
			url: 'projects',
			controller: 'ListCtrl',
                   templateUrl: appInfo.template_directory + 'app/projects/projects.html'

		});
});

})();
