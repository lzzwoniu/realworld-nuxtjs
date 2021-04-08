import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('dataTime',(value, fromat = 'YYYY-MM-DD HH:mm:ss')=>{
	return dayjs(value).format(fromat)
})
