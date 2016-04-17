<!--<h1>{{page_title}}</h1>-->
<!--<article ng-repeat="post in posts">-->
<!--	<section class="postSlide">-->
<!--	<h2 ng-bind-html="post.title.rendered | to_trusted"></h2>-->
<!--	</section>-->
<!--</article>-->
<article ng-repeat="post in posts">
	<section class="postSlide">
	<h2 ng-bind-html="post.title.rendered | to_trusted"></h2>
	<a ui-sref="detail({id: post.id})">Check it out</a>
	</section>
</article>

