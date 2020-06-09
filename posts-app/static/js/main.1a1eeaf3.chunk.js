(this["webpackJsonpposts-app"]=this["webpackJsonpposts-app"]||[]).push([[0],{15:function(t,e,n){t.exports=n(27)},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=n(9),u=n(6),i=n(2),l=n(3),p=n(5),m=n(4),f=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.post,n=t.removePost,a=t.onToggleImportant,c="fa fa-star";return e.important&&(c+=" important"),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"postItem-text"},e.text),r.a.createElement("i",{onClick:function(){return a(e.id)},className:c}),r.a.createElement("button",{onClick:function(){return n(e.id)},className:"btn btn-outline-danger"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"))}}]),n}(a.Component),d={removePost:function(t){return{type:"REMOVE_POST",id:t}},onToggleImportant:function(t){return{type:"TOGGLE_IMPORTANT",id:t}}},h=Object(u.b)(void 0,d)(f),b=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.posts.map((function(t,e){return r.a.createElement("li",{className:"list-group-item animated",key:e},r.a.createElement(h,{post:t}))}));return r.a.createElement("ul",{className:"list-group"},t)}}]),n}(a.Component),O=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).updateSearch=function(e){var n=e.target.value;t.props.searchPosts(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{type:"text",className:"form form-control",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.updateSearch})}}]),n}(a.Component),j=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={inputValue:""},t.onInputChange=function(e){t.setState({inputValue:e.target.value})},t.onAddPost=function(e){t.setState({inputValue:""}),""!==e.trim()&&t.props.addPost(e)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.inputValue,n=this.props.posts,a=n.filter((function(t){return t.important}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"\u0417\u0430\u043f\u0438\u0441\u0438"),r.a.createElement("input",{className:"form form-control",onChange:this.onInputChange,value:e,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c..."}),r.a.createElement("button",{onClick:function(){return t.onAddPost(e)},className:"btn btn-outline-success"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("div",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439: ",n.length," \u0438\u0437 \u043d\u0438\u0445 \u0432\u0430\u0436\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439: ",a.length),r.a.createElement(O,{searchPosts:this.props.searchPosts}))}}]),n}(a.Component),v={addPost:function(t){return{type:"ADD_POST",post:t}},searchPosts:function(t){return{type:"SEARCH_POSTS",searchValue:t}}},E=Object(u.b)((function(t){return{posts:t.posts}}),v)(j),g=(n(26),function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).onFilterPosts=function(t,e){return 0===e.length?t:t.filter((function(t){return t.text.toLowerCase().indexOf(e.toLowerCase().trim())>-1}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.posts,n=t.searchInputValue,a=this.onFilterPosts(e,n);return r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(b,{posts:a}))}}]),n}(a.Component)),y=Object(u.b)((function(t){return{posts:t.posts,searchInputValue:t.searchInputValue}}),void 0)(g),P=n(1),I=n(7),x={posts:[{text:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041a\u0430\u043a \u0434\u0435\u043b\u0430?",id:1,important:!1},{text:"\u041f\u043e\u043a\u0430!",id:2,important:!1}],maxId:3,searchInputValue:""},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_POST":var n={text:e.post,id:t.maxId,important:!1},a=t.posts.map((function(t){return t})),r=[].concat(Object(I.a)(a),[n]);return Object(P.a)(Object(P.a)({},t),{},{posts:r,maxId:t.maxId+=1});case"REMOVE_POST":var c=t.posts.map((function(t){return t})),o=c.findIndex((function(t){return t.id===e.id})),s=[].concat(Object(I.a)(c.slice(0,o)),Object(I.a)(c.slice(o+1)));return Object(P.a)(Object(P.a)({},t),{},{posts:s});case"TOGGLE_IMPORTANT":var u=t.posts.map((function(t){return t})),i=u.findIndex((function(t){return t.id===e.id})),l=u[i],p=Object(P.a)(Object(P.a)({},l),{},{important:!l.important}),m=[].concat(Object(I.a)(u.slice(0,i)),[p],Object(I.a)(u.slice(i+1)));return Object(P.a)(Object(P.a)({},t),{},{posts:m});case"SEARCH_POSTS":return Object(P.a)(Object(P.a)({},t),{},{searchInputValue:e.searchValue});default:return t}},S=Object(s.b)(C);o.a.render(r.a.createElement(u.a,{store:S},r.a.createElement(y,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1a1eeaf3.chunk.js.map