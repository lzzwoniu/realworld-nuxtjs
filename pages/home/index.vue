<template>
	<div class="home-page">

		<div class="banner">
			<div class="container">
				<h1 class="logo-font">hello world</h1>
				<p>A place to share your knowledge.</p>
			</div>
		</div>

		<div class="container page">
			<div class="row">

				<div class="col-md-9">
					<div class="feed-toggle">
						<ul class="nav nav-pills outline-active">
							<li v-if="user" class="nav-item">
								<nuxt-link class="nav-link"
									:class="{
										active: tab === 'your_feed'
									}"
								 :to="{
									name: 'home',
									query: {
										tab: 'your_feed'
									}
								}">Your Feed</nuxt-link>
							</li>
							<li class="nav-item">
								<nuxt-link class="nav-link"
									:class="{
										active: tab === 'global_feed'
									}"
								 :to="{
									name: 'home',
									query: {
										tab: 'global_feed'
									}
								}">Global Feed</nuxt-link>
							</li>
							<li v-if="tag" class="nav-item">
								<nuxt-link class="nav-link"
									:class="{
										active: tab === 'tag'
									}"
								 :to="{
									name: 'home',
									query: {
										tab: 'tag'
									}
								}">#{{tag}}</nuxt-link>
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
								<img :src="article.author.image">
							</nuxt-link>
							<div class="info">
								<nuxt-link class="author" :to="{
									name: 'profile',
									params: {
										username: article.author.username
									}
								}">
								{{article.author.username}}
								</nuxt-link>
								<span class="date">{{article.createdAt | dataTime('MMM D,YYYY')}}</span>
							</div>
							<button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{
								active: article.favorited
							}" @click="btnZ(article)" :disabled="article.favoritDiabled">
								<i class="ion-heart"></i> {{article.favoritesCount}}
							</button>
						</div>
						<nuxt-link :to="{
							name:'article',
							params:{
								slug: article.slug
							}
						}" class="preview-link">
							<h1>{{article.title}}</h1>
							<p>{{article.description}}</p>
							<span>Read more...</span>
						</nuxt-link>
					</div>
					<!-- 页码 -->
					<nav>
						<ul class="pagination">
							<li class="page-item " :class="{
								active: ele == page
							}" v-for="ele in totlePage" :key='ele'>
								<router-link class="page-link" :to="{
									name:'home',
									query: {
										page: ele,
										tag: $route.query.tag,
										tab: tab
									}
								}">{{ele}}</router-link>
							</li>
						</ul>
					</nav>

				</div>
				<!-- 点击文章标签 -->
				<div class="col-md-3">
					<div class="sidebar">
						<p>Popular Tags</p>
						<div class="tag-list">
							<nuxt-link v-for="ele in tags" :key="ele" :to="{
								name: 'home',
								query:{
									tab: 'tag',
									tag: ele
								}
							}" class="tag-pill tag-default">{{ele}}</nuxt-link>
						</div>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
import { 
	getArticle, 
	getTags, 
	getFeedArticle,
	addFavorite,
	deletFavorite
} from '@/api/api'
import { mapState } from 'vuex'
export default {
	name:"homePage",
	// 服务端异步渲染 数据会合并到data中
	async asyncData({ query, store}) {
		// console.log(store)
		const limit = 20
		const page = Number.parseInt(query.page || 1)
		const { tag } = query
		const tab = query.tab || 'global_feed'
		const loadArticle = store.state.user && tab === 'your_feed' 
		? getFeedArticle
		: getArticle
		// 优化异步并行任务
		const [articleRes, taglistRes] = await Promise.all([
			loadArticle({
				limit,
				offset: (page-1) * limit,
				tag
			}),
			getTags()
		])
		const { articles, articlesCount} = articleRes.data
		const { tags } = taglistRes.data
		articles.forEach(item=> item.favoritDiabled = false)
		return {
			articles,
			articlesCount,
			tags,
			limit,
			page,
			tag,
			tab, 
		}
	},
	// 监听page变化重新加载数据
	watchQuery: ['page', 'tag', 'tab'],
	computed: {
		...mapState(['user']),
		totlePage(){
			return Math.ceil(this.articlesCount/this.limit)
		}
	},
	methods: {
		async btnZ (article) {
			article.favoritDiabled = true
			if(article.favorited){
				// 取消点赞
				await deletFavorite(article.slug)
				article.favorited = false
				article.favoritesCount += -1
			}else{
				// 需要点赞
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