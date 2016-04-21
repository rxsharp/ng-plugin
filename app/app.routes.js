(function () {
 angular.module( 'wpAngularTheme')
 
.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state( 'home', {
			url: '/',
			controller: 'homeCtrl',
			templateUrl: appInfo.template_directory + 'app/home/home.php'
		})
		.state( 'about', {
			url: '/about',
			templateUrl: appInfo.template_directory + 'app/about/about.php'
		})
		.state( 'featured', {
			url: '/featured',
			controller: 'featuredCtrl',
			templateUrl: appInfo.template_directory + 'app/featured/featured.php'
		})
		.state( 'contact', {
			url: '/contact',
			templateUrl: appInfo.template_directory + 'app/contact/contact.php'
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
