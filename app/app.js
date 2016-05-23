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
.run(function($rootScope, Posts) {
    cpi = $rootScope.currentPageIndex = 0;
    ppi = $rootScope.projectPageIndex = 0;
    console.log('Run, cpi Index: ', cpi);
    
    Posts.query(function( res ) {
		$rootScope.loading = [];
		$rootScope.posts = res;
		console.log('Posts on Resolve', $rootScope.posts);
		$rootScope.$broadcast('dataloaded');
				$rootScope.$broadcast('dataloaded');

		console.log('Broadcast of dataloaded');
		// console.log('posts', $scope.posts.acf);

		
	});
})
	
// All cosole.log functions are for debugging purposes
// The console.log functions will be removed in the production phase.

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

.controller( 'ListCtrl', ['$scope', 'Posts', '$timeout', '$rootScope', 'Projects', '$state', 
	function( $scope, Posts, $timeout, $rootScope, Projects, $state ) {
		$timeout(function () { 

		$rootScope.projectSwitch=true;
	    console.log('FIRST: Project Switch');
		}, 50);

		console.log('ListCtrl Start');
	            
		$scope.init = function() {
			Projects.scrollify();
			console.log('THIRD: Init ListCtrl controller, Projects.scrollify');
		}
		$scope.init();
	
}])

.controller( 'DetailCtrl', ['$scope', '$stateParams', 'Posts', function( $scope, $stateParams, Posts ) {
	console.log( $stateParams );
	Posts.get( { ID: $stateParams.id}, function(res){
		$scope.post = res;
	});
}])

.controller('bootLoad', ['$scope', '$http', '$window', 'Posts', '$timeout',  '$rootScope', '$state',
function( $scope, $http, $window, Posts, $timeout, $rootScope, $state) {
	$scope.directory= appInfo.template_directory;

//Load Title
	$http({ method: 'GET', url: appInfo.wp_json})
	  .then(function successCallback(response) {
	        $scope.title = response.data;
	        console.log($scope.title + 'BOOTLOAD :: Title load success');
	    
	  }, 
	    function errorCallback(response) {
	        console.log('API failed to load');
	    })



	
}])


.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	};
}]);

angular.element(document).ready(function ($rootScope) {
    console.log('Doc Ready Function');
    			$rootScope.projectPageIndex=0;

});
 
})();
