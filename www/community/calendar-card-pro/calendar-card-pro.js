function e(e,t,n,i){var a,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,n,r):a(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,n=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class o{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(n&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}}const r=e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return new o("string"==typeof(n=t)?n:String(n),void 0,i);var n},s=n?e=>e:e=>e instanceof CSSStyleSheet?r(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis;let g;const f=m.trustedTypes,y=f?f.emptyScript:"",_=m.reactiveElementPolyfillSupportDevMode;{const e=m.litIssuedWarnings??=new Set;g=(t,n)=>{n+=` See https://lit.dev/msg/${t} for more information.`,e.has(n)||(console.warn(n),e.add(n))},g("dev-mode","Lit is in dev mode. Not recommended for production!"),m.ShadyDOM?.inUse&&void 0===_&&g("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const v=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},b=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class T extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this.__prepare(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol.for(`${String(e)} (@property() cache)`),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:a}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};if(null==i){if("value"in(c(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);g("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return i?.call(this)},set(t){const o=i?.call(this);a.call(this,t),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static __prepare(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e._initializers&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this.__attributeToPropertyMap=new Map;for(const[e,t]of this.elementProperties){const n=this.__attributeNameForProperty(e,t);void 0!==n&&this.__attributeToPropertyMap.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&g("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&g("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static __attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e=>this.enableUpdating=e)),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e=>e(this)))}addController(e){(this.__controllers??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(n)e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=n.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$attributeToProperty(e,n)}__propertyToAttribute(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor.__attributeNameForProperty(e,n);if(void 0!==i&&!0===n.reflect){const a=(void 0!==n.converter?.toAttribute?n.converter:w).toAttribute(t,n.type);this.constructor.enabledWarnings.includes("migration")&&void 0===a&&g("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this.__reflectingProperty=null}}_$attributeToProperty(e,t){const n=this.constructor,i=n.__attributeToPropertyMap.get(e);if(void 0!==i&&this.__reflectingProperty!==i){const e=n.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this.__reflectingProperty=i,this[i]=a.fromAttribute(t,e.type),this.__reflectingProperty=null}}requestUpdate(e,t,n){if(void 0!==e){e instanceof Event&&g("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),n??=this.constructor.getPropertyOptions(e);if(!(n.hasChanged??b)(this[e],t))return;this._$changeProperty(e,t,n)}!1===this.isUpdatePending&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,t,n){this._$changedProperties.has(e)||this._$changedProperties.set(e,t),!0===n.reflect&&this.__reflectingProperty!==e&&(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&"function"==typeof e?.then&&g("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){if(!this.isUpdatePending)return;var e;if(e={kind:"update"},m.emitLitDebugLogEvents&&m.dispatchEvent(new CustomEvent("lit-debug",{detail:e})),!this.hasUpdated){this.renderRoot??=this.createRenderRoot();{const e=[...this.constructor.elementProperties.keys()].filter((e=>this.hasOwnProperty(e)&&e in p(this)));if(e.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${e.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[e,t]of this.__instanceProperties)this[e]=t;this.__instanceProperties=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$changedProperties.has(t)||void 0===this[t]||this._$changeProperty(t,this[t],n)}let t=!1;const n=this._$changedProperties;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this.__controllers?.forEach((e=>e.hostUpdate?.())),this.update(n)):this.__markUpdated()}catch(e){throw t=!1,this.__markUpdated(),e}t&&this._$didUpdate(n)}willUpdate(e){}_$didUpdate(e){this.__controllers?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&g("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((e=>this.__propertyToAttribute(e,this[e]))),this.__markUpdated()}updated(e){}firstUpdated(e){}}T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[v("elementProperties")]=new Map,T[v("finalized")]=new Map,_?.({ReactiveElement:T});{T.enabledWarnings=["change-in-update","async-perform-update"];const e=function(e){e.hasOwnProperty(v("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};T.enableWarning=function(t){e(this),this.enabledWarnings.includes(t)||this.enabledWarnings.push(t)},T.disableWarning=function(t){e(this);const n=this.enabledWarnings.indexOf(t);n>=0&&this.enabledWarnings.splice(n,1)}}(m.reactiveElementVersions??=[]).push("2.0.4"),m.reactiveElementVersions.length>1&&g("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D=globalThis,S=e=>{D.emitLitDebugLogEvents&&D.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))};let k,x=0;D.litIssuedWarnings??=new Set,k=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",D.litIssuedWarnings.has(t)||(console.warn(t),D.litIssuedWarnings.add(t))},k("dev-mode","Lit is in dev mode. Not recommended for production!");const E=D.ShadyDOM?.inUse&&!0===D.ShadyDOM?.noPatch?D.ShadyDOM.wrap:e=>e,O=D.trustedTypes,C=O?O.createPolicy("lit-html",{createHTML:e=>e}):void 0,P=e=>e,M=(e,t,n)=>P,z=e=>{if(ae!==M)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");ae=e},N=()=>{ae=M},L=(e,t,n)=>ae(e,t,n),I="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+A,W=`<${j}>`,U=document,F=()=>U.createComment(""),V=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,J="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,K=/>/g,Y=new RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,G=/"/g,Z=/^(?:script|style|textarea|title)$/i,Q=(X=1,(e,...t)=>(e.some((e=>void 0===e))&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),t.some((e=>e?._$litStatic$))&&k("","Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\nPlease use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions"),{_$litType$:X,strings:e,values:t}));var X;const ee=Symbol.for("lit-noChange"),te=Symbol.for("lit-nothing"),ne=new WeakMap,ie=U.createTreeWalker(U,129);let ae=M;function oe(e,t){if(!R(e)||!e.hasOwnProperty("raw")){let e="invalid template strings array";throw e="\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g,"\n"),new Error(e)}return void 0!==C?C.createHTML(t):t}class re{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let a=0,o=0;const r=e.length-1,s=this.parts,[l,d]=((e,t)=>{const n=e.length-1,i=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=H;for(let t=0;t<n;t++){const n=e[t];let s,l,d=-1,c=0;for(;c<n.length&&(r.lastIndex=c,l=r.exec(n),null!==l);)if(c=r.lastIndex,r===H){if("!--"===l[1])r=B;else if(void 0!==l[1])r=K;else if(void 0!==l[2])Z.test(l[2])&&(a=new RegExp(`</${l[2]}`,"g")),r=Y;else if(void 0!==l[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else r===Y?">"===l[0]?(r=a??H,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?Y:'"'===l[3]?G:q):r===G||r===q?r=Y:r===B||r===K?r=H:(r=Y,a=void 0);console.assert(-1===d||r===Y||r===q||r===G,"unexpected parse state B");const h=r===Y&&e[t+1].startsWith("/>")?" ":"";o+=r===H?n+W:d>=0?(i.push(s),n.slice(0,d)+I+n.slice(d)+A+h):n+A+(-2===d?t:h)}return[oe(e,o+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=re.createElement(l,n),ie.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ie.nextNode())&&s.length<r;){if(1===i.nodeType){{const e=i.localName;if(/^(?:textarea|template)$/i.test(e)&&i.innerHTML.includes(A)){const t=`Expressions are not supported inside \`${e}\` elements. See https://lit.dev/msg/expression-in-${e} for more information.`;if("template"===e)throw new Error(t);k("",t)}}if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(I)){const t=d[o++],n=i.getAttribute(e).split(A),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:n,ctor:"."===r[1]?he:"?"===r[1]?ue:"@"===r[1]?pe:ce}),i.removeAttribute(e)}else e.startsWith(A)&&(s.push({type:6,index:a}),i.removeAttribute(e));if(Z.test(i.tagName)){const e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=O?O.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],F()),ie.nextNode(),s.push({type:2,index:++a});i.append(e[t],F())}}}else if(8===i.nodeType){if(i.data===j)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(A,e+1));)s.push({type:7,index:a}),e+=A.length-1}}a++}if(d.length!==o)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");S&&S({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const n=U.createElement("template");return n.innerHTML=e,n}}function se(e,t,n=e,i){if(t===ee)return t;let a=void 0!==i?n.__directives?.[i]:n.__directive;const o=V(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$notifyDirectiveConnectionChanged?.(!1),void 0===o?a=void 0:(a=new o(e),a._$initialize(e,n,i)),void 0!==i?(n.__directives??=[])[i]=a:n.__directive=a),void 0!==a&&(t=se(e,a._$resolve(e,t.values),a,i)),t}class le{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:t},parts:n}=this._$template,i=(e?.creationScope??U).importNode(t,!0);ie.currentNode=i;let a=ie.nextNode(),o=0,r=0,s=n[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new de(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new me(a,this,e)),this._$parts.push(t),s=n[++r]}o!==s?.index&&(a=ie.nextNode(),o++)}return ie.currentNode=U,i}_update(e){let t=0;for(const n of this._$parts)void 0!==n&&(S&&S({kind:"set part",part:n,value:e[t],valueIndex:t,values:e,templateInstance:this}),void 0!==n.strings?(n._$setValue(e,n,t),t+=n.strings.length-2):n._$setValue(e[t])),t++}}let de=class e{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,n,i){this.type=2,this._$committedValue=te,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=n,this.options=i,this.__isConnected=i?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=E(this._$startNode).parentNode;const t=this._$parent;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=se(this,e,t),V(e))e===te||null==e||""===e?(this._$committedValue!==te&&(S&&S({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=te):e!==this._$committedValue&&e!==ee&&this._commitText(e);else if(void 0!==e._$litType$)this._commitTemplateResult(e);else if(void 0!==e.nodeType){if(this.options?.host===e)return this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),void console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");this._commitNode(e)}else(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this._commitIterable(e):this._commitText(e)}_insert(e){return E(E(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),ae!==M){const e=this._$startNode.parentNode?.nodeName;if("STYLE"===e||"SCRIPT"===e){let t="Forbidden";throw t="STYLE"===e?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(t)}}S&&S({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==te&&V(this._$committedValue)){const t=E(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=L(t,"data","property")),e=this._textSanitizer(e),S&&S({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=U.createTextNode("");this._commitNode(t),void 0===this._textSanitizer&&(this._textSanitizer=L(t,"data","property")),e=this._textSanitizer(e),S&&S({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){const{values:t,_$litType$:n}=e,i="number"==typeof n?this._$getTemplate(e):(void 0===n.el&&(n.el=re.createElement(oe(n.h,n.h[0]),this.options)),n);if(this._$committedValue?._$template===i)S&&S({kind:"template updating",template:i,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{const e=new le(i,this),n=e._clone(this.options);S&&S({kind:"template instantiated",template:i,instance:e,parts:e._$parts,options:this.options,fragment:n,values:t}),e._update(t),S&&S({kind:"template instantiated and updated",template:i,instance:e,parts:e._$parts,options:this.options,fragment:n,values:t}),this._commitNode(n),this._$committedValue=e}}_$getTemplate(e){let t=ne.get(e.strings);return void 0===t&&ne.set(e.strings,t=new re(e)),t}_commitIterable(t){R(this._$committedValue)||(this._$committedValue=[],this._$clear());const n=this._$committedValue;let i,a=0;for(const o of t)a===n.length?n.push(i=new e(this._insert(F()),this._insert(F()),this,this.options)):i=n[a],i._$setValue(o),a++;a<n.length&&(this._$clear(i&&E(i._$endNode).nextSibling,a),n.length=a)}_$clear(e=E(this._$startNode).nextSibling,t){for(this._$notifyConnectionChanged?.(!1,!0,t);e&&e!==this._$endNode;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=e,this._$notifyConnectionChanged?.(e)}};class ce{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,n,i,a){this.type=1,this._$committedValue=te,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=i,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$committedValue=new Array(n.length-1).fill(new String),this.strings=n):this._$committedValue=te,this._sanitizer=void 0}_$setValue(e,t=this,n,i){const a=this.strings;let o=!1;if(void 0===a)e=se(this,e,t,0),o=!V(e)||e!==this._$committedValue&&e!==ee,o&&(this._$committedValue=e);else{const i=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=se(this,i[n+r],t,r),s===ee&&(s=this._$committedValue[r]),o||=!V(s)||s!==this._$committedValue[r],s===te?e=te:e!==te&&(e+=(s??"")+a[r+1]),this._$committedValue[r]=s}o&&!i&&this._commitValue(e)}_commitValue(e){e===te?E(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=ae(this.element,this.name,"attribute")),e=this._sanitizer(e??""),S&&S({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),E(this.element).setAttribute(this.name,e??""))}}class he extends ce{constructor(){super(...arguments),this.type=3}_commitValue(e){void 0===this._sanitizer&&(this._sanitizer=ae(this.element,this.name,"property")),e=this._sanitizer(e),S&&S({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===te?void 0:e}}class ue extends ce{constructor(){super(...arguments),this.type=4}_commitValue(e){S&&S({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!e||e===te),options:this.options}),E(this.element).toggleAttribute(this.name,!!e&&e!==te)}}class pe extends ce{constructor(e,t,n,i,a){if(super(e,t,n,i,a),this.type=5,void 0!==this.strings)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if((e=se(this,e,t,0)??te)===ee)return;const n=this._$committedValue,i=e===te&&n!==te||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==te&&(n===te||i);S&&S({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:i,addListener:a,oldListener:n}),i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){"function"==typeof this._$committedValue?this._$committedValue.call(this.options?.host??this.element,e):this._$committedValue.handleEvent(e)}}class me{constructor(e,t,n){this.element=e,this.type=6,this._$disconnectableChildren=void 0,this._$parent=t,this.options=n}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){S&&S({kind:"commit to element binding",element:this.element,value:e,options:this.options}),se(this,e)}}const ge={_ChildPart:de},fe=D.litHtmlPolyfillSupportDevMode;fe?.(re,de),(D.litHtmlVersions??=[]).push("3.2.1"),D.litHtmlVersions.length>1&&k("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const ye=(e,t,n)=>{if(null==t)throw new TypeError(`The container to render into may not be ${t}`);const i=x++,a=n?.renderBefore??t;let o=a._$litPart$;if(S&&S({kind:"begin render",id:i,value:e,container:t,options:n,part:o}),void 0===o){const e=n?.renderBefore??null;a._$litPart$=o=new de(t.insertBefore(F(),e),e,void 0,n??{})}return o._$setValue(e),S&&S({kind:"end render",id:i,value:e,container:t,options:n,part:o}),o};ye.setSanitizer=z,ye.createSanitizer=L,ye._testOnlyClearSanitizerFactoryDoNotCallOrElse=N;let _e;{const e=globalThis.litIssuedWarnings??=new Set;_e=(t,n)=>{n+=` See https://lit.dev/msg/${t} for more information.`,e.has(n)||(console.warn(n),e.add(n))}}class ve extends T{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return ee}}var we;ve._$litElement$=!0,ve[(we="finalized",we)]=!0,globalThis.litElementHydrateSupport?.({LitElement:ve});const be=globalThis.litElementPolyfillSupportDevMode;be?.({LitElement:ve}),(globalThis.litElementVersions??=[]).push("4.1.1"),globalThis.litElementVersions.length>1&&_e("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let $e;{const e=globalThis.litIssuedWarnings??=new Set;$e=(t,n)=>{n+=` See https://lit.dev/msg/${t} for more information.`,e.has(n)||(console.warn(n),e.add(n))}}const Te={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:b},De=(e=Te,t,n)=>{const{kind:i,metadata:a}=n;null==a&&$e("missing-class-metadata",`The class ${t} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(n.name,e),"accessor"===i){const{name:i}=n;return{set(n){const a=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,a,e)},init(t){return void 0!==t&&this._$changeProperty(i,void 0,e),t}}}if("setter"===i){const{name:i}=n;return function(n){const a=this[i];t.call(this,n),this.requestUpdate(i,a,e)}}throw new Error(`Unsupported decorator location: ${i}`)};function Se(e){return(t,n)=>"object"==typeof n?De(e,t,n):((e,t,n)=>{const i=t.hasOwnProperty(n);return t.constructor.createProperty(n,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litIssuedWarnings??=new Set;const ke="2.0.0",xe=30,Ee=5,Oe="cache_data_",Ce=0,Pe="📅 Calendar Card Pro",Me=500,ze=200,Ne=300,Le=3e5,Ie=.2,Ae={TOUCH_SIZE:100,POINTER_SIZE:50};let je=!1;var We;!function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(We||(We={}));let Ue=Ce;const Fe={title:["background: #424242","color: white","display: inline-block","line-height: 20px","text-align: center","border-radius: 20px 0 0 20px","font-size: 12px","font-weight: bold","padding: 4px 8px 4px 12px","margin: 5px 0"].join(";"),version:["background: #4fc3f7","color: white","display: inline-block","line-height: 20px","text-align: center","border-radius: 0 20px 20px 0","font-size: 12px","font-weight: bold","padding: 4px 12px 4px 8px","margin: 5px 0"].join(";"),prefix:["color: #4fc3f7","font-weight: bold"].join(";"),error:["color: #f44336","font-weight: bold"].join(";"),warn:["color: #ff9800","font-weight: bold"].join(";")};function Ve(e){!function(e){if(je)return;console.groupCollapsed(`%c${Pe}%cv${e} `,Fe.title,Fe.version),console.log("%c Description: %c A calendar card that supports multiple calendars with individual styling. ","font-weight: bold","font-weight: normal"),console.log("%c GitHub: %c https://github.com/alexpfau/calendar-card-pro ","font-weight: bold","font-weight: normal"),console.groupEnd(),je=!0}(e)}function Re(e,t,...n){if(Ue<We.ERROR)return;const i=function(e){if(null==e)return;if("string"==typeof e)return e;if("object"==typeof e)try{return Object.assign({},e)}catch(t){try{return{value:JSON.stringify(e)}}catch(t){return{value:String(e)}}}return String(e)}(t);if(e instanceof Error){const t=e.message||"Unknown error",a="string"==typeof i?` during ${i}`:"",[o,r]=Ye(`Error${a}: ${t}`,Fe.error);console.error(o,r),e.stack&&console.error(e.stack),i&&"object"==typeof i&&console.error("Context:",Object.assign(Object.assign({},i),{timestamp:(new Date).toISOString()})),n.length>0&&console.error("Additional data:",...n)}else if("string"==typeof e){const t="string"==typeof i?` during ${i}`:"",[a,o]=Ye(`${e}${t}`,Fe.error);i&&"object"==typeof i?console.error(a,o,Object.assign({context:Object.assign(Object.assign({},i),{timestamp:(new Date).toISOString()})},n.length>0?{additionalData:n}:{})):n.length>0?console.error(a,o,...n):console.error(a,o)}else{const t="string"==typeof i?` during ${i}`:"",[a,o]=Ye(`Unknown error${t}:`,Fe.error);console.error(a,o,e),i&&"object"==typeof i&&console.error("Context:",Object.assign(Object.assign({},i),{timestamp:(new Date).toISOString()})),n.length>0&&console.error("Additional data:",...n)}}function Je(e,...t){Ke(We.WARN,e,Fe.warn,console.warn,...t)}function He(e,...t){Ke(We.INFO,e,Fe.prefix,console.log,...t)}function Be(e,...t){Ke(We.DEBUG,e,Fe.prefix,console.log,...t)}function Ke(e,t,n,i,...a){if(Ue<e)return;const[o,r]=Ye(t,n);a.length>0?i(o,r,...a):i(o,r)}function Ye(e,t){return[`%c[${Pe}] ${e}`,t]}const qe={entities:[],start_date:"",days_to_show:3,max_events_to_show:void 0,show_empty_days:!1,language:"",title:"",title_font_size:"",title_color:"",background_color:"var(--ha-card-background)",day_spacing:"5px",event_spacing:"4px",additional_card_spacing:"0px",max_height:"none",vertical_line_width:"2px",vertical_line_color:"#03a9f4",horizontal_line_width:"0px",horizontal_line_color:"var(--secondary-text-color)",date_vertical_alignment:"middle",weekday_font_size:"14px",weekday_color:"var(--primary-text-color)",day_font_size:"26px",day_color:"var(--primary-text-color)",show_month:!0,month_font_size:"12px",month_color:"var(--primary-text-color)",event_background_opacity:0,show_past_events:!1,event_font_size:"14px",event_color:"var(--primary-text-color)",show_time:!0,show_single_allday_time:!0,time_24h:!0,show_end_time:!0,time_font_size:"12px",time_color:"var(--secondary-text-color)",time_icon_size:"14px",show_location:!0,remove_location_country:!0,location_font_size:"12px",location_color:"var(--secondary-text-color)",location_icon_size:"14px",tap_action:{action:"none"},hold_action:{action:"none"},refresh_interval:xe,refresh_on_navigate:!0};var Ge={daysOfWeek:["Ne","Po","Út","St","Čt","Pá","So"],fullDaysOfWeek:["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"],months:["Led","Úno","Bře","Dub","Kvě","Čvn","Čvc","Srp","Zář","Říj","Lis","Pro"],allDay:"celý den",multiDay:"do",at:"v",endsToday:"končí dnes",endsTomorrow:"končí zítra",noEvents:"Žádné nadcházející události",loading:"Načítání událostí z kalendáře...",error:"Chyba: Entita kalendáře nebyla nalezena nebo je nesprávně nakonfigurována"},Ze={daysOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],fullDaysOfWeek:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],allDay:"hele dagen",multiDay:"indtil",at:"kl.",endsToday:"slutter i dag",endsTomorrow:"slutter i morgen",noEvents:"Ingen kommende begivenheder",loading:"Indlæser kalenderbegivenheder...",error:"Fejl: Kalenderenheden blev ikke fundet eller er ikke konfigureret korrekt"},Qe={daysOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"],fullDaysOfWeek:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],allDay:"ganztägig",multiDay:"bis",at:"um",endsToday:"endet heute",endsTomorrow:"endet morgen",noEvents:"Keine anstehenden Termine",loading:"Kalendereinträge werden geladen...",error:"Fehler: Kalender-Entity nicht gefunden oder falsch konfiguriert"},Xe={daysOfWeek:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],fullDaysOfWeek:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],months:["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],allDay:"Ολοήμερο",multiDay:"έως",at:"στις",endsToday:"λήγει σήμερα",endsTomorrow:"λήγει αύριο",noEvents:"Δεν υπάρχουν προγραμματισμένα γεγονότα",loading:"Φόρτωση ημερολογίου...",error:"Σφάλμα: Η οντότητα ημερολογίου δεν βρέθηκε ή δεν έχει ρυθμιστεί σωστά"},et={daysOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],fullDaysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],allDay:"all-day",multiDay:"until",at:"at",endsToday:"ends today",endsTomorrow:"ends tomorrow",noEvents:"No upcoming events",loading:"Loading calendar events...",error:"Error: Calendar entity not found or improperly configured"},tt={daysOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],fullDaysOfWeek:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],allDay:"todo el día",multiDay:"hasta",at:"a las",endsToday:"termina hoy",endsTomorrow:"termina mañana",noEvents:"No hay eventos próximos",loading:"Cargando eventos del calendario...",error:"Error: La entidad del calendario no se encontró o está mal configurada"},nt={daysOfWeek:["Su","Ma","Ti","Ke","To","Pe","La"],fullDaysOfWeek:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],months:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],allDay:"koko päivä",multiDay:"asti",at:"klo",endsToday:"päättyy tänään",endsTomorrow:"päättyy huomenna",noEvents:"Ei tulevia tapahtumia",loading:"Ladataan kalenteritapahtumia...",error:"Virhe: Kalenteriyksikköä ei löydy tai se on väärin määritetty"};const it={cs:Ge,da:Ze,de:Qe,el:Xe,en:et,es:tt,fi:nt,fr:{daysOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],fullDaysOfWeek:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],months:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],allDay:"toute la journée",multiDay:"jusqu'au",at:"à",endsToday:"finit aujourd'hui",endsTomorrow:"finit demain",noEvents:"Aucun événement à venir",loading:"Chargement des événements...",error:"Erreur: Entité de calendrier introuvable ou mal configurée"},he:{daysOfWeek:["א'","ב'","ג'","ד'","ה'","ו'","ש'"],fullDaysOfWeek:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],months:["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],allDay:"כל-היום",multiDay:"עד",endsToday:"מסתיים היום",endsTomorrow:"מסתיים מחר",at:"בשעה",noEvents:"אין אירועים קרובים",loading:"טוען אירועי לוח שנה...",error:"שגיאה: ישות לוח השנה לא נמצאה או לא מוגדרת כראוי"},hu:{daysOfWeek:["Vas","Hét","Kedd","Sze","Csüt","Pén","Szo"],fullDaysOfWeek:["Vasárnap","Hétfő","Kedd","Szerda","Csütörtök","Péntek","Szombat"],months:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],allDay:"egész napos",multiDay:"eddig:",endsToday:"ma este ér véget",endsTomorrow:"holnap ér véget",at:"itt:",noEvents:"Mára nincs több esemény",loading:"Naptárbejegyzések betöltése...",error:"Hiba: Naptár entitás nem található vagy nem megfelelően konfigutált"},is:{daysOfWeek:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],fullDaysOfWeek:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"],months:["Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],allDay:"Allur dagurinn",multiDay:"þar til",at:"kl",endsToday:"lýkur í dag",endsTomorrow:"lýkur á morgun",noEvents:"Engir viðburðir á næstunni",loading:"Hleður inn dagatal...",error:"Villa: Dagatalseining finnst ekki eða er vanstillt"},it:{daysOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],fullDaysOfWeek:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],allDay:"tutto-il-giorno",multiDay:"fino a",at:"a",endsToday:"termina oggi",endsTomorrow:"termina domani",noEvents:"Nessun evento programmato",loading:"Sto caricando il calendario degli eventi...",error:"Errore: Entità Calendario non trovata o non configurata correttamente"},nb:{daysOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],fullDaysOfWeek:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],months:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],allDay:"hele dagen",multiDay:"inntil",at:"kl. ",endsToday:"slutter i dag",endsTomorrow:"slutter i morgen",noEvents:"Ingen kommende hendelser",loading:"Laster kalenderhendelser...",error:"Feil: Kalenderenheten ble ikke funnet eller er ikke konfigurert riktig"},nl:{daysOfWeek:["Zo","Ma","Di","Wo","Do","Vr","Za"],fullDaysOfWeek:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],months:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],allDay:"hele dag",multiDay:"tot",at:"om",endsToday:"eindigt vandaag",endsTomorrow:"eindigt morgen",noEvents:"Geen afspraken gepland",loading:"Kalender afspraken laden...",error:"Fout: Kalender niet gevonden of verkeerd geconfigureerd"},nn:{daysOfWeek:["Søn","Mån","Tys","Ons","Tor","Fre","Lau"],fullDaysOfWeek:["Søndag","Måndag","Tysdag","Onsdag","Torsdag","Fredag","Laurdag"],months:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"],allDay:"heile dagen",multiDay:"inntil",at:"kl. ",endsToday:"sluttar i dag",endsTomorrow:"sluttar i morgon",noEvents:"Ingen kommande hendingar",loading:"Lastar kalenderhendingar...",error:"Feil: Kalendereininga vart ikkje funnen eller er ikkje konfigurert riktig"},pl:{daysOfWeek:["Nd","Pn","Wt","Śr","Cz","Pt","Sb"],fullDaysOfWeek:["niedzieli","poniedziałku","wtorku","środy","czwartku","piątku","soboty"],months:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],allDay:"cały dzień",multiDay:"do",at:"o",endsToday:"kończy się dziś",endsTomorrow:"kończy się jutro",noEvents:"Brak nadchodzących wydarzeń",loading:"Ładowanie wydarzeń z kalendarza...",error:"Błąd: encja kalendarza nie została znaleziona lub jest niepoprawnie skonfigurowana"},pt:{daysOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],fullDaysOfWeek:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],months:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],allDay:"o dia todo",multiDay:"até",at:"às",endsToday:"termina hoje",endsTomorrow:"termina amanhã",noEvents:"Nenhum evento próximo",loading:"Carregando eventos do calendário...",error:"Erro: A entidade do calendário não foi encontrada ou está configurada incorretamente"},ru:{daysOfWeek:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],fullDaysOfWeek:["воскресенья","понедельника","вторника","среды","четверга","пятницы","субботы"],months:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],allDay:"весь день",multiDay:"до",at:"в",endsToday:"заканчивается сегодня",endsTomorrow:"заканчивается завтра",noEvents:"Нет предстоящих событий",loading:"Загрузка событий календаря...",error:"Ошибка: Объект календарь, не найден или неправильно настроен"},sl:{daysOfWeek:["ned","pon","tor","sre","čet","pet","sob"],fullDaysOfWeek:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],months:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],allDay:"cel dan",multiDay:"do",at:"ob",endsToday:"konča se danes",endsTomorrow:"konča se jutri",noEvents:"Ni planiranih dogodkov",loading:"Nalagam dogodke...",error:"Napaka: Entiteta ni bila najdena ali pa je nepravilno konfigurirana."},sv:{daysOfWeek:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],fullDaysOfWeek:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],allDay:"heldag",multiDay:"till",at:"vid",endsToday:"slutar idag",endsTomorrow:"slutar imorgon",noEvents:"Inga kommande händelser",loading:"Laddar kalenderhändelser...",error:"Fel: Kalenderentiteten hittades inte eller är felaktigt konfigurerad."},uk:{daysOfWeek:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],fullDaysOfWeek:["неділі","понеділка","вівторка","середи","четверга","п'ятниці","суботи"],months:["січ","лют","бер","кві","тра","чер","лип","сер","вер","жов","лис","гру"],allDay:"весь день",multiDay:"поки",at:"в",endsToday:"закінчується сьогодні",endsTomorrow:"закінчується завтра",noEvents:"Немає майбутніх подій",loading:"Завантаження подій календаря...",error:"Помилка: Cутність календаря не знайдено або налаштовано неправильно"},vi:{daysOfWeek:["CN","T.2","T.3","T.4","T.5","T.6","T.7"],fullDaysOfWeek:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],months:["Th1","Th2","Th3","Th4","Th5","Th6","Th7","Th8","Th9","Th10","Th11","Th12"],allDay:"cả ngày",multiDay:"đến",at:"lúc",endsToday:"kết thúc hôm nay",endsTomorrow:"kết thúc ngày mai",noEvents:"Không có sự kiện sắp tới",loading:"Đang tải sự kiện...",error:"Lỗi: Không tìm thấy lịch hoặc cấu hình không đúng"},"zh-cn":{daysOfWeek:["日","一","二","三","四","五","六"],fullDaysOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],allDay:"整天",multiDay:"直到",at:"在",endsToday:"今天结束",endsTomorrow:"明天结束",noEvents:"没有即将到来的活动",loading:"正在加载日历事件...",error:"错误：找不到日历实体或配置不正确"},"zh-tw":{daysOfWeek:["日","一","二","三","四","五","六"],fullDaysOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],allDay:"整天",multiDay:"直到",at:"在",endsToday:"今天結束",endsTomorrow:"明天結束",noEvents:"沒有即將到來的活動",loading:"正在加載日曆事件...",error:"錯誤：找不到日曆實體或配置不正確"}},at="en",ot=new Map;function rt(e,t){const n=`${e||""}:${(null==t?void 0:t.language)||""}`;if(ot.has(n))return ot.get(n);let i;if(e&&""!==e.trim()){const t=e.toLowerCase();if(it[t])return i=t,ot.set(n,i),i}if(null==t?void 0:t.language){const e=t.language.toLowerCase();if(it[e])return i=e,ot.set(n,i),i;const a=e.split(/[-_]/)[0];if(a!==e&&it[a])return i=a,ot.set(n,i),i}return i=at,ot.set(n,i),i}function st(e){const t=(null==e?void 0:e.toLowerCase())||at;return it[t]||it[at]}function lt(e){const t=(null==e?void 0:e.toLowerCase())||"";return"de"===t?"day-dot-month":"en"===t||"hu"===t?"month-day":"day-month"}function dt(e,t,n="en"){const i=!e.start.dateTime;let a,o;i?(a=ht(e.start.date||""),o=ht(e.end.date||"")):(a=new Date(e.start.dateTime||""),o=new Date(e.end.dateTime||""));const r=st(n);if(i){const e=new Date(o);return e.setDate(e.getDate()-1),a.toDateString()!==e.toDateString()?function(e,t,n){const i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate()),o=new Date(a);if(o.setDate(o.getDate()+1),e.toDateString()===a.toDateString())return`${n.allDay}, ${n.endsToday}`;if(e.toDateString()===o.toDateString())return`${n.allDay}, ${n.endsTomorrow}`;const r=e.getDate(),s=n.months[e.getMonth()];switch(lt(t)){case"day-dot-month":return`${n.allDay}, ${n.multiDay} ${r}. ${s}`;case"month-day":return`${n.allDay}, ${n.multiDay} ${s} ${r}`;default:return`${n.allDay}, ${n.multiDay} ${r} ${s}`}}(e,n,r):r.allDay}return a.toDateString()!==o.toDateString()?function(e,t,n,i,a){const o=new Date,r=new Date(o.getFullYear(),o.getMonth(),o.getDate()),s=new Date(r);if(s.setDate(s.getDate()+1),t.toDateString()===r.toDateString()){const e=pt(t,a);return`${i.endsToday} ${i.at} ${e}`}if(t.toDateString()===s.toDateString()){const e=pt(t,a);return`${i.endsTomorrow} ${i.at} ${e}`}const l=t.getDate(),d=i.months[t.getMonth()],c=i.fullDaysOfWeek[t.getDay()],h=pt(t,a),u=lt(n);if(r.toDateString()!==e.toDateString()&&r<t)switch(u){case"day-dot-month":return[i.multiDay,c+",",`${l}.`,d,i.at,h].join(" ");case"month-day":return[i.multiDay,c+",",d,l,i.at,h].join(" ");default:return[i.multiDay,c+",",l,d,i.at,h].join(" ")}const p=pt(e,a);switch(u){case"day-dot-month":return[p,i.multiDay,c+",",`${l}.`,d,i.at,h].join(" ");case"month-day":return[p,i.multiDay,c+",",d,l,i.at,h].join(" ");default:return[p,i.multiDay,c+",",l,d,i.at,h].join(" ")}}(a,o,n,r,t.time_24h):function(e,t,n,i){return n?`${pt(e,i)} - ${pt(t,i)}`:pt(e,i)}(a,o,t.show_end_time,t.time_24h)}function ct(e,t=!0){if(!e||!t)return e||"";const n=e.trim(),i=new Set(["Germany","Deutschland","United States","USA","United States of America","United Kingdom","Great Britain","France","Italy","Italia","Spain","España","Netherlands","Nederland","Austria","Österreich","Switzerland","Schweiz"]),a=n.split(",").map((e=>e.trim()));if(a.length>0&&i.has(a[a.length-1]))return a.pop(),a.join(", ");const o=n.split(/\s+/);return o.length>0&&i.has(o[o.length-1])?(o.pop(),o.join(" ")):n}function ht(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function ut(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function pt(e,t=!0){let n=e.getHours();const i=e.getMinutes();if(!t){const e=n>=12?"PM":"AM";return n=n%12||12,`${n}:${i.toString().padStart(2,"0")} ${e}`}return`${n}:${i.toString().padStart(2,"0")}`}function mt(){return Math.random().toString(36).substring(2,15)}function gt(e,t,n,i){const a=e.map((e=>"string"==typeof e?e:e.entity)).sort().join("_");let o="";if(i)try{o=i.includes("T")?i.split("T")[0]:i}catch(e){o=i}return function(e){let t=0;for(let n=0;n<e.length;n++){t=(t<<5)-t+e.charCodeAt(n),t|=0}return Math.abs(t).toString(36)}(`calendar_${a}_${t}_${n?1:0}${o?`_${o}`:""}`)}async function ft(e,t,n,i=!1){const a=function(e,t,n,i,a){const o=t.map((e=>"string"==typeof e?e:e.entity)).sort().join("_");let r="";if(a)try{r=a.includes("T")?a.split("T")[0]:a}catch(e){r=a}return`${Oe}${e}_${o}_${n}_${i?1:0}${r?`_${r}`:""}`}(n,t.entities,t.days_to_show,t.show_past_events,t.start_date),o=function(){if(window.performance&&window.performance.navigation)return 1===window.performance.navigation.type;if(window.performance&&window.performance.getEntriesByType){const e=window.performance.getEntriesByType("navigation");if(e.length>0&&"type"in e[0])return"reload"===e[0].type}return!1}();if(!i){const e=function(e,t,n=!1){const i=wt(e,t,n);if(i)return[...i.events];return null}(a,t,o);if(e)return He(`Using ${e.length} events from cache`),[...e]}He("Fetching events from API");const r=t.entities.map((e=>"string"==typeof e?{entity:e,color:"var(--primary-text-color)"}:e)),s=function(e,t){let n;if(t&&""!==t.trim())try{if(t.includes("T"))n=new Date(t),isNaN(n.getTime())&&(Je(`Invalid ISO date: ${t}, falling back to today`),n=new Date,n=new Date(n.getFullYear(),n.getMonth(),n.getDate()));else{const[e,i,a]=t.split("-").map(Number);e&&i&&a&&i>=1&&i<=12&&a>=1&&a<=31?(n=new Date(e,i-1,a),isNaN(n.getTime())&&(Je(`Invalid date: ${t}, falling back to today`),n=new Date,n=new Date(n.getFullYear(),n.getMonth(),n.getDate()))):(Je(`Malformed date: ${t}, falling back to today`),n=new Date,n=new Date(n.getFullYear(),n.getMonth(),n.getDate()))}}catch(e){Je(`Error parsing date: ${t}, falling back to today`,e),n=new Date,n=new Date(n.getFullYear(),n.getMonth(),n.getDate())}else n=new Date,n=new Date(n.getFullYear(),n.getMonth(),n.getDate());n.setHours(0,0,0,0);const i=new Date(n),a=parseInt(e.toString())||3;return i.setDate(n.getDate()+a),i.setHours(23,59,59,999),{start:n,end:i}}(t.days_to_show,t.start_date),l=await async function(e,t,n){const i=[];for(const a of t)try{const t=`calendars/${a.entity}?start=${n.start.toISOString()}&end=${n.end.toISOString()}`;He(`Fetching calendar events with path: ${t}`);const o=await e.callApi("GET",t);if(!o||!Array.isArray(o)){Je(`Invalid response for ${a.entity}`);continue}const r=o.map((e=>Object.assign(Object.assign({},e),{_entityId:a.entity})));i.push(...r)}catch(t){Re(`Failed to fetch events for ${a.entity}:`,t);try{He("Available hass API methods:",Object.keys(e).filter((t=>"function"==typeof e[t])))}catch(e){}}return i}(e,r,s),d=Array.from(l);return function(e,t){try{He(`Caching ${t.length} events`);const n={events:t,timestamp:Date.now()};return localStorage.setItem(e,JSON.stringify(n)),null!==wt(e)}catch(e){return Re("Failed to cache calendar events:",e),!1}}(a,d),d}function yt(e,t,n){if(!e)return"var(--calendar-card-line-color-vertical)";const i=t.entities.find((t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e)),a="string"==typeof i?t.vertical_line_color:(null==i?void 0:i.accent_color)||t.vertical_line_color;return void 0===n||0===n||isNaN(n)?a:function(e,t){if(e.startsWith("var("))return`rgba(var(--calendar-color-rgb, 3, 169, 244), ${t/100})`;if("transparent"===e)return e;const n=document.createElement("div");n.style.display="none",n.style.color=e,document.body.appendChild(n);const i=getComputedStyle(n).color;if(document.body.removeChild(n),!i)return e;const a=i.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(a){const[,e,n,i]=a;return`rgba(${e}, ${n}, ${i}, ${t/100})`}const o=i.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)$/);if(o){const[,e,n,i]=o;return`rgba(${e}, ${n}, ${i}, ${t/100})`}return e}(a,n)}function _t(e,t){if(!e)return;const n=t.entities.find((t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e));return n&&"string"!=typeof n?n.label:void 0}function vt(e,t,n){if(!e)return;const i=n.entities.find((t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e));return i&&"string"!=typeof i?i[t]:void 0}function wt(e,t,n=!1){try{const i=localStorage.getItem(e);if(!i)return null;const a=JSON.parse(i),o=Date.now();let r;r=n&&(null==t?void 0:t.refresh_on_navigate)?1e3*Ee:function(e){return 60*((null==e?void 0:e.refresh_interval)||xe)*1e3}(t);return o-a.timestamp<r?a:(localStorage.removeItem(e),He(`Cache expired and removed for ${e}`),null)}catch(t){Je("Cache error:",t);try{localStorage.removeItem(e)}catch(e){}return null}}function bt(e){if(!e||!e.length)return;const t=e[0];return"string"==typeof t?t:t.entity}function $t(e,t,n,i,a){if(!e||!t)return;const o={element:n};switch(e.action){case"more-info":!function(e,t){if(!e)return;const n=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});t.element.dispatchEvent(n),Be(`Fired more-info event for ${e}`)}(i,o);break;case"navigate":e.navigation_path&&function(e,t){const n=new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}});window.history&&window.history.pushState(null,"",e);t.element.dispatchEvent(n),Be(`Navigated to ${e}`)}(e.navigation_path,o);break;case"url":e.url_path&&(r=e.url_path,window.open(r,"_blank"),Be(`Opened URL ${r}`));break;case"toggle":case"expand":a&&a();break;case"call-service":{if(!e.service)return;const[n,i]=e.service.split(".",2);if(!n||!i)return;t.callService(n,i,e.service_data||{});break}case"fire-dom-event":!function(e){const t=new Event("calendar-card-action",{bubbles:!0,composed:!0});e.dispatchEvent(t),Be("Fired DOM event calendar-card-action")}(n)}var r}class Tt extends HTMLElement{setConfig(e){}}const Dt=((e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[i+1]),e[0]);return new o(n,e,i)})`
  /* ===== CORE CONTAINER STYLES ===== */

  :host {
    display: block;
  }

  ha-card {
    /* Layout */
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;

    /* Box model */
    box-sizing: border-box;
    padding: calc(var(--calendar-card-spacing-additional) + 16px) 16px;

    /* Visual */
    background: var(--calendar-card-background-color, var(--card-background-color));
    cursor: pointer;
  }

  /* Focus states */
  ha-card:focus {
    outline: none;
  }

  ha-card:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
  }

  /* Structure containers for stable DOM */
  .header-container,
  .content-container {
    width: 100%;
  }

  /* Add scrolling to content container */
  .content-container {
    max-height: var(--calendar-card-max-height, none);
    overflow-y: auto;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: var(--secondary-text-color) transparent; /* Firefox */
  }

  /* Webkit scrollbar styling */
  .content-container::-webkit-scrollbar {
    width: 6px;
  }

  .content-container::-webkit-scrollbar-thumb {
    background-color: var(--secondary-text-color);
    border-radius: 3px;
  }

  .content-container::-webkit-scrollbar-track {
    background: transparent;
  }

  .card-header-placeholder {
    height: 0;
  }

  /* ===== HEADER STYLES ===== */

  .card-header {
    /* Layout */
    float: left;

    /* Spacing */
    margin: 0 0 16px 0;
    padding: 0;

    /* Typography */
    color: var(--calendar-card-color-title, var(--primary-text-color));
    font-size: var(--calendar-card-font-size-title, var(--paper-font-headline_-_font-size));
    font-weight: var(--paper-font-headline_-_font-weight);
    letter-spacing: var(--paper-font-headline_-_letter-spacing);
    line-height: var(--paper-font-headline_-_line-height);

    /* Additional Typography */
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
    opacity: var(--dark-primary-opacity);
  }

  /* ===== DAY TABLE STYLES ===== */

  table {
    /* Layout */
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;

    /* Borders & Spacing */
    margin-bottom: var(--calendar-card-day-spacing);
    padding-bottom: var(--calendar-card-day-spacing);
    border-bottom: var(--calendar-card-line-width-horizontal) solid
      var(--calendar-card-line-color-horizontal, var(--secondary-text-color));
  }

  table:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }

  /* ===== DATE COLUMN STYLES ===== */

  .date-column {
    /* Layout */
    width: var(--calendar-card-date-column-width);
    vertical-align: var(--calendar-card-date-column-vertical-alignment);
    text-align: center;

    /* Borders & Spacing */
    padding-right: 12px;
  }

  .date-content {
    display: flex;
    flex-direction: column;
  }

  /* Date components */
  .weekday {
    font-size: var(--calendar-card-font-size-weekday);
    line-height: var(--calendar-card-font-size-weekday);
    color: var(--calendar-card-color-weekday);
  }

  .day {
    font-size: var(--calendar-card-font-size-day);
    line-height: var(--calendar-card-font-size-day);
    font-weight: 500;
    color: var(--calendar-card-color-day);
  }

  .month {
    font-size: var(--calendar-card-font-size-month);
    line-height: var(--calendar-card-font-size-month);
    text-transform: uppercase;
    color: var(--calendar-card-color-month);
  }

  /* ===== EVENT STYLES ===== */

  /* Base event */
  .event {
    padding: var(--calendar-card-event-spacing) 0 var(--calendar-card-event-spacing) 12px;
    border-radius: 0;
  }

  /* Past event styling - subtle opacity reduction */
  .past-event .event-title,
  .past-event .time,
  .past-event .location {
    opacity: 0.6;
  }

  /* Event positioning variations */
  .event-first.event-last {
    border-radius: 0 var(--calendar-card-event-border-radius)
      var(--calendar-card-event-border-radius) 0;
  }

  .event-first {
    border-radius: 0 var(--calendar-card-event-border-radius) 0 0;
  }

  .event-middle {
    /* No additional styles needed */
  }

  .event-last {
    border-radius: 0 0 var(--calendar-card-event-border-radius) 0;
  }

  /* Event content */
  .event-content {
    display: flex;
    flex-direction: column;
  }

  .event-title {
    font-size: var(--calendar-card-font-size-event);
    font-weight: 500;
    line-height: 1.2;
    color: var(--calendar-card-color-event);
    padding-bottom: 2px;
  }

  /* Empty day specific styling */
  .empty-day-title {
    opacity: 0.6;
  }

  .calendar-label {
    display: inline;
  }

  /* ===== TIME & LOCATION STYLES ===== */

  .time-location {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }

  .time,
  .location {
    display: flex;
    align-items: center;
    line-height: 1.2;
    margin-top: 2px;
  }

  .time span,
  .location span {
    display: inline-block;
    vertical-align: middle;
  }

  .time {
    font-size: var(--calendar-card-font-size-time);
    color: var(--calendar-card-color-time);
  }

  .location {
    font-size: var(--calendar-card-font-size-location);
    color: var(--calendar-card-color-location);
  }

  /* ===== ICON STYLES ===== */

  ha-icon {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: top;
    top: 0;
    margin-right: 4px;
  }

  .time ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-time, 14px);
  }

  .location ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-location, 14px);
  }

  /* ===== STATUS MESSAGES ===== */

  .loading,
  .error {
    text-align: center;
    padding: 16px;
  }

  .error {
    color: var(--error-color);
  }
`;function St(e){e.style.opacity="0",e.style.transition=`opacity ${Ne}ms ease-out`,setTimeout((()=>{e.parentNode&&(e.parentNode.removeChild(e),Be("Removed hold indicator"))}),Ne)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=1,xt=2,Et=e=>(...t)=>({_$litDirective$:e,values:t});class Ot{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,t,n){this.__part=e,this._$parent=t,this.__attributeIndex=n}_$resolve(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=Et(class extends Ot{constructor(e){if(super(e),e.type!==kt||"class"!==e.name||e.strings?.length>2)throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this._previousClasses){this._previousClasses=new Set,void 0!==e.strings&&(this._staticClasses=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this._staticClasses?.has(e)&&this._previousClasses.add(e);return this.render(t)}const n=e.element.classList;for(const e of this._previousClasses)e in t||(n.remove(e),this._previousClasses.delete(e));for(const e in t){const i=!!t[e];i===this._previousClasses.has(e)||this._staticClasses?.has(e)||(i?(n.add(e),this._previousClasses.add(e)):(n.remove(e),this._previousClasses.delete(e)))}return ee}}),Pt="important",Mt=" !"+Pt;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=Et(class extends Ot{constructor(e){if(super(e),e.type!==kt||"style"!==e.name||e.strings?.length>2)throw new Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const i=e[n];return null==i?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this._previousStyleProperties)return this._previousStyleProperties=new Set(Object.keys(t)),this.render(t);for(const e of this._previousStyleProperties)null==t[e]&&(this._previousStyleProperties.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const e in t){const i=t[e];if(null!=i){this._previousStyleProperties.add(e);const t="string"==typeof i&&i.endsWith(Mt);e.includes("-")||t?n.setProperty(e,t?i.slice(0,-11):i,t?Pt:""):n[e]=i}}return ee}}),{_ChildPart:Nt}=ge,Lt=window.ShadyDOM?.inUse&&!0===window.ShadyDOM?.noPatch?window.ShadyDOM.wrap:e=>e,It=()=>document.createComment(""),At=(e,t,n)=>{const i=Lt(e._$startNode).parentNode,a=void 0===t?e._$endNode:t._$startNode;if(void 0===n){const t=Lt(i).insertBefore(It(),a),o=Lt(i).insertBefore(It(),a);n=new Nt(t,o,e,e.options)}else{const t=Lt(n._$endNode).nextSibling,o=n._$parent,r=o!==e;if(r){let t;n._$reparentDisconnectables?.(e),n._$parent=e,void 0!==n._$notifyConnectionChanged&&(t=e._$isConnected)!==o._$isConnected&&n._$notifyConnectionChanged(t)}if(t!==a||r){let e=n._$startNode;for(;e!==t;){const t=Lt(e).nextSibling;Lt(i).insertBefore(e,a),e=t}}}return n},jt=(e,t,n=e)=>(e._$setValue(t,n),e),Wt={},Ut=e=>{e._$notifyConnectionChanged?.(!1,!0);let t=e._$startNode;const n=Lt(e._$endNode).nextSibling;for(;t!==n;){const e=Lt(t).nextSibling;Lt(t).remove(),t=e}},Ft=(e,t,n)=>{const i=new Map;for(let a=t;a<=n;a++)i.set(e[a],a);return i};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=Et(class extends Ot{constructor(e){if(super(e),e.type!==xt)throw new Error("repeat() can only be used in text expressions")}_getValuesAndKeys(e,t,n){let i;void 0===n?n=t:void 0!==t&&(i=t);const a=[],o=[];let r=0;for(const t of e)a[r]=i?i(t,r):r,o[r]=n(t,r),r++;return{values:o,keys:a}}render(e,t,n){return this._getValuesAndKeys(e,t,n).values}update(e,[t,n,i]){const a=e._$committedValue;const{values:o,keys:r}=this._getValuesAndKeys(t,n,i);if(!Array.isArray(a))return this._itemKeys=r,o;const s=this._itemKeys??=[],l=[];let d,c,h=0,u=a.length-1,p=0,m=o.length-1;for(;h<=u&&p<=m;)if(null===a[h])h++;else if(null===a[u])u--;else if(s[h]===r[p])l[p]=jt(a[h],o[p]),h++,p++;else if(s[u]===r[m])l[m]=jt(a[u],o[m]),u--,m--;else if(s[h]===r[m])l[m]=jt(a[h],o[m]),At(e,l[m+1],a[h]),h++,m--;else if(s[u]===r[p])l[p]=jt(a[u],o[p]),At(e,a[h],a[u]),u--,p++;else if(void 0===d&&(d=Ft(r,p,m),c=Ft(s,h,u)),d.has(s[h]))if(d.has(s[u])){const t=c.get(r[p]),n=void 0!==t?a[t]:null;if(null===n){const t=At(e,a[h]);jt(t,o[p]),l[p]=t}else l[p]=jt(n,o[p]),At(e,a[h],n),a[t]=null;p++}else Ut(a[u]),u--;else Ut(a[h]),h++;for(;p<=m;){const t=At(e,l[m+1]);jt(t,o[p]),l[p++]=t}for(;h<=u;){const e=a[h++];null!==e&&Ut(e)}return this._itemKeys=r,((e,t=Wt)=>{e._$committedValue=t})(e,l),ee}});function Rt(e,t){const n=st(t);return"loading"===e?Q`
      <div class="calendar-card">
        <div class="loading">${n.loading}</div>
      </div>
    `:Q`
    <div class="calendar-card">
      <div class="error">${n.error}</div>
    </div>
  `}function Jt(e,t,n){const i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate()),o=new Date(e.timestamp).toDateString()===a.toDateString();return Q`
    <table class="day-table ${o?"today":"future-day"}">
      ${Vt(e.events,((e,t)=>`${e._entityId}-${e.summary}-${t}`),((i,a)=>function(e,t,n,i,a){var o,r;const s=Boolean(e._isEmptyDay),l=new Date,d=new Date(l.getFullYear(),l.getMonth(),l.getDate()),c=new Date(d);c.setDate(c.getDate()+1);let h=!1;if(!s){if(!e.start.dateTime){let t=e.end.date?ht(e.end.date):null;if(t){const e=new Date(t);e.setDate(e.getDate()-1),t=e}h=null!==t&&d>t}else{const t=e.end.dateTime?new Date(e.end.dateTime):null;h=null!==t&&l>t}}const u=function(e,t){if(!e)return"var(--primary-text-color)";const n=t.entities.find((t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e));return n?"string"==typeof n?"var(--primary-text-color)":n.color||"var(--primary-text-color)":"var(--primary-text-color)"}(e._entityId,i),p=yt(e._entityId,i),m=i.event_background_opacity>0?i.event_background_opacity:0,g=m>0?yt(e._entityId,i,m):"",f=null!==(o=vt(e._entityId,"show_time",i))&&void 0!==o?o:i.show_time,y=null!==(r=vt(e._entityId,"show_location",i))&&void 0!==r?r:i.show_location,_=!e.start.dateTime,v=_&&e.time&&(e.time.includes(st(a).multiDay)||e.time.includes(st(a).endsTomorrow)||e.time.includes(st(a).endsToday)),w=f&&!(_&&!v&&!i.show_single_allday_time)&&!s,b=dt(e,i,a),$=e.location&&y?ct(e.location,i.remove_location_country):"",T=0===n,D=n===t.events.length-1,S={event:!0,"event-first":T,"event-middle":!T&&!D,"event-last":D,"past-event":h};return Q`
    <tr>
      ${0===n?Q`
            <td class="date-column" rowspan="${t.events.length}">
              <div class="date-content">
                <div class="weekday">${t.weekday}</div>
                <div class="day">${t.day}</div>
                ${i.show_month?Q`<div class="month">${t.month}</div>`:""}
              </div>
            </td>
          `:""}
      <td
        class=${Ct(S)}
        style="border-left: var(--calendar-card-line-width-vertical) solid ${p}; background-color: ${g};"
      >
        <div class="event-content">
          <div
            class="event-title ${s?"empty-day-title":""}"
            style="color: ${u}"
          >
            ${e._entityLabel?Q`<span class="calendar-label">${e._entityLabel}</span> `:""}${s?`✓ ${e.summary}`:e.summary}
          </div>
          <div class="time-location">
            ${w?Q`
                  <div class="time">
                    <ha-icon icon="mdi:clock-outline"></ha-icon>
                    <span>${b}</span>
                  </div>
                `:""}
            ${$?Q`
                  <div class="location">
                    <ha-icon icon="mdi:map-marker"></ha-icon>
                    <span>${$}</span>
                  </div>
                `:""}
          </div>
        </div>
      </td>
    </tr>
  `}
/**
 * Calendar Card Pro
 *
 * A sleek and highly customizable calendar card for Home Assistant,
 * designed for performance and a clean, modern look.
 *
 * @author Alex Pfau
 * @license MIT
 * @version 2.0.0
 *
 * Project Home: https://github.com/alexpfau/calendar-card-pro
 * Documentation: https://github.com/alexpfau/calendar-card-pro/blob/main/README.md
 *
 * Design inspired by Home Assistant community member @GHA_Steph's button-card calendar design
 * https://community.home-assistant.io/t/calendar-add-on-some-calendar-designs/385790
 *
 * Interaction patterns inspired by Home Assistant's Tile Card
 * and Material Design, both licensed under the Apache License 2.0.
 * https://github.com/home-assistant/frontend/blob/dev/LICENSE.md
 *
 * This package includes lit/LitElement (BSD-3-Clause License)
 */(i,e,a,t,n)))}
    </table>
  `}let Ht=class extends ve{get safeHass(){return this.hass||null}get effectiveLanguage(){return!this._language&&this.hass&&(this._language=rt(this.config.language,this.hass.locale)),this._language||"en"}get groupedEvents(){return function(e,t,n,i){var a;const o={},r=new Date,s=new Date(r.getFullYear(),r.getMonth(),r.getDate()),l=new Date(s);l.setHours(23,59,59,999);const d=e.filter((e=>{if(!(null==e?void 0:e.start)||!(null==e?void 0:e.end))return!1;const n=!e.start.dateTime;let i,a;if(n){if(i=e.start.date?ht(e.start.date):null,a=e.end.date?ht(e.end.date):null,a){const e=new Date(a);e.setDate(e.getDate()-1),a=e}}else i=e.start.dateTime?new Date(e.start.dateTime):null,a=e.end.dateTime?new Date(e.end.dateTime):null;return!(!i||!a)&&!(!(i>=s&&i<=l||i>l||a>=s)||!t.show_past_events&&!n&&a<r)}));if(0===d.length)return[];d.forEach((e=>{let n,a,r;if(e.start.dateTime)n=e.start.dateTime?new Date(e.start.dateTime):null,a=e.end.dateTime?new Date(e.end.dateTime):null;else if(n=e.start.date?ht(e.start.date):null,a=e.end.date?ht(e.end.date):null,a){const e=new Date(a);e.setDate(e.getDate()-1),a=e}if(!n||!a)return;r=n>=s?n:a.toDateString()===s.toDateString()||n<s&&a>s?s:n;const l=ut(r),d=st(i);o[l]||(o[l]={weekday:d.daysOfWeek[r.getDay()],day:r.getDate(),month:d.months[r.getMonth()],timestamp:r.getTime(),events:[]}),o[l].events.push({summary:e.summary||"",time:dt(e,t,i),location:t.show_location?ct(e.location||"",t.remove_location_country):"",start:e.start,end:e.end,_entityId:e._entityId,_entityLabel:_t(e._entityId,t)})})),Object.values(o).forEach((e=>{e.events.sort(((e,t)=>{const n=!e.start.dateTime,i=!t.start.dateTime;if(n&&!i)return-1;if(!n&&i)return 1;let a,o;return a=n&&e.start.date?ht(e.start.date).getTime():e.start.dateTime?new Date(e.start.dateTime).getTime():0,o=i&&t.start.date?ht(t.start.date).getTime():t.start.dateTime?new Date(t.start.dateTime).getTime():0,a-o}))}));let c=Object.values(o).sort(((e,t)=>e.timestamp-t.timestamp)).slice(0,t.days_to_show||3);if(t.show_empty_days){const e=st(i),n=new Date,a=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=[];for(let n=0;n<(t.days_to_show||3);n++){const t=new Date(a);t.setDate(a.getDate()+n);const i=ut(t);o[i]?r.push(o[i]):r.push({weekday:e.daysOfWeek[t.getDay()],day:t.getDate(),month:e.months[t.getMonth()],timestamp:t.getTime(),events:[{summary:e.noEvents,start:{date:ut(t)},end:{date:ut(t)},_entityId:"_empty_day_",_isEmptyDay:!0,location:""}]})}c=r}if(t.max_events_to_show&&!n){let e=0;const n=null!==(a=t.max_events_to_show)&&void 0!==a?a:0,i=[];for(const t of c){if(e>=n)break;if(1===t.events.length&&t.events[0]._isEmptyDay){i.push(t);continue}const a=n-e;if(a>0&&t.events.length>0){const n=Object.assign(Object.assign({},t),{events:t.events.slice(0,a)});i.push(n),e+=n.events.length}}c=i}return c}(this.events,this.config,this.isExpanded,this.effectiveLanguage)}static get styles(){return Dt}constructor(){super(),this.config=Object.assign({},qe),this.events=[],this.isLoading=!0,this.isExpanded=!1,this._instanceId=mt(),this._language="",this._lastUpdateTime=Date.now(),this._activePointerId=null,this._holdTriggered=!1,this._holdTimer=null,this._holdIndicator=null,this._handleVisibilityChange=()=>{if("visible"===document.visibilityState){Date.now()-this._lastUpdateTime>Le&&(Be("Visibility changed to visible, updating events"),this.updateEvents())}},this._instanceId=mt(),Ve(ke)}connectedCallback(){super.connectedCallback(),Be("Component connected"),this.startRefreshTimer(),this.updateEvents(),document.addEventListener("visibilitychange",this._handleVisibilityChange)}disconnectedCallback(){super.disconnectedCallback(),this._refreshTimerId&&clearTimeout(this._refreshTimerId),this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._holdIndicator&&(St(this._holdIndicator),this._holdIndicator=null),document.removeEventListener("visibilitychange",this._handleVisibilityChange),Be("Component disconnected")}updated(e){var t,n,i;(e.has("hass")&&(null===(t=this.hass)||void 0===t?void 0:t.locale)||e.has("config")&&(null===(n=e.get("config"))||void 0===n?void 0:n.language)!==this.config.language)&&(this._language=rt(this.config.language,null===(i=this.hass)||void 0===i?void 0:i.locale))}getCustomStyles(){return function(e){const t={"--calendar-card-background-color":e.background_color,"--calendar-card-font-size-weekday":e.weekday_font_size,"--calendar-card-font-size-day":e.day_font_size,"--calendar-card-font-size-month":e.month_font_size,"--calendar-card-font-size-event":e.event_font_size,"--calendar-card-font-size-time":e.time_font_size,"--calendar-card-font-size-location":e.location_font_size,"--calendar-card-color-weekday":e.weekday_color,"--calendar-card-color-day":e.day_color,"--calendar-card-color-month":e.month_color,"--calendar-card-color-event":e.event_color,"--calendar-card-color-time":e.time_color,"--calendar-card-color-location":e.location_color,"--calendar-card-line-color-vertical":e.vertical_line_color,"--calendar-card-line-color-horizontal":e.horizontal_line_color,"--calendar-card-line-width-vertical":e.vertical_line_width,"--calendar-card-line-width-horizontal":e.horizontal_line_width,"--calendar-card-day-spacing":e.day_spacing,"--calendar-card-event-spacing":e.event_spacing,"--calendar-card-spacing-additional":e.additional_card_spacing,"--calendar-card-max-height":e.max_height,"--calendar-card-icon-size-time":e.time_icon_size||"14px","--calendar-card-icon-size-location":e.location_icon_size||"14px","--calendar-card-date-column-width":1.75*parseFloat(e.day_font_size)+"px","--calendar-card-date-column-vertical-alignment":e.date_vertical_alignment,"--calendar-card-event-border-radius":"calc(var(--ha-card-border-radius, 10px) / 2)","--ha-ripple-hover-opacity":"0.04","--ha-ripple-hover-color":e.vertical_line_color,"--ha-ripple-pressed-opacity":"0.12","--ha-ripple-pressed-color":e.vertical_line_color};return e.title_font_size&&(t["--calendar-card-font-size-title"]=e.title_font_size),e.title_color&&(t["--calendar-card-color-title"]=e.title_color),t}(this.config)}startRefreshTimer(){this._refreshTimerId&&clearTimeout(this._refreshTimerId);const e=this.config.refresh_interval||xe,t=60*e*1e3;this._refreshTimerId=window.setTimeout((()=>{this.updateEvents(),this.startRefreshTimer()}),t),Be(`Scheduled next refresh in ${e} minutes`)}_handlePointerDown(e){var t;this._activePointerId=e.pointerId,this._holdTriggered=!1,"none"!==(null===(t=this.config.hold_action)||void 0===t?void 0:t.action)&&(this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout((()=>{this._activePointerId===e.pointerId&&(this._holdTriggered=!0,this._holdIndicator=function(e,t){const n=document.createElement("div");n.style.position="absolute",n.style.pointerEvents="none",n.style.borderRadius="50%",n.style.backgroundColor=t.vertical_line_color,n.style.opacity=`${Ie}`,n.style.transform="translate(-50%, -50%) scale(0)",n.style.transition=`transform ${ze}ms ease-out`,n.style.left=e.pageX+"px",n.style.top=e.pageY+"px";const i="touch"===e.pointerType?Ae.TOUCH_SIZE:Ae.POINTER_SIZE;return n.style.width=`${i}px`,n.style.height=`${i}px`,document.body.appendChild(n),setTimeout((()=>{n.style.transform="translate(-50%, -50%) scale(1)"}),10),Be("Created hold indicator"),n}(e,this.config))}),Me))}_handlePointerUp(e){if(e.pointerId===this._activePointerId){if(this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._holdTriggered&&this.config.hold_action){Be("Executing hold action");const e=bt(this.config.entities);$t(this.config.hold_action,this.safeHass,this,e,(()=>this.toggleExpanded()))}else if(!this._holdTriggered&&this.config.tap_action){Be("Executing tap action");const e=bt(this.config.entities);$t(this.config.tap_action,this.safeHass,this,e,(()=>this.toggleExpanded()))}this._activePointerId=null,this._holdTriggered=!1,this._holdIndicator&&(St(this._holdIndicator),this._holdIndicator=null)}}_handlePointerCancel(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._activePointerId=null,this._holdTriggered=!1,this._holdIndicator&&(St(this._holdIndicator),this._holdIndicator=null)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key){e.preventDefault();const t=bt(this.config.entities);$t(this.config.tap_action,this.safeHass,this,t,(()=>this.toggleExpanded()))}}setConfig(e){const t=this.config;var n;this.config=Object.assign(Object.assign({},qe),e),this.config.entities=(n=this.config.entities,Array.isArray(n)?n.map((e=>"string"==typeof e?{entity:e,color:"var(--primary-text-color)",accent_color:"var(--calendar-card-line-color-vertical)"}:"object"==typeof e&&e.entity?{entity:e.entity,label:e.label,color:e.color||"var(--primary-text-color)",accent_color:e.accent_color||"var(--calendar-card-line-color-vertical)",show_time:e.show_time,show_location:e.show_location}:null)).filter(Boolean):[]),this._instanceId=gt(this.config.entities,this.config.days_to_show,this.config.show_past_events,this.config.start_date);(function(e,t){if(!e||0===Object.keys(e).length)return!0;const n=(e.entities||[]).map((e=>"string"==typeof e?e:e.entity)).sort().join(","),i=(t.entities||[]).map((e=>"string"==typeof e?e:e.entity)).sort().join(","),a=(null==e?void 0:e.refresh_interval)!==(null==t?void 0:t.refresh_interval),o=n!==i||e.days_to_show!==t.days_to_show||e.start_date!==t.start_date||e.show_past_events!==t.show_past_events;return(o||a)&&Be("Configuration change requires data refresh"),o||a})(t,this.config)&&(Be("Configuration changed, refreshing data"),this.updateEvents(!0)),this.startRefreshTimer()}async updateEvents(e=!1){if(Be(`Updating events (force=${e})`),this.safeHass&&this.config.entities.length)try{this.isLoading=!0,await this.updateComplete;const t=await ft(this.safeHass,this.config,this._instanceId,e);this.isLoading=!1,await this.updateComplete,this.events=[...t],this._lastUpdateTime=Date.now(),He("Event update completed successfully")}catch(e){Re("Failed to update events:",e),this.isLoading=!1}else this.isLoading=!1}toggleExpanded(){this.config.max_events_to_show&&(this.isExpanded=!this.isExpanded)}handleAction(e){const t=bt(this.config.entities);$t(e,this.safeHass,this,t,(()=>this.toggleExpanded()))}render(){const e=this.getCustomStyles(),t={keyDown:e=>this._handleKeyDown(e),pointerDown:e=>this._handlePointerDown(e),pointerUp:e=>this._handlePointerUp(e),pointerCancel:()=>this._handlePointerCancel(),pointerLeave:()=>this._handlePointerCancel()};let n;if(this.isLoading)n=Rt("loading",this.effectiveLanguage);else if(this.safeHass&&this.config.entities.length)if(0===this.events.length){const e=function(e,t){const n=st(t),i=new Date,a=new Date(i.getFullYear(),i.getMonth(),i.getDate()),o=[],r=e.show_empty_days?e.days_to_show:1;for(let e=0;e<r;e++){const t=new Date(a);t.setDate(a.getDate()+e),o.push({weekday:n.daysOfWeek[t.getDay()],day:t.getDate(),month:n.months[t.getMonth()],timestamp:t.getTime(),events:[{summary:n.noEvents,start:{date:ut(t)},end:{date:ut(t)},_entityId:"_empty_day_",_isEmptyDay:!0,location:""}]})}return o}(this.config,this.effectiveLanguage);n=Q`${e.map((e=>Jt(e,this.config,this.effectiveLanguage)))}`}else n=Q`${this.groupedEvents.map((e=>Jt(e,this.config,this.effectiveLanguage)))}`;else n=Rt("error",this.effectiveLanguage);return function(e,t,n,i){return Q`
    <ha-card
      class="calendar-card-pro"
      style=${zt(e)}
      tabindex="0"
      @keydown=${i.keyDown}
      @pointerdown=${i.pointerDown}
      @pointerup=${i.pointerUp}
      @pointercancel=${i.pointerCancel}
      @pointerleave=${i.pointerLeave}
    >
      <ha-ripple></ha-ripple>

      <!-- Title is always rendered with the same structure, even if empty -->
      <div class="header-container">
        ${t?Q`<h1 class="card-header">${t}</h1>`:Q`<div class="card-header-placeholder"></div>`}
      </div>

      <!-- Content container is always present -->
      <div class="content-container">${n}</div>
    </ha-card>
  `}(e,this.config.title,n,t)}};var Bt;e([Se({attribute:!1})],Ht.prototype,"hass",void 0),e([Se({attribute:!1})],Ht.prototype,"config",void 0),e([Se({attribute:!1})],Ht.prototype,"events",void 0),e([Se({attribute:!1})],Ht.prototype,"isLoading",void 0),e([Se({attribute:!1})],Ht.prototype,"isExpanded",void 0),Ht=e([(Bt="calendar-card-pro",(e,t)=>{void 0!==t?t.addInitializer((()=>{customElements.define(Bt,e)})):customElements.define(Bt,e)})],Ht),customElements.define("calendar-card-pro-editor",Tt),window.customCards=window.customCards||[],window.customCards.push({type:"calendar-card-pro",name:"Calendar Card Pro",preview:!0,description:"A calendar card that supports multiple calendars with individual styling.",documentationURL:"https://github.com/alexpfau/calendar-card-pro"});
//# sourceMappingURL=calendar-card-pro.js.map
