"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[332],{368:function(e,t,n){n(791);var r=n(689),i=n(87),c=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{state:{from:n},to:"".concat(e.id),children:e.title})},e.id)}))})})}},332:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),i=n(368),c=n(184),u=function(e){var t=e.queryString,n=e.onSubmit;return(0,c.jsxs)("form",{onSubmit:n,children:[(0,c.jsx)("input",{type:"text",name:"searchValue",defaultValue:null!==t&&void 0!==t?t:""}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})},o=n(791),a=n(87),h=n(910),s=function(){var e,t=(0,o.useState)([]),n=(0,r.Z)(t,2),s=n[0],l=n[1],f=(0,o.useState)(!1),d=(0,r.Z)(f,2),m=d[0],v=d[1],j=(0,o.useState)(null),y=(0,r.Z)(j,2),x=y[0],I=y[1],Z=(0,a.lr)(),b=(0,r.Z)(Z,2),p=b[0],S=b[1],g=null!==(e=p.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){""!==g&&(0,h.vw)(g).then((function(e){return e.ok?e.json():Promise.reject(new Error("Please try again!"))})).then((function(e){l(e.results)})).catch((function(e){return I(e)})).finally((function(){return v(!1)}))}),[g]);return(0,c.jsxs)(c.Fragment,{children:[x&&(0,c.jsx)("h1",{children:"Please try again!"}),m&&(0,c.jsx)("div",{children:"Loading..."}),(0,c.jsx)(u,{queryString:g,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchValue.value;S({query:t}),v(!0),I(null),e.currentTarget.reset()}}),(0,c.jsx)(i.Z,{movies:s})]})}},910:function(e,t,n){n.d(t,{Bt:function(){return h},Ny:function(){return o},vw:function(){return u},xb:function(){return c},y:function(){return a}});var r="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTEyYjE5ZmQ1MThlNDEzN2Q4YTJiNzFlNWQ2YWQ3NyIsInN1YiI6IjY0ZDIyMjU3OTQ1ZDM2MDBmZmNmMTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohjb2uQT05X0_S3QE3fhncaiF7rS-iXqY88hmGKTnh0",c=function(){return fetch("".concat(r,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(i)}})},u=function(e){return fetch("".concat(r,"/search/movie?query=").concat(e),{headers:{Authorization:"Bearer ".concat(i)}})},o=function(e){var t=e.movieId;return fetch("".concat(r,"/movie/").concat(t),{headers:{Authorization:"Bearer ".concat(i)}})},a=function(e){var t=e.movieId;return fetch("".concat(r,"/movie/").concat(t,"/credits"),{headers:{Authorization:"Bearer ".concat(i)}})},h=function(e){var t=e.movieId;return fetch("".concat(r,"/movie/").concat(t,"/reviews"),{headers:{Authorization:"Bearer ".concat(i)}})}}}]);
//# sourceMappingURL=332.b17dbac1.chunk.js.map