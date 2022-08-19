"use strict";(self.webpackChunksquirrel_app=self.webpackChunksquirrel_app||[]).push([[980],{980:(vt,_n,an)=>{an.d(_n,{c:()=>Rn});var w=an(587);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let Z;const wn=r=>(r.forEach(i=>{for(const s in i)if(i.hasOwnProperty(s)){const f=i[s];if(s==="easing"){const c="animation-timing-function";i[c]=f,delete i[s]}else{const c=Fn(s);c!==s&&(i[c]=f,delete i[s])}}}),r),Fn=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),J=r=>{if(Z===void 0){const i=r.style.animationName!==void 0,s=r.style.webkitAnimationName!==void 0;Z=!i&&s?"-webkit-":""}return Z},a=(r,i,s)=>{const f=i.startsWith("animation")?J(r):"";r.style.setProperty(f+i,s)},E=(r,i)=>{const s=i.startsWith("animation")?J(r):"";r.style.removeProperty(s+i)},$n=(r,i)=>{let s;const f={passive:!0},c=()=>{s&&s()},A=C=>{r===C.target&&(c(),i(C))};return r&&(r.addEventListener("webkitAnimationEnd",A,f),r.addEventListener("animationend",A,f),s=()=>{r.removeEventListener("webkitAnimationEnd",A,f),r.removeEventListener("animationend",A,f)}),c},Pn=(r=[])=>r.map(i=>{const s=i.offset,f=[];for(const c in i)i.hasOwnProperty(c)&&c!=="offset"&&f.push(`${c}: ${i[c]};`);return`${s*100}% { ${f.join(" ")} }`}).join(" "),fn=[],Dn=r=>{let i=fn.indexOf(r);return i<0&&(i=fn.push(r)-1),`ion-animation-${i}`},Tn=r=>{const i=r.getRootNode();return i.head||i},Kn=(r,i,s)=>{const f=Tn(s),c=J(s),A=f.querySelector("#"+r);if(A)return A;const C=(s.ownerDocument||document).createElement("style");return C.id=r,C.textContent=`@${c}keyframes ${r} { ${i} } @${c}keyframes ${r}-alt { ${i} }`,f.appendChild(C),C},U=(r=[],i)=>{if(i!==void 0){const s=Array.isArray(i)?i:[i];return[...r,...s]}return r},Rn=r=>{let i,s,f,c,A,C,u=[],Q=[],X=[],F=!1,d,Y={},nn=[],tn=[],en={},P=0,j=!1,V=!1,q,D,x,T,K=!0,L=!1,O=!0,I,o,B=!1;const cn=r,rn=[],G=[],m=[],p=[],on=[],un=[],ln=[],dn=[],mn=[],v=[],Wn=typeof AnimationEffect=="function"||typeof window.AnimationEffect=="function",b=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&Wn,kn=100,hn=()=>v,xn=n=>(p.forEach(t=>{t.destroy(n)}),Ln(n),m.length=0,p.length=0,u.length=0,Mn(),F=!1,O=!0,o),Ln=n=>{pn(),n&&yn()},On=()=>{j=!1,V=!1,O=!0,D=void 0,x=void 0,T=void 0,P=0,L=!1,K=!0,B=!1},In=()=>P!==0&&!B,H=(n,t)=>((t?.oneTimeCallback?G:rn).push({c:n,o:t}),o),Mn=()=>(rn.length=0,G.length=0,o),pn=()=>{if(b)v.forEach(n=>{n.cancel()}),v.length=0;else{const n=m.slice();(0,w.r)(()=>{n.forEach(t=>{E(t,"animation-name"),E(t,"animation-duration"),E(t,"animation-timing-function"),E(t,"animation-iteration-count"),E(t,"animation-delay"),E(t,"animation-play-state"),E(t,"animation-fill-mode"),E(t,"animation-direction")})})}},yn=()=>{on.forEach(n=>{n?.parentNode&&n.parentNode.removeChild(n)}),on.length=0},zn=n=>(un.push(n),o),Nn=n=>(ln.push(n),o),Un=n=>(dn.push(n),o),jn=n=>(mn.push(n),o),Vn=n=>(Q=U(Q,n),o),qn=n=>(X=U(X,n),o),Bn=(n={})=>(Y=n,o),Gn=(n=[])=>{for(const t of n)Y[t]="";return o},Hn=n=>(nn=U(nn,n),o),Zn=n=>(tn=U(tn,n),o),Jn=(n={})=>(en=n,o),Qn=(n=[])=>{for(const t of n)en[t]="";return o},M=()=>A!==void 0?A:d?d.getFill():"both",R=()=>D!==void 0?D:C!==void 0?C:d?d.getDirection():"normal",z=()=>j?"linear":f!==void 0?f:d?d.getEasing():"linear",S=()=>V?0:x!==void 0?x:s!==void 0?s:d?d.getDuration():0,_=()=>c!==void 0?c:d?d.getIterations():1,W=()=>T!==void 0?T:i!==void 0?i:d?d.getDelay():0,Xn=()=>u,Yn=n=>(C=n,y(!0),o),nt=n=>(A=n,y(!0),o),tt=n=>(i=n,y(!0),o),et=n=>(f=n,y(!0),o),it=n=>(!b&&n===0&&(n=1),s=n,y(!0),o),rt=n=>(c=n,y(!0),o),ot=n=>(d=n,o),st=n=>{if(n!=null)if(n.nodeType===1)m.push(n);else if(n.length>=0)for(let t=0;t<n.length;t++)m.push(n[t]);else console.error("Invalid addElement value");return o},at=n=>{if(n!=null)if(Array.isArray(n))for(const t of n)t.parent(o),p.push(t);else n.parent(o),p.push(n);return o},ft=n=>{const t=u!==n;return u=n,t&&ct(u),o},ct=n=>{b?hn().forEach(t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(n);else{const e=new KeyframeEffect(t.effect.target,n,t.effect.getTiming());t.effect=e}}):gn()},ut=()=>{un.forEach(l=>l()),ln.forEach(l=>l());const n=Q,t=X,e=Y;m.forEach(l=>{const h=l.classList;n.forEach(g=>h.add(g)),t.forEach(g=>h.remove(g));for(const g in e)e.hasOwnProperty(g)&&a(l,g,e[g])})},lt=()=>{sn(),dn.forEach(h=>h()),mn.forEach(h=>h());const n=K?1:0,t=nn,e=tn,l=en;m.forEach(h=>{const g=h.classList;t.forEach($=>g.add($)),e.forEach($=>g.remove($));for(const $ in l)l.hasOwnProperty($)&&a(h,$,l[$])}),rn.forEach(h=>h.c(n,o)),G.forEach(h=>h.c(n,o)),G.length=0,O=!0,K&&(L=!0),K=!0},k=()=>{P!==0&&(P--,P===0&&(lt(),d&&d.animationFinish()))},gn=(n=!0)=>{yn();const t=wn(u);m.forEach(e=>{if(t.length>0){const l=Pn(t);I=r!==void 0?r:Dn(l);const h=Kn(I,l,e);on.push(h),a(e,"animation-duration",`${S()}ms`),a(e,"animation-timing-function",z()),a(e,"animation-delay",`${W()}ms`),a(e,"animation-fill-mode",M()),a(e,"animation-direction",R());const g=_()===1/0?"infinite":_().toString();a(e,"animation-iteration-count",g),a(e,"animation-play-state","paused"),n&&a(e,"animation-name",`${h.id}-alt`),(0,w.r)(()=>{a(e,"animation-name",h.id||null)})}})},dt=()=>{m.forEach(n=>{const t=n.animate(u,{id:cn,delay:W(),duration:S(),easing:z(),iterations:_(),fill:M(),direction:R()});t.pause(),v.push(t)}),v.length>0&&(v[0].onfinish=()=>{k()})},En=(n=!0)=>{ut(),u.length>0&&(b?dt():gn(n)),F=!0},N=n=>{if(n=Math.min(Math.max(n,0),.9999),b)v.forEach(t=>{t.currentTime=t.effect.getComputedTiming().delay+S()*n,t.pause()});else{const t=`-${S()*n}ms`;m.forEach(e=>{u.length>0&&(a(e,"animation-delay",t),a(e,"animation-play-state","paused"))})}},An=n=>{v.forEach(t=>{t.effect.updateTiming({delay:W(),duration:S(),easing:z(),iterations:_(),fill:M(),direction:R()})}),n!==void 0&&N(n)},Cn=(n=!0,t)=>{(0,w.r)(()=>{m.forEach(e=>{a(e,"animation-name",I||null),a(e,"animation-duration",`${S()}ms`),a(e,"animation-timing-function",z()),a(e,"animation-delay",t!==void 0?`-${t*S()}ms`:`${W()}ms`),a(e,"animation-fill-mode",M()||null),a(e,"animation-direction",R()||null);const l=_()===1/0?"infinite":_().toString();a(e,"animation-iteration-count",l),n&&a(e,"animation-name",`${I}-alt`),(0,w.r)(()=>{a(e,"animation-name",I||null)})})})},y=(n=!1,t=!0,e)=>(n&&p.forEach(l=>{l.update(n,t,e)}),b?An(e):Cn(t,e),o),mt=(n=!1,t)=>(p.forEach(e=>{e.progressStart(n,t)}),bn(),j=n,F||En(),y(!1,!0,t),o),ht=n=>(p.forEach(t=>{t.progressStep(n)}),N(n),o),pt=(n,t,e)=>(j=!1,p.forEach(l=>{l.progressEnd(n,t,e)}),e!==void 0&&(x=e),L=!1,K=!0,n===0?(D=R()==="reverse"?"normal":"reverse",D==="reverse"&&(K=!1),b?(y(),N(1-t)):(T=(1-t)*S()*-1,y(!1,!1))):n===1&&(b?(y(),N(t)):(T=t*S()*-1,y(!1,!1))),n!==void 0&&(H(()=>{x=void 0,D=void 0,T=void 0},{oneTimeCallback:!0}),d||Sn()),o),bn=()=>{F&&(b?v.forEach(n=>{n.pause()}):m.forEach(n=>{a(n,"animation-play-state","paused")}),B=!0)},yt=()=>(p.forEach(n=>{n.pause()}),bn(),o),gt=()=>{q=void 0,k()},sn=()=>{q&&clearTimeout(q)},Et=()=>{if(sn(),(0,w.r)(()=>{m.forEach(n=>{u.length>0&&a(n,"animation-play-state","running")})}),u.length===0||m.length===0)k();else{const n=W()||0,t=S()||0,e=_()||1;isFinite(e)&&(q=setTimeout(gt,n+t*e+kn)),$n(m[0],()=>{sn(),(0,w.r)(()=>{At(),(0,w.r)(k)})})}},At=()=>{m.forEach(n=>{E(n,"animation-duration"),E(n,"animation-delay"),E(n,"animation-play-state")})},Ct=()=>{v.forEach(n=>{n.play()}),(u.length===0||m.length===0)&&k()},bt=()=>{b?(N(0),An()):Cn()},Sn=n=>new Promise(t=>{n?.sync&&(V=!0,H(()=>V=!1,{oneTimeCallback:!0})),F||En(),L&&(bt(),L=!1),O&&(P=p.length+1,O=!1),H(()=>t(),{oneTimeCallback:!0}),p.forEach(e=>{e.play()}),b?Ct():Et(),B=!1}),St=()=>{p.forEach(n=>{n.stop()}),F&&(pn(),F=!1),On()},vn=(n,t)=>{const e=u[0];return e!==void 0&&(e.offset===void 0||e.offset===0)?e[n]=t:u=[{offset:0,[n]:t},...u],o};return o={parentAnimation:d,elements:m,childAnimations:p,id:cn,animationFinish:k,from:vn,to:(n,t)=>{const e=u[u.length-1];return e!==void 0&&(e.offset===void 0||e.offset===1)?e[n]=t:u=[...u,{offset:1,[n]:t}],o},fromTo:(n,t,e)=>vn(n,t).to(n,e),parent:ot,play:Sn,pause:yt,stop:St,destroy:xn,keyframes:ft,addAnimation:at,addElement:st,update:y,fill:nt,direction:Yn,iterations:rt,duration:it,easing:et,delay:tt,getWebAnimations:hn,getKeyframes:Xn,getFill:M,getDirection:R,getDelay:W,getIterations:_,getEasing:z,getDuration:S,afterAddRead:Un,afterAddWrite:jn,afterClearStyles:Qn,afterStyles:Jn,afterRemoveClass:Zn,afterAddClass:Hn,beforeAddRead:zn,beforeAddWrite:Nn,beforeClearStyles:Gn,beforeStyles:Bn,beforeRemoveClass:qn,beforeAddClass:Vn,onFinish:H,isRunning:In,progressStart:mt,progressStep:ht,progressEnd:pt}}}}]);