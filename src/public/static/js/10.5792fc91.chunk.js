(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{38:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a,n=r(0);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i(e,t){var r=e.title,i=e.titleId,o=c(e,["title","titleId"]);return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:t,"aria-labelledby":i},o),r?n.createElement("title",{id:i},r):null,a||(a=n.createElement("g",{"data-name":"Looding 19"},n.createElement("path",{d:"M29.89 15.81a2.51 2.51 0 1 0-5 .45 9.65 9.65 0 0 1-1.68 6.34 10.24 10.24 0 0 1-5.74 4 10.71 10.71 0 0 1-7.38-.7 11.44 11.44 0 0 1-5.48-5.62A12.07 12.07 0 0 0 9.46 27 12.58 12.58 0 0 0 17.9 29a13.31 13.31 0 0 0 8.18-4 14 14 0 0 0 3.81-8.75v-.08A2.29 2.29 0 0 0 29.89 15.81zM7.11 15.74A9.65 9.65 0 0 1 8.79 9.4a10.24 10.24 0 0 1 5.74-4 10.71 10.71 0 0 1 7.38.7 11.44 11.44 0 0 1 5.48 5.62A12.07 12.07 0 0 0 22.54 5 12.58 12.58 0 0 0 14.1 3 13.31 13.31 0 0 0 5.92 7a14 14 0 0 0-3.81 8.75v.08a2.29 2.29 0 0 0 0 .37 2.51 2.51 0 1 0 5-.45z"}))))}var o=n.forwardRef(i);r.p},43:function(e,t,r){"use strict";var a=r(0),n=r(2);t.a=function(e){var t=e.message,r=e.setMessage,s=e.timer;return Object(a.useEffect)((function(){return function(){s&&clearTimeout(s)}}),[]),Object(n.jsxs)("div",{className:t?"snackbar on":"snackbar",children:[Object(n.jsx)("span",{className:"snack_message",children:t}),Object(n.jsx)("button",{className:"btn_close_snack",onClick:function(){s?(r(""),clearTimeout(s)):r("")},children:"Close"})]})}},81:function(e,t,r){"use strict";r.r(t);var a,n=r(36),s=r.n(n),c=r(37),i=r(35),o=r(0),l=r(40),u=r(45),d=r(56),p=r(46),m=r(34),f=r(38),v=r(2),j=function(e){var t,r,a,n,s=e.user,c=e.updateUser,i=e.loading,l=Object(p.a)(),u=l.register,d=l.handleSubmit,j=l.errors,b=l.reset;return Object(o.useEffect)((function(){return b({fullName:null===s||void 0===s?void 0:s.fullName,phone:null===s||void 0===s?void 0:s.phone,description:null===s||void 0===s?void 0:s.description,email:null===s||void 0===s?void 0:s.email}),function(){}}),[s,b]),Object(v.jsxs)("form",{className:"form_update_profile",onSubmit:d(c),children:[Object(v.jsxs)("div",{className:"controller_update_profile",children:[Object(v.jsx)("input",{type:"text",placeholder:"Full Name",name:"fullName",disabled:"form"!==(null===s||void 0===s?void 0:s.provider),className:"form"!==(null===s||void 0===s?void 0:s.provider)?"disabled":"",ref:u({required:{value:!0,message:"Please enter your full name"}})}),Object(v.jsx)("p",{className:"message_error",children:null===(t=j.fullName)||void 0===t?void 0:t.message})]}),Object(v.jsxs)("div",{className:"controller_update_profile",children:[Object(v.jsx)("input",{type:"text",placeholder:"Email",name:"email",disabled:"form"!==(null===s||void 0===s?void 0:s.provider),className:"form"!==(null===s||void 0===s?void 0:s.provider)?"disabled":"",ref:u({required:{value:!0,message:"Please enter your email"},pattern:{value:m.a.email_pattern,message:"Email invalid"}})}),Object(v.jsx)("p",{className:"message_error",children:null===(r=j.email)||void 0===r?void 0:r.message})]}),Object(v.jsxs)("div",{className:"controller_update_profile",children:[Object(v.jsx)("input",{type:"text",placeholder:"Phone",name:"phone",ref:u({required:{value:!0,message:"Please enter your phone"},pattern:{value:m.a.number_pattern,message:"Just Numbers"}})}),Object(v.jsx)("p",{className:"message_error",children:null===(a=j.phone)||void 0===a?void 0:a.message})]}),Object(v.jsxs)("div",{className:"controller_area_update_profile",children:[Object(v.jsx)("textarea",{placeholder:"About You",name:"description",ref:u({required:{value:!0,message:"Please enter your description"}})}),Object(v.jsx)("p",{className:"message_error",children:null===(n=j.description)||void 0===n?void 0:n.message})]}),Object(v.jsxs)("button",{className:"btn_update_user",type:"submit",children:[i?Object(v.jsx)(f.a,{}):null,"Update"]})]})},b=r(43),h=r(14),O=r(39),g=r.n(O),x=r(1),_=function(){var e=localStorage.getItem("t1ks1ehn"),t=Object(x.h)().id;return{update:function(){var r=Object(c.a)(s.a.mark((function r(a){var n,c;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.a.put("".concat(m.a.api_uri,"/update/").concat(t),a,{headers:{Authorization:"Bearer ".concat(e)}});case 2:return n=r.sent,c=n.data,r.abrupt("return",c);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}},N=function(){var e=_().update,t=Object(o.useRef)(null),r=Object(o.useState)(0),a=Object(i.a)(r,2),n=a[0],l=a[1],u=function(e){var t=100*e.loaded/e.total;l(t)};return{progress:n,updatePhoto:function(){var r=Object(c.a)(s.a.mark((function r(a){var n,c,i,o,d,p;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l(0),n=new FormData,r.prev=2,r.next=5,g.a.get("".concat(m.a.api_uri,"/signature"));case 5:return i=r.sent,o=i.data,n.append("file",a),n.append("signature",o.signature),n.append("api_key",o.api_key),n.append("timestamp",o.timestamp),null===(c=t.current)||void 0===c||c.classList.add("on"),r.next=14,g.a.post("https://api.cloudinary.com/v1_1/dder8kjda/image/upload",n,{onUploadProgress:u});case 14:return d=r.sent,p=d.data.secure_url,r.next=18,e({avatar:p});case 18:r.next=23;break;case 20:throw r.prev=20,r.t0=r.catch(2),r.t0.message;case 23:case"end":return r.stop()}}),r,null,[[2,20]])})));return function(e){return r.apply(this,arguments)}}(),progressRef:t}};t.default=function(){var e=Object(l.a)(),t=e.user,r=e.getUser,n=_().update,p=N(),m=p.progress,f=p.updatePhoto,O=p.progressRef,g=Object(o.useState)(""),x=Object(i.a)(g,2),y=x[0],w=x[1],k=Object(o.useState)(!1),E=Object(i.a)(k,2),P=E[0],T=E[1],S=Object(o.useRef)(null),A=function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!0),a&&clearTimeout(a),e.next=4,n(t);case 4:T(!1),a=setTimeout((function(){w(""),clearTimeout(a)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(s.a.mark((function e(t){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,f(a);case 5:null===(r=O.current)||void 0===r||r.classList.remove("on");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){return h.a.bind("user-updated",(function(e){var t=e.message;console.log(t),w(t)})),h.a.bind("user-photo-updated",Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Here"),e.next=3,r();case 3:w("User photo changed"),a=setTimeout((function(){w(""),clearTimeout(a)}),3e3);case 5:case"end":return e.stop()}}),e)})))),r(),function(){a&&clearTimeout(a),h.a.unbind()}}),[]),Object(v.jsxs)("div",{className:"edit_profile_page fadeIn",children:[Object(v.jsx)(u.a,{user:t}),Object(v.jsxs)("div",{className:"subcontainer_edit_profile",children:[Object(v.jsx)("h1",{className:"title_edit_profile",children:"EDIT PROFILE"}),Object(v.jsxs)("div",{className:"form_container",children:[Object(v.jsxs)("div",{className:"image_profile_container",onClick:function(){var e;return null===(e=S.current)||void 0===e?void 0:e.click()},children:[Object(v.jsx)("img",{src:null===t||void 0===t?void 0:t.avatar,alt:""}),Object(v.jsxs)("div",{className:"hover_content",children:[Object(v.jsx)(d.a,{}),Object(v.jsx)("p",{className:"hover_text",children:"CHANGE PHOTO"})]})]}),Object(v.jsx)("input",{type:"file",name:"",id:"",style:{display:"none"},ref:S,onChange:I}),Object(v.jsx)(j,{user:t,updateUser:A,loading:P})]})]}),Object(v.jsx)(b.a,{message:y,timer:a,setMessage:w}),Object(v.jsx)("div",{className:"progress_container",ref:O,children:Object(v.jsxs)("div",{className:"progress_bar_container",children:[Object(v.jsx)("h1",{className:"progress_title",children:"Uploading"}),Object(v.jsx)("div",{className:"bar",children:Object(v.jsx)("div",{className:"progress",style:{width:"".concat(m,"%")}})})]})})]})}}}]);
//# sourceMappingURL=10.5792fc91.chunk.js.map