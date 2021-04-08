const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () =>{
	return {
		user: null
	}
}

export const mutations = {
	setUser (state,data) {
		state.user = data
	}
}

export const actions = {
	// nuxtServerInit是一个特殊的nuxt方法
	// 会在服务端渲染期间自动调用
	// 作用：初始化容器数据，传递数据给客户端使用
	nuxtServerInit ({ commit }, { req }) {
    let user = null
		// 如果请求头中有cookie
    if (req.headers.cookie) {
			// 使用cookieparser把cookie对象转为字符串
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
		// 提交mutation修改state状态
    commit('setUser', user)
  }	
}