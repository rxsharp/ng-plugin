<div class="portfolioPage">
    <div ng-repeat="post in posts" class="section-class-name">
   	<h2 ng-bind-html="post.title.rendered | to_trusted"></h2>
   		<a ui-sref="detail({id: post.id})"> &gt; </a>
    </div>
</div>
