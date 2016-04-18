(function () {
 angular.module( 'wpAngularTheme')
 
.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state( 'home', {
			url: '/',
			controller: 'homeCtrl',
			templateUrl: appInfo.template_directory + 'app/home/index.php'
		})
		.state( 'about', {
			url: '/about',
			templateUrl: appInfo.template_directory + 'app/about/index.php'
		})
		.state( 'contact', {
			url: '/contact',
			templateUrl: appInfo.template_directory + 'app/contact/index.php'
		})
		.state( 'portfolioList', {
			url: '/portfolio',
			controller: 'ListCtrl',
			templateUrl: appInfo.template_directory + 'app/portfolio/list.php'
		})
		.state( 'detail', {
			url: '/portfolio/:id',
			controller: 'DetailCtrl',
			templateUrl: appInfo.template_directory + 'app/portfolio/individual.php'
		});
});

})();
