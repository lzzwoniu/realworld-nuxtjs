import axios from 'axios'

export const request = axios.create({
	baseURL: "https://conduit.productionready.io"
})

// 通过插件机智获取到上下文对象（query、params、req、res、app、store...）
export default ({ store }) => {
  // Set the function directly on the context.app object
	/*
	*请求拦截器
	*任何请求都会经过请求拦截器
	*我们可以再请求拦截器中做一些公共处理，例如：统一设置token
	*/
  request.interceptors.request.use(function (config) {
		// Do something before request is sent
		// 所有的请求都会经过这里
		const { user } = store.state
		if(user && user.token){
			config.headers.Authorization = `Token ${user.token}`
		}
		// 返回config对象
		return config;
	}, function (error) {
		// Do something with request error
		return Promise.reject(error);
	});
}
