exports.ids = [2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getFeedArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deletFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticleComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updataUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users/login",
    data: data
  });
}; // 注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users",
    data: data
  });
}; // 公共文章列表

const getArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    params
  });
}; // 关注文章列表

const getFeedArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed",
    // Authorization: Token jwt.token.here
    // headers: {
    // 	Authorization: "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0MzI0LCJ1c2VybmFtZSI6ImxpdXp6IiwiZXhwIjoxNjIyNzkzNjExfQ.OhMABRjF1z3MHyNDNcMxSaDS5Ya0HdKWTVDDf-Ax8gI"
    // },
    params
  });
}; // 文章标签列表

const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/tags"
  });
}; // 文章点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消文章点赞

const deletFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticleDetail = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论列表

const getArticleComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}/comments`
  });
}; // 提交个人信息

const updataUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "PUT",
    url: "/api/user",
    data: data
  });
}; // 获取个人信息

const getUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/profiles/${username}`
  });
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=002dad7f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">hello worlds</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab === 'your_feed'
								},attrs:{"to":{
								name: 'home',
								query: {
									tab: 'your_feed'
								}
							}}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab === 'global_feed'
								},attrs:{"to":{
								name: 'home',
								query: {
									tab: 'global_feed'
								}
							}}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab === 'tag'
								},attrs:{"to":{
								name: 'home',
								query: {
									tab: 'tag'
								}
							}}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
							name: 'profile',
							params: {
								username: article.author.username
							}
						}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
								name: 'profile',
								params: {
									username: article.author.username
								}
							}}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(article.author.username)+"\n\t\t\t\t\t\t\t")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dataTime")(article.createdAt,'MMM D,YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoritDiabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
							active: article.favorited
						}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n\t\t\t\t\t\t")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
						name:'article',
						params:{
							slug: article.slug
						}
					}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totlePage),function(ele){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ",{
							active: ele == _vm.page
						}))+">","</li>",[_c('router-link',{staticClass:"page-link",attrs:{"to":{
								name:'home',
								query: {
									page: ele,
									tag: _vm.$route.query.tag,
									tab: _vm.tab
								}
							}}},[_vm._v(_vm._s(ele))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(ele){return _c('nuxt-link',{key:ele,staticClass:"tag-pill tag-default",attrs:{"to":{
							name: 'home',
							query:{
								tab: 'tag',
								tag: ele
							}
						}}},[_vm._v(_vm._s(ele))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=002dad7f&

// EXTERNAL MODULE: ./api/api.js
var api = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "homePage",

  // 服务端异步渲染 数据会合并到data中
  async asyncData({
    query,
    store
  }) {
    // console.log(store)
    const limit = 20;
    const page = Number.parseInt(query.page || 1);
    const {
      tag
    } = query;
    const tab = query.tab || 'global_feed';
    const loadArticle = store.state.user && tab === 'your_feed' ? api["f" /* getFeedArticle */] : api["c" /* getArticle */]; // 优化异步并行任务

    const [articleRes, taglistRes] = await Promise.all([loadArticle({
      limit,
      offset: (page - 1) * limit,
      tag
    }), Object(api["g" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = taglistRes.data;
    articles.forEach(item => item.favoritDiabled = false);
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tag,
      tab
    };
  },

  // 监听page变化重新加载数据
  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totlePage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async btnZ(article) {
      article.favoritDiabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api["b" /* deletFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 需要点赞
        await Object(api["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoritDiabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "005121e6"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map