"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,c=t(439),i=t(791),o=t(689),a=t(910),u=t(168),h=t(867).ZP.ul(r||(r=(0,u.Z)(["\n  padding-left: 10px;\n"]))),s=t(184),f=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],u=(0,i.useState)(!1),f=(0,c.Z)(u,2),d=f[0],l=f[1],v=(0,i.useState)(null),m=(0,c.Z)(v,2),I=m[0],j=m[1],y=(0,o.UO)().movieId;return(0,i.useEffect)((function(){""!==y&&(l(!0),(0,a.Bt)({movieId:y}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Please try again!"))})).then((function(e){r(e.results)})).catch((function(e){return j(e)})).finally((function(){return l(!1)})))}),[y]),(0,s.jsxs)("div",{children:[I&&(0,s.jsx)("h1",{children:"Please try again!"}),d&&(0,s.jsx)("div",{children:"Loading..."}),t.length>0?(0,s.jsx)(h,{children:t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}):(0,s.jsx)("div",{children:"We don't have any reviews for this movie."})]})}},910:function(e,n,t){t.d(n,{Bt:function(){return h},Ny:function(){return a},vw:function(){return o},xb:function(){return i},y:function(){return u}});var r="https://api.themoviedb.org/3",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0",i=function(){return fetch("".concat(r,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(c)}})},o=function(e){return fetch("".concat(r,"/search/movie?query=").concat(e),{headers:{Authorization:"Bearer ".concat(c)}})},a=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n),{headers:{Authorization:"Bearer ".concat(c)}})},u=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n,"/credits"),{headers:{Authorization:"Bearer ".concat(c)}})},h=function(e){var n=e.movieId;return fetch("".concat(r,"/movie/").concat(n,"/reviews"),{headers:{Authorization:"Bearer ".concat(c)}})}}}]);
//# sourceMappingURL=779.0dfd15eb.chunk.js.map