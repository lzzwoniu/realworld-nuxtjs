import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _24523cc2 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _83888712 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _09741ad1 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _55ff7b11 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _09a0108a = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _18836305 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _3cc9be5e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _24523cc2,
    children: [{
      path: "/",
      component: _83888712,
      name: "home"
    }, {
      path: "/login",
      component: _09741ad1,
      name: "login"
    }, {
      path: "/register",
      component: _09741ad1,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _55ff7b11,
      name: "profile"
    }, {
      path: "/settings",
      component: _09a0108a,
      name: "settings"
    }, {
      path: "/editor",
      component: _18836305,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3cc9be5e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
