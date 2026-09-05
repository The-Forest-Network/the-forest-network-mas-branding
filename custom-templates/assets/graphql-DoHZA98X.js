import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{n as t,t as n}from"./jsx-runtime-BHz_hoGM.js";var r=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},i=new class extends r{#e;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e();return window.addEventListener(`visibilitychange`,t,!1),()=>{window.removeEventListener(`visibilitychange`,t)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(e=>{typeof e==`boolean`?this.setFocused(e):this.onFocus()})}setFocused(e){this.#e!==e&&(this.#e=e,this.onFocus())}onFocus(){let e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return typeof this.#e==`boolean`?this.#e:globalThis.document?.visibilityState!==`hidden`}},a={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},o=new class{#e=a;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}};function s(e){setTimeout(e,0)}var c=typeof window>`u`||`Deno`in globalThis;function l(){}function u(e,t){return typeof e==`function`?e(t):e}function d(e){return typeof e==`number`&&e>=0&&e!==1/0}function f(e,t){return Math.max(e+(t||0)-Date.now(),0)}function p(e,t){return typeof e==`function`?e(t):e}function m(e,t){return typeof e==`function`?e(t):e}function h(e,t){let{type:n=`all`,exact:r,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(o){if(r){if(t.queryHash!==_(o,t.options))return!1}else if(!y(t.queryKey,o))return!1}if(n!==`all`){let e=t.isActive();if(n===`active`&&!e||n===`inactive`&&e)return!1}return!(typeof s==`boolean`&&t.isStale()!==s||i&&i!==t.state.fetchStatus||a&&!a(t))}function g(e,t){let{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(v(t.options.mutationKey)!==v(a))return!1}else if(!y(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function _(e,t){return(t?.queryKeyHashFn||v)(e)}function v(e){return JSON.stringify(e,(e,t)=>w(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function y(e,t){return e===t?!0:typeof e==typeof t&&e&&t&&typeof e==`object`&&typeof t==`object`?Object.keys(t).every(n=>y(e[n],t[n])):!1}var b=Object.prototype.hasOwnProperty;function x(e,t,n=0){if(e===t)return e;if(n>500)return t;let r=C(e)&&C(t);if(!r&&!(w(e)&&w(t)))return t;let i=(r?e:Object.keys(e)).length,a=r?t:Object.keys(t),o=a.length,s=r?Array(o):{},c=0;for(let l=0;l<o;l++){let o=r?l:a[l],u=e[o],d=t[o];if(u===d){s[o]=u,(r?l<i:b.call(e,o))&&c++;continue}if(u===null||d===null||typeof u!=`object`||typeof d!=`object`){s[o]=d;continue}let f=x(u,d,n+1);s[o]=f,f===u&&c++}return i===o&&c===i?e:s}function S(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function C(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function w(e){if(!T(e))return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(!T(n)||!n.hasOwnProperty(`isPrototypeOf`)||Object.getPrototypeOf(e)!==Object.prototype)}function T(e){return Object.prototype.toString.call(e)===`[object Object]`}function ee(e){return new Promise(t=>{o.setTimeout(t,e)})}function E(e,t,n){return typeof n.structuralSharing==`function`?n.structuralSharing(e,t):n.structuralSharing===!1?t:x(e,t)}function te(e,t,n=0){let r=[...e,t];return n&&r.length>n?r.slice(1):r}function ne(e,t,n=0){let r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var D=Symbol();function O(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===D?()=>Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function k(e,t){return typeof e==`function`?e(...t):!!e}function re(e,t,n){let r=!1,i;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(i??=t(),r?i:(r=!0,i.aborted?n():i.addEventListener(`abort`,n,{once:!0}),i))}),e}var A=(()=>{let e=()=>c;return{isServer(){return e()},setIsServer(t){e=t}}})();function j(){let e,t,n=new Promise((n,r)=>{e=n,t=r});n.status=`pending`,n.catch(()=>{});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.resolve=t=>{r({status:`fulfilled`,value:t}),e(t)},n.reject=e=>{r({status:`rejected`,reason:e}),t(e)},n}var ie=s;function ae(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=ie,a=r=>{t?e.push(r):i(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{t--,t||o()}return n},batchCalls:e=>(...t)=>{a(()=>{e(...t)})},schedule:a,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}var M=ae(),N=new class extends r{#e=!0;#t;#n;constructor(){super(),this.#n=e=>{if(typeof window<`u`&&window.addEventListener){let t=()=>e(!0),n=()=>e(!1);return window.addEventListener(`online`,t,!1),window.addEventListener(`offline`,n,!1),()=>{window.removeEventListener(`online`,t),window.removeEventListener(`offline`,n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(e){this.#n=e,this.#t?.(),this.#t=e(this.setOnline.bind(this))}setOnline(e){this.#e!==e&&(this.#e=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#e}};function oe(e){return Math.min(1e3*2**e,3e4)}function P(e){return(e??`online`)!==`online`||N.isOnline()}var F=class extends Error{constructor(e){super(`CancelledError`),this.revert=e?.revert,this.silent=e?.silent}};function I(e){let t=!1,n=0,r,a=j(),o=()=>a.status!==`pending`,s=t=>{if(!o()){let n=new F(t);p(n),e.onCancel?.(n)}},c=()=>{t=!0},l=()=>{t=!1},u=()=>i.isFocused()&&(e.networkMode===`always`||N.isOnline())&&e.canRun(),d=()=>P(e.networkMode)&&e.canRun(),f=e=>{o()||(r?.(),a.resolve(e))},p=e=>{o()||(r?.(),a.reject(e))},m=()=>new Promise(t=>{r=e=>{(o()||u())&&t(e)},e.onPause?.()}).then(()=>{r=void 0,o()||e.onContinue?.()}),h=()=>{if(o())return;let r,i=n===0?e.initialPromise:void 0;try{r=i??e.fn()}catch(e){r=Promise.reject(e)}Promise.resolve(r).then(f).catch(r=>{if(o())return;let i=e.retry??(A.isServer()?0:3),a=e.retryDelay??oe,s=typeof a==`function`?a(n,r):a,c=i===!0||typeof i==`number`&&n<i||typeof i==`function`&&i(n,r);if(t||!c){p(r);return}n++,e.onFail?.(n,r),ee(s).then(()=>u()?void 0:m()).then(()=>{t?p(r):h()})})};return{promise:a,status:()=>a.status,cancel:s,continue:()=>(r?.(),a),cancelRetry:c,continueRetry:l,canStart:d,start:()=>(d()?h():m().then(h),a)}}var L=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),d(this.gcTime)&&(this.#e=o.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(A.isServer()?1/0:300*1e3))}clearGcTimeout(){this.#e!==void 0&&(o.clearTimeout(this.#e),this.#e=void 0)}};function se(e){return{onFetch:(t,n)=>{let r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],s={pages:[],pageParams:[]},c=0,l=async()=>{let n=!1,l=e=>{re(e,()=>t.signal,()=>n=!0)},u=O(t.options,t.fetchOptions),d=async(e,r,i)=>{if(n)return Promise.reject(t.signal.reason);if(r==null&&e.pages.length)return Promise.resolve(e);let a=(()=>{let e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?`backward`:`forward`,meta:t.options.meta};return l(e),e})(),o=await u(a),{maxPages:s}=t.options,c=i?ne:te;return{pages:c(e.pages,o,s),pageParams:c(e.pageParams,r,s)}};if(i&&a.length){let e=i===`backward`,t=e?ce:R,n={pages:a,pageParams:o};s=await d(n,t(r,n),e)}else{let t=e??a.length;do{let e=c===0?o[0]??r.initialPageParam:R(r,s);if(c>0&&e==null)break;s=await d(s,e),c++}while(c<t)}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(l,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=l}}}function R(e,{pages:t,pageParams:n}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function ce(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}var le=class extends L{#e;#t;#n;#r;#i;#a;#o;#s;constructor(e){super(),this.#s=!1,this.#o=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#i=e.client,this.#r=this.#i.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#t=V(this.options),this.state=e.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#e}get promise(){return this.#a?.promise}setOptions(e){if(this.options={...this.#o,...e},e?._type&&(this.#e=e._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){let e=V(this.options);e.data!==void 0&&(this.setState(B(e.data,e.dataUpdatedAt)),this.#t=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus===`idle`&&this.#r.remove(this)}setData(e,t){let n=E(this.state.data,e,this.options);return this.#l({data:n,type:`success`,dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#l({type:`setState`,state:e})}cancel(e){let t=this.#a?.promise;return this.#a?.cancel(e),t?t.then(l).catch(l):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#t}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>m(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===D||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>p(e.options.staleTime,this)===`static`)}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e===`static`?!1:this.state.isInvalidated?!0:!f(this.state.dataUpdatedAt,e)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#a?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#a?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:`observerAdded`,query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#a&&(this.#s||this.#c()?this.#a.cancel({revert:!0}):this.#a.cancelRetry()),this.scheduleGc()),this.#r.notify({type:`observerRemoved`,query:this,observer:e}))}getObserversCount(){return this.observers.length}#c(){return this.state.fetchStatus===`paused`&&this.state.status===`pending`}invalidate(){this.state.isInvalidated||this.#l({type:`invalidate`})}async fetch(e,t){if(this.state.fetchStatus!==`idle`&&this.#a?.status()!==`rejected`){if(this.state.data!==void 0&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#a)return this.#a.continueRetry(),this.#a.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let n=new AbortController,r=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#s=!0,n.signal)})},i=()=>{let e=O(this.options,t),n=(()=>{let e={client:this.#i,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#s=!1,this.options.persister?this.options.persister(e,n,this):e(n)},a=(()=>{let e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#i,state:this.state,fetchFn:i};return r(e),e})();(this.#e===`infinite`?se(this.options.pages):this.options.behavior)?.onFetch(a,this),this.#n=this.state,(this.state.fetchStatus===`idle`||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#l({type:`fetch`,meta:a.fetchOptions?.meta}),this.#a=I({initialPromise:t?.initialPromise,fn:a.fetchFn,onCancel:e=>{e instanceof F&&e.revert&&this.setState({...this.#n,fetchStatus:`idle`}),n.abort()},onFail:(e,t)=>{this.#l({type:`failed`,failureCount:e,error:t})},onPause:()=>{this.#l({type:`pause`})},onContinue:()=>{this.#l({type:`continue`})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0});try{let e=await this.#a.start();if(e===void 0)throw Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),e}catch(e){if(e instanceof F){if(e.silent)return this.#a.promise;if(e.revert){if(this.state.data===void 0)throw e;return this.state.data}}throw this.#l({type:`error`,error:e}),this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this),e}finally{this.scheduleGc()}}#l(e){let t=t=>{switch(e.type){case`failed`:return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case`pause`:return{...t,fetchStatus:`paused`};case`continue`:return{...t,fetchStatus:`fetching`};case`fetch`:return{...t,...z(t.data,this.options),fetchMeta:e.meta??null};case`success`:let n={...t,...B(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:`idle`,fetchFailureCount:0,fetchFailureReason:null}};return this.#n=e.manual?n:void 0,n;case`error`:let r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:`idle`,status:`error`,isInvalidated:!0};case`invalidate`:return{...t,isInvalidated:!0};case`setState`:return{...t,...e.state}}};this.state=t(this.state),M.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:`updated`,action:e})})}};function z(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:P(t.networkMode)?`fetching`:`paused`,...e===void 0&&{error:null,status:`pending`}}}function B(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:`success`}}function V(e){let t=typeof e.initialData==`function`?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt==`function`?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?`success`:`pending`,fetchStatus:`idle`}}var ue=class extends r{constructor(e,t){super(),this.options=t,this.#e=e,this.#s=null,this.#o=j(),this.bindMethods(),this.setOptions(t)}#e;#t=void 0;#n=void 0;#r=void 0;#i;#a;#o;#s;#c;#l;#u;#d;#f;#p;#m=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),H(this.#t,this.options)?this.#h():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return U(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return U(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#x(),this.#t.removeObserver(this)}setOptions(e){let t=this.options,n=this.#t;if(this.options=this.#e.defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!=`boolean`&&typeof this.options.enabled!=`function`&&typeof m(this.options.enabled,this.#t)!=`boolean`)throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);this.#S(),this.#t.setOptions(this.options),t._defaulted&&!S(this.options,t)&&this.#e.getQueryCache().notify({type:`observerOptionsUpdated`,query:this.#t,observer:this});let r=this.hasListeners();r&&W(this.#t,n,this.options,t)&&this.#h(),this.updateResult(),r&&(this.#t!==n||m(this.options.enabled,this.#t)!==m(t.enabled,this.#t)||p(this.options.staleTime,this.#t)!==p(t.staleTime,this.#t))&&this.#g();let i=this.#_();r&&(this.#t!==n||m(this.options.enabled,this.#t)!==m(t.enabled,this.#t)||i!==this.#p)&&this.#v(i)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return fe(this,n)&&(this.#r=n,this.#a=this.options,this.#i=this.#t.state),n}getCurrentResult(){return this.#r}trackResult(e,t){return new Proxy(e,{get:(e,n)=>(this.trackProp(n),t?.(n),n===`promise`&&(this.trackProp(`data`),!this.options.experimental_prefetchInRender&&this.#o.status===`pending`&&this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))),Reflect.get(e,n))})}trackProp(e){this.#m.add(e)}getCurrentQuery(){return this.#t}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#h({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#r))}#h(e){this.#S();let t=this.#t.fetch(this.options,e);return e?.throwOnError||(t=t.catch(l)),t}#g(){this.#b();let e=p(this.options.staleTime,this.#t);if(A.isServer()||this.#r.isStale||!d(e))return;let t=f(this.#r.dataUpdatedAt,e)+1;this.#d=o.setTimeout(()=>{this.#r.isStale||this.updateResult()},t)}#_(){return(typeof this.options.refetchInterval==`function`?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#v(e){this.#x(),this.#p=e,!(A.isServer()||m(this.options.enabled,this.#t)===!1||!d(this.#p)||this.#p===0)&&(this.#f=o.setInterval(()=>{(this.options.refetchIntervalInBackground||i.isFocused())&&this.#h()},this.#p))}#y(){this.#g(),this.#v(this.#_())}#b(){this.#d!==void 0&&(o.clearTimeout(this.#d),this.#d=void 0)}#x(){this.#f!==void 0&&(o.clearInterval(this.#f),this.#f=void 0)}createResult(e,t){let n=this.#t,r=this.options,i=this.#r,a=this.#i,o=this.#a,s=e===n?this.#n:e.state,{state:c}=e,l={...c},u=!1,d;if(t._optimisticResults){let i=this.hasListeners(),a=!i&&H(e,t),o=i&&W(e,n,t,r);(a||o)&&(l={...l,...z(c.data,e.options)}),t._optimisticResults===`isRestoring`&&(l.fetchStatus=`idle`)}let{error:f,errorUpdatedAt:p,status:h}=l;d=l.data;let g=!1;if(t.placeholderData!==void 0&&d===void 0&&h===`pending`){let e;i?.isPlaceholderData&&t.placeholderData===o?.placeholderData?(e=i.data,g=!0):e=typeof t.placeholderData==`function`?t.placeholderData(this.#u?.state.data,this.#u):t.placeholderData,e!==void 0&&(h=`success`,d=E(i?.data,e,t),u=!0)}if(t.select&&d!==void 0&&!g)if(i&&d===a?.data&&t.select===this.#c)d=this.#l;else try{this.#c=t.select,d=t.select(d),d=E(i?.data,d,t),this.#l=d,this.#s=null}catch(e){this.#s=e}this.#s&&(f=this.#s,d=this.#l,p=Date.now(),h=`error`);let _=l.fetchStatus===`fetching`,v=h===`pending`,y=h===`error`,b=v&&_,x=d!==void 0,S={status:h,fetchStatus:l.fetchStatus,isPending:v,isSuccess:h===`success`,isError:y,isInitialLoading:b,isLoading:b,data:d,dataUpdatedAt:l.dataUpdatedAt,error:f,errorUpdatedAt:p,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:l.dataUpdateCount>s.dataUpdateCount||l.errorUpdateCount>s.errorUpdateCount,isFetching:_,isRefetching:_&&!v,isLoadingError:y&&!x,isPaused:l.fetchStatus===`paused`,isPlaceholderData:u,isRefetchError:y&&x,isStale:G(e,t),refetch:this.refetch,promise:this.#o,isEnabled:m(t.enabled,e)!==!1};if(this.options.experimental_prefetchInRender){let t=S.data!==void 0,r=S.status===`error`&&!t,i=e=>{r?e.reject(S.error):t&&e.resolve(S.data)},a=()=>{let e=this.#o=S.promise=j();i(e)},o=this.#o;switch(o.status){case`pending`:e.queryHash===n.queryHash&&i(o);break;case`fulfilled`:(r||S.data!==o.value)&&a();break;case`rejected`:(!r||S.error!==o.reason)&&a();break}}return S}updateResult(){let e=this.#r,t=this.createResult(this.#t,this.options);this.#i=this.#t.state,this.#a=this.options,this.#i.data!==void 0&&(this.#u=this.#t),!S(t,e)&&(this.#r=t,this.#C({listeners:(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,n=typeof t==`function`?t():t;if(n===`all`||!n&&!this.#m.size)return!0;let r=new Set(n??this.#m);return this.options.throwOnError&&r.add(`error`),Object.keys(this.#r).some(t=>{let n=t;return this.#r[n]!==e[n]&&r.has(n)})})()}))}#S(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#t)return;let t=this.#t;this.#t=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#C(e){M.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#r)}),this.#e.getQueryCache().notify({query:this.#t,type:`observerResultsUpdated`})})}};function de(e,t){return m(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status===`error`&&m(t.retryOnMount,e)===!1)}function H(e,t){return de(e,t)||e.state.data!==void 0&&U(e,t,t.refetchOnMount)}function U(e,t,n){if(m(t.enabled,e)!==!1&&p(t.staleTime,e)!==`static`){let r=typeof n==`function`?n(e):n;return r===`always`||r!==!1&&G(e,t)}return!1}function W(e,t,n,r){return(e!==t||m(r.enabled,e)===!1)&&(!n.suspense||e.state.status!==`error`)&&G(e,n)}function G(e,t){return m(t.enabled,e)!==!1&&e.isStaleByTime(p(t.staleTime,e))}function fe(e,t){return!S(e.getCurrentResult(),t)}var K=e(t(),1),pe=n(),q=K.createContext(void 0),J=e=>{let t=K.useContext(q);if(e)return e;if(!t)throw Error(`No QueryClient set, use QueryClientProvider to set one`);return t},me=({client:e,children:t})=>(K.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,pe.jsx)(q.Provider,{value:e,children:t})),Y=K.createContext(!1),he=()=>K.useContext(Y);Y.Provider;function ge(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var _e=K.createContext(ge()),ve=()=>K.useContext(_e),ye=(e,t,n)=>{let r=n?.state.error&&typeof e.throwOnError==`function`?k(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},be=e=>{K.useEffect(()=>{e.clearReset()},[e])},xe=({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&e.data===void 0||k(n,[e.error,r])),Se=(e,t)=>t.state.data===void 0,Ce=e=>{if(e.suspense){let t=1e3,n=e=>e===`static`?e:Math.max(e??t,t),r=e.staleTime;e.staleTime=typeof r==`function`?(...e)=>n(r(...e)):n(r),typeof e.gcTime==`number`&&(e.gcTime=Math.max(e.gcTime,t))}},we=(e,t)=>e.isLoading&&e.isFetching&&!t,Te=(e,t)=>e?.suspense&&t.isPending,X=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function Ee(e,t,n){let r=he(),i=ve(),a=J(n),o=a.defaultQueryOptions(e);a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);let s=a.getQueryCache().get(o.queryHash),c=e.subscribed!==!1;o._optimisticResults=r?`isRestoring`:c?`optimistic`:void 0,Ce(o),ye(o,i,s),be(i);let u=!a.getQueryCache().get(o.queryHash),[d]=K.useState(()=>new t(a,o)),f=d.getOptimisticResult(o),p=!r&&c;if(K.useSyncExternalStore(K.useCallback(e=>{let t=p?d.subscribe(M.batchCalls(e)):l;return d.updateResult(),t},[d,p]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),K.useEffect(()=>{d.setOptions(o)},[o,d]),Te(o,f))throw X(o,d,i);if(xe({result:f,errorResetBoundary:i,throwOnError:o.throwOnError,query:s,suspense:o.suspense}))throw f.error;return a.getDefaultOptions().queries?._experimental_afterQuery?.(o,f),o.experimental_prefetchInRender&&!A.isServer()&&we(f,r)&&(u?X(o,d,i):s?.promise)?.catch(l).finally(()=>{d.updateResult()}),o.notifyOnChangeProps?f:d.trackResult(f)}function De(e,t){return Ee({...e,enabled:!0,suspense:!0,throwOnError:Se,placeholderData:void 0},ue,t)}function Oe(e){return e}var Z=class extends String{__apiType;value;__meta__;constructor(e,t){super(e),this.value=e,this.__meta__=t}toString(){return this.value}},ke=new Z(`
    fragment AccountDeleteButton_user on User {
  username
  hasPassword
  matrix {
    mxid
    displayName
  }
}
    `,{fragmentName:`AccountDeleteButton_user`}),Ae=new Z(`
    fragment AccountDeleteButton_siteConfig on SiteConfig {
  passwordLoginEnabled
}
    `,{fragmentName:`AccountDeleteButton_siteConfig`}),je=new Z(`
    fragment PasswordChange_siteConfig on SiteConfig {
  passwordChangeAllowed
}
    `,{fragmentName:`PasswordChange_siteConfig`}),Me=new Z(`
    fragment EndBrowserSessionButton_session on BrowserSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
}
    `,{fragmentName:`EndBrowserSessionButton_session`}),Ne=new Z(`
    fragment BrowserSession_session on BrowserSession {
  id
  createdAt
  finishedAt
  ...EndBrowserSessionButton_session
  userAgent {
    deviceType
    name
    os
    model
  }
  lastActiveAt
}
    fragment EndBrowserSessionButton_session on BrowserSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
}`,{fragmentName:`BrowserSession_session`}),Pe=new Z(`
    fragment OAuth2Client_detail on Oauth2Client {
  id
  clientId
  clientName
  clientUri
  logoUri
  tosUri
  policyUri
  redirectUris
}
    `,{fragmentName:`OAuth2Client_detail`}),Fe=new Z(`
    fragment EndCompatSessionButton_session on CompatSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}
    `,{fragmentName:`EndCompatSessionButton_session`}),Ie=new Z(`
    fragment CompatSession_session on CompatSession {
  id
  createdAt
  deviceId
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndCompatSessionButton_session
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}
    fragment EndCompatSessionButton_session on CompatSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}`,{fragmentName:`CompatSession_session`}),Le=new Z(`
    fragment Footer_siteConfig on SiteConfig {
  id
  imprint
  tosUri
  policyUri
}
    `,{fragmentName:`Footer_siteConfig`}),Re=new Z(`
    fragment EndOAuth2SessionButton_session on Oauth2Session {
  id
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    clientId
    clientName
    applicationType
    logoUri
  }
}
    `,{fragmentName:`EndOAuth2SessionButton_session`}),ze=new Z(`
    fragment OAuth2Session_session on Oauth2Session {
  id
  scope
  createdAt
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndOAuth2SessionButton_session
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    id
    clientId
    clientName
    applicationType
    logoUri
  }
}
    fragment EndOAuth2SessionButton_session on Oauth2Session {
  id
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    clientId
    clientName
    applicationType
    logoUri
  }
}`,{fragmentName:`OAuth2Session_session`}),Be=new Z(`
    fragment BrowserSession_detail on BrowserSession {
  id
  createdAt
  finishedAt
  ...EndBrowserSessionButton_session
  userAgent {
    name
    model
    os
  }
  lastActiveIp
  lastActiveAt
  lastAuthentication {
    id
    createdAt
  }
  user {
    id
    username
  }
}
    fragment EndBrowserSessionButton_session on BrowserSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
}`,{fragmentName:`BrowserSession_detail`}),Ve=new Z(`
    fragment CompatSession_detail on CompatSession {
  id
  createdAt
  deviceId
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndCompatSessionButton_session
  userAgent {
    name
    os
    model
  }
  ssoLogin {
    id
    redirectUri
  }
}
    fragment EndCompatSessionButton_session on CompatSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}`,{fragmentName:`CompatSession_detail`}),He=new Z(`
    fragment OAuth2Session_detail on Oauth2Session {
  id
  scope
  createdAt
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndOAuth2SessionButton_session
  userAgent {
    name
    model
    os
  }
  client {
    id
    clientId
    clientName
    clientUri
    logoUri
  }
}
    fragment EndOAuth2SessionButton_session on Oauth2Session {
  id
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    clientId
    clientName
    applicationType
    logoUri
  }
}`,{fragmentName:`OAuth2Session_detail`}),Ue=new Z(`
    fragment UserEmail_email on UserEmail {
  id
  email
}
    `,{fragmentName:`UserEmail_email`}),We=new Z(`
    fragment UserGreeting_user on User {
  id
  matrix {
    mxid
    displayName
  }
}
    `,{fragmentName:`UserGreeting_user`}),Ge=new Z(`
    fragment UserGreeting_siteConfig on SiteConfig {
  displayNameChangeAllowed
}
    `,{fragmentName:`UserGreeting_siteConfig`}),Ke=new Z(`
    fragment AddEmailForm_user on User {
  hasPassword
}
    `,{fragmentName:`AddEmailForm_user`}),qe=new Z(`
    fragment AddEmailForm_siteConfig on SiteConfig {
  passwordLoginEnabled
}
    `,{fragmentName:`AddEmailForm_siteConfig`}),Je=new Z(`
    fragment UserEmailList_user on User {
  hasPassword
}
    `,{fragmentName:`UserEmailList_user`}),Ye=new Z(`
    fragment UserEmailList_siteConfig on SiteConfig {
  emailChangeAllowed
  passwordLoginEnabled
}
    `,{fragmentName:`UserEmailList_siteConfig`}),Xe=new Z(`
    fragment BrowserSessionsOverview_user on User {
  browserSessions(first: 0, state: ACTIVE) {
    totalCount
  }
}
    `,{fragmentName:`BrowserSessionsOverview_user`}),Ze=new Z(`
    fragment RecoverPassword_userRecoveryTicket on UserRecoveryTicket {
  username
  email
}
    `,{fragmentName:`RecoverPassword_userRecoveryTicket`}),Q=new Z(`
    fragment PasswordCreationDoubleInput_siteConfig on SiteConfig {
  id
  minimumPasswordComplexity
}
    `,{fragmentName:`PasswordCreationDoubleInput_siteConfig`}),Qe=new Z(`
    fragment RecoverPassword_siteConfig on SiteConfig {
  ...PasswordCreationDoubleInput_siteConfig
}
    fragment PasswordCreationDoubleInput_siteConfig on SiteConfig {
  id
  minimumPasswordComplexity
}`,{fragmentName:`RecoverPassword_siteConfig`}),$e={"\n  fragment AccountDeleteButton_user on User {\n    username\n    hasPassword\n    matrix {\n      mxid\n      displayName\n    }\n  }\n":ke,"\n  fragment AccountDeleteButton_siteConfig on SiteConfig {\n    passwordLoginEnabled\n  }\n":Ae,"\n  mutation DeactivateUser($hsErase: Boolean!, $password: String) {\n    deactivateUser(input: { hsErase: $hsErase, password: $password }) {\n      status\n    }\n  }\n":new Z(`
    mutation DeactivateUser($hsErase: Boolean!, $password: String) {
  deactivateUser(input: {hsErase: $hsErase, password: $password}) {
    status
  }
}
    `),"\n  fragment PasswordChange_siteConfig on SiteConfig {\n    passwordChangeAllowed\n  }\n":je,"\n  fragment BrowserSession_session on BrowserSession {\n    id\n    createdAt\n    finishedAt\n    ...EndBrowserSessionButton_session\n    userAgent {\n      deviceType\n      name\n      os\n      model\n    }\n    lastActiveAt\n  }\n":Ne,"\n  fragment OAuth2Client_detail on Oauth2Client {\n    id\n    clientId\n    clientName\n    clientUri\n    logoUri\n    tosUri\n    policyUri\n    redirectUris\n  }\n":Pe,"\n  fragment CompatSession_session on CompatSession {\n    id\n    createdAt\n    deviceId\n    finishedAt\n    lastActiveIp\n    lastActiveAt\n    humanName\n    ...EndCompatSessionButton_session\n    userAgent {\n      name\n      os\n      model\n      deviceType\n    }\n    ssoLogin {\n      id\n      redirectUri\n    }\n  }\n":Ie,"\n  fragment Footer_siteConfig on SiteConfig {\n    id\n    imprint\n    tosUri\n    policyUri\n  }\n":Le,"\n  query Footer {\n    siteConfig {\n      id\n      ...Footer_siteConfig\n    }\n  }\n":new Z(`
    query Footer {
  siteConfig {
    id
    ...Footer_siteConfig
  }
}
    fragment Footer_siteConfig on SiteConfig {
  id
  imprint
  tosUri
  policyUri
}`),"\n  fragment OAuth2Session_session on Oauth2Session {\n    id\n    scope\n    createdAt\n    finishedAt\n    lastActiveIp\n    lastActiveAt\n    humanName\n\n    ...EndOAuth2SessionButton_session\n\n    userAgent {\n      name\n      model\n      os\n      deviceType\n    }\n\n    client {\n      id\n      clientId\n      clientName\n      applicationType\n      logoUri\n    }\n  }\n":ze,"\n  fragment PasswordCreationDoubleInput_siteConfig on SiteConfig {\n    id\n    minimumPasswordComplexity\n  }\n":Q,"\n  fragment EndBrowserSessionButton_session on BrowserSession {\n    id\n    userAgent {\n      name\n      os\n      model\n      deviceType\n    }\n  }\n":Me,"\n  mutation EndBrowserSession($id: ID!) {\n    endBrowserSession(input: { browserSessionId: $id }) {\n      status\n      browserSession {\n        id\n      }\n    }\n  }\n":new Z(`
    mutation EndBrowserSession($id: ID!) {
  endBrowserSession(input: {browserSessionId: $id}) {
    status
    browserSession {
      id
    }
  }
}
    `),"\n  fragment EndCompatSessionButton_session on CompatSession {\n    id\n    userAgent {\n      name\n      os\n      model\n      deviceType\n    }\n    ssoLogin {\n      id\n      redirectUri\n    }\n  }\n":Fe,"\n  mutation EndCompatSession($id: ID!) {\n    endCompatSession(input: { compatSessionId: $id }) {\n      status\n      compatSession {\n        id\n      }\n    }\n  }\n":new Z(`
    mutation EndCompatSession($id: ID!) {
  endCompatSession(input: {compatSessionId: $id}) {
    status
    compatSession {
      id
    }
  }
}
    `),"\n  fragment EndOAuth2SessionButton_session on Oauth2Session {\n    id\n\n    userAgent {\n      name\n      model\n      os\n      deviceType\n    }\n\n    client {\n      clientId\n      clientName\n      applicationType\n      logoUri\n    }\n  }\n":Re,"\n  mutation EndOAuth2Session($id: ID!) {\n    endOauth2Session(input: { oauth2SessionId: $id }) {\n      status\n      oauth2Session {\n        id\n      }\n    }\n  }\n":new Z(`
    mutation EndOAuth2Session($id: ID!) {
  endOauth2Session(input: {oauth2SessionId: $id}) {
    status
    oauth2Session {
      id
    }
  }
}
    `),"\n  fragment BrowserSession_detail on BrowserSession {\n    id\n    createdAt\n    finishedAt\n    ...EndBrowserSessionButton_session\n    userAgent {\n      name\n      model\n      os\n    }\n    lastActiveIp\n    lastActiveAt\n    lastAuthentication {\n      id\n      createdAt\n    }\n    user {\n      id\n      username\n    }\n  }\n":Be,"\n  mutation SetCompatSessionName($sessionId: ID!, $displayName: String!) {\n    setCompatSessionName(input: { compatSessionId: $sessionId, humanName: $displayName }) {\n      status\n    }\n  }\n":new Z(`
    mutation SetCompatSessionName($sessionId: ID!, $displayName: String!) {
  setCompatSessionName(
    input: {compatSessionId: $sessionId, humanName: $displayName}
  ) {
    status
  }
}
    `),"\n  fragment CompatSession_detail on CompatSession {\n    id\n    createdAt\n    deviceId\n    finishedAt\n    lastActiveIp\n    lastActiveAt\n    humanName\n\n    ...EndCompatSessionButton_session\n\n    userAgent {\n      name\n      os\n      model\n    }\n\n    ssoLogin {\n      id\n      redirectUri\n    }\n  }\n":Ve,"\n  mutation SetOAuth2SessionName($sessionId: ID!, $displayName: String!) {\n    setOauth2SessionName(input: { oauth2SessionId: $sessionId, humanName: $displayName }) {\n      status\n    }\n  }\n":new Z(`
    mutation SetOAuth2SessionName($sessionId: ID!, $displayName: String!) {
  setOauth2SessionName(
    input: {oauth2SessionId: $sessionId, humanName: $displayName}
  ) {
    status
  }
}
    `),"\n  fragment OAuth2Session_detail on Oauth2Session {\n    id\n    scope\n    createdAt\n    finishedAt\n    lastActiveIp\n    lastActiveAt\n    humanName\n\n    ...EndOAuth2SessionButton_session\n\n    userAgent {\n      name\n      model\n      os\n    }\n\n    client {\n      id\n      clientId\n      clientName\n      clientUri\n      logoUri\n    }\n  }\n":He,"\n  fragment UserEmail_email on UserEmail {\n    id\n    email\n  }\n":Ue,"\n  mutation RemoveEmail($id: ID!, $password: String) {\n    removeEmail(input: { userEmailId: $id, password: $password }) {\n      status\n\n      user {\n        id\n      }\n    }\n  }\n":new Z(`
    mutation RemoveEmail($id: ID!, $password: String) {
  removeEmail(input: {userEmailId: $id, password: $password}) {
    status
    user {
      id
    }
  }
}
    `),"\n  fragment UserGreeting_user on User {\n    id\n    matrix {\n      mxid\n      displayName\n    }\n  }\n":We,"\n  fragment UserGreeting_siteConfig on SiteConfig {\n    displayNameChangeAllowed\n  }\n":Ge,"\n  mutation SetDisplayName($userId: ID!, $displayName: String) {\n    setDisplayName(input: { userId: $userId, displayName: $displayName }) {\n      status\n    }\n  }\n":new Z(`
    mutation SetDisplayName($userId: ID!, $displayName: String) {
  setDisplayName(input: {userId: $userId, displayName: $displayName}) {
    status
  }
}
    `),"\n  fragment AddEmailForm_user on User {\n    hasPassword\n  }\n":Ke,"\n  fragment AddEmailForm_siteConfig on SiteConfig {\n    passwordLoginEnabled\n  }\n":qe,"\n  mutation AddEmail($email: String!, $password: String, $language: String!) {\n    startEmailAuthentication(\n      input: { email: $email, password: $password, language: $language }\n    ) {\n      status\n      violations\n      authentication {\n        id\n      }\n    }\n  }\n":new Z(`
    mutation AddEmail($email: String!, $password: String, $language: String!) {
  startEmailAuthentication(
    input: {email: $email, password: $password, language: $language}
  ) {
    status
    violations
    authentication {
      id
    }
  }
}
    `),"\n  query UserEmailList(\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n  ) {\n    viewer {\n      __typename\n      ... on User {\n        emails(first: $first, after: $after, last: $last, before: $before) {\n          edges {\n            cursor\n            node {\n              ...UserEmail_email\n            }\n          }\n          totalCount\n          pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n          }\n        }\n      }\n    }\n  }\n":new Z(`
    query UserEmailList($first: Int, $after: String, $last: Int, $before: String) {
  viewer {
    __typename
    ... on User {
      emails(first: $first, after: $after, last: $last, before: $before) {
        edges {
          cursor
          node {
            ...UserEmail_email
          }
        }
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
}
    fragment UserEmail_email on UserEmail {
  id
  email
}`),"\n  fragment UserEmailList_user on User {\n    hasPassword\n  }\n":Je,"\n  fragment UserEmailList_siteConfig on SiteConfig {\n    emailChangeAllowed\n    passwordLoginEnabled\n  }\n":Ye,"\n  fragment BrowserSessionsOverview_user on User {\n    browserSessions(first: 0, state: ACTIVE) {\n      totalCount\n    }\n  }\n":Xe,"\n  query UserProfile {\n    viewerSession {\n      __typename\n      ... on BrowserSession {\n        id\n        user {\n          ...AddEmailForm_user\n          ...UserEmailList_user\n          ...AccountDeleteButton_user\n          hasPassword\n          emails(first: 0) {\n            totalCount\n          }\n        }\n      }\n    }\n\n    siteConfig {\n      emailChangeAllowed\n      passwordLoginEnabled\n      accountDeactivationAllowed\n      ...AddEmailForm_siteConfig\n      ...UserEmailList_siteConfig\n      ...PasswordChange_siteConfig\n      ...AccountDeleteButton_siteConfig\n    }\n  }\n":new Z(`
    query UserProfile {
  viewerSession {
    __typename
    ... on BrowserSession {
      id
      user {
        ...AddEmailForm_user
        ...UserEmailList_user
        ...AccountDeleteButton_user
        hasPassword
        emails(first: 0) {
          totalCount
        }
      }
    }
  }
  siteConfig {
    emailChangeAllowed
    passwordLoginEnabled
    accountDeactivationAllowed
    ...AddEmailForm_siteConfig
    ...UserEmailList_siteConfig
    ...PasswordChange_siteConfig
    ...AccountDeleteButton_siteConfig
  }
}
    fragment AccountDeleteButton_user on User {
  username
  hasPassword
  matrix {
    mxid
    displayName
  }
}
fragment AccountDeleteButton_siteConfig on SiteConfig {
  passwordLoginEnabled
}
fragment PasswordChange_siteConfig on SiteConfig {
  passwordChangeAllowed
}
fragment AddEmailForm_user on User {
  hasPassword
}
fragment AddEmailForm_siteConfig on SiteConfig {
  passwordLoginEnabled
}
fragment UserEmailList_user on User {
  hasPassword
}
fragment UserEmailList_siteConfig on SiteConfig {
  emailChangeAllowed
  passwordLoginEnabled
}`),"\n  query PlanManagementTab {\n    siteConfig {\n      planManagementIframeUri\n    }\n  }\n":new Z(`
    query PlanManagementTab {
  siteConfig {
    planManagementIframeUri
  }
}
    `),"\n  query BrowserSessionList(\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n    $lastActive: DateFilter\n  ) {\n    viewerSession {\n      __typename\n      ... on BrowserSession {\n        id\n\n        user {\n          id\n\n          browserSessions(\n            first: $first\n            after: $after\n            last: $last\n            before: $before\n            lastActive: $lastActive\n            state: ACTIVE\n          ) {\n            totalCount\n\n            edges {\n              cursor\n              node {\n                id\n                ...BrowserSession_session\n              }\n            }\n\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n              startCursor\n              endCursor\n            }\n          }\n        }\n      }\n    }\n  }\n":new Z(`
    query BrowserSessionList($first: Int, $after: String, $last: Int, $before: String, $lastActive: DateFilter) {
  viewerSession {
    __typename
    ... on BrowserSession {
      id
      user {
        id
        browserSessions(
          first: $first
          after: $after
          last: $last
          before: $before
          lastActive: $lastActive
          state: ACTIVE
        ) {
          totalCount
          edges {
            cursor
            node {
              id
              ...BrowserSession_session
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    }
  }
}
    fragment BrowserSession_session on BrowserSession {
  id
  createdAt
  finishedAt
  ...EndBrowserSessionButton_session
  userAgent {
    deviceType
    name
    os
    model
  }
  lastActiveAt
}
fragment EndBrowserSessionButton_session on BrowserSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
}`),"\n  query SessionsOverview {\n    viewer {\n      __typename\n\n      ... on User {\n        id\n        ...BrowserSessionsOverview_user\n\n        # Get the total count of active app sessions before any filtering\n        unfilteredAppSessions: appSessions(first: 1, state: ACTIVE) {\n          totalCount\n        }\n      }\n    }\n\n    siteConfig {\n      sessionLimit {\n        softLimit\n      }\n    }\n  }\n":new Z(`
    query SessionsOverview {
  viewer {
    __typename
    ... on User {
      id
      ...BrowserSessionsOverview_user
      unfilteredAppSessions: appSessions(first: 1, state: ACTIVE) {
        totalCount
      }
    }
  }
  siteConfig {
    sessionLimit {
      softLimit
    }
  }
}
    fragment BrowserSessionsOverview_user on User {
  browserSessions(first: 0, state: ACTIVE) {
    totalCount
  }
}`),"\n  query AppSessionsList(\n    $before: String\n    $after: String\n    $first: Int\n    $last: Int\n    $lastActive: DateFilter\n  ) {\n    viewer {\n      __typename\n\n      ... on User {\n        id\n        appSessions(\n          before: $before\n          after: $after\n          first: $first\n          last: $last\n          lastActive: $lastActive\n          state: ACTIVE\n        ) {\n          edges {\n            cursor\n            node {\n              __typename\n              ...CompatSession_session\n              ...OAuth2Session_session\n            }\n          }\n\n          totalCount\n          pageInfo {\n            startCursor\n            endCursor\n            hasNextPage\n            hasPreviousPage\n          }\n        }\n      }\n    }\n  }\n":new Z(`
    query AppSessionsList($before: String, $after: String, $first: Int, $last: Int, $lastActive: DateFilter) {
  viewer {
    __typename
    ... on User {
      id
      appSessions(
        before: $before
        after: $after
        first: $first
        last: $last
        lastActive: $lastActive
        state: ACTIVE
      ) {
        edges {
          cursor
          node {
            __typename
            ...CompatSession_session
            ...OAuth2Session_session
          }
        }
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
}
    fragment CompatSession_session on CompatSession {
  id
  createdAt
  deviceId
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndCompatSessionButton_session
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}
fragment OAuth2Session_session on Oauth2Session {
  id
  scope
  createdAt
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndOAuth2SessionButton_session
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    id
    clientId
    clientName
    applicationType
    logoUri
  }
}
fragment EndCompatSessionButton_session on CompatSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}
fragment EndOAuth2SessionButton_session on Oauth2Session {
  id
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    clientId
    clientName
    applicationType
    logoUri
  }
}`),"\n  query CurrentUserGreeting {\n    viewer {\n      __typename\n      ... on User {\n        ...UserGreeting_user\n\n        # Get the total count of active app sessions before any filtering\n        unfilteredAppSessions: appSessions(first: 1, state: ACTIVE) {\n          totalCount\n        }\n      }\n    }\n\n    siteConfig {\n      ...UserGreeting_siteConfig\n      planManagementIframeUri\n      sessionLimit {\n        softLimit\n      }\n    }\n  }\n":new Z(`
    query CurrentUserGreeting {
  viewer {
    __typename
    ... on User {
      ...UserGreeting_user
      unfilteredAppSessions: appSessions(first: 1, state: ACTIVE) {
        totalCount
      }
    }
  }
  siteConfig {
    ...UserGreeting_siteConfig
    planManagementIframeUri
    sessionLimit {
      softLimit
    }
  }
}
    fragment UserGreeting_user on User {
  id
  matrix {
    mxid
    displayName
  }
}
fragment UserGreeting_siteConfig on SiteConfig {
  displayNameChangeAllowed
}`),"\n  query OAuth2Client($id: ID!) {\n    oauth2Client(id: $id) {\n      ...OAuth2Client_detail\n    }\n  }\n":new Z(`
    query OAuth2Client($id: ID!) {
  oauth2Client(id: $id) {
    ...OAuth2Client_detail
  }
}
    fragment OAuth2Client_detail on Oauth2Client {
  id
  clientId
  clientName
  clientUri
  logoUri
  tosUri
  policyUri
  redirectUris
}`),"\n  query CurrentViewer {\n    viewer {\n      __typename\n      ... on Node {\n        id\n      }\n    }\n  }\n":new Z(`
    query CurrentViewer {
  viewer {
    __typename
    ... on Node {
      id
    }
  }
}
    `),"\n  query DeviceRedirect($deviceId: String!, $userId: ID!) {\n    session(deviceId: $deviceId, userId: $userId) {\n      __typename\n      ... on Node {\n        id\n      }\n    }\n  }\n":new Z(`
    query DeviceRedirect($deviceId: String!, $userId: ID!) {
  session(deviceId: $deviceId, userId: $userId) {
    __typename
    ... on Node {
      id
    }
  }
}
    `),"\n  query VerifyEmail($id: ID!) {\n    userEmailAuthentication(id: $id) {\n      id\n      email\n      completedAt\n    }\n  }\n":new Z(`
    query VerifyEmail($id: ID!) {
  userEmailAuthentication(id: $id) {
    id
    email
    completedAt
  }
}
    `),"\n  mutation DoVerifyEmail($id: ID!, $code: String!) {\n    completeEmailAuthentication(input: { id: $id, code: $code }) {\n      status\n    }\n  }\n":new Z(`
    mutation DoVerifyEmail($id: ID!, $code: String!) {
  completeEmailAuthentication(input: {id: $id, code: $code}) {
    status
  }
}
    `),"\n  mutation ResendEmailAuthenticationCode($id: ID!, $language: String!) {\n    resendEmailAuthenticationCode(input: { id: $id, language: $language }) {\n      status\n    }\n  }\n":new Z(`
    mutation ResendEmailAuthenticationCode($id: ID!, $language: String!) {
  resendEmailAuthenticationCode(input: {id: $id, language: $language}) {
    status
  }
}
    `),"\n  mutation ChangePassword(\n    $userId: ID!\n    $oldPassword: String!\n    $newPassword: String!\n  ) {\n    setPassword(\n      input: {\n        userId: $userId\n        currentPassword: $oldPassword\n        newPassword: $newPassword\n      }\n    ) {\n      status\n    }\n  }\n":new Z(`
    mutation ChangePassword($userId: ID!, $oldPassword: String!, $newPassword: String!) {
  setPassword(
    input: {userId: $userId, currentPassword: $oldPassword, newPassword: $newPassword}
  ) {
    status
  }
}
    `),"\n  query PasswordChange {\n    viewer {\n      __typename\n      ... on Node {\n        id\n      }\n    }\n\n    siteConfig {\n      ...PasswordCreationDoubleInput_siteConfig\n    }\n  }\n":new Z(`
    query PasswordChange {
  viewer {
    __typename
    ... on Node {
      id
    }
  }
  siteConfig {
    ...PasswordCreationDoubleInput_siteConfig
  }
}
    fragment PasswordCreationDoubleInput_siteConfig on SiteConfig {
  id
  minimumPasswordComplexity
}`),"\n  mutation RecoverPassword($ticket: String!, $newPassword: String!) {\n    setPasswordByRecovery(\n      input: { ticket: $ticket, newPassword: $newPassword }\n    ) {\n      status\n    }\n  }\n":new Z(`
    mutation RecoverPassword($ticket: String!, $newPassword: String!) {
  setPasswordByRecovery(input: {ticket: $ticket, newPassword: $newPassword}) {
    status
  }
}
    `),"\n  mutation ResendRecoveryEmail($ticket: String!) {\n    resendRecoveryEmail(input: { ticket: $ticket }) {\n      status\n      progressUrl\n    }\n  }\n":new Z(`
    mutation ResendRecoveryEmail($ticket: String!) {
  resendRecoveryEmail(input: {ticket: $ticket}) {
    status
    progressUrl
  }
}
    `),"\n  fragment RecoverPassword_userRecoveryTicket on UserRecoveryTicket {\n    username\n    email\n  }\n":Ze,"\n  fragment RecoverPassword_siteConfig on SiteConfig {\n    ...PasswordCreationDoubleInput_siteConfig\n  }\n":Qe,"\n  query PasswordRecovery($ticket: String!) {\n    siteConfig {\n      ...RecoverPassword_siteConfig\n    }\n\n    userRecoveryTicket(ticket: $ticket) {\n      status\n      ...RecoverPassword_userRecoveryTicket\n    }\n  }\n":new Z(`
    query PasswordRecovery($ticket: String!) {
  siteConfig {
    ...RecoverPassword_siteConfig
  }
  userRecoveryTicket(ticket: $ticket) {
    status
    ...RecoverPassword_userRecoveryTicket
  }
}
    fragment PasswordCreationDoubleInput_siteConfig on SiteConfig {
  id
  minimumPasswordComplexity
}
fragment RecoverPassword_userRecoveryTicket on UserRecoveryTicket {
  username
  email
}
fragment RecoverPassword_siteConfig on SiteConfig {
  ...PasswordCreationDoubleInput_siteConfig
}`),"\n  mutation AllowCrossSigningReset($userId: ID!) {\n    allowUserCrossSigningReset(input: { userId: $userId }) {\n      user {\n        id\n      }\n    }\n  }\n":new Z(`
    mutation AllowCrossSigningReset($userId: ID!) {
  allowUserCrossSigningReset(input: {userId: $userId}) {
    user {
      id
    }
  }
}
    `),"\n  query SessionDetail($id: ID!) {\n    viewerSession {\n      ... on Node {\n        id\n      }\n    }\n\n    node(id: $id) {\n      __typename\n      id\n      ...CompatSession_detail\n      ...OAuth2Session_detail\n      ...BrowserSession_detail\n    }\n  }\n":new Z(`
    query SessionDetail($id: ID!) {
  viewerSession {
    ... on Node {
      id
    }
  }
  node(id: $id) {
    __typename
    id
    ...CompatSession_detail
    ...OAuth2Session_detail
    ...BrowserSession_detail
  }
}
    fragment EndBrowserSessionButton_session on BrowserSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
}
fragment EndCompatSessionButton_session on CompatSession {
  id
  userAgent {
    name
    os
    model
    deviceType
  }
  ssoLogin {
    id
    redirectUri
  }
}
fragment EndOAuth2SessionButton_session on Oauth2Session {
  id
  userAgent {
    name
    model
    os
    deviceType
  }
  client {
    clientId
    clientName
    applicationType
    logoUri
  }
}
fragment BrowserSession_detail on BrowserSession {
  id
  createdAt
  finishedAt
  ...EndBrowserSessionButton_session
  userAgent {
    name
    model
    os
  }
  lastActiveIp
  lastActiveAt
  lastAuthentication {
    id
    createdAt
  }
  user {
    id
    username
  }
}
fragment CompatSession_detail on CompatSession {
  id
  createdAt
  deviceId
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndCompatSessionButton_session
  userAgent {
    name
    os
    model
  }
  ssoLogin {
    id
    redirectUri
  }
}
fragment OAuth2Session_detail on Oauth2Session {
  id
  scope
  createdAt
  finishedAt
  lastActiveIp
  lastActiveAt
  humanName
  ...EndOAuth2SessionButton_session
  userAgent {
    name
    model
    os
  }
  client {
    id
    clientId
    clientName
    clientUri
    logoUri
  }
}`)};function et(e){return $e[e]??{}}var $=`/graphql`,tt=e=>{$=e},nt=async({query:e,variables:t,signal:n})=>{let r=new URL($,window.location.toString()).toString(),i;try{i=await fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({query:e,variables:t}),signal:n})}catch(e){throw Error(`GraphQL request to ${r} request failed`,{cause:e})}if(!i.ok)throw Error(`GraphQL request to ${r} failed: ${i.status}`);let a=await i.json();if(a.errors)throw Error(JSON.stringify(a.errors));if(!a.data)throw Error(`GraphQL request to ${r} returned no data`);return a.data};export{D as C,k as S,r as T,h as _,De as a,p as b,le as c,N as d,M as f,g,_ as h,Oe as i,L as l,v as m,tt as n,me as o,u as p,et as r,J as s,nt as t,I as u,l as v,i as w,S as x,y};
//# sourceMappingURL=graphql-DoHZA98X.js.map