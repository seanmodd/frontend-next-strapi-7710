(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{8593:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(5893),n=(r(7294),r(5063)),i=r(5030),c=function(e){var t=e.article;return(0,a.jsx)(n.default,{as:"/article/".concat(t.slug),href:"/article/[id]",children:(0,a.jsx)("a",{className:"uk-link-reset",children:(0,a.jsxs)("div",{className:"uk-card uk-card-muted",children:[(0,a.jsx)("div",{className:"uk-card-media-top",children:(0,a.jsx)(i.Z,{image:t.image})}),(0,a.jsxs)("div",{className:"uk-card-body",children:[(0,a.jsx)("p",{id:"category",className:"uk-text-uppercase",children:t.category.name}),(0,a.jsx)("p",{id:"title",className:"uk-text-large",children:t.title})]})]})})})},s=function(e){var t=e.articles,r=Math.ceil(t.length/5),n=t.slice(0,r),i=t.slice(r,t.length);return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"uk-child-width-1-2@s","data-uk-grid":"true",children:[(0,a.jsx)("div",{children:n.map((function(e,t){return(0,a.jsx)(c,{article:e},"article__left__".concat(e.slug))}))}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0,children:i.map((function(e,t){return(0,a.jsx)(c,{article:e},"article__left__".concat(e.slug))}))})})]})})}},5030:function(e,t,r){"use strict";var a=r(5893),n=r(1422),i=r(5675);t.Z=function(e){var t=e.image,r=(e.style,t.url),c=t.alternativeText;return(0,a.jsx)(i.default,{loader:function(){return(0,n.$)(t)},layout:"responsive",width:t.width,height:t.height,objectFit:"contain",src:r,alt:c||""})}},6347:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(5893),n=(r(7294),r(5063)),i=function(e){var t=e.categories;return(0,a.jsx)("div",{children:(0,a.jsxs)("nav",{className:"uk-navbar-container","data-uk-navbar":!0,children:[(0,a.jsx)("div",{className:"uk-navbar-left",children:(0,a.jsx)("ul",{className:"uk-navbar-nav",children:(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:"Strapi Blog"})})})})}),(0,a.jsx)("div",{className:"uk-navbar-right",children:(0,a.jsx)("ul",{className:"uk-navbar-nav",children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{as:"/category/".concat(e.slug),href:"/category/[id]",children:(0,a.jsx)("a",{className:"uk-link-reset",children:e.name})})},e.id)}))})})]})})},c=function(e){var t=e.children,r=e.categories;e.seo;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{categories:r}),t]})}},8303:function(e,t,r){"use strict";var a=r(5893),n=r(2809),i=r(9008),c=r(7294),s=r(5593),l=r(1422);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.seo,r=(0,c.useContext)(s.GlobalContext),n=r.defaultSeo,o=r.siteName,d=u(u({},n),t),m=u(u({},d),{},{metaTitle:"".concat(d.metaTitle," | ").concat(o),shareImage:(0,l.$)(d.shareImage)});return(0,a.jsxs)(i.default,{children:[m.metaTitle&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:m.metaTitle}),(0,a.jsx)("meta",{property:"og:title",content:m.metaTitle}),(0,a.jsx)("meta",{name:"twitter:title",content:m.metaTitle})]}),m.metaDescription&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"description",content:m.metaDescription}),(0,a.jsx)("meta",{property:"og:description",content:m.metaDescription}),(0,a.jsx)("meta",{name:"twitter:description",content:m.metaDescription})]}),m.shareImage&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:image",content:m.shareImage}),(0,a.jsx)("meta",{name:"twitter:image",content:m.shareImage}),(0,a.jsx)("meta",{name:"image",content:m.shareImage})]}),m.article&&(0,a.jsx)("meta",{property:"og:type",content:"article"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},635:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return s}});var a=r(5893),n=r(8593),i=r(6347),c=r(8303),s=!0;t.default=function(e){var t=e.category,r=e.categories,s={metaTitle:t.name,metaDescription:"All ".concat(t.name," articles")};return(0,a.jsxs)(i.Z,{categories:r,children:[(0,a.jsx)(c.Z,{seo:s}),(0,a.jsx)("div",{className:"uk-section",children:(0,a.jsxs)("div",{className:"uk-container uk-container-large",children:[(0,a.jsx)("h1",{children:t.name}),(0,a.jsx)(n.Z,{articles:t.articles})]})})]})}},7842:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return r(635)}])}},function(e){e.O(0,[61,774,888,179],(function(){return t=7842,e(e.s=t);var t}));var t=e.O();_N_E=t}]);