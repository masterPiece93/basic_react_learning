(this["webpackJsonpsample-app-1"]=this["webpackJsonpsample-app-1"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(3),a=n.n(c),o=(n(12),n(0)),r=function(e){var t=e.name;return Object(o.jsxs)("p",{children:[" This is test component with props :- name : ",t," "]})},u=n(4),d=n(5),j=n(7),m=n(6),p=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={items:[],isLoaded:!1},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.setState({items:t,isLoaded:!0})}),2e3)}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items;return t?Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsxs)("li",{children:["Name : ",e.name," | Email: ",e.email]},e.id)}))}):Object(o.jsx)("div",{children:"Loading...."})}}]),n}(i.Component);var h=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{name:"test_name"}),Object(o.jsx)(p,{name:"test_name"})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),l()}},[[14,1,2]]]);
//# sourceMappingURL=main.813b65c1.chunk.js.map