<div class="portfolioPage">
    <div ng-repeat="post in posts" class="projectSnap" style="background-color: {{post.acf.background_color}};">
        <a class="projectTitle" ui-sref="detail({id: post.id})" ng-bind-html="post.title.rendered | to_trusted"></a>
        <a ui-sref="detail({id: post.id})">
            <img class="featuredImage" ng-src="{{post.acf.featured_image}}"></img>
        </a>

        <a class="viewProject" ui-sref="detail({id: post.id})"> View Project </a>
    </div>
</div>
