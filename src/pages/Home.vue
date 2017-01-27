<template lang="pug">
	section.page
		article.post( v-for="post in posts" )
			header.post-title( v-html="post.getStructuredText('pa.title').asHtml()")
			main.post-body( v-html="post.getStructuredText('pa.description').asHtml()" )
</template>
<script lang="coffee">
	module.exports =
		data: -> { posts: [] }
		created: ->
			self = this
			Prismic = require("prismic.io").Prismic
			Prismic.api "http://testsannomiya.prismic.io/api", (error, api) ->
				if error then console.log error
				else
					query = [ Prismic.Predicates.at("document.type", "pa") ]
					options = {}
					api.query(query, options, (error, response) ->
						if error then console.log error
						else self.posts = response.results
					)
</script>
<style lang="styl">
	/* scopedを設定するとv-htmlのレンダリング結果に影響を与えることができないことに注意。仕様なのかどうかは不明。 */
	.post
		width 680px
		padding 40px
		margin 40px auto
		background-color #fff
	.post-title
		font-size 28pt
		border-bottom 2px solid #ddd
	.post-body
		padding: 20px 0
	.post-body
		p
			font-size 11pt
			min-height 11pt
		strong
			font-weight bold
		h1
			font-size 24pt
		h2
			font-size 18pt
		h3
			font-size 14pt
		h4
			font-size 12pt
		img
			width: 100%
</style>