(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{103:function(e,t,a){e.exports={nav:"MovieDetailsView_nav__1542e",link:"MovieDetailsView_link__Xv9N7",active:"MovieDetailsView_active__3D5zp"}},104:function(e,t,a){e.exports={article:"MovieDetails_article__38i5Y",titleBlock:"MovieDetails_titleBlock__10ZYK",movieTitle:"MovieDetails_movieTitle__wrymE",image:"MovieDetails_image__sGBCb",description:"MovieDetails_description__2wXPH",title:"MovieDetails_title__3ERyW",vote:"MovieDetails_vote__2Dytl",voteText:"MovieDetails_voteText__37tbZ",genresList:"MovieDetails_genresList__1RHyy",overview:"MovieDetails_overview__xkTVp",link:"MovieDetails_link__2vYZL",icon:"MovieDetails_icon__2ca8G"}},126:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(66),r=a(55),c=a(1),i=a(4),s=a(11),o=a(16),l=a.n(o),u=a(103),v=a.n(u),p=a(56),b=a(105),j=a(104),h=a.n(j),d=a(57),f=a(2);function m(e){var t=e.title,a=e.vote_average,n=e.homepage,r=e.genres,c=e.poster_path,i=(e.backdrop_path,e.overview),s=Object(d.a)(c);return Object(f.jsxs)("article",{className:h.a.article,children:[Object(f.jsxs)("div",{className:h.a.titleBlock,children:[Object(f.jsx)("h2",{className:h.a.movieTitle,children:t}),Object(f.jsx)("img",{className:h.a.image,src:s,alt:t,width:"300"})]}),Object(f.jsxs)("div",{className:h.a.description,children:[Object(f.jsx)("h3",{className:h.a.title,children:"Genres: "}),Object(f.jsx)("ul",{className:h.a.genresList,children:r&&r.map((function(e,t){return Object(f.jsx)("li",{children:e.name},t)}))}),Object(f.jsx)("h3",{className:h.a.title,children:"Description:"}),Object(f.jsx)("p",{className:h.a.overview,children:i}),Object(f.jsxs)("p",{className:h.a.voteText,children:["tmbd: ",Object(f.jsx)("span",{className:h.a.vote,children:a})]}),Object(f.jsx)("a",{className:h.a.link,href:n,target:"_blank",rel:"noreferrer",children:Object(f.jsx)(b.a,{className:h.a.icon})})]})]})}var _=Object(c.lazy)((function(){return a.e(2).then(a.bind(null,122))})),x=Object(c.lazy)((function(){return a.e(6).then(a.bind(null,123))}));function O(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],u=Object(i.h)().movieId,b=Object(i.i)().url;return Object(c.useEffect)((function(){Object(p.c)(u).then(o)}),[u]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,Object(n.a)({},a)),Object(f.jsxs)("nav",{className:v.a.nav,children:[Object(f.jsx)(s.b,{to:"".concat(b,"/cast"),className:v.a.link,activeClassName:v.a.active,children:"Cast"}),Object(f.jsx)(s.b,{to:"".concat(b,"/reviews"),className:v.a.link,activeClassName:v.a.active,children:"Reviews"})]}),Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(l.a,{timeout:1e4,color:"#ff0000"}),children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"".concat(b,"/cast"),children:Object(f.jsx)(_,{movieId:u})}),Object(f.jsx)(i.a,{path:"".concat(b,"/reviews"),children:Object(f.jsx)(x,{movieId:u})})]})})]})}},56:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return p})),a.d(t,"b",(function(){return j})),a.d(t,"d",(function(){return d}));var n=a(59),r=a.n(n),c=a(60),i=a(61),s=a.n(i);function o(){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(r.a.mark((function e(){var t,a,n,c,i,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,e.prev=1,e.next=4,s.a.get("/trending/movie/day?page=".concat(t));case 4:return a=e.sent,n=a.data,c=n.total_pages,i=n.results,e.abrupt("return",[i,c]);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function u(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(r.a.mark((function e(t){var a,n,c,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:1,e.prev=1,e.next=4,s.a.get("/search/movie?query=".concat(t,"&page=").concat(a));case 4:return n=e.sent,c=n.data,i=c.total_pages,o=c.results,e.abrupt("return",[o,i]);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function p(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/movie/".concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function j(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/movie/".concat(t,"/credits"));case 3:return a=e.sent,n=a.data.cast,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/movie/".concat(t,"/reviews"));case 3:return a=e.sent,n=a.data.results,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3",s.a.defaults.params={api_key:"8978731d3453660c119868bf0fe3e32f",language:"en-EN"}},57:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a.p+"static/media/no-image.05423dcb.jpg";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"w342";return e?"https://image.tmdb.org/t/p/".concat(t,"/").concat(e):n}}}]);
//# sourceMappingURL=movie-details-view.f54b1cd1.chunk.js.map