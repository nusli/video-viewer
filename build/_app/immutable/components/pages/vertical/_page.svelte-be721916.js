import{S as j,i as x,s as D,k as c,q as S,a as b,l,m as _,r as q,h as n,c as I,n as d,L as M,M as E,b as O,E as r,B as h,o as C,N as P}from"../../../chunks/index-03e086a0.js";import{v as g}from"../../../chunks/video-js-4fc9c8a0.js";import{b as $}from"../../../chunks/paths-b4419565.js";function k(m){let e,s,a,f,p,t,i,y;return{c(){e=c("div"),s=c("div"),a=c("h1"),f=S("Vertical View"),p=b(),t=c("video-js"),i=c("source"),this.h()},l(o){e=l(o,"DIV",{class:!0});var u=_(e);s=l(u,"DIV",{class:!0});var v=_(s);a=l(v,"H1",{class:!0});var V=_(a);f=q(V,"Vertical View"),V.forEach(n),p=I(v),t=l(v,"VIDEO-JS",{id:!0,class:!0});var w=_(t);i=l(w,"SOURCE",{src:!0,type:!0}),w.forEach(n),v.forEach(n),u.forEach(n),this.h()},h(){d(a,"class","is-size-1"),M(i.src,y=$+"/vertical.MOV")||d(i,"src",y),d(i,"type","video/mp4"),E(t,"id","vertical1"),E(t,"class","vertical-video video-js svelte-utm7e7"),d(s,"class","container video-container svelte-utm7e7"),d(e,"class","section")},m(o,u){O(o,e,u),r(e,s),r(s,a),r(a,f),r(s,p),r(s,t),r(t,i)},p:h,i:h,o:h,d(o){o&&n(e)}}}function z(m){return C(async()=>{typeof window<"u"&&g("vertical1",{autoplay:"muted",controls:!0,responsive:!0,fluid:!1,height:"600",width:300})}),P(()=>{typeof window<"u"&&g.getPlayer("vertical1").dispose()}),[]}class L extends j{constructor(e){super(),x(this,e,z,k,D,{})}}export{L as default};