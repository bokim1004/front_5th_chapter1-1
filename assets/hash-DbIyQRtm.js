import{S as s,P as r,L as l,M as c,N as g,s as h,u}from"./notFound-CoumfWaX.js";location.hostname.includes("github.io");const a={"/":c,"/login":l,"/profile":r};function i(){const o=location.hash.replace(/^#/,"")||"/",e=a[o]||g,n=s.logIn(),t=document.getElementById("root");if(t){if(t.innerHTML=e(),o==="/profile"&&!n){location.hash="/login",t.innerHTML=a["/login"]();return}if(o==="/login"&&n){location.hash="/",t.innerHTML=a["/"]();return}if(o==="/login"){h();return}o==="/profile"&&n&&u()}}function d(o){location.hash=o,i()}const f=location.hostname.includes("github.io"),p=f?"/front_5th_chapter1-1":"";window.addEventListener("hashchange",i);window.addEventListener("DOMContentLoaded",i);document.addEventListener("click",o=>{const e=o.target.closest("a[data-route-link]"),n=o.target.closest("#logout");if(e){o.preventDefault();const t=e.getAttribute("href").replace(/^#/,"");d(t)}n&&(o.preventDefault(),s.logout(),location.hash=`${p}/login`,i())});
