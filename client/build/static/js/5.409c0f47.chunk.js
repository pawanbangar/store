(this["webpackJsonptailor-service"]=this["webpackJsonptailor-service"]||[]).push([[5],{126:function(e,a,n){},127:function(e,a,n){},128:function(e,a,n){},129:function(e,a,n){},136:function(e,a,n){"use strict";n.r(a),n.d(a,"SignInandSignOutPage",(function(){return y}));var t=n(0),r=n.n(t),l=(n(126),n(47)),i=n(9);var o=n(49);function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done)&&(n.push(i.value),!a||n.length!==a);t=!0);}catch(s){r=!0,l=s}finally{try{t||null==o.return||o.return()}finally{if(r)throw l}}return n}}(e,a)||Object(o.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(18),u=(n(127),n(45)),m=(n(128),function(e){var a=e.handleChange,n=e.label,t=Object(u.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:a},t)),n?r.a.createElement("label",{className:"".concat(t.value.length?"shrink":""," form-input-label")},n):null)}),p=n(44),d=n(12),f=Object(c.b)(null,(function(e){return{googleSignIn:function(){return e(Object(d.c)())},emailSignIn:function(a,n){return e(Object(d.b)({email:a,password:n}))}}}))((function(e){var a=e.emailSignIn,n=e.googleSignIn,o=s(Object(t.useState)({email:"",password:""}),2),c=o[0],u=o[1],d=c.email,f=c.password,b=function(e){var a=e.target,n=a.value,t=a.name;u(Object(i.a)({},c,Object(l.a)({},t,n)))};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I Aleready Have an Account?"),r.a.createElement("span",null,"Sign in with your Email and Password"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(d,f)}},r.a.createElement(m,{name:"email",handleChange:b,label:"email",type:"email",value:d}),r.a.createElement(m,{name:"password",handleChange:b,label:"password",type:"password",value:f}),r.a.createElement("div",{className:"buttons"},r.a.createElement(p.a,{type:"submit"},"Sign In"),r.a.createElement(p.a,{type:"button",onClick:n,isGoogleSignIn:!0},"Sign In With Google"))))})),b=n(3),g=n.n(b),v=n(50),h=(n(129),Object(c.b)(null,(function(e){return{signUpStart:function(a){return e(Object(d.j)(a))}}}))((function(e){var a=e.signUpStart,n=s(Object(t.useState)({email:"",password:"",displayName:"",confirmPassword:""}),2),o=n[0],c=n[1],u=o.displayName,d=o.email,f=o.password,b=o.confirmPassword,h=function(){var e=Object(v.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),f!==b&&alert("password don't match"),a({displayName:u,email:d,password:f});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),y=function(e){var a=e.target,n=a.name,t=a.value;c(Object(i.a)({},o,Object(l.a)({},n,t)))};return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I Do Not Have an Account"),r.a.createElement("span",null,"Sign Up With Your Email and Password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:h},r.a.createElement(m,{type:"text",name:"displayName",value:u,onChange:y,label:"Display Name",required:!0}),r.a.createElement(m,{type:"email",name:"email",value:d,onChange:y,label:"Email",required:!0}),r.a.createElement(m,{type:"password",name:"password",value:f,onChange:y,label:"Password",required:!0}),r.a.createElement(m,{type:"password",name:"confirmPassword",value:b,onChange:y,label:"Confirm Password",required:!0}),r.a.createElement(p.a,{type:"submit"},"SIGN UP")))}))),y=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(f,null),r.a.createElement(h,null))}}}]);
//# sourceMappingURL=5.409c0f47.chunk.js.map