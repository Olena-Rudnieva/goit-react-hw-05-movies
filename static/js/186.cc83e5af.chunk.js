"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(439),c=t(791),i=t(689),o=t(910),a=t(184);n.default=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],h=(0,c.useState)(!1),s=(0,r.Z)(h,2),d=s[0],f=s[1],l=(0,c.useState)(null),v=(0,r.Z)(l,2),m=v[0],j=v[1],I=(0,i.UO)().movieId;return(0,c.useEffect)((function(){""!==I&&(f(!0),(0,o.Bt)({movieId:I}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Please try again!"))})).then((function(e){u(e.results)})).catch((function(e){return j(e)})).finally((function(){return f(!1)})))}),[I]),(0,a.jsxs)("div",{children:[m&&(0,a.jsx)("h1",{children:"Please try again!"}),d&&(0,a.jsx)("div",{children:"Loading..."}),t.length>0?(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsxs)("h3",{children:["Author: ",e.author]}),(0,a.jsx)("p",{children:e.content})]},e.id)}))})}):(0,a.jsx)("div",{children:"We don't have any reviews for this movie."})]})}},910:function(e,n,t){t.d(n,{Bt:function(){return h},Ny:function(){return a},vw:function(){return o},xb:function(){return i},y:function(){return u}});var r="https://api.themoviedb.org/3",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0",i=function(){return fetch("".concat(r,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(c)}})},o=function(e){return fetch("".concat(r,"/search/movie?query=").concat(e),{headers:{Authorization:"Bearer ".concat(c)}})},a=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n),{headers:{Authorization:"Bearer ".concat(c)}})},u=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n,"/credits"),{headers:{Authorization:"Bearer ".concat(c)}})},h=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n,"/reviews"),{headers:{Authorization:"Bearer ".concat(c)}})}}}]);
//# sourceMappingURL=186.cc83e5af.chunk.js.map