"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,i,o,c=e(439),a=e(791),u=e(689),h=e(910),s=e(168),l=e(867),d=l.zo.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 16px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  margin-top: 20px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f=l.zo.li(i||(i=(0,s.Z)(["\n  text-align: center;\n"]))),m=l.zo.p(o||(o=(0,s.Z)(["\n  font-weight: bold;\n"]))),p=e(184),v=function(){var n=(0,a.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,a.useState)(!1),o=(0,c.Z)(i,2),s=o[0],l=o[1],v=(0,a.useState)(null),g=(0,c.Z)(v,2),x=g[0],j=g[1],y=(0,u.UO)().movieId;(0,a.useEffect)((function(){""!==y&&(l(!0),(0,h.y)({movieId:y}).then((function(n){return n.ok?n.json():Promise.reject(new Error("Please try again!"))})).then((function(n){r(n.cast)})).catch((function(n){return j(n)})).finally((function(){return l(!1)})))}),[y]);return(0,p.jsxs)("div",{children:[x&&(0,p.jsx)("h1",{children:"Please try again!"}),s&&(0,p.jsx)("div",{children:"Loading..."}),e&&(0,p.jsx)("div",{children:e.length>0?(0,p.jsx)(d,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,p.jsxs)(f,{children:[(0,p.jsx)("img",{src:n.profile_path?["https://image.tmdb.org/t/p/w500/".concat(n.profile_path)]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,p.jsx)(m,{children:n.name}),(0,p.jsxs)("p",{children:["Character: ",n.character]})]},n.id)}))}):(0,p.jsx)("div",{children:"No information for this movie."})})]})}},910:function(n,t,e){e.d(t,{Bt:function(){return h},Ny:function(){return a},vw:function(){return c},xb:function(){return o},y:function(){return u}});var r="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0",o=function(){return fetch("".concat(r,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(i)}})},c=function(n){return fetch("".concat(r,"/search/movie?query=").concat(n),{headers:{Authorization:"Bearer ".concat(i)}})},a=function(n){var t=n.movieId;return fetch("".concat(r,"/movie/").concat(t),{headers:{Authorization:"Bearer ".concat(i)}})},u=function(n){var t=n.movieId;return fetch("".concat(r,"/movie/").concat(t,"/credits"),{headers:{Authorization:"Bearer ".concat(i)}})},h=function(n){var t=n.movieId;return fetch("".concat(r,"/movie/").concat(t,"/reviews"),{headers:{Authorization:"Bearer ".concat(i)}})}}}]);
//# sourceMappingURL=387.3c472a6e.chunk.js.map