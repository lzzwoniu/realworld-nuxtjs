<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">

				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">{{isLogin ? "Sign in" : "Sign up"}}</h1>
					<p class="text-xs-center">
						<nuxt-link to="/register" v-if="isLogin">Need an account?</nuxt-link>
						<nuxt-link to="/login" v-else>Have an account?</nuxt-link>
					</p>

					<ul class="error-messages">
						<template v-for="(errval, errkey) in errors" >
							<li v-for="(msg, index) in errval" :key="index"
							>{{errkey}} {{msg}}</li>
						</template>
					</ul>

					<form @submit.prevent="onSubmit">
						<fieldset class="form-group" v-if="!isLogin">
							<input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name">
						</fieldset>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" v-model="user.email" type="Email" placeholder="Email" required>
						</fieldset>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" v-model="user.password" type="Password" placeholder="Password" required minlength="8">
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right">
							{{isLogin ? "Sign in" : "Sign up"}}
						</button>
					</form>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { login, register } from '@/api/api'
// 判断客户端的话加载js-cookie
const Cookie = process.client ? require('js-cookie') : undefined
export default {
	name: "loginPage",
	middleware: "notAuthenticated",
	computed: {
		isLogin(){
			return this.$route.name === 'login'
		}
	},
	data() {
		return {
			user: {
				username: "",
				email: "",
				password: ""
			},
			errors: {}
		}
	},
	methods: {
		async onSubmit () {
			try {
				const { data } = this.isLogin   
				?	await login({
						user: this.user
					})
				: await register({
						user: this.user
					})
				// 调用commit，存储到容器中
				this.$store.commit('setUser', data.user)
				// 将登录状态持久化存储
				Cookie.set("user", data.user)
				this.$router.push('/')
			} catch (error) {
				this.errors = error.response.data.errors
				console.dir(this.errors)
			}
			
		}
	},
};
</script>
<style>
</style>