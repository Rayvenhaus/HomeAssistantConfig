(function(he){typeof define=="function"&&define.amd?define(he):he()})(function(){"use strict";var he,T,gr,ge,vr,yr,br,xr,yt,bt,xt,wr,Le={},Cr=[],Ci=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ne=Array.isArray;function ie(e,t){for(var r in t)e[r]=t[r];return e}function wt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function q(e,t,r){var n,i,o,a={};for(o in t)o=="key"?n=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?he.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Oe(e,a,n,i,null)}function Oe(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++gr,__i:-1,__u:0};return i==null&&T.vnode!=null&&T.vnode(o),o}function Sr(){return{current:null}}function G(e){return e.children}function re(e,t){this.props=e,this.context=t}function Ce(e,t){if(t==null)return e.__?Ce(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Ce(e):null}function kr(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return kr(e)}}function Ct(e){(!e.__d&&(e.__d=!0)&&ge.push(e)&&!Ye.__r++||vr!==T.debounceRendering)&&((vr=T.debounceRendering)||yr)(Ye)}function Ye(){for(var e,t,r,n,i,o,a,s=1;ge.length;)ge.length>s&&ge.sort(br),e=ge.shift(),s=ge.length,e.__d&&(r=void 0,i=(n=(t=e).__v).__e,o=[],a=[],t.__P&&((r=ie({},n)).__v=n.__v+1,T.vnode&&T.vnode(r),St(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[i]:null,o,i??Ce(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,Mr(o,r,a),r.__e!=i&&kr(r)));Ye.__r=0}function $r(e,t,r,n,i,o,a,s,l,d,f){var c,m,p,_,h,v,y=n&&n.__k||Cr,b=t.length;for(l=Si(r,t,y,l,b),c=0;c<b;c++)(p=r.__k[c])!=null&&(m=p.__i===-1?Le:y[p.__i]||Le,p.__i=c,v=St(e,p,m,i,o,a,s,l,d,f),_=p.__e,p.ref&&m.ref!=p.ref&&(m.ref&&kt(m.ref,null,p),f.push(p.ref,p.__c||_,p)),h==null&&_!=null&&(h=_),4&p.__u||m.__k===p.__k?l=Pr(p,l,e):typeof p.type=="function"&&v!==void 0?l=v:_&&(l=_.nextSibling),p.__u&=-7);return r.__e=h,l}function Si(e,t,r,n,i){var o,a,s,l,d,f=r.length,c=f,m=0;for(e.__k=new Array(i),o=0;o<i;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(l=o+m,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Oe(null,a,null,null,null):Ne(a)?Oe(G,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?Oe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,s=null,(d=a.__i=ki(a,r,l,c))!==-1&&(c--,(s=r[d])&&(s.__u|=2)),s==null||s.__v===null?(d==-1&&(i>f?m--:i<f&&m++),typeof a.type!="function"&&(a.__u|=4)):d!=l&&(d==l-1?m--:d==l+1?m++:(d>l?m--:m++,a.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<f;o++)(s=r[o])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=Ce(s)),Rr(s,s));return n}function Pr(e,t,r){var n,i;if(typeof e.type=="function"){for(n=e.__k,i=0;n&&i<n.length;i++)n[i]&&(n[i].__=e,t=Pr(n[i],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=Ce(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function le(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ne(e)?e.some(function(r){le(r,t)}):t.push(e)),t}function ki(e,t,r,n){var i,o,a=e.key,s=e.type,l=t[r];if(l===null&&e.key==null||l&&a==l.key&&s===l.type&&(2&l.__u)==0)return r;if(n>(l!=null&&(2&l.__u)==0?1:0))for(i=r-1,o=r+1;i>=0||o<t.length;){if(i>=0){if((l=t[i])&&(2&l.__u)==0&&a==l.key&&s===l.type)return i;i--}if(o<t.length){if((l=t[o])&&(2&l.__u)==0&&a==l.key&&s===l.type)return o;o++}}return-1}function Er(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Ci.test(t)?r:r+"px"}function Xe(e,t,r,n,i){var o;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Er(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||Er(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(xr,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n?r.t=n.t:(r.t=yt,e.addEventListener(t,o?xt:bt,o)):e.removeEventListener(t,o?xt:bt,o);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Tr(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.u==null)t.u=yt++;else if(t.u<r.t)return;return r(T.event?T.event(t):t)}}}function St(e,t,r,n,i,o,a,s,l,d){var f,c,m,p,_,h,v,y,b,k,P,g,w,C,E,M,O,B=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(l=!!(32&r.__u),o=[s=t.__e=r.__e]),(f=T.__b)&&f(t);e:if(typeof B=="function")try{if(y=t.props,b="prototype"in B&&B.prototype.render,k=(f=B.contextType)&&n[f.__c],P=f?k?k.props.value:f.__:n,r.__c?v=(c=t.__c=r.__c).__=c.__E:(b?t.__c=c=new B(y,P):(t.__c=c=new re(y,P),c.constructor=B,c.render=Pi),k&&k.sub(c),c.props=y,c.state||(c.state={}),c.context=P,c.__n=n,m=c.__d=!0,c.__h=[],c._sb=[]),b&&c.__s==null&&(c.__s=c.state),b&&B.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=ie({},c.__s)),ie(c.__s,B.getDerivedStateFromProps(y,c.__s))),p=c.props,_=c.state,c.__v=t,m)b&&B.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),b&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(b&&B.getDerivedStateFromProps==null&&y!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,P),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,P)===!1||t.__v==r.__v)){for(t.__v!=r.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ne){ne&&(ne.__=t)}),g=0;g<c._sb.length;g++)c.__h.push(c._sb[g]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,P),b&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,_,h)})}if(c.context=P,c.props=y,c.__P=e,c.__e=!1,w=T.__r,C=0,b){for(c.state=c.__s,c.__d=!1,w&&w(t),f=c.render(c.props,c.state,c.context),E=0;E<c._sb.length;E++)c.__h.push(c._sb[E]);c._sb=[]}else do c.__d=!1,w&&w(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++C<25);c.state=c.__s,c.getChildContext!=null&&(n=ie(ie({},n),c.getChildContext())),b&&!m&&c.getSnapshotBeforeUpdate!=null&&(h=c.getSnapshotBeforeUpdate(p,_)),M=f,f!=null&&f.type===G&&f.key==null&&(M=Ar(f.props.children)),s=$r(e,Ne(M)?M:[M],t,r,n,i,o,a,s,l,d),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),v&&(c.__E=c.__=null)}catch(ne){if(t.__v=null,l||o!=null)if(ne.then){for(t.__u|=l?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,t.__e=s}else for(O=o.length;O--;)wt(o[O]);else t.__e=r.__e,t.__k=r.__k;T.__e(ne,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):s=t.__e=$i(r.__e,t,r,n,i,o,a,l,d);return(f=T.diffed)&&f(t),128&t.__u?void 0:s}function Mr(e,t,r){for(var n=0;n<r.length;n++)kt(r[n],r[++n],r[++n]);T.__c&&T.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){T.__e(o,i.__v)}})}function Ar(e){return typeof e!="object"||e==null?e:Ne(e)?e.map(Ar):ie({},e)}function $i(e,t,r,n,i,o,a,s,l){var d,f,c,m,p,_,h,v=r.props,y=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(d=0;d<o.length;d++)if((p=o[d])&&"setAttribute"in p==!!b&&(b?p.localName==b:p.nodeType==3)){e=p,o[d]=null;break}}if(e==null){if(b==null)return document.createTextNode(y);e=document.createElementNS(i,b,y.is&&y),s&&(T.__m&&T.__m(t,o),s=!1),o=null}if(b===null)v===y||s&&e.data===y||(e.data=y);else{if(o=o&&he.call(e.childNodes),v=r.props||Le,!s&&o!=null)for(v={},d=0;d<e.attributes.length;d++)v[(p=e.attributes[d]).name]=p.value;for(d in v)if(p=v[d],d!="children"){if(d=="dangerouslySetInnerHTML")c=p;else if(!(d in y)){if(d=="value"&&"defaultValue"in y||d=="checked"&&"defaultChecked"in y)continue;Xe(e,d,null,p,i)}}for(d in y)p=y[d],d=="children"?m=p:d=="dangerouslySetInnerHTML"?f=p:d=="value"?_=p:d=="checked"?h=p:s&&typeof p!="function"||v[d]===p||Xe(e,d,p,v[d],i);if(f)s||c&&(f.__html===c.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),$r(t.type==="template"?e.content:e,Ne(m)?m:[m],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:r.__k&&Ce(r,0),s,l),o!=null)for(d=o.length;d--;)wt(o[d]);s||(d="value",b=="progress"&&_==null?e.removeAttribute("value"):_!==void 0&&(_!==e[d]||b=="progress"&&!_||b=="option"&&_!==v[d])&&Xe(e,d,_,v[d],i),d="checked",h!==void 0&&h!==e[d]&&Xe(e,d,h,v[d],i))}return e}function kt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(i){T.__e(i,r)}}function Rr(e,t,r){var n,i;if(T.unmount&&T.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||kt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){T.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&Rr(n[i],t,r||typeof e.type!="function");r||wt(e.__e),e.__c=e.__=e.__e=void 0}function Pi(e,t,r){return this.constructor(e,r)}function ve(e,t,r){var n,i,o,a;t==document&&(t=document.documentElement),T.__&&T.__(e,t),i=(n=typeof r=="function")?null:r&&r.__k||t.__k,o=[],a=[],St(t,e=(!n&&r||t).__k=q(G,null,[e]),i||Le,Le,t.namespaceURI,!n&&r?[r]:i?null:t.firstChild?he.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n,a),Mr(o,e,a)}function zr(e,t){ve(e,t,zr)}function Ei(e,t,r){var n,i,o,a,s=ie({},e.props);for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)o=="key"?n=t[o]:o=="ref"?i=t[o]:s[o]=t[o]===void 0&&a!==void 0?a[o]:t[o];return arguments.length>2&&(s.children=arguments.length>3?he.call(arguments,2):r),Oe(e.type,s,n||e.key,i||e.ref,null)}function ye(e){function t(r){var n,i;return this.getChildContext||(n=new Set,(i={})[t.__c]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&n.forEach(function(a){a.__e=!0,Ct(a)})},this.sub=function(o){n.add(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){n&&n.delete(o),a&&a.call(o)}}),r.children}return t.__c="__cC"+wr++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,n){return r.children(n)}).contextType=t,t}he=Cr.slice,T={__e:function(e,t,r,n){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),a=i.__d),a)return i.__E=i}catch(s){e=s}throw e}},gr=0,re.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ie({},this.state),typeof e=="function"&&(e=e(ie({},r),this.props)),e&&ie(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ct(this))},re.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ct(this))},re.prototype.render=G,ge=[],yr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,br=function(e,t){return e.__v.__b-t.__v.__b},Ye.__r=0,xr=/(PointerCapture)$|Capture$/i,yt=0,bt=Tr(!1),xt=Tr(!0),wr=0;var Ti=0;function u(e,t,r,n,i,o){t||(t={});var a,s,l=t;if("ref"in l)for(s in l={},t)s=="ref"?a=t[s]:l[s]=t[s];var d={type:e,props:l,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ti,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(s in a)l[s]===void 0&&(l[s]=a[s]);return T.vnode&&T.vnode(d),d}function $t(){return $t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$t.apply(null,arguments)}var ue,I,Pt,Lr,Se=0,Nr=[],V=T,Or=V.__b,Ir=V.__r,Vr=V.diffed,Dr=V.__c,Fr=V.unmount,Hr=V.__;function be(e,t){V.__h&&V.__h(I,e,Se||t),Se=0;var r=I.__H||(I.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function F(e){return Se=1,Ke(Br,e)}function Ke(e,t,r){var n=be(ue++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):Br(void 0,t),function(s){var l=n.__N?n.__N[0]:n.__[0],d=n.t(l,s);l!==d&&(n.__N=[d,n.__[1]],n.__c.setState({}))}],n.__c=I,!I.__f)){var i=function(s,l,d){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(m){return!!m.__c});if(f.every(function(m){return!m.__N}))return!o||o.call(this,s,l,d);var c=n.__c.props!==s;return f.forEach(function(m){if(m.__N){var p=m.__[0];m.__=m.__N,m.__N=void 0,p!==m.__[0]&&(c=!0)}}),o&&o.call(this,s,l,d)||c};I.__f=!0;var o=I.shouldComponentUpdate,a=I.componentWillUpdate;I.componentWillUpdate=function(s,l,d){if(this.__e){var f=o;o=void 0,i(s,l,d),o=f}a&&a.call(this,s,l,d)},I.shouldComponentUpdate=i}return n.__N||n.__}function oe(e,t){var r=be(ue++,3);!V.__s&&Rt(r.__H,t)&&(r.__=e,r.u=t,I.__H.__h.push(r))}function ke(e,t){var r=be(ue++,4);!V.__s&&Rt(r.__H,t)&&(r.__=e,r.u=t,I.__h.push(r))}function de(e){return Se=5,H(function(){return{current:e}},[])}function Et(e,t,r){Se=6,ke(function(){if(typeof e=="function"){var n=e(t());return function(){e(null),n&&typeof n=="function"&&n()}}if(e)return e.current=t(),function(){return e.current=null}},r==null?r:r.concat(e))}function H(e,t){var r=be(ue++,7);return Rt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function S(e,t){return Se=8,H(function(){return e},t)}function D(e){var t=I.context[e.__c],r=be(ue++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(I)),t.props.value):e.__}function Tt(e,t){V.useDebugValue&&V.useDebugValue(t?t(e):e)}function Mi(e){var t=be(ue++,10),r=F();return t.__=e,I.componentDidCatch||(I.componentDidCatch=function(n,i){t.__&&t.__(n,i),r[1](n)}),[r[0],function(){r[1](void 0)}]}function Mt(){var e=be(ue++,11);if(!e.__){for(var t=I.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var r=t.__m||(t.__m=[0,0]);e.__="P"+r[0]+"-"+r[1]++}return e.__}function Ai(){for(var e;e=Nr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Je),e.__H.__h.forEach(At),e.__H.__h=[]}catch(t){e.__H.__h=[],V.__e(t,e.__v)}}V.__b=function(e){I=null,Or&&Or(e)},V.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Hr&&Hr(e,t)},V.__r=function(e){Ir&&Ir(e),ue=0;var t=(I=e.__c).__H;t&&(Pt===I?(t.__h=[],I.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Je),t.__h.forEach(At),t.__h=[],ue=0)),Pt=I},V.diffed=function(e){Vr&&Vr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Nr.push(t)!==1&&Lr===V.requestAnimationFrame||((Lr=V.requestAnimationFrame)||Ri)(Ai)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Pt=I=null},V.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Je),r.__h=r.__h.filter(function(n){return!n.__||At(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],V.__e(n,r.__v)}}),Dr&&Dr(e,t)},V.unmount=function(e){Fr&&Fr(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Je(n)}catch(i){t=i}}),r.__H=void 0,t&&V.__e(t,r.__v))};var Ur=typeof requestAnimationFrame=="function";function Ri(e){var t,r=function(){clearTimeout(n),Ur&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);Ur&&(t=requestAnimationFrame(r))}function Je(e){var t=I,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),I=t}function At(e){var t=I;e.__c=e.__(),I=t}function Rt(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Br(e,t){return typeof t=="function"?t(e):t}function jr(e,t){for(var r in t)e[r]=t[r];return e}function zt(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function Lt(e,t){var r=t(),n=F({t:{__:r,u:t}}),i=n[0].t,o=n[1];return ke(function(){i.__=r,i.u=t,Nt(i)&&o({t:i})},[e,r,t]),oe(function(){return Nt(i)&&o({t:i}),e(function(){Nt(i)&&o({t:i})})},[e]),r}function Nt(e){var t,r,n=e.u,i=e.__;try{var o=n();return!((t=i)===(r=o)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function Ot(e){e()}function It(e){return e}function Vt(){return[!1,Ot]}var Dt=ke;function Qe(e,t){this.props=e,this.context=t}function Gr(e,t){function r(i){var o=this.props.ref,a=o==i.ref;return!a&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!a:zt(this.props,i)}function n(i){return this.shouldComponentUpdate=r,q(e,i)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(Qe.prototype=new re).isPureReactComponent=!0,Qe.prototype.shouldComponentUpdate=function(e,t){return zt(this.props,e)||zt(this.state,t)};var Wr=T.__b;T.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Wr&&Wr(e)};var zi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ft(e){function t(r){var n=jr({},r);return delete n.ref,e(n,r.ref||null)}return t.$$typeof=zi,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var qr=function(e,t){return e==null?null:le(le(e).map(t))},Yr={map:qr,forEach:qr,count:function(e){return e?le(e).length:0},only:function(e){var t=le(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:le},Li=T.__e;T.__e=function(e,t,r,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),i.__c(e,t)}Li(e,t,r,n)};var Xr=T.unmount;function Kr(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=jr({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Kr(n,t,r)})),e}function Jr(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Jr(n,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function Ie(){this.__u=0,this.o=null,this.__b=null}function Qr(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Zr(e){var t,r,n;function i(o){if(t||(t=e()).then(function(a){r=a.default||a},function(a){n=a}),n)throw n;if(!r)throw t;return q(r,o)}return i.displayName="Lazy",i.__f=!0,i}function $e(){this.i=null,this.l=null}T.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Xr&&Xr(e)},(Ie.prototype=new re).__c=function(e,t){var r=t.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var i=Qr(n.__v),o=!1,a=function(){o||(o=!0,r.__R=null,i?i(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=Jr(l,l.__c.__P,l.__c.__O)}var d;for(n.setState({__a:n.__b=null});d=n.o.pop();)d.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},Ie.prototype.componentWillUnmount=function(){this.o=[]},Ie.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Kr(this.__b,r,n.__O=n.__P)}this.__b=null}var i=t.__a&&q(G,null,e.fallback);return i&&(i.__u&=-33),[q(G,null,t.__a?null:e.children),i]};var en=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function Ni(e){return this.getChildContext=function(){return e.context},e.children}function Oi(e){var t=this,r=e.h;t.componentWillUnmount=function(){ve(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),t.v||(t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],contains:function(){return!0},appendChild:function(n){this.childNodes.push(n),t.h.appendChild(n)},insertBefore:function(n,i){this.childNodes.push(n),t.h.insertBefore(n,i)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.h.removeChild(n)}}),ve(q(Ni,{context:t.context},e.__v),t.v)}function tn(e,t){var r=q(Oi,{__v:e,h:t});return r.containerInfo=t,r}($e.prototype=new re).__a=function(e){var t=this,r=Qr(t.__v),n=t.l.get(e);return n[0]++,function(i){var o=function(){t.props.revealOrder?(n.push(i),en(t,e,n)):i()};r?r(o):o()}},$e.prototype.render=function(e){this.i=null,this.l=new Map;var t=le(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},$e.prototype.componentDidUpdate=$e.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){en(e,r,t)})};var rn=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ii=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Vi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Di=/[A-Z0-9]/g,Fi=typeof document<"u",Hi=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function nn(e,t,r){return t.__k==null&&(t.textContent=""),ve(e,t),typeof r=="function"&&r(),e?e.__c:null}function on(e,t,r){return zr(e,t),typeof r=="function"&&r(),e?e.__c:null}re.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(re.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var an=T.event;function Ui(){}function Bi(){return this.cancelBubble}function ji(){return this.defaultPrevented}T.event=function(e){return an&&(e=an(e)),e.persist=Ui,e.isPropagationStopped=Bi,e.isDefaultPrevented=ji,e.nativeEvent=e};var Ht,Gi={enumerable:!1,configurable:!0,get:function(){return this.class}},sn=T.vnode;T.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,n=t.type,i={},o=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||Fi&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":l==="translate"&&s==="no"?s=!1:l[0]==="o"&&l[1]==="n"?l==="ondoubleclick"?a="ondblclick":l!=="onchange"||n!=="input"&&n!=="textarea"||Hi(r.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":Vi.test(a)&&(a=l):l=a="oninput":o&&Ii.test(a)?a=a.replace(Di,"-$&").toLowerCase():s===null&&(s=void 0),l==="oninput"&&i[a=l]&&(a="oninputCapture"),i[a]=s}}n=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=le(r.children).forEach(function(d){d.props.selected=i.value.indexOf(d.props.value)!=-1})),n=="select"&&i.defaultValue!=null&&(i.value=le(r.children).forEach(function(d){d.props.selected=i.multiple?i.defaultValue.indexOf(d.props.value)!=-1:i.defaultValue==d.props.value})),r.class&&!r.className?(i.class=r.class,Object.defineProperty(i,"className",Gi)):(r.className&&!r.class||r.class&&r.className)&&(i.class=i.className=r.className),t.props=i}(e),e.$$typeof=rn,sn&&sn(e)};var cn=T.__r;T.__r=function(e){cn&&cn(e),Ht=e.__c};var ln=T.diffed;T.diffed=function(e){ln&&ln(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value),Ht=null};var un={ReactCurrentDispatcher:{current:{readContext:function(e){return Ht.__n[e.__c].props.value},useCallback:S,useContext:D,useDebugValue:Tt,useDeferredValue:It,useEffect:oe,useId:Mt,useImperativeHandle:Et,useInsertionEffect:Dt,useLayoutEffect:ke,useMemo:H,useReducer:Ke,useRef:de,useState:F,useSyncExternalStore:Lt,useTransition:Vt}}},Wi="18.3.1";function dn(e){return q.bind(null,e)}function Ve(e){return!!e&&e.$$typeof===rn}function fn(e){return Ve(e)&&e.type===G}function pn(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function hn(e){return Ve(e)?Ei.apply(null,arguments):e}function _n(e){return!!e.__k&&(ve(null,e),!0)}function mn(e){return e&&(e.base||e.nodeType===1&&e)||null}var gn=function(e,t){return e(t)},vn=function(e,t){return e(t)},yn=G,bn=Ve,qi={useState:F,useId:Mt,useReducer:Ke,useEffect:oe,useLayoutEffect:ke,useInsertionEffect:Dt,useTransition:Vt,useDeferredValue:It,useSyncExternalStore:Lt,startTransition:Ot,useRef:de,useImperativeHandle:Et,useMemo:H,useCallback:S,useContext:D,useDebugValue:Tt,version:"18.3.1",Children:Yr,render:nn,hydrate:on,unmountComponentAtNode:_n,createPortal:tn,createElement:q,createContext:ye,createFactory:dn,cloneElement:hn,createRef:Sr,Fragment:G,isValidElement:Ve,isElement:bn,isFragment:fn,isMemo:pn,findDOMNode:mn,Component:re,PureComponent:Qe,memo:Gr,forwardRef:Ft,flushSync:vn,unstable_batchedUpdates:gn,StrictMode:yn,Suspense:Ie,SuspenseList:$e,lazy:Zr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:un};const xn=Object.freeze(Object.defineProperty({__proto__:null,Children:Yr,Component:re,Fragment:G,PureComponent:Qe,StrictMode:yn,Suspense:Ie,SuspenseList:$e,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:un,cloneElement:hn,createContext:ye,createElement:q,createFactory:dn,createPortal:tn,createRef:Sr,default:qi,findDOMNode:mn,flushSync:vn,forwardRef:Ft,hydrate:on,isElement:bn,isFragment:fn,isMemo:pn,isValidElement:Ve,lazy:Zr,memo:Gr,render:nn,startTransition:Ot,unmountComponentAtNode:_n,unstable_batchedUpdates:gn,useCallback:S,useContext:D,useDebugValue:Tt,useDeferredValue:It,useEffect:oe,useErrorBoundary:Mi,useId:Mt,useImperativeHandle:Et,useInsertionEffect:Dt,useLayoutEffect:ke,useMemo:H,useReducer:Ke,useRef:de,useState:F,useSyncExternalStore:Lt,useTransition:Vt,version:Wi},Symbol.toStringTag,{value:"Module"}));function Yi(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Xi(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ki=function(){function e(r){var n=this;this._insertTag=function(i){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,o),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Xi(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Yi(i);try{o.insertRule(n,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var i;return(i=n.parentNode)==null?void 0:i.removeChild(n)}),this.tags=[],this.ctr=0},e}(),X="-ms-",Ze="-moz-",R="-webkit-",wn="comm",Ut="rule",Bt="decl",Ji="@import",Cn="@keyframes",Qi="@layer",Zi=Math.abs,et=String.fromCharCode,eo=Object.assign;function to(e,t){return Y(e,0)^45?(((t<<2^Y(e,0))<<2^Y(e,1))<<2^Y(e,2))<<2^Y(e,3):0}function Sn(e){return e.trim()}function ro(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,r){return e.replace(t,r)}function jt(e,t){return e.indexOf(t)}function Y(e,t){return e.charCodeAt(t)|0}function De(e,t,r){return e.slice(t,r)}function ae(e){return e.length}function Gt(e){return e.length}function tt(e,t){return t.push(e),e}function no(e,t){return e.map(t).join("")}var rt=1,Pe=1,kn=0,Z=0,j=0,Ee="";function nt(e,t,r,n,i,o,a){return{value:e,root:t,parent:r,type:n,props:i,children:o,line:rt,column:Pe,length:a,return:""}}function Fe(e,t){return eo(nt("",null,null,"",null,null,0),e,{length:-e.length},t)}function io(){return j}function oo(){return j=Z>0?Y(Ee,--Z):0,Pe--,j===10&&(Pe=1,rt--),j}function ee(){return j=Z<kn?Y(Ee,Z++):0,Pe++,j===10&&(Pe=1,rt++),j}function se(){return Y(Ee,Z)}function it(){return Z}function He(e,t){return De(Ee,e,t)}function Ue(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $n(e){return rt=Pe=1,kn=ae(Ee=e),Z=0,[]}function Pn(e){return Ee="",e}function ot(e){return Sn(He(Z-1,Wt(e===91?e+2:e===40?e+1:e)))}function ao(e){for(;(j=se())&&j<33;)ee();return Ue(e)>2||Ue(j)>3?"":" "}function so(e,t){for(;--t&&ee()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return He(e,it()+(t<6&&se()==32&&ee()==32))}function Wt(e){for(;ee();)switch(j){case e:return Z;case 34:case 39:e!==34&&e!==39&&Wt(j);break;case 40:e===41&&Wt(e);break;case 92:ee();break}return Z}function co(e,t){for(;ee()&&e+j!==57;)if(e+j===84&&se()===47)break;return"/*"+He(t,Z-1)+"*"+et(e===47?e:ee())}function lo(e){for(;!Ue(se());)ee();return He(e,Z)}function uo(e){return Pn(at("",null,null,null,[""],e=$n(e),0,[0],e))}function at(e,t,r,n,i,o,a,s,l){for(var d=0,f=0,c=a,m=0,p=0,_=0,h=1,v=1,y=1,b=0,k="",P=i,g=o,w=n,C=k;v;)switch(_=b,b=ee()){case 40:if(_!=108&&Y(C,c-1)==58){jt(C+=z(ot(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:C+=ot(b);break;case 9:case 10:case 13:case 32:C+=ao(_);break;case 92:C+=so(it()-1,7);continue;case 47:switch(se()){case 42:case 47:tt(fo(co(ee(),it()),t,r),l);break;default:C+="/"}break;case 123*h:s[d++]=ae(C)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:v=0;case 59+f:y==-1&&(C=z(C,/\f/g,"")),p>0&&ae(C)-c&&tt(p>32?Tn(C+";",n,r,c-1):Tn(z(C," ","")+";",n,r,c-2),l);break;case 59:C+=";";default:if(tt(w=En(C,t,r,d,f,i,s,k,P=[],g=[],c),o),b===123)if(f===0)at(C,t,w,w,P,o,c,s,g);else switch(m===99&&Y(C,3)===110?100:m){case 100:case 108:case 109:case 115:at(e,w,w,n&&tt(En(e,w,w,0,0,i,s,k,i,P=[],c),g),i,g,c,s,n?P:g);break;default:at(C,w,w,w,[""],g,0,s,g)}}d=f=p=0,h=y=1,k=C="",c=a;break;case 58:c=1+ae(C),p=_;default:if(h<1){if(b==123)--h;else if(b==125&&h++==0&&oo()==125)continue}switch(C+=et(b),b*h){case 38:y=f>0?1:(C+="\f",-1);break;case 44:s[d++]=(ae(C)-1)*y,y=1;break;case 64:se()===45&&(C+=ot(ee())),m=se(),f=c=ae(k=C+=lo(it())),b++;break;case 45:_===45&&ae(C)==2&&(h=0)}}return o}function En(e,t,r,n,i,o,a,s,l,d,f){for(var c=i-1,m=i===0?o:[""],p=Gt(m),_=0,h=0,v=0;_<n;++_)for(var y=0,b=De(e,c+1,c=Zi(h=a[_])),k=e;y<p;++y)(k=Sn(h>0?m[y]+" "+b:z(b,/&\f/g,m[y])))&&(l[v++]=k);return nt(e,t,r,i===0?Ut:s,l,d,f)}function fo(e,t,r){return nt(e,t,r,wn,et(io()),De(e,2,-2),0)}function Tn(e,t,r,n){return nt(e,t,r,Bt,De(e,0,n),De(e,n+1,-1),n)}function Te(e,t){for(var r="",n=Gt(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function po(e,t,r,n){switch(e.type){case Qi:if(e.children.length)break;case Ji:case Bt:return e.return=e.return||e.value;case wn:return"";case Cn:return e.return=e.value+"{"+Te(e.children,n)+"}";case Ut:e.value=e.props.join(",")}return ae(r=Te(e.children,n))?e.return=e.value+"{"+r+"}":""}function ho(e){var t=Gt(e);return function(r,n,i,o){for(var a="",s=0;s<t;s++)a+=e[s](r,n,i,o)||"";return a}}function _o(e){return function(t){t.root||(t=t.return)&&e(t)}}function Mn(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var mo=function(t,r,n){for(var i=0,o=0;i=o,o=se(),i===38&&o===12&&(r[n]=1),!Ue(o);)ee();return He(t,Z)},go=function(t,r){var n=-1,i=44;do switch(Ue(i)){case 0:i===38&&se()===12&&(r[n]=1),t[n]+=mo(Z-1,r,n);break;case 2:t[n]+=ot(i);break;case 4:if(i===44){t[++n]=se()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=et(i)}while(i=ee());return t},vo=function(t,r){return Pn(go($n(t),r))},An=new WeakMap,yo=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,i=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!An.get(n))&&!i){An.set(t,!0);for(var o=[],a=vo(r,o),s=n.props,l=0,d=0;l<a.length;l++)for(var f=0;f<s.length;f++,d++)t.props[d]=o[l]?a[l].replace(/&\f/g,s[f]):s[f]+" "+a[l]}}},bo=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Rn(e,t){switch(to(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+Ze+e+X+e+e;case 6828:case 4268:return R+e+X+e+e;case 6165:return R+e+X+"flex-"+e+e;case 5187:return R+e+z(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return R+e+X+"flex-item-"+z(e,/flex-|-self/,"")+e;case 4675:return R+e+X+"flex-line-pack"+z(e,/align-content|flex-|-self/,"")+e;case 5548:return R+e+X+z(e,"shrink","negative")+e;case 5292:return R+e+X+z(e,"basis","preferred-size")+e;case 6060:return R+"box-"+z(e,"-grow","")+R+e+X+z(e,"grow","positive")+e;case 4554:return R+z(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ae(e)-1-t>6)switch(Y(e,t+1)){case 109:if(Y(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+Ze+(Y(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~jt(e,"stretch")?Rn(z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Y(e,t+1)!==115)break;case 6444:switch(Y(e,ae(e)-3-(~jt(e,"!important")&&10))){case 107:return z(e,":",":"+R)+e;case 101:return z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(Y(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(Y(e,t+11)){case 114:return R+e+X+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+X+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+X+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return R+e+X+e+e}return e}var xo=function(t,r,n,i){if(t.length>-1&&!t.return)switch(t.type){case Bt:t.return=Rn(t.value,t.length);break;case Cn:return Te([Fe(t,{value:z(t.value,"@","@"+R)})],i);case Ut:if(t.length)return no(t.props,function(o){switch(ro(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Te([Fe(t,{props:[z(o,/:(read-\w+)/,":"+Ze+"$1")]})],i);case"::placeholder":return Te([Fe(t,{props:[z(o,/:(plac\w+)/,":"+R+"input-$1")]}),Fe(t,{props:[z(o,/:(plac\w+)/,":"+Ze+"$1")]}),Fe(t,{props:[z(o,/:(plac\w+)/,X+"input-$1")]})],i)}return""})}},wo=[xo],zn=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(h){var v=h.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var i=t.stylisPlugins||wo,o={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(h){for(var v=h.getAttribute("data-emotion").split(" "),y=1;y<v.length;y++)o[v[y]]=!0;s.push(h)});var l,d=[yo,bo];{var f,c=[po,_o(function(h){f.insert(h)})],m=ho(d.concat(i,c)),p=function(v){return Te(uo(v),m)};l=function(v,y,b,k){f=b,p(v?v+"{"+y.styles+"}":y.styles),k&&(_.inserted[y.name]=!0)}}var _={key:r,sheet:new Ki({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:o,registered:{},insert:l};return _.sheet.hydrate(s),_},st={exports:{}},L={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function Co(){if(Ln)return L;Ln=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,c=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,_=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function k(g){if(typeof g=="object"&&g!==null){var w=g.$$typeof;switch(w){case t:switch(g=g.type,g){case l:case d:case n:case o:case i:case c:return g;default:switch(g=g&&g.$$typeof,g){case s:case f:case _:case p:case a:return g;default:return w}}case r:return w}}}function P(g){return k(g)===d}return L.AsyncMode=l,L.ConcurrentMode=d,L.ContextConsumer=s,L.ContextProvider=a,L.Element=t,L.ForwardRef=f,L.Fragment=n,L.Lazy=_,L.Memo=p,L.Portal=r,L.Profiler=o,L.StrictMode=i,L.Suspense=c,L.isAsyncMode=function(g){return P(g)||k(g)===l},L.isConcurrentMode=P,L.isContextConsumer=function(g){return k(g)===s},L.isContextProvider=function(g){return k(g)===a},L.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===t},L.isForwardRef=function(g){return k(g)===f},L.isFragment=function(g){return k(g)===n},L.isLazy=function(g){return k(g)===_},L.isMemo=function(g){return k(g)===p},L.isPortal=function(g){return k(g)===r},L.isProfiler=function(g){return k(g)===o},L.isStrictMode=function(g){return k(g)===i},L.isSuspense=function(g){return k(g)===c},L.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===n||g===d||g===o||g===i||g===c||g===m||typeof g=="object"&&g!==null&&(g.$$typeof===_||g.$$typeof===p||g.$$typeof===a||g.$$typeof===s||g.$$typeof===f||g.$$typeof===v||g.$$typeof===y||g.$$typeof===b||g.$$typeof===h)},L.typeOf=k,L}var N={},Nn;function So(){if(Nn)return N;Nn=1;var e={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return e.NODE_ENV!=="production"&&function(){var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,c=t?Symbol.for("react.forward_ref"):60112,m=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.suspense_list"):60120,_=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.block"):60121,y=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118,k=t?Symbol.for("react.scope"):60119;function P($){return typeof $=="string"||typeof $=="function"||$===i||$===f||$===a||$===o||$===m||$===p||typeof $=="object"&&$!==null&&($.$$typeof===h||$.$$typeof===_||$.$$typeof===s||$.$$typeof===l||$.$$typeof===c||$.$$typeof===y||$.$$typeof===b||$.$$typeof===k||$.$$typeof===v)}function g($){if(typeof $=="object"&&$!==null){var _r=$.$$typeof;switch(_r){case r:var vt=$.type;switch(vt){case d:case f:case i:case a:case o:case m:return vt;default:var wi=vt&&vt.$$typeof;switch(wi){case l:case c:case h:case _:case s:return wi;default:return _r}}case n:return _r}}}var w=d,C=f,E=l,M=s,O=r,B=c,ne=i,Re=h,ze=_,gt=n,gc=a,vc=o,yc=m,bi=!1;function bc($){return bi||(bi=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),xi($)||g($)===d}function xi($){return g($)===f}function xc($){return g($)===l}function wc($){return g($)===s}function Cc($){return typeof $=="object"&&$!==null&&$.$$typeof===r}function Sc($){return g($)===c}function kc($){return g($)===i}function $c($){return g($)===h}function Pc($){return g($)===_}function Ec($){return g($)===n}function Tc($){return g($)===a}function Mc($){return g($)===o}function Ac($){return g($)===m}N.AsyncMode=w,N.ConcurrentMode=C,N.ContextConsumer=E,N.ContextProvider=M,N.Element=O,N.ForwardRef=B,N.Fragment=ne,N.Lazy=Re,N.Memo=ze,N.Portal=gt,N.Profiler=gc,N.StrictMode=vc,N.Suspense=yc,N.isAsyncMode=bc,N.isConcurrentMode=xi,N.isContextConsumer=xc,N.isContextProvider=wc,N.isElement=Cc,N.isForwardRef=Sc,N.isFragment=kc,N.isLazy=$c,N.isMemo=Pc,N.isPortal=Ec,N.isProfiler=Tc,N.isStrictMode=Mc,N.isSuspense=Ac,N.isValidElementType=P,N.typeOf=g}(),N}var On;function ko(){if(On)return st.exports;On=1;var e={};return e.NODE_ENV==="production"?st.exports=Co():st.exports=So(),st.exports}var qt,In;function $o(){if(In)return qt;In=1;var e=ko(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[e.ForwardRef]=n,o[e.Memo]=i;function a(_){return e.isMemo(_)?i:o[_.$$typeof]||t}var s=Object.defineProperty,l=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,m=Object.prototype;function p(_,h,v){if(typeof h!="string"){if(m){var y=c(h);y&&y!==m&&p(_,y,v)}var b=l(h);d&&(b=b.concat(d(h)));for(var k=a(_),P=a(h),g=0;g<b.length;++g){var w=b[g];if(!r[w]&&!(v&&v[w])&&!(P&&P[w])&&!(k&&k[w])){var C=f(h,w);try{s(_,w,C)}catch{}}}}return _}return qt=p,qt}$o();var Po=!0;function Vn(e,t,r){var n="";return r.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(n+=i+" ")}),n}var Yt=function(t,r,n){var i=t.key+"-"+r.name;(n===!1||Po===!1)&&t.registered[i]===void 0&&(t.registered[i]=r.styles)},Dn=function(t,r,n){Yt(t,r,n);var i=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var o=r;do t.insert(r===o?"."+i:"",o,t.sheet,!0),o=o.next;while(o!==void 0)}};function Eo(e){for(var t=0,r,n=0,i=e.length;i>=4;++n,i-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var To={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mo=/[A-Z]|^ms/g,Ao=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Fn=function(t){return t.charCodeAt(1)===45},Hn=function(t){return t!=null&&typeof t!="boolean"},Xt=Mn(function(e){return Fn(e)?e:e.replace(Mo,"-$&").toLowerCase()}),Un=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ao,function(n,i,o){return ce={name:i,styles:o,next:ce},i})}return To[t]!==1&&!Fn(t)&&typeof r=="number"&&r!==0?r+"px":r};function Be(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var i=r;if(i.anim===1)return ce={name:i.name,styles:i.styles,next:ce},i.name;var o=r;if(o.styles!==void 0){var a=o.next;if(a!==void 0)for(;a!==void 0;)ce={name:a.name,styles:a.styles,next:ce},a=a.next;var s=o.styles+";";return s}return Ro(e,t,r)}case"function":{if(e!==void 0){var l=ce,d=r(e);return ce=l,Be(e,t,d)}break}}var f=r;if(t==null)return f;var c=t[f];return c!==void 0?c:f}function Ro(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=Be(e,t,r[i])+";";else for(var o in r){var a=r[o];if(typeof a!="object"){var s=a;t!=null&&t[s]!==void 0?n+=o+"{"+t[s]+"}":Hn(s)&&(n+=Xt(o)+":"+Un(o,s)+";")}else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var l=0;l<a.length;l++)Hn(a[l])&&(n+=Xt(o)+":"+Un(o,a[l])+";");else{var d=Be(e,t,a);switch(o){case"animation":case"animationName":{n+=Xt(o)+":"+d+";";break}default:n+=o+"{"+d+"}"}}}return n}var Bn=/label:\s*([^\s;{]+)\s*(;|$)/g,ce;function Kt(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,i="";ce=void 0;var o=e[0];if(o==null||o.raw===void 0)n=!1,i+=Be(r,t,o);else{var a=o;i+=a[0]}for(var s=1;s<e.length;s++)if(i+=Be(r,t,e[s]),n){var l=o;i+=l[s]}Bn.lastIndex=0;for(var d="",f;(f=Bn.exec(i))!==null;)d+="-"+f[1];var c=Eo(i)+d;return{name:c,styles:i,next:ce}}var zo=function(t){return t()},Lo=xn.useInsertionEffect?xn.useInsertionEffect:!1,jn=Lo||zo,Gn=ye(typeof HTMLElement<"u"?zn({key:"css"}):null),No=Gn.Provider,Wn=function(t){return Ft(function(r,n){var i=D(Gn);return t(r,i,n)})},qn=ye({}),Jt={}.hasOwnProperty,Qt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Oo=function(t,r){var n={};for(var i in r)Jt.call(r,i)&&(n[i]=r[i]);return n[Qt]=t,n},Io=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return Yt(r,n,i),jn(function(){return Dn(r,n,i)}),null},Vo=Wn(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var i=e[Qt],o=[n],a="";typeof e.className=="string"?a=Vn(t.registered,o,e.className):e.className!=null&&(a=e.className+" ");var s=Kt(o,void 0,D(qn));a+=t.key+"-"+s.name;var l={};for(var d in e)Jt.call(e,d)&&d!=="css"&&d!==Qt&&(l[d]=e[d]);return l.className=a,r&&(l.ref=r),q(G,null,q(Io,{cache:t,serialized:s,isStringTag:typeof i=="string"}),q(i,l))}),Do=Vo,Yn=function(t,r){var n=arguments;if(r==null||!Jt.call(r,"css"))return q.apply(void 0,n);var i=n.length,o=new Array(i);o[0]=Do,o[1]=Oo(t,r);for(var a=2;a<i;a++)o[a]=n[a];return q.apply(null,o)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Yn||(Yn={}));function Fo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Kt(t)}function ct(){var e=Fo.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Ho=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Uo=Mn(function(e){return Ho.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Bo=Uo,jo=function(t){return t!=="theme"},Xn=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Bo:jo},Kn=function(t,r,n){var i;if(r){var o=r.shouldForwardProp;i=t.__emotion_forwardProp&&o?function(a){return t.__emotion_forwardProp(a)&&o(a)}:o}return typeof i!="function"&&n&&(i=t.__emotion_forwardProp),i},Go=function(t){var r=t.cache,n=t.serialized,i=t.isStringTag;return Yt(r,n,i),jn(function(){return Dn(r,n,i)}),null},Wo=function e(t,r){var n=t.__emotion_real===t,i=n&&t.__emotion_base||t,o,a;r!==void 0&&(o=r.label,a=r.target);var s=Kn(t,r,n),l=s||Xn(i),d=!l("as");return function(){var f=arguments,c=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(o!==void 0&&c.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)c.push.apply(c,f);else{var m=f[0];c.push(m[0]);for(var p=f.length,_=1;_<p;_++)c.push(f[_],m[_])}var h=Wn(function(v,y,b){var k=d&&v.as||i,P="",g=[],w=v;if(v.theme==null){w={};for(var C in v)w[C]=v[C];w.theme=D(qn)}typeof v.className=="string"?P=Vn(y.registered,g,v.className):v.className!=null&&(P=v.className+" ");var E=Kt(c.concat(g),y.registered,w);P+=y.key+"-"+E.name,a!==void 0&&(P+=" "+a);var M=d&&s===void 0?Xn(k):l,O={};for(var B in v)d&&B==="as"||M(B)&&(O[B]=v[B]);return O.className=P,b&&(O.ref=b),q(G,null,q(Go,{cache:y,serialized:E,isStringTag:typeof k=="string"}),q(k,O))});return h.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=i,h.__emotion_styles=c,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(v,y){var b=e(v,$t({},r,y,{shouldForwardProp:Kn(h,y,!0)}));return b.apply(void 0,c)},h}},qo=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],x=Wo.bind(null);qo.forEach(function(e){x[e]=x(e)});const Yo=({hass:e,action:t,target:r,data:n})=>{const i=t.split(".")[0],o=t.split(".")[1],a={...n,...r};return e.callService(i,o,a)},Zt=async(e,t,r,n)=>{const i=t[r+"_action"];if(i.action==="perform-action")return Yo({hass:n,action:i.perform_action,target:i.target,data:i.data});const o=new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:{...t,entity_id:t==null?void 0:t.entity},action:r}});return e.dispatchEvent(o),Promise.resolve()},er=({icon:e,deviceClass:t})=>{if(e)return e;switch(t){case"speaker":return"mdi:speaker";case"receiver":return"mdi:audio-video";default:return"mdi:speaker"}},xe=(e,t,r)=>{const n=r?["state","attributes.volume_level","attributes.is_volume_muted","attributes.group_members"]:["state","attributes.media_duration","attributes.media_title","attributes.media_artist","attributes.media_album_name","attributes.icon","attributes.friendly_name","attributes.entity_picture","attributes.volume_level","attributes.is_volume_muted","attributes.shuffle","attributes.repeat","attributes.supported_features","attributes.group_members"],i=(a,s)=>s.split(".").reduce((d,f)=>d&&d[f]!==void 0?d[f]:void 0,a),o=(a,s)=>{if(a.length!==s.length)return!1;for(let l=0;l<a.length;l++)if(a[l]!==s[l])return!1;return!0};for(const a of n){const s=i(e,a),l=i(t,a);if(Array.isArray(s)&&Array.isArray(l)){if(!o(s,l))return!0}else if(s!==l)return!0}return!1};function W(){return document.querySelector("home-assistant").hass}const Xo=x.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  width: 100%;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%; /* Creates 1:1 aspect ratio */
  }
  ${e=>e.$size?typeof e.$size=="string"?`
      width: ${e.$size};
      height: ${e.$size};`:`
      width: ${e.$size}px;
      height: ${e.$size}px;`:""}
  --mmpc-art-border-radius: ${e=>e.$borderRadius}px;
`,Ko=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,Jo=x.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: var(--mmpc-art-border-radius, 4px);
`,Qo=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  --icon-primary-color: var(--card-background-color);
  background-color: var(--primary-text-color);
  opacity: 0.5;
  border-radius: var(--mmpc-art-border-radius, 4px);
  height: 100%;
  aspect-ratio: 1 / 1;
`,Jn=({size:e,borderRadius:t=4,iconSize:r,renderLongPressIndicator:n,...i})=>{const o=Q(),{media_title:a,media_artist:s,entity_picture:l,icon:d,device_class:f,source:c}=o.attributes,m=o.state;return u(Xo,{$size:e,$borderRadius:t,...i,children:[u(Ko,{children:l&&m!=="off"?u(Jo,{src:l,alt:a&&s?`${a} by ${s}`:`Source: ${c}`}):u(Qo,{children:u(fe,{icon:m==="off"?er({icon:d,deviceClass:f}):Zo({source:c}),size:r})})}),n&&n()]})},Zo=({source:e})=>{switch(e==null?void 0:e.toLowerCase()){case"spotify":return"mdi:spotify";case"airplay":return"mdi:airplay";case"bluetooth":return"mdi:bluetooth";case"net radio":return"mdi:radio";case"server":return"mdi:server";case"usb":return"mdi:usb";case"aux":return"mdi:audio-input-rca";case"hdmi":return"mdi:hdmi-port";case"tv":return"mdi:television";case"tuner":return"mdi:radio-tower";case"optical":return"mdi:audio-input-stereo-minijack";default:return"mdi:music"}},K=ye({rootElement:null,config:null}),Qn=({rootElement:e,config:t,children:r})=>{const n=H(()=>({rootElement:e,config:t}),[e,t]);return u(K.Provider,{value:n,children:r})},ea=ct`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ta=x.button`
  position: relative;
  background: none;
  border: none;
  display: flex;
  flex: 0;
  flex-direction: row;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  line-height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  color: var(--card-background-color);
  background-color: var(--primary-text-color);
  --icon-primary-color: var(--card-background-color);
  margin-right: 5px;
  align-items: center;
  gap: 4px;
  text-wrap: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  opacity: ${e=>e.$loading?.3:1};
  ha-icon {
    pointer-events: none;
    animation: ${ea} 1s linear infinite;
    ${e=>e.$loading?"":"animation: none;"}
  }
`,lt=({loading:e,icon:t,iconPosition:r="left",children:n,...i})=>{const o=()=>{if(e)return u(fe,{size:"x-small",icon:"mdi:loading"});if(t)return u(fe,{size:"x-small",icon:t})};return u(ta,{$loading:e,...i,children:[r==="left"&&o(),n,r==="right"&&o()]})},Zn=({rootElement:e,children:t})=>{const[r]=F(()=>zn({key:"mmpc",container:e,speedy:!1}));return u(No,{value:r,children:t})},ra=()=>[{name:"tap_action",label:"Tap Action",selector:{ui_action:{}}},{name:"hold_action",label:"Hold Action",selector:{ui_action:{}}},{name:"double_tap_action",label:"Double Tap Action",selector:{ui_action:{}}}],na=({hass:e,value:t,onChange:r,disabled:n=!1})=>{const i=de(null),o=H(()=>t?{...t}:{action:"none"},[t]),a=S(s=>{const d=s.detail.value;r(d)},[r]);return oe(()=>{const s=i.current;return s&&s.addEventListener("value-changed",a),()=>{s&&s.removeEventListener("value-changed",a)}},[i.current,a]),u("ha-form",{ref:i,hass:e,data:o,schema:ra(),computeLabel:s=>s.label||s.name,disabled:n})},Me=e=>{const{hass:t,value:r,onChange:n,label:i,domains:o,required:a=!1,disabled:s=!1,allowCustomEntity:l=!1}=e,d=de(null),f=S(c=>{const p=c.detail.value;n(p)},[n]);return oe(()=>{const c=d.current;return c&&c.addEventListener("value-changed",f),()=>{c&&c.removeEventListener("value-changed",f)}},[d.current,f]),u("ha-entity-picker",{ref:d,hass:t,value:r,label:i||"Entity",includeDomains:o,disabled:s,required:a,"allow-custom-entity":l})},ia=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ei=({hass:e,value:t,onChange:r,label:n,domains:i,disabled:o=!1,allowCustomEntity:a=!1})=>{const s=(t==null?void 0:t.filter(Boolean))||[],l=S((d,f)=>{const c=[...s];!d&&f<s.length?c.splice(f,1):f<s.length?c[f]=d||"":d&&c.push(d),r(c.filter(Boolean))},[s,r]);return u(ia,{className:"entities-picker",children:[n&&u("label",{children:n}),s.map((d,f)=>u(Me,{hass:e,value:d,onChange:c=>l(c,f),domains:i,disabled:o,required:!1,allowCustomEntity:a},`entity-${f}`)),u(Me,{hass:e,value:"",onChange:d=>l(d,s.length),domains:i,disabled:o,required:!1,allowCustomEntity:a},"entity-new")]})},ut=({hass:e,value:t={},onChange:r})=>u(na,{hass:e,value:t,onChange:r}),oa=({options:e,onSelected:t,selected:r})=>u("select",{value:r,onChange:n=>t(n.target.value),children:e.map(n=>u("option",{value:n.value,children:n.name},n.value))}),J=x.div`
  margin-bottom: 16px;
`,dt=x.label`
  display: block;
  margin-bottom: 16px;
  font-weight: 500;
`,ti=x.div`
  display: flex;
  flex-direction: column;
`,tr=x.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--primary-color, #03a9f4);
  color: white;
  font-weight: 500;

  &:hover {
    background-color: var(--primary-color-dark, #007ac1);
  }
  align-self: flex-start;
`,ri=x(tr)`
  background-color: var(--error-color, #ff5252);

  &:hover {
    background-color: var(--error-color-dark, #c50b0b);
  }
`,ft=x.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,rr=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,nr=x.label`
  margin-left: 8px;
  font-weight: normal;
`,ir=x.input`
  cursor: pointer;
`,pt=({hass:e,value:t,onChange:r,label:n,required:i=!1,disabled:o=!1,isIconInput:a=!1})=>{const s=S(l=>{r(l.detail.value)},[r]);return a?u("ha-icon-picker",{label:n||"Icon",hass:e,value:t,disabled:o,required:i,"onvalue-changed":s}):u("ha-textfield",{label:n||"Text",value:t,disabled:o,required:i,onchange:l=>r(l.target.value)})},aa=({children:e})=>{const[t,r]=F(!1);return oe(()=>{customElements.get("hui-glance-card").getConfigElement().then(()=>{r(!0)})},[]),t?e:null},ni=ye({hass:null}),sa=({hass:e,children:t})=>u(ni.Provider,{value:{hass:e},children:t}),je=()=>{const e=D(ni);if(!e)throw new Error("useHass must be used within a HassContextProvider");return e.hass},ca=x.div`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${e=>or(e.$size)}px;
  aspect-ratio: 1;

  > ha-icon {
    --mdc-icon-size: ${e=>or(e.$size)}px;
    width: ${e=>or(e.$size)}px;
    display: flex;
  }
`,fe=({icon:e,size:t="medium",className:r})=>u(ca,{$size:t,className:r,children:u("ha-icon",{icon:e})}),or=e=>{switch(e){case"xx-small":return 12;case"x-small":return 18;case"small":return 24;case"medium":return 32;case"large":return 48;case"x-large":return 80}},la=ct`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ua=x.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
  padding: ${e=>e.$size==="xx-small"?0:4}px;
  min-width: ${e=>ar(e.$size)}px;
  aspect-ratio: 1;
  color: ${e=>e.disabled?"var(--disabled-text-color, #999)":"var(--primary-text-color, #333)"};

  &:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  &:active {
    background-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  }
  > ha-icon {
    --mdc-icon-size: ${e=>ar(e.$size)}px;
    width: ${e=>ar(e.$size)}px;
    display: flex;
    pointer-events: none;
    animation: ${la} 1s linear infinite;
    ${e=>e.$loading?"":"animation: none;"};
  }
`,U=({icon:e,size:t="medium",disabled:r=!1,loading:n=!1,className:i,renderLongPressIndicator:o,...a})=>u(ua,{disabled:r,$disabled:r,$size:t,$loading:n,className:i,...a,children:[n?u("ha-icon",{icon:"mdi:loading"}):u("ha-icon",{icon:e}),o&&o()]}),ar=e=>{switch(e){case"xx-small":return 12;case"x-small":return 18;case"small":return 24;case"medium":return 32;case"large":return 48;case"x-large":return 80;case"xx-large":return 120}},da=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`,fa=x.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  height: 32px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  line-height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: var(--card-background-color);
  color: var(--primary-text-color);
  margin-bottom: 5px;
  margin-right: 5px;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  text-wrap: nowrap;
  cursor: pointer;
  opacity: ${e=>e.$loading?.5:e.$inactive?.8:1};
`,pa=()=>{const e=je(),{config:t}=D(K),[r,n]=F([]),i=H(()=>{const s=e.states[t.entity_id];return t.entities.filter(l=>l!==s.entity_id).map(l=>{const d=e.states[l];return{entity_id:d.entity_id,friendly_name:d.attributes.friendly_name,isGrouped:s.attributes.group_members.includes(d.entity_id),isGrouping:r.includes(d.entity_id)}}).sort((l,d)=>l.friendly_name<d.friendly_name?-1:l.friendly_name>d.friendly_name?1:0).sort((l,d)=>l.isGrouped&&!d.isGrouped?-1:!l.isGrouped&&d.isGrouped?1:0)},[e,t,r]),o=S(async s=>{if(!s.isGrouping){n([...r,s.entity_id]);try{await e.callService("media_player","turn_on",{entity_id:s.entity_id}),await e.callService("media_player","join",{entity_id:t.entity_id,group_members:[s.entity_id]})}catch(l){console.error(l)}n(r.filter(l=>l!==s.entity_id))}},[e,t]),a=S(async s=>{if(!s.isGrouping){n([...r,s.entity_id]);try{await e.callService("media_player","unjoin",{entity_id:s.entity_id}),await e.callService("media_player","turn_off",{entity_id:s.entity_id})}catch(l){console.error(l)}n(r.filter(l=>l!==s.entity_id))}},[e,t]);return u(G,{children:u(da,{className:"chips",children:i.map(s=>u(fa,{$inactive:!s.isGrouped,$loading:s.isGrouping,onClick:()=>{s.isGrouped?a(s):o(s)},children:[s.friendly_name,s.isGrouped&&u(fe,{size:"x-small",icon:"mdi:close"}),!s.isGrouped&&u(fe,{size:"x-small",icon:"mdi:plus"})]},s.entity_id))})})};function Ge({actionConfig:e,rootElement:t,overrideCallback:r}){const n=H(()=>({onTap:e!=null&&e.tap_action?()=>Zt(t,e,"tap",W()):void 0,onLongPress:e!=null&&e.hold_action?()=>Zt(t,e,"hold",W()):void 0,onDoubleTap:e!=null&&e.double_tap_action?()=>Zt(t,e,"double_tap",W()):void 0,...r??{}}),[e,r]),i=Va(n);return H(()=>i,[i])}class ha{constructor(t,r){this.pixels=t,this.opts=r;const{sigBits:n}=r,i=(P,g,w)=>(P<<2*n)+(g<<n)+w;this.getColorIndex=i;const o=8-n,a=1<<3*n,s=new Uint32Array(a);let l,d,f,c,m,p,_,h,v,y;l=f=m=0,d=c=p=Number.MAX_VALUE;const b=t.length/4;let k=0;for(;k<b;){const P=k*4;if(k++,_=t[P+0],h=t[P+1],v=t[P+2],y=t[P+3],y===0)continue;_=_>>o,h=h>>o,v=v>>o;const g=i(_,h,v);s[g]===void 0&&(s[g]=0),s[g]+=1,_>l&&(l=_),_<d&&(d=_),h>f&&(f=h),h<c&&(c=h),v>m&&(m=v),v<p&&(p=v)}this._colorCount=s.reduce((P,g)=>g>0?P+1:P,0),this.hist=s,this.rmax=l,this.rmin=d,this.gmax=f,this.gmin=c,this.bmax=m,this.bmin=p}get colorCount(){return this._colorCount}}class _a{scaleDown(t){const r=this.getWidth(),n=this.getHeight();let i=1;if(t.maxDimension>0){const o=Math.max(r,n);o>t.maxDimension&&(i=t.maxDimension/o)}else i=1/t.quality;i<1&&this.resize(r*i,n*i,i)}}function ma(e,t){var r;if(t.length>0){const n=e.data,i=n.length/4;let o,a,s,l,d;for(let f=0;f<i;f++){o=f*4,a=n[o+0],s=n[o+1],l=n[o+2],d=n[o+3];for(let c=0;c<t.length;c++)if(!((r=t[c])!=null&&r.call(t,a,s,l,d))){n[o+3]=0;break}}}return e}function ga(e){const t=new URL(e,location.href);return t.protocol===location.protocol&&t.host===location.host&&t.port===location.port}function va(e,t){const r=new URL(e),n=new URL(t);return r.protocol===n.protocol&&r.hostname===n.hostname&&r.port===n.port}class ya extends _a{_getCanvas(){if(!this._canvas)throw new Error("Canvas is not initialized");return this._canvas}_getContext(){if(!this._context)throw new Error("Context is not initialized");return this._context}_getWidth(){if(!this._width)throw new Error("Width is not initialized");return this._width}_getHeight(){if(!this._height)throw new Error("Height is not initialized");return this._height}_initCanvas(){const t=this.image;if(!t)throw new Error("Image is not initialized");const r=this._canvas=document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new ReferenceError("Failed to create canvas context");this._context=n,r.className="@vibrant/canvas",r.style.display="none",this._width=r.width=t.width,this._height=r.height=t.height,n.drawImage(t,0,0),document.body.appendChild(r)}load(t){let r,n;if(typeof t=="string")r=document.createElement("img"),n=t,!ga(n)&&!va(window.location.href,n)&&(r.crossOrigin="anonymous"),r.src=n;else if(t instanceof HTMLImageElement)r=t,n=t.src;else return Promise.reject(new Error("Cannot load buffer as an image in browser"));return this.image=r,new Promise((i,o)=>{const a=()=>{this._initCanvas(),i(this)};r.complete?a():(r.onload=a,r.onerror=s=>o(new Error(`Fail to load image: ${n}`)))})}clear(){this._getContext().clearRect(0,0,this._getWidth(),this._getHeight())}update(t){this._getContext().putImageData(t,0,0)}getWidth(){return this._getWidth()}getHeight(){return this._getHeight()}resize(t,r,n){if(!this.image)throw new Error("Image is not initialized");this._width=this._getCanvas().width=t,this._height=this._getCanvas().height=r,this._getContext().scale(n,n),this._getContext().drawImage(this.image,0,0)}getPixelCount(){return this._getWidth()*this._getHeight()}getImageData(){return this._getContext().getImageData(0,0,this._getWidth(),this._getHeight())}remove(){this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}function We(e,...t){return t.forEach(r=>{if(r){for(const n in r)if(r.hasOwnProperty(n)){const i=r[n];Array.isArray(i)?e[n]=i.slice(0):typeof i=="object"?(e[n]||(e[n]={}),We(e[n],i)):e[n]=i}}}),e}function ba(e,t){const{colorCount:r,quantizer:n,generators:i,filters:o}=e,a={colorCount:r},s=typeof n=="string"?{name:n,options:{}}:n;return s.options=We({},a,s.options),We({},{quantizer:s,generators:i,filters:o},t)}class xa{constructor(t,r={}){this._src=t,this._opts=We({},_e.DefaultOpts,r)}maxColorCount(t){return this._opts.colorCount=t,this}maxDimension(t){return this._opts.maxDimension=t,this}addFilter(t){return this._opts.filters?this._opts.filters.push(t):this._opts.filters=[t],this}removeFilter(t){if(this._opts.filters){const r=this._opts.filters.indexOf(t);r>0&&this._opts.filters.splice(r)}return this}clearFilters(){return this._opts.filters=[],this}quality(t){return this._opts.quality=t,this}useImageClass(t){return this._opts.ImageClass=t,this}useGenerator(t,r){return this._opts.generators||(this._opts.generators=[]),this._opts.generators.push(r?{name:t,options:r}:t),this}useQuantizer(t,r){return this._opts.quantizer=r?{name:t,options:r}:t,this}build(){return new _e(this._src,this._opts)}getPalette(){return this.build().getPalette()}}class sr{constructor(t){this.pipeline=t,this._map={}}names(){return Object.keys(this._map)}has(t){return!!this._map[t]}get(t){return this._map[t]}register(t,r){return this._map[t]=r,this.pipeline}}class wa{constructor(){this.filter=new sr(this),this.quantizer=new sr(this),this.generator=new sr(this)}_buildProcessTasks({filters:t,quantizer:r,generators:n}){return n.length===1&&n[0]==="*"&&(n=this.generator.names()),{filters:t.map(o=>i(this.filter,o)),quantizer:i(this.quantizer,r),generators:n.map(o=>i(this.generator,o))};function i(o,a){let s,l;return typeof a=="string"?s=a:(s=a.name,l=a.options),{name:s,fn:o.get(s),options:l}}}async process(t,r){const{filters:n,quantizer:i,generators:o}=this._buildProcessTasks(r),a=await this._filterColors(n,t),s=await this._generateColors(i,a),l=await this._generatePalettes(o,s);return{colors:s,palettes:l}}_filterColors(t,r){return Promise.resolve(ma(r,t.map(({fn:n})=>n)))}_generateColors(t,r){return Promise.resolve(t.fn(r.data,t.options))}async _generatePalettes(t,r){const n=await Promise.all(t.map(({fn:i,options:o})=>Promise.resolve(i(r,o))));return Promise.resolve(n.reduce((i,o,a)=>(i[t[a].name]=o,i),{}))}}function Ca(e,t,r){return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1,7)}function Sa(e,t,r){e/=255,t/=255,r/=255;const n=Math.max(e,t,r),i=Math.min(e,t,r);let o=0,a=0;const s=(n+i)/2;if(n!==i){const l=n-i;switch(a=s>.5?l/(2-n-i):l/(n+i),n){case e:o=(t-r)/l+(t<r?6:0);break;case t:o=(r-e)/l+2;break;case r:o=(e-t)/l+4;break}o/=6}return[o,a,s]}function pe(e,t,r){let n,i,o;function a(s,l,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?s+(l-s)*6*d:d<1/2?l:d<2/3?s+(l-s)*(2/3-d)*6:s}if(t===0)n=i=o=r;else{const s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=a(l,s,e+1/3),i=a(l,s,e),o=a(l,s,e-1/3)}return[n*255,i*255,o*255]}class te{static applyFilters(t,r){return r.length>0?t.filter(({r:n,g:i,b:o})=>{var a;for(let s=0;s<r.length;s++)if(!((a=r[s])!=null&&a.call(r,n,i,o,255)))return!1;return!0}):t}static clone(t){return new te(t._rgb,t._population)}get r(){return this._rgb[0]}get g(){return this._rgb[1]}get b(){return this._rgb[2]}get rgb(){return this._rgb}get hsl(){if(!this._hsl){const[t,r,n]=this._rgb;this._hsl=Sa(t,r,n)}return this._hsl}get hex(){if(!this._hex){const[t,r,n]=this._rgb;this._hex=Ca(t,r,n)}return this._hex}get population(){return this._population}toJSON(){return{rgb:this.rgb,population:this.population}}getYiq(){if(!this._yiq){const t=this._rgb;this._yiq=(t[0]*299+t[1]*587+t[2]*114)/1e3}return this._yiq}get titleTextColor(){return this._titleTextColor||(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor}get bodyTextColor(){return this._bodyTextColor||(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor}constructor(t,r){this._rgb=t,this._population=r}}const ii=class mr{constructor(t,r){this._src=t,this.opts=We({},mr.DefaultOpts,r)}static use(t){this._pipeline=t}static from(t){return new xa(t)}get result(){return this._result}_process(t,r){t.scaleDown(this.opts);const n=ba(this.opts,r);return mr._pipeline.process(t.getImageData(),n)}async getPalette(){const t=new this.opts.ImageClass;try{const r=await t.load(this._src),n=await this._process(r,{generators:["default"]});this._result=n;const i=n.palettes.default;if(!i)throw new Error("Something went wrong and a palette was not found, please file a bug against our GitHub repo: https://github.com/vibrant-Colors/node-vibrant/");return t.remove(),i}catch(r){return t.remove(),Promise.reject(r)}}async getPalettes(){const t=new this.opts.ImageClass;try{const r=await t.load(this._src),n=await this._process(r,{generators:["*"]});this._result=n;const i=n.palettes;return t.remove(),i}catch(r){return t.remove(),Promise.reject(r)}}};ii.DefaultOpts={colorCount:64,quality:5,filters:[]};let _e=ii;_e.DefaultOpts.quantizer="mmcq",_e.DefaultOpts.generators=["default"],_e.DefaultOpts.filters=["default"],_e.DefaultOpts.ImageClass=ya;const cr=5,lr=8-cr;class ht{constructor(t,r,n,i,o,a,s){this.histogram=s,this._volume=-1,this._avg=null,this._count=-1,this.dimension={r1:t,r2:r,g1:n,g2:i,b1:o,b2:a}}static build(t){const r=new ha(t,{sigBits:cr}),{rmin:n,rmax:i,gmin:o,gmax:a,bmin:s,bmax:l}=r;return new ht(n,i,o,a,s,l,r)}invalidate(){this._volume=this._count=-1,this._avg=null}volume(){if(this._volume<0){const{r1:t,r2:r,g1:n,g2:i,b1:o,b2:a}=this.dimension;this._volume=(r-t+1)*(i-n+1)*(a-o+1)}return this._volume}count(){if(this._count<0){const{hist:t,getColorIndex:r}=this.histogram,{r1:n,r2:i,g1:o,g2:a,b1:s,b2:l}=this.dimension;let d=0;for(let f=n;f<=i;f++)for(let c=o;c<=a;c++)for(let m=s;m<=l;m++){const p=r(f,c,m);t[p]&&(d+=t[p])}this._count=d}return this._count}clone(){const{histogram:t}=this,{r1:r,r2:n,g1:i,g2:o,b1:a,b2:s}=this.dimension;return new ht(r,n,i,o,a,s,t)}avg(){if(!this._avg){const{hist:t,getColorIndex:r}=this.histogram,{r1:n,r2:i,g1:o,g2:a,b1:s,b2:l}=this.dimension;let d=0;const f=1<<8-cr;let c,m,p;c=m=p=0;for(let _=n;_<=i;_++)for(let h=o;h<=a;h++)for(let v=s;v<=l;v++){const y=r(_,h,v),b=t[y];b&&(d+=b,c+=b*(_+.5)*f,m+=b*(h+.5)*f,p+=b*(v+.5)*f)}d?this._avg=[~~(c/d),~~(m/d),~~(p/d)]:this._avg=[~~(f*(n+i+1)/2),~~(f*(o+a+1)/2),~~(f*(s+l+1)/2)]}return this._avg}contains(t){let[r,n,i]=t;const{r1:o,r2:a,g1:s,g2:l,b1:d,b2:f}=this.dimension;return r>>=lr,n>>=lr,i>>=lr,r>=o&&r<=a&&n>=s&&n<=l&&i>=d&&i<=f}split(){const{hist:t,getColorIndex:r}=this.histogram,{r1:n,r2:i,g1:o,g2:a,b1:s,b2:l}=this.dimension,d=this.count();if(!d)return[];if(d===1)return[this.clone()];const f=i-n+1,c=a-o+1,m=l-s+1,p=Math.max(f,c,m);let _=null,h,v;h=v=0;let y=null;if(p===f){y="r",_=new Uint32Array(i+1);for(let w=n;w<=i;w++){h=0;for(let C=o;C<=a;C++)for(let E=s;E<=l;E++){const M=r(w,C,E);t[M]&&(h+=t[M])}v+=h,_[w]=v}}else if(p===c){y="g",_=new Uint32Array(a+1);for(let w=o;w<=a;w++){h=0;for(let C=n;C<=i;C++)for(let E=s;E<=l;E++){const M=r(C,w,E);t[M]&&(h+=t[M])}v+=h,_[w]=v}}else{y="b",_=new Uint32Array(l+1);for(let w=s;w<=l;w++){h=0;for(let C=n;C<=i;C++)for(let E=o;E<=a;E++){const M=r(C,E,w);t[M]&&(h+=t[M])}v+=h,_[w]=v}}let b=-1;const k=new Uint32Array(_.length);for(let w=0;w<_.length;w++){const C=_[w];C&&(b<0&&C>v/2&&(b=w),k[w]=v-C)}const P=this;function g(w){const C=w+"1",E=w+"2",M=P.dimension[C];let O=P.dimension[E];const B=P.clone(),ne=P.clone(),Re=b-M,ze=O-b;for(Re<=ze?(O=Math.min(O-1,~~(b+ze/2)),O=Math.max(0,O)):(O=Math.max(M,~~(b-1-Re/2)),O=Math.min(P.dimension[E],O));!_[O];)O++;let gt=k[O];for(;!gt&&_[O-1];)gt=k[--O];return B.dimension[E]=O,ne.dimension[C]=O+1,[B,ne]}return g(y)}}class oi{_sort(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)}constructor(t){this._comparator=t,this.contents=[],this._sorted=!1}push(t){this.contents.push(t),this._sorted=!1}peek(t){return this._sort(),t=typeof t=="number"?t:this.contents.length-1,this.contents[t]}pop(){return this._sort(),this.contents.pop()}size(){return this.contents.length}map(t){return this._sort(),this.contents.map(t)}}const ka=.75;function ai(e,t){let r=e.size();for(;e.size()<t;){const n=e.pop();if(n&&n.count()>0){const[i,o]=n.split();if(!i||(e.push(i),o&&o.count()>0&&e.push(o),e.size()===r))break;r=e.size()}else break}}const $a=(e,t)=>{if(e.length===0||t.colorCount<2||t.colorCount>256)throw new Error("Wrong MMCQ parameters");const r=ht.build(e);r.histogram.colorCount;const n=new oi((o,a)=>o.count()-a.count());n.push(r),ai(n,ka*t.colorCount);const i=new oi((o,a)=>o.count()*o.volume()-a.count()*a.volume());return i.contents=n.contents,ai(i,t.colorCount-i.size()),Pa(i)};function Pa(e){const t=[];for(;e.size();){const r=e.pop(),n=r.avg();t.push(new te(n,r.count()))}return t}const Ea={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function Ta(e){let t=0;return e.forEach(r=>{t=Math.max(t,r.population)}),t}function Ma(e,t){return e.Vibrant===t||e.DarkVibrant===t||e.LightVibrant===t||e.Muted===t||e.DarkMuted===t||e.LightMuted===t}function Aa(e,t,r,n,i,o,a){function s(...d){let f=0,c=0;for(let m=0;m<d.length;m+=2){const p=d[m],_=d[m+1];!p||!_||(f+=p*_,c+=_)}return f/c}function l(d,f){return 1-Math.abs(d-f)}return s(l(e,t),a.weightSaturation,l(r,n),a.weightLuma,i/o,a.weightPopulation)}function Ae(e,t,r,n,i,o,a,s,l,d){let f=null,c=0;return t.forEach(m=>{const[,p,_]=m.hsl;if(p>=s&&p<=l&&_>=i&&_<=o&&!Ma(e,m)){const h=Aa(p,a,_,n,m.population,r,d);(f===null||h>c)&&(f=m,c=h)}}),f}function Ra(e,t,r){const n={Vibrant:null,DarkVibrant:null,LightVibrant:null,Muted:null,DarkMuted:null,LightMuted:null};return n.Vibrant=Ae(n,e,t,r.targetNormalLuma,r.minNormalLuma,r.maxNormalLuma,r.targetVibrantSaturation,r.minVibrantSaturation,1,r),n.LightVibrant=Ae(n,e,t,r.targetLightLuma,r.minLightLuma,1,r.targetVibrantSaturation,r.minVibrantSaturation,1,r),n.DarkVibrant=Ae(n,e,t,r.targetDarkLuma,0,r.maxDarkLuma,r.targetVibrantSaturation,r.minVibrantSaturation,1,r),n.Muted=Ae(n,e,t,r.targetNormalLuma,r.minNormalLuma,r.maxNormalLuma,r.targetMutesSaturation,0,r.maxMutesSaturation,r),n.LightMuted=Ae(n,e,t,r.targetLightLuma,r.minLightLuma,1,r.targetMutesSaturation,0,r.maxMutesSaturation,r),n.DarkMuted=Ae(n,e,t,r.targetDarkLuma,0,r.maxDarkLuma,r.targetMutesSaturation,0,r.maxMutesSaturation,r),n}function za(e,t,r){if(!e.Vibrant&&!e.DarkVibrant&&!e.LightVibrant){if(!e.DarkVibrant&&e.DarkMuted){let[n,i,o]=e.DarkMuted.hsl;o=r.targetDarkLuma,e.DarkVibrant=new te(pe(n,i,o),0)}if(!e.LightVibrant&&e.LightMuted){let[n,i,o]=e.LightMuted.hsl;o=r.targetDarkLuma,e.DarkVibrant=new te(pe(n,i,o),0)}}if(!e.Vibrant&&e.DarkVibrant){let[n,i,o]=e.DarkVibrant.hsl;o=r.targetNormalLuma,e.Vibrant=new te(pe(n,i,o),0)}else if(!e.Vibrant&&e.LightVibrant){let[n,i,o]=e.LightVibrant.hsl;o=r.targetNormalLuma,e.Vibrant=new te(pe(n,i,o),0)}if(!e.DarkVibrant&&e.Vibrant){let[n,i,o]=e.Vibrant.hsl;o=r.targetDarkLuma,e.DarkVibrant=new te(pe(n,i,o),0)}if(!e.LightVibrant&&e.Vibrant){let[n,i,o]=e.Vibrant.hsl;o=r.targetLightLuma,e.LightVibrant=new te(pe(n,i,o),0)}if(!e.Muted&&e.Vibrant){let[n,i,o]=e.Vibrant.hsl;o=r.targetMutesSaturation,e.Muted=new te(pe(n,i,o),0)}if(!e.DarkMuted&&e.DarkVibrant){let[n,i,o]=e.DarkVibrant.hsl;o=r.targetMutesSaturation,e.DarkMuted=new te(pe(n,i,o),0)}if(!e.LightMuted&&e.LightVibrant){let[n,i,o]=e.LightVibrant.hsl;o=r.targetMutesSaturation,e.LightMuted=new te(pe(n,i,o),0)}}const La=(e,t)=>{t=Object.assign({},Ea,t);const r=Ta(e),n=Ra(e,r,t);return za(n,r,t),n},Na=new wa().filter.register("default",(e,t,r,n)=>n>=125&&!(e>250&&t>250&&r>250)).quantizer.register("mmcq",$a).generator.register("default",La);_e.use(Na);const ur=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;function si(){const{attributes:{entity_picture:e}}=Q(),[t,r]=F(null),[n,i]=F(ur()),o=S(()=>{e&&_e.from(e).getPalette().then(r).catch(l=>{console.error("Error getting color with Vibrant:",l)})},[e]);oe(()=>{r(null),e&&o()},[e]),oe(()=>{const l=window.matchMedia("(prefers-color-scheme: dark)"),d=()=>i(ur());if(i(ur()),l.addEventListener)return l.addEventListener("change",d),()=>l.removeEventListener("change",d)},[]);const a=H(()=>{if(n||!t)return null;const l=t.Vibrant??t.Muted;if(!l)return null;const d={..._t(l.hsl),l:50},f=me(d),c={...d,s:4.35,l:95.49},m={...me(c),l:15.29},p={...c,l:c.l*.98},_=me(p),h={...c,l:c.l*1.1},v=me(h);return{artVars:`
        --art-color: ${A(_t(l.hsl))};
        --art-on-art-color: ${l.titleTextColor};
        --art-primary-color: ${A(d)};
        --art-on-primary-color: ${A(f)};
        --art-surface-color: ${A(c)};
        --art-on-surface-color: ${A(m)};
        --art-surface-higher-color: ${A(p)};
        --art-on-surface-higher-color: ${A(_)};
        --art-surface-lower-color: ${A(h)};
        --art-on-surface-lower-color: ${A(v)};
      `,haVars:`
        --primary-color: ${A(d)};
        --ha-card-background: ${A(c)};
        --card-background-color: ${A(p)};
        --primary-text-color: ${A(m)};
        --secondary-text-color: ${A({...m,l:m.l*1.1})};
        --icon-primary-color: ${A(m)};
        --divider-color: ${A({...c,l:88})};
        --clear-background-color: ${A({...c,l:100})};
        --secondary-background-color: ${A({...m,l:95})};
      `}},[t,n]),s=H(()=>{if(!n||!t)return null;const l=t.Vibrant??t.Muted;if(!l)return null;const d={..._t(l.hsl),l:50},f=me(d),c={...d,s:2.91,l:20.2},m={...me(c),l:86.47},p={...c,l:c.l*1.02},_=me(p),h={...c,l:c.l*.98},v=me(h);return{artVars:`
        --art-color: ${A(_t(l.hsl))};
        --art-on-art-color: ${l.titleTextColor};
        --art-primary-color: ${A(d)};
        --art-on-primary-color: ${A(f)};
        --art-surface-color: ${A(c)};
        --art-on-surface-color: ${A(m)};
        --art-surface-higher-color: ${A(p)};
        --art-on-surface-higher-color: ${A(_)};
        --art-surface-lower-color: ${A(h)};
        --art-on-surface-lower-color: ${A(v)};
      `,haVars:`
        --primary-color: ${A(d)};
        --ha-card-background: ${A(c)};
        --card-background-color: ${A(p)};
        --primary-text-color: ${A(m)};
        --secondary-text-color: ${A({...m,l:m.l*.9})};
        --icon-primary-color: ${A(m)};
        --divider-color: ${A({...c,l:25})};
        --clear-background-color: ${A({...c,l:0})};
        --secondary-background-color: ${A({...m,l:19})};
      `}},[t,n]);return H(()=>({artVars:n?s==null?void 0:s.artVars:a==null?void 0:a.artVars,haVars:n?s==null?void 0:s.haVars:a==null?void 0:a.haVars}),[s,a])}const _t=e=>{const t=Math.round(e[0]*360),r=Math.round(e[1]*100),n=Math.round(e[2]*100);return{h:t,s:r,l:n}},me=({h:e,s:t,l:r})=>({h:(e+180)%360,s:t,l:r}),A=({h:e,s:t,l:r})=>`hsl(${e}deg ${t}% ${r}%)`,Oa="ontouchstart"in window,Ia=x.div`
  position: fixed;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--primary-color, rgba(7, 114, 244));
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 9;
  animation: pulse 1s infinite;
  transform: translate(-50%, -50%);

  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0.6;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0.6;
    }
  }
`;function Va({onTap:e,onLongPress:t,onDoubleTap:r}){const n=de(null),i=de(0),o=de(null),a=de(null),[s,l]=F(!1),[d,f]=F(!1),[c,m]=F({x:0,y:0}),p=S(()=>{o.current&&clearTimeout(o.current),a.current&&clearTimeout(a.current),f(!1),n.current=null,i.current=0},[]),_=()=>d?u(Ia,{style:{left:`${c.x}px`,top:`${c.y}px`}}):null,h=S(()=>{const E=Date.now();return!!(n.current&&E-n.current>=500)},[]),v=S((E,M)=>{m({x:E,y:M})},[]),y=S((E,M)=>{n.current=Date.now(),v(E,M),a.current=setTimeout(()=>{f(!0)},500)},[v]),b=S((E,M)=>{d&&v(E,M)},[d,v]),k=S(()=>{o.current&&clearTimeout(o.current),a.current&&(clearTimeout(a.current),f(!1)),i.current+=1,o.current=setTimeout(async()=>{l(!0);try{i.current>1?await(r==null?void 0:r()):h()?await(t==null?void 0:t()):await(e==null?void 0:e())}catch(E){console.error("Error in button callback:",E)}l(!1),n.current=null,i.current=0},250)},[h,r,t,e]),P=S(E=>{y(E.clientX,E.clientY)},[y]),g=S(E=>{b(E.clientX,E.clientY)},[b]),w=S(E=>{if(E.touches.length>0){const M=E.touches[0];y(M.clientX,M.clientY)}},[y]),C=S(E=>{if(E.touches.length>0){const M=E.touches[0];b(M.clientX,M.clientY)}},[b]);return H(()=>({...Oa?{onTouchStart:w,onTouchMove:C,onTouchEnd:k,onTouchCancel:p,loading:s}:{onMouseDown:P,onMouseMove:g,onMouseUp:k,onMouseOut:p,loading:s},renderLongPressIndicator:_}),[P,g,k,p,w,C,_])}function dr(){const{attributes:{shuffle:e,repeat:t,source:r,supported_features:n}}=Q(),i=(n|16)===n,o=(n|32)===n,a=e!==void 0&&!["optical","aux"].includes(r==null?void 0:r.toLowerCase()),s=t!==void 0&&!["optical","aux"].includes(r==null?void 0:r.toLowerCase()),l=(n&4096)===4096||(n&16384)===16384;return H(()=>({supportPreviousTrack:i,supportNextTrack:o,supportsShuffle:a,supportsRepeat:s,supportsTogglePlayPause:l}),[i,o,a,s,l])}const Da=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2px;
  overflow-x: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`,Fa=x(lt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,Ha=()=>{const{config:e}=D(K),{custom_buttons:t}=e;return u(Da,{children:t.map((r,n)=>u(Ua,{button:r},n))})},Ua=({button:e})=>{const{rootElement:t,config:r}=D(K),{icon:n,name:i,...o}=e,a=Ge({rootElement:t,actionConfig:{...o,entity:r.entity_id}});return u(Fa,{icon:n,...a,children:[!!i&&u("span",{children:i}),a.renderLongPressIndicator()]})},Ba=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-left: var(--mmpc-extra-horizontal-padding, 0px);
  padding-right: var(--mmpc-extra-horizontal-padding, 0px);
`,ja=()=>{const{config:e}=D(K),{attributes:{shuffle:t,repeat:r},state:n}=Q(),i=n==="playing",{supportPreviousTrack:o,supportNextTrack:a,supportsShuffle:s,supportsRepeat:l,supportsTogglePlayPause:d}=dr(),f=S(()=>{W().callService("media_player","media_play_pause",{entity_id:e.entity_id})},[]),c=S(()=>{W().callService("media_player","media_next_track",{entity_id:e.entity_id})},[]),m=S(()=>{W().callService("media_player","media_previous_track",{entity_id:e.entity_id})},[]),p=S(()=>{W().callService("media_player","shuffle_set",{entity_id:e.entity_id,shuffle:!t})},[t]),_=S(()=>{const h=r==="off"?"one":r==="one"?"all":"off";W().callService("media_player","repeat_set",{entity_id:e.entity_id,repeat:h})},[r]);return u(Ba,{children:[s&&u(U,{size:"small",onClick:p,icon:t?"mdi:shuffle-variant":"mdi:shuffle-disabled"}),o&&u(U,{size:"large",onClick:m,icon:"mdi:skip-previous"}),d&&u(U,{size:"x-large",onClick:f,icon:i?"mdi:pause-circle":"mdi:play-circle"}),a&&u(U,{size:"large",onClick:c,icon:"mdi:skip-next"}),l&&u(U,{size:"small",onClick:_,icon:r==="one"?"mdi:repeat-once":r==="all"?"mdi:repeat":"mdi:repeat-off"})]})},Ga=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-height: 36px;
  margin-top: auto;
  gap: 8px;
`,ci=x(U)`
  opacity: ${e=>e.muted?.8:1}; // reduce opacity if muted
`,Wa=()=>{var s,l;const e=Q(),t=e.entity_id,r=((s=e.attributes)==null?void 0:s.volume_level)??0,n=((l=e.attributes)==null?void 0:l.is_volume_muted)??!1,i=S(d=>{W().callService("media_player","volume_set",{entity_id:t,volume_level:d})},[]),o=S(()=>{W().callService("media_player","volume_mute",{entity_id:t,is_volume_muted:!n})},[n]),a=H(()=>li(r,n),[r,n]);return u(Ga,{children:[u(ci,{size:"small",onClick:o,icon:a}),u(mt,{min:0,max:1,step:.01,value:r,thumbSize:"large",onChange:i})]})},li=(e,t)=>e===0||t?"mdi:volume-off":e<.5?"mdi:volume-medium":"mdi:volume-high",qa=({onClick:e})=>{var o,a;const t=Q(),r=((o=t.attributes)==null?void 0:o.volume_level)??0,n=((a=t.attributes)==null?void 0:a.is_volume_muted)??!1,i=li(r,n);return u(ci,{size:"small",onClick:e,icon:i})},Ya=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Xa=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
  margin-right: 16px;
`,Ka=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ja=x.div`
  font-size: 13px;
  flex: 1;
  ${e=>e.isMaster?"font-weight: 500;":""}
  color: var(--primary-text-color);
`,Qa=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`,Za=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2px;
  overflow-x: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`,es=x(lt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,ts=()=>{var c,m;const e=je(),{config:t}=D(K),{entity_id:r,speaker_group:n}=t,[i,o]=F([]),a=(n==null?void 0:n.entity_id)||r,s=e.states[a],l=H(()=>{var p;return(p=n==null?void 0:n.entities)!=null&&p.length?n.entities.filter(_=>e.states[_]).map(_=>{var h,v,y,b;return{entity_id:_,name:e.states[_].attributes.friendly_name,volume:e.states[_].attributes.volume_level||0,muted:e.states[_].attributes.is_volume_muted||!1,isGrouped:((v=(h=s==null?void 0:s.attributes)==null?void 0:h.group_members)==null?void 0:v.includes(_))||!1,isMainSpeaker:((b=(y=s==null?void 0:s.attributes)==null?void 0:y.group_members)==null?void 0:b[0])===_||!1}}).sort((_,h)=>_.entity_id===a?-1:h.entity_id===a?1:_.name.localeCompare(h.name)):[]},[e.states,n]),d=S(async(p,_)=>{if(!i.includes(p)){o(h=>[...h,p]);try{const h=e.states[p];_?await e.callService("media_player","unjoin",{entity_id:p}):(h.state==="off"&&await e.callService("media_player","turn_on",{entity_id:p}),await e.callService("media_player","join",{entity_id:a,group_members:[p]}))}catch(h){console.error(h)}o(h=>h.filter(v=>v!==p))}},[a,i]),f=S((p,_)=>{e.callService("media_player","volume_set",{entity_id:p,volume_level:_})},[]);return u(Ya,{children:[((m=(c=s==null?void 0:s.attributes)==null?void 0:c.group_members)==null?void 0:m.length)>1&&u(G,{children:u(Xa,{children:l.filter(p=>p.isGrouped).map(p=>u(Ka,{children:[u(U,{size:"x-small",onClick:()=>d(p.entity_id,p.isGrouped),icon:"mdi:link-variant-off"}),u(Ja,{isMaster:p.isMainSpeaker,children:[p.name," ",p.isMainSpeaker&&"(Master)"]}),p.isGrouped&&u(Qa,{children:[u(fe,{size:"x-small",icon:"mdi:volume-high"}),u(mt,{min:0,max:1,step:.01,value:p.volume,thumbSize:"small",onChange:_=>f(p.entity_id,_)})]})]},p.entity_id))})}),u(Za,{children:l.filter(p=>!p.isGrouped).map(p=>u(es,{loading:i.includes(p.entity_id),onClick:()=>d(p.entity_id,p.isGrouped),icon:p.isGrouped?"mdi:close":"mdi:plus",iconPosition:"right",children:p.name},p.entity_id))})]})},rs=x.div`
  background-color: var(--mmpc-surface-higher);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 15px 100px var(--clear-background-color);
`,ns=ct`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,is=x.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  width: 100%;
  background-color: var(--mmpc-surface-higher);
  border-radius: 12px;
  box-sizing: border-box;
  animation: ${ns} 0.3s ease forwards;
  box-shadow: 0 0px 80px var(--clear-background-color);
`,os=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > h4 {
    margin: 0;
  }
  padding: 8px 16px;
  color: var(--primary-text-color, #fff);
  border-bottom: 0.5px solid var(--divider-color, rgba(0, 0, 0, 0.12));
`,as=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${e=>e.padding??"16px"};
`,ss=()=>{const{config:e}=D(K),{entity_id:t,custom_buttons:r,speaker_group:n}=e,[i,o]=F(),a=S(l=>{o(i===l?void 0:l)},[i]),s=S(()=>{W().callService("media_player","toggle",{entity_id:t})},[t]);return u(rs,{children:[u(fr,{title:"Volume",isOpen:i==="volume",onClose:()=>o(void 0),children:u(Wa,{})}),u(fr,{title:"Speaker Grouping",isOpen:i==="speaker-grouping",onClose:()=>o(void 0),padding:"16px 0px 16px 0px",children:u(ts,{})}),!!n&&u(U,{size:"small",icon:"mdi:speaker-multiple",onClick:()=>a("speaker-grouping")}),r==null?void 0:r.slice(0,2).map((l,d)=>u(cs,{button:l},d)),(r==null?void 0:r.length)>3&&u(G,{children:[u(U,{size:"small",icon:"mdi:dots-horizontal",onClick:()=>a("custom-buttons")}),u(fr,{title:"Shortcuts",isOpen:i==="custom-buttons",onClose:()=>o(void 0),padding:"16px 0px 16px 0px",children:u(Ha,{})})]}),u(U,{size:"small",icon:"mdi:power",onClick:s}),u(qa,{onClick:()=>a("volume")})]})},fr=({children:e,title:t,isOpen:r,padding:n,onClose:i})=>r?u(is,{children:[u(os,{children:[u("h4",{children:t}),u(U,{type:"button",size:"small",icon:"mdi:close",onClick:i})]}),u(as,{padding:n,children:e})]}):null,cs=({button:e})=>{const{rootElement:t,config:r}=D(K),{icon:n,name:i,...o}=e,a=Ge({rootElement:t,actionConfig:{...o,entity:r.entity_id}});return u(U,{icon:e.icon??"mdi:dots-vertical",size:"small",...a})},ls=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  color: var(--primary-text-color, #fff);
  padding-left: var(--mmpc-extra-horizontal-padding, 0px);
  padding-right: var(--mmpc-extra-horizontal-padding, 0px);
  > h2,
  > h3 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
`,us=x.h2`
  margin: 0px;
`,ds=x.h3`
  margin: 0px;
  font-weight: normal;
  color: var(--secondary-text-color, #fff);
`,fs=()=>{const{attributes:{media_title:e,media_artist:t,media_album_name:r,source:n},state:i}=Q(),o=e||n;return i==="off"?null:u(ls,{children:[!!o&&u(us,{children:o}),(!!r||!!t)&&u(ds,{children:`${r!==e?`${r} - `:""}${t}`})]})},ps=x.div`
  padding-left: var(--mmpc-extra-horizontal-padding, 0px);
  padding-right: var(--mmpc-extra-horizontal-padding, 0px);
`,hs=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
  color: var(--secondary-text-color, #888);
  height: 20px;
  margin-bottom: -20px;
`,_s=()=>{const e=Q(),[t,r]=F(0),n=e.state==="playing";oe(()=>{if(!n)return;const o=setInterval(()=>{r(a=>a+1)},1e3);return()=>clearInterval(o)},[n]);const i=H(()=>{var p,_,h;const o=((p=e.attributes)==null?void 0:p.media_position)??null,a=((_=e.attributes)==null?void 0:_.media_position_updated_at)??null,s=((h=e.attributes)==null?void 0:h.media_duration)??null;if(o===null||o<0||s===null||a===null)return null;const l=new Date,d=new Date(a),c=(l.getTime()-d.getTime())/1e3+o,m=v=>{const y=Math.floor(v/60).toString().padStart(2,"0"),b=Math.round(v-Number(y)*60).toString().padStart(2,"0");return`${y}:${b}`};return{currentPosition:c,mediaDuration:s,prettyNow:m(c),prettyEnd:m(s)}},[e,t]);return i?u(ps,{children:[u(ac,{value:i.currentPosition,min:0,max:i.mediaDuration}),u(hs,{children:[u("span",{children:i.prettyNow}),u("span",{children:i.prettyEnd})]})]}):null},ms=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  --mmpc-extra-horizontal-padding: 0px;

  ${e=>e.$artColorVars??""}
  ${e=>e.$useArtColors&&e.$haColorVars?e.$haColorVars:""}

  ${e=>{switch(e==null?void 0:e.mode){case"panel":return`
          width: 100%;
          height: 100%;
          // Below gradient transitions from panel header color to transparent
          background: linear-gradient(
            var(--app-header-background-color),
            rgba(255, 255, 255, 0)
          );
          max-height: calc(100vh - var(--header-height, 16px));
        `;case"popup":return`
          --mmpc-extra-horizontal-padding: 12px;`;default:return""}}}

  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  --mmpc-surface-higher: var(--card-background-color);
`,gs=x.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  justify-content: space-around;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  ${e=>{switch(e==null?void 0:e.mode){case"panel":return`
          width: 90%;
          max-width: 400px;
          padding: 16px;
        `;case"popup":return`
          max-width: 100%;
          padding: 16px;
          padding-bottom: max(calc(env(safe-area-inset-bottom) + 8px), 16px);
        `;case"card":return`
          width: 100%;
          padding: 16px;
        `;default:return""}}}
  height: 100%;
`,vs=x.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  min-height: 280px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`,ui=({className:e})=>{const{config:t}=D(K),{mode:r,use_art_colors:n}=t,{artVars:i,haVars:o}=si(),a=()=>u(ms,{className:e,mode:r,$artColorVars:i,$haColorVars:o,$useArtColors:n,children:u(gs,{mode:r,children:[u(Jn,{iconSize:"x-large",borderRadius:8}),u(vs,{children:[u(fs,{}),u(_s,{}),u(ja,{}),u(ss,{})]})]})});return r==="card"?u("ha-card",{children:a()}):a()},ys=({config:e,rootElement:t,hass:r})=>{(!e||!r||!t)&&console.error("No config or hass");const n=S(f=>{const c=new Event("config-changed",{bubbles:!0,composed:!0});c.detail={config:f},t.dispatchEvent(c)},[t]),i=S((f,c)=>{if(!e)return;const m=f.split("."),p={...e};let _=p;for(let h=0;h<m.length-1;h++)_[m[h]]||(_[m[h]]={}),_=_[m[h]];_[m[m.length-1]]=c,n(p)},[e,n]),o=S(()=>{const f=[...e.custom_buttons||[],{icon:"mdi:paper-roll",name:"New Button",tap_action:{action:"toggle"}}];n({...e,custom_buttons:f})},[e,n]),a=S(f=>{const c=[...e.custom_buttons||[]];c.splice(f,1),n({...e,custom_buttons:c})},[e,n]),s=S((f,c,m)=>{const p=[...e.custom_buttons||[]];p[f]={...p[f],[c]:m},n({...e,custom_buttons:p})},[e,n]),l=S((f,c)=>{const m=[...e.custom_buttons||[]];m[f]={...m[f],...c},n({...e,custom_buttons:m})},[e,n]);if(!e||!r)return null;const d={...e,use_art_colors:e.use_art_colors??!1,speaker_group:e.speaker_group||{entity_id:"",entities:[]},custom_buttons:e.custom_buttons||[]};return u("form",{children:[u(J,{children:u(Me,{hass:r,value:d.entity_id,onChange:f=>i("entity_id",f),label:"Media Player Entity",domains:["media_player"],required:!0})}),u(J,{children:u(rr,{children:[u(ir,{type:"checkbox",id:"use_art_colors",checked:d.use_art_colors,onChange:f=>i("use_art_colors",f.target.checked)}),u(nr,{htmlFor:"use_art_colors",children:"Use album art colors"})]})}),u(we,{title:"Display Mode",children:u(oa,{options:[{name:"Panel",value:"panel"},{name:"Card",value:"card"},{name:"In Card",value:"in-card"}],onSelected:f=>i("mode",f),selected:e.mode||"panel"})}),u(J,{children:u(we,{title:"Interactions",children:u(ut,{hass:r,value:d.action||{},onChange:f=>i("action",f)})})}),u(J,{children:u(we,{title:"Speaker Group Configuration (optional)",children:[u(J,{children:u(Me,{hass:r,value:d.speaker_group.entity_id,onChange:f=>i("speaker_group.entity_id",f),label:"Main Speaker Entity ID (Optional)",domains:["media_player"]})}),u(dt,{children:"Select Speakers (including main speaker)"}),u(J,{children:u(ei,{hass:r,value:d.speaker_group.entities,onChange:f=>i("speaker_group.entities",f),label:"Speaker Group Entities (including main speaker)",domains:["media_player"]})})]})}),u(J,{children:u(ti,{children:[d.custom_buttons.map((f,c)=>{const{name:m,icon:p,..._}=f;return u(we,{title:`Button ${c} - ${f.name}`,children:[u(J,{children:[u(ft,{children:u(pt,{value:m||"",onChange:h=>s(c,"name",h),hass:r,label:"Name"})}),u(ft,{children:u(pt,{value:p||"",onChange:h=>s(c,"icon",h),hass:r,isIconInput:!0,label:"Icon"})}),u(dt,{children:"Interactions"}),u(ut,{hass:r,value:_,onChange:h=>l(c,h)})]}),u(ri,{type:"button",onClick:()=>a(c),children:"Remove Button"})]},c)}),u(tr,{type:"button",onClick:o,children:"Add Custom Button"})]})})]})},bs=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 0.5px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  gap: 2px;
`,xs=x(lt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,ws=()=>{const{config:e}=D(K),{custom_buttons:t}=e;return u(bs,{children:t.map((r,n)=>u(di,{button:r},n))})},di=({button:e,type:t="chip"})=>{const{rootElement:r,config:n}=D(K),{icon:i,name:o,...a}=e,s=Ge({rootElement:r,actionConfig:{...a,entity:n.entity_id}});return t==="icon-button"?u(U,{icon:e.icon??"mdi:dots-vertical",size:"x-small",...s}):u(xs,{icon:i,...s,children:[!!o&&u("span",{children:o}),s.renderLongPressIndicator()]})},Cs=ct`
  from {
    transform: translateY(15%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Ss=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8; // Above header and below dialogs
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (min-height: 832px) {
    align-items: center;
  }
`,ks=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`,$s=x.div`
  animation: ${Cs} 0.55s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  max-height: 98vh;
  height: fit-content;
  width: 424px;
  max-width: 98vw;
  margin-botton: 16px;
  background-color: var(--ha-card-background, var(--card-background-color));
  overflow: hidden;
  box-shadow: 0px 10px 20px var(--clear-background-color);
  border-top-left-radius: var(--ha-dialog-border-radius, 28px);
  border-top-right-radius: var(--ha-dialog-border-radius, 28px);
  @media screen and (min-height: 832px) {
    border-radius: var(--ha-dialog-border-radius, 28px);
    box-shadow: 0px 0px 20px var(--clear-background-color);
  }

  @media (prefers-color-scheme: light) {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`,Ps=x.div`
  display: grid;
  height: 100%;
`,fi=58,Es=x.div`
  display: flex;
  height: ${fi}px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  gap: 8px;
`,Ts=x.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--primary-text-color, #212121);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: auto;
`,Ms=x(ui)`
  max-height: calc(98vh - ${fi}px);
  max-width: 98vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,As=({visible:e,setVisible:t})=>{var _,h;const r=je(),{config:n,rootElement:i}=D(K),{entity_id:o,speaker_group:a}=n,{attributes:{friendly_name:s,icon:l,device_class:d}}=Q(),f=(h=(_=r.states[(a==null?void 0:a.entity_id)??o])==null?void 0:_.attributes)==null?void 0:h.group_members,c=er({icon:l,deviceClass:d}),m=H(()=>{const{tap_opens_popup:v,...y}=n;return{...y,mode:"popup"}},[n]),p=Ge({rootElement:i,actionConfig:{tap_action:{action:"more-info"},entity:o}});return e?u(Ss,{children:[u(ks,{onClick:()=>t(!1)}),u($s,{children:[u(Es,{children:[u(fe,{size:"small",icon:c}),u(Ts,{children:[s,(f==null?void 0:f.length)>1&&u("span",{children:[" +",f.length-1]})]}),u(U,{size:"small",...p,icon:"mdi:dots-vertical"}),u(U,{icon:"mdi:close",size:"small",onClick:()=>t(!1)})]}),u(Ps,{children:u(Qn,{rootElement:i,config:m,children:u(Ms,{})})})]})]}):null},pi=ye({player:null}),Rs=({hass:e,children:t,entityId:r})=>{const n=H(()=>({player:e.states[r]}),[e.states,r]);return u(pi.Provider,{value:n,children:t})},Q=()=>{const e=D(pi);if(!e)throw new Error("useHass must be used within a HassContextProvider");return e.player},zs=x.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-text-color, #333);
`,Ls=x.p`
  margin: 0px;
  font-size: 14px;
  color: var(--secondary-text-color, #666);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ns=()=>{const{attributes:{media_title:e,media_artist:t,media_album_name:r,source:n,friendly_name:i}}=Q(),o=e??n??i,a=`${r!==e?`${r} - `:""}${t}`;return u(G,{children:[!!o&&u(zs,{children:o}),(!!r||!!t)&&u(Ls,{children:a})]})},Os=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: auto;
  height: 36px; // fixed to prevent jumping
  margin-left: -4px; // compensate for icon button padding
`,qe=x(U)`
  opacity: ${e=>e.muted?.8:1}; // reduce opacity if muted
`,Is=()=>{const{config:e}=D(K),{attributes:{shuffle:t,repeat:r},state:n}=Q(),i=n==="playing",{supportPreviousTrack:o,supportNextTrack:a,supportsShuffle:s,supportsRepeat:l,supportsTogglePlayPause:d}=dr(),f=S(()=>{W().callService("media_player","media_play_pause",{entity_id:e.entity_id})},[]),c=S(()=>{W().callService("media_player","media_next_track",{entity_id:e.entity_id})},[]),m=S(()=>{W().callService("media_player","media_previous_track",{entity_id:e.entity_id})},[]),p=S(()=>{W().callService("media_player","shuffle_set",{entity_id:e.entity_id,shuffle:!t})},[t]),_=S(()=>{const h=r==="off"?"one":r==="one"?"all":"off";W().callService("media_player","repeat_set",{entity_id:e.entity_id,repeat:h})},[r]);return u(Os,{children:[!!s&&u(qe,{size:"x-small",onClick:p,muted:!t,icon:t?"mdi:shuffle-variant":"mdi:shuffle-disabled"}),!!o&&u(qe,{size:"small",onClick:m,icon:"mdi:skip-previous"}),d&&u(qe,{size:"medium",onClick:f,icon:i?"mdi:pause-circle":"mdi:play-circle"}),!!a&&u(qe,{size:"small",onClick:c,icon:"mdi:skip-next"}),!!l&&u(qe,{size:"x-small",onClick:_,muted:r==="off",icon:r==="one"?"mdi:repeat-once":r==="all"?"mdi:repeat":"mdi:repeat-off"})]})},Vs=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,hi=x.span`
  font-size: 11px;
  color: var(--secondary-text-color, #888);
  opacity: 0.8;
  font-style: italic;
`,Ds=()=>{var f,c;const e=je(),{config:t}=D(K),{entity_id:r,speaker_group:n}=t,{attributes:{friendly_name:i,icon:o,device_class:a},state:s}=Q(),l=(c=(f=e.states[(n==null?void 0:n.entity_id)??r])==null?void 0:f.attributes)==null?void 0:c.group_members,d=er({icon:o,deviceClass:a});return s==="off"?null:u(Vs,{children:[u(fe,{icon:d,size:"xx-small"}),u(hi,{children:i}),l&&l.length>1&&u(hi,{children:["+",l.length-1]})]})},Fs=x.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 16px;
  border-top: 0.5px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  gap: 12px;
`,_i=x.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-text-color);
  margin-top: 8px;
  margin-right: 16px;
  margin-left: 16px;
`,Hs=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
  margin-right: 16px;
`,Us=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Bs=x.div`
  font-size: 13px;
  flex: 1;
  ${e=>e.isMaster?"font-weight: 500;":""}
  color: var(--primary-text-color);
`,js=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`,Gs=x.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: flex-start;
  overflow-x: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`,Ws=x(lt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,qs=()=>{var c,m;const e=je(),{config:t}=D(K),{entity_id:r,speaker_group:n}=t,[i,o]=F([]),a=(n==null?void 0:n.entity_id)||r,s=e.states[a],l=H(()=>{var p;return(p=n==null?void 0:n.entities)!=null&&p.length?n.entities.filter(_=>e.states[_]).map(_=>{var h,v,y,b;return{entity_id:_,name:e.states[_].attributes.friendly_name,volume:e.states[_].attributes.volume_level||0,muted:e.states[_].attributes.is_volume_muted||!1,isGrouped:((v=(h=s==null?void 0:s.attributes)==null?void 0:h.group_members)==null?void 0:v.includes(_))||!1,isMainSpeaker:((b=(y=s==null?void 0:s.attributes)==null?void 0:y.group_members)==null?void 0:b[0])===_||!1}}).sort((_,h)=>_.entity_id===a?-1:h.entity_id===a?1:_.name.localeCompare(h.name)):[]},[e.states,n]),d=S(async(p,_)=>{if(!i.includes(p)){o(h=>[...h,p]);try{const h=e.states[p];_?await e.callService("media_player","unjoin",{entity_id:p}):(h.state==="off"&&await e.callService("media_player","turn_on",{entity_id:p}),await e.callService("media_player","join",{entity_id:a,group_members:[p]}))}catch(h){console.error(h)}o(h=>h.filter(v=>v!==p))}},[a,i]),f=S((p,_)=>{e.callService("media_player","volume_set",{entity_id:p,volume_level:_})},[]);return u(Fs,{children:[((m=(c=s==null?void 0:s.attributes)==null?void 0:c.group_members)==null?void 0:m.length)>1&&u(G,{children:[u(_i,{children:"Grouped Speakers"}),u(Hs,{children:l.filter(p=>p.isGrouped).map(p=>u(Us,{children:[u(U,{size:"x-small",onClick:()=>d(p.entity_id,p.isGrouped),icon:"mdi:link-variant-off"}),u(Bs,{isMaster:p.isMainSpeaker,children:[p.name," ",p.isMainSpeaker&&"(Master)"]}),p.isGrouped&&u(js,{children:[u(fe,{size:"x-small",icon:"mdi:volume-high"}),u(mt,{min:0,max:1,step:.01,value:p.volume,thumbSize:"small",onChange:_=>f(p.entity_id,_)})]})]},p.entity_id))})]}),u(_i,{children:"Add speakers to group"}),u(Gs,{children:l.filter(p=>!p.isGrouped).map(p=>u(Ws,{loading:i.includes(p.entity_id),onClick:()=>d(p.entity_id,p.isGrouped),icon:p.isGrouped?"mdi:close":"mdi:plus",iconPosition:"right",children:p.name},p.entity_id))})]})},Ys=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  transition: all 0.3s ease;
  max-height: 36px;
  margin-top: auto;
`,pr=x(U)`
  opacity: ${e=>e.muted?.8:1}; // reduce opacity if muted
`,Xs=()=>{var s,l;const e=Q(),t=e.entity_id,r=((s=e.attributes)==null?void 0:s.volume_level)??0,n=((l=e.attributes)==null?void 0:l.is_volume_muted)??!1,i=S(d=>{W().callService("media_player","volume_set",{entity_id:t,volume_level:d})},[]),o=S(()=>{W().callService("media_player","volume_mute",{entity_id:t,is_volume_muted:!n})},[n]),a=H(()=>mi(r,n),[r,n]);return u(Ys,{children:[u(pr,{size:"x-small",onClick:o,icon:a}),u(mt,{min:0,max:1,step:.01,value:r,thumbSize:"small",onChange:i})]})},mi=(e,t)=>e===0||t?"mdi:volume-off":e<.5?"mdi:volume-medium":"mdi:volume-high",Ks=({sliderVisible:e,setSliderVisible:t})=>{var a,s;const r=Q(),n=((a=r.attributes)==null?void 0:a.volume_level)??0,i=((s=r.attributes)==null?void 0:s.is_volume_muted)??!1,o=mi(n,i);return u(G,{children:e?u(pr,{size:"small",onClick:()=>t(!1),icon:"mdi:chevron-left"}):u(pr,{size:"small",onClick:()=>t(!0),icon:o})})},Js=x.div`
  border-radius: var(--ha-card-border-radius, 12px);
  overflow: hidden;
  ${e=>e.$artColorVars??""}
  ${e=>e.$useArtColors&&e.$haColorVars?e.$haColorVars:""}
  ${e=>e.$useArtColors&&`
    background: 
      radial-gradient( circle at bottom right, var(--art-color, transparent) -500%, transparent 40% ),
      radial-gradient( circle at top center, var(--art-color, transparent) -500%, transparent 40% ),
      radial-gradient( circle at bottom center, var(--art-color, transparent) -500%, transparent 40% ),
      radial-gradient( circle at top left, var(--art-color, transparent) -500%, transparent 40% );
  `}
`,Qs=x.div`
  display: flex;
  gap: 14px;
  padding: 12px;
  opacity: ${e=>e.$isOn?1:.7};
  transition: opacity 0.3s ease;
  position: relative;
`,Zs=x.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 12px;
  overflow: hidden;
`,ec=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,tc=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  justify-content: space-between;
`,gi=x.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`,rc=()=>{const{rootElement:e,config:t}=D(K),{entity_id:r,custom_buttons:n,action:i,tap_opens_popup:o,use_art_colors:a}=t,s=n&&n.length>0,[l,d]=F(!1),[f,c]=F(!1),[m,p]=F(!1),{artVars:_,haVars:h}=si(),{state:v,attributes:{media_title:y,media_artist:b,media_album_name:k}}=Q(),P=dr(),g=!P.supportsTogglePlayPause&&!P.supportNextTrack&&!P.supportPreviousTrack&&!P.supportsShuffle&&!P.supportsRepeat,w=v!=="off"&&v!=="unavailable",C=t.speaker_group&&t.speaker_group.entities&&t.speaker_group.entities.length>0,E=()=>{d(!l)},[M,O]=F(!1),B=v==="off"||!y&&!b&&!k?68:100,Re=Ge({rootElement:e,actionConfig:{...i??{tap_action:{action:"more-info"}},entity:t.entity_id},overrideCallback:o?{onTap:()=>{O(!0)}}:{}}),ze=S(()=>{W().callService("media_player","toggle",{entity_id:r})},[r]);return u("ha-card",{children:u(Js,{$artColorVars:_,$haColorVars:h,$useArtColors:a,children:[u(Qs,{$isOn:w,$useArtColors:a,children:[u(Jn,{size:B,iconSize:"large",...Re}),u(Zs,{children:[u(ec,{children:[u(Ns,{}),u(Ds,{}),m||g?u(Xs,{}):u(Is,{})]}),u(tc,{children:[u(gi,{children:[s&&u(G,{children:n.length===1?u(di,{button:n[0],type:"icon-button"}):u(U,{size:"x-small",onClick:()=>c(!f),icon:"mdi:dots-vertical"})}),C&&u(U,{size:"x-small",onClick:E,icon:"mdi:speaker-multiple"})]}),u(gi,{children:[!!w&&!g&&u(Ks,{sliderVisible:m,setSliderVisible:p}),(!w||g)&&u(U,{size:"small",onClick:ze,icon:"mdi:power"})]})]})]})]}),l&&C&&u(qs,{}),f&&u(ws,{}),M&&u(As,{visible:M,setVisible:O})]})})},nc=({config:e,rootElement:t,hass:r})=>{(!e||!r||!t)&&console.error("No config or hass");const n=S(f=>{const c=new Event("config-changed",{bubbles:!0,composed:!0});c.detail={config:f},t.dispatchEvent(c)},[t]),i=S((f,c)=>{if(!e)return;const m=f.split("."),p={...e};let _=p;for(let h=0;h<m.length-1;h++)_[m[h]]||(_[m[h]]={}),_=_[m[h]];_[m[m.length-1]]=c,n(p)},[e,n]),o=S(()=>{const f=[...e.custom_buttons||[],{icon:"mdi:paper-roll",name:"New Button",tap_action:{action:"toggle"}}];n({...e,custom_buttons:f})},[e,n]),a=S(f=>{const c=[...e.custom_buttons||[]];c.splice(f,1),n({...e,custom_buttons:c})},[e,n]),s=S((f,c,m)=>{const p=[...e.custom_buttons||[]];p[f]={...p[f],[c]:m},n({...e,custom_buttons:p})},[e,n]),l=S((f,c)=>{const m=[...e.custom_buttons||[]];m[f]={...m[f],...c},n({...e,custom_buttons:m})},[e,n]);if(!e||!r)return null;const d={...e,use_art_colors:e.use_art_colors??!1,speaker_group:e.speaker_group||{entity_id:"",entities:[]},custom_buttons:e.custom_buttons||[]};return u("form",{children:[u(J,{children:u(Me,{hass:r,value:d.entity_id,onChange:f=>i("entity_id",f),label:"Media Player Entity",domains:["media_player"],required:!0})}),u(J,{children:u(rr,{children:[u(ir,{type:"checkbox",id:"use_art_colors",checked:d.use_art_colors,onChange:f=>i("use_art_colors",f.target.checked)}),u(nr,{htmlFor:"use_art_colors",children:"Use album art colors"})]})}),u(J,{children:u(we,{title:"Interactions",children:[u(rr,{children:[u(ir,{type:"checkbox",id:"tap_opens_popup",checked:d.tap_opens_popup||!1,onChange:f=>i("tap_opens_popup",f.target.checked)}),u(nr,{htmlFor:"tap_opens_popup",children:"Tap opens popup (this will override any setting under tap in action)"})]}),u(ut,{hass:r,value:d.action||{},onChange:f=>i("action",f)})]})}),u(J,{children:u(we,{title:"Speaker Group Configuration (optional)",children:[u(J,{children:u(Me,{hass:r,value:d.speaker_group.entity_id,onChange:f=>i("speaker_group.entity_id",f),label:"Main Speaker Entity ID (Optional)",domains:["media_player"]})}),u(dt,{children:"Select Speakers (including main speaker)"}),u(J,{children:u(ei,{hass:r,value:d.speaker_group.entities,onChange:f=>i("speaker_group.entities",f),label:"Speaker Group Entities (including main speaker)",domains:["media_player"]})})]})}),u(J,{children:u(ti,{children:[d.custom_buttons.map((f,c)=>{const{name:m,icon:p,..._}=f;return u(we,{title:`Button ${c} - ${f.name}`,children:[u(J,{children:[u(ft,{children:u(pt,{value:m||"",onChange:h=>s(c,"name",h),hass:r,label:"Name"})}),u(ft,{children:u(pt,{value:p||"",onChange:h=>s(c,"icon",h),hass:r,isIconInput:!0,label:"Icon"})}),u(dt,{children:"Interactions"}),u(ut,{hass:r,value:_,onChange:h=>l(c,h)})]}),u(ri,{type:"button",onClick:()=>a(c),children:"Remove Button"})]},c)}),u(tr,{type:"button",onClick:o,children:"Add Custom Button"})]})})]})},ic=x.div`
  display: flex;
  flex-direction: row;
  height: 4px;
  width: 100%;
  background-color: var(--divider-color);
  border-radius: 2px;
  overflow: hidden;
`,oc=x.div`
  height: 100%;
  background-color: var(--secondary-text-color);
  width: 0%;
  transition: width 1s linear;
`,ac=({min:e,max:t,value:r})=>{const n=(r-e)/(t-e)*100;return u(ic,{children:u(oc,{style:{width:`${n}%`}})})},sc=x.div`
  display: contents;

  > ha-slider {
    width: 100%;
    --_handle-height: ${e=>vi(e.thumbSize)} !important;
    --_handle-width: ${e=>vi(e.thumbSize)} !important;
    --_inactive-track-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  }
`,mt=({min:e,max:t,step:r,value:n,thumbSize:i,onChange:o})=>u(sc,{thumbSize:i,children:u("ha-slider",{min:e,max:t,step:r,value:n,onInput:a=>o(parseFloat(a.target.value))})}),vi=e=>{switch(e){case"xsmall":return"8px";case"small":return"12px";case"medium":return"14px";case"large":return"16px"}},cc=x.div`
  border: 1px solid var(--divider-color, #e0e0e0);
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;
  background-color: var(--card-background-color, #fff);
`,lc=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: ${e=>e.$expanded?"1px solid var(--divider-color, #e0e0e0)":"none"};
`,uc=x.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,dc=x.div`
  padding: 16px;
  display: ${e=>e.$expanded?"block":"none"};
`,we=({title:e,children:t,initiallyExpanded:r=!1})=>{const[n,i]=F(r);return u(cc,{children:[u(lc,{$expanded:n,children:[u(uc,{children:e}),u(U,{onClick:()=>i(!n),icon:n?"mdi:chevron-up":"mdi:chevron-down",type:"button",size:"small"})]}),u(dc,{$expanded:n,children:t})]})};class yi extends HTMLElement{constructor(){super(...arguments),this._config=null,this.Card=null,this.extraProps={},this._hass=null}set hass(t){this._hass=t}setConfig(t){this._config=t,ve(u(Zn,{rootElement:this,children:u(aa,{children:u(this.Card,{config:this._config,hass:this._hass,rootElement:this,...this.extraProps})})}),this)}}class hr extends HTMLElement{constructor(){super(...arguments),this.Card=null,this.config=null,this.shouldUpdate=null,this._previousHass=null}set hass(t){if(!this.Card)throw new Error("Preact Card is not defined");const r=this.config.entity_id;this.shouldUpdate(this._previousHass,t)?(this._previousHass=t,ve(u(Zn,{rootElement:this,children:u(Qn,{rootElement:this,config:this.config,children:u(sa,{hass:t,children:u(Rs,{hass:t,entityId:r,children:u(this.Card,{})})})})}),this)):this._previousHass=t}getCardSize(){return 1}}class fc extends hr{constructor(){super(...arguments),this.Card=pa,this.shouldUpdate=(t,r)=>!t&&r?!0:xe(t.states[this.config.entity_id],r.states[this.config.entity_id])}setConfig(t){if(!t.entity_id)throw new Error("You need to define an entity_id");if(!t.entities)throw new Error("You need to define entities");this.config=t}getCardSize(){return 1}getLayoutOptions(){return{grid_rows:1,grid_columns:6,grid_min_rows:1,grid_max_rows:1}}}customElements.define("mediocre-chip-media-player-group-card",fc);class pc extends yi{constructor(){super(...arguments),this.Card=ys,this.extraProps={isMassive:!0,className:void 0}}}customElements.define("mediocre-massive-media-player-card-editor",pc);class hc extends hr{constructor(){super(...arguments),this.Card=ui,this.shouldUpdate=(t,r)=>{var n,i;if(!t&&r||xe(t.states[this.config.entity_id],r.states[this.config.entity_id])||(n=this.config.speaker_group)!=null&&n.entity_id&&xe(t.states[this.config.speaker_group.entity_id],r.states[this.config.speaker_group.entity_id]))return!0;if((i=this.config.speaker_group)!=null&&i.entities){for(const o of this.config.speaker_group.entities)if(xe(t.states[o],r.states[o],!0))return!0}return!1}}setConfig(t){if(!t.entity_id)throw new Error("You need to define an entity_id");this.config=t}static getConfigElement(){return document.createElement("mediocre-massive-media-player-card-editor")}static getStubConfig(t){return{entity_id:Object.keys(t.states).filter(i=>i.substr(0,i.indexOf("."))==="media_player")[0]??"",mode:"card"}}}customElements.define("mediocre-massive-media-player-card",hc),window.customCards=window.customCards||[],window.customCards.push({type:"mediocre-massive-media-player-card",name:"Mediocre Massive Media Player Card",preview:!0,description:"A media player card with player grouping support.",documentationURL:"https://github.com/antontanderup/mediocre-hass-media-player-cards"});class _c extends yi{constructor(){super(...arguments),this.Card=nc}}customElements.define("mediocre-media-player-card-editor",_c);class mc extends hr{constructor(){super(...arguments),this.Card=rc,this.shouldUpdate=(t,r)=>{var n,i;if(!t&&r||xe(t.states[this.config.entity_id],r.states[this.config.entity_id])||(n=this.config.speaker_group)!=null&&n.entity_id&&xe(t.states[this.config.speaker_group.entity_id],r.states[this.config.speaker_group.entity_id]))return!0;if((i=this.config.speaker_group)!=null&&i.entities){for(const o of this.config.speaker_group.entities)if(xe(t.states[o],r.states[o],!0))return!0}return!1}}setConfig(t){if(!t.entity_id)throw new Error("You need to define an entity_id");this.config=t}static getConfigElement(){return document.createElement("mediocre-media-player-card-editor")}static getStubConfig(t){return{entity_id:Object.keys(t.states).filter(i=>i.substr(0,i.indexOf("."))==="media_player")[0]??""}}getCardSize(){return 2}getGridOptions(){return{columns:12,min_columns:8}}}customElements.define("mediocre-media-player-card",mc),window.customCards=window.customCards||[],window.customCards.push({type:"mediocre-media-player-card",name:"Mediocre Media Player Card",preview:!0,description:"A media player card with player grouping support.",documentationURL:"https://github.com/antontanderup/mediocre-hass-media-player-cards"})});
