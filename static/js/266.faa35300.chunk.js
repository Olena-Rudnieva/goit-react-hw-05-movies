"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{368:function(e,n,t){t(791);var r=t(689),i=t(87),c=t(184);n.Z=function(e){var n=e.movies,t=(0,r.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{state:{from:t},to:"/movies/".concat(e.id),children:e.title})},e.id)}))})})}},266:function(e,n,t){t.r(n);var r=t(439),i=t(368),c=t(791),o=t(910),a=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],h=(0,c.useState)(!1),s=(0,r.Z)(h,2),f=s[0],d=s[1],l=(0,c.useState)(null),v=(0,r.Z)(l,2),m=v[0],j=v[1];return(0,c.useEffect)((function(){d(!0),(0,o.xb)().then((function(e){return e.ok?e.json():Promise.reject(new Error("Please try again!"))})).then((function(e){return u(e.results)})).catch((function(e){return j(e)})).finally((function(){return d(!1)}))}),[]),(0,a.jsxs)("div",{children:[m&&(0,a.jsx)("h1",{children:"Please try again!"}),f&&(0,a.jsx)("div",{children:"Loading..."}),(0,a.jsx)("h1",{children:"Trending today"}),(0,a.jsx)(i.Z,{movies:t})]})}},910:function(e,n,t){t.d(n,{Bt:function(){return h},Ny:function(){return a},vw:function(){return o},xb:function(){return c},y:function(){return u}});var r="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0",c=function(){return fetch("".concat(r,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(i)}})},o=function(e){return fetch("".concat(r,"/search/movie?query=").concat(e),{headers:{Authorization:"Bearer ".concat(i)}})},a=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n),{headers:{Authorization:"Bearer ".concat(i)}})},u=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n,"/credits"),{headers:{Authorization:"Bearer ".concat(i)}})},h=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n,"/reviews"),{headers:{Authorization:"Bearer ".concat(i)}})}}}]);
//# sourceMappingURL=266.faa35300.chunk.js.map