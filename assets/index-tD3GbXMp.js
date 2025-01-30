var Ft=Object.defineProperty;var Vt=(t,e,i)=>e in t?Ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Fe=(t,e,i)=>Vt(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function F(){}function Gt(t){return t()}function ft(){return Object.create(null)}function Pe(t){t.forEach(Gt)}function Tt(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ge;function B(t,e){return t===e?!0:(Ge||(Ge=document.createElement("a")),Ge.href=e,t===Ge.href)}function zt(t){return Object.keys(t).length===0}function Y(t){return t??""}function s(t,e){t.appendChild(e)}function D(t,e,i){t.insertBefore(e,i||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function z(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function a(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function g(){return J(" ")}function ee(t,e,i,o){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i,o)}function n(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Ht(t){return Array.from(t.childNodes)}function Ke(t,e){e=""+e,t.data!==e&&(t.data=e)}function ht(t,e,i,o){i==null?t.style.removeProperty(e):t.style.setProperty(e,i,"")}let We;function Ce(t){We=t}const ve=[],mt=[];let _e=[];const ut=[],Wt=Promise.resolve();let ze=!1;function xt(){ze||(ze=!0,Wt.then(Ut))}function He(t){_e.push(t)}const Ve=new Set;let ge=0;function Ut(){if(ge!==0)return;const t=We;do{try{for(;ge<ve.length;){const e=ve[ge];ge++,Ce(e),Bt(e.$$)}}catch(e){throw ve.length=0,ge=0,e}for(Ce(null),ve.length=0,ge=0;mt.length;)mt.pop()();for(let e=0;e<_e.length;e+=1){const i=_e[e];Ve.has(i)||(Ve.add(i),i())}_e.length=0}while(ve.length);for(;ut.length;)ut.pop()();ze=!1,Ve.clear(),Ce(t)}function Bt(t){if(t.fragment!==null){t.update(),Pe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(He)}}function Jt(t){const e=[],i=[];_e.forEach(o=>t.indexOf(o)===-1?e.push(o):i.push(o)),i.forEach(o=>o()),_e=e}const Xt=new Set;function qt(t,e){t&&t.i&&(Xt.delete(t),t.i(e))}function M(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Zt(t,e,i){const{fragment:o,after_update:c}=t.$$;o&&o.m(e,i),He(()=>{const f=t.$$.on_mount.map(Gt).filter(Tt);t.$$.on_destroy?t.$$.on_destroy.push(...f):Pe(f),t.$$.on_mount=[]}),c.forEach(He)}function Qt(t,e){const i=t.$$;i.fragment!==null&&(Jt(i.after_update),Pe(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Yt(t,e){t.$$.dirty[0]===-1&&(ve.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ei(t,e,i,o,c,f,u=null,h=[-1]){const v=We;Ce(t);const p=t.$$={fragment:null,ctx:[],props:f,update:F,not_equal:c,bound:ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(v?v.$$.context:[])),callbacks:ft(),dirty:h,skip_bound:!1,root:e.target||v.$$.root};u&&u(p.root);let _=!1;if(p.ctx=i?i(t,e.props||{},(b,k,...S)=>{const A=S.length?S[0]:k;return p.ctx&&c(p.ctx[b],p.ctx[b]=A)&&(!p.skip_bound&&p.bound[b]&&p.bound[b](A),_&&Yt(t,b)),k}):[],p.update(),_=!0,Pe(p.before_update),p.fragment=o?o(p.ctx):!1,e.target){if(e.hydrate){const b=Ht(e.target);p.fragment&&p.fragment.l(b),b.forEach($)}else p.fragment&&p.fragment.c();e.intro&&qt(t.$$.fragment),Zt(t,e.target,e.anchor),Ut()}Ce(v)}class ti{constructor(){Fe(this,"$$");Fe(this,"$$set")}$destroy(){Qt(this,1),this.$destroy=F}$on(e,i){if(!Tt(i))return F;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(i),()=>{const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}$set(e){this.$$set&&!zt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ii="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ii);function dt(t,e,i){const o=t.slice();return o[15]=e[i],o}function gt(t,e,i){const o=t.slice();return o[18]=e[i],o}function vt(t,e,i){const o=t.slice();return o[21]=e[i],o}function _t(t,e,i){const o=t.slice();return o[24]=e[i],o}function yt(t,e,i){const o=t.slice();return o[27]=e[i],o}function bt(t,e,i){const o=t.slice();return o[30]=e[i],o}function kt(t,e,i){const o=t.slice();return o[33]=e[i],o}function St(t,e,i){const o=t.slice();return o[36]=e[i],o}function wt(t,e,i){const o=t.slice();return o[24]=e[i],o}function Ct(t,e,i){const o=t.slice();return o[18]=e[i],o}function Pt(t,e,i){const o=t.slice();return o[18]=e[i],o}function At(t){let e,i,o,c,f=t[18].name+"",u,h;return{c(){e=a("span"),i=a("img"),c=g(),u=J(f),h=g(),B(i.src,o=t[18].icon)||n(i,"src",o),n(i,"alt",t[18].name),n(i,"class","svelte-tmfhpy"),n(e,"class","skill-tag svelte-tmfhpy")},m(v,p){D(v,e,p),s(e,i),s(e,c),s(e,u),s(e,h)},p:F,d(v){v&&$(e)}}}function Lt(t){let e,i,o,c,f=t[18].name+"",u,h;return{c(){e=a("span"),i=a("img"),c=g(),u=J(f),h=g(),B(i.src,o=t[18].icon)||n(i,"src",o),n(i,"alt",t[18].name),n(i,"class","svelte-tmfhpy"),n(e,"class","skill-tag svelte-tmfhpy")},m(v,p){D(v,e,p),s(e,i),s(e,c),s(e,u),s(e,h)},p:F,d(v){v&&$(e)}}}function Mt(t){let e,i=t[24]+"";return{c(){e=a("li"),n(e,"class","svelte-tmfhpy")},m(o,c){D(o,e,c),e.innerHTML=i},p:F,d(o){o&&$(e)}}}function $t(t){let e,i,o,c,f,u,h,v,p,_,b,k,S,A,C=M(t[36].highlights),d=[];for(let y=0;y<C.length;y+=1)d[y]=Mt(wt(t,C,y));return{c(){e=a("div"),i=a("div"),o=a("img"),f=g(),u=a("div"),h=a("h3"),h.textContent=`${t[36].degree}`,v=g(),p=a("h4"),p.textContent=`${t[36].institution}`,_=g(),b=a("p"),b.textContent=`${t[36].period}`,k=g(),S=a("ul");for(let y=0;y<d.length;y+=1)d[y].c();A=g(),B(o.src,c=t[36].logo)||n(o,"src",c),n(o,"alt","University Logo"),n(o,"class","edu-logo svelte-tmfhpy"),n(h,"class","svelte-tmfhpy"),n(p,"class","svelte-tmfhpy"),n(u,"class","edu-info svelte-tmfhpy"),n(i,"class","edu-header svelte-tmfhpy"),n(b,"class","period svelte-tmfhpy"),n(S,"class","svelte-tmfhpy"),n(e,"class","experience-item svelte-tmfhpy")},m(y,m){D(y,e,m),s(e,i),s(i,o),s(i,f),s(i,u),s(u,h),s(u,v),s(u,p),s(e,_),s(e,b),s(e,k),s(e,S);for(let w=0;w<d.length;w+=1)d[w]&&d[w].m(S,null);s(e,A)},p(y,m){if(m[0]&64){C=M(y[36].highlights);let w;for(w=0;w<C.length;w+=1){const H=wt(y,C,w);d[w]?d[w].p(H,m):(d[w]=Mt(H),d[w].c(),d[w].m(S,null))}for(;w<d.length;w+=1)d[w].d(1);d.length=C.length}},d(y){y&&$(e),z(d,y)}}}function si(t){let e,i,o,c,f,u,h,v,p,_;return{c(){e=a("div"),i=a("img"),c=g(),f=a("div"),u=a("h3"),u.textContent=`${t[27].title}`,h=g(),v=a("h4"),v.textContent=`${t[27].company}`,p=g(),_=a("p"),_.textContent=`${t[27].period}`,B(i.src,o=t[27].logo)||n(i,"src",o),n(i,"alt","Company Logo"),n(i,"class","company-logo svelte-tmfhpy"),n(u,"class","svelte-tmfhpy"),n(v,"class","svelte-tmfhpy"),n(f,"class","edu-info svelte-tmfhpy"),n(e,"class","edu-header svelte-tmfhpy"),n(_,"class","period svelte-tmfhpy")},m(b,k){D(b,e,k),s(e,i),s(e,c),s(e,f),s(f,u),s(f,h),s(f,v),D(b,p,k),D(b,_,k)},p:F,d(b){b&&($(e),$(p),$(_))}}}function Rt(t){let e;return{c(){e=a("li"),e.textContent=`${t[33]}`,n(e,"class","svelte-tmfhpy")},m(i,o){D(i,e,o)},p:F,d(i){i&&$(e)}}}function Dt(t){let e;return{c(){e=a("li"),e.textContent=`${t[30]}`,n(e,"class","svelte-tmfhpy")},m(i,o){D(i,e,o)},p:F,d(i){i&&$(e)}}}function It(t){let e,i,o,c,f,u,h,v,p,_,b=t[27].logo&&si(t),k=M(t[27].responsibilities),S=[];for(let d=0;d<k.length;d+=1)S[d]=Rt(kt(t,k,d));let A=M(t[27].achievements),C=[];for(let d=0;d<A.length;d+=1)C[d]=Dt(bt(t,A,d));return{c(){e=a("div"),b&&b.c(),i=g(),o=a("h5"),o.textContent="Responsibilities",c=g(),f=a("ul");for(let d=0;d<S.length;d+=1)S[d].c();u=g(),h=a("h5"),h.textContent="Achievements",v=g(),p=a("ul");for(let d=0;d<C.length;d+=1)C[d].c();_=g(),n(o,"class","svelte-tmfhpy"),n(f,"class","svelte-tmfhpy"),n(h,"class","svelte-tmfhpy"),n(p,"class","svelte-tmfhpy"),n(e,"class","experience-item svelte-tmfhpy")},m(d,y){D(d,e,y),b&&b.m(e,null),s(e,i),s(e,o),s(e,c),s(e,f);for(let m=0;m<S.length;m+=1)S[m]&&S[m].m(f,null);s(e,u),s(e,h),s(e,v),s(e,p);for(let m=0;m<C.length;m+=1)C[m]&&C[m].m(p,null);s(e,_)},p(d,y){if(d[27].logo&&b.p(d,y),y[0]&128){k=M(d[27].responsibilities);let m;for(m=0;m<k.length;m+=1){const w=kt(d,k,m);S[m]?S[m].p(w,y):(S[m]=Rt(w),S[m].c(),S[m].m(f,null))}for(;m<S.length;m+=1)S[m].d(1);S.length=k.length}if(y[0]&128){A=M(d[27].achievements);let m;for(m=0;m<A.length;m+=1){const w=bt(d,A,m);C[m]?C[m].p(w,y):(C[m]=Dt(w),C[m].c(),C[m].m(p,null))}for(;m<C.length;m+=1)C[m].d(1);C.length=A.length}},d(d){d&&$(e),b&&b.d(),z(S,d),z(C,d)}}}function ni(t){let e,i,o,c,f,u,h,v,p,_;return{c(){e=a("div"),i=a("img"),c=g(),f=a("div"),u=a("h3"),u.textContent=`${t[21].degree}`,h=g(),v=a("h4"),v.textContent=`${t[21].institution}`,p=g(),_=a("p"),_.textContent=`${t[21].period}`,B(i.src,o=t[21].logo)||n(i,"src",o),n(i,"alt","Company Logo"),n(i,"class","company-logo svelte-tmfhpy"),n(u,"class","svelte-tmfhpy"),n(v,"class","svelte-tmfhpy"),n(f,"class","edu-info svelte-tmfhpy"),n(e,"class","edu-header svelte-tmfhpy"),n(_,"class","period svelte-tmfhpy")},m(b,k){D(b,e,k),s(e,i),s(e,c),s(e,f),s(f,u),s(f,h),s(f,v),D(b,p,k),D(b,_,k)},p:F,d(b){b&&($(e),$(p),$(_))}}}function jt(t){let e,i=t[24]+"";return{c(){e=a("li"),n(e,"class","svelte-tmfhpy")},m(o,c){D(o,e,c),e.innerHTML=i},p:F,d(o){o&&$(e)}}}function Et(t){let e,i,o,c=t[21].logo&&ni(t),f=M(t[21].highlights),u=[];for(let h=0;h<f.length;h+=1)u[h]=jt(_t(t,f,h));return{c(){e=a("div"),c&&c.c(),i=g(),o=a("ul");for(let h=0;h<u.length;h+=1)u[h].c();n(o,"class","svelte-tmfhpy"),n(e,"class","experience-item svelte-tmfhpy")},m(h,v){D(h,e,v),c&&c.m(e,null),s(e,i),s(e,o);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(o,null)},p(h,v){if(h[21].logo&&c.p(h,v),v[0]&256){f=M(h[21].highlights);let p;for(p=0;p<f.length;p+=1){const _=_t(h,f,p);u[p]?u[p].p(_,v):(u[p]=jt(_),u[p].c(),u[p].m(o,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=f.length}},d(h){h&&$(e),c&&c.d(),z(u,h)}}}function Ot(t){let e,i,o,c,f,u=t[18].name+"",h,v;return{c(){e=a("span"),i=a("img"),f=g(),h=J(u),v=g(),B(i.src,o=t[18].icon)||n(i,"src",o),n(i,"alt",c=t[18].name),n(i,"class","svelte-tmfhpy"),n(e,"class","skill-tag svelte-tmfhpy")},m(p,_){D(p,e,_),s(e,i),s(e,f),s(e,h),s(e,v)},p(p,_){_[0]&4&&!B(i.src,o=p[18].icon)&&n(i,"src",o),_[0]&4&&c!==(c=p[18].name)&&n(i,"alt",c),_[0]&4&&u!==(u=p[18].name+"")&&Ke(h,u)},d(p){p&&$(e)}}}function Nt(t){let e,i,o,c,f,u,h,v,p=t[15].title+"",_,b,k,S=t[15].description+"",A,C,d,y,m,w,H,ye,te,ie,K=M(t[15].skills),I=[];for(let P=0;P<K.length;P+=1)I[P]=Ot(gt(t,K,P));return{c(){e=a("a"),i=a("div"),o=a("div"),c=a("img"),u=g(),h=a("div"),v=a("h3"),_=J(p),b=g(),k=a("p"),A=J(S),C=g(),d=a("div"),y=a("div"),m=a("a"),w=a("i"),ye=g();for(let P=0;P<I.length;P+=1)I[P].c();te=g(),B(c.src,f=t[15].image)||n(c,"src",f),n(c,"alt","Project Image"),n(c,"class","svelte-tmfhpy"),n(o,"class","project-image svelte-tmfhpy"),n(v,"class","svelte-tmfhpy"),n(k,"class","svelte-tmfhpy"),n(w,"class","fa-brands fa-github svelte-tmfhpy"),n(m,"href",H=t[15].githubLink),n(m,"target","_blank"),n(m,"class","skill-tag github-link svelte-tmfhpy"),n(y,"class","skills svelte-tmfhpy"),n(d,"class","skills-container svelte-tmfhpy"),n(h,"class","project-details svelte-tmfhpy"),n(i,"class","project svelte-tmfhpy"),n(e,"href",ie=`${t[15].githubLink}/blob/main/README.md`),n(e,"target","_blank"),ht(e,"text-decoration","none"),ht(e,"color","inherit"),n(e,"class","svelte-tmfhpy")},m(P,V){D(P,e,V),s(e,i),s(i,o),s(o,c),s(i,u),s(i,h),s(h,v),s(v,_),s(h,b),s(h,k),s(k,A),s(h,C),s(h,d),s(d,y),s(y,m),s(m,w),s(y,ye);for(let L=0;L<I.length;L+=1)I[L]&&I[L].m(y,null);s(e,te)},p(P,V){if(V[0]&4&&!B(c.src,f=P[15].image)&&n(c,"src",f),V[0]&4&&p!==(p=P[15].title+"")&&Ke(_,p),V[0]&4&&S!==(S=P[15].description+"")&&Ke(A,S),V[0]&4&&H!==(H=P[15].githubLink)&&n(m,"href",H),V[0]&4){K=M(P[15].skills);let L;for(L=0;L<K.length;L+=1){const be=gt(P,K,L);I[L]?I[L].p(be,V):(I[L]=Ot(be),I[L].c(),I[L].m(y,null))}for(;L<I.length;L+=1)I[L].d(1);I.length=K.length}V[0]&4&&ie!==(ie=`${P[15].githubLink}/blob/main/README.md`)&&n(e,"href",ie)},d(P){P&&$(e),z(I,P)}}}function oi(t){let e,i,o,c,f,u,h,v,p,_,b,k,S,A,C,d,y,m,w,H,ye,te,ie,K,I,P,V,L,be,Ae,xe,se,Le,Be,ne,oe,Me,Je,ke,Xe,le,$e,qe,Se,Ze,we,X,q,Re,Qe,Ye,Z,De,et,tt,W,Ie,it,Te,x,je,st,Q,ae,nt,Ee,ot,re,lt,Oe,at,ce,rt,Ne,ct,Ue,pt,pe=M(t[4]),E=[];for(let r=0;r<pe.length;r+=1)E[r]=At(Pt(t,pe,r));let fe=M(t[5]),O=[];for(let r=0;r<fe.length;r+=1)O[r]=Lt(Ct(t,fe,r));let he=M(t[6]),N=[];for(let r=0;r<he.length;r+=1)N[r]=$t(St(t,he,r));let me=M(t[7]),G=[];for(let r=0;r<me.length;r+=1)G[r]=It(yt(t,me,r));let ue=M(t[8]),T=[];for(let r=0;r<ue.length;r+=1)T[r]=Et(vt(t,ue,r));let de=M(t[2]),U=[];for(let r=0;r<de.length;r+=1)U[r]=Nt(dt(t,de,r));return{c(){e=a("div"),i=a("div"),i.innerHTML='<a href="/" class="svelte-tmfhpy">Portfolio: Nefelie Hemrich</a>',o=g(),c=a("div"),f=a("div"),f.innerHTML='<div class="bar svelte-tmfhpy"></div> <div class="bar svelte-tmfhpy"></div> <div class="bar svelte-tmfhpy"></div>',u=g(),h=a("div"),v=a("a"),v.textContent="Education",p=g(),_=a("a"),_.textContent="Work Experience",b=g(),k=a("a"),k.textContent="Further Training",S=g(),A=a("a"),A.textContent="Projects",d=g(),y=a("div"),m=a("div"),w=a("img"),ye=g(),te=a("h3"),te.textContent="Nefelie Hemrich",ie=g(),K=a("h4"),K.textContent="MEng Maritime Engineering | University of Southampton, UK",I=g(),P=a("p"),P.textContent=`Passionate about using data science, AI/machine learning, and robotics to
      solve complex challenges in the maritime field, with a focus on advancing maritime safety and preserving ocean health.`,V=g(),L=a("a"),L.textContent="Download CV",be=g(),Ae=a("div"),Ae.innerHTML='<a href="https://www.linkedin.com/in/nefeliehemrich/" target="_blank" class="social-link svelte-tmfhpy"><i class="fa-brands fa-linkedin svelte-tmfhpy"></i> LinkedIn</a> <a href="https://github.com/Nefelie" target="_blank" class="social-link svelte-tmfhpy"><i class="fa-brands fa-github svelte-tmfhpy"></i> GitHub</a>',xe=g(),se=a("section"),Le=a("h3"),Le.textContent="Skills",Be=g(),ne=a("div"),oe=a("div"),Me=a("h4"),Me.textContent="Programming",Je=g(),ke=a("div");for(let r=0;r<E.length;r+=1)E[r].c();Xe=g(),le=a("div"),$e=a("h4"),$e.textContent="Design",qe=g(),Se=a("div");for(let r=0;r<O.length;r+=1)O[r].c();Ze=g(),we=a("div"),X=a("main"),q=a("section"),Re=a("h2"),Re.textContent="Education",Qe=g();for(let r=0;r<N.length;r+=1)N[r].c();Ye=g(),Z=a("section"),De=a("h2"),De.textContent="Work Experience",et=g();for(let r=0;r<G.length;r+=1)G[r].c();tt=g(),W=a("section"),Ie=a("h2"),Ie.textContent="Further Training",it=g();for(let r=0;r<T.length;r+=1)T[r].c();Te=g(),x=a("div"),je=a("h2"),je.textContent="Projects",st=g(),Q=a("div"),ae=a("button"),nt=J("All"),ot=g(),re=a("button"),lt=J("Robotics"),at=g(),ce=a("button"),rt=J("Data Science"),ct=g();for(let r=0;r<U.length;r+=1)U[r].c();n(i,"class","left svelte-tmfhpy"),n(f,"class","hamburger svelte-tmfhpy"),n(v,"href","#education"),n(v,"class","svelte-tmfhpy"),n(_,"href","#experience"),n(_,"class","svelte-tmfhpy"),n(k,"href","#courses"),n(k,"class","svelte-tmfhpy"),n(A,"href","#projects"),n(A,"class","svelte-tmfhpy"),n(h,"class",C=Y(`menu ${t[1]?"open":""}`)+" svelte-tmfhpy"),n(c,"class","right svelte-tmfhpy"),n(e,"class","navbar svelte-tmfhpy"),B(w.src,H="/portfolio-app/assets/img/profilepic.jpg")||n(w,"src",H),n(w,"alt","Profile"),n(w,"class","profile-pic svelte-tmfhpy"),n(te,"class","svelte-tmfhpy"),n(K,"class","svelte-tmfhpy"),n(P,"class","svelte-tmfhpy"),n(L,"href","/portfolio-app/assets/docs/CV.pdf"),n(L,"download","Nefelie_Hemrich_CV.pdf"),n(L,"class","cv-download-button svelte-tmfhpy"),n(Ae,"class","social-links svelte-tmfhpy"),n(Le,"class","svelte-tmfhpy"),n(Me,"class","svelte-tmfhpy"),n(ke,"class","skills svelte-tmfhpy"),n(oe,"class","tech-category svelte-tmfhpy"),n($e,"class","svelte-tmfhpy"),n(Se,"class","skills svelte-tmfhpy"),n(le,"class","tech-category svelte-tmfhpy"),n(ne,"class","tech-categories svelte-tmfhpy"),n(se,"id","skills"),n(se,"class","sidebar-skills svelte-tmfhpy"),n(m,"class","sidebar svelte-tmfhpy"),n(Re,"class","svelte-tmfhpy"),n(q,"id","education"),n(q,"class","svelte-tmfhpy"),n(De,"class","svelte-tmfhpy"),n(Z,"id","experience"),n(Z,"class","svelte-tmfhpy"),n(Ie,"class","svelte-tmfhpy"),n(je,"class","svelte-tmfhpy"),n(ae,"class",Ee=Y(t[0]==="all"?"active":"")+" svelte-tmfhpy"),n(re,"class",Oe=Y(t[0]==="robotics"?"active":"")+" svelte-tmfhpy"),n(ce,"class",Ne=Y(t[0]==="data-science"?"active":"")+" svelte-tmfhpy"),n(Q,"class","project-filters svelte-tmfhpy"),n(x,"id","projects"),n(x,"class","svelte-tmfhpy"),n(W,"id","courses"),n(W,"class","svelte-tmfhpy"),n(X,"class","svelte-tmfhpy"),n(we,"id","app"),n(we,"class","svelte-tmfhpy"),n(y,"class","layout svelte-tmfhpy")},m(r,R){D(r,e,R),s(e,i),s(e,o),s(e,c),s(c,f),s(c,u),s(c,h),s(h,v),s(h,p),s(h,_),s(h,b),s(h,k),s(h,S),s(h,A),D(r,d,R),D(r,y,R),s(y,m),s(m,w),s(m,ye),s(m,te),s(m,ie),s(m,K),s(m,I),s(m,P),s(m,V),s(m,L),s(m,be),s(m,Ae),s(m,xe),s(m,se),s(se,Le),s(se,Be),s(se,ne),s(ne,oe),s(oe,Me),s(oe,Je),s(oe,ke);for(let l=0;l<E.length;l+=1)E[l]&&E[l].m(ke,null);s(ne,Xe),s(ne,le),s(le,$e),s(le,qe),s(le,Se);for(let l=0;l<O.length;l+=1)O[l]&&O[l].m(Se,null);s(y,Ze),s(y,we),s(we,X),s(X,q),s(q,Re),s(q,Qe);for(let l=0;l<N.length;l+=1)N[l]&&N[l].m(q,null);s(X,Ye),s(X,Z),s(Z,De),s(Z,et);for(let l=0;l<G.length;l+=1)G[l]&&G[l].m(Z,null);s(X,tt),s(X,W),s(W,Ie),s(W,it);for(let l=0;l<T.length;l+=1)T[l]&&T[l].m(W,null);s(W,Te),s(W,x),s(x,je),s(x,st),s(x,Q),s(Q,ae),s(ae,nt),s(Q,ot),s(Q,re),s(re,lt),s(Q,at),s(Q,ce),s(ce,rt),s(x,ct);for(let l=0;l<U.length;l+=1)U[l]&&U[l].m(x,null);Ue||(pt=[ee(f,"click",t[9]),ee(v,"click",t[10]),ee(_,"click",t[10]),ee(k,"click",t[10]),ee(A,"click",t[10]),ee(ae,"click",t[11]),ee(re,"click",t[12]),ee(ce,"click",t[13])],Ue=!0)},p(r,R){if(R[0]&2&&C!==(C=Y(`menu ${r[1]?"open":""}`)+" svelte-tmfhpy")&&n(h,"class",C),R[0]&16){pe=M(r[4]);let l;for(l=0;l<pe.length;l+=1){const j=Pt(r,pe,l);E[l]?E[l].p(j,R):(E[l]=At(j),E[l].c(),E[l].m(ke,null))}for(;l<E.length;l+=1)E[l].d(1);E.length=pe.length}if(R[0]&32){fe=M(r[5]);let l;for(l=0;l<fe.length;l+=1){const j=Ct(r,fe,l);O[l]?O[l].p(j,R):(O[l]=Lt(j),O[l].c(),O[l].m(Se,null))}for(;l<O.length;l+=1)O[l].d(1);O.length=fe.length}if(R[0]&64){he=M(r[6]);let l;for(l=0;l<he.length;l+=1){const j=St(r,he,l);N[l]?N[l].p(j,R):(N[l]=$t(j),N[l].c(),N[l].m(q,null))}for(;l<N.length;l+=1)N[l].d(1);N.length=he.length}if(R[0]&128){me=M(r[7]);let l;for(l=0;l<me.length;l+=1){const j=yt(r,me,l);G[l]?G[l].p(j,R):(G[l]=It(j),G[l].c(),G[l].m(Z,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=me.length}if(R[0]&256){ue=M(r[8]);let l;for(l=0;l<ue.length;l+=1){const j=vt(r,ue,l);T[l]?T[l].p(j,R):(T[l]=Et(j),T[l].c(),T[l].m(W,Te))}for(;l<T.length;l+=1)T[l].d(1);T.length=ue.length}if(R[0]&1&&Ee!==(Ee=Y(r[0]==="all"?"active":"")+" svelte-tmfhpy")&&n(ae,"class",Ee),R[0]&1&&Oe!==(Oe=Y(r[0]==="robotics"?"active":"")+" svelte-tmfhpy")&&n(re,"class",Oe),R[0]&1&&Ne!==(Ne=Y(r[0]==="data-science"?"active":"")+" svelte-tmfhpy")&&n(ce,"class",Ne),R[0]&4){de=M(r[2]);let l;for(l=0;l<de.length;l+=1){const j=dt(r,de,l);U[l]?U[l].p(j,R):(U[l]=Nt(j),U[l].c(),U[l].m(x,null))}for(;l<U.length;l+=1)U[l].d(1);U.length=de.length}},i:F,o:F,d(r){r&&($(e),$(d),$(y)),z(E,r),z(O,r),z(N,r),z(G,r),z(T,r),z(U,r),Ue=!1,Pe(pt)}}}function li(t,e,i){let o;const c=[{title:"Marine Autonomy Challenge",type:"robotics",description:"Leader of the University of Southampton team (finalists), developed software for the autonomous operation of an uncrewed surface vehicle to map and detect hydrocarbon pollution & ocean plastics. Developed a range of software functionalities: path planning and following, autonomous docking, obstacle avoidance, searching for and mapping an area of hydrocarbon pollution, object detection and identification (ocean plastics).",image:"/portfolio-app/assets/img/MAChallenge.jpg",githubLink:"https://github.com/Nefelie/MarineAutonomyChallenge",skills:[{icon:"/portfolio-app/assets/icons/Python.svg",name:"Python"},{icon:"/portfolio-app/assets/icons/OpenCV.svg",name:"OpenCV"},{icon:"/portfolio-app/assets/icons/raspberrypi.png",name:"Raspberry Pi"}]},{title:"Global Shipping Network using AIS Data, Graph Theory and Machine Learning",type:"data-science",description:"Constructed a global shipping network using machine learning (KNN, DBSCAN) and graph theory to model maritime routes and traffic patterns. Designed and implemented a data processing pipeline to clean AIS data and compress vessel trajectories. Analysed maritime traffic variability and congestion to provide insights into global shipping routes and supply chains.",image:"/portfolio-app/assets/img/gsn3.png",githubLink:"https://github.com/Nefelie/AIS_GSN",skills:[{icon:"/portfolio-app/assets/icons/Python.svg",name:"Python"},{icon:"/portfolio-app/assets/icons/NetworkX.png",name:"NetworkX"},{icon:"/portfolio-app/assets/icons/scikit-learn.svg",name:"scikit-learn"}]},{title:"Simulation and Software Development of Perception System for an Autonomous Vessel (LiDAR and Stereo Cameras)",type:"robotics",description:"Designed and simulated a perception system using stereo cameras and LiDAR using Gazebo and ROS2 for autonomous navigation to enhance collision avoidance capabilities in dynamic marine environments. Developed object detection algorithms for vision and point cloud data under varying weather conditions. Integrated the perception system with obstacle avoidance sub-systems in a multidisciplinary team.",image:"/portfolio-app/assets/img/GDP7.png",githubLink:"https://github.com/Nefelie/VRX-Camera-and-Lidar-Simulation",skills:[{icon:"/portfolio-app/assets/icons/Robot Operating System (ROS).svg",name:"ROS"},{icon:"/portfolio-app/assets/icons/Gazebo.svg",name:"Gazebo"},{icon:"/portfolio-app/assets/icons/Python.svg",name:"Python"},{icon:"/portfolio-app/assets/icons/PyTorch.svg",name:"PyTorch"},{icon:"/portfolio-app/assets/icons/Linux.svg",name:"Linux"}]},{title:"Global Shipping Corrosion Map using an Artifical Neural Network",type:"data-science",description:"Generated a global marine corrosion map for shipping using AI/machine learning for integration into a digital twin for marine structures, supporting improved ship design and maintenance strategies to reduce costs. Implemented and trained an artificial neural network to predict corrosion depth based on geospatial ocean datasets.",image:"/portfolio-app/assets/img/GlobalCorrosion.png",githubLink:"https://github.com/Nefelie/global_corrosion_map",skills:[{icon:"/portfolio-app/assets/icons/Python.svg",name:"Python"},{icon:"/portfolio-app/assets/icons/netCDF.png",name:"netCDF"},{icon:"/portfolio-app/assets/icons/Keras.svg",name:"Keras"}]},{title:"AIS Data Plotter Web App",type:"data-science",description:"An interactive web application for visualizing AIS (Automatic Identification System) data for ships. This tool enables users to dynamically upload and visualize ship position data from .pkl files on a map, with customizable color options for different datasets. The frontend is built with Svelte, MapLibre GL, and TypeScript, while the backend uses FastAPI.",image:"/portfolio-app/assets/img/ais-plotter.png",githubLink:"https://github.com/Nefelie/ais-plotter",skills:[{icon:"/portfolio-app/assets/icons/TypeScript.svg",name:"TypeScript"},{icon:"/portfolio-app/assets/icons/Svelte.svg",name:"Svelte"},{icon:"/portfolio-app/assets/icons/Vite.js.svg",name:"Vite.js"},{icon:"/portfolio-app/assets/icons/FastAPI.svg",name:"FastAPI"}]},{title:"SLAM and Perception System Development for an Intelligent Mobile Robot",type:"robotics",description:"Worked with ZeroROS robot middleware and Webots simulation environment to develop software for the robot. Implemented state-space control, an EKF & particle filter for probabilistic localisation and interpreted live LiDAR sensor data using a Gaussian Process Classifier and Regressor to detect walls and corners from the track as part of the perception system on the physical robotic platform. Developed a Graph SLAM algorithm.",image:"/portfolio-app/assets/img/imr.jpg",githubLink:"https://github.com/Nefelie/slam-wheeled-robot",skills:[{icon:"/portfolio-app/assets/icons/zeroros.png",name:"ZeroROS"},{icon:"/portfolio-app/assets/icons/webots.png",name:"Webots"},{icon:"/portfolio-app/assets/icons/scikit-learn.svg",name:"scikit-learn"},{icon:"/portfolio-app/assets/icons/raspberrypi.png",name:"Raspberry Pi"}]},{title:"Guidance, Control & Navigation of an Autonomous Vessel",type:"robotics",description:"Implemented PID control, artificial potential fields (path planning), line of sight guidance (path following), and an Extended Kalman Filter (probabilistic localisation/sensor fusion) through python simulations. Worked with actuators (differential thrust motors) & sensors, including an IMU (heading control) and ArUco markers for localisation, to implement the software on the vessel.",image:"/portfolio-app/assets/img/mr.jpg",githubLink:"https://github.com/Nefelie/gnc-autonomous-vessel",skills:[{icon:"/portfolio-app/assets/icons/Python.svg",name:"Python"},{icon:"/portfolio-app/assets/icons/zeroros.png",name:"ZeroROS"},{icon:"/portfolio-app/assets/icons/raspberrypi.png",name:"Raspberry Pi"}]}];let f="all";function u(m){i(0,f=m)}const h=[{icon:"/portfolio-app/assets/icons/Python.svg",name:"Python"},{icon:"/portfolio-app/assets/icons/Java.svg",name:"Java"},{icon:"/portfolio-app/assets/icons/C++ (CPlusPlus).svg",name:"C++"},{icon:"/portfolio-app/assets/icons/MATLAB.svg",name:"MATLAB"},{icon:"/portfolio-app/assets/icons/Keras.svg",name:"Keras"},{icon:"/portfolio-app/assets/icons/PyTorch.svg",name:"Pytorch"},{icon:"/portfolio-app/assets/icons/scikit-learn.svg",name:"Scikit-learn"},{icon:"/portfolio-app/assets/icons/OpenCV.svg",name:"OpenCV"},{icon:"/portfolio-app/assets/icons/Pandas.svg",name:"Pandas"},{icon:"/portfolio-app/assets/icons/NumPy.svg",name:"NumPy"},{icon:"/portfolio-app/assets/icons/SciPy.svg",name:"Scipy"},{icon:"/portfolio-app/assets/icons/GeoPandas.svg",name:"GeoPandas"},{icon:"/portfolio-app/assets/icons/netCDF.png",name:"netCDF"},{icon:"/portfolio-app/assets/icons/SQL.svg",name:"SQL"},{icon:"/portfolio-app/assets/icons/Robot Operating System (ROS).svg",name:"ROS2"},{icon:"/portfolio-app/assets/icons/Gazebo.svg",name:"Gazebo"},{icon:"/portfolio-app/assets/icons/TypeScript.svg",name:"TypeScript"},{icon:"/portfolio-app/assets/icons/Svelte.svg",name:"Svelte"},{icon:"/portfolio-app/assets/icons/Vite.js.svg",name:"Vite.js"},{icon:"/portfolio-app/assets/icons/FastAPI.svg",name:"FastAPI"},{icon:"/portfolio-app/assets/icons/Linux.svg",name:"Linux"},{icon:"/portfolio-app/assets/icons/Git.svg",name:"Git"},{icon:"/portfolio-app/assets/icons/Docker.svg",name:"Docker"}],v=[{icon:"/portfolio-app/assets/icons/SOLIDWORKS.svg",name:"SOLIDWORKS"},{icon:"/portfolio-app/assets/icons/Rhinosceros3D.svg",name:"Rhinosceros3D"},{icon:"/portfolio-app/assets/icons/AutoCAD.png",name:"AutoCAD"},{icon:"/portfolio-app/assets/icons/MAXSURF.png",name:"MAXSURF"}],p=[{degree:"MEng Maritime Engineering",institution:"University of Southampton, UK",period:"2020 - 2024",logo:"/portfolio-app/assets/icons/UoS.jpg",highlights:["Grade: First Class Honours (average: 79%)",'Best Performing Student prize (£1,000) awarded by <a href="https://www.shipwrights.co.uk/" target="_blank">UK Worshipful Company of Shipwrights</a>','Specialised in <b style="font-weight: 600;">Robotics</b>',"<i>Relevant Modules</i>: Maritime Robotics, Intelligent Mobile Robotics, Machine Learning, Ship Manoeuvring and Control, System Design and Computing for Ships, Mechanics, Ship Resistance and Propulsion, Marine Hydrodynamics,  Ship Design and Economics, Project Risk Management, Maritime Safety: Risk, Environment and Law","<i>Master’s Group Design Project</i>: Perception System Design for an Autonomous Surface Vessel",'<i>Bachelor’s Thesis</i>: "Constructing a Global Shipping Network Using AIS Data and Graph Theory to Enhance Maritime Situational Awareness"']}],_=[{title:"Research Assistant: AI/Machine Learning for Digital Twin in Shipping",company:"Marine & Maritime Institute, University of Southampton",period:"Jul 2023 - Aug 2023",logo:"/portfolio-app/assets/icons/UoS.jpg",responsibilities:["Worked with geospatial ocean datasets to tackle the multi-variate challenge of corrosion prediction for integration into a digital twin for marine structures.","Enhanced the geospatial and temporal fidelity of existing research on corrosion rates for ships globally.","Assessed how a map of global corrosion rates could factor in different climate change scenarios."],achievements:["Implemented an artificial neural network and compared different architectures and model types to predict corrosion rates globally.","Developed a high-resolution map predicting corrosion rates for vessels globally.","Identified biases in the original dataset which resulted in poor model performance."]},{title:"Research Assistant: Concept Design of LCO2 Carrier for Shell Shipping & Maritime",company:"Marine & Maritime Institute, University of Southampton",period:"Jun 2022 - Sept 2022",logo:"/portfolio-app/assets/icons/UoS.jpg",responsibilities:["Evaluated the transport efficiency of different vessel designs transporting novel future fuels, including hydrogen and ammonia.","Developed a concept design for a net-zero LCO2 bulk carrier to support the UK’s decarbonisation targets."],achievements:["Researched novel ways of obtaining a stability estimate for a new ship type to transport future fuels.","Produced a technical report for Shell Maritime & Shipping.","Developed a 3D model and render in Rhino and determined vessel hydrostatics.","Published an article in The Naval Architect magazine (Royal Institute of Naval Architects)."]}],b=[{degree:"Maritime Robotics & Informatics",institution:"Intelligent Transportation Systems Lab (Smart MOVE), University of the Aegean, Greece",period:"Jul 2023",logo:"/portfolio-app/assets/icons/PA.jpg",highlights:["Built and tested a Remotely Operated Vessel (ROV).","Attended labs and seminars on maritime data analytics, machine learning for trajectory forecasting, collision avoidance, and digital twins."]},{degree:"Machine Learning",institution:"Stanford University (Coursera Online)",period:"Sept 2021",logo:"/portfolio-app/assets/icons/SA.jpg",highlights:["Grade: 97%","Covered single and multivariable linear regression, logistic regression, regularisation, neural networks, support vector machines, unsupervised learning, dimensionality reduction, anomaly detection, recommender systems, large scale machine learning, application of photo optical character recognition."]},{degree:"Digital Engineering",institution:"Hasso Plattner Institute, University of Potsdam, Germany",period:"Aug 2019",logo:"/portfolio-app/assets/icons/HPI.jpg",highlights:["Explored methods of design thinking in order to identify and address problems in the areas of project management, software development in a team, web technology and working with APIs and implementing a telegram bot."]}];let k=!1;function S(){i(1,k=!k)}function A(){i(1,k=!1)}const C=()=>u("all"),d=()=>u("robotics"),y=()=>u("data-science");return t.$$.update=()=>{t.$$.dirty[0]&1&&i(2,o=f==="all"?c:c.filter(m=>m.type===f))},[f,k,o,u,h,v,p,_,b,S,A,C,d,y]}class ai extends ti{constructor(e){super(),ei(this,e,li,oi,Kt,{},null,[-1,-1])}}new ai({target:document.getElementById("app")});
