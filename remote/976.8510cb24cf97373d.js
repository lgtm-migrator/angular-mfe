(self.webpackChunkremote=self.webpackChunkremote||[]).push([[976],{9976:(pe,be,le)=>{le.r(be);var Se=le(7e3),ue=(le(7208),le(9864)),ye=le(2188);let Pe=(()=>{class U{}return U.\u0275fac=function(fe){return new(fe||U)},U.\u0275cmp=ue.\u0275\u0275defineComponent({type:U,selectors:[["mfe-root"]],decls:1,vars:0,template:function(fe,De){1&fe&&ue.\u0275\u0275element(0,"router-outlet")},directives:[ye.RouterOutlet],encapsulation:2,changeDetection:0}),U})(),we=(()=>{class U{}return U.\u0275fac=function(fe){return new(fe||U)},U.\u0275mod=ue.\u0275\u0275defineNgModule({type:U,bootstrap:[Pe]}),U.\u0275inj=ue.\u0275\u0275defineInjector({providers:[],imports:[[Se.BrowserModule,ye.RouterModule.forRoot([],{initialNavigation:"enabledBlocking"})]]}),U})();(0,ue.enableProdMode)(),Se.platformBrowser().bootstrapModule(we).catch(console.error)},7208:()=>{!function(e){const n=e.performance;function i(I){n&&n.mark&&n.mark(I)}function o(I,E){n&&n.measure&&n.measure(I,E)}i("Zone");const c=e.__Zone_symbol_prefix||"__zone_symbol__";function a(I){return c+I}const p=!0===e[a("forceDuplicateZoneCheck")];if(e.Zone){if(p||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let d=(()=>{class I{constructor(t,r){this._parent=t,this._name=r?r.name||"unnamed":"<root>",this._properties=r&&r.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,r)}static assertZonePatched(){if(e.Promise!==ce.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=I.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return oe}static __load_patch(t,r,k=!1){if(ce.hasOwnProperty(t)){if(!k&&p)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const C="Zone:"+t;i(C),ce[t]=r(e,I,Y),o(C,C)}}get parent(){return this._parent}get name(){return this._name}get(t){const r=this.getZoneWith(t);if(r)return r._properties[t]}getZoneWith(t){let r=this;for(;r;){if(r._properties.hasOwnProperty(t))return r;r=r._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,r){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const k=this._zoneDelegate.intercept(this,t,r),C=this;return function(){return C.runGuarded(k,this,arguments,r)}}run(t,r,k,C){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,r,k,C)}finally{W=W.parent}}runGuarded(t,r=null,k,C){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,r,k,C)}catch(J){if(this._zoneDelegate.handleError(this,J))throw J}}finally{W=W.parent}}runTask(t,r,k){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");if(t.state===x&&(t.type===ee||t.type===w))return;const C=t.state!=y;C&&t._transitionTo(y,A),t.runCount++;const J=oe;oe=t,W={parent:W,zone:this};try{t.type==w&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,r,k)}catch(l){if(this._zoneDelegate.handleError(this,l))throw l}}finally{t.state!==x&&t.state!==h&&(t.type==ee||t.data&&t.data.isPeriodic?C&&t._transitionTo(A,y):(t.runCount=0,this._updateTaskCount(t,-1),C&&t._transitionTo(x,y,x))),W=W.parent,oe=J}}scheduleTask(t){if(t.zone&&t.zone!==this){let k=this;for(;k;){if(k===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);k=k.parent}}t._transitionTo(z,x);const r=[];t._zoneDelegates=r,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(k){throw t._transitionTo(h,z,x),this._zoneDelegate.handleError(this,k),k}return t._zoneDelegates===r&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(A,z),t}scheduleMicroTask(t,r,k,C){return this.scheduleTask(new m(M,t,r,k,C,void 0))}scheduleMacroTask(t,r,k,C,J){return this.scheduleTask(new m(w,t,r,k,C,J))}scheduleEventTask(t,r,k,C,J){return this.scheduleTask(new m(ee,t,r,k,C,J))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||K).name+"; Execution: "+this.name+")");t._transitionTo(G,A,y);try{this._zoneDelegate.cancelTask(this,t)}catch(r){throw t._transitionTo(h,G),this._zoneDelegate.handleError(this,r),r}return this._updateTaskCount(t,-1),t._transitionTo(x,G),t.runCount=0,t}_updateTaskCount(t,r){const k=t._zoneDelegates;-1==r&&(t._zoneDelegates=null);for(let C=0;C<k.length;C++)k[C]._updateTaskCount(t.type,r)}}return I.__symbol__=a,I})();const P={name:"",onHasTask:(I,E,t,r)=>I.hasTask(t,r),onScheduleTask:(I,E,t,r)=>I.scheduleTask(t,r),onInvokeTask:(I,E,t,r,k,C)=>I.invokeTask(t,r,k,C),onCancelTask:(I,E,t,r)=>I.cancelTask(t,r)};class v{constructor(E,t,r){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=E,this._parentDelegate=t,this._forkZS=r&&(r&&r.onFork?r:t._forkZS),this._forkDlgt=r&&(r.onFork?t:t._forkDlgt),this._forkCurrZone=r&&(r.onFork?this.zone:t._forkCurrZone),this._interceptZS=r&&(r.onIntercept?r:t._interceptZS),this._interceptDlgt=r&&(r.onIntercept?t:t._interceptDlgt),this._interceptCurrZone=r&&(r.onIntercept?this.zone:t._interceptCurrZone),this._invokeZS=r&&(r.onInvoke?r:t._invokeZS),this._invokeDlgt=r&&(r.onInvoke?t:t._invokeDlgt),this._invokeCurrZone=r&&(r.onInvoke?this.zone:t._invokeCurrZone),this._handleErrorZS=r&&(r.onHandleError?r:t._handleErrorZS),this._handleErrorDlgt=r&&(r.onHandleError?t:t._handleErrorDlgt),this._handleErrorCurrZone=r&&(r.onHandleError?this.zone:t._handleErrorCurrZone),this._scheduleTaskZS=r&&(r.onScheduleTask?r:t._scheduleTaskZS),this._scheduleTaskDlgt=r&&(r.onScheduleTask?t:t._scheduleTaskDlgt),this._scheduleTaskCurrZone=r&&(r.onScheduleTask?this.zone:t._scheduleTaskCurrZone),this._invokeTaskZS=r&&(r.onInvokeTask?r:t._invokeTaskZS),this._invokeTaskDlgt=r&&(r.onInvokeTask?t:t._invokeTaskDlgt),this._invokeTaskCurrZone=r&&(r.onInvokeTask?this.zone:t._invokeTaskCurrZone),this._cancelTaskZS=r&&(r.onCancelTask?r:t._cancelTaskZS),this._cancelTaskDlgt=r&&(r.onCancelTask?t:t._cancelTaskDlgt),this._cancelTaskCurrZone=r&&(r.onCancelTask?this.zone:t._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const k=r&&r.onHasTask;(k||t&&t._hasTaskZS)&&(this._hasTaskZS=k?r:P,this._hasTaskDlgt=t,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=E,r.onScheduleTask||(this._scheduleTaskZS=P,this._scheduleTaskDlgt=t,this._scheduleTaskCurrZone=this.zone),r.onInvokeTask||(this._invokeTaskZS=P,this._invokeTaskDlgt=t,this._invokeTaskCurrZone=this.zone),r.onCancelTask||(this._cancelTaskZS=P,this._cancelTaskDlgt=t,this._cancelTaskCurrZone=this.zone))}fork(E,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,E,t):new d(E,t)}intercept(E,t,r){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,E,t,r):t}invoke(E,t,r,k,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,E,t,r,k,C):t.apply(r,k)}handleError(E,t){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,E,t)}scheduleTask(E,t){let r=t;if(this._scheduleTaskZS)this._hasTaskZS&&r._zoneDelegates.push(this._hasTaskDlgtOwner),r=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,E,t),r||(r=t);else if(t.scheduleFn)t.scheduleFn(t);else{if(t.type!=M)throw new Error("Task is missing scheduleFn.");R(t)}return r}invokeTask(E,t,r,k){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,E,t,r,k):t.callback.apply(r,k)}cancelTask(E,t){let r;if(this._cancelTaskZS)r=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,E,t);else{if(!t.cancelFn)throw Error("Task is not cancelable");r=t.cancelFn(t)}return r}hasTask(E,t){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,E,t)}catch(r){this.handleError(E,r)}}_updateTaskCount(E,t){const r=this._taskCounts,k=r[E],C=r[E]=k+t;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=k&&0!=C||this.hasTask(this.zone,{microTask:r.microTask>0,macroTask:r.macroTask>0,eventTask:r.eventTask>0,change:E})}}class m{constructor(E,t,r,k,C,J){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=E,this.source=t,this.data=k,this.scheduleFn=C,this.cancelFn=J,!r)throw new Error("callback is not defined");this.callback=r;const l=this;this.invoke=E===ee&&k&&k.useG?m.invokeTask:function(){return m.invokeTask.call(e,l,this,arguments)}}static invokeTask(E,t,r){E||(E=this),te++;try{return E.runCount++,E.zone.runTask(E,t,r)}finally{1==te&&_(),te--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(x,z)}_transitionTo(E,t,r){if(this._state!==t&&this._state!==r)throw new Error(`${this.type} '${this.source}': can not transition to '${E}', expecting state '${t}'${r?" or '"+r+"'":""}, was '${this._state}'.`);this._state=E,E==x&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const L=a("setTimeout"),Z=a("Promise"),N=a("then");let Q,B=[],H=!1;function q(I){if(Q||e[Z]&&(Q=e[Z].resolve(0)),Q){let E=Q[N];E||(E=Q.then),E.call(Q,I)}else e[L](I,0)}function R(I){0===te&&0===B.length&&q(_),I&&B.push(I)}function _(){if(!H){for(H=!0;B.length;){const I=B;B=[];for(let E=0;E<I.length;E++){const t=I[E];try{t.zone.runTask(t,null,null)}catch(r){Y.onUnhandledError(r)}}}Y.microtaskDrainDone(),H=!1}}const K={name:"NO ZONE"},x="notScheduled",z="scheduling",A="scheduled",y="running",G="canceling",h="unknown",M="microTask",w="macroTask",ee="eventTask",ce={},Y={symbol:a,currentZoneFrame:()=>W,onUnhandledError:X,microtaskDrainDone:X,scheduleMicroTask:R,showUncaughtError:()=>!d[a("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:X,patchMethod:()=>X,bindArguments:()=>[],patchThen:()=>X,patchMacroTask:()=>X,patchEventPrototype:()=>X,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>X,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>X,wrapWithCurrentZone:()=>X,filterProperties:()=>[],attachOriginToPatched:()=>X,_redefineProperty:()=>X,patchCallbacks:()=>X,nativeScheduleMicroTask:q};let W={parent:null,zone:new d(null,null)},oe=null,te=0;function X(){}o("Zone","Zone"),e.Zone=d}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const pe=Object.getOwnPropertyDescriptor,be=Object.defineProperty,le=Object.getPrototypeOf,Se=Object.create,Ve=Array.prototype.slice,ue="addEventListener",ye="removeEventListener",Pe=Zone.__symbol__(ue),we=Zone.__symbol__(ye),se="true",U="false",ie=Zone.__symbol__("");function fe(e,n){return Zone.current.wrap(e,n)}function De(e,n,i,o,c){return Zone.current.scheduleMacroTask(e,n,i,o,c)}const j=Zone.__symbol__,Oe="undefined"!=typeof window,me=Oe?window:void 0,$=Oe&&me||"object"==typeof self&&self||global;function Le(e,n){for(let i=e.length-1;i>=0;i--)"function"==typeof e[i]&&(e[i]=fe(e[i],n+"_"+i));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const Be="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,Ze=!("nw"in $)&&void 0!==$.process&&"[object process]"==={}.toString.call($.process),Ae=!Ze&&!Be&&!(!Oe||!me.HTMLElement),Ue=void 0!==$.process&&"[object process]"==={}.toString.call($.process)&&!Be&&!(!Oe||!me.HTMLElement),Ne={},We=function(e){if(!(e=e||$.event))return;let n=Ne[e.type];n||(n=Ne[e.type]=j("ON_PROPERTY"+e.type));const i=this||e.target||$,o=i[n];let c;if(Ae&&i===me&&"error"===e.type){const a=e;c=o&&o.call(this,a.message,a.filename,a.lineno,a.colno,a.error),!0===c&&e.preventDefault()}else c=o&&o.apply(this,arguments),null!=c&&!c&&e.preventDefault();return c};function Xe(e,n,i){let o=pe(e,n);if(!o&&i&&pe(i,n)&&(o={enumerable:!0,configurable:!0}),!o||!o.configurable)return;const c=j("on"+n+"patched");if(e.hasOwnProperty(c)&&e[c])return;delete o.writable,delete o.value;const a=o.get,p=o.set,d=n.slice(2);let P=Ne[d];P||(P=Ne[d]=j("ON_PROPERTY"+d)),o.set=function(v){let m=this;!m&&e===$&&(m=$),m&&("function"==typeof m[P]&&m.removeEventListener(d,We),p&&p.call(m,null),m[P]=v,"function"==typeof v&&m.addEventListener(d,We,!1))},o.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;const m=v[P];if(m)return m;if(a){let L=a.call(this);if(L)return o.set.call(this,L),"function"==typeof v.removeAttribute&&v.removeAttribute(n),L}return null},be(e,n,o),e[c]=!0}function qe(e,n,i){if(n)for(let o=0;o<n.length;o++)Xe(e,"on"+n[o],i);else{const o=[];for(const c in e)"on"==c.slice(0,2)&&o.push(c);for(let c=0;c<o.length;c++)Xe(e,o[c],i)}}const re=j("originalInstance");function Re(e){const n=$[e];if(!n)return;$[j(e)]=n,$[e]=function(){const c=Le(arguments,e);switch(c.length){case 0:this[re]=new n;break;case 1:this[re]=new n(c[0]);break;case 2:this[re]=new n(c[0],c[1]);break;case 3:this[re]=new n(c[0],c[1],c[2]);break;case 4:this[re]=new n(c[0],c[1],c[2],c[3]);break;default:throw new Error("Arg list too long.")}},de($[e],n);const i=new n(function(){});let o;for(o in i)"XMLHttpRequest"===e&&"responseBlob"===o||function(c){"function"==typeof i[c]?$[e].prototype[c]=function(){return this[re][c].apply(this[re],arguments)}:be($[e].prototype,c,{set:function(a){"function"==typeof a?(this[re][c]=fe(a,e+"."+c),de(this[re][c],a)):this[re][c]=a},get:function(){return this[re][c]}})}(o);for(o in n)"prototype"!==o&&n.hasOwnProperty(o)&&($[e][o]=n[o])}function he(e,n,i){let o=e;for(;o&&!o.hasOwnProperty(n);)o=le(o);!o&&e[n]&&(o=e);const c=j(n);let a=null;if(o&&(!(a=o[c])||!o.hasOwnProperty(c))&&(a=o[c]=o[n],Fe(o&&pe(o,n)))){const d=i(a,c,n);o[n]=function(){return d(this,arguments)},de(o[n],a)}return a}function lt(e,n,i){let o=null;function c(a){const p=a.data;return p.args[p.cbIdx]=function(){a.invoke.apply(this,arguments)},o.apply(p.target,p.args),a}o=he(e,n,a=>function(p,d){const P=i(p,d);return P.cbIdx>=0&&"function"==typeof d[P.cbIdx]?De(P.name,d[P.cbIdx],P,c):a.apply(p,d)})}function de(e,n){e[j("OriginalDelegate")]=n}let ze=!1,je=!1;function ft(){if(ze)return je;ze=!0;try{const e=me.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(je=!0)}catch(e){}return je}Zone.__load_patch("ZoneAwarePromise",(e,n,i)=>{const o=Object.getOwnPropertyDescriptor,c=Object.defineProperty,p=i.symbol,d=[],P=!0===e[p("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=p("Promise"),m=p("then");i.onUnhandledError=l=>{if(i.showUncaughtError()){const u=l&&l.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",l.zone.name,"; Task:",l.task&&l.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(l)}},i.microtaskDrainDone=()=>{for(;d.length;){const l=d.shift();try{l.zone.runGuarded(()=>{throw l.throwOriginal?l.rejection:l})}catch(u){N(u)}}};const Z=p("unhandledPromiseRejectionHandler");function N(l){i.onUnhandledError(l);try{const u=n[Z];"function"==typeof u&&u.call(this,l)}catch(u){}}function B(l){return l&&l.then}function H(l){return l}function Q(l){return t.reject(l)}const q=p("state"),R=p("value"),_=p("finally"),K=p("parentPromiseValue"),x=p("parentPromiseState"),A=null,y=!0,G=!1;function M(l,u){return s=>{try{Y(l,u,s)}catch(f){Y(l,!1,f)}}}const w=function(){let l=!1;return function(s){return function(){l||(l=!0,s.apply(null,arguments))}}},ce=p("currentTaskTrace");function Y(l,u,s){const f=w();if(l===s)throw new TypeError("Promise resolved with itself");if(l[q]===A){let g=null;try{("object"==typeof s||"function"==typeof s)&&(g=s&&s.then)}catch(b){return f(()=>{Y(l,!1,b)})(),l}if(u!==G&&s instanceof t&&s.hasOwnProperty(q)&&s.hasOwnProperty(R)&&s[q]!==A)oe(s),Y(l,s[q],s[R]);else if(u!==G&&"function"==typeof g)try{g.call(s,f(M(l,u)),f(M(l,!1)))}catch(b){f(()=>{Y(l,!1,b)})()}else{l[q]=u;const b=l[R];if(l[R]=s,l[_]===_&&u===y&&(l[q]=l[x],l[R]=l[K]),u===G&&s instanceof Error){const T=n.currentTask&&n.currentTask.data&&n.currentTask.data.__creationTrace__;T&&c(s,ce,{configurable:!0,enumerable:!1,writable:!0,value:T})}for(let T=0;T<b.length;)te(l,b[T++],b[T++],b[T++],b[T++]);if(0==b.length&&u==G){l[q]=0;let T=s;try{throw new Error("Uncaught (in promise): "+function a(l){return l&&l.toString===Object.prototype.toString?(l.constructor&&l.constructor.name||"")+": "+JSON.stringify(l):l?l.toString():Object.prototype.toString.call(l)}(s)+(s&&s.stack?"\n"+s.stack:""))}catch(S){T=S}P&&(T.throwOriginal=!0),T.rejection=s,T.promise=l,T.zone=n.current,T.task=n.currentTask,d.push(T),i.scheduleMicroTask()}}}return l}const W=p("rejectionHandledHandler");function oe(l){if(0===l[q]){try{const u=n[W];u&&"function"==typeof u&&u.call(this,{rejection:l[R],promise:l})}catch(u){}l[q]=G;for(let u=0;u<d.length;u++)l===d[u].promise&&d.splice(u,1)}}function te(l,u,s,f,g){oe(l);const b=l[q],T=b?"function"==typeof f?f:H:"function"==typeof g?g:Q;u.scheduleMicroTask("Promise.then",()=>{try{const S=l[R],D=!!s&&_===s[_];D&&(s[K]=S,s[x]=b);const O=u.run(T,void 0,D&&T!==Q&&T!==H?[]:[S]);Y(s,!0,O)}catch(S){Y(s,!1,S)}},s)}const I=function(){},E=e.AggregateError;class t{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return Y(new this(null),y,u)}static reject(u){return Y(new this(null),G,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new E([],"All promises were rejected"));const s=[];let f=0;try{for(let T of u)f++,s.push(t.resolve(T))}catch(T){return Promise.reject(new E([],"All promises were rejected"))}if(0===f)return Promise.reject(new E([],"All promises were rejected"));let g=!1;const b=[];return new t((T,S)=>{for(let D=0;D<s.length;D++)s[D].then(O=>{g||(g=!0,T(O))},O=>{b.push(O),f--,0===f&&(g=!0,S(new E(b,"All promises were rejected")))})})}static race(u){let s,f,g=new this((S,D)=>{s=S,f=D});function b(S){s(S)}function T(S){f(S)}for(let S of u)B(S)||(S=this.resolve(S)),S.then(b,T);return g}static all(u){return t.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof t?this:t).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,s){let f,g,b=new this((O,V)=>{f=O,g=V}),T=2,S=0;const D=[];for(let O of u){B(O)||(O=this.resolve(O));const V=S;try{O.then(F=>{D[V]=s?s.thenCallback(F):F,T--,0===T&&f(D)},F=>{s?(D[V]=s.errorCallback(F),T--,0===T&&f(D)):g(F)})}catch(F){g(F)}T++,S++}return T-=2,0===T&&f(D),b}constructor(u){const s=this;if(!(s instanceof t))throw new Error("Must be an instanceof Promise.");s[q]=A,s[R]=[];try{const f=w();u&&u(f(M(s,y)),f(M(s,G)))}catch(f){Y(s,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return t}then(u,s){var f;let g=null===(f=this.constructor)||void 0===f?void 0:f[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||t);const b=new g(I),T=n.current;return this[q]==A?this[R].push(T,b,u,s):te(this,T,b,u,s),b}catch(u){return this.then(null,u)}finally(u){var s;let f=null===(s=this.constructor)||void 0===s?void 0:s[Symbol.species];(!f||"function"!=typeof f)&&(f=t);const g=new f(I);g[_]=_;const b=n.current;return this[q]==A?this[R].push(b,g,u,u):te(this,b,g,u,u),g}}t.resolve=t.resolve,t.reject=t.reject,t.race=t.race,t.all=t.all;const r=e[v]=e.Promise;e.Promise=t;const k=p("thenPatched");function C(l){const u=l.prototype,s=o(u,"then");if(s&&(!1===s.writable||!s.configurable))return;const f=u.then;u[m]=f,l.prototype.then=function(g,b){return new t((S,D)=>{f.call(this,S,D)}).then(g,b)},l[k]=!0}return i.patchThen=C,r&&(C(r),he(e,"fetch",l=>function J(l){return function(u,s){let f=l.apply(u,s);if(f instanceof t)return f;let g=f.constructor;return g[k]||C(g),f}}(l))),Promise[n.__symbol__("uncaughtPromiseErrors")]=d,t}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,i=j("OriginalDelegate"),o=j("Promise"),c=j("Error"),a=function(){if("function"==typeof this){const v=this[i];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const m=e[o];if(m)return n.call(m)}if(this===Error){const m=e[c];if(m)return n.call(m)}}return n.call(this)};a[i]=n,Function.prototype.toString=a;const p=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":p.call(this)}});let ge=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){ge=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){ge=!1}const ht={useG:!0},ne={},Ye={},$e=new RegExp("^"+ie+"(\\w+)(true|false)$"),Je=j("propagationStopped");function Ke(e,n){const i=(n?n(e):e)+U,o=(n?n(e):e)+se,c=ie+i,a=ie+o;ne[e]={},ne[e][U]=c,ne[e][se]=a}function dt(e,n,i,o){const c=o&&o.add||ue,a=o&&o.rm||ye,p=o&&o.listeners||"eventListeners",d=o&&o.rmAll||"removeAllListeners",P=j(c),v="."+c+":",Z=function(R,_,K){if(R.isRemoved)return;const x=R.callback;let z;"object"==typeof x&&x.handleEvent&&(R.callback=y=>x.handleEvent(y),R.originalDelegate=x);try{R.invoke(R,_,[K])}catch(y){z=y}const A=R.options;return A&&"object"==typeof A&&A.once&&_[a].call(_,K.type,R.originalDelegate?R.originalDelegate:R.callback,A),z};function N(R,_,K){if(!(_=_||e.event))return;const x=R||_.target||e,z=x[ne[_.type][K?se:U]];if(z){const A=[];if(1===z.length){const y=Z(z[0],x,_);y&&A.push(y)}else{const y=z.slice();for(let G=0;G<y.length&&(!_||!0!==_[Je]);G++){const h=Z(y[G],x,_);h&&A.push(h)}}if(1===A.length)throw A[0];for(let y=0;y<A.length;y++){const G=A[y];n.nativeScheduleMicroTask(()=>{throw G})}}}const B=function(R){return N(this,R,!1)},H=function(R){return N(this,R,!0)};function Q(R,_){if(!R)return!1;let K=!0;_&&void 0!==_.useG&&(K=_.useG);const x=_&&_.vh;let z=!0;_&&void 0!==_.chkDup&&(z=_.chkDup);let A=!1;_&&void 0!==_.rt&&(A=_.rt);let y=R;for(;y&&!y.hasOwnProperty(c);)y=le(y);if(!y&&R[c]&&(y=R),!y||y[P])return!1;const G=_&&_.eventNameToString,h={},M=y[P]=y[c],w=y[j(a)]=y[a],ee=y[j(p)]=y[p],ce=y[j(d)]=y[d];let Y;function W(s,f){return!ge&&"object"==typeof s&&s?!!s.capture:ge&&f?"boolean"==typeof s?{capture:s,passive:!0}:s?"object"==typeof s&&!1!==s.passive?Object.assign(Object.assign({},s),{passive:!0}):s:{passive:!0}:s}_&&_.prepend&&(Y=y[j(_.prepend)]=y[_.prepend]);const t=K?function(s){if(!h.isExisting)return M.call(h.target,h.eventName,h.capture?H:B,h.options)}:function(s){return M.call(h.target,h.eventName,s.invoke,h.options)},r=K?function(s){if(!s.isRemoved){const f=ne[s.eventName];let g;f&&(g=f[s.capture?se:U]);const b=g&&s.target[g];if(b)for(let T=0;T<b.length;T++)if(b[T]===s){b.splice(T,1),s.isRemoved=!0,0===b.length&&(s.allRemoved=!0,s.target[g]=null);break}}if(s.allRemoved)return w.call(s.target,s.eventName,s.capture?H:B,s.options)}:function(s){return w.call(s.target,s.eventName,s.invoke,s.options)},C=_&&_.diff?_.diff:function(s,f){const g=typeof f;return"function"===g&&s.callback===f||"object"===g&&s.originalDelegate===f},J=Zone[j("UNPATCHED_EVENTS")],l=e[j("PASSIVE_EVENTS")],u=function(s,f,g,b,T=!1,S=!1){return function(){const D=this||e;let O=arguments[0];_&&_.transferEventName&&(O=_.transferEventName(O));let V=arguments[1];if(!V)return s.apply(this,arguments);if(Ze&&"uncaughtException"===O)return s.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return s.apply(this,arguments);F=!0}if(x&&!x(s,V,D,arguments))return;const _e=ge&&!!l&&-1!==l.indexOf(O),ae=W(arguments[2],_e);if(J)for(let Te=0;Te<J.length;Te++)if(O===J[Te])return _e?s.call(D,O,V,ae):s.apply(this,arguments);const xe=!!ae&&("boolean"==typeof ae||ae.capture),nt=!(!ae||"object"!=typeof ae)&&ae.once,gt=Zone.current;let Ge=ne[O];Ge||(Ke(O,G),Ge=ne[O]);const rt=Ge[xe?se:U];let Ie,ve=D[rt],ot=!1;if(ve){if(ot=!0,z)for(let Te=0;Te<ve.length;Te++)if(C(ve[Te],V))return}else ve=D[rt]=[];const st=D.constructor.name,it=Ye[st];it&&(Ie=it[O]),Ie||(Ie=st+f+(G?G(O):O)),h.options=ae,nt&&(h.options.once=!1),h.target=D,h.capture=xe,h.eventName=O,h.isExisting=ot;const Ce=K?ht:void 0;Ce&&(Ce.taskData=h);const Ee=gt.scheduleEventTask(Ie,V,Ce,g,b);return h.target=null,Ce&&(Ce.taskData=null),nt&&(ae.once=!0),!ge&&"boolean"==typeof Ee.options||(Ee.options=ae),Ee.target=D,Ee.capture=xe,Ee.eventName=O,F&&(Ee.originalDelegate=V),S?ve.unshift(Ee):ve.push(Ee),T?D:void 0}};return y[c]=u(M,v,t,r,A),Y&&(y.prependListener=u(Y,".prependListener:",function(s){return Y.call(h.target,h.eventName,s.invoke,h.options)},r,A,!0)),y[a]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=arguments[2],b=!!g&&("boolean"==typeof g||g.capture),T=arguments[1];if(!T)return w.apply(this,arguments);if(x&&!x(w,T,s,arguments))return;const S=ne[f];let D;S&&(D=S[b?se:U]);const O=D&&s[D];if(O)for(let V=0;V<O.length;V++){const F=O[V];if(C(F,T))return O.splice(V,1),F.isRemoved=!0,0===O.length&&(F.allRemoved=!0,s[D]=null,"string"==typeof f)&&(s[ie+"ON_PROPERTY"+f]=null),F.zone.cancelTask(F),A?s:void 0}return w.apply(this,arguments)},y[p]=function(){const s=this||e;let f=arguments[0];_&&_.transferEventName&&(f=_.transferEventName(f));const g=[],b=Qe(s,G?G(f):f);for(let T=0;T<b.length;T++){const S=b[T];g.push(S.originalDelegate?S.originalDelegate:S.callback)}return g},y[d]=function(){const s=this||e;let f=arguments[0];if(f){_&&_.transferEventName&&(f=_.transferEventName(f));const g=ne[f];if(g){const S=s[g[U]],D=s[g[se]];if(S){const O=S.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}if(D){const O=D.slice();for(let V=0;V<O.length;V++){const F=O[V];this[a].call(this,f,F.originalDelegate?F.originalDelegate:F.callback,F.options)}}}}else{const g=Object.keys(s);for(let b=0;b<g.length;b++){const S=$e.exec(g[b]);let D=S&&S[1];D&&"removeListener"!==D&&this[d].call(this,D)}this[d].call(this,"removeListener")}if(A)return this},de(y[c],M),de(y[a],w),ce&&de(y[d],ce),ee&&de(y[p],ee),!0}let q=[];for(let R=0;R<i.length;R++)q[R]=Q(i[R],o);return q}function Qe(e,n){if(!n){const a=[];for(let p in e){const d=$e.exec(p);let P=d&&d[1];if(P&&(!n||P===n)){const v=e[p];if(v)for(let m=0;m<v.length;m++)a.push(v[m])}}return a}let i=ne[n];i||(Ke(n),i=ne[n]);const o=e[i[U]],c=e[i[se]];return o?c?o.concat(c):o.slice():c?c.slice():[]}function _t(e,n){const i=e.Event;i&&i.prototype&&n.patchMethod(i.prototype,"stopImmediatePropagation",o=>function(c,a){c[Je]=!0,o&&o.apply(c,a)})}function Et(e,n,i,o,c){const a=Zone.__symbol__(o);if(n[a])return;const p=n[a]=n[o];n[o]=function(d,P,v){return P&&P.prototype&&c.forEach(function(m){const L=`${i}.${o}::`+m,Z=P.prototype;try{if(Z.hasOwnProperty(m)){const N=e.ObjectGetOwnPropertyDescriptor(Z,m);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,L),e._redefineProperty(P.prototype,m,N)):Z[m]&&(Z[m]=e.wrapWithCurrentZone(Z[m],L))}else Z[m]&&(Z[m]=e.wrapWithCurrentZone(Z[m],L))}catch(N){}}),p.call(n,d,P,v)},e.attachOriginToPatched(n[o],p)}function et(e,n,i){if(!i||0===i.length)return n;const o=i.filter(a=>a.target===e);if(!o||0===o.length)return n;const c=o[0].ignoreProperties;return n.filter(a=>-1===c.indexOf(a))}function tt(e,n,i,o){e&&qe(e,et(e,n,i),o)}function He(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,i)=>{const o=He(e);i.patchOnProperties=qe,i.patchMethod=he,i.bindArguments=Le,i.patchMacroTask=lt;const c=n.__symbol__("BLACK_LISTED_EVENTS"),a=n.__symbol__("UNPATCHED_EVENTS");e[a]&&(e[c]=e[a]),e[c]&&(n[c]=n[a]=e[c]),i.patchEventPrototype=_t,i.patchEventTarget=dt,i.isIEOrEdge=ft,i.ObjectDefineProperty=be,i.ObjectGetOwnPropertyDescriptor=pe,i.ObjectCreate=Se,i.ArraySlice=Ve,i.patchClass=Re,i.wrapWithCurrentZone=fe,i.filterProperties=et,i.attachOriginToPatched=de,i._redefineProperty=Object.defineProperty,i.patchCallbacks=Et,i.getGlobalObjects=()=>({globalSources:Ye,zoneSymbolEventNames:ne,eventNames:o,isBrowser:Ae,isMix:Ue,isNode:Ze,TRUE_STR:se,FALSE_STR:U,ZONE_SYMBOL_PREFIX:ie,ADD_EVENT_LISTENER_STR:ue,REMOVE_EVENT_LISTENER_STR:ye})});const Me=j("zoneTask");function ke(e,n,i,o){let c=null,a=null;i+=o;const p={};function d(v){const m=v.data;return m.args[0]=function(){return v.invoke.apply(this,arguments)},m.handleId=c.apply(e,m.args),v}function P(v){return a.call(e,v.data.handleId)}c=he(e,n+=o,v=>function(m,L){if("function"==typeof L[0]){const Z={isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?L[1]||0:void 0,args:L},N=L[0];L[0]=function(){try{return N.apply(this,arguments)}finally{Z.isPeriodic||("number"==typeof Z.handleId?delete p[Z.handleId]:Z.handleId&&(Z.handleId[Me]=null))}};const B=De(n,L[0],Z,d,P);if(!B)return B;const H=B.data.handleId;return"number"==typeof H?p[H]=B:H&&(H[Me]=B),H&&H.ref&&H.unref&&"function"==typeof H.ref&&"function"==typeof H.unref&&(B.ref=H.ref.bind(H),B.unref=H.unref.bind(H)),"number"==typeof H||H?H:B}return v.apply(e,L)}),a=he(e,i,v=>function(m,L){const Z=L[0];let N;"number"==typeof Z?N=p[Z]:(N=Z&&Z[Me],N||(N=Z)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof Z?delete p[Z]:Z&&(Z[Me]=null),N.zone.cancelTask(N)):v.apply(e,L)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("queueMicrotask",(e,n,i)=>{i.patchMethod(e,"queueMicrotask",o=>function(c,a){n.current.scheduleMicroTask("queueMicrotask",a[0])})}),Zone.__load_patch("timers",e=>{const n="set",i="clear";ke(e,n,i,"Timeout"),ke(e,n,i,"Interval"),ke(e,n,i,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{ke(e,"request","cancel","AnimationFrame"),ke(e,"mozRequest","mozCancel","AnimationFrame"),ke(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const i=["alert","prompt","confirm"];for(let o=0;o<i.length;o++)he(e,i[o],(a,p,d)=>function(P,v){return n.current.run(a,e,v,d)})}),Zone.__load_patch("EventTarget",(e,n,i)=>{(function mt(e,n){n.patchEventPrototype(e,n)})(e,i),function yt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:i,zoneSymbolEventNames:o,TRUE_STR:c,FALSE_STR:a,ZONE_SYMBOL_PREFIX:p}=n.getGlobalObjects();for(let P=0;P<i.length;P++){const v=i[P],Z=p+(v+a),N=p+(v+c);o[v]={},o[v][a]=Z,o[v][c]=N}const d=e.EventTarget;d&&d.prototype&&n.patchEventTarget(e,n,[d&&d.prototype])}(e,i);const o=e.XMLHttpRequestEventTarget;o&&o.prototype&&i.patchEventTarget(e,i,[o.prototype])}),Zone.__load_patch("MutationObserver",(e,n,i)=>{Re("MutationObserver"),Re("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,i)=>{Re("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,i)=>{Re("FileReader")}),Zone.__load_patch("on_property",(e,n,i)=>{!function Tt(e,n){if(Ze&&!Ue||Zone[e.symbol("patchEvents")])return;const i=n.__Zone_ignore_on_properties;let o=[];if(Ae){const c=window;o=o.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const a=function ut(){try{const e=me.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}()?[{target:c,ignoreProperties:["error"]}]:[];tt(c,He(c),i&&i.concat(a),le(c))}o=o.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let c=0;c<o.length;c++){const a=n[o[c]];a&&a.prototype&&tt(a.prototype,He(a.prototype),i)}}(i,e)}),Zone.__load_patch("customElements",(e,n,i)=>{!function pt(e,n){const{isBrowser:i,isMix:o}=n.getGlobalObjects();(i||o)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,i)}),Zone.__load_patch("XHR",(e,n)=>{!function P(v){const m=v.XMLHttpRequest;if(!m)return;const L=m.prototype;let N=L[Pe],B=L[we];if(!N){const h=v.XMLHttpRequestEventTarget;if(h){const M=h.prototype;N=M[Pe],B=M[we]}}const H="readystatechange",Q="scheduled";function q(h){const M=h.data,w=M.target;w[a]=!1,w[d]=!1;const ee=w[c];N||(N=w[Pe],B=w[we]),ee&&B.call(w,H,ee);const ce=w[c]=()=>{if(w.readyState===w.DONE)if(!M.aborted&&w[a]&&h.state===Q){const W=w[n.__symbol__("loadfalse")];if(0!==w.status&&W&&W.length>0){const oe=h.invoke;h.invoke=function(){const te=w[n.__symbol__("loadfalse")];for(let X=0;X<te.length;X++)te[X]===h&&te.splice(X,1);!M.aborted&&h.state===Q&&oe.call(h)},W.push(h)}else h.invoke()}else!M.aborted&&!1===w[a]&&(w[d]=!0)};return N.call(w,H,ce),w[i]||(w[i]=h),y.apply(w,M.args),w[a]=!0,h}function R(){}function _(h){const M=h.data;return M.aborted=!0,G.apply(M.target,M.args)}const K=he(L,"open",()=>function(h,M){return h[o]=0==M[2],h[p]=M[1],K.apply(h,M)}),z=j("fetchTaskAborting"),A=j("fetchTaskScheduling"),y=he(L,"send",()=>function(h,M){if(!0===n.current[A]||h[o])return y.apply(h,M);{const w={target:h,url:h[p],isPeriodic:!1,args:M,aborted:!1},ee=De("XMLHttpRequest.send",R,w,q,_);h&&!0===h[d]&&!w.aborted&&ee.state===Q&&ee.invoke()}}),G=he(L,"abort",()=>function(h,M){const w=function Z(h){return h[i]}(h);if(w&&"string"==typeof w.type){if(null==w.cancelFn||w.data&&w.data.aborted)return;w.zone.cancelTask(w)}else if(!0===n.current[z])return G.apply(h,M)})}(e);const i=j("xhrTask"),o=j("xhrSync"),c=j("xhrListener"),a=j("xhrScheduled"),p=j("xhrURL"),d=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const i=e.constructor.name;for(let o=0;o<n.length;o++){const c=n[o],a=e[c];if(a){if(!Fe(pe(e,c)))continue;e[c]=(d=>{const P=function(){return d.apply(this,Le(arguments,i+"."+c))};return de(P,d),P})(a)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function i(o){return function(c){Qe(e,o).forEach(p=>{const d=e.PromiseRejectionEvent;if(d){const P=new d(o,{promise:c.promise,reason:c.rejection});p.invoke(P)}})}}e.PromiseRejectionEvent&&(n[j("unhandledPromiseRejectionHandler")]=i("unhandledrejection"),n[j("rejectionHandledHandler")]=i("rejectionhandled"))})}}]);