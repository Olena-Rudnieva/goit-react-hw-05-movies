"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[347],{347:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t,o,i,c,a,d,l,s,h=r(439),u=r(791),f=r(689),p=r(910),x=r(168),m=r(87),v=r(867),g=(0,v.ZP)(m.rU)(t||(t=(0,x.Z)(["\n  background-color: #ffffff;\n  padding: 10px;\n  border: 0;\n  cursor: pointer;\n  outline: none;\n  font-weight: bold;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #3f51b5;\n  border-radius: 8px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: inline-block;\n\n  &:hover {\n    background-color: #13247e;\n  }\n"]))),b=v.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-bottom: 10px;\n"]))),j=v.ZP.h2(i||(i=(0,x.Z)(["\n  margin: 0;\n"]))),Z=v.ZP.h3(c||(c=(0,x.Z)(["\n  color: #3f51b5;\n"]))),y=v.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),w=v.ZP.div(d||(d=(0,x.Z)(["\n  background-color: rgba(63, 81, 181, 0.1);\n\n  &::before {\n    content: '';\n    display: flex;\n    width: 100%;\n    height: 1px;\n    background-color: #3f51b5;\n  }\n\n  &::after {\n    content: '';\n    display: flex;\n    width: 100%;\n    height: 1px;\n    background-color: #3f51b5;\n    margin-top: 10px;\n  }\n"]))),I=v.ZP.p(l||(l=(0,x.Z)(["\n  padding-left: 10px;\n"]))),k=(0,v.ZP)(m.rU)(s||(s=(0,x.Z)(["\n  color: #3f51b5;\n  font-weight: bold;\n  text-decoration-line: #3f51b5;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  padding-left: 10px;\n\n  &:hover {\n    color: #13247e;\n  }\n"]))),N=r(184),P=function(){var n,e,r,t=(0,f.UO)().movieId,o=(0,u.useState)([]),i=(0,h.Z)(o,2),c=i[0],a=i[1],d=(0,u.useState)(!1),l=(0,h.Z)(d,2),s=l[0],x=l[1],m=(0,u.useState)(null),v=(0,h.Z)(m,2),P=v[0],z=v[1],J=(0,f.TH)(),Q=(0,u.useRef)(null!==(n=null===(e=J.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,u.useEffect)((function(){""!==t&&(x(!0),(0,p.Ny)({movieId:t}).then((function(n){return n.ok?n.json():Promise.reject(new Error("Please try again!"))})).then((function(n){a(n)})).catch((function(n){return z(n)})).finally((function(){return x(!1)})))}),[t]);return(0,N.jsxs)("div",{children:[P&&(0,N.jsx)("h1",{children:"Please try again!"}),s&&(0,N.jsx)("div",{children:"Loading..."}),(0,N.jsx)(g,{to:Q.current,children:"Go back"}),c&&(0,N.jsxs)(b,{children:[(0,N.jsx)("img",{src:c.poster_path?["https://image.tmdb.org/t/p/w500/".concat(c.poster_path)]:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,N.jsxs)("div",{children:[(0,N.jsx)(j,{children:c.title}),(0,N.jsxs)("p",{children:["User Score: ",(1e3*c.vote_average/100).toFixed(),"%"]}),(0,N.jsx)(Z,{children:"Overview"}),(0,N.jsx)("p",{children:c.overview}),(0,N.jsx)(Z,{children:"Genres"}),(0,N.jsx)(y,{children:null===(r=c.genres)||void 0===r?void 0:r.map((function(n){return(0,N.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,N.jsxs)(w,{children:[(0,N.jsx)(I,{children:"Additional information"}),(0,N.jsx)(k,{to:"cast",children:"Cast"}),(0,N.jsx)(k,{to:"reviews",children:"Reviews"}),(0,N.jsx)(f.j3,{})]})]})}},910:function(n,e,r){r.d(e,{Bt:function(){return l},Ny:function(){return a},vw:function(){return c},xb:function(){return i},y:function(){return d}});var t="https://api.themoviedb.org/3",o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0",i=function(){return fetch("".concat(t,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(o)}})},c=function(n){return fetch("".concat(t,"/search/movie?query=").concat(n),{headers:{Authorization:"Bearer ".concat(o)}})},a=function(n){var e=n.movieId;return fetch("".concat(t,"/movie/").concat(e),{headers:{Authorization:"Bearer ".concat(o)}})},d=function(n){var e=n.movieId;return fetch("".concat(t,"/movie/").concat(e,"/credits"),{headers:{Authorization:"Bearer ".concat(o)}})},l=function(n){var e=n.movieId;return fetch("".concat(t,"/movie/").concat(e,"/reviews"),{headers:{Authorization:"Bearer ".concat(o)}})}}}]);
//# sourceMappingURL=347.88524c26.chunk.js.map