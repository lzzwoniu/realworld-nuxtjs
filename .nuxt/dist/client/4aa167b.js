(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"j",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"f",(function(){return m})),r.d(e,"g",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return v})),r.d(e,"e",(function(){return h})),r.d(e,"d",(function(){return w})),r.d(e,"k",(function(){return O})),r.d(e,"h",(function(){return x}));var n=r(62),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},d=function(){return Object(n.b)({method:"GET",url:"/api/tags"})},f=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},h=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},w=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},O=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},x=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})}},271:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(36),r(192)),c={name:"settingPage",middleware:"authenticated",data:function(){return{user:{email:"",bio:"",image:"",username:"",password:""}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.username,e.next=3,Object(o.h)(r);case 3:n=e.sent,data=n.data,t.user=data.profile;case 6:case"end":return e.stop()}}),e)})))()},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.k)(t.user);case 2:t.$router.push("/profile/".concat(t.user.username));case 3:case"end":return e.stop()}}),e)})))()}}},l=r(30),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[t._v("Your Settings")]),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:t.user.image},on:{input:function(e){e.target.composing||t.$set(t.user,"image",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:t.user.bio},on:{input:function(e){e.target.composing||t.$set(t.user,"bio",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[t._v("\n\t\t\t\t\t\t\t\tUpdate Settings\n\t\t\t\t\t\t\t")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);