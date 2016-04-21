(function () {
 angular.module('scrollDirectives', [])
.directive("featuredscroll", function ($window, $document) {
    return function(scope, element, attrs) {
        console.log('scrollDebug');
       var bnd = function() {
            if (window.pageYOffset <= 2) {
                 scope.boolChangeClass = true;
                 window.location.href = '/#/';
                 console.log('Touched 2');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        console.log('aboutPage bottom');
        $window.location.href = '/#/about';
    }


            scope.$apply();

        }
angular.element($window).on('scroll', bnd);
        scope.$on('$destroy', function () {
angular.element($window).off('scroll', bnd);
});
      
    };
})

.directive("aboutscroll", function ($window, $document) {
    return function(scope, element, attrs) {
        console.log('scrollDebug');
       var bnd = function() {
            if (window.pageYOffset <= 2) {
                 scope.boolChangeClass = true;
                 window.location.href = '/#/featured';
                 console.log('Touched 2');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        console.log('aboutPage bottom');
        $window.location.href = '/#/contact';
    }


            scope.$apply();

        }
angular.element($window).on('scroll', bnd);
        scope.$on('$destroy', function () {
angular.element($window).off('scroll', bnd);
});
      
    };
})

.directive("contactscroll", function ($window, $document) {
    return function(scope, element, attrs) {
        console.log('contactDebug');
       var bnd = function() {
            if (window.pageYOffset <= 2) {
                 scope.boolChangeClass = true;
                 window.location.href = '/#/featured';
                 console.log('Touched 2');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }

            scope.$apply();

        }
angular.element($window).on('scroll', bnd);
        scope.$on('$destroy', function () {
angular.element($window).off('scroll', bnd);
});
      
    };
})

.directive("homescroll", function ($window, $document) {
    return function(scope, element, attrs) {
        console.log('homeDirective');
var homeBind = function(){
    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    var body = document.body, html = document.documentElement;
    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        console.log('homePage bottom');
        $window.location.href = '/#/featured';
    }

}

angular.element($window).on('scroll', homeBind);
scope.$on('$destroy', function () {
  angular.element($window).off('scroll', homeBind);
});
      
    };
});
  
}
)();