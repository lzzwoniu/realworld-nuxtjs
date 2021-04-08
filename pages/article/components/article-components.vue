<template>
	<div class="wrapper">
		<form class="card comment-form">
			<div class="card-block">
				<textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
			</div>
			<div class="card-footer">
				<img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
				<button class="btn btn-sm btn-primary">
				Post Comment
				</button>
			</div>
		</form>
		
		<div class="card" v-for="comment in comments" :key="comment.id">
			<div class="card-block">
				<p class="card-text">{{comment.body}}</p>
			</div>
			<div class="card-footer">
				<nuxt-link class="comment-author" :to="{
					name:'proflie',
					params: {
						username:comment.author.username 
					},
				}">
					<img class="comment-author-img" :src="comment.author.image" alt="">
				</nuxt-link>
				&nbsp;
				<nuxt-link class="comment-author" :to="{
					name:'proflie',
					params: {
						username:comment.author.username 
					}
				}">{{comment.author.username}}</nuxt-link>
				<span class="date-posted">{{comment.createdAt | dataTime('YYY DD, YYYY')}}</span>
			</div>
		</div>

	</div>
</template>

<script>
import { getArticleComments } from '@/api/api'
export default {
	name:'articleComponents',
	props: {
		article: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			comments: []
		}
	},
	async mounted () {
		const { data } = await getArticleComments(this.article.slug)
		this.comments = data.comments
		console.log(data,"data")
	}
};
</script>
<style>
</style>