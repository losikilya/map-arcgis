"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2062],{46851:(t,n,e)=>{e.d(n,{R:()=>o,a:()=>s,g:()=>a,t:()=>c});let r=1e-6;function a(){return r}const o=Math.random,u=Math.PI/180,i=180/Math.PI;function c(t){return t*u}function s(t){return t*i}Object.freeze(Object.defineProperty({__proto__:null,getEpsilon:a,setEpsilon:function(t){r=t},RANDOM:o,toRadian:c,toDegree:s,equals:function(t,n){return Math.abs(t-n)<=r*Math.max(1,Math.abs(t),Math.abs(n))}},Symbol.toStringTag,{value:"Module"}))},17896:(t,n,e)=>{e.d(n,{B:()=>f,C:()=>h,a:()=>c,b:()=>s,c:()=>u,d:()=>m,e:()=>p,f:()=>y,g:()=>l,h:()=>x,i:()=>d,k:()=>I,l:()=>o,m:()=>q,n:()=>g,p:()=>b,q:()=>_,r:()=>D,s:()=>i,t:()=>w,u:()=>T,z:()=>M});var r=e(65617),a=e(46851);function o(t){const n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function u(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function i(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}function c(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t}function s(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t}function f(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t}function h(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t}function l(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function M(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t}function d(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return Math.sqrt(e*e+r*r+a*a)}function m(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2];return e*e+r*r+a*a}function b(t){const n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function g(t,n){const e=n[0],r=n[1],a=n[2];let o=e*e+r*r+a*a;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function p(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function y(t,n,e){const r=n[0],a=n[1],o=n[2],u=e[0],i=e[1],c=e[2];return t[0]=a*c-o*i,t[1]=o*u-r*c,t[2]=r*i-a*u,t}function x(t,n,e,r){const a=n[0],o=n[1],u=n[2];return t[0]=a+r*(e[0]-a),t[1]=o+r*(e[1]-o),t[2]=u+r*(e[2]-u),t}function q(t,n,e){const r=n[0],a=n[1],o=n[2];return t[0]=e[0]*r+e[4]*a+e[8]*o+e[12],t[1]=e[1]*r+e[5]*a+e[9]*o+e[13],t[2]=e[2]*r+e[6]*a+e[10]*o+e[14],t}function w(t,n,e){const r=n[0],a=n[1],o=n[2];return t[0]=r*e[0]+a*e[3]+o*e[6],t[1]=r*e[1]+a*e[4]+o*e[7],t[2]=r*e[2]+a*e[5]+o*e[8],t}function _(t,n,e){const r=e[0],a=e[1],o=e[2],u=e[3],i=n[0],c=n[1],s=n[2];let f=a*s-o*c,h=o*i-r*s,l=r*c-a*i,M=a*l-o*h,d=o*f-r*l,m=r*h-a*f;const b=2*u;return f*=b,h*=b,l*=b,M*=2,d*=2,m*=2,t[0]=i+f+M,t[1]=c+h+d,t[2]=s+l+m,t}const v=(0,r.c)(),E=(0,r.c)();function I(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function D(t,n,e){const r=e[0]-n[0],a=e[1]-n[1],o=e[2]-n[2];let u=r*r+a*a+o*o;return u>0?(u=1/Math.sqrt(u),t[0]=r*u,t[1]=a*u,t[2]=o*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const A=s,L=f,S=h,P=d,O=m,T=o,k=b;Object.freeze(Object.defineProperty({__proto__:null,length:o,copy:u,set:i,add:c,subtract:s,multiply:f,divide:h,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t},abs:function(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t},sign:function(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t},scale:l,scaleAndAdd:M,distance:d,squaredDistance:m,squaredLength:b,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t},normalize:g,dot:p,cross:y,lerp:x,hermite:function(t,n,e,r,a,o){const u=o*o,i=u*(2*o-3)+1,c=u*(o-2)+o,s=u*(o-1),f=u*(3-2*o);return t[0]=n[0]*i+e[0]*c+r[0]*s+a[0]*f,t[1]=n[1]*i+e[1]*c+r[1]*s+a[1]*f,t[2]=n[2]*i+e[2]*c+r[2]*s+a[2]*f,t},bezier:function(t,n,e,r,a,o){const u=1-o,i=u*u,c=o*o,s=i*u,f=3*o*i,h=3*c*u,l=c*o;return t[0]=n[0]*s+e[0]*f+r[0]*h+a[0]*l,t[1]=n[1]*s+e[1]*f+r[1]*h+a[1]*l,t[2]=n[2]*s+e[2]*f+r[2]*h+a[2]*l,t},random:function(t,n){n=n||1;const e=a.R,r=2*e()*Math.PI,o=2*e()-1,u=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(r)*u,t[1]=Math.sin(r)*u,t[2]=o*n,t},transformMat4:q,transformMat3:w,transformQuat:_,rotateX:function(t,n,e,r){const a=[],o=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],o[0]=a[0],o[1]=a[1]*Math.cos(r)-a[2]*Math.sin(r),o[2]=a[1]*Math.sin(r)+a[2]*Math.cos(r),t[0]=o[0]+e[0],t[1]=o[1]+e[1],t[2]=o[2]+e[2],t},rotateY:function(t,n,e,r){const a=[],o=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],o[0]=a[2]*Math.sin(r)+a[0]*Math.cos(r),o[1]=a[1],o[2]=a[2]*Math.cos(r)-a[0]*Math.sin(r),t[0]=o[0]+e[0],t[1]=o[1]+e[1],t[2]=o[2]+e[2],t},rotateZ:function(t,n,e,r){const a=[],o=[];return a[0]=n[0]-e[0],a[1]=n[1]-e[1],a[2]=n[2]-e[2],o[0]=a[0]*Math.cos(r)-a[1]*Math.sin(r),o[1]=a[0]*Math.sin(r)+a[1]*Math.cos(r),o[2]=a[2],t[0]=o[0]+e[0],t[1]=o[1]+e[1],t[2]=o[2]+e[2],t},angle:function(t,n){u(v,t),u(E,n),g(v,v),g(E,E);const e=p(v,E);return e>1?0:e<-1?Math.PI:Math.acos(e)},str:function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},exactEquals:I,equals:function(t,n){if(t===n)return!0;const e=t[0],r=t[1],o=t[2],u=n[0],i=n[1],c=n[2],s=(0,a.g)();return Math.abs(e-u)<=s*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(r-i)<=s*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(o-c)<=s*Math.max(1,Math.abs(o),Math.abs(c))},direction:D,sub:A,mul:L,div:S,dist:P,sqrDist:O,len:T,sqrLen:k},Symbol.toStringTag,{value:"Module"}))},65617:(t,n,e)=>{function r(){return[0,0,0]}function a(t){return[t[0],t[1],t[2]]}function o(t,n,e){return[t,n,e]}function u(t){const n=[0,0,0],e=Math.min(3,t.length);for(let r=0;r<e;++r)n[r]=t[r];return n}function i(t,n){return new Float64Array(t,n,3)}function c(){return o(1,1,1)}function s(){return o(1,0,0)}function f(){return o(0,1,0)}function h(){return o(0,0,1)}e.d(n,{O:()=>M,Z:()=>l,a:()=>a,b:()=>i,c:()=>r,d:()=>u,f:()=>o});const l=[0,0,0],M=c(),d=s(),m=f(),b=h();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:a,fromValues:o,fromArray:u,createView:i,zeros:function(){return[0,0,0]},ones:c,unitX:s,unitY:f,unitZ:h,ZEROS:l,ONES:M,UNIT_X:d,UNIT_Y:m,UNIT_Z:b},Symbol.toStringTag,{value:"Module"}))},98766:(t,n,e)=>{e.d(n,{a:()=>u,b:()=>f,c:()=>a,d:()=>b,e:()=>M,f:()=>d,g:()=>p,h:()=>y,l:()=>g,n:()=>m,s:()=>o});var r=e(46851);function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function o(t,n,e,r,a){return t[0]=n,t[1]=e,t[2]=r,t[3]=a,t}function u(t,n,e){return t[0]=n[0]+e[0],t[1]=n[1]+e[1],t[2]=n[2]+e[2],t[3]=n[3]+e[3],t}function i(t,n,e){return t[0]=n[0]-e[0],t[1]=n[1]-e[1],t[2]=n[2]-e[2],t[3]=n[3]-e[3],t}function c(t,n,e){return t[0]=n[0]*e[0],t[1]=n[1]*e[1],t[2]=n[2]*e[2],t[3]=n[3]*e[3],t}function s(t,n,e){return t[0]=n[0]/e[0],t[1]=n[1]/e[1],t[2]=n[2]/e[2],t[3]=n[3]/e[3],t}function f(t,n,e){return t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t[3]=n[3]*e,t}function h(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2],o=n[3]-t[3];return Math.sqrt(e*e+r*r+a*a+o*o)}function l(t,n){const e=n[0]-t[0],r=n[1]-t[1],a=n[2]-t[2],o=n[3]-t[3];return e*e+r*r+a*a+o*o}function M(t){const n=t[0],e=t[1],r=t[2],a=t[3];return Math.sqrt(n*n+e*e+r*r+a*a)}function d(t){const n=t[0],e=t[1],r=t[2],a=t[3];return n*n+e*e+r*r+a*a}function m(t,n){const e=n[0],r=n[1],a=n[2],o=n[3];let u=e*e+r*r+a*a+o*o;return u>0&&(u=1/Math.sqrt(u),t[0]=e*u,t[1]=r*u,t[2]=a*u,t[3]=o*u),t}function b(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function g(t,n,e,r){const a=n[0],o=n[1],u=n[2],i=n[3];return t[0]=a+r*(e[0]-a),t[1]=o+r*(e[1]-o),t[2]=u+r*(e[2]-u),t[3]=i+r*(e[3]-i),t}function p(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function y(t,n){const e=t[0],a=t[1],o=t[2],u=t[3],i=n[0],c=n[1],s=n[2],f=n[3],h=(0,r.g)();return Math.abs(e-i)<=h*Math.max(1,Math.abs(e),Math.abs(i))&&Math.abs(a-c)<=h*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(o-s)<=h*Math.max(1,Math.abs(o),Math.abs(s))&&Math.abs(u-f)<=h*Math.max(1,Math.abs(u),Math.abs(f))}const x=i,q=c,w=s,_=h,v=l,E=M,I=d;Object.freeze(Object.defineProperty({__proto__:null,copy:a,set:o,add:u,subtract:i,multiply:c,divide:s,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t},floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t},min:function(t,n,e){return t[0]=Math.min(n[0],e[0]),t[1]=Math.min(n[1],e[1]),t[2]=Math.min(n[2],e[2]),t[3]=Math.min(n[3],e[3]),t},max:function(t,n,e){return t[0]=Math.max(n[0],e[0]),t[1]=Math.max(n[1],e[1]),t[2]=Math.max(n[2],e[2]),t[3]=Math.max(n[3],e[3]),t},round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t},scale:f,scaleAndAdd:function(t,n,e,r){return t[0]=n[0]+e[0]*r,t[1]=n[1]+e[1]*r,t[2]=n[2]+e[2]*r,t[3]=n[3]+e[3]*r,t},distance:h,squaredDistance:l,length:M,squaredLength:d,negate:function(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t},normalize:m,dot:b,lerp:g,random:function(t,n){const e=r.R;let a,o,u,i,c,s;n=n||1;do{a=2*e()-1,o=2*e()-1,c=a*a+o*o}while(c>=1);do{u=2*e()-1,i=2*e()-1,s=u*u+i*i}while(s>=1);const f=Math.sqrt((1-c)/s);return t[0]=n*a,t[1]=n*o,t[2]=n*u*f,t[3]=n*i*f,t},transformMat4:function(t,n,e){const r=n[0],a=n[1],o=n[2],u=n[3];return t[0]=e[0]*r+e[4]*a+e[8]*o+e[12]*u,t[1]=e[1]*r+e[5]*a+e[9]*o+e[13]*u,t[2]=e[2]*r+e[6]*a+e[10]*o+e[14]*u,t[3]=e[3]*r+e[7]*a+e[11]*o+e[15]*u,t},transformQuat:function(t,n,e){const r=n[0],a=n[1],o=n[2],u=e[0],i=e[1],c=e[2],s=e[3],f=s*r+i*o-c*a,h=s*a+c*r-u*o,l=s*o+u*a-i*r,M=-u*r-i*a-c*o;return t[0]=f*s+M*-u+h*-c-l*-i,t[1]=h*s+M*-i+l*-u-f*-c,t[2]=l*s+M*-c+f*-i-h*-u,t[3]=n[3],t},str:function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},exactEquals:p,equals:y,sub:x,mul:q,div:w,dist:_,sqrDist:v,len:E,sqrLen:I},Symbol.toStringTag,{value:"Module"}))},22021:(t,n,e)=>{e.d(n,{BV:()=>f,Kt:()=>l,Sf:()=>o,Vl:()=>s,ZF:()=>h,jE:()=>p,oK:()=>b,oc:()=>y,t7:()=>c,uZ:()=>u,wt:()=>i});var r=e(17896);e(98766);const a=new Float32Array(1);function o(t){--t;for(let n=1;n<32;n<<=1)t|=t>>n;return t+1}function u(t,n,e){return Math.min(Math.max(t,n),e)}function i(t){return 0==(t&t-1)}function c(t,n,e){return t+(n-t)*e}function s(t){return t*Math.PI/180}function f(t){return 180*t/Math.PI}function h(t){return Math.acos(u(t,-1,1))}function l(t){return Math.asin(u(t,-1,1))}function M(t,n,e=1e-6){return t===n||!(!Number.isFinite(t)||!Number.isFinite(n))&&(t>n?t-n:n-t)<=e}const d=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));const m=BigInt("1000000");function b(t){return g(Math.max(-x,Math.min(t,x)))}function g(t){return a[0]=t,a[0]}function p(t,n){const e=(0,r.l)(t),a=l(t[2]/e),o=Math.atan2(t[1]/e,t[0]/e);return(0,r.s)(n,e,a,o),n}function y(t){const n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(M(n,1)&&M(e,1)&&M(r,1))}!function(t){const n=function(t){return d.setFloat64(0,t),d.getBigInt64(0)}(t=Math.abs(t)),e=function(t){return d.setBigInt64(0,t),d.getFloat64(0)}(n<=m?m:n-m);Math.abs(t-e)}(1);const x=g(34028234663852886e22)},49594:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var r=e(56481);function a(t,n){return n.push(t.buffer),{buffer:t.buffer,layout:o(t.layout)}}function o(t){const n=new Array;return t.fields.forEach(((t,e)=>{const r={...t,constructor:i(t.constructor)};n.push([e,r])})),{stride:t.stride,fields:n,fieldNames:t.fieldNames}}e(65576);const u=[r.ly,r.Eu,r.ct,r.ek,r.gK,r.bj,r.oS,r.q6,r.fP,r.Cd,r.ey,r.O1,r.D_,r.xA,r.ne,r.mc,r.av,r.TS,r.mw,r.v6,r.Nu,r.qt,r.G5,r.hu,r.Hz,r.Vs,r.P_,r.ir,r.o7,r.or,r.n1,r.zO,r.Jj,r.wA,r.PP,r.TN];function i(t){return`${t.ElementType}_${t.ElementCount}`}const c=new Map;u.forEach((t=>c.set(i(t),t)));var s=e(17288),f=e(97411),h=e(212);class l{async extract(t){const n=M(t),e=(0,h.Kl)(n),r=[n.data.buffer];return{result:d(e,r),transferList:r}}async extractComponentsEdgeLocations(t){const n=M(t),e=(0,h.kY)(n.data,n.skipDeduplicate,n.indices,n.indicesLength),r=[];return{result:a((0,f.n)(e,b,g).regular.instancesData,r),transferList:r}}async extractEdgeLocations(t){const n=M(t),e=(0,h.kY)(n.data,n.skipDeduplicate,n.indices,n.indicesLength),r=[];return{result:a((0,f.n)(e,m,g).regular.instancesData,r),transferList:r}}}function M(t){return{data:s.tf.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indices):"Uint16Array"===t.indicesType?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function d(t,n){return n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}const m=new class{allocate(t){return h.Yr.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,e){t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1)}},b=new class{allocate(t){return h.n_.createBuffer(t)}trim(t,n){return t.slice(0,n)}write(t,n,e){t.position0.setVec(n,e.position0),t.position1.setVec(n,e.position1),t.componentIndex.set(n,e.componentIndex)}},g={allocate:()=>null,write:()=>{},trim:()=>null}}}]);