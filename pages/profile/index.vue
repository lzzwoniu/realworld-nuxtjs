<template>
	<div class="profile-page">

		<div class="user-info">
			<div class="container">
				<div class="row">

					<div class="col-xs-12 col-md-10 offset-md-1">
						<img :src="usermsg.image" class="user-img" />
						<h4>{{usermsg.username}}</h4>
						<p>
							{{usermsg.bio}}
						</p>
						<nuxt-link :to="{
								name: 'settings',
								params: {
									username: usermsg.username
								}
							}" class="btn btn-sm btn-outline-secondary action-btn">
							<i class="ion-gear-a"></i>
							&nbsp;
							Edit Profile Settings 
						</nuxt-link>
					</div>

				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">

				<div class="col-xs-12 col-md-10 offset-md-1">
					<div class="articles-toggle">
						<ul class="nav nav-pills outline-active">
							<li class="nav-item">
								<nuxt-link class="nav-link"
									:class="{
										active: tab == 'my_list'
									}" 
								 :to="{
									name: 'profile',
									query: {
										tab: 'my_list'
									}
								}">My Articles</nuxt-link>
							</li>
							<li class="nav-item" >
								<nuxt-link class="nav-link"
									:class="{
										active: tab == 'favo_list'
									}" 
									:to="{
									name: 'profile',
									query: {
										tab: 'favo_list'
									}
								}">Favorited Articles</nuxt-link>
							</li>
						</ul>
					</div>

					<div class="article-preview" v-for="article in articles" :key="article.slug">
						<div class="article-meta">
							<nuxt-link :to="{
								name: 'profile',
								params: {
									username: article.author.username
								}
							}">
								<img :src="article.author.image" />
							</nuxt-link>
							<div class="info">
								<nuxt-link :to="{
									name: 'profile',
									params: {
										username: article.author.username
									}
								}" class="author">{{article.author.username}}</nuxt-link>
								<span class="date">{{article.createdAt | dataTime('MMMM DD, YYYY')}}</span>
							</div>
							<button class="btn btn-outline-primary btn-sm pull-xs-right"
							:class="{
								active:article.favorited 
							}"
							@click="btnlike(article)" :disabled="article.favoritDiabled">
								<i class="ion-heart"></i> 29
							</button>
						</div>
						<nuxt-link :to="{
							name: 'article',
							params:{
								slug: article.slug
							}
						}" class="preview-link">
							<h1>{{article.body}}</h1>
							<p>{{article.description}}</p>
							<span>Read more...</span>
						</nuxt-link>
					</div>


				</div>

			</div>
		</div>

	</div>
</template>

<script>
import { getUser, getArticle, deletFavorite, addFavorite } from '@/api/api'
export default {
	name: "profilePage",
	middleware: "authenticated",
	data() {
		return {
		}
	},
	watchQuery: ['tab'],
	async asyncData({query, params}){
		const limit = 20
		const { username } = params
		const tab = query.tab || 'my_list'
		const page = Number.parseInt(params.page || 1)
		const [ usetData, articleList] = await Promise.all([
			getUser(username),
			getArticle({
				author: tab == 'my_list' ? username : '',
				limit: limit,
				offset: (page-1) * limit,
				favorited: tab == 'favo_list' ? username : ''
			})
		])
		const { profile } = usetData.data
		const { articles } = articleList.data
		articles.forEach(item => item.favoritDiabled == false)
		return {
			usermsg: profile,
			articles,
			tab
		}
	},
	methods: {
		async btnlike (article) {
			article.favoritDiabled = true
			if(article.favorited){ //取消
				await deletFavorite(article.slug)
				article.favorited = false
				article.favoritesCount += -1
			}else{
				await addFavorite(article.slug)
				article.favorited = true
				article.favoritesCount += 1
			}
			article.favoritDiabled = false
		}
	},
};
</script>
<style>
</style>