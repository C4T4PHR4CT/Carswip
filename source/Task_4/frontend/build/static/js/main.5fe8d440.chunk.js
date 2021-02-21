(this.webpackJsonpTask_4_Frontend=this.webpackJsonpTask_4_Frontend||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(20),o=n.n(s),r=n(4),c=n(5),l=n(11),u=n(7),h=n(6),d=n(16),j=n(2),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"rerender",value:function(){this.setState({state:this.state})}},{key:"rerenderAll",value:function(){n.rerenderAll()}}],[{key:"rerenderAll",value:function(){I.workaround.instance.setState({state:I.workaround.instance.state})}}]),n}(a.a.Component),p=n(0),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"This is a homepage."}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}}]),n}(b),g=(n(27),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{id:"spacer"}),Object(p.jsxs)("div",{id:"navbar",children:[Object(p.jsx)("button",{id:"home",onClick:this.toHome,children:"Home"}),null==sessionStorage.getItem("token")?Object(p.jsx)("button",{id:"login",onClick:this.toLogin,children:"Login"}):Object(p.jsx)("button",{id:"login",onClick:this.logout,children:"Logout"}),Object(p.jsx)("button",{id:"items",onClick:this.toItems,children:"Items"})]})]})}},{key:"toHome",value:function(){window.location.href="/"}},{key:"toLogin",value:function(){window.location.href="/login"}},{key:"logout",value:function(){sessionStorage.removeItem("token"),b.rerenderAll()}},{key:"toItems",value:function(){window.location.href="/items"}}]),n}(b)),f="http://localhost:3001",O=function e(){Object(r.a)(this,e)};O.getToken=function(e,t){return fetch(f+"/token",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Basic "+btoa("".concat(e,":").concat(t))}}).then((function(e){return v(e)})).then((function(e){return e.json()}))},O.getAllItems=function(){return fetch(f+"/item",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then((function(e){return v(e)})).then((function(e){return e.json()}))},O.getItemById=function(e){return fetch(f+"/item/"+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")}}).then((function(e){return v(e)})).then((function(e){return e.json()}))},O.submitSelection=function(e){return fetch(f+"/selection",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("token")},body:JSON.stringify(e)}).then((function(e){return v(e)}))};var v=function(e){return e.status>=400&&e.status<500&&(sessionStorage.removeItem("token"),b.rerenderAll()),e},x=O,k=(n(28),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={selection:[],display:[],itemsPerPage:5},x.getAllItems().then((function(e){i.state.items=e,i.state.maxPage=Math.floor(i.state.items.length/i.state.itemsPerPage)+1,i.state.page=parseInt(new URLSearchParams(window.location.search).get("page")),isNaN(i.state.page)&&(window.location.href=window.location.href.split("?")[0]+"?page=1"),i.state.page>i.state.maxPage&&(window.location.href=window.location.href.split("?")[0]+"?page="+i.state.maxPage),i.state.page<1&&(window.location.href=window.location.href.split("?")[0]+"?page=1");for(var t=(i.state.page-1)*i.state.itemsPerPage;t<i.state.page*i.state.itemsPerPage&&t<i.state.items.length;t++)i.state.display[i.state.display.length]=i.state.items[t];var n=sessionStorage.getItem("selection");null!=n&&""!==n?i.state.selection=JSON.parse(n):sessionStorage.setItem("selection",JSON.stringify(i.state.selection)),i.rerender()})),i.previousPage=i.previousPage.bind(Object(l.a)(i)),i.nextPage=i.nextPage.bind(Object(l.a)(i)),i.detailItem=i.detailItem.bind(Object(l.a)(i)),i.submitSelection=i.submitSelection.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"isSelected",value:function(e){for(var t=!1,n=0;n<this.state.selection.length;n++)if(this.state.selection[n]===e){t=!0;break}return t}},{key:"updateSelection",value:function(e){if(document.getElementById(e).checked){for(var t=!1,n=0;n<this.state.selection.length;n++)if(this.state.selection[n]===e){t=!0;break}t||(this.state.selection[this.state.selection.length]=e)}else for(var i=0;i<this.state.selection.length;i++)if(this.state.selection[i]===e){for(var a=[],s=0;s<this.state.selection.length;s++)s!==i&&(a[a.length]=this.state.selection[s]);this.state.selection=a,i--}sessionStorage.setItem("selection",JSON.stringify(this.state.selection)),this.rerender()}},{key:"nextPage",value:function(){window.location.href=window.location.href.split("?")[0]+"?page="+(this.state.page+1)}},{key:"previousPage",value:function(){window.location.href=window.location.href.split("?")[0]+"?page="+(this.state.page-1)}},{key:"detailItem",value:function(e){window.location.href="/item?id="+e}},{key:"submitSelection",value:function(){x.submitSelection(this.state.selection).then((function(){return null})),this.state.selection=[],sessionStorage.setItem("selection",JSON.stringify(this.state.selection));for(var e=document.getElementsByClassName("checkbox"),t=0;t<e.length;t++)e[t].checked=!1;this.rerender()}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Item List"}),Object(p.jsxs)("h4",{children:["Data from: ",Object(p.jsx)("a",{href:"http://wikiroulette.co",target:"_blank",children:"http://wikiroulette.co"})]}),Object(p.jsx)("form",{children:this.state.display.map((function(t,n){return Object(p.jsxs)("div",{className:"item",children:[Object(p.jsx)("p",{onClick:function(){return e.detailItem(t.id)},children:t.name}),Object(p.jsx)("input",{className:"checkbox",type:"checkbox",id:t.id,onChange:function(){return e.updateSelection(t.id)},defaultChecked:e.isSelected(t.id)}),Object(p.jsx)("label",{children:"add to selection"})]},n)}))}),Object(p.jsxs)("div",{id:"pageNav",children:[Object(p.jsx)("button",{disabled:this.state.page<=1,onClick:this.previousPage,children:"<"}),Object(p.jsxs)("p",{children:["Page ",this.state.page,"/",this.state.maxPage]}),Object(p.jsx)("button",{disabled:this.state.page>=this.state.maxPage,onClick:this.nextPage,children:">"})]}),Object(p.jsx)("button",{id:"submit",disabled:0===this.state.selection.length,onClick:this.submitSelection,children:"Submit Selection"})]})}}]),n}(b)),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).state={invalid:!1};var a=parseInt(new URLSearchParams(window.location.search).get("id"));return isNaN(a)?i.state.invalid=!0:x.getItemById(a).then((function(e){i.state.item=e,null==i.state.item.name&&(i.state.invalid=!0),i.rerender()})),i}return Object(c.a)(n,[{key:"render",value:function(){return this.state.invalid?Object(p.jsx)("h3",{children:"Sorry, but your princess is in another castle :c"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:null!=this.state.item&&this.state.item.name}),Object(p.jsx)("p",{children:null!=this.state.item&&this.state.item.description})]})}}]),n}(b),y=(n(29),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={username:"",password:"",error:""},i.login=i.login.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"login",value:function(){var e=this;x.getToken(this.state.username,this.state.password).then((function(t){null!=t.token?(sessionStorage.setItem("token",t.token),"/login"===window.location.pathname&&(window.location.pathname="/")):e.state.error="Incorrect username or password",b.rerenderAll()}))}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{id:"login_base",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"label",children:"username:"}),Object(p.jsx)("input",{placeholder:"Enter username",type:"text",onChange:function(t){return e.state.username=t.target.value},onKeyDown:function(t){13===t.keyCode&&e.login()}}),Object(p.jsx)("p",{className:"label",children:"password:"}),Object(p.jsx)("input",{placeholder:"Enter password",type:"password",onChange:function(t){return e.state.password=t.target.value},onKeyDown:function(t){13===t.keyCode&&e.login()}}),Object(p.jsx)("button",{id:"login_button",onClick:this.login,children:"Login"}),Object(p.jsx)("p",{id:"login_error",children:this.state.error})]})})}}]),n}(b)),S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={path:e.path,component:e.component},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(j.a,{path:this.state.path,render:function(){return null!=sessionStorage.getItem("token")?Object(p.jsx)(e.state.component,{}):Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{style:{color:"red"},children:"You need to log in first to see this page!"})]})}})}}]),n}(b),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={},"/item"===window.location.pathname.substring(0,5)&&"reload"!==performance.getEntriesByType("navigation")[0].type||sessionStorage.setItem("selection","[]"),i.instance=Object(l.a)(i),n.workaround=i.instance,i}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(d.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",exact:!0,component:m}),Object(p.jsx)(S,{path:"/items",component:k}),Object(p.jsx)(S,{path:"/item",component:w}),Object(p.jsx)(j.a,{path:"/login",component:y})]})]})})}}]),n}(a.a.Component);n(35);o.a.render(Object(p.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5fe8d440.chunk.js.map