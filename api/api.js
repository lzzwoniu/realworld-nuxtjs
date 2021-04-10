import { request } from '../plugins/request'

// 登录
export const login = data => {
	return request({
		method: "POST",
		url: "/api/users/login",
		data: data
	})
}

// 注册
export const register = data => {
	return request({
		method: "POST",
		url: "/api/users",
		data: data
	})
}

// 公共文章列表
export const getArticle = params => {
	return request({
		method: "GET",
		url: "/api/articles",
		params
	})
}

// 关注文章列表
export const getFeedArticle = params => {
	return request({
		method: "GET",
		url: "/api/articles/feed",
		// Authorization: Token jwt.token.here
		// headers: {
		// 	Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0MzI0LCJ1c2VybmFtZSI6ImxpdXp6IiwiZXhwIjoxNjIyNzkzNjExfQ.OhMABRjF1z3MHyNDNcMxSaDS5Ya0HdKWTVDDf-Ax8gI"
		// },
		params
	})
}

// 文章标签列表
export const getTags = () => {
	return request({
		method: "GET",
		url: "/api/tags"
	})
}

// 文章点赞
export const addFavorite = (slug) => {
	return request({
		method: "POST",
		url: `/api/articles/${slug}/favorite`
	})
}

// 取消文章点赞
export const deletFavorite = (slug) => {
	return request({
		method: "DELETE",
		url: `/api/articles/${slug}/favorite`
	})
}

// 获取文章详情
export const getArticleDetail = (slug) => {
	return request({
		method: "GET",
		url: `/api/articles/${slug}`
	})
}

// 获取文章评论列表
export const getArticleComments = slug => {
	return request({
		method: "GET",
		url: `/api/articles/${slug}/comments`
	})
}

// 提交个人信息
export const updataUser = data => {
	return request({
		method: "PUT",
		url: "/api/user",
		data: data
	})
}

// 获取个人信息
export const getUser = username => {
	return request({
		method: "GET",
		url: `/api/profiles/${username}`
	})
}


