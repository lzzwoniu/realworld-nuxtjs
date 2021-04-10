exports.ids = [4];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=7570c273&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.usermsg.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.usermsg.username))+"</h4> <p>"+_vm._ssrEscape("\n\t\t\t\t\t\t"+_vm._s(_vm.usermsg.bio)+"\n\t\t\t\t\t")+"</p> "),_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":{
							name: 'settings',
							params: {
								username: _vm.usermsg.username
							}
						}}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v("\n\t\t\t\t\t\t \n\t\t\t\t\t\tEdit Profile Settings \n\t\t\t\t\t")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab == 'my_list'
								},attrs:{"to":{
								name: 'profile',
								query: {
									tab: 'my_list'
								}
							}}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
									active: _vm.tab == 'favo_list'
								},attrs:{"to":{
								name: 'profile',
								query: {
									tab: 'favo_list'
								}
							}}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
							name: 'profile',
							params: {
								username: article.author.username
							}
						}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
								name: 'profile',
								params: {
									username: article.author.username
								}
							}}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dataTime")(article.createdAt,'MMMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoritDiabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
							active:article.favorited 
						}))+"><i class=\"ion-heart\"></i> 29\n\t\t\t\t\t\t</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
						name: 'article',
						params:{
							slug: article.slug
						}
					}}},[_c('h1',[_vm._v(_vm._s(article.body))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=7570c273&

// EXTERNAL MODULE: ./api/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "profilePage",
  middleware: "authenticated",

  data() {
    return {};
  },

  watchQuery: ['tab'],

  async asyncData({
    query,
    params
  }) {
    const limit = 20;
    const {
      username
    } = params;
    const tab = query.tab || 'my_list';
    const page = Number.parseInt(params.page || 1);
    const [usetData, articleList] = await Promise.all([Object(api["h" /* getUser */])(username), Object(api["c" /* getArticle */])({
      author: tab == 'my_list' ? username : '',
      limit: limit,
      offset: (page - 1) * limit,
      favorited: tab == 'favo_list' ? username : ''
    })]);
    const {
      profile
    } = usetData.data;
    const {
      articles
    } = articleList.data;
    articles.forEach(item => item.favoritDiabled == false);
    return {
      usermsg: profile,
      articles,
      tab
    };
  },

  methods: {
    async btnlike(article) {
      article.favoritDiabled = true;

      if (article.favorited) {
        //取消
        await Object(api["b" /* deletFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(api["a" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoritDiabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "407dd158"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map