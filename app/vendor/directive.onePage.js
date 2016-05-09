(function () {
 angular.module('onePageDirectives', [])
.directive("featured", function () {
    return {
        restrict: "E",
        templateUrl: appInfo.template_directory + "app/home/sectionTemplates/featured.html",
        controller: "featuredCtrl"
        
    }
})

.directive("about", function () {
    return {
        restrict: "E",
        templateUrl: appInfo.template_directory + "app/home/sectionTemplates/about.html"
        
    }
})

.directive("contact", function () {
    return {
        restrict: "E",
        templateUrl: appInfo.template_directory + "app/home/sectionTemplates/contact.html"
        
    }
})


})();