(function(fe){typeof define=="function"&&define.amd?define(fe):fe()})(function(){"use strict";var fe,M,fr,he,pr,mr,hr,_r,ht,_t,gt,gr,Ee={},vr=[],xo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Me=Array.isArray;function re(e,t){for(var r in t)e[r]=t[r];return e}function vt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t,r){var n,o,i,a={};for(i in t)i=="key"?n=t[i]:i=="ref"?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?fe.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return Te(e,a,n,o,null)}function Te(e,t,r,n,o){var i={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++fr,__i:-1,__u:0};return o==null&&M.vnode!=null&&M.vnode(i),i}function yr(){return{current:null}}function U(e){return e.children}function te(e,t){this.props=e,this.context=t}function ye(e,t){if(t==null)return e.__?ye(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?ye(e):null}function br(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return br(e)}}function yt(e){(!e.__d&&(e.__d=!0)&&he.push(e)&&!Be.__r++||pr!==M.debounceRendering)&&((pr=M.debounceRendering)||mr)(Be)}function Be(){for(var e,t,r,n,o,i,a,s=1;he.length;)he.length>s&&he.sort(hr),e=he.shift(),s=he.length,e.__d&&(r=void 0,o=(n=(t=e).__v).__e,i=[],a=[],t.__P&&((r=re({},n)).__v=n.__v+1,M.vnode&&M.vnode(r),bt(t.__P,r,n,t.__n,t.__P.namespaceURI,32&n.__u?[o]:null,i,o??ye(n),!!(32&n.__u),a),r.__v=n.__v,r.__.__k[r.__i]=r,kr(i,r,a),r.__e!=o&&br(r)));Be.__r=0}function xr(e,t,r,n,o,i,a,s,d,c,f){var l,_,p,m,h,v,y=n&&n.__k||vr,b=t.length;for(d=wo(r,t,y,d,b),l=0;l<b;l++)(p=r.__k[l])!=null&&(_=p.__i===-1?Ee:y[p.__i]||Ee,p.__i=l,v=bt(e,p,_,o,i,a,s,d,c,f),m=p.__e,p.ref&&_.ref!=p.ref&&(_.ref&&xt(_.ref,null,p),f.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),4&p.__u||_.__k===p.__k?d=wr(p,d,e):typeof p.type=="function"&&v!==void 0?d=v:m&&(d=m.nextSibling),p.__u&=-7);return r.__e=h,d}function wo(e,t,r,n,o){var i,a,s,d,c,f=r.length,l=f,_=0;for(e.__k=new Array(o),i=0;i<o;i++)(a=t[i])!=null&&typeof a!="boolean"&&typeof a!="function"?(d=i+_,(a=e.__k[i]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Te(null,a,null,null,null):Me(a)?Te(U,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?Te(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,s=null,(c=a.__i=Co(a,r,d,l))!==-1&&(l--,(s=r[c])&&(s.__u|=2)),s==null||s.__v===null?(c==-1&&(o>f?_--:o<f&&_++),typeof a.type!="function"&&(a.__u|=4)):c!=d&&(c==d-1?_--:c==d+1?_++:(c>d?_--:_++,a.__u|=4))):e.__k[i]=null;if(l)for(i=0;i<f;i++)(s=r[i])!=null&&(2&s.__u)==0&&(s.__e==n&&(n=ye(s)),Pr(s,s));return n}function wr(e,t,r){var n,o;if(typeof e.type=="function"){for(n=e.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=e,t=wr(n[o],t,r));return t}e.__e!=t&&(t&&e.type&&!r.contains(t)&&(t=ye(e)),r.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function se(e,t){return t=t||[],e==null||typeof e=="boolean"||(Me(e)?e.some(function(r){se(r,t)}):t.push(e)),t}function Co(e,t,r,n){var o,i,a=e.key,s=e.type,d=t[r];if(d===null&&e.key==null||d&&a==d.key&&s===d.type&&(2&d.__u)==0)return r;if(n>(d!=null&&(2&d.__u)==0?1:0))for(o=r-1,i=r+1;o>=0||i<t.length;){if(o>=0){if((d=t[o])&&(2&d.__u)==0&&a==d.key&&s===d.type)return o;o--}if(i<t.length){if((d=t[i])&&(2&d.__u)==0&&a==d.key&&s===d.type)return i;i++}}return-1}function Cr(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||xo.test(t)?r:r+"px"}function Ue(e,t,r,n,o){var i;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Cr(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||Cr(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(_r,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?n?r.t=n.t:(r.t=ht,e.addEventListener(t,i?gt:_t,i)):e.removeEventListener(t,i?gt:_t,i);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Sr(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.u==null)t.u=ht++;else if(t.u<r.t)return;return r(M.event?M.event(t):t)}}}function bt(e,t,r,n,o,i,a,s,d,c){var f,l,_,p,m,h,v,y,b,S,E,g,w,C,P,T,V,B=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),i=[s=t.__e=r.__e]),(f=M.__b)&&f(t);e:if(typeof B=="function")try{if(y=t.props,b="prototype"in B&&B.prototype.render,S=(f=B.contextType)&&n[f.__c],E=f?S?S.props.value:f.__:n,r.__c?v=(l=t.__c=r.__c).__=l.__E:(b?t.__c=l=new B(y,E):(t.__c=l=new te(y,E),l.constructor=B,l.render=ko),S&&S.sub(l),l.props=y,l.state||(l.state={}),l.context=E,l.__n=n,_=l.__d=!0,l.__h=[],l._sb=[]),b&&l.__s==null&&(l.__s=l.state),b&&B.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=re({},l.__s)),re(l.__s,B.getDerivedStateFromProps(y,l.__s))),p=l.props,m=l.state,l.__v=t,_)b&&B.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),b&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(b&&B.getDerivedStateFromProps==null&&y!==p&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(y,E),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(y,l.__s,E)===!1||t.__v==r.__v)){for(t.__v!=r.__v&&(l.props=y,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ee){ee&&(ee.__=t)}),g=0;g<l._sb.length;g++)l.__h.push(l._sb[g]);l._sb=[],l.__h.length&&a.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(y,l.__s,E),b&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(p,m,h)})}if(l.context=E,l.props=y,l.__P=e,l.__e=!1,w=M.__r,C=0,b){for(l.state=l.__s,l.__d=!1,w&&w(t),f=l.render(l.props,l.state,l.context),P=0;P<l._sb.length;P++)l.__h.push(l._sb[P]);l._sb=[]}else do l.__d=!1,w&&w(t),f=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++C<25);l.state=l.__s,l.getChildContext!=null&&(n=re(re({},n),l.getChildContext())),b&&!_&&l.getSnapshotBeforeUpdate!=null&&(h=l.getSnapshotBeforeUpdate(p,m)),T=f,f!=null&&f.type===U&&f.key==null&&(T=$r(f.props.children)),s=xr(e,Me(T)?T:[T],t,r,n,o,i,a,s,d,c),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),v&&(l.__E=l.__=null)}catch(ee){if(t.__v=null,d||i!=null)if(ee.then){for(t.__u|=d?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,t.__e=s}else for(V=i.length;V--;)vt(i[V]);else t.__e=r.__e,t.__k=r.__k;M.__e(ee,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):s=t.__e=So(r.__e,t,r,n,o,i,a,d,c);return(f=M.diffed)&&f(t),128&t.__u?void 0:s}function kr(e,t,r){for(var n=0;n<r.length;n++)xt(r[n],r[++n],r[++n]);M.__c&&M.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){M.__e(i,o.__v)}})}function $r(e){return typeof e!="object"||e==null?e:Me(e)?e.map($r):re({},e)}function So(e,t,r,n,o,i,a,s,d){var c,f,l,_,p,m,h,v=r.props,y=t.props,b=t.type;if(b=="svg"?o="http://www.w3.org/2000/svg":b=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((p=i[c])&&"setAttribute"in p==!!b&&(b?p.localName==b:p.nodeType==3)){e=p,i[c]=null;break}}if(e==null){if(b==null)return document.createTextNode(y);e=document.createElementNS(o,b,y.is&&y),s&&(M.__m&&M.__m(t,i),s=!1),i=null}if(b===null)v===y||s&&e.data===y||(e.data=y);else{if(i=i&&fe.call(e.childNodes),v=r.props||Ee,!s&&i!=null)for(v={},c=0;c<e.attributes.length;c++)v[(p=e.attributes[c]).name]=p.value;for(c in v)if(p=v[c],c!="children"){if(c=="dangerouslySetInnerHTML")l=p;else if(!(c in y)){if(c=="value"&&"defaultValue"in y||c=="checked"&&"defaultChecked"in y)continue;Ue(e,c,null,p,o)}}for(c in y)p=y[c],c=="children"?_=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?m=p:c=="checked"?h=p:s&&typeof p!="function"||v[c]===p||Ue(e,c,p,v[c],o);if(f)s||l&&(f.__html===l.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(l&&(e.innerHTML=""),xr(t.type==="template"?e.content:e,Me(_)?_:[_],t,r,n,b=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:r.__k&&ye(r,0),s,d),i!=null)for(c=i.length;c--;)vt(i[c]);s||(c="value",b=="progress"&&m==null?e.removeAttribute("value"):m!==void 0&&(m!==e[c]||b=="progress"&&!m||b=="option"&&m!==v[c])&&Ue(e,c,m,v[c],o),c="checked",h!==void 0&&h!==e[c]&&Ue(e,c,h,v[c],o))}return e}function xt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(o){M.__e(o,r)}}function Pr(e,t,r){var n,o;if(M.unmount&&M.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||xt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){M.__e(i,t)}n.base=n.__P=null}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Pr(n[o],t,r||typeof e.type!="function");r||vt(e.__e),e.__c=e.__=e.__e=void 0}function ko(e,t,r){return this.constructor(e,r)}function _e(e,t,r){var n,o,i,a;t==document&&(t=document.documentElement),M.__&&M.__(e,t),o=(n=typeof r=="function")?null:r&&r.__k||t.__k,i=[],a=[],bt(t,e=(!n&&r||t).__k=Y(U,null,[e]),o||Ee,Ee,t.namespaceURI,!n&&r?[r]:o?null:t.firstChild?fe.call(t.childNodes):null,i,!n&&r?r:o?o.__e:t.firstChild,n,a),kr(i,e,a)}function Er(e,t){_e(e,t,Er)}function $o(e,t,r){var n,o,i,a,s=re({},e.props);for(i in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)i=="key"?n=t[i]:i=="ref"?o=t[i]:s[i]=t[i]===void 0&&a!==void 0?a[i]:t[i];return arguments.length>2&&(s.children=arguments.length>3?fe.call(arguments,2):r),Te(e.type,s,n||e.key,o||e.ref,null)}function Ae(e){function t(r){var n,o;return this.getChildContext||(n=new Set,(o={})[t.__c]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&n.forEach(function(a){a.__e=!0,yt(a)})},this.sub=function(i){n.add(i);var a=i.componentWillUnmount;i.componentWillUnmount=function(){n&&n.delete(i),a&&a.call(i)}}),r.children}return t.__c="__cC"+gr++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,n){return r.children(n)}).contextType=t,t}fe=vr.slice,M={__e:function(e,t,r,n){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),a=o.__d),a)return o.__E=o}catch(s){e=s}throw e}},fr=0,te.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=re({},this.state),typeof e=="function"&&(e=e(re({},r),this.props)),e&&re(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),yt(this))},te.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),yt(this))},te.prototype.render=U,he=[],mr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,hr=function(e,t){return e.__v.__b-t.__v.__b},Be.__r=0,_r=/(PointerCapture)$|Capture$/i,ht=0,_t=Sr(!1),gt=Sr(!0),gr=0;var Po=0;function u(e,t,r,n,o,i){t||(t={});var a,s,d=t;if("ref"in d)for(s in d={},t)s=="ref"?a=t[s]:d[s]=t[s];var c={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Po,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(s in a)d[s]===void 0&&(d[s]=a[s]);return M.vnode&&M.vnode(c),c}function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wt.apply(null,arguments)}var ce,z,Ct,Mr,be=0,Tr=[],F=M,Ar=F.__b,Rr=F.__r,Lr=F.diffed,Nr=F.__c,Or=F.unmount,Ir=F.__;function ge(e,t){F.__h&&F.__h(z,e,be||t),be=0;var r=z.__H||(z.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function j(e){return be=1,je(Vr,e)}function je(e,t,r){var n=ge(ce++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):Vr(void 0,t),function(s){var d=n.__N?n.__N[0]:n.__[0],c=n.t(d,s);d!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=z,!z.__f)){var o=function(s,d,c){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(_){return!!_.__c});if(f.every(function(_){return!_.__N}))return!i||i.call(this,s,d,c);var l=n.__c.props!==s;return f.forEach(function(_){if(_.__N){var p=_.__[0];_.__=_.__N,_.__N=void 0,p!==_.__[0]&&(l=!0)}}),i&&i.call(this,s,d,c)||l};z.__f=!0;var i=z.shouldComponentUpdate,a=z.componentWillUpdate;z.componentWillUpdate=function(s,d,c){if(this.__e){var f=i;i=void 0,o(s,d,c),i=f}a&&a.call(this,s,d,c)},z.shouldComponentUpdate=o}return n.__N||n.__}function le(e,t){var r=ge(ce++,3);!F.__s&&Et(r.__H,t)&&(r.__=e,r.u=t,z.__H.__h.push(r))}function xe(e,t){var r=ge(ce++,4);!F.__s&&Et(r.__H,t)&&(r.__=e,r.u=t,z.__h.push(r))}function ue(e){return be=5,G(function(){return{current:e}},[])}function St(e,t,r){be=6,xe(function(){if(typeof e=="function"){var n=e(t());return function(){e(null),n&&typeof n=="function"&&n()}}if(e)return e.current=t(),function(){return e.current=null}},r==null?r:r.concat(e))}function G(e,t){var r=ge(ce++,7);return Et(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function k(e,t){return be=8,G(function(){return e},t)}function N(e){var t=z.context[e.__c],r=ge(ce++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(z)),t.props.value):e.__}function kt(e,t){F.useDebugValue&&F.useDebugValue(t?t(e):e)}function Eo(e){var t=ge(ce++,10),r=j();return t.__=e,z.componentDidCatch||(z.componentDidCatch=function(n,o){t.__&&t.__(n,o),r[1](n)}),[r[0],function(){r[1](void 0)}]}function $t(){var e=ge(ce++,11);if(!e.__){for(var t=z.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var r=t.__m||(t.__m=[0,0]);e.__="P"+r[0]+"-"+r[1]++}return e.__}function Mo(){for(var e;e=Tr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ge),e.__H.__h.forEach(Pt),e.__H.__h=[]}catch(t){e.__H.__h=[],F.__e(t,e.__v)}}F.__b=function(e){z=null,Ar&&Ar(e)},F.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ir&&Ir(e,t)},F.__r=function(e){Rr&&Rr(e),ce=0;var t=(z=e.__c).__H;t&&(Ct===z?(t.__h=[],z.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Ge),t.__h.forEach(Pt),t.__h=[],ce=0)),Ct=z},F.diffed=function(e){Lr&&Lr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Tr.push(t)!==1&&Mr===F.requestAnimationFrame||((Mr=F.requestAnimationFrame)||To)(Mo)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Ct=z=null},F.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Ge),r.__h=r.__h.filter(function(n){return!n.__||Pt(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],F.__e(n,r.__v)}}),Nr&&Nr(e,t)},F.unmount=function(e){Or&&Or(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Ge(n)}catch(o){t=o}}),r.__H=void 0,t&&F.__e(t,r.__v))};var zr=typeof requestAnimationFrame=="function";function To(e){var t,r=function(){clearTimeout(n),zr&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);zr&&(t=requestAnimationFrame(r))}function Ge(e){var t=z,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),z=t}function Pt(e){var t=z;e.__c=e.__(),z=t}function Et(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function Vr(e,t){return typeof t=="function"?t(e):t}function Dr(e,t){for(var r in t)e[r]=t[r];return e}function Mt(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function Tt(e,t){var r=t(),n=j({t:{__:r,u:t}}),o=n[0].t,i=n[1];return xe(function(){o.__=r,o.u=t,At(o)&&i({t:o})},[e,r,t]),le(function(){return At(o)&&i({t:o}),e(function(){At(o)&&i({t:o})})},[e]),r}function At(e){var t,r,n=e.u,o=e.__;try{var i=n();return!((t=o)===(r=i)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function Rt(e){e()}function Lt(e){return e}function Nt(){return[!1,Rt]}var Ot=xe;function We(e,t){this.props=e,this.context=t}function Fr(e,t){function r(o){var i=this.props.ref,a=i==o.ref;return!a&&i&&(i.call?i(null):i.current=null),t?!t(this.props,o)||!a:Mt(this.props,o)}function n(o){return this.shouldComponentUpdate=r,Y(e,o)}return n.displayName="Memo("+(e.displayName||e.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(We.prototype=new te).isPureReactComponent=!0,We.prototype.shouldComponentUpdate=function(e,t){return Mt(this.props,e)||Mt(this.state,t)};var Hr=M.__b;M.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Hr&&Hr(e)};var Ao=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function It(e){function t(r){var n=Dr({},r);return delete n.ref,e(n,r.ref||null)}return t.$$typeof=Ao,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Br=function(e,t){return e==null?null:se(se(e).map(t))},Ur={map:Br,forEach:Br,count:function(e){return e?se(e).length:0},only:function(e){var t=se(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:se},Ro=M.__e;M.__e=function(e,t,r,n){if(e.then){for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),o.__c(e,t)}Ro(e,t,r,n)};var jr=M.unmount;function Gr(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=Dr({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Gr(n,t,r)})),e}function Wr(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Wr(n,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function Re(){this.__u=0,this.o=null,this.__b=null}function Yr(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function qr(e){var t,r,n;function o(i){if(t||(t=e()).then(function(a){r=a.default||a},function(a){n=a}),n)throw n;if(!r)throw t;return Y(r,i)}return o.displayName="Lazy",o.__f=!0,o}function we(){this.i=null,this.l=null}M.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),jr&&jr(e)},(Re.prototype=new te).__c=function(e,t){var r=t.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var o=Yr(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(s):s())};r.__R=a;var s=function(){if(!--n.__u){if(n.state.__a){var d=n.state.__a;n.__v.__k[0]=Wr(d,d.__c.__P,d.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.o.pop();)c.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},Re.prototype.componentWillUnmount=function(){this.o=[]},Re.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Gr(this.__b,r,n.__O=n.__P)}this.__b=null}var o=t.__a&&Y(U,null,e.fallback);return o&&(o.__u&=-33),[Y(U,null,t.__a?null:e.children),o]};var Xr=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function Lo(e){return this.getChildContext=function(){return e.context},e.children}function No(e){var t=this,r=e.h;t.componentWillUnmount=function(){_e(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),t.v||(t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],contains:function(){return!0},appendChild:function(n){this.childNodes.push(n),t.h.appendChild(n)},insertBefore:function(n,o){this.childNodes.push(n),t.h.insertBefore(n,o)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.h.removeChild(n)}}),_e(Y(Lo,{context:t.context},e.__v),t.v)}function Kr(e,t){var r=Y(No,{__v:e,h:t});return r.containerInfo=t,r}(we.prototype=new te).__a=function(e){var t=this,r=Yr(t.__v),n=t.l.get(e);return n[0]++,function(o){var i=function(){t.props.revealOrder?(n.push(o),Xr(t,e,n)):o()};r?r(i):i()}},we.prototype.render=function(e){this.i=null,this.l=new Map;var t=se(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},we.prototype.componentDidUpdate=we.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Xr(e,r,t)})};var Jr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Oo=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Io=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,zo=/[A-Z0-9]/g,Vo=typeof document<"u",Do=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Qr(e,t,r){return t.__k==null&&(t.textContent=""),_e(e,t),typeof r=="function"&&r(),e?e.__c:null}function Zr(e,t,r){return Er(e,t),typeof r=="function"&&r(),e?e.__c:null}te.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(te.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var en=M.event;function Fo(){}function Ho(){return this.cancelBubble}function Bo(){return this.defaultPrevented}M.event=function(e){return en&&(e=en(e)),e.persist=Fo,e.isPropagationStopped=Ho,e.isDefaultPrevented=Bo,e.nativeEvent=e};var zt,Uo={enumerable:!1,configurable:!0,get:function(){return this.class}},tn=M.vnode;M.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,n=t.type,o={},i=n.indexOf("-")===-1;for(var a in r){var s=r[a];if(!(a==="value"&&"defaultValue"in r&&s==null||Vo&&a==="children"&&n==="noscript"||a==="class"||a==="className")){var d=a.toLowerCase();a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&s===!0?s="":d==="translate"&&s==="no"?s=!1:d[0]==="o"&&d[1]==="n"?d==="ondoubleclick"?a="ondblclick":d!=="onchange"||n!=="input"&&n!=="textarea"||Do(r.type)?d==="onfocus"?a="onfocusin":d==="onblur"?a="onfocusout":Io.test(a)&&(a=d):d=a="oninput":i&&Oo.test(a)?a=a.replace(zo,"-$&").toLowerCase():s===null&&(s=void 0),d==="oninput"&&o[a=d]&&(a="oninputCapture"),o[a]=s}}n=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=se(r.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),n=="select"&&o.defaultValue!=null&&(o.value=se(r.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),r.class&&!r.className?(o.class=r.class,Object.defineProperty(o,"className",Uo)):(r.className&&!r.class||r.class&&r.className)&&(o.class=o.className=r.className),t.props=o}(e),e.$$typeof=Jr,tn&&tn(e)};var rn=M.__r;M.__r=function(e){rn&&rn(e),zt=e.__c};var nn=M.diffed;M.diffed=function(e){nn&&nn(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value),zt=null};var on={ReactCurrentDispatcher:{current:{readContext:function(e){return zt.__n[e.__c].props.value},useCallback:k,useContext:N,useDebugValue:kt,useDeferredValue:Lt,useEffect:le,useId:$t,useImperativeHandle:St,useInsertionEffect:Ot,useLayoutEffect:xe,useMemo:G,useReducer:je,useRef:ue,useState:j,useSyncExternalStore:Tt,useTransition:Nt}}},jo="18.3.1";function an(e){return Y.bind(null,e)}function Le(e){return!!e&&e.$$typeof===Jr}function sn(e){return Le(e)&&e.type===U}function cn(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function ln(e){return Le(e)?$o.apply(null,arguments):e}function un(e){return!!e.__k&&(_e(null,e),!0)}function dn(e){return e&&(e.base||e.nodeType===1&&e)||null}var fn=function(e,t){return e(t)},pn=function(e,t){return e(t)},mn=U,hn=Le,Go={useState:j,useId:$t,useReducer:je,useEffect:le,useLayoutEffect:xe,useInsertionEffect:Ot,useTransition:Nt,useDeferredValue:Lt,useSyncExternalStore:Tt,startTransition:Rt,useRef:ue,useImperativeHandle:St,useMemo:G,useCallback:k,useContext:N,useDebugValue:kt,version:"18.3.1",Children:Ur,render:Qr,hydrate:Zr,unmountComponentAtNode:un,createPortal:Kr,createElement:Y,createContext:Ae,createFactory:an,cloneElement:ln,createRef:yr,Fragment:U,isValidElement:Le,isElement:hn,isFragment:sn,isMemo:cn,findDOMNode:dn,Component:te,PureComponent:We,memo:Fr,forwardRef:It,flushSync:pn,unstable_batchedUpdates:fn,StrictMode:mn,Suspense:Re,SuspenseList:we,lazy:qr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:on};const _n=Object.freeze(Object.defineProperty({__proto__:null,Children:Ur,Component:te,Fragment:U,PureComponent:We,StrictMode:mn,Suspense:Re,SuspenseList:we,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:on,cloneElement:ln,createContext:Ae,createElement:Y,createFactory:an,createPortal:Kr,createRef:yr,default:Go,findDOMNode:dn,flushSync:pn,forwardRef:It,hydrate:Zr,isElement:hn,isFragment:sn,isMemo:cn,isValidElement:Le,lazy:qr,memo:Fr,render:Qr,startTransition:Rt,unmountComponentAtNode:un,unstable_batchedUpdates:fn,useCallback:k,useContext:N,useDebugValue:kt,useDeferredValue:Lt,useEffect:le,useErrorBoundary:Eo,useId:$t,useImperativeHandle:St,useInsertionEffect:Ot,useLayoutEffect:xe,useMemo:G,useReducer:je,useRef:ue,useState:j,useSyncExternalStore:Tt,useTransition:Nt,version:jo},Symbol.toStringTag,{value:"Module"}));function Wo(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Yo(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var qo=function(){function e(r){var n=this;this._insertTag=function(o){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(o,i),n.tags.push(o)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Yo(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Wo(o);try{i.insertRule(n,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var o;return(o=n.parentNode)==null?void 0:o.removeChild(n)}),this.tags=[],this.ctr=0},e}(),X="-ms-",Ye="-moz-",R="-webkit-",gn="comm",Vt="rule",Dt="decl",Xo="@import",vn="@keyframes",Ko="@layer",Jo=Math.abs,qe=String.fromCharCode,Qo=Object.assign;function Zo(e,t){return q(e,0)^45?(((t<<2^q(e,0))<<2^q(e,1))<<2^q(e,2))<<2^q(e,3):0}function yn(e){return e.trim()}function ei(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,r){return e.replace(t,r)}function Ft(e,t){return e.indexOf(t)}function q(e,t){return e.charCodeAt(t)|0}function Ne(e,t,r){return e.slice(t,r)}function ne(e){return e.length}function Ht(e){return e.length}function Xe(e,t){return t.push(e),e}function ti(e,t){return e.map(t).join("")}var Ke=1,Ce=1,bn=0,J=0,W=0,Se="";function Je(e,t,r,n,o,i,a){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Ke,column:Ce,length:a,return:""}}function Oe(e,t){return Qo(Je("",null,null,"",null,null,0),e,{length:-e.length},t)}function ri(){return W}function ni(){return W=J>0?q(Se,--J):0,Ce--,W===10&&(Ce=1,Ke--),W}function Q(){return W=J<bn?q(Se,J++):0,Ce++,W===10&&(Ce=1,Ke++),W}function oe(){return q(Se,J)}function Qe(){return J}function Ie(e,t){return Ne(Se,e,t)}function ze(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xn(e){return Ke=Ce=1,bn=ne(Se=e),J=0,[]}function wn(e){return Se="",e}function Ze(e){return yn(Ie(J-1,Bt(e===91?e+2:e===40?e+1:e)))}function oi(e){for(;(W=oe())&&W<33;)Q();return ze(e)>2||ze(W)>3?"":" "}function ii(e,t){for(;--t&&Q()&&!(W<48||W>102||W>57&&W<65||W>70&&W<97););return Ie(e,Qe()+(t<6&&oe()==32&&Q()==32))}function Bt(e){for(;Q();)switch(W){case e:return J;case 34:case 39:e!==34&&e!==39&&Bt(W);break;case 40:e===41&&Bt(e);break;case 92:Q();break}return J}function ai(e,t){for(;Q()&&e+W!==57;)if(e+W===84&&oe()===47)break;return"/*"+Ie(t,J-1)+"*"+qe(e===47?e:Q())}function si(e){for(;!ze(oe());)Q();return Ie(e,J)}function ci(e){return wn(et("",null,null,null,[""],e=xn(e),0,[0],e))}function et(e,t,r,n,o,i,a,s,d){for(var c=0,f=0,l=a,_=0,p=0,m=0,h=1,v=1,y=1,b=0,S="",E=o,g=i,w=n,C=S;v;)switch(m=b,b=Q()){case 40:if(m!=108&&q(C,l-1)==58){Ft(C+=L(Ze(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:C+=Ze(b);break;case 9:case 10:case 13:case 32:C+=oi(m);break;case 92:C+=ii(Qe()-1,7);continue;case 47:switch(oe()){case 42:case 47:Xe(li(ai(Q(),Qe()),t,r),d);break;default:C+="/"}break;case 123*h:s[c++]=ne(C)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:v=0;case 59+f:y==-1&&(C=L(C,/\f/g,"")),p>0&&ne(C)-l&&Xe(p>32?Sn(C+";",n,r,l-1):Sn(L(C," ","")+";",n,r,l-2),d);break;case 59:C+=";";default:if(Xe(w=Cn(C,t,r,c,f,o,s,S,E=[],g=[],l),i),b===123)if(f===0)et(C,t,w,w,E,i,l,s,g);else switch(_===99&&q(C,3)===110?100:_){case 100:case 108:case 109:case 115:et(e,w,w,n&&Xe(Cn(e,w,w,0,0,o,s,S,o,E=[],l),g),o,g,l,s,n?E:g);break;default:et(C,w,w,w,[""],g,0,s,g)}}c=f=p=0,h=y=1,S=C="",l=a;break;case 58:l=1+ne(C),p=m;default:if(h<1){if(b==123)--h;else if(b==125&&h++==0&&ni()==125)continue}switch(C+=qe(b),b*h){case 38:y=f>0?1:(C+="\f",-1);break;case 44:s[c++]=(ne(C)-1)*y,y=1;break;case 64:oe()===45&&(C+=Ze(Q())),_=oe(),f=l=ne(S=C+=si(Qe())),b++;break;case 45:m===45&&ne(C)==2&&(h=0)}}return i}function Cn(e,t,r,n,o,i,a,s,d,c,f){for(var l=o-1,_=o===0?i:[""],p=Ht(_),m=0,h=0,v=0;m<n;++m)for(var y=0,b=Ne(e,l+1,l=Jo(h=a[m])),S=e;y<p;++y)(S=yn(h>0?_[y]+" "+b:L(b,/&\f/g,_[y])))&&(d[v++]=S);return Je(e,t,r,o===0?Vt:s,d,c,f)}function li(e,t,r){return Je(e,t,r,gn,qe(ri()),Ne(e,2,-2),0)}function Sn(e,t,r,n){return Je(e,t,r,Dt,Ne(e,0,n),Ne(e,n+1,-1),n)}function ke(e,t){for(var r="",n=Ht(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function ui(e,t,r,n){switch(e.type){case Ko:if(e.children.length)break;case Xo:case Dt:return e.return=e.return||e.value;case gn:return"";case vn:return e.return=e.value+"{"+ke(e.children,n)+"}";case Vt:e.value=e.props.join(",")}return ne(r=ke(e.children,n))?e.return=e.value+"{"+r+"}":""}function di(e){var t=Ht(e);return function(r,n,o,i){for(var a="",s=0;s<t;s++)a+=e[s](r,n,o,i)||"";return a}}function fi(e){return function(t){t.root||(t=t.return)&&e(t)}}function kn(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var pi=function(t,r,n){for(var o=0,i=0;o=i,i=oe(),o===38&&i===12&&(r[n]=1),!ze(i);)Q();return Ie(t,J)},mi=function(t,r){var n=-1,o=44;do switch(ze(o)){case 0:o===38&&oe()===12&&(r[n]=1),t[n]+=pi(J-1,r,n);break;case 2:t[n]+=Ze(o);break;case 4:if(o===44){t[++n]=oe()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=qe(o)}while(o=Q());return t},hi=function(t,r){return wn(mi(xn(t),r))},$n=new WeakMap,_i=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,o=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!$n.get(n))&&!o){$n.set(t,!0);for(var i=[],a=hi(r,i),s=n.props,d=0,c=0;d<a.length;d++)for(var f=0;f<s.length;f++,c++)t.props[c]=i[d]?a[d].replace(/&\f/g,s[f]):s[f]+" "+a[d]}}},gi=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pn(e,t){switch(Zo(e,t)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+Ye+e+X+e+e;case 6828:case 4268:return R+e+X+e+e;case 6165:return R+e+X+"flex-"+e+e;case 5187:return R+e+L(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return R+e+X+"flex-item-"+L(e,/flex-|-self/,"")+e;case 4675:return R+e+X+"flex-line-pack"+L(e,/align-content|flex-|-self/,"")+e;case 5548:return R+e+X+L(e,"shrink","negative")+e;case 5292:return R+e+X+L(e,"basis","preferred-size")+e;case 6060:return R+"box-"+L(e,"-grow","")+R+e+X+L(e,"grow","positive")+e;case 4554:return R+L(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ne(e)-1-t>6)switch(q(e,t+1)){case 109:if(q(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+Ye+(q(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ft(e,"stretch")?Pn(L(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(q(e,t+1)!==115)break;case 6444:switch(q(e,ne(e)-3-(~Ft(e,"!important")&&10))){case 107:return L(e,":",":"+R)+e;case 101:return L(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+R+(q(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(q(e,t+11)){case 114:return R+e+X+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+X+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+X+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return R+e+X+e+e}return e}var vi=function(t,r,n,o){if(t.length>-1&&!t.return)switch(t.type){case Dt:t.return=Pn(t.value,t.length);break;case vn:return ke([Oe(t,{value:L(t.value,"@","@"+R)})],o);case Vt:if(t.length)return ti(t.props,function(i){switch(ei(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ke([Oe(t,{props:[L(i,/:(read-\w+)/,":"+Ye+"$1")]})],o);case"::placeholder":return ke([Oe(t,{props:[L(i,/:(plac\w+)/,":"+R+"input-$1")]}),Oe(t,{props:[L(i,/:(plac\w+)/,":"+Ye+"$1")]}),Oe(t,{props:[L(i,/:(plac\w+)/,X+"input-$1")]})],o)}return""})}},yi=[vi],En=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(h){var v=h.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||yi,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(h){for(var v=h.getAttribute("data-emotion").split(" "),y=1;y<v.length;y++)i[v[y]]=!0;s.push(h)});var d,c=[_i,gi];{var f,l=[ui,fi(function(h){f.insert(h)})],_=di(c.concat(o,l)),p=function(v){return ke(ci(v),_)};d=function(v,y,b,S){f=b,p(v?v+"{"+y.styles+"}":y.styles),S&&(m.inserted[y.name]=!0)}}var m={key:r,sheet:new qo({key:r,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:d};return m.sheet.hydrate(s),m},tt={exports:{}},O={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mn;function bi(){if(Mn)return O;Mn=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,l=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function S(g){if(typeof g=="object"&&g!==null){var w=g.$$typeof;switch(w){case t:switch(g=g.type,g){case d:case c:case n:case i:case o:case l:return g;default:switch(g=g&&g.$$typeof,g){case s:case f:case m:case p:case a:return g;default:return w}}case r:return w}}}function E(g){return S(g)===c}return O.AsyncMode=d,O.ConcurrentMode=c,O.ContextConsumer=s,O.ContextProvider=a,O.Element=t,O.ForwardRef=f,O.Fragment=n,O.Lazy=m,O.Memo=p,O.Portal=r,O.Profiler=i,O.StrictMode=o,O.Suspense=l,O.isAsyncMode=function(g){return E(g)||S(g)===d},O.isConcurrentMode=E,O.isContextConsumer=function(g){return S(g)===s},O.isContextProvider=function(g){return S(g)===a},O.isElement=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===t},O.isForwardRef=function(g){return S(g)===f},O.isFragment=function(g){return S(g)===n},O.isLazy=function(g){return S(g)===m},O.isMemo=function(g){return S(g)===p},O.isPortal=function(g){return S(g)===r},O.isProfiler=function(g){return S(g)===i},O.isStrictMode=function(g){return S(g)===o},O.isSuspense=function(g){return S(g)===l},O.isValidElementType=function(g){return typeof g=="string"||typeof g=="function"||g===n||g===c||g===i||g===o||g===l||g===_||typeof g=="object"&&g!==null&&(g.$$typeof===m||g.$$typeof===p||g.$$typeof===a||g.$$typeof===s||g.$$typeof===f||g.$$typeof===v||g.$$typeof===y||g.$$typeof===b||g.$$typeof===h)},O.typeOf=S,O}var I={},Tn;function xi(){if(Tn)return I;Tn=1;var e={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */return e.NODE_ENV!=="production"&&function(){var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,c=t?Symbol.for("react.async_mode"):60111,f=t?Symbol.for("react.concurrent_mode"):60111,l=t?Symbol.for("react.forward_ref"):60112,_=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.block"):60121,y=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118,S=t?Symbol.for("react.scope"):60119;function E($){return typeof $=="string"||typeof $=="function"||$===o||$===f||$===a||$===i||$===_||$===p||typeof $=="object"&&$!==null&&($.$$typeof===h||$.$$typeof===m||$.$$typeof===s||$.$$typeof===d||$.$$typeof===l||$.$$typeof===y||$.$$typeof===b||$.$$typeof===S||$.$$typeof===v)}function g($){if(typeof $=="object"&&$!==null){var ur=$.$$typeof;switch(ur){case r:var mt=$.type;switch(mt){case c:case f:case o:case a:case i:case _:return mt;default:var bo=mt&&mt.$$typeof;switch(bo){case d:case l:case h:case m:case s:return bo;default:return ur}}case n:return ur}}}var w=c,C=f,P=d,T=s,V=r,B=l,ee=o,dt=h,ft=m,pt=n,gc=a,vc=i,yc=_,vo=!1;function bc($){return vo||(vo=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),yo($)||g($)===c}function yo($){return g($)===f}function xc($){return g($)===d}function wc($){return g($)===s}function Cc($){return typeof $=="object"&&$!==null&&$.$$typeof===r}function Sc($){return g($)===l}function kc($){return g($)===o}function $c($){return g($)===h}function Pc($){return g($)===m}function Ec($){return g($)===n}function Mc($){return g($)===a}function Tc($){return g($)===i}function Ac($){return g($)===_}I.AsyncMode=w,I.ConcurrentMode=C,I.ContextConsumer=P,I.ContextProvider=T,I.Element=V,I.ForwardRef=B,I.Fragment=ee,I.Lazy=dt,I.Memo=ft,I.Portal=pt,I.Profiler=gc,I.StrictMode=vc,I.Suspense=yc,I.isAsyncMode=bc,I.isConcurrentMode=yo,I.isContextConsumer=xc,I.isContextProvider=wc,I.isElement=Cc,I.isForwardRef=Sc,I.isFragment=kc,I.isLazy=$c,I.isMemo=Pc,I.isPortal=Ec,I.isProfiler=Mc,I.isStrictMode=Tc,I.isSuspense=Ac,I.isValidElementType=E,I.typeOf=g}(),I}var An;function wi(){if(An)return tt.exports;An=1;var e={};return e.NODE_ENV==="production"?tt.exports=bi():tt.exports=xi(),tt.exports}var Ut,Rn;function Ci(){if(Rn)return Ut;Rn=1;var e=wi(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[e.ForwardRef]=n,i[e.Memo]=o;function a(m){return e.isMemo(m)?o:i[m.$$typeof]||t}var s=Object.defineProperty,d=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,_=Object.prototype;function p(m,h,v){if(typeof h!="string"){if(_){var y=l(h);y&&y!==_&&p(m,y,v)}var b=d(h);c&&(b=b.concat(c(h)));for(var S=a(m),E=a(h),g=0;g<b.length;++g){var w=b[g];if(!r[w]&&!(v&&v[w])&&!(E&&E[w])&&!(S&&S[w])){var C=f(h,w);try{s(m,w,C)}catch{}}}}return m}return Ut=p,Ut}Ci();var Si=!0;function Ln(e,t,r){var n="";return r.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(n+=o+" ")}),n}var jt=function(t,r,n){var o=t.key+"-"+r.name;(n===!1||Si===!1)&&t.registered[o]===void 0&&(t.registered[o]=r.styles)},Nn=function(t,r,n){jt(t,r,n);var o=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var i=r;do t.insert(r===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function ki(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var $i={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pi=/[A-Z]|^ms/g,Ei=/_EMO_([^_]+?)_([^]*?)_EMO_/g,On=function(t){return t.charCodeAt(1)===45},In=function(t){return t!=null&&typeof t!="boolean"},Gt=kn(function(e){return On(e)?e:e.replace(Pi,"-$&").toLowerCase()}),zn=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ei,function(n,o,i){return ie={name:o,styles:i,next:ie},o})}return $i[t]!==1&&!On(t)&&typeof r=="number"&&r!==0?r+"px":r};function Ve(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var o=r;if(o.anim===1)return ie={name:o.name,styles:o.styles,next:ie},o.name;var i=r;if(i.styles!==void 0){var a=i.next;if(a!==void 0)for(;a!==void 0;)ie={name:a.name,styles:a.styles,next:ie},a=a.next;var s=i.styles+";";return s}return Mi(e,t,r)}case"function":{if(e!==void 0){var d=ie,c=r(e);return ie=d,Ve(e,t,c)}break}}var f=r;if(t==null)return f;var l=t[f];return l!==void 0?l:f}function Mi(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=Ve(e,t,r[o])+";";else for(var i in r){var a=r[i];if(typeof a!="object"){var s=a;t!=null&&t[s]!==void 0?n+=i+"{"+t[s]+"}":In(s)&&(n+=Gt(i)+":"+zn(i,s)+";")}else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var d=0;d<a.length;d++)In(a[d])&&(n+=Gt(i)+":"+zn(i,a[d])+";");else{var c=Ve(e,t,a);switch(i){case"animation":case"animationName":{n+=Gt(i)+":"+c+";";break}default:n+=i+"{"+c+"}"}}}return n}var Vn=/label:\s*([^\s;{]+)\s*(;|$)/g,ie;function Wt(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,o="";ie=void 0;var i=e[0];if(i==null||i.raw===void 0)n=!1,o+=Ve(r,t,i);else{var a=i;o+=a[0]}for(var s=1;s<e.length;s++)if(o+=Ve(r,t,e[s]),n){var d=i;o+=d[s]}Vn.lastIndex=0;for(var c="",f;(f=Vn.exec(o))!==null;)c+="-"+f[1];var l=ki(o)+c;return{name:l,styles:o,next:ie}}var Ti=function(t){return t()},Ai=_n.useInsertionEffect?_n.useInsertionEffect:!1,Dn=Ai||Ti,Fn=Ae(typeof HTMLElement<"u"?En({key:"css"}):null),Ri=Fn.Provider,Hn=function(t){return It(function(r,n){var o=N(Fn);return t(r,o,n)})},Bn=Ae({}),Yt={}.hasOwnProperty,qt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Li=function(t,r){var n={};for(var o in r)Yt.call(r,o)&&(n[o]=r[o]);return n[qt]=t,n},Ni=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return jt(r,n,o),Dn(function(){return Nn(r,n,o)}),null},Oi=Hn(function(e,t,r){var n=e.css;typeof n=="string"&&t.registered[n]!==void 0&&(n=t.registered[n]);var o=e[qt],i=[n],a="";typeof e.className=="string"?a=Ln(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var s=Wt(i,void 0,N(Bn));a+=t.key+"-"+s.name;var d={};for(var c in e)Yt.call(e,c)&&c!=="css"&&c!==qt&&(d[c]=e[c]);return d.className=a,r&&(d.ref=r),Y(U,null,Y(Ni,{cache:t,serialized:s,isStringTag:typeof o=="string"}),Y(o,d))}),Ii=Oi,Un=function(t,r){var n=arguments;if(r==null||!Yt.call(r,"css"))return Y.apply(void 0,n);var o=n.length,i=new Array(o);i[0]=Ii,i[1]=Li(t,r);for(var a=2;a<o;a++)i[a]=n[a];return Y.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Un||(Un={}));function zi(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Wt(t)}function rt(){var e=zi.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Vi=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Di=kn(function(e){return Vi.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Fi=Di,Hi=function(t){return t!=="theme"},jn=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Fi:Hi},Gn=function(t,r,n){var o;if(r){var i=r.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},Bi=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return jt(r,n,o),Dn(function(){return Nn(r,n,o)}),null},Ui=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,i,a;r!==void 0&&(i=r.label,a=r.target);var s=Gn(t,r,n),d=s||jn(o),c=!d("as");return function(){var f=arguments,l=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&l.push("label:"+i+";"),f[0]==null||f[0].raw===void 0)l.push.apply(l,f);else{var _=f[0];l.push(_[0]);for(var p=f.length,m=1;m<p;m++)l.push(f[m],_[m])}var h=Hn(function(v,y,b){var S=c&&v.as||o,E="",g=[],w=v;if(v.theme==null){w={};for(var C in v)w[C]=v[C];w.theme=N(Bn)}typeof v.className=="string"?E=Ln(y.registered,g,v.className):v.className!=null&&(E=v.className+" ");var P=Wt(l.concat(g),y.registered,w);E+=y.key+"-"+P.name,a!==void 0&&(E+=" "+a);var T=c&&s===void 0?jn(S):d,V={};for(var B in v)c&&B==="as"||T(B)&&(V[B]=v[B]);return V.className=E,b&&(V.ref=b),Y(U,null,Y(Bi,{cache:y,serialized:P,isStringTag:typeof S=="string"}),Y(S,V))});return h.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=l,h.__emotion_forwardProp=s,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(v,y){var b=e(v,wt({},r,y,{shouldForwardProp:Gn(h,y,!0)}));return b.apply(void 0,l)},h}},ji=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],x=Ui.bind(null);ji.forEach(function(e){x[e]=x(e)});const Gi=x.div`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${e=>Xt(e.$size)}px;
  aspect-ratio: 1;

  > ha-icon {
    --mdc-icon-size: ${e=>Xt(e.$size)}px;
    width: ${e=>Xt(e.$size)}px;
    display: flex;
  }
`,ae=({icon:e,size:t="medium",className:r})=>u(Gi,{$size:t,className:r,children:u("ha-icon",{icon:e})}),Xt=e=>{switch(e){case"xx-small":return 12;case"x-small":return 18;case"small":return 24;case"medium":return 32;case"large":return 48;case"x-large":return 80}},Wi=rt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Yi=x.button`
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
    animation: ${Wi} 1s linear infinite;
    ${e=>e.$loading?"":"animation: none;"}
  }
`,nt=({loading:e,icon:t,iconPosition:r="left",children:n,...o})=>{const i=()=>{if(e)return u(ae,{size:"x-small",icon:"mdi:loading"});if(t)return u(ae,{size:"x-small",icon:t})};return u(Yi,{$loading:e,...o,children:[r==="left"&&i(),n,r==="right"&&i()]})},qi=()=>[{name:"tap_action",label:"Tap Action",selector:{ui_action:{}}},{name:"hold_action",label:"Hold Action",selector:{ui_action:{}}},{name:"double_tap_action",label:"Double Tap Action",selector:{ui_action:{}}}],Xi=({hass:e,value:t,onChange:r,disabled:n=!1})=>{const o=ue(null),i=G(()=>t?{...t}:{action:"none"},[t]),a=k(s=>{const c=s.detail.value;r(c)},[r]);return le(()=>{const s=o.current;return s&&s.addEventListener("value-changed",a),()=>{s&&s.removeEventListener("value-changed",a)}},[o.current,a]),u("ha-form",{ref:o,hass:e,data:i,schema:qi(),computeLabel:s=>s.label||s.name,disabled:n})},$e=e=>{const{hass:t,value:r,onChange:n,label:o,domains:i,required:a=!1,disabled:s=!1,allowCustomEntity:d=!1}=e,c=ue(null),f=k(l=>{const p=l.detail.value;n(p)},[n]);return le(()=>{const l=c.current;return l&&l.addEventListener("value-changed",f),()=>{l&&l.removeEventListener("value-changed",f)}},[c.current,f]),u("ha-entity-picker",{ref:c,hass:t,value:r,label:o||"Entity",includeDomains:i,disabled:s,required:a,"allow-custom-entity":d})},Ki=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Wn=({hass:e,value:t,onChange:r,label:n,domains:o,disabled:i=!1,allowCustomEntity:a=!1})=>{const s=(t==null?void 0:t.filter(Boolean))||[],d=k((c,f)=>{const l=[...s];!c&&f<s.length?l.splice(f,1):f<s.length?l[f]=c||"":c&&l.push(c),r(l.filter(Boolean))},[s,r]);return u(Ki,{className:"entities-picker",children:[n&&u("label",{children:n}),s.map((c,f)=>u($e,{hass:e,value:c,onChange:l=>d(l,f),domains:o,disabled:i,required:!1,allowCustomEntity:a},`entity-${f}`)),u($e,{hass:e,value:"",onChange:c=>d(c,s.length),domains:o,disabled:i,required:!1,allowCustomEntity:a},"entity-new")]})},ot=({hass:e,value:t={},onChange:r})=>u(Xi,{hass:e,value:t,onChange:r}),Ji=({options:e,onSelected:t,selected:r})=>u("select",{value:r,onChange:n=>t(n.target.value),children:e.map(n=>u("option",{value:n.value,children:n.name},n.value))}),K=x.div`
  margin-bottom: 16px;
`,it=x.label`
  display: block;
  margin-bottom: 16px;
  font-weight: 500;
`,Yn=x.div`
  display: flex;
  flex-direction: column;
`,Kt=x.button`
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
`,qn=x(Kt)`
  background-color: var(--error-color, #ff5252);

  &:hover {
    background-color: var(--error-color-dark, #c50b0b);
  }
`,at=x.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,Jt=x.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,Qt=x.label`
  margin-left: 8px;
  font-weight: normal;
`,Zt=x.input`
  cursor: pointer;
`,st=({hass:e,value:t,onChange:r,label:n,required:o=!1,disabled:i=!1,isIconInput:a=!1})=>{const s=k(d=>{r(d.detail.value)},[r]);return a?u("ha-icon-picker",{label:n||"Icon",hass:e,value:t,disabled:i,required:o,"onvalue-changed":s}):u("ha-textfield",{label:n||"Text",value:t,disabled:i,required:o,onchange:d=>r(d.target.value)})},Qi=rt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Zi=x.button`
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
  min-width: ${e=>er(e.$size)}px;
  aspect-ratio: 1;
  color: ${e=>e.disabled?"var(--disabled-text-color, #999)":"var(--primary-text-color, #333)"};

  &:hover {
    background-color: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  &:active {
    background-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  }
  > ha-icon {
    --mdc-icon-size: ${e=>er(e.$size)}px;
    width: ${e=>er(e.$size)}px;
    display: flex;
    pointer-events: none;
    animation: ${Qi} 1s linear infinite;
    ${e=>e.$loading?"":"animation: none;"};
  }
`,H=({icon:e,size:t="medium",disabled:r=!1,loading:n=!1,className:o,renderLongPressIndicator:i,...a})=>u(Zi,{disabled:r,$disabled:r,$size:t,$loading:n,className:o,...a,children:[n?u("ha-icon",{icon:"mdi:loading"}):u("ha-icon",{icon:e}),i&&i()]}),er=e=>{switch(e){case"xx-small":return 12;case"x-small":return 18;case"small":return 24;case"medium":return 32;case"large":return 48;case"x-large":return 80;case"xx-large":return 120}},D=Ae({rootElement:null,hass:null,config:null}),Xn=({rootElement:e,hass:t,config:r,children:n})=>u(D.Provider,{value:{rootElement:e,hass:t,config:r},children:n}),Kn=({rootElement:e,children:t})=>{const[r]=j(()=>En({key:"mmpc",container:e,speedy:!1}));return u(Ri,{value:r,children:t})},ea=({children:e})=>{const[t,r]=j(!1);return le(()=>{customElements.get("hui-glance-card").getConfigElement().then(()=>{r(!0)})},[]),t?e:null};class Jn extends HTMLElement{constructor(){super(...arguments),this._config=null,this.Card=null,this.extraProps={},this._hass=null}set hass(t){this._hass=t}setConfig(t){this._config=t,_e(u(Kn,{rootElement:this,children:u(ea,{children:u(this.Card,{config:this._config,hass:this._hass,rootElement:this,...this.extraProps})})}),this)}}class tr extends HTMLElement{constructor(){super(...arguments),this.Card=null,this.config=null}set hass(t){if(!this.Card)throw new Error("Preact Card is not defined");_e(u(Kn,{rootElement:this,children:u(Xn,{rootElement:this,hass:t,config:this.config,children:u(this.Card,{})})}),this)}getCardSize(){return 1}}const ta=({hass:e,action:t,target:r,data:n})=>{const o=t.split(".")[0],i=t.split(".")[1],a={...n,...r};return e.callService(o,i,a)},rr=async(e,t,r,n)=>{const o=t[r+"_action"];if(o.action==="perform-action")return ta({hass:n,action:o.perform_action,target:o.target,data:o.data});const i=new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:{...t,entity_id:t==null?void 0:t.entity},action:r}});return e.dispatchEvent(i),Promise.resolve()},ra=x.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`,na=x.div`
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
`,oa=()=>{const{hass:e,config:t}=N(D),[r,n]=j([]),o=G(()=>{const s=e.states[t.entity_id];return t.entities.filter(d=>d!==s.entity_id).map(d=>{const c=e.states[d];return{entity_id:c.entity_id,friendly_name:c.attributes.friendly_name,isGrouped:s.attributes.group_members.includes(c.entity_id),isGrouping:r.includes(c.entity_id)}}).sort((d,c)=>d.friendly_name<c.friendly_name?-1:d.friendly_name>c.friendly_name?1:0).sort((d,c)=>d.isGrouped&&!c.isGrouped?-1:!d.isGrouped&&c.isGrouped?1:0)},[e,t,r]),i=k(async s=>{if(!s.isGrouping){n([...r,s.entity_id]);try{await e.callService("media_player","turn_on",{entity_id:s.entity_id}),await e.callService("media_player","join",{entity_id:t.entity_id,group_members:[s.entity_id]})}catch(d){console.error(d)}n(r.filter(d=>d!==s.entity_id))}},[e,t]),a=k(async s=>{if(!s.isGrouping){n([...r,s.entity_id]);try{await e.callService("media_player","unjoin",{entity_id:s.entity_id}),await e.callService("media_player","turn_off",{entity_id:s.entity_id})}catch(d){console.error(d)}n(r.filter(d=>d!==s.entity_id))}},[e,t]);return u(U,{children:u(ra,{className:"chips",children:o.map(s=>u(na,{$inactive:!s.isGrouped,$loading:s.isGrouping,onClick:()=>{s.isGrouped?a(s):i(s)},children:[s.friendly_name,s.isGrouped&&u(ae,{size:"x-small",icon:"mdi:close"}),!s.isGrouped&&u(ae,{size:"x-small",icon:"mdi:plus"})]},s.entity_id))})})},ia=x.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
`,aa=x.div`
  position: relative;
  aspect-ratio: 1;
  max-height: 95%;
  overflow: hidden;
  border-radius: 8px;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 0px 8px var(--clear-background-color);
`,sa=x.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  background-color: var(--card-background-color);
`,ca=x.div`
  position: absolute;
  bottom: 6px;
  right: 6px;
  --icon-primary-color: var(--art-on-art-color, --primary-text-color);
  opacity: 0.8;
`,la=()=>{const{hass:e,config:t}=N(D),{entity_id:r}=t,n=e.states[r],{media_title:o,media_artist:i,entity_picture:a,source:s}=n.attributes,d=n.state;return u(ia,{children:u(aa,{children:u(U,{children:[u(sa,{src:a??"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%20viewBox='0%200%20400%20400'%3E%3Crect%20width='400'%20height='400'%20fill='transparent'/%3E%3C/svg%3E",alt:`${o} by ${i}`}),u(ca,{children:u(ae,{size:"x-small",icon:ua({source:s,state:d})})})]})})})},ua=({source:e,state:t})=>{if(t==="off")return"mdi:power-off";switch(e==null?void 0:e.toLowerCase()){case"spotify":return"mdi:spotify";case"airplay":return"mdi:airplay";case"bluetooth":return"mdi:bluetooth";case"net radio":return"mdi:radio";case"server":return"mdi:server";case"usb":return"mdi:usb";case"aux":return"mdi:audio-input-rca";case"hdmi":return"mdi:hdmi-port";case"tv":return"mdi:television";case"tuner":return"mdi:radio-tower";case"optical":return"mdi:audio-input-stereo-minijack";default:return"mdi:music"}},da=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  color: var(--primary-text-color, #fff);
  > h2,
  > h3 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
`,fa=x.h2`
  margin: 0px;
`,pa=x.h3`
  margin: 0px;
  font-weight: normal;
  color: var(--secondary-text-color, #fff);
`,ma=()=>{var i,a,s;const{hass:e,config:t}=N(D),r=(i=e.states[t.entity_id].attributes)==null?void 0:i.media_title,n=(a=e.states[t.entity_id].attributes)==null?void 0:a.media_artist,o=(s=e.states[t.entity_id].attributes)==null?void 0:s.media_album_name;return!r&&!n&&!o?null:u(da,{children:[!!r&&u(fa,{children:r}),(!!o||!!n)&&u(pa,{children:`${o??""} - ${n??""}`})]})},ha=x.div`
  display: flex;
  flex-direction: row;
  height: 4px;
  width: 100%;
  background-color: var(--divider-color);
  border-radius: 2px;
  overflow: hidden;
`,_a=x.div`
  height: 100%;
  background-color: var(--secondary-text-color);
  width: 0%;
  transition: width 1s linear;
`,ga=({min:e,max:t,value:r})=>{const n=(r-e)/(t-e)*100;return u(ha,{children:u(_a,{style:{width:`${n}%`}})})},va=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
  color: var(--secondary-text-color, #888);
  height: 20px;
  margin-bottom: -20px;
`,ya=()=>{const{hass:e,config:t}=N(D),r=G(()=>{var _,p,m;const n=e.states[t.entity_id],o=((_=n.attributes)==null?void 0:_.media_position)??null,i=((p=n.attributes)==null?void 0:p.media_position_updated_at)??null,a=((m=n.attributes)==null?void 0:m.media_duration)??null;if(o===null||o<0||a===null||i===null)return null;const s=new Date,d=new Date(i),f=(s.getTime()-d.getTime())/1e3+o,l=h=>{const v=Math.floor(h/60).toString().padStart(2,"0"),y=Math.round(h-Number(v)*60).toString().padStart(2,"0");return`${v}:${y}`};return{currentPosition:f,mediaDuration:a,prettyNow:l(f),prettyEnd:l(a)}},[e,t]);return r?u("div",{children:[u(ga,{value:r.currentPosition,min:0,max:r.mediaDuration}),u(va,{children:[u("span",{children:r.prettyNow}),u("span",{children:r.prettyEnd})]})]}):null};function De({actionConfig:e,rootElement:t,hass:r,overrideCallback:n}){const o=G(()=>({onTap:e!=null&&e.tap_action?()=>rr(t,e,"tap",r):void 0,onLongPress:e!=null&&e.hold_action?async()=>rr(t,e,"hold",r):void 0,onDoubleTap:e!=null&&e.double_tap_action?()=>rr(t,e,"double_tap",r):void 0,...n??{}}),[e,n]),i=ja(o);return G(()=>i,[i])}class ba{constructor(t,r){this.pixels=t,this.opts=r;const{sigBits:n}=r,o=(E,g,w)=>(E<<2*n)+(g<<n)+w;this.getColorIndex=o;const i=8-n,a=1<<3*n,s=new Uint32Array(a);let d,c,f,l,_,p,m,h,v,y;d=f=_=0,c=l=p=Number.MAX_VALUE;const b=t.length/4;let S=0;for(;S<b;){const E=S*4;if(S++,m=t[E+0],h=t[E+1],v=t[E+2],y=t[E+3],y===0)continue;m=m>>i,h=h>>i,v=v>>i;const g=o(m,h,v);s[g]===void 0&&(s[g]=0),s[g]+=1,m>d&&(d=m),m<c&&(c=m),h>f&&(f=h),h<l&&(l=h),v>_&&(_=v),v<p&&(p=v)}this._colorCount=s.reduce((E,g)=>g>0?E+1:E,0),this.hist=s,this.rmax=d,this.rmin=c,this.gmax=f,this.gmin=l,this.bmax=_,this.bmin=p}get colorCount(){return this._colorCount}}class xa{scaleDown(t){const r=this.getWidth(),n=this.getHeight();let o=1;if(t.maxDimension>0){const i=Math.max(r,n);i>t.maxDimension&&(o=t.maxDimension/i)}else o=1/t.quality;o<1&&this.resize(r*o,n*o,o)}}function wa(e,t){var r;if(t.length>0){const n=e.data,o=n.length/4;let i,a,s,d,c;for(let f=0;f<o;f++){i=f*4,a=n[i+0],s=n[i+1],d=n[i+2],c=n[i+3];for(let l=0;l<t.length;l++)if(!((r=t[l])!=null&&r.call(t,a,s,d,c))){n[i+3]=0;break}}}return e}function Ca(e){const t=new URL(e,location.href);return t.protocol===location.protocol&&t.host===location.host&&t.port===location.port}function Sa(e,t){const r=new URL(e),n=new URL(t);return r.protocol===n.protocol&&r.hostname===n.hostname&&r.port===n.port}class ka extends xa{_getCanvas(){if(!this._canvas)throw new Error("Canvas is not initialized");return this._canvas}_getContext(){if(!this._context)throw new Error("Context is not initialized");return this._context}_getWidth(){if(!this._width)throw new Error("Width is not initialized");return this._width}_getHeight(){if(!this._height)throw new Error("Height is not initialized");return this._height}_initCanvas(){const t=this.image;if(!t)throw new Error("Image is not initialized");const r=this._canvas=document.createElement("canvas"),n=r.getContext("2d");if(!n)throw new ReferenceError("Failed to create canvas context");this._context=n,r.className="@vibrant/canvas",r.style.display="none",this._width=r.width=t.width,this._height=r.height=t.height,n.drawImage(t,0,0),document.body.appendChild(r)}load(t){let r,n;if(typeof t=="string")r=document.createElement("img"),n=t,!Ca(n)&&!Sa(window.location.href,n)&&(r.crossOrigin="anonymous"),r.src=n;else if(t instanceof HTMLImageElement)r=t,n=t.src;else return Promise.reject(new Error("Cannot load buffer as an image in browser"));return this.image=r,new Promise((o,i)=>{const a=()=>{this._initCanvas(),o(this)};r.complete?a():(r.onload=a,r.onerror=s=>i(new Error(`Fail to load image: ${n}`)))})}clear(){this._getContext().clearRect(0,0,this._getWidth(),this._getHeight())}update(t){this._getContext().putImageData(t,0,0)}getWidth(){return this._getWidth()}getHeight(){return this._getHeight()}resize(t,r,n){if(!this.image)throw new Error("Image is not initialized");this._width=this._getCanvas().width=t,this._height=this._getCanvas().height=r,this._getContext().scale(n,n),this._getContext().drawImage(this.image,0,0)}getPixelCount(){return this._getWidth()*this._getHeight()}getImageData(){return this._getContext().getImageData(0,0,this._getWidth(),this._getHeight())}remove(){this._canvas&&this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas)}}function Fe(e,...t){return t.forEach(r=>{if(r){for(const n in r)if(r.hasOwnProperty(n)){const o=r[n];Array.isArray(o)?e[n]=o.slice(0):typeof o=="object"?(e[n]||(e[n]={}),Fe(e[n],o)):e[n]=o}}}),e}function $a(e,t){const{colorCount:r,quantizer:n,generators:o,filters:i}=e,a={colorCount:r},s=typeof n=="string"?{name:n,options:{}}:n;return s.options=Fe({},a,s.options),Fe({},{quantizer:s,generators:o,filters:i},t)}class Pa{constructor(t,r={}){this._src=t,this._opts=Fe({},pe.DefaultOpts,r)}maxColorCount(t){return this._opts.colorCount=t,this}maxDimension(t){return this._opts.maxDimension=t,this}addFilter(t){return this._opts.filters?this._opts.filters.push(t):this._opts.filters=[t],this}removeFilter(t){if(this._opts.filters){const r=this._opts.filters.indexOf(t);r>0&&this._opts.filters.splice(r)}return this}clearFilters(){return this._opts.filters=[],this}quality(t){return this._opts.quality=t,this}useImageClass(t){return this._opts.ImageClass=t,this}useGenerator(t,r){return this._opts.generators||(this._opts.generators=[]),this._opts.generators.push(r?{name:t,options:r}:t),this}useQuantizer(t,r){return this._opts.quantizer=r?{name:t,options:r}:t,this}build(){return new pe(this._src,this._opts)}getPalette(){return this.build().getPalette()}}class nr{constructor(t){this.pipeline=t,this._map={}}names(){return Object.keys(this._map)}has(t){return!!this._map[t]}get(t){return this._map[t]}register(t,r){return this._map[t]=r,this.pipeline}}class Ea{constructor(){this.filter=new nr(this),this.quantizer=new nr(this),this.generator=new nr(this)}_buildProcessTasks({filters:t,quantizer:r,generators:n}){return n.length===1&&n[0]==="*"&&(n=this.generator.names()),{filters:t.map(i=>o(this.filter,i)),quantizer:o(this.quantizer,r),generators:n.map(i=>o(this.generator,i))};function o(i,a){let s,d;return typeof a=="string"?s=a:(s=a.name,d=a.options),{name:s,fn:i.get(s),options:d}}}async process(t,r){const{filters:n,quantizer:o,generators:i}=this._buildProcessTasks(r),a=await this._filterColors(n,t),s=await this._generateColors(o,a),d=await this._generatePalettes(i,s);return{colors:s,palettes:d}}_filterColors(t,r){return Promise.resolve(wa(r,t.map(({fn:n})=>n)))}_generateColors(t,r){return Promise.resolve(t.fn(r.data,t.options))}async _generatePalettes(t,r){const n=await Promise.all(t.map(({fn:o,options:i})=>Promise.resolve(o(r,i))));return Promise.resolve(n.reduce((o,i,a)=>(o[t[a].name]=i,o),{}))}}function Ma(e,t,r){return"#"+((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1,7)}function Ta(e,t,r){e/=255,t/=255,r/=255;const n=Math.max(e,t,r),o=Math.min(e,t,r);let i=0,a=0;const s=(n+o)/2;if(n!==o){const d=n-o;switch(a=s>.5?d/(2-n-o):d/(n+o),n){case e:i=(t-r)/d+(t<r?6:0);break;case t:i=(r-e)/d+2;break;case r:i=(e-t)/d+4;break}i/=6}return[i,a,s]}function de(e,t,r){let n,o,i;function a(s,d,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?s+(d-s)*6*c:c<1/2?d:c<2/3?s+(d-s)*(2/3-c)*6:s}if(t===0)n=o=i=r;else{const s=r<.5?r*(1+t):r+t-r*t,d=2*r-s;n=a(d,s,e+1/3),o=a(d,s,e),i=a(d,s,e-1/3)}return[n*255,o*255,i*255]}class Z{static applyFilters(t,r){return r.length>0?t.filter(({r:n,g:o,b:i})=>{var a;for(let s=0;s<r.length;s++)if(!((a=r[s])!=null&&a.call(r,n,o,i,255)))return!1;return!0}):t}static clone(t){return new Z(t._rgb,t._population)}get r(){return this._rgb[0]}get g(){return this._rgb[1]}get b(){return this._rgb[2]}get rgb(){return this._rgb}get hsl(){if(!this._hsl){const[t,r,n]=this._rgb;this._hsl=Ta(t,r,n)}return this._hsl}get hex(){if(!this._hex){const[t,r,n]=this._rgb;this._hex=Ma(t,r,n)}return this._hex}get population(){return this._population}toJSON(){return{rgb:this.rgb,population:this.population}}getYiq(){if(!this._yiq){const t=this._rgb;this._yiq=(t[0]*299+t[1]*587+t[2]*114)/1e3}return this._yiq}get titleTextColor(){return this._titleTextColor||(this._titleTextColor=this.getYiq()<200?"#fff":"#000"),this._titleTextColor}get bodyTextColor(){return this._bodyTextColor||(this._bodyTextColor=this.getYiq()<150?"#fff":"#000"),this._bodyTextColor}constructor(t,r){this._rgb=t,this._population=r}}const Qn=class dr{constructor(t,r){this._src=t,this.opts=Fe({},dr.DefaultOpts,r)}static use(t){this._pipeline=t}static from(t){return new Pa(t)}get result(){return this._result}_process(t,r){t.scaleDown(this.opts);const n=$a(this.opts,r);return dr._pipeline.process(t.getImageData(),n)}async getPalette(){const t=new this.opts.ImageClass;try{const r=await t.load(this._src),n=await this._process(r,{generators:["default"]});this._result=n;const o=n.palettes.default;if(!o)throw new Error("Something went wrong and a palette was not found, please file a bug against our GitHub repo: https://github.com/vibrant-Colors/node-vibrant/");return t.remove(),o}catch(r){return t.remove(),Promise.reject(r)}}async getPalettes(){const t=new this.opts.ImageClass;try{const r=await t.load(this._src),n=await this._process(r,{generators:["*"]});this._result=n;const o=n.palettes;return t.remove(),o}catch(r){return t.remove(),Promise.reject(r)}}};Qn.DefaultOpts={colorCount:64,quality:5,filters:[]};let pe=Qn;pe.DefaultOpts.quantizer="mmcq",pe.DefaultOpts.generators=["default"],pe.DefaultOpts.filters=["default"],pe.DefaultOpts.ImageClass=ka;const or=5,ir=8-or;class ct{constructor(t,r,n,o,i,a,s){this.histogram=s,this._volume=-1,this._avg=null,this._count=-1,this.dimension={r1:t,r2:r,g1:n,g2:o,b1:i,b2:a}}static build(t){const r=new ba(t,{sigBits:or}),{rmin:n,rmax:o,gmin:i,gmax:a,bmin:s,bmax:d}=r;return new ct(n,o,i,a,s,d,r)}invalidate(){this._volume=this._count=-1,this._avg=null}volume(){if(this._volume<0){const{r1:t,r2:r,g1:n,g2:o,b1:i,b2:a}=this.dimension;this._volume=(r-t+1)*(o-n+1)*(a-i+1)}return this._volume}count(){if(this._count<0){const{hist:t,getColorIndex:r}=this.histogram,{r1:n,r2:o,g1:i,g2:a,b1:s,b2:d}=this.dimension;let c=0;for(let f=n;f<=o;f++)for(let l=i;l<=a;l++)for(let _=s;_<=d;_++){const p=r(f,l,_);t[p]&&(c+=t[p])}this._count=c}return this._count}clone(){const{histogram:t}=this,{r1:r,r2:n,g1:o,g2:i,b1:a,b2:s}=this.dimension;return new ct(r,n,o,i,a,s,t)}avg(){if(!this._avg){const{hist:t,getColorIndex:r}=this.histogram,{r1:n,r2:o,g1:i,g2:a,b1:s,b2:d}=this.dimension;let c=0;const f=1<<8-or;let l,_,p;l=_=p=0;for(let m=n;m<=o;m++)for(let h=i;h<=a;h++)for(let v=s;v<=d;v++){const y=r(m,h,v),b=t[y];b&&(c+=b,l+=b*(m+.5)*f,_+=b*(h+.5)*f,p+=b*(v+.5)*f)}c?this._avg=[~~(l/c),~~(_/c),~~(p/c)]:this._avg=[~~(f*(n+o+1)/2),~~(f*(i+a+1)/2),~~(f*(s+d+1)/2)]}return this._avg}contains(t){let[r,n,o]=t;const{r1:i,r2:a,g1:s,g2:d,b1:c,b2:f}=this.dimension;return r>>=ir,n>>=ir,o>>=ir,r>=i&&r<=a&&n>=s&&n<=d&&o>=c&&o<=f}split(){const{hist:t,getColorIndex:r}=this.histogram,{r1:n,r2:o,g1:i,g2:a,b1:s,b2:d}=this.dimension,c=this.count();if(!c)return[];if(c===1)return[this.clone()];const f=o-n+1,l=a-i+1,_=d-s+1,p=Math.max(f,l,_);let m=null,h,v;h=v=0;let y=null;if(p===f){y="r",m=new Uint32Array(o+1);for(let w=n;w<=o;w++){h=0;for(let C=i;C<=a;C++)for(let P=s;P<=d;P++){const T=r(w,C,P);t[T]&&(h+=t[T])}v+=h,m[w]=v}}else if(p===l){y="g",m=new Uint32Array(a+1);for(let w=i;w<=a;w++){h=0;for(let C=n;C<=o;C++)for(let P=s;P<=d;P++){const T=r(C,w,P);t[T]&&(h+=t[T])}v+=h,m[w]=v}}else{y="b",m=new Uint32Array(d+1);for(let w=s;w<=d;w++){h=0;for(let C=n;C<=o;C++)for(let P=i;P<=a;P++){const T=r(C,P,w);t[T]&&(h+=t[T])}v+=h,m[w]=v}}let b=-1;const S=new Uint32Array(m.length);for(let w=0;w<m.length;w++){const C=m[w];C&&(b<0&&C>v/2&&(b=w),S[w]=v-C)}const E=this;function g(w){const C=w+"1",P=w+"2",T=E.dimension[C];let V=E.dimension[P];const B=E.clone(),ee=E.clone(),dt=b-T,ft=V-b;for(dt<=ft?(V=Math.min(V-1,~~(b+ft/2)),V=Math.max(0,V)):(V=Math.max(T,~~(b-1-dt/2)),V=Math.min(E.dimension[P],V));!m[V];)V++;let pt=S[V];for(;!pt&&m[V-1];)pt=S[--V];return B.dimension[P]=V,ee.dimension[C]=V+1,[B,ee]}return g(y)}}class Zn{_sort(){this._sorted||(this.contents.sort(this._comparator),this._sorted=!0)}constructor(t){this._comparator=t,this.contents=[],this._sorted=!1}push(t){this.contents.push(t),this._sorted=!1}peek(t){return this._sort(),t=typeof t=="number"?t:this.contents.length-1,this.contents[t]}pop(){return this._sort(),this.contents.pop()}size(){return this.contents.length}map(t){return this._sort(),this.contents.map(t)}}const Aa=.75;function eo(e,t){let r=e.size();for(;e.size()<t;){const n=e.pop();if(n&&n.count()>0){const[o,i]=n.split();if(!o||(e.push(o),i&&i.count()>0&&e.push(i),e.size()===r))break;r=e.size()}else break}}const Ra=(e,t)=>{if(e.length===0||t.colorCount<2||t.colorCount>256)throw new Error("Wrong MMCQ parameters");const r=ct.build(e);r.histogram.colorCount;const n=new Zn((i,a)=>i.count()-a.count());n.push(r),eo(n,Aa*t.colorCount);const o=new Zn((i,a)=>i.count()*i.volume()-a.count()*a.volume());return o.contents=n.contents,eo(o,t.colorCount-o.size()),La(o)};function La(e){const t=[];for(;e.size();){const r=e.pop(),n=r.avg();t.push(new Z(n,r.count()))}return t}const Na={targetDarkLuma:.26,maxDarkLuma:.45,minLightLuma:.55,targetLightLuma:.74,minNormalLuma:.3,targetNormalLuma:.5,maxNormalLuma:.7,targetMutesSaturation:.3,maxMutesSaturation:.4,targetVibrantSaturation:1,minVibrantSaturation:.35,weightSaturation:3,weightLuma:6.5,weightPopulation:.5};function Oa(e){let t=0;return e.forEach(r=>{t=Math.max(t,r.population)}),t}function Ia(e,t){return e.Vibrant===t||e.DarkVibrant===t||e.LightVibrant===t||e.Muted===t||e.DarkMuted===t||e.LightMuted===t}function za(e,t,r,n,o,i,a){function s(...c){let f=0,l=0;for(let _=0;_<c.length;_+=2){const p=c[_],m=c[_+1];!p||!m||(f+=p*m,l+=m)}return f/l}function d(c,f){return 1-Math.abs(c-f)}return s(d(e,t),a.weightSaturation,d(r,n),a.weightLuma,o/i,a.weightPopulation)}function Pe(e,t,r,n,o,i,a,s,d,c){let f=null,l=0;return t.forEach(_=>{const[,p,m]=_.hsl;if(p>=s&&p<=d&&m>=o&&m<=i&&!Ia(e,_)){const h=za(p,a,m,n,_.population,r,c);(f===null||h>l)&&(f=_,l=h)}}),f}function Va(e,t,r){const n={Vibrant:null,DarkVibrant:null,LightVibrant:null,Muted:null,DarkMuted:null,LightMuted:null};return n.Vibrant=Pe(n,e,t,r.targetNormalLuma,r.minNormalLuma,r.maxNormalLuma,r.targetVibrantSaturation,r.minVibrantSaturation,1,r),n.LightVibrant=Pe(n,e,t,r.targetLightLuma,r.minLightLuma,1,r.targetVibrantSaturation,r.minVibrantSaturation,1,r),n.DarkVibrant=Pe(n,e,t,r.targetDarkLuma,0,r.maxDarkLuma,r.targetVibrantSaturation,r.minVibrantSaturation,1,r),n.Muted=Pe(n,e,t,r.targetNormalLuma,r.minNormalLuma,r.maxNormalLuma,r.targetMutesSaturation,0,r.maxMutesSaturation,r),n.LightMuted=Pe(n,e,t,r.targetLightLuma,r.minLightLuma,1,r.targetMutesSaturation,0,r.maxMutesSaturation,r),n.DarkMuted=Pe(n,e,t,r.targetDarkLuma,0,r.maxDarkLuma,r.targetMutesSaturation,0,r.maxMutesSaturation,r),n}function Da(e,t,r){if(!e.Vibrant&&!e.DarkVibrant&&!e.LightVibrant){if(!e.DarkVibrant&&e.DarkMuted){let[n,o,i]=e.DarkMuted.hsl;i=r.targetDarkLuma,e.DarkVibrant=new Z(de(n,o,i),0)}if(!e.LightVibrant&&e.LightMuted){let[n,o,i]=e.LightMuted.hsl;i=r.targetDarkLuma,e.DarkVibrant=new Z(de(n,o,i),0)}}if(!e.Vibrant&&e.DarkVibrant){let[n,o,i]=e.DarkVibrant.hsl;i=r.targetNormalLuma,e.Vibrant=new Z(de(n,o,i),0)}else if(!e.Vibrant&&e.LightVibrant){let[n,o,i]=e.LightVibrant.hsl;i=r.targetNormalLuma,e.Vibrant=new Z(de(n,o,i),0)}if(!e.DarkVibrant&&e.Vibrant){let[n,o,i]=e.Vibrant.hsl;i=r.targetDarkLuma,e.DarkVibrant=new Z(de(n,o,i),0)}if(!e.LightVibrant&&e.Vibrant){let[n,o,i]=e.Vibrant.hsl;i=r.targetLightLuma,e.LightVibrant=new Z(de(n,o,i),0)}if(!e.Muted&&e.Vibrant){let[n,o,i]=e.Vibrant.hsl;i=r.targetMutesSaturation,e.Muted=new Z(de(n,o,i),0)}if(!e.DarkMuted&&e.DarkVibrant){let[n,o,i]=e.DarkVibrant.hsl;i=r.targetMutesSaturation,e.DarkMuted=new Z(de(n,o,i),0)}if(!e.LightMuted&&e.LightVibrant){let[n,o,i]=e.LightVibrant.hsl;i=r.targetMutesSaturation,e.LightMuted=new Z(de(n,o,i),0)}}const Fa=(e,t)=>{t=Object.assign({},Na,t);const r=Oa(e),n=Va(e,r,t);return Da(n,r,t),n},Ha=new Ea().filter.register("default",(e,t,r,n)=>n>=125&&!(e>250&&t>250&&r>250)).quantizer.register("mmcq",Ra).generator.register("default",Fa);pe.use(Ha);const ar=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;function to(e){const{entity_picture:t}=e.attributes,[r,n]=j(null),[o,i]=j(ar()),a=k(()=>{t&&pe.from(t).getPalette().then(n).catch(c=>{console.error("Error getting color with Vibrant:",c)})},[t]);le(()=>{n(null),t&&a()},[t]),le(()=>{const c=window.matchMedia("(prefers-color-scheme: dark)"),f=()=>i(ar());if(i(ar()),c.addEventListener)return c.addEventListener("change",f),()=>c.removeEventListener("change",f)},[]);const s=G(()=>{if(o||!r)return null;const c=r.Vibrant??r.Muted;if(!c)return null;const f={...lt(c.hsl),l:50},l=me(f),_={...f,s:4.35,l:95.49},p={...me(_),l:15.29},m={..._,l:_.l*.98},h=me(m),v={..._,l:_.l*1.1},y=me(v);return{artVars:`
        --art-color: ${A(lt(c.hsl))};
        --art-on-art-color: ${c.titleTextColor};
        --art-primary-color: ${A(f)};
        --art-on-primary-color: ${A(l)};
        --art-surface-color: ${A(_)};
        --art-on-surface-color: ${A(p)};
        --art-surface-higher-color: ${A(m)};
        --art-on-surface-higher-color: ${A(h)};
        --art-surface-lower-color: ${A(v)};
        --art-on-surface-lower-color: ${A(y)};
      `,haVars:`
        --primary-color: ${A(f)};
        --ha-card-background: ${A(_)};
        --card-background-color: ${A(m)};
        --primary-text-color: ${A(p)};
        --secondary-text-color: ${A({...p,l:p.l*1.1})};
        --icon-primary-color: ${A(p)};
        --divider-color: ${A({..._,l:88})};
        --clear-background-color: ${A({..._,l:100})};
        --secondary-background-color: ${A({...p,l:95})};
      `}},[r,o]),d=G(()=>{if(!o||!r)return null;const c=r.Vibrant??r.Muted;if(!c)return null;const f={...lt(c.hsl),l:50},l=me(f),_={...f,s:2.91,l:20.2},p={...me(_),l:86.47},m={..._,l:_.l*1.02},h=me(m),v={..._,l:_.l*.98},y=me(v);return{artVars:`
        --art-color: ${A(lt(c.hsl))};
        --art-on-art-color: ${c.titleTextColor};
        --art-primary-color: ${A(f)};
        --art-on-primary-color: ${A(l)};
        --art-surface-color: ${A(_)};
        --art-on-surface-color: ${A(p)};
        --art-surface-higher-color: ${A(m)};
        --art-on-surface-higher-color: ${A(h)};
        --art-surface-lower-color: ${A(v)};
        --art-on-surface-lower-color: ${A(y)};
      `,haVars:`
        --primary-color: ${A(f)};
        --ha-card-background: ${A(_)};
        --card-background-color: ${A(m)};
        --primary-text-color: ${A(p)};
        --secondary-text-color: ${A({...p,l:p.l*.9})};
        --icon-primary-color: ${A(p)};
        --divider-color: ${A({..._,l:25})};
        --clear-background-color: ${A({..._,l:0})};
        --secondary-background-color: ${A({...p,l:19})};
      `}},[r,o]);return G(()=>({artVars:o?d==null?void 0:d.artVars:s==null?void 0:s.artVars,haVars:o?d==null?void 0:d.haVars:s==null?void 0:s.haVars}),[d,s])}const lt=e=>{const t=Math.round(e[0]*360),r=Math.round(e[1]*100),n=Math.round(e[2]*100);return{h:t,s:r,l:n}},me=({h:e,s:t,l:r})=>({h:(e+180)%360,s:t,l:r}),A=({h:e,s:t,l:r})=>`hsl(${e}deg ${t}% ${r}%)`,Ba="ontouchstart"in window,Ua=x.div`
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
`;function ja({onTap:e,onLongPress:t,onDoubleTap:r}){const n=ue(null),o=ue(0),i=ue(null),a=ue(null),[s,d]=j(!1),[c,f]=j(!1),[l,_]=j({x:0,y:0}),p=k(()=>{i.current&&clearTimeout(i.current),a.current&&clearTimeout(a.current),f(!1),n.current=null,o.current=0},[]),m=()=>c?u(Ua,{style:{left:`${l.x}px`,top:`${l.y}px`}}):null,h=k(()=>{const P=Date.now();return!!(n.current&&P-n.current>=500)},[]),v=k((P,T)=>{_({x:P,y:T})},[]),y=k((P,T)=>{n.current=Date.now(),v(P,T),a.current=setTimeout(()=>{f(!0)},500)},[v]),b=k((P,T)=>{c&&v(P,T)},[c,v]),S=k(()=>{i.current&&clearTimeout(i.current),a.current&&(clearTimeout(a.current),f(!1)),o.current+=1,i.current=setTimeout(async()=>{d(!0);try{o.current>1?await(r==null?void 0:r()):h()?await(t==null?void 0:t()):await(e==null?void 0:e())}catch(P){console.error("Error in button callback:",P)}d(!1),n.current=null,o.current=0},250)},[h,r,t,e]),E=k(P=>{y(P.clientX,P.clientY)},[y]),g=k(P=>{b(P.clientX,P.clientY)},[b]),w=k(P=>{if(P.touches.length>0){const T=P.touches[0];y(T.clientX,T.clientY)}},[y]),C=k(P=>{if(P.touches.length>0){const T=P.touches[0];b(T.clientX,T.clientY)}},[b]);return G(()=>({...Ba?{onTouchStart:w,onTouchMove:C,onTouchEnd:S,onTouchCancel:p,loading:s}:{onMouseDown:E,onMouseMove:g,onMouseUp:S,onMouseOut:p,loading:s},renderLongPressIndicator:m}),[E,g,S,p,w,C,m])}function sr(e){const{attributes:{shuffle:t,repeat:r,source:n,supported_features:o}}=e,i=(o|16)===o,a=(o|32)===o,s=t!==void 0&&!["optical","aux"].includes(n==null?void 0:n.toLowerCase()),d=r!==void 0&&!["optical","aux"].includes(n==null?void 0:n.toLowerCase()),c=(o&4096)===4096||(o&16384)===16384;return G(()=>({supportPreviousTrack:i,supportNextTrack:a,supportsShuffle:s,supportsRepeat:d,supportsTogglePlayPause:c}),[i,a,s,d,c])}const Ga=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`,Wa=()=>{const{hass:e,config:t}=N(D),r=e.states[t.entity_id],{attributes:{shuffle:n,repeat:o}}=r,i=r.state==="playing",{supportPreviousTrack:a,supportNextTrack:s,supportsShuffle:d,supportsRepeat:c,supportsTogglePlayPause:f}=sr(r),l=k(()=>{e.callService("media_player","media_play_pause",{entity_id:t.entity_id})},[]),_=k(()=>{e.callService("media_player","media_next_track",{entity_id:t.entity_id})},[]),p=k(()=>{e.callService("media_player","media_previous_track",{entity_id:t.entity_id})},[]),m=k(()=>{e.callService("media_player","shuffle_set",{entity_id:t.entity_id,shuffle:!n})},[n]),h=k(()=>{const v=o==="off"?"one":o==="one"?"all":"off";e.callService("media_player","repeat_set",{entity_id:t.entity_id,repeat:v})},[o]);return u(Ga,{children:[d&&u(H,{size:"small",onClick:m,icon:n?"mdi:shuffle-variant":"mdi:shuffle-disabled"}),a&&u(H,{size:"large",onClick:p,icon:"mdi:skip-previous"}),f&&u(H,{size:"x-large",onClick:l,icon:i?"mdi:pause-circle":"mdi:play-circle"}),s&&u(H,{size:"large",onClick:_,icon:"mdi:skip-next"}),c&&u(H,{size:"small",onClick:h,icon:o==="one"?"mdi:repeat-once":o==="all"?"mdi:repeat":"mdi:repeat-off"})]})},Ya=x.div`
  display: contents;

  > ha-slider {
    width: 100%;
    --_handle-height: ${e=>ro(e.thumbSize)} !important;
    --_handle-width: ${e=>ro(e.thumbSize)} !important;
    --_inactive-track-color: var(--divider-color, rgba(0, 0, 0, 0.1));
  }
`,ut=({min:e,max:t,step:r,value:n,thumbSize:o,onChange:i})=>u(Ya,{thumbSize:o,children:u("ha-slider",{min:e,max:t,step:r,value:n,onInput:a=>i(parseFloat(a.target.value))})}),ro=e=>{switch(e){case"xsmall":return"8px";case"small":return"12px";case"medium":return"14px";case"large":return"16px"}},qa=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-height: 36px;
  margin-top: auto;
`,no=x(H)`
  opacity: ${e=>e.muted?.8:1}; // reduce opacity if muted
`,Xa=()=>{var c,f;const{hass:e,config:t}=N(D),{entity_id:r}=t,n=e.states[r],o=((c=n.attributes)==null?void 0:c.volume_level)??0,i=((f=n.attributes)==null?void 0:f.is_volume_muted)??!1,a=k(l=>{e.callService("media_player","volume_set",{entity_id:r,volume_level:l})},[]),s=k(()=>{e.callService("media_player","volume_mute",{entity_id:r,is_volume_muted:!i})},[i]),d=G(()=>oo(o,i),[o,i]);return u(qa,{children:[u(no,{size:"small",onClick:s,icon:d}),u(ut,{min:0,max:1,step:.01,value:o,thumbSize:"large",onChange:a})]})},oo=(e,t)=>e===0||t?"mdi:volume-off":e<.5?"mdi:volume-medium":"mdi:volume-high",Ka=({onClick:e})=>{var d,c;const{hass:t,config:r}=N(D),{entity_id:n}=r,o=t.states[n],i=((d=o.attributes)==null?void 0:d.volume_level)??0,a=((c=o.attributes)==null?void 0:c.is_volume_muted)??!1,s=oo(i,a);return u(no,{size:"small",onClick:e,icon:s})},Ja=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Qa=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
  margin-right: 16px;
`,Za=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,es=x.div`
  font-size: 13px;
  flex: 1;
  ${e=>e.isMaster?"font-weight: 500;":""}
  color: var(--primary-text-color);
`,ts=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`,rs=x.div`
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
`,ns=x(nt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,os=()=>{var l,_;const{hass:e,config:t}=N(D),{entity_id:r,speaker_group:n}=t,[o,i]=j([]),a=(n==null?void 0:n.entity_id)||r,s=e.states[a],d=G(()=>{var p;return(p=n==null?void 0:n.entities)!=null&&p.length?n.entities.filter(m=>e.states[m]).map(m=>{var h,v,y,b;return{entity_id:m,name:e.states[m].attributes.friendly_name,volume:e.states[m].attributes.volume_level||0,muted:e.states[m].attributes.is_volume_muted||!1,isGrouped:((v=(h=s==null?void 0:s.attributes)==null?void 0:h.group_members)==null?void 0:v.includes(m))||!1,isMainSpeaker:((b=(y=s==null?void 0:s.attributes)==null?void 0:y.group_members)==null?void 0:b[0])===m||!1}}).sort((m,h)=>m.entity_id===a?-1:h.entity_id===a?1:m.name.localeCompare(h.name)):[]},[e.states,n]),c=k(async(p,m)=>{if(!o.includes(p)){i(h=>[...h,p]);try{const h=e.states[p];m?await e.callService("media_player","unjoin",{entity_id:p}):(h.state==="off"&&await e.callService("media_player","turn_on",{entity_id:p}),await e.callService("media_player","join",{entity_id:a,group_members:[p]}))}catch(h){console.error(h)}i(h=>h.filter(v=>v!==p))}},[a,o]),f=k((p,m)=>{e.callService("media_player","volume_set",{entity_id:p,volume_level:m})},[]);return u(Ja,{children:[((_=(l=s==null?void 0:s.attributes)==null?void 0:l.group_members)==null?void 0:_.length)>1&&u(U,{children:u(Qa,{children:d.filter(p=>p.isGrouped).map(p=>u(Za,{children:[u(H,{size:"x-small",onClick:()=>c(p.entity_id,p.isGrouped),icon:"mdi:link-variant-off"}),u(es,{isMaster:p.isMainSpeaker,children:[p.name," ",p.isMainSpeaker&&"(Master)"]}),p.isGrouped&&u(ts,{children:[u(ae,{size:"x-small",icon:"mdi:volume-high"}),u(ut,{min:0,max:1,step:.01,value:p.volume,thumbSize:"small",onChange:m=>f(p.entity_id,m)})]})]},p.entity_id))})}),u(rs,{children:d.filter(p=>!p.isGrouped).map(p=>u(ns,{loading:o.includes(p.entity_id),onClick:()=>c(p.entity_id,p.isGrouped),icon:p.isGrouped?"mdi:close":"mdi:plus",iconPosition:"right",children:p.name},p.entity_id))})]})},is=x.div`
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
`,as=x(nt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,ss=()=>{const{config:e}=N(D),{custom_buttons:t}=e;return u(is,{children:t.map((r,n)=>u(cs,{button:r},n))})},cs=({button:e})=>{const{hass:t,rootElement:r,config:n}=N(D),{icon:o,name:i,...a}=e,s=De({hass:t,rootElement:r,actionConfig:{...a,entity:n.entity_id}});return u(as,{icon:o,...s,children:[!!i&&u("span",{children:i}),s.renderLongPressIndicator()]})},ls=x.div`
  background-color: var(--card-background-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 0px 80px var(--clear-background-color);
`,us=rt`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,ds=x.div`
  position: absolute;
  bottom: calc(100% + 12px);
  left: 0;
  width: 100%;
  background-color: var(--card-background-color);
  border-radius: 12px;
  box-sizing: border-box;
  animation: ${us} 0.3s ease forwards;
  box-shadow: 0 0px 80px var(--clear-background-color);
`,fs=x.div`
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
`,ps=x.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${e=>e.padding??"16px"};
`,ms=()=>{const{hass:e,config:t}=N(D),{entity_id:r,custom_buttons:n,speaker_group:o}=t,[i,a]=j(),s=k(c=>{a(i===c?void 0:c)},[i]),d=k(()=>{e.callService("media_player","toggle",{entity_id:r})},[r]);return u(ls,{children:[u(cr,{title:"Volume",isOpen:i==="volume",onClose:()=>a(void 0),children:u(Xa,{})}),u(cr,{title:"Speaker Grouping",isOpen:i==="speaker-grouping",onClose:()=>a(void 0),padding:"16px 0px 16px 0px",children:u(os,{})}),!!o&&u(H,{size:"small",icon:"mdi:speaker-multiple",onClick:()=>s("speaker-grouping")}),n==null?void 0:n.slice(0,2).map((c,f)=>u(hs,{button:c},f)),(n==null?void 0:n.length)>3&&u(U,{children:[u(H,{size:"small",icon:"mdi:dots-horizontal",onClick:()=>s("custom-buttons")}),u(cr,{title:"Shortcuts",isOpen:i==="custom-buttons",onClose:()=>a(void 0),padding:"16px 0px 16px 0px",children:u(ss,{})})]}),u(H,{size:"small",icon:"mdi:power",onClick:d}),u(Ka,{onClick:()=>s("volume")})]})},cr=({children:e,title:t,isOpen:r,padding:n,onClose:o})=>r?u(ds,{children:[u(fs,{children:[u("h4",{children:t}),u(H,{type:"button",size:"small",icon:"mdi:close",onClick:o})]}),u(ps,{padding:n,children:e})]}):null,hs=({button:e})=>{const{hass:t,rootElement:r,config:n}=N(D),{icon:o,name:i,...a}=e,s=De({hass:t,rootElement:r,actionConfig:{...a,entity:n.entity_id}});return u(H,{icon:e.icon??"mdi:dots-vertical",size:"small",...s})},_s=x.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
        `;default:return""}}}

  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`,gs=x.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-around;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  ${e=>{switch(e==null?void 0:e.mode){case"panel":return`
          width: 90%;
          max-width: 400px;
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
`,io=({className:e})=>{const{config:t,hass:r}=N(D),{mode:n,entity_id:o,use_art_colors:i=!0}=t,a=r.states[o],{artVars:s,haVars:d}=to(a),c=()=>u(_s,{className:e,mode:n,$artColorVars:s,$haColorVars:d,$useArtColors:i,children:u(gs,{mode:n,children:[u(la,{}),u(vs,{children:[u(ma,{}),u(ya,{}),u(Wa,{}),u(ms,{})]})]})});return n==="card"?u("ha-card",{children:c()}):c()},ys=x.div`
  border: 1px solid var(--divider-color, #e0e0e0);
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;
  background-color: var(--card-background-color, #fff);
`,bs=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: ${e=>e.$expanded?"1px solid var(--divider-color, #e0e0e0)":"none"};
`,xs=x.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`,ws=x.div`
  padding: 16px;
  display: ${e=>e.$expanded?"block":"none"};
`,ve=({title:e,children:t,initiallyExpanded:r=!1})=>{const[n,o]=j(r);return u(ys,{children:[u(bs,{$expanded:n,children:[u(xs,{children:e}),u(H,{onClick:()=>o(!n),icon:n?"mdi:chevron-up":"mdi:chevron-down",type:"button",size:"small"})]}),u(ws,{$expanded:n,children:t})]})},Cs=({config:e,rootElement:t,hass:r})=>{(!e||!r||!t)&&console.error("No config or hass");const n=k(f=>{const l=new Event("config-changed",{bubbles:!0,composed:!0});l.detail={config:f},t.dispatchEvent(l)},[t]),o=k((f,l)=>{if(!e)return;const _=f.split("."),p={...e};let m=p;for(let h=0;h<_.length-1;h++)m[_[h]]||(m[_[h]]={}),m=m[_[h]];m[_[_.length-1]]=l,n(p)},[e,n]),i=k(()=>{const f=[...e.custom_buttons||[],{icon:"mdi:paper-roll",name:"New Button",tap_action:{action:"toggle"}}];n({...e,custom_buttons:f})},[e,n]),a=k(f=>{const l=[...e.custom_buttons||[]];l.splice(f,1),n({...e,custom_buttons:l})},[e,n]),s=k((f,l,_)=>{const p=[...e.custom_buttons||[]];p[f]={...p[f],[l]:_},n({...e,custom_buttons:p})},[e,n]),d=k((f,l)=>{const _=[...e.custom_buttons||[]];_[f]={..._[f],...l},n({...e,custom_buttons:_})},[e,n]);if(!e||!r)return null;const c={...e,use_art_colors:e.use_art_colors??!0,speaker_group:e.speaker_group||{entity_id:"",entities:[]},custom_buttons:e.custom_buttons||[]};return u("form",{children:[u(K,{children:u($e,{hass:r,value:c.entity_id,onChange:f=>o("entity_id",f),label:"Media Player Entity",domains:["media_player"],required:!0})}),u(K,{children:u(Jt,{children:[u(Zt,{type:"checkbox",id:"use_art_colors",checked:c.use_art_colors,onChange:f=>o("use_art_colors",f.target.checked)}),u(Qt,{htmlFor:"use_art_colors",children:"Use album art colors"})]})}),u(ve,{title:"Display Mode",children:u(Ji,{options:[{name:"Panel",value:"panel"},{name:"Card",value:"card"},{name:"In Card",value:"in-card"}],onSelected:f=>o("mode",f),selected:e.mode||"panel"})}),u(K,{children:u(ve,{title:"Interactions",children:u(ot,{hass:r,value:c.action||{},onChange:f=>o("action",f)})})}),u(K,{children:u(ve,{title:"Speaker Group Configuration (optional)",children:[u(K,{children:u($e,{hass:r,value:c.speaker_group.entity_id,onChange:f=>o("speaker_group.entity_id",f),label:"Main Speaker Entity ID (Optional)",domains:["media_player"]})}),u(it,{children:"Select Speakers (including main speaker)"}),u(K,{children:u(Wn,{hass:r,value:c.speaker_group.entities,onChange:f=>o("speaker_group.entities",f),label:"Speaker Group Entities (including main speaker)",domains:["media_player"]})})]})}),u(K,{children:u(Yn,{children:[c.custom_buttons.map((f,l)=>{const{name:_,icon:p,...m}=f;return u(ve,{title:`Button ${l} - ${f.name}`,children:[u(K,{children:[u(at,{children:u(st,{value:_||"",onChange:h=>s(l,"name",h),hass:r,label:"Name"})}),u(at,{children:u(st,{value:p||"",onChange:h=>s(l,"icon",h),hass:r,isIconInput:!0,label:"Icon"})}),u(it,{children:"Interactions"}),u(ot,{hass:r,value:m,onChange:h=>d(l,h)})]}),u(qn,{type:"button",onClick:()=>a(l),children:"Remove Button"})]},l)}),u(Kt,{type:"button",onClick:i,children:"Add Custom Button"})]})})]})},Ss=x.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  margin: 0px;
  max-height: ${e=>e.maxHeight};
  aspect-ratio: 1;
  flex-shrink: 0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`,ks=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,$s=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--card-background-color);
  background-color: var(--primary-text-color);
  opacity: 0.5;
`,Ps=x.div`
  position: absolute;
  bottom: 6px;
  right: 6px;
  --icon-primary-color: var(--art-on-art-color, --primary-text-color);
  opacity: 0.8;
`,Es=({maxHeight:e,renderLongPressIndicator:t,...r})=>{const{hass:n,config:o}=N(D),{entity_id:i}=o,a=n.states[i],{media_title:s,media_artist:d,entity_picture:c,source:f}=a.attributes,l=a.state;return u(Ss,{maxHeight:e,...r,children:[c?u(U,{children:[u(ks,{src:c,alt:`${s} by ${d}`}),u(Ps,{children:u(ae,{size:"xx-small",icon:ao({source:f,state:l})})})]}):u($s,{children:u(ae,{size:"x-large",icon:ao({source:f,state:l})})}),!!t&&t()]})},ao=({source:e,state:t})=>{if(t==="off")return"mdi:power-off";switch(e==null?void 0:e.toLowerCase()){case"spotify":return"mdi:spotify";case"airplay":return"mdi:airplay";case"bluetooth":return"mdi:bluetooth";case"net radio":return"mdi:radio";case"server":return"mdi:server";case"usb":return"mdi:usb";case"aux":return"mdi:audio-input-rca";case"hdmi":return"mdi:hdmi-port";case"tv":return"mdi:television";case"tuner":return"mdi:radio-tower";case"optical":return"mdi:audio-input-stereo-minijack";default:return"mdi:music"}},Ms=x.div`
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
`,Ts=x(nt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,As=()=>{const{config:e}=N(D),{custom_buttons:t}=e;return u(Ms,{children:t.map((r,n)=>u(so,{button:r},n))})},so=({button:e,type:t="chip"})=>{const{hass:r,rootElement:n,config:o}=N(D),{icon:i,name:a,...s}=e,d=De({hass:r,rootElement:n,actionConfig:{...s,entity:o.entity_id}});return t==="icon-button"?u(H,{icon:e.icon??"mdi:dots-vertical",size:"x-small",...d}):u(Ts,{icon:i,...d,children:[!!a&&u("span",{children:a}),d.renderLongPressIndicator()]})};var co,lo;(function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"})(co||(co={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(lo||(lo={}));var Rs=function(e,t,r,n){n=n||{},r=r??{};var o=new Event(t,{bubbles:n.bubbles===void 0||n.bubbles,cancelable:!!n.cancelable,composed:n.composed===void 0||n.composed});return o.detail=r,e.dispatchEvent(o),o};const Ls=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,uo=x.span`
  font-size: 11px;
  color: var(--secondary-text-color, #888);
  opacity: 0.8;
  font-style: italic;
`,Ns=()=>{var l,_;const{hass:e,config:t,rootElement:r}=N(D),{entity_id:n,speaker_group:o}=t,{friendly_name:i,icon:a,device_class:s}=e.states[n].attributes,d=(_=(l=e.states[(o==null?void 0:o.entity_id)??n])==null?void 0:l.attributes)==null?void 0:_.group_members,c=fo({icon:a,deviceClass:s}),f=k(()=>{Rs(r,"hass-more-info",{entityId:n})},[]);return u(Ls,{children:[u(H,{icon:c,onClick:f,size:"xx-small"}),u(uo,{children:i}),d&&d.length>1&&u(uo,{children:["+",d.length-1]})]})},fo=({icon:e,deviceClass:t})=>{if(e)return e;switch(t){case"speaker":return"mdi:speaker";case"receiver":return"mdi:audio-video";default:return"mdi:speaker"}},Os=rt`
  from {
    transform: translateY(15%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,Is=x.div`
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
`,zs=x.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`,Vs=x.div`
  animation: ${Os} 0.55s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  max-height: 98vh;
  height: fit-content;
  width: 424px;
  max-width: 98vw;
  margin-botton: 16px;
  background-color: var(--ha-card-background, #fff);
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
`,Ds=x.div`
  display: grid;
  height: 100%;
`,po=58,Fs=x.div`
  display: flex;
  height: ${po}px;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  background-color: var(--ha-card-background, #fff);
  gap: 8px;
`,Hs=x.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--primary-text-color, #212121);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: auto;
`,Bs=x(io)`
  max-height: calc(98vh - ${po}px);
  max-width: 98vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Us=({visible:e,setVisible:t})=>{var m,h;const{hass:r,config:n,rootElement:o}=N(D),{entity_id:i,speaker_group:a}=n,{friendly_name:s,icon:d,device_class:c}=r.states[i].attributes,f=(h=(m=r.states[(a==null?void 0:a.entity_id)??i])==null?void 0:m.attributes)==null?void 0:h.group_members,l=fo({icon:d,deviceClass:c}),_=G(()=>{const{tap_opens_popup:v,...y}=n;return{...y,mode:"popup"}},[n]),p=De({rootElement:o,hass:r,actionConfig:{tap_action:{action:"more-info"},entity:i}});return e?u(Is,{children:[u(zs,{onClick:()=>t(!1)}),u(Vs,{children:[u(Fs,{children:[u(ae,{size:"small",icon:l}),u(Hs,{children:[s,(f==null?void 0:f.length)>1&&u("span",{children:[" +",f.length-1]})]}),u(H,{size:"small",...p,icon:"mdi:dots-vertical"}),u(H,{icon:"mdi:close",size:"small",onClick:()=>t(!1)})]}),u(Ds,{children:u(Xn,{rootElement:o,hass:r,config:_,children:u(Bs,{})})})]})]}):null},js=x.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-text-color, #333);
`,Gs=x.p`
  margin: 0px;
  font-size: 14px;
  color: var(--secondary-text-color, #666);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ws=()=>{const{hass:e,config:t}=N(D),{entity_id:r}=t,{media_title:n,media_artist:o,media_album_name:i,source:a,friendly_name:s}=e.states[r].attributes,d=n??a??s,c=`${i!==n?`${i} - `:""}${o}`;return u(U,{children:[!!d&&u(js,{children:d}),(!!i||!!o)&&u(Gs,{children:c})]})},Ys=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: auto;
  height: 36px; // fixed to prevent jumping
  margin-left: -4px; // compensate for icon button padding
`,He=x(H)`
  opacity: ${e=>e.muted?.8:1}; // reduce opacity if muted
`,qs=()=>{const{hass:e,config:t}=N(D),{entity_id:r}=t,n=e.states[r],{attributes:{shuffle:o,repeat:i}}=n,a=n.state==="playing",{supportPreviousTrack:s,supportNextTrack:d,supportsShuffle:c,supportsRepeat:f,supportsTogglePlayPause:l}=sr(n),_=k(()=>{e.callService("media_player","media_play_pause",{entity_id:t.entity_id})},[]),p=k(()=>{e.callService("media_player","media_next_track",{entity_id:t.entity_id})},[]),m=k(()=>{e.callService("media_player","media_previous_track",{entity_id:t.entity_id})},[]),h=k(()=>{e.callService("media_player","shuffle_set",{entity_id:t.entity_id,shuffle:!o})},[o]),v=k(()=>{const y=i==="off"?"one":i==="one"?"all":"off";e.callService("media_player","repeat_set",{entity_id:t.entity_id,repeat:y})},[i]);return u(Ys,{children:[!!c&&u(He,{size:"x-small",onClick:h,muted:!o,icon:o?"mdi:shuffle-variant":"mdi:shuffle-disabled"}),!!s&&u(He,{size:"small",onClick:m,icon:"mdi:skip-previous"}),l&&u(He,{size:"medium",onClick:_,icon:a?"mdi:pause-circle":"mdi:play-circle"}),!!d&&u(He,{size:"small",onClick:p,icon:"mdi:skip-next"}),!!f&&u(He,{size:"x-small",onClick:v,muted:i==="off",icon:i==="one"?"mdi:repeat-once":i==="all"?"mdi:repeat":"mdi:repeat-off"})]})},Xs=x.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 16px;
  border-top: 0.5px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  gap: 12px;
`,mo=x.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-text-color);
  margin-top: 8px;
  margin-right: 16px;
  margin-left: 16px;
`,Ks=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
  margin-right: 16px;
`,Js=x.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Qs=x.div`
  font-size: 13px;
  flex: 1;
  ${e=>e.isMaster?"font-weight: 500;":""}
  color: var(--primary-text-color);
`,Zs=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
`,ec=x.div`
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
`,tc=x(nt)`
  &:first-child {
    margin-left: 16px;
  }
  &:last-child {
    margin-right: 16px;
  }
`,rc=()=>{var l,_;const{hass:e,config:t}=N(D),{entity_id:r,speaker_group:n}=t,[o,i]=j([]),a=(n==null?void 0:n.entity_id)||r,s=e.states[a],d=G(()=>{var p;return(p=n==null?void 0:n.entities)!=null&&p.length?n.entities.filter(m=>e.states[m]).map(m=>{var h,v,y,b;return{entity_id:m,name:e.states[m].attributes.friendly_name,volume:e.states[m].attributes.volume_level||0,muted:e.states[m].attributes.is_volume_muted||!1,isGrouped:((v=(h=s==null?void 0:s.attributes)==null?void 0:h.group_members)==null?void 0:v.includes(m))||!1,isMainSpeaker:((b=(y=s==null?void 0:s.attributes)==null?void 0:y.group_members)==null?void 0:b[0])===m||!1}}).sort((m,h)=>m.entity_id===a?-1:h.entity_id===a?1:m.name.localeCompare(h.name)):[]},[e.states,n]),c=k(async(p,m)=>{if(!o.includes(p)){i(h=>[...h,p]);try{const h=e.states[p];m?await e.callService("media_player","unjoin",{entity_id:p}):(h.state==="off"&&await e.callService("media_player","turn_on",{entity_id:p}),await e.callService("media_player","join",{entity_id:a,group_members:[p]}))}catch(h){console.error(h)}i(h=>h.filter(v=>v!==p))}},[a,o]),f=k((p,m)=>{e.callService("media_player","volume_set",{entity_id:p,volume_level:m})},[]);return u(Xs,{children:[((_=(l=s==null?void 0:s.attributes)==null?void 0:l.group_members)==null?void 0:_.length)>1&&u(U,{children:[u(mo,{children:"Grouped Speakers"}),u(Ks,{children:d.filter(p=>p.isGrouped).map(p=>u(Js,{children:[u(H,{size:"x-small",onClick:()=>c(p.entity_id,p.isGrouped),icon:"mdi:link-variant-off"}),u(Qs,{isMaster:p.isMainSpeaker,children:[p.name," ",p.isMainSpeaker&&"(Master)"]}),p.isGrouped&&u(Zs,{children:[u(ae,{size:"x-small",icon:"mdi:volume-high"}),u(ut,{min:0,max:1,step:.01,value:p.volume,thumbSize:"small",onChange:m=>f(p.entity_id,m)})]})]},p.entity_id))})]}),u(mo,{children:"Add speakers to group"}),u(ec,{children:d.filter(p=>!p.isGrouped).map(p=>u(tc,{loading:o.includes(p.entity_id),onClick:()=>c(p.entity_id,p.isGrouped),icon:p.isGrouped?"mdi:close":"mdi:plus",iconPosition:"right",children:p.name},p.entity_id))})]})},nc=x.div`
  display: flex;
  align-items: center;
  flex: 1;
  transition: all 0.3s ease;
  max-height: 36px;
  margin-top: auto;
`,lr=x(H)`
  opacity: ${e=>e.muted?.8:1}; // reduce opacity if muted
`,oc=()=>{var c,f;const{hass:e,config:t}=N(D),{entity_id:r}=t,n=e.states[r],o=((c=n.attributes)==null?void 0:c.volume_level)??0,i=((f=n.attributes)==null?void 0:f.is_volume_muted)??!1,a=k(l=>{e.callService("media_player","volume_set",{entity_id:r,volume_level:l})},[]),s=k(()=>{e.callService("media_player","volume_mute",{entity_id:r,is_volume_muted:!i})},[i]),d=G(()=>ho(o,i),[o,i]);return u(nc,{children:[u(lr,{size:"small",onClick:s,icon:d}),u(ut,{min:0,max:1,step:.01,value:o,thumbSize:"small",onChange:a})]})},ho=(e,t)=>e===0||t?"mdi:volume-off":e<.5?"mdi:volume-medium":"mdi:volume-high",ic=({sliderVisible:e,setSliderVisible:t})=>{var c,f;const{hass:r,config:n}=N(D),{entity_id:o}=n,i=r.states[o],a=((c=i.attributes)==null?void 0:c.volume_level)??0,s=((f=i.attributes)==null?void 0:f.is_volume_muted)??!1,d=ho(a,s);return u(U,{children:e?u(lr,{size:"small",onClick:()=>t(!1),icon:"mdi:chevron-left"}):u(lr,{size:"small",onClick:()=>t(!0),icon:d})})},_o=x.div`
  border-radius: var(--ha-card-border-radius, 12px);
  overflow: hidden;
  ${e=>e.$artColorVars??""}
  ${e=>e.$useArtColors&&e.$haColorVars?e.$haColorVars:""}
`,ac=x.div`
  display: flex;
  gap: 14px;
  padding: 12px;
  opacity: ${e=>e.isOn?1:.7};
  transition: opacity 0.3s ease;
  position: relative;
`,sc=x.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 12px;
  overflow: hidden;
`,cc=x.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,lc=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  justify-content: space-between;
`,go=x.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
`,uc=()=>{const{rootElement:e,hass:t,config:r}=N(D),{entity_id:n,custom_buttons:o,action:i,tap_opens_popup:a,use_art_colors:s=!0}=r,d=o&&o.length>0,[c,f]=j(!1),[l,_]=j(!1),[p,m]=j(!1),h=t.states[n];if(!h)return u("ha-card",{children:u(_o,{children:u("div",{children:["Entity ",n," not found"]})})});const{artVars:v,haVars:y}=to(h),b=sr(h),S=!b.supportsTogglePlayPause&&!b.supportNextTrack&&!b.supportPreviousTrack&&!b.supportsShuffle&&!b.supportsRepeat,{state:E}=h,g=!["off","unavailable"].includes(E),w=r.speaker_group&&r.speaker_group.entities&&r.speaker_group.entities.length>0,C=()=>{f(!c)},[P,T]=j(!1),B=De({hass:t,rootElement:e,actionConfig:{...i??{tap_action:{action:"more-info"}},entity:r.entity_id},overrideCallback:a?{onTap:()=>{T(!0)}}:{}}),ee=k(()=>{t.callService("media_player","toggle",{entity_id:n})},[n]);return u(_o,{$artColorVars:v,$haColorVars:y,$useArtColors:s,children:u("ha-card",{children:[u(ac,{isOn:g,children:[u(Es,{maxHeight:"100px",...B}),u(sc,{children:[u(cc,{children:[u(Ws,{}),u(Ns,{}),p||S?u(oc,{}):u(qs,{})]}),u(lc,{children:[u(go,{children:[d&&u(U,{children:o.length===1?u(so,{button:o[0],type:"icon-button"}):u(H,{size:"x-small",onClick:()=>_(!l),icon:"mdi:dots-vertical"})}),w&&u(H,{size:"x-small",onClick:C,icon:"mdi:speaker-multiple"})]}),u(go,{children:[!!g&&!S&&u(ic,{sliderVisible:p,setSliderVisible:m}),(!g||S)&&u(H,{size:"small",onClick:ee,icon:"mdi:power"})]})]})]})]}),c&&w&&u(rc,{}),l&&u(As,{}),u(Us,{visible:P,setVisible:T})]})})},dc=({config:e,rootElement:t,hass:r})=>{(!e||!r||!t)&&console.error("No config or hass");const n=k(f=>{const l=new Event("config-changed",{bubbles:!0,composed:!0});l.detail={config:f},t.dispatchEvent(l)},[t]),o=k((f,l)=>{if(!e)return;const _=f.split("."),p={...e};let m=p;for(let h=0;h<_.length-1;h++)m[_[h]]||(m[_[h]]={}),m=m[_[h]];m[_[_.length-1]]=l,n(p)},[e,n]),i=k(()=>{const f=[...e.custom_buttons||[],{icon:"mdi:paper-roll",name:"New Button",tap_action:{action:"toggle"}}];n({...e,custom_buttons:f})},[e,n]),a=k(f=>{const l=[...e.custom_buttons||[]];l.splice(f,1),n({...e,custom_buttons:l})},[e,n]),s=k((f,l,_)=>{const p=[...e.custom_buttons||[]];p[f]={...p[f],[l]:_},n({...e,custom_buttons:p})},[e,n]),d=k((f,l)=>{const _=[...e.custom_buttons||[]];_[f]={..._[f],...l},n({...e,custom_buttons:_})},[e,n]);if(!e||!r)return null;const c={...e,use_art_colors:e.use_art_colors??!0,speaker_group:e.speaker_group||{entity_id:"",entities:[]},custom_buttons:e.custom_buttons||[]};return u("form",{children:[u(K,{children:u($e,{hass:r,value:c.entity_id,onChange:f=>o("entity_id",f),label:"Media Player Entity",domains:["media_player"],required:!0})}),u(K,{children:u(Jt,{children:[u(Zt,{type:"checkbox",id:"use_art_colors",checked:c.use_art_colors,onChange:f=>o("use_art_colors",f.target.checked)}),u(Qt,{htmlFor:"use_art_colors",children:"Use album art colors"})]})}),u(K,{children:u(ve,{title:"Interactions",children:[u(Jt,{children:[u(Zt,{type:"checkbox",id:"tap_opens_popup",checked:c.tap_opens_popup||!1,onChange:f=>o("tap_opens_popup",f.target.checked)}),u(Qt,{htmlFor:"tap_opens_popup",children:"Tap opens popup (this will override any setting under tap in action)"})]}),u(ot,{hass:r,value:c.action||{},onChange:f=>o("action",f)})]})}),u(K,{children:u(ve,{title:"Speaker Group Configuration (optional)",children:[u(K,{children:u($e,{hass:r,value:c.speaker_group.entity_id,onChange:f=>o("speaker_group.entity_id",f),label:"Main Speaker Entity ID (Optional)",domains:["media_player"]})}),u(it,{children:"Select Speakers (including main speaker)"}),u(K,{children:u(Wn,{hass:r,value:c.speaker_group.entities,onChange:f=>o("speaker_group.entities",f),label:"Speaker Group Entities (including main speaker)",domains:["media_player"]})})]})}),u(K,{children:u(Yn,{children:[c.custom_buttons.map((f,l)=>{const{name:_,icon:p,...m}=f;return u(ve,{title:`Button ${l} - ${f.name}`,children:[u(K,{children:[u(at,{children:u(st,{value:_||"",onChange:h=>s(l,"name",h),hass:r,label:"Name"})}),u(at,{children:u(st,{value:p||"",onChange:h=>s(l,"icon",h),hass:r,isIconInput:!0,label:"Icon"})}),u(it,{children:"Interactions"}),u(ot,{hass:r,value:m,onChange:h=>d(l,h)})]}),u(qn,{type:"button",onClick:()=>a(l),children:"Remove Button"})]},l)}),u(Kt,{type:"button",onClick:i,children:"Add Custom Button"})]})})]})};class fc extends tr{constructor(){super(...arguments),this.Card=oa}setConfig(t){if(!t.entity_id)throw new Error("You need to define an entity_id");if(!t.entities)throw new Error("You need to define entities");this.config=t}getCardSize(){return 1}getLayoutOptions(){return{grid_rows:1,grid_columns:6,grid_min_rows:1,grid_max_rows:1}}}customElements.define("mediocre-chip-media-player-group-card",fc);class pc extends Jn{constructor(){super(...arguments),this.Card=Cs,this.extraProps={isMassive:!0,className:void 0}}}customElements.define("mediocre-massive-media-player-card-editor",pc);class mc extends tr{constructor(){super(...arguments),this.Card=io}setConfig(t){if(!t.entity_id)throw new Error("You need to define an entity_id");this.config=t}static getConfigElement(){return document.createElement("mediocre-massive-media-player-card-editor")}static getStubConfig(t){return{entity_id:Object.keys(t.states).filter(o=>o.substr(0,o.indexOf("."))==="media_player")[0]??"",mode:"card"}}}customElements.define("mediocre-massive-media-player-card",mc),window.customCards=window.customCards||[],window.customCards.push({type:"mediocre-massive-media-player-card",name:"Mediocre Massive Media Player Card",preview:!0,description:"A media player card with player grouping support.",documentationURL:"https://github.com/antontanderup/mediocre-hass-media-player-cards"});class hc extends Jn{constructor(){super(...arguments),this.Card=dc}}customElements.define("mediocre-media-player-card-editor",hc);class _c extends tr{constructor(){super(...arguments),this.Card=uc}setConfig(t){if(!t.entity_id)throw new Error("You need to define an entity_id");this.config=t}static getConfigElement(){return document.createElement("mediocre-media-player-card-editor")}static getStubConfig(t){return{entity_id:Object.keys(t.states).filter(o=>o.substr(0,o.indexOf("."))==="media_player")[0]??""}}getCardSize(){return 2}getGridOptions(){return{columns:12,min_columns:8}}}customElements.define("mediocre-media-player-card",_c),window.customCards=window.customCards||[],window.customCards.push({type:"mediocre-media-player-card",name:"Mediocre Media Player Card",preview:!0,description:"A media player card with player grouping support.",documentationURL:"https://github.com/antontanderup/mediocre-hass-media-player-cards"})});
