<div class="portfolioPage">
<wa-nav></wa-nav>
<article ng-repeat="post in posts">
	<section class="postSlide">
	<h2 ng-bind-html="post.title.rendered | to_trusted"></h2>
	<a ui-sref="detail({id: post.id})"> &gt; </a>
	</section>
</article>
</div>
