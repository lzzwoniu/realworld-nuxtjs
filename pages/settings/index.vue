<template>
	<div class="settings-page">
		<div class="container page">
			<div class="row">

				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Your Settings</h1>

					<form @submit.prevent="onSubmit">
						<fieldset>
								<fieldset class="form-group">
									<input v-model="user.image" class="form-control" type="text" placeholder="URL of profile picture">
								</fieldset>
								<fieldset class="form-group">
									<input v-model="user.username" class="form-control form-control-lg"  type="text" placeholder="Your Name">
								</fieldset>
								<fieldset class="form-group">
									<textarea v-model="user.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
								</fieldset>
								<fieldset class="form-group">
									<input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
								</fieldset>
								<fieldset class="form-group">
									<input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
								</fieldset>
								<button  class="btn btn-lg btn-primary pull-xs-right">
									Update Settings
								</button>
						</fieldset>
					</form>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { updataUser, getUser } from '@/api/api'
export default {
	name:'settingPage',
	middleware: "authenticated",
	data() {
		return {
			"user":{
				"email": "",
				"bio": "",
				"image": "",
				"username": '',
				"password": ''
			},
		}
	},
	async mounted() {
		const uname = this.$route.params.username
		const { data } = await getUser(uname)
		this.user = data.profile
	},
	methods: {
		async onSubmit(){
			await updataUser(this.user)
			this.$router.push(`/profile/${this.user.username}`)
		}
	},
};
</script>
<style>
</style>