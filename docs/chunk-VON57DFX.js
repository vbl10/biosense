import{$ as Oi,$a as G,Ab as Rn,Ac as wt,Bb as kn,Cb as nn,Db as on,Dc as B,Eb as qe,Ec as Bn,Fb as $i,Gb as ji,Hb as ne,Hc as lt,Ib as P,Ic as Ki,Jb as Te,Jc as qi,Lb as V,Lc as v,Mb as Me,Mc as Ye,Nb as Oe,Ob as pe,Qa as N,Qb as he,Ra as Ni,Rb as fe,S as X,Sa as tt,Sb as Pn,T as xn,Tb as Hi,U as Ae,Ua as Ie,V as m,Va as E,Vb as Ui,W as R,Wb as ot,Xa as St,Y as J,Yb as H,Z as Fe,Zb as rt,_ as g,_b as st,a as _,ab as k,b as ae,bb as S,cb as tn,da as xi,db as w,ea as Li,eb as Ri,fa as Jt,fb as le,gc as O,ha as en,hb as ue,ia as te,ib as ki,ic as at,j as ee,jc as Gi,lb as Ln,ma as q,mb as Pi,n as Ii,pb as Y,qa as Pe,qb as nt,ra as y,rb as it,s as Ti,ta as me,tb as Vi,ub as Bi,uc as Wi,vb as L,wb as Ve,wc as Vn,xa as et,xb as Be,xc as zi,y as Mi,yb as Ke,yc as Ee,zb as Nn,zc as be}from"./chunk-VXTH6N44.js";var Qi=null;function Ze(){return Qi}function gs(e){Qi??=e}var $n=class{},At=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>g(Xi),providedIn:"platform"})}return e})(),ms=new J(""),Xi=(()=>{class e extends At{_location;_history;_doc=g(te);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Ze().getBaseHref(this._doc)}onPopState(t){let n=Ze().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=Ze().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,o){this._history.pushState(t,n,o)}replaceState(t,n,o){this._history.replaceState(t,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function rn(e,i){return e?i?e.endsWith("/")?i.startsWith("/")?e+i.slice(1):e+i:i.startsWith("/")?e+i:`${e}/${i}`:e:i}function Yi(e){let i=e.search(/#|\?|$/);return e[i-1]==="/"?e.slice(0,i-1)+e.slice(i):e}function ye(e){return e&&e[0]!=="?"?`?${e}`:e}var ut=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:()=>g(Ji),providedIn:"root"})}return e})(),sn=new J(""),Ji=(()=>{class e extends ut{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??g(te).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return rn(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+ye(this._platformLocation.search),o=this._platformLocation.hash;return o&&t?`${n}${o}`:n}pushState(t,n,o,r){let s=this.prepareExternalUrl(o+ye(r));this._platformLocation.pushState(t,n,s)}replaceState(t,n,o,r){let s=this.prepareExternalUrl(o+ye(r));this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(Fe(At),Fe(sn,8))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),eo=(()=>{class e{_subject=new ee;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=vs(Yi(Zi(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+ye(n))}normalize(t){return e.stripTrailingSlash(ys(this._basePath,Zi(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",o=null){this._locationStrategy.pushState(o,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ye(n)),o)}replaceState(t,n="",o=null){this._locationStrategy.replaceState(o,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ye(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(o=>o(t,n))}subscribe(t,n,o){return this._subject.subscribe({next:t,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=ye;static joinWithSlash=rn;static stripTrailingSlash=Yi;static \u0275fac=function(n){return new(n||e)(Fe(ut))};static \u0275prov=m({token:e,factory:()=>bs(),providedIn:"root"})}return e})();function bs(){return new eo(Fe(ut))}function ys(e,i){if(!e||!i.startsWith(e))return i;let t=i.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:i}function Zi(e){return e.replace(/\/index.html$/,"")}function vs(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Ds=(()=>{class e extends ut{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=rn(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,o,r){let s=this.prepareExternalUrl(o+ye(r))||this._platformLocation.pathname;this._platformLocation.pushState(t,n,s)}replaceState(t,n,o,r){let s=this.prepareExternalUrl(o+ye(r))||this._platformLocation.pathname;this._platformLocation.replaceState(t,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||e)(Fe(At),Fe(sn,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),ao={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},qn=function(e){return e[e.Decimal=0]="Decimal",e[e.Percent=1]="Percent",e[e.Currency=2]="Currency",e[e.Scientific=3]="Scientific",e}(qn||{});var Z=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(Z||{}),A=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(A||{}),ie=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(ie||{}),oe={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function lo(e){return ne(e)[P.LocaleId]}function uo(e,i,t){let n=ne(e),o=[n[P.DayPeriodsFormat],n[P.DayPeriodsStandalone]],r=ge(o,i);return ge(r,t)}function co(e,i,t){let n=ne(e),o=[n[P.DaysFormat],n[P.DaysStandalone]],r=ge(o,i);return ge(r,t)}function po(e,i,t){let n=ne(e),o=[n[P.MonthsFormat],n[P.MonthsStandalone]],r=ge(o,i);return ge(r,t)}function ho(e,i){let n=ne(e)[P.Eras];return ge(n,i)}function Ft(e,i){let t=ne(e);return ge(t[P.DateFormat],i)}function It(e,i){let t=ne(e);return ge(t[P.TimeFormat],i)}function Tt(e,i){let n=ne(e)[P.DateTimeFormat];return ge(n,i)}function Se(e,i){let t=ne(e),n=t[P.NumberSymbols][i];if(typeof n>"u"){if(i===oe.CurrencyDecimal)return t[P.NumberSymbols][oe.Decimal];if(i===oe.CurrencyGroup)return t[P.NumberSymbols][oe.Group]}return n}function fo(e,i){return ne(e)[P.NumberFormats][i]}function Cs(e){return ne(e)[P.Currencies]}function go(e){if(!e[P.ExtraData])throw new X(2303,!1)}function mo(e){let i=ne(e);return go(i),(i[P.ExtraData][2]||[]).map(n=>typeof n=="string"?jn(n):[jn(n[0]),jn(n[1])])}function bo(e,i,t){let n=ne(e);go(n);let o=[n[P.ExtraData][0],n[P.ExtraData][1]],r=ge(o,i)||[];return ge(r,t)||[]}function ge(e,i){for(let t=i;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new X(2304,!1)}function jn(e){let[i,t]=e.split(":");return{hours:+i,minutes:+t}}function yo(e,i,t="en"){let n=Cs(t)[e]||ao[e]||[],o=n[1];return i==="narrow"&&typeof o=="string"?o:n[0]||e}var _s=2;function vo(e){let i,t=ao[e];return t&&(i=t[2]),typeof i=="number"?i:_s}var Es=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,an={},Ss=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Do(e,i,t,n){let o=Ls(e);i=xe(t,i)||i;let s=[],a;for(;i;)if(a=Ss.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=_o(n,l),o=xs(o,n));let u="";return s.forEach(c=>{let d=Ms(c);u+=d?d(o,t,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function pn(e,i,t){let n=new Date(0);return n.setFullYear(e,i,t),n.setHours(0,0,0),n}function xe(e,i){let t=lo(e);if(an[t]??={},an[t][i])return an[t][i];let n="";switch(i){case"shortDate":n=Ft(e,ie.Short);break;case"mediumDate":n=Ft(e,ie.Medium);break;case"longDate":n=Ft(e,ie.Long);break;case"fullDate":n=Ft(e,ie.Full);break;case"shortTime":n=It(e,ie.Short);break;case"mediumTime":n=It(e,ie.Medium);break;case"longTime":n=It(e,ie.Long);break;case"fullTime":n=It(e,ie.Full);break;case"short":let o=xe(e,"shortTime"),r=xe(e,"shortDate");n=ln(Tt(e,ie.Short),[o,r]);break;case"medium":let s=xe(e,"mediumTime"),a=xe(e,"mediumDate");n=ln(Tt(e,ie.Medium),[s,a]);break;case"long":let l=xe(e,"longTime"),u=xe(e,"longDate");n=ln(Tt(e,ie.Long),[l,u]);break;case"full":let c=xe(e,"fullTime"),d=xe(e,"fullDate");n=ln(Tt(e,ie.Full),[c,d]);break}return n&&(an[t][i]=n),n}function ln(e,i){return i&&(e=e.replace(/\{([^}]+)}/g,function(t,n){return i!=null&&n in i?i[n]:t})),e}function ve(e,i,t="-",n,o){let r="";(e<0||o&&e<=0)&&(o?e=-e+1:(e=-e,r=t));let s=String(e);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function ws(e,i){return ve(e,3).substring(0,i)}function $(e,i,t=0,n=!1,o=!1){return function(r,s){let a=As(e,r);if((t>0||a>-t)&&(a+=t),e===3)a===0&&t===-12&&(a=12);else if(e===6)return ws(a,i);let l=Se(s,oe.MinusSign);return ve(a,i,l,n,o)}}function As(e,i){switch(e){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new X(2301,!1)}}function M(e,i,t=Z.Format,n=!1){return function(o,r){return Fs(o,r,e,i,t,n)}}function Fs(e,i,t,n,o,r){switch(t){case 2:return po(i,o,n)[e.getMonth()];case 1:return co(i,o,n)[e.getDay()];case 0:let s=e.getHours(),a=e.getMinutes();if(r){let u=mo(i),c=bo(i,o,n),d=u.findIndex(p=>{if(Array.isArray(p)){let[h,f]=p,b=s>=h.hours&&a>=h.minutes,D=s<f.hours||s===f.hours&&a<f.minutes;if(h.hours<f.hours){if(b&&D)return!0}else if(b||D)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return uo(i,o,n)[s<12?0:1];case 3:return ho(i,n)[e.getFullYear()<=0?0:1];default:let l=t;throw new X(2302,!1)}}function un(e){return function(i,t,n){let o=-1*n,r=Se(t,oe.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case 0:return(o>=0?"+":"")+ve(s,2,r)+ve(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+ve(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+ve(s,2,r)+":"+ve(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+ve(s,2,r)+":"+ve(Math.abs(o%60),2,r);default:throw new X(2302,!1)}}}var Is=0,dn=4;function Ts(e){let i=pn(e,Is,1).getDay();return pn(e,0,1+(i<=dn?dn:dn+7)-i)}function Co(e){let i=e.getDay(),t=i===0?-3:dn-i;return pn(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Hn(e,i=!1){return function(t,n){let o;if(i){let r=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,s=t.getDate();o=1+Math.floor((s+r)/7)}else{let r=Co(t),s=Ts(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return ve(o,e,Se(n,oe.MinusSign))}}function cn(e,i=!1){return function(t,n){let r=Co(t).getFullYear();return ve(r,e,Se(n,oe.MinusSign),i)}}var Un={};function Ms(e){if(Un[e])return Un[e];let i;switch(e){case"G":case"GG":case"GGG":i=M(3,A.Abbreviated);break;case"GGGG":i=M(3,A.Wide);break;case"GGGGG":i=M(3,A.Narrow);break;case"y":i=$(0,1,0,!1,!0);break;case"yy":i=$(0,2,0,!0,!0);break;case"yyy":i=$(0,3,0,!1,!0);break;case"yyyy":i=$(0,4,0,!1,!0);break;case"Y":i=cn(1);break;case"YY":i=cn(2,!0);break;case"YYY":i=cn(3);break;case"YYYY":i=cn(4);break;case"M":case"L":i=$(1,1,1);break;case"MM":case"LL":i=$(1,2,1);break;case"MMM":i=M(2,A.Abbreviated);break;case"MMMM":i=M(2,A.Wide);break;case"MMMMM":i=M(2,A.Narrow);break;case"LLL":i=M(2,A.Abbreviated,Z.Standalone);break;case"LLLL":i=M(2,A.Wide,Z.Standalone);break;case"LLLLL":i=M(2,A.Narrow,Z.Standalone);break;case"w":i=Hn(1);break;case"ww":i=Hn(2);break;case"W":i=Hn(1,!0);break;case"d":i=$(2,1);break;case"dd":i=$(2,2);break;case"c":case"cc":i=$(7,1);break;case"ccc":i=M(1,A.Abbreviated,Z.Standalone);break;case"cccc":i=M(1,A.Wide,Z.Standalone);break;case"ccccc":i=M(1,A.Narrow,Z.Standalone);break;case"cccccc":i=M(1,A.Short,Z.Standalone);break;case"E":case"EE":case"EEE":i=M(1,A.Abbreviated);break;case"EEEE":i=M(1,A.Wide);break;case"EEEEE":i=M(1,A.Narrow);break;case"EEEEEE":i=M(1,A.Short);break;case"a":case"aa":case"aaa":i=M(0,A.Abbreviated);break;case"aaaa":i=M(0,A.Wide);break;case"aaaaa":i=M(0,A.Narrow);break;case"b":case"bb":case"bbb":i=M(0,A.Abbreviated,Z.Standalone,!0);break;case"bbbb":i=M(0,A.Wide,Z.Standalone,!0);break;case"bbbbb":i=M(0,A.Narrow,Z.Standalone,!0);break;case"B":case"BB":case"BBB":i=M(0,A.Abbreviated,Z.Format,!0);break;case"BBBB":i=M(0,A.Wide,Z.Format,!0);break;case"BBBBB":i=M(0,A.Narrow,Z.Format,!0);break;case"h":i=$(3,1,-12);break;case"hh":i=$(3,2,-12);break;case"H":i=$(3,1);break;case"HH":i=$(3,2);break;case"m":i=$(4,1);break;case"mm":i=$(4,2);break;case"s":i=$(5,1);break;case"ss":i=$(5,2);break;case"S":i=$(6,1);break;case"SS":i=$(6,2);break;case"SSS":i=$(6,3);break;case"Z":case"ZZ":case"ZZZ":i=un(0);break;case"ZZZZZ":i=un(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=un(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=un(2);break;default:return null}return Un[e]=i,i}function _o(e,i){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?i:t}function Os(e,i){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+i),e}function xs(e,i,t){let o=e.getTimezoneOffset(),r=_o(i,o);return Os(e,-1*(r-o))}function Ls(e){if(to(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[o,r=1,s=1]=e.split("-").map(a=>+a);return pn(o,r-1,s)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let n;if(n=e.match(Es))return Ns(n)}let i=new Date(e);if(!to(i))throw new X(2302,!1);return i}function Ns(e){let i=new Date(0),t=0,n=0,o=e[8]?i.setUTCFullYear:i.setFullYear,r=e[8]?i.setUTCHours:i.setHours;e[9]&&(t=Number(e[9]+e[10]),n=Number(e[9]+e[11])),o.call(i,Number(e[1]),Number(e[2])-1,Number(e[3]));let s=Number(e[4]||0)-t,a=Number(e[5]||0)-n,l=Number(e[6]||0),u=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return r.call(i,s,a,l,u),i}function to(e){return e instanceof Date&&!isNaN(e.valueOf())}var Rs=/^(\d+)?\.((\d+)(-(\d+))?)?$/,no=22,hn=".",Mt="0",ks=";",Ps=",",Gn="#",io="\xA4";function Vs(e,i,t,n,o,r,s=!1){let a="",l=!1;if(!isFinite(e))a=Se(t,oe.Infinity);else{let u=js(e);s&&(u=$s(u));let c=i.minInt,d=i.minFrac,p=i.maxFrac;if(r){let T=r.match(Rs);if(T===null)throw new X(2306,!1);let K=T[1],ke=T[3],ze=T[5];K!=null&&(c=Wn(K)),ke!=null&&(d=Wn(ke)),ze!=null?p=Wn(ze):ke!=null&&d>p&&(p=d)}Hs(u,d,p);let h=u.digits,f=u.integerLen,b=u.exponent,D=[];for(l=h.every(T=>!T);f<c;f++)h.unshift(0);for(;f<0;f++)h.unshift(0);f>0?D=h.splice(f,h.length):(D=h,h=[0]);let I=[];for(h.length>=i.lgSize&&I.unshift(h.splice(-i.lgSize,h.length).join(""));h.length>i.gSize;)I.unshift(h.splice(-i.gSize,h.length).join(""));h.length&&I.unshift(h.join("")),a=I.join(Se(t,n)),D.length&&(a+=Se(t,o)+D.join("")),b&&(a+=Se(t,oe.Exponential)+"+"+b)}return e<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function Eo(e,i,t,n,o){let r=fo(i,qn.Currency),s=Bs(r,Se(i,oe.MinusSign));return s.minFrac=vo(n),s.maxFrac=s.minFrac,Vs(e,s,i,oe.CurrencyGroup,oe.CurrencyDecimal,o).replace(io,t).replace(io,"").trim()}function Bs(e,i="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=e.split(ks),o=n[0],r=n[1],s=o.indexOf(hn)!==-1?o.split(hn):[o.substring(0,o.lastIndexOf(Mt)+1),o.substring(o.lastIndexOf(Mt)+1)],a=s[0],l=s[1]||"";t.posPre=a.substring(0,a.indexOf(Gn));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===Mt?t.minFrac=t.maxFrac=c+1:d===Gn?t.maxFrac=c+1:t.posSuf+=d}let u=a.split(Ps);if(t.gSize=u[1]?u[1].length:0,t.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let c=o.length-t.posPre.length-t.posSuf.length,d=r.indexOf(Gn);t.negPre=r.substring(0,d).replace(/'/g,""),t.negSuf=r.slice(d+c).replace(/'/g,"")}else t.negPre=i+t.posPre,t.negSuf=t.posSuf;return t}function $s(e){if(e.digits[0]===0)return e;let i=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(i===0?e.digits.push(0,0):i===1&&e.digits.push(0),e.integerLen+=2),e}function js(e){let i=Math.abs(e)+"",t=0,n,o,r,s,a;for((o=i.indexOf(hn))>-1&&(i=i.replace(hn,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===Mt;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===Mt;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>no&&(n=n.splice(0,no-1),t=o-1,o=1),{digits:n,exponent:t,integerLen:o}}function Hs(e,i,t){if(i>t)throw new X(2307,!1);let n=e.digits,o=n.length-e.integerLen,r=Math.min(Math.max(i,o),t),s=r+e.integerLen,a=n[s];if(s>0){n.splice(Math.max(e.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{o=Math.max(0,o),e.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),e.integerLen++;n.unshift(1),e.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+e.integerLen,c=n.reduceRight(function(d,p,h,f){return p=p+d,f[h]=p<10?p:p-10,l&&(f[h]===0&&h>=u?f.pop():l=!1),p>=10?1:0},0);c&&(n.unshift(c),e.integerLen++)}function Wn(e){let i=parseInt(e);if(isNaN(i))throw new X(2305,!1);return i}var zn=/\s+/,oo=[],Us=(()=>{class e{_ngEl;_renderer;initialClasses=oo;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(zn):oo}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(zn):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let o=this.stateMap.get(t);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],o=t[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(zn).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||e)(E(me),E(Ie))};static \u0275dir=S({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var fn=class{$implicit;ngForOf;index;count;constructor(i,t,n,o){this.$implicit=i,this.ngForOf=t,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},So=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,o){this._viewContainer=t,this._template=n,this._differs=o}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new fn(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),ro(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}t.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);ro(r,o)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(E(St),E(tt),E(Ki))};static \u0275dir=S({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function ro(e,i){e.context.$implicit=i.item}var Yn=(()=>{class e{_viewContainer;_context=new gn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){so(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){so(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||e)(E(St),E(tt))};static \u0275dir=S({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),gn=class{$implicit=null;ngIf=null};function so(e,i){if(e&&!e.createEmbeddedView)throw new X(2020,!1)}var Kn=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,t){this._viewContainerRef=i,this._templateRef=t}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},wo=(()=>{class e{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(t){this._ngSwitch=t,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(t){this._defaultViews.push(t)}_matchCase(t){let n=t===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(t){if(this._defaultViews.length>0&&t!==this._defaultUsed){this._defaultUsed=t;for(let n of this._defaultViews)n.enforceState(t)}}static \u0275fac=function(n){return new(n||e)};static \u0275dir=S({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return e})(),Gs=(()=>{class e{ngSwitch;_view;ngSwitchCase;constructor(t,n,o){this.ngSwitch=o,o._addCase(),this._view=new Kn(t,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||e)(E(St),E(tt),E(wo,9))};static \u0275dir=S({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return e})();var Zn=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,n,o){this._ngEl=t,this._differs=n,this._renderer=o}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,n){let[o,r]=t.split("."),s=o.indexOf("-")===-1?void 0:Ni.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(t){t.forEachRemovedItem(n=>this._setStyle(n.key,null)),t.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),t.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||e)(E(me),E(qi),E(Ie))};static \u0275dir=S({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),Qe=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(t,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||e)(E(St))};static \u0275dir=S({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Pe]})}return e})();function Qn(e,i){return new X(2100,!1)}var Ws="mediumDate",Ao=new J(""),Fo=new J(""),zs=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,n,o){this.locale=t,this.defaultTimezone=n,this.defaultOptions=o}transform(t,n,o,r){if(t==null||t===""||t!==t)return null;try{let s=n??this.defaultOptions?.dateFormat??Ws,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Do(t,s,r||this.locale,a)}catch(s){throw Qn(e,s.message)}}static \u0275fac=function(n){return new(n||e)(E(Vn,16),E(Ao,24),E(Fo,24))};static \u0275pipe=tn({name:"date",type:e,pure:!0})}return e})();var Ks=(()=>{class e{_locale;_defaultCurrencyCode;constructor(t,n="USD"){this._locale=t,this._defaultCurrencyCode=n}transform(t,n=this._defaultCurrencyCode,o="symbol",r,s){if(!qs(t))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=n||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=yo(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=Ys(t);return Eo(l,s,a,n,r)}catch(l){throw Qn(e,l.message)}}static \u0275fac=function(n){return new(n||e)(E(Vn,16),E(zi,16))};static \u0275pipe=tn({name:"currency",type:e,pure:!0})}return e})();function qs(e){return!(e==null||e===""||e!==e)}function Ys(e){if(typeof e=="string"&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if(typeof e!="number")throw new X(2309,!1);return e}var Zs=(()=>{class e{transform(t,n,o){if(t==null)return null;if(!(typeof t=="string"||Array.isArray(t)))throw Qn(e,t);return t.slice(n,o)}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=tn({name:"slice",type:e,pure:!1})}return e})();var re=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({})}return e})();function Qs(e,i){i=encodeURIComponent(i);for(let t of e.split(";")){let n=t.indexOf("="),[o,r]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Xn=class{};var ea="browser",ta="server";function mn(e){return e===ea}function Io(e){return e===ta}var Sc=(()=>{class e{static \u0275prov=m({token:e,providedIn:"root",factory:()=>new Jn(g(te),window)})}return e})(),Jn=class{document;window;offset=()=>[0,0];constructor(i,t){this.document=i,this.window=t}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,t){this.window.scrollTo(ae(_({},t),{left:i[0],top:i[1]}))}scrollToAnchor(i,t){let n=na(this.document,i);n&&(this.scrollToElement(n,t),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(xn(2400,!1))}}scrollToElement(i,t){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(ae(_({},t),{left:o-s[0],top:r-s[1]}))}};function na(e,i){let t=e.getElementById(i)||e.getElementsByName(i)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let n=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}function ct(...e){if(e){let i=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[ct(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Mo(e,i){return e?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}function Le(e,i){if(e&&i){let t=n=>{Mo(e,n)||(e.classList?e.classList.add(n):e.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function ia(){return window.innerWidth-document.documentElement.offsetWidth}function Oo(e){typeof e=="string"?Le(document.body,e||"p-overflow-hidden"):(e!=null&&e.variableName&&document.body.style.setProperty(e.variableName,ia()+"px"),Le(document.body,e?.className||"p-overflow-hidden"))}function $e(e,i){if(e&&i){let t=n=>{e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(t))}}function xo(e){typeof e=="string"?$e(document.body,e||"p-overflow-hidden"):(e!=null&&e.variableName&&document.body.style.removeProperty(e.variableName),$e(document.body,e?.className||"p-overflow-hidden"))}function Ot(e){for(let i of document?.styleSheets)try{for(let t of i?.cssRules)for(let n of t?.style)if(e.test(n))return{name:n,value:t.style.getPropertyValue(n).trim()}}catch{}return null}function Lo(e){let i={width:0,height:0};if(e){let[t,n]=[e.style.visibility,e.style.display];e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display=n,e.style.visibility=t}return i}function oi(){let e=window,i=document,t=i.documentElement,n=i.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||n.clientWidth,r=e.innerHeight||t.clientHeight||n.clientHeight;return{width:o,height:r}}function ii(e){return e?Math.abs(e.scrollLeft):0}function oa(){let e=document.documentElement;return(window.pageXOffset||ii(e))-(e.clientLeft||0)}function ra(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function sa(e){return e?getComputedStyle(e).direction==="rtl":!1}function Oc(e,i,t=!0){var n,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Lo(e),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),h=ra(),f=oa(),b=oi(),D,I,T="top";p.top+c+l>b.height?(D=p.top+h-l,T="bottom",D<0&&(D=h)):D=c+p.top+h,p.left+u>b.width?I=Math.max(0,p.left+f+d-u):I=p.left+f,sa(e)?e.style.insetInlineEnd=I+"px":e.style.insetInlineStart=I+"px",e.style.top=D+"px",e.style.transformOrigin=T,t&&(e.style.marginTop=T==="bottom"?`calc(${(o=(n=Ot(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=Ot(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function No(e,i){e&&(typeof i=="string"?e.style.cssText=i:Object.entries(i||{}).forEach(([t,n])=>e.style[t]=n))}function ri(e,i){if(e instanceof HTMLElement){let t=e.offsetWidth;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return t}return 0}function xc(e,i,t=!0,n=void 0){var o;if(e){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:Lo(e),s=i.offsetHeight,a=i.getBoundingClientRect(),l=oi(),u,c,d=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,d="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,e.style.top=u+"px",e.style.insetInlineStart=c+"px",e.style.transformOrigin=d,t){let p=(o=Ot(/-anchor-gutter$/))==null?void 0:o.value;e.style.marginTop=d==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Ro(e){if(e){let i=e.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function aa(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&Ro(e))}function dt(e){return typeof Element<"u"?e instanceof Element:e!==null&&typeof e=="object"&&e.nodeType===1&&typeof e.nodeName=="string"}function ko(e){let i=e;return e&&typeof e=="object"&&(Object.hasOwn(e,"current")?i=e.current:Object.hasOwn(e,"el")&&(Object.hasOwn(e.el,"nativeElement")?i=e.el.nativeElement:i=e.el)),dt(i)?i:void 0}function la(e,i){var t,n,o;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(t=i?.children)==null?void 0:t[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof e=="string"){let a=e.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(e)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(e)?e():e,s=ko(r);return aa(s)?s:r?.nodeType===9?r:void 0}}}function Lc(e,i){let t=la(e,i);if(t)t.appendChild(i);else throw new Error("Cannot append "+i+" to "+e)}var ti;function Nc(e){if(e){let i=getComputedStyle(e);return e.offsetHeight-e.clientHeight-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)}else{if(ti!=null)return ti;let i=document.createElement("div");No(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let t=i.offsetHeight-i.clientHeight;return document.body.removeChild(i),ti=t,t}}var ni;function To(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(ni!=null)return ni;let i=document.createElement("div");No(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let t=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),ni=t,t}}function Rc(){if(window.getSelection){let e=window.getSelection()||{};e.empty?e.empty():e.removeAllRanges&&e.rangeCount>0&&e.getRangeAt(0).getClientRects().length>0&&e.removeAllRanges()}}function bn(e,i={}){if(dt(e)){let t=(n,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[n]?[(s=e?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?t(n,u):Object.entries(u).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?bn(e,o):(o=n==="class"?[...new Set(t("class",o))].join(" ").trim():n==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[n]=o),e.setAttribute(n,o))}})}}function kc(e,i={},...t){if(e){let n=document.createElement(e);return bn(n,i),n.append(...t),n}}function Pc(e,i){if(e){e.style.opacity="0";let t=+new Date,n="0",o=function(){n=`${+e.style.opacity+(new Date().getTime()-t)/i}`,e.style.opacity=n,t=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function ua(e,i){return dt(e)?Array.from(e.querySelectorAll(i)):[]}function pt(e,i){return dt(e)?e.matches(i)?e:e.querySelector(i):null}function Vc(e,i){e&&document.activeElement!==e&&e.focus(i)}function Bc(e,i){if(dt(e)){let t=e.getAttribute(i);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function Po(e,i=""){let t=ua(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function $c(e,i){let t=Po(e,i);return t.length>0?t[0]:null}function si(e){if(e){let i=e.offsetHeight,t=getComputedStyle(e);return i-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),i}return 0}function ca(e){if(e){let[i,t]=[e.style.visibility,e.style.display];e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display=t,e.style.visibility=i,n}return 0}function da(e){if(e){let[i,t]=[e.style.visibility,e.style.display];e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display=t,e.style.visibility=i,n}return 0}function jc(e){var i;if(e){let t=(i=Ro(e))==null?void 0:i.childNodes,n=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return n;t[o].nodeType===1&&n++}}return-1}function Hc(e,i){let t=Po(e,i);return t.length>0?t[t.length-1]:null}function ai(e){if(e){let i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||ii(document.documentElement)||ii(document.body)||0)}}return{top:"auto",left:"auto"}}function yn(e,i){if(e){let t=e.offsetHeight;if(i){let n=getComputedStyle(e);t+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return t}return 0}function Uc(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function li(e){if(e){let i=e.offsetWidth,t=getComputedStyle(e);return i-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),i}return 0}function Gc(){return/(android)/i.test(navigator.userAgent)}function Wc(e){return!!(e&&e.offsetParent!=null)}function zc(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function Kc(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function qc(e,i){var t,n;if(e){let o=e.parentElement,r=ai(o),s=oi(),a=e.offsetParent?e.offsetWidth:da(e),l=e.offsetParent?e.offsetHeight:ca(e),u=ri((t=o?.children)==null?void 0:t[0]),c=yn((n=o?.children)==null?void 0:n[0]),d="",p="";r.left+u+a>s.width-To()?r.left<a?i%2===1?d=r.left?"-"+r.left+"px":"100%":i%2===0&&(d=s.width-a-To()+"px"):d="-100%":d="100%",e.getBoundingClientRect().top+c+l>s.height?p=`-${l-c}px`:p="0px",e.style.top=p,e.style.insetInlineStart=d}}function Vo(e){var i;e&&("remove"in Element.prototype?e.remove():(i=e.parentNode)==null||i.removeChild(e))}function Yc(e,i){let t=ko(e);if(t)t.removeChild(i);else throw new Error("Cannot remove "+i+" from "+e)}function Zc(e,i){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),n=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=e.scrollTop,u=e.clientHeight,c=yn(i);a<0?e.scrollTop=l+a:a+c>u&&(e.scrollTop=l+a-u+c)}function Qc(e,i="",t){dt(e)&&t!==null&&t!==void 0&&e.setAttribute(i,t)}function Bo(){let e=new Map;return{on(i,t){let n=e.get(i);return n?n.push(t):n=[t],e.set(i,n),this},off(i,t){let n=e.get(i);return n&&n.splice(n.indexOf(t)>>>0,1),this},emit(i,t){let n=e.get(i);n&&n.forEach(o=>{o(t)})},clear(){e.clear()}}}var pa=Object.defineProperty,$o=Object.getOwnPropertySymbols,ha=Object.prototype.hasOwnProperty,fa=Object.prototype.propertyIsEnumerable,jo=(e,i,t)=>i in e?pa(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,ga=(e,i)=>{for(var t in i||(i={}))ha.call(i,t)&&jo(e,t,i[t]);if($o)for(var t of $o(i))fa.call(i,t)&&jo(e,t,i[t]);return e};function we(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function ui(e,i,t=new WeakSet){if(e===i)return!0;if(!e||!i||typeof e!="object"||typeof i!="object"||t.has(e)||t.has(i))return!1;t.add(e).add(i);let n=Array.isArray(e),o=Array.isArray(i),r,s,a;if(n&&o){if(s=e.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!ui(e[r],i[r],t))return!1;return!0}if(n!=o)return!1;let l=e instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return e.getTime()==i.getTime();let c=e instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return e.toString()==i.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!ui(e[a],i[a],t))return!1;return!0}function ma(e,i){return ui(e,i)}function Uo(e){return typeof e=="function"&&"call"in e&&"apply"in e}function F(e){return!we(e)}function je(e,i){if(!e||!i)return null;try{let t=e[i];if(F(t))return t}catch{}if(Object.keys(e).length){if(Uo(i))return i(e);if(i.indexOf(".")===-1)return e[i];{let t=i.split("."),n=e;for(let o=0,r=t.length;o<r;++o){if(n==null)return null;n=n[t[o]]}return n}}return null}function He(e,i,t){return t?je(e,t)===je(i,t):ma(e,i)}function ed(e,i){if(e!=null&&i&&i.length){for(let t of i)if(He(e,t))return!0}return!1}function De(e,i=!0){return e instanceof Object&&e.constructor===Object&&(i||Object.keys(e).length!==0)}function Go(e={},i={}){let t=ga({},e);return Object.keys(i).forEach(n=>{let o=n;De(i[o])&&o in e&&De(e[o])?t[o]=Go(e[o],i[o]):t[o]=i[o]}),t}function ci(...e){return e.reduce((i,t,n)=>n===0?t:Go(i,t),{})}function td(e,i){let t=-1;if(i){for(let n=0;n<i.length;n++)if(i[n]===e){t=n;break}}return t}function nd(e,i){let t;if(F(e))try{t=e.findLast(i)}catch{t=[...e].reverse().find(i)}return t}function id(e,i){let t=-1;if(F(e))try{t=e.findLastIndex(i)}catch{t=e.lastIndexOf([...e].reverse().find(i))}return t}function se(e,...i){return Uo(e)?e(...i):e}function Ue(e,i=!0){return typeof e=="string"&&(i||e!=="")}function Ho(e){return Ue(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function vn(e,i="",t={}){let n=Ho(i).split("."),o=n.shift();if(o){if(De(e)){let r=Object.keys(e).find(s=>Ho(s)===o)||"";return vn(se(e[r],t),n.join("."),t)}return}return se(e,t)}function ba(e,i=!0){return Array.isArray(e)&&(i||e.length!==0)}function od(e){return e instanceof Date}function Wo(e){return F(e)&&!isNaN(e)}function rd(e=""){return F(e)&&e.length===1&&!!e.match(/\S| /)}function Ce(e,i){if(i){let t=i.test(e);return i.lastIndex=0,t}return!1}function di(...e){return ci(...e)}function Xe(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function ce(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let t in i)e=e.replace(i[t],t)}return e}function sd(e,i,t){e&&i!==t&&(t>=e.length&&(t%=e.length,i%=e.length),e.splice(t,0,e.splice(i,1)[0]))}function Dn(e){return Ue(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,t)=>t===0?i:"-"+i.toLowerCase()).toLowerCase():e}var Cn={};function xt(e="pui_id_"){return Object.hasOwn(Cn,e)||(Cn[e]=0),Cn[e]++,`${e}${Cn[e]}`}var zo=["*"],ya=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(ya||{}),pd=(()=>{class e{requireConfirmationSource=new ee;acceptConfirmationSource=new ee;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var W=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),hd=(()=>{class e{static AND="and";static OR="or"}return e})(),fd=(()=>{class e{filter(t,n,o,r,s){let a=[];if(t)for(let l of t)for(let u of n){let c=je(l,u);if(this.filters[r](c,o,s)){a.push(l);break}}return a}filters={startsWith:(t,n,o)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=ce(n.toString()).toLocaleLowerCase(o);return ce(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=ce(n.toString()).toLocaleLowerCase(o);return ce(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;let r=ce(n.toString()).toLocaleLowerCase(o);return ce(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,n,o)=>{if(n==null||n.trim()==="")return!0;if(t==null)return!1;let r=ce(n.toString()).toLocaleLowerCase(o),s=ce(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()===n.getTime():t==n?!0:ce(t.toString()).toLocaleLowerCase(o)==ce(n.toString()).toLocaleLowerCase(o),notEquals:(t,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:t==null?!0:t.getTime&&n.getTime?t.getTime()!==n.getTime():t==n?!1:ce(t.toString()).toLocaleLowerCase(o)!=ce(n.toString()).toLocaleLowerCase(o),in:(t,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(He(t,n[o]))return!0;return!1},between:(t,n)=>n==null||n[0]==null||n[1]==null?!0:t==null?!1:t.getTime?n[0].getTime()<=t.getTime()&&t.getTime()<=n[1].getTime():n[0]<=t&&t<=n[1],lt:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<n.getTime():t<n,lte:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<=n.getTime():t<=n,gt:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>n.getTime():t>n,gte:(t,n,o)=>n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>=n.getTime():t>=n,is:(t,n,o)=>this.filters.equals(t,n,o),isNot:(t,n,o)=>this.filters.notEquals(t,n,o),before:(t,n,o)=>this.filters.lt(t,n,o),after:(t,n,o)=>this.filters.gt(t,n,o),dateIs:(t,n)=>n==null?!0:t==null?!1:t.toDateString()===n.toDateString(),dateIsNot:(t,n)=>n==null?!0:t==null?!1:t.toDateString()!==n.toDateString(),dateBefore:(t,n)=>n==null?!0:t==null?!1:t.getTime()<n.getTime(),dateAfter:(t,n)=>n==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>n.getTime())};register(t,n){this.filters[t]=n}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),gd=(()=>{class e{messageSource=new ee;clearSource=new ee;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),md=(()=>{class e{clickSource=new ee;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var bd=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=G({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:zo,decls:1,vars:0,template:function(n,o){n&1&&(Me(),Oe(0))},encapsulation:2})}return e})(),yd=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=G({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:zo,decls:1,vars:0,template:function(n,o){n&1&&(Me(),Oe(0))},encapsulation:2})}return e})(),ht=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(n){return new(n||e)(E(tt))};static \u0275dir=S({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),Q=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[re]})}return e})(),vd=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})(),Dd=(()=>{class e{dragStartSource=new ee;dragStopSource=new ee;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(t){this.dragStartSource.next(t)}stopDrag(t){this.dragStopSource.next(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var va=Object.defineProperty,Da=Object.defineProperties,Ca=Object.getOwnPropertyDescriptors,_n=Object.getOwnPropertySymbols,Yo=Object.prototype.hasOwnProperty,Zo=Object.prototype.propertyIsEnumerable,Ko=(e,i,t)=>i in e?va(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,x=(e,i)=>{for(var t in i||(i={}))Yo.call(i,t)&&Ko(e,t,i[t]);if(_n)for(var t of _n(i))Zo.call(i,t)&&Ko(e,t,i[t]);return e},gt=(e,i)=>Da(e,Ca(i)),Ne=(e,i)=>{var t={};for(var n in e)Yo.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&_n)for(var n of _n(e))i.indexOf(n)<0&&Zo.call(e,n)&&(t[n]=e[n]);return t};var _a=Bo(),de=_a,Lt=/{([^}]*)}/g,Qo=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Xo=/var\([^)]+\)/g;function qo(e){return Ue(e)?e.replace(/[A-Z]/g,(i,t)=>t===0?i:"."+i.toLowerCase()).toLowerCase():e}function Ea(e){return De(e)&&e.hasOwnProperty("$value")&&e.hasOwnProperty("$type")?e.$value:e}function Sa(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function pi(e="",i=""){return Sa(`${Ue(e,!1)&&Ue(i,!1)?`${e}-`:e}${i}`)}function Jo(e="",i=""){return`--${pi(e,i)}`}function wa(e=""){let i=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(i+t)%2!==0}function er(e,i="",t="",n=[],o){if(Ue(e)){let r=e.trim();if(wa(r))return;if(Ce(r,Lt)){let s=r.replaceAll(Lt,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>Ce(u,c)));return`var(${Jo(t,Dn(l.join("-")))}${F(o)?`, ${o}`:""})`});return Ce(s.replace(Xo,"0"),Qo)?`calc(${s})`:s}return r}else if(Wo(e))return e}function Aa(e,i,t){Ue(i,!1)&&e.push(`${i}:${t};`)}function ft(e,i){return e?`${e}{${i}}`:""}function tr(e,i){if(e.indexOf("dt(")===-1)return e;function t(s,a){let l=[],u=0,c="",d=null,p=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(d=d===h?null:h),!d&&(h==="("&&p++,h===")"&&p--,(h===","||u===s.length)&&p===0)){let f=c.trim();f.startsWith("dt(")?l.push(tr(f,a)):l.push(n(f)),c="",u++;continue}h!==void 0&&(c+=h),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<e.length;s++)if(e[s]==="d"&&e.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(e[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return e;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=e.slice(a+3,l),c=t(u,i),d=i(...c);e=e.slice(0,a)+d+e.slice(l+1)}return e}var fi=e=>{var i;let t=C.getTheme(),n=hi(t,e,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=hi(t,e,void 0,"value");return{name:o,variable:n,value:r}},Re=(...e)=>hi(C.getTheme(),...e),hi=(e={},i,t,n)=>{if(i){let{variable:o,options:r}=C.defaults||{},{prefix:s,transform:a}=e?.options||r||{},l=Ce(i,Lt)?i:`{${i}}`;return n==="value"||we(n)&&a==="strict"?C.getTokenValue(i):er(l,void 0,s,[o.excludedKeyRegex],t)}return""};function mt(e,...i){if(e instanceof Array){let t=e.reduce((n,o,r)=>{var s;return n+o+((s=se(i[r],{dt:Re}))!=null?s:"")},"");return tr(t,Re)}return se(e,{dt:Re})}var Fa=(e={})=>{let{preset:i,options:t}=e;return{preset(n){return i=i?di(i,n):n,this},options(n){return t=t?x(x({},t),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=gt(x({},i),{semantic:gt(x({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n&&Object.hasOwn(n,"light")?n.light:n,l=n&&Object.hasOwn(n,"dark")?n.dark:n,u={colorScheme:{light:x(x({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:x(x({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=gt(x({},i),{semantic:x(x({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?C.getPreset():i,options:o?C.getOptions():t}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?di(C.getPreset(),i):i,options:o?x(x({},C.getOptions()),t):t};return C.setTheme(r),r},use(n){let o=this.define(n);return C.setTheme(o),o}}};function Ia(e,i={}){let t=C.defaults.variable,{prefix:n=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=i,s=[],a=[],l=[{node:e,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let p in c){let h=c[p],f=Ea(h),b=Ce(p,r)?pi(d):pi(d,Dn(p));if(De(f))l.push({node:f,path:b});else{let D=Jo(b),I=er(f,b,n,[r]);Aa(a,D,I);let T=b;n&&T.startsWith(n+"-")&&(T=T.slice(n.length+1)),s.push(T.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:ft(o,u)}}var _e={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:e,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let i=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var n;return(n=i.map(o=>o.resolve(t)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(t)})}},_toVariables(e,i){return Ia(e,{prefix:i?.prefix})},getCommon({name:e="",theme:i={},params:t,set:n,defaults:o}){var r,s,a,l,u,c,d;let{preset:p,options:h}=i,f,b,D,I,T,K,ke;if(F(p)&&h.transform!=="strict"){let{primitive:ze,semantic:Bt,extend:$t}=p,Ct=Bt||{},{colorScheme:jt}=Ct,Ht=Ne(Ct,["colorScheme"]),Ut=$t||{},{colorScheme:Gt}=Ut,_t=Ne(Ut,["colorScheme"]),Et=jt||{},{dark:Wt}=Et,zt=Ne(Et,["dark"]),Kt=Gt||{},{dark:qt}=Kt,Yt=Ne(Kt,["dark"]),Zt=F(ze)?this._toVariables({primitive:ze},h):{},Qt=F(Ht)?this._toVariables({semantic:Ht},h):{},Xt=F(zt)?this._toVariables({light:zt},h):{},Si=F(Wt)?this._toVariables({dark:Wt},h):{},wi=F(_t)?this._toVariables({semantic:_t},h):{},Ai=F(Yt)?this._toVariables({light:Yt},h):{},Fi=F(qt)?this._toVariables({dark:qt},h):{},[Qr,Xr]=[(r=Zt.declarations)!=null?r:"",Zt.tokens],[Jr,es]=[(s=Qt.declarations)!=null?s:"",Qt.tokens||[]],[ts,ns]=[(a=Xt.declarations)!=null?a:"",Xt.tokens||[]],[is,os]=[(l=Si.declarations)!=null?l:"",Si.tokens||[]],[rs,ss]=[(u=wi.declarations)!=null?u:"",wi.tokens||[]],[as,ls]=[(c=Ai.declarations)!=null?c:"",Ai.tokens||[]],[us,cs]=[(d=Fi.declarations)!=null?d:"",Fi.tokens||[]];f=this.transformCSS(e,Qr,"light","variable",h,n,o),b=Xr;let ds=this.transformCSS(e,`${Jr}${ts}`,"light","variable",h,n,o),ps=this.transformCSS(e,`${is}`,"dark","variable",h,n,o);D=`${ds}${ps}`,I=[...new Set([...es,...ns,...os])];let hs=this.transformCSS(e,`${rs}${as}color-scheme:light`,"light","variable",h,n,o),fs=this.transformCSS(e,`${us}color-scheme:dark`,"dark","variable",h,n,o);T=`${hs}${fs}`,K=[...new Set([...ss,...ls,...cs])],ke=se(p.css,{dt:Re})}return{primitive:{css:f,tokens:b},semantic:{css:D,tokens:I},global:{css:T,tokens:K},style:ke}},getPreset({name:e="",preset:i={},options:t,params:n,set:o,defaults:r,selector:s}){var a,l,u;let c,d,p;if(F(i)&&t.transform!=="strict"){let h=e.replace("-directive",""),f=i,{colorScheme:b,extend:D,css:I}=f,T=Ne(f,["colorScheme","extend","css"]),K=D||{},{colorScheme:ke}=K,ze=Ne(K,["colorScheme"]),Bt=b||{},{dark:$t}=Bt,Ct=Ne(Bt,["dark"]),jt=ke||{},{dark:Ht}=jt,Ut=Ne(jt,["dark"]),Gt=F(T)?this._toVariables({[h]:x(x({},T),ze)},t):{},_t=F(Ct)?this._toVariables({[h]:x(x({},Ct),Ut)},t):{},Et=F($t)?this._toVariables({[h]:x(x({},$t),Ht)},t):{},[Wt,zt]=[(a=Gt.declarations)!=null?a:"",Gt.tokens||[]],[Kt,qt]=[(l=_t.declarations)!=null?l:"",_t.tokens||[]],[Yt,Zt]=[(u=Et.declarations)!=null?u:"",Et.tokens||[]],Qt=this.transformCSS(h,`${Wt}${Kt}`,"light","variable",t,o,r,s),Xt=this.transformCSS(h,Yt,"dark","variable",t,o,r,s);c=`${Qt}${Xt}`,d=[...new Set([...zt,...qt,...Zt])],p=se(I,{dt:Re})}return{css:c,tokens:d,style:p}},getPresetC({name:e="",theme:i={},params:t,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:n,defaults:o})},getPresetD({name:e="",theme:i={},params:t,set:n,defaults:o}){var r,s;let a=e.replace("-directive",""),{preset:l,options:u}=i,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:t,set:n,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,i){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?i.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:i.options.darkModeSelector):[]},getLayerOrder(e,i={},t,n){let{cssLayer:o}=i;return o?`@layer ${se(o.order||o.name||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:i,params:t,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(De(c)&&Object.hasOwn(c,"css")){let d=Xe(c.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:i={},params:t,props:n={},set:o,defaults:r}){var s;let a={name:e,theme:i,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,p])=>c.push(`${d}="${p}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${u}>${Xe(l)}</style>`:""},createTokens(e={},i,t="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&Lt.test(this.value)){let d=this.value.trim().replace(Lt,p=>{var h;let f=p.slice(1,-1),b=this.tokens[f];if(!b)return console.warn(`Token not found for path: ${f}`),"__UNRESOLVED__";let D=b.computed(a,l,u);return Array.isArray(D)&&D.length===2?`light-dark(${D[0].value},${D[1].value})`:(h=D?.value)!=null?h:"__UNRESOLVED__"});c=Qo.test(d.replace(Xo,"0"))?`calc(${d})`:d}return we(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let p=Ce(c,i.variable.excludedKeyRegex)?l:l?`${l}.${qo(c)}`:qo(c),h=u?`${u}.${c}`:c;De(d)?s(d,p,h):(o[p]||(o[p]={paths:[],computed:(f,b={},D=[])=>{if(o[p].paths.length===1)return o[p].paths[0].computed(o[p].paths[0].scheme,b.binding,D);if(f&&f!=="none")for(let I=0;I<o[p].paths.length;I++){let T=o[p].paths[I];if(T.scheme===f)return T.computed(f,b.binding,D)}return o[p].paths.map(I=>I.computed(I.scheme,b[I.scheme],D))}}),o[p].paths.push({path:h,value:d,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(e,t,n),o},getTokenValue(e,i,t){var n;let o=(a=>a.split(".").filter(l=>!Ce(l.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=e[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=Ne(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(e,i,t,n){return t==="class"||t==="attr"?ft(F(i)?`${e}${i},${e} ${i}`:e,n):ft(e,ft(i??":root",n))},transformCSS(e,i,t,n,o={},r,s,a){if(F(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=t==="dark"?u.reduce((c,{type:d,selector:p})=>(F(p)&&(c+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),c),""):ft(a??":root",i)}if(l){let u={name:"primeui",order:"primeui"};De(l)&&(u.name=se(l.name,{name:e,type:n})),F(u.name)&&(i=ft(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},C={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:i}=e;i&&(this._theme=gt(x({},i),{options:x(x({},this.defaults.options),i.options)}),this._tokens=_e.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),de.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=gt(x({},this.theme),{preset:e}),this._tokens=_e.createTokens(e,this.defaults),this.clearLoadedStyleNames(),de.emit("preset:change",e),de.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=gt(x({},this.theme),{options:e}),this.clearLoadedStyleNames(),de.emit("options:change",e),de.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return _e.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",i){return _e.getCommon({name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return _e.getPresetC(t)},getDirective(e="",i){let t={name:e,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return _e.getPresetD(t)},getCustomPreset(e="",i,t,n){let o={name:e,preset:i,options:this.options,selector:t,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return _e.getPreset(o)},getLayerOrderCSS(e=""){return _e.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",i,t="style",n){return _e.transformCSS(e,i,n,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",i,t={}){return _e.getCommonStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,i,t={}){return _e.getStyleSheet({name:e,theme:this.theme,params:i,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),de.emit(`theme:${i}:load`,e),!this._loadingStyles.size&&de.emit("theme:load"))}};function Md(...e){let i=ci(C.getPreset(),...e);return C.setPreset(i),i}function Od(e){return Fa().surfacePalette(e).update().preset}var nr=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var Ta=0,ir=(()=>{class e{document=g(te);use(t,n={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++Ta}`,id:c=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:f={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=t;let b=this.document.head;h&&b.firstChild?b.insertBefore(s,b.firstChild):b.appendChild(s),bn(s,{type:"text/css",media:d,nonce:p,"data-primeng-style-id":u})}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var bt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ma=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,j=(()=>{class e{name="base";useStyle=g(ir);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,n={},o=r=>r)=>{let r=o(mt`${se(t,{dt:Re})}`);return r?this.useStyle.use(Xe(r),_({name:this.name},n)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},n="")=>this.load(this.theme,t,(o="")=>C.transformCSS(t.name||this.name,`${o}${mt`${n}`}`));loadGlobalCSS=(t={})=>this.load(Ma,t);loadGlobalTheme=(t={},n="")=>this.load(nr,t,(o="")=>C.transformCSS(t.name||this.name,`${o}${mt`${n}`}`));getCommonTheme=t=>C.getCommon(this.name,t);getComponentTheme=t=>C.getComponent(this.name,t);getDirectiveTheme=t=>C.getDirective(this.name,t);getPresetTheme=(t,n,o)=>C.getCustomPreset(this.name,t,n,o);getLayerOrderThemeCSS=()=>C.getLayerOrderCSS(this.name);getStyleSheet=(t="",n={})=>{if(this.css){let o=se(this.css,{dt:Re}),r=Xe(mt`${o}${t}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,n={})=>C.getCommonStyleSheet(this.name,t,n);getThemeStyleSheet=(t,n={})=>{let o=[C.getStyleSheet(this.name,t,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=mt`${se(this.theme,{dt:Re})}`,a=Xe(C.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Oa=(()=>{class e{theme=q(void 0);csp=q({nonce:void 0});isThemeChanged=!1;document=g(te);baseStyle=g(j);constructor(){wt(()=>{de.on("theme:change",t=>{Ee(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),wt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){C.clearLoadedStyleNames(),de.clear()}onThemeChange(t){C.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!C.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,_({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,_({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,_({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(_({name:"global-style"},s),r),C.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:n,csp:o}=t||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),gi=(()=>{class e extends Oa{ripple=q(!1);platformId=g(et);inputStyle=q(null);inputVariant=q(null);overlayAppendTo=q("self");overlayOptions={};csp=q({nonce:void 0});filterMatchModeOptions={text:[W.STARTS_WITH,W.CONTAINS,W.NOT_CONTAINS,W.ENDS_WITH,W.EQUALS,W.NOT_EQUALS],numeric:[W.EQUALS,W.NOT_EQUALS,W.LESS_THAN,W.LESS_THAN_OR_EQUAL_TO,W.GREATER_THAN,W.GREATER_THAN_OR_EQUAL_TO],date:[W.DATE_IS,W.DATE_IS_NOT,W.DATE_BEFORE,W.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ee;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=_(_({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d}=t||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),xa=new J("PRIME_NG_CONFIG");function ep(...e){let i=e?.map(n=>({provide:xa,useValue:n,multi:!1})),t=Pi(()=>{let n=g(gi);e?.forEach(o=>n.setConfig(o))});return Oi([...i,t])}var pr=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(E(Ie),E(me))};static \u0275dir=S({type:e})}return e})(),hr=(()=>{class e extends pr{static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,features:[w]})}return e})(),Je=new J("");var La={provide:Je,useExisting:Ae(()=>fr),multi:!0};function Na(){let e=Ze()?Ze().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Ra=new J(""),fr=(()=>{class e extends pr{_compositionMode;_composing=!1;constructor(t,n,o){super(t,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Na())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(E(Ie),E(me),E(Ra,8))};static \u0275dir=S({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&Te("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[O([La]),w]})}return e})();function ka(e){return e==null||Pa(e)===0}function Pa(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var gr=new J(""),Va=new J("");function Ba(e){return ka(e.value)?{required:!0}:null}function or(e){return null}function mr(e){return e!=null}function br(e){return Ln(e)?Ii(e):e}function yr(e){let i={};return e.forEach(t=>{i=t!=null?_(_({},i),t):i}),Object.keys(i).length===0?null:i}function vr(e,i){return i.map(t=>t(e))}function $a(e){return!e.validate}function Dr(e){return e.map(i=>$a(i)?i:t=>i.validate(t))}function ja(e){if(!e)return null;let i=e.filter(mr);return i.length==0?null:function(t){return yr(vr(t,i))}}function Cr(e){return e!=null?ja(Dr(e)):null}function Ha(e){if(!e)return null;let i=e.filter(mr);return i.length==0?null:function(t){let n=vr(t,i).map(br);return Mi(n).pipe(Ti(yr))}}function _r(e){return e!=null?Ha(Dr(e)):null}function rr(e,i){return e===null?[i]:Array.isArray(e)?[...e,i]:[e,i]}function Ua(e){return e._rawValidators}function Ga(e){return e._rawAsyncValidators}function mi(e){return e?Array.isArray(e)?e:[e]:[]}function Sn(e,i){return Array.isArray(e)?e.includes(i):e===i}function sr(e,i){let t=mi(i);return mi(e).forEach(o=>{Sn(t,o)||t.push(o)}),t}function ar(e,i){return mi(i).filter(t=>!Sn(e,t))}var wn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Cr(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=_r(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},bi=class extends wn{name;get formDirective(){return null}get path(){return null}},Vt=class extends wn{_parent=null;name=null;valueAccessor=null},yi=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Wa={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Cp=ae(_({},Wa),{"[class.ng-submitted]":"isSubmitted"}),Er=(()=>{class e extends yi{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(E(Vt,2))};static \u0275dir=S({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&ot("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[w]})}return e})();var Nt="VALID",En="INVALID",yt="PENDING",Rt="DISABLED",Dt=class{},An=class extends Dt{value;source;constructor(i,t){super(),this.value=i,this.source=t}},kt=class extends Dt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},Pt=class extends Dt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},vt=class extends Dt{status;source;constructor(i,t){super(),this.status=i,this.source=t}};function za(e){return(Fn(e)?e.validators:e)||null}function Ka(e){return Array.isArray(e)?Cr(e):e||null}function qa(e,i){return(Fn(i)?i.asyncValidators:e)||null}function Ya(e){return Array.isArray(e)?_r(e):e||null}function Fn(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var vi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Ee(this.statusReactive)}set status(i){Ee(()=>this.statusReactive.set(i))}_status=be(()=>this.statusReactive());statusReactive=q(void 0);get valid(){return this.status===Nt}get invalid(){return this.status===En}get pending(){return this.status==yt}get disabled(){return this.status===Rt}get enabled(){return this.status!==Rt}errors;get pristine(){return Ee(this.pristineReactive)}set pristine(i){Ee(()=>this.pristineReactive.set(i))}_pristine=be(()=>this.pristineReactive());pristineReactive=q(!0);get dirty(){return!this.pristine}get touched(){return Ee(this.touchedReactive)}set touched(i){Ee(()=>this.touchedReactive.set(i))}_touched=be(()=>this.touchedReactive());touchedReactive=q(!1);get untouched(){return!this.touched}_events=new ee;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(sr(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(sr(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ar(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ar(i,this._rawAsyncValidators))}hasValidator(i){return Sn(this._rawValidators,i)}hasAsyncValidator(i){return Sn(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(ae(_({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new Pt(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),t&&i.emitEvent!==!1&&this._events.next(new Pt(!1,n))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(ae(_({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new kt(!1,n))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),t&&i.emitEvent!==!1&&this._events.next(new kt(!0,n))}markAsPending(i={}){this.status=yt;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new vt(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(ae(_({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Rt,this.errors=null,this._forEachChild(o=>{o.disable(ae(_({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new An(this.value,n)),this._events.next(new vt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ae(_({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Nt,this._forEachChild(n=>{n.enable(ae(_({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ae(_({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,t){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Nt||this.status===yt)&&this._runAsyncValidator(n,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new An(this.value,t)),this._events.next(new vt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(ae(_({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Rt:Nt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=yt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let n=br(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,o)=>n&&n._find(o),this)}getError(i,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new vt(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,n)}_initObservables(){this.valueChanges=new ue,this.statusChanges=new ue}_calculateStatus(){return this._allControlsDisabled()?Rt:this.errors?En:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(yt)?yt:this._anyControlsHaveStatus(En)?En:Nt}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,t),o&&this._events.next(new kt(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new Pt(this.touched,t)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Fn(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let t=this._parent&&this._parent.dirty;return!i&&!!t&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Ka(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Ya(this._rawAsyncValidators)}};var Sr=new J("",{providedIn:"root",factory:()=>Di}),Di="always";function Za(e,i){return[...i.path,e]}function Qa(e,i,t=Di){Ja(e,i),i.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(e.disabled),el(e,i),nl(e,i),tl(e,i),Xa(e,i)}function lr(e,i){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function Xa(e,i){if(i.valueAccessor.setDisabledState){let t=n=>{i.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),i._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Ja(e,i){let t=Ua(e);i.validator!==null?e.setValidators(rr(t,i.validator)):typeof t=="function"&&e.setValidators([t]);let n=Ga(e);i.asyncValidator!==null?e.setAsyncValidators(rr(n,i.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let o=()=>e.updateValueAndValidity();lr(i._rawValidators,o),lr(i._rawAsyncValidators,o)}function el(e,i){i.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&wr(e,i)})}function tl(e,i){i.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&wr(e,i),e.updateOn!=="submit"&&e.markAsTouched()})}function wr(e,i){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function nl(e,i){let t=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};e.registerOnChange(t),i._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function il(e,i){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function ol(e){return Object.getPrototypeOf(e.constructor)===hr}function rl(e,i){if(!i)return null;Array.isArray(i);let t,n,o;return i.forEach(r=>{r.constructor===fr?t=r:ol(r)?n=r:o=r}),o||n||t||null}function ur(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function cr(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var sl=class extends vi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,n){super(za(t),qa(n,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Fn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(cr(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){ur(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){ur(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){cr(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var al={provide:Vt,useExisting:Ae(()=>Ci)},dr=Promise.resolve(),Ci=(()=>{class e extends Vt{_changeDetectorRef;callSetDisabledState;control=new sl;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new ue;constructor(t,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=rl(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),il(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Qa(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){dr.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,o=n!==0&&v(n);dr.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Za(t,this._parent):[t]}static \u0275fac=function(n){return new(n||e)(E(bi,9),E(gr,10),E(Va,10),E(Je,10),E(lt,8),E(Sr,8))};static \u0275dir=S({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[O([al]),w,Pe]})}return e})();var ll={provide:Je,useExisting:Ae(()=>ul),multi:!0},ul=(()=>{class e extends hr{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&Te("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[O([ll]),w]})}return e})();var cl=(()=>{class e{_validator=or;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):or,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(n){return new(n||e)};static \u0275dir=S({type:e,features:[Pe]})}return e})();var dl={provide:gr,useExisting:Ae(()=>pl),multi:!0};var pl=(()=>{class e extends cl{required;inputName="required";normalizeInput=v;createValidator=t=>Ba;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&Y("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[O([dl]),w]})}return e})();var hl=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({})}return e})();var Ar=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Sr,useValue:t.callSetDisabledState??Di}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[hl]})}return e})();var Fr=(()=>{class e extends j{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),z=(()=>{class e{document=g(te);platformId=g(et);el=g(me);injector=g(en);cd=g(lt);renderer=g(Ie);config=g(gi);baseComponentStyle=g(Fr);baseStyle=g(j);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=xt("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,n="",o={}){return vn(t,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Io(this.platformId)){let{dt:n}=t;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>de.off("theme:change",t))}_loadStyles(){let t=()=>{bt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),bt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!bt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),bt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!C.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,_({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,_({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,_({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(_({name:"global-style"},this.styleOptions),r),C.setLoadedStyleName("common")}if(!C.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,_({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(_({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),C.setLoadedStyleName(this.componentStyle?.name)}if(!C.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,_({name:"layer-order",first:!0},this.styleOptions)),C.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:n}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,_({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){bt.clearLoadedStyleNames(),de.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,n={}){return ct(this._getOptionValue(this.$style?.classes,t,_({instance:this},n)))}sx(t="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,t,_({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=ct;static \u0275fac=function(n){return new(n||e)};static \u0275dir=S({type:e,inputs:{dt:"dt"},features:[O([Fr,j]),Pe]})}return e})();var Ir=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var gl=`
    ${Ir}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ml={root:"p-ink"},Tr=(()=>{class e extends j{name="ripple";theme=gl;classes=ml;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var In=(()=>{class e extends z{zone=g(ki);_componentStyle=g(Tr);animationListener;mouseDownListener;timeout;constructor(){super(),wt(()=>{mn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if($e(n,"p-ink-active"),!si(n)&&!li(n)){let a=Math.max(ri(this.el.nativeElement),yn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=ai(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-li(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-si(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Le(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&$e(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&$e(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),$e(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Vo(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=S({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[O([Tr]),w]})}return e})(),Wp=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({})}return e})();var Mr=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var Or=(()=>{class e extends z{modelValue=q(void 0);$filled=be(()=>F(this.modelValue()));writeModelValue(t){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,features:[w]})}return e})();var Tn=(()=>{class e extends Or{required=B(void 0,{transform:v});invalid=B(void 0,{transform:v});disabled=B(void 0,{transform:v});name=B();_disabled=q(!1);$disabled=be(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(t){this._disabled.set(t)}writeControlValue(t,n){}writeValue(t){this.writeControlValue(t,this.writeModelValue.bind(this))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.writeDisabledState(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[w]})}return e})();var yl=["icon"],vl=["content"],Lr=e=>({$implicit:e});function Dl(e,i){e&1&&qe(0)}function Cl(e,i){if(e&1&&Ke(0,"span"),e&2){let t=V(3);H(t.cn(t.cx("icon"),t.checked?t.onIcon:t.offIcon,t.iconPos==="left"?t.cx("iconLeft"):t.cx("iconRight"))),Y("data-pc-section","icon")}}function _l(e,i){if(e&1&&nt(0,Cl,1,3,"span",1),e&2){let t=V(2);it(t.onIcon||t.offIcon?0:-1)}}function El(e,i){e&1&&qe(0)}function Sl(e,i){if(e&1&&le(0,El,1,0,"ng-container",0),e&2){let t=V(2);L("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",at(2,Lr,t.checked))}}function wl(e,i){if(e&1&&(nt(0,_l,1,1)(1,Sl,1,4,"ng-container"),Ve(2,"span"),rt(3),Be()),e&2){let t=V();it(t.iconTemplate?1:0),N(2),H(t.cx("label")),Y("data-pc-section","label"),N(),st(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Al=`
    ${Mr}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,Fl={root:({instance:e})=>["p-togglebutton p-component",{"p-togglebutton-checked":e.checked,"p-invalid":e.invalid(),"p-disabled":e.$disabled(),"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large","p-togglebutton-fluid":e.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},xr=(()=>{class e extends j{name="togglebutton";theme=Al;classes=Fl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Il={provide:Je,useExisting:Ae(()=>Mn),multi:!0},Mn=(()=>{class e extends Tn{onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=B(void 0,{transform:v});onChange=new ue;iconTemplate;contentTemplate;templates;checked=!1;_componentStyle=g(xr);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}writeControlValue(t,n){this.checked=t,n(t),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(pe(r,yl,4),pe(r,vl,4),pe(r,ht,4)),n&2){let s;he(s=fe())&&(o.iconTemplate=s.first),he(s=fe())&&(o.contentTemplate=s.first),he(s=fe())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&1&&Te("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(Y("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("role","button")("tabindex",o.$disabled()?-1:0),H(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ye],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",v],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[O([Il,xr]),Ri([In]),w],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(n,o){n&1&&(Ve(0,"span"),le(1,Dl,1,0,"ng-container",0),nt(2,wl,4,5),Be()),n&2&&(H(o.cx("content")),N(),L("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",at(5,Lr,o.checked)),N(),it(o.contentTemplate?-1:2))},dependencies:[re,Qe,Q],encapsulation:2,changeDetection:0})}return e})(),yh=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[Mn,Q,Q]})}return e})();var Nr=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var Tl=["item"],Ml=(e,i)=>({$implicit:e,index:i});function Ol(e,i){return this.getOptionLabel(i)}function xl(e,i){e&1&&qe(0)}function Ll(e,i){if(e&1&&le(0,xl,1,0,"ng-container",3),e&2){let t=V(2),n=t.$implicit,o=t.$index,r=V();L("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Gi(2,Ml,n,o))}}function Nl(e,i){e&1&&le(0,Ll,1,5,"ng-template",null,0,Wi)}function Rl(e,i){if(e&1){let t=$i();Ve(0,"p-togglebutton",2),Te("onChange",function(o){let r=xi(t),s=r.$implicit,a=r.$index,l=V();return Li(l.onOptionSelect(o,s,a))}),nt(1,Nl,2,0),Be()}if(e&2){let t=i.$implicit,n=V();L("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(t))("onLabel",n.getOptionLabel(t))("offLabel",n.getOptionLabel(t))("disabled",n.$disabled()||n.isOptionDisabled(t))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid()),N(),it(n.itemTemplate||n._itemTemplate?1:-1)}}var kl=`
    ${Nr}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,Pl={root:({instance:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid(),"p-selectbutton-fluid":e.fluid()}]},Rr=(()=>{class e extends j{name="selectbutton";theme=kl;classes=Pl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Vl={provide:Je,useExisting:Ae(()=>kr),multi:!0},kr=(()=>{class e extends Tn{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=B();fluid=B(void 0,{transform:v});onOptionClick=new ue;onChange=new ue;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=g(Rr);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(t){return this.optionLabel?je(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?je(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?je(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}onOptionSelect(t,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!He(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:n,index:o})}changeTabIndexes(t,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(n=>!He(n,this.getOptionValue(t),this.dataKey))}isSelected(t){let n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(He(r,o,this.dataKey)){n=!0;break}}}else n=He(this.getOptionValue(t),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}writeControlValue(t,n){this.value=t,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(pe(r,Tl,4),pe(r,ht,4)),n&2){let s;he(s=fe())&&(o.itemTemplate=s.first),he(s=fe())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&2&&(Y("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),H(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",v],tabindex:[2,"tabindex","tabindex",Ye],multiple:[2,"multiple","multiple",v],allowEmpty:[2,"allowEmpty","allowEmpty",v],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",v],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[O([Vl,Rr]),w],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&Vi(0,Rl,2,10,"p-togglebutton",1,Ol,!0),n&2&&Bi(o.options)},dependencies:[Mn,Ar,Er,Ci,re,Qe,Q],encapsulation:2,changeDetection:0})}return e})(),Bh=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[kr,Q,Q]})}return e})();var Pr=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Bl=`
    ${Pr}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,$l={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":F(e.value())&&String(e.value()).length===1,"p-badge-dot":we(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},Vr=(()=>{class e extends j{name="badge";theme=Bl;classes=$l;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var _i=(()=>{class e extends z{styleClass=B();badgeSize=B();size=B();severity=B();value=B();badgeDisabled=B(!1,{transform:v});_componentStyle=g(Vr);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(H(o.cn(o.cx("root"),o.styleClass())),Ui("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[O([Vr]),w],decls:1,vars:1,template:function(n,o){n&1&&rt(0),n&2&&st(o.value())},dependencies:[re,Q],encapsulation:2,changeDetection:0})}return e})(),Br=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[_i,Q,Q]})}return e})();var $r=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Hl=["*"],Ul={root:"p-fluid"},jr=(()=>{class e extends j{name="fluid";classes=Ul;theme=$r;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var On=(()=>{class e extends z{_componentStyle=g(jr);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&H(o.cx("root"))},features:[O([jr]),w],ngContentSelectors:Hl,decls:1,vars:0,template:function(n,o){n&1&&(Me(),Oe(0))},dependencies:[re],encapsulation:2,changeDetection:0})}return e})(),ff=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[On]})}return e})();var Ei=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=K=>{if(K)return getComputedStyle(K).getPropertyValue("position")==="relative"?K:r(K.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),h=r(t)?.getBoundingClientRect()||{top:-1*u,left:-1*c},f,b,D="top";l.top+a+s.height>d.height?(f=l.top-h.top-s.height,D="bottom",l.top+f<0&&(f=-1*l.top)):(f=a+l.top-h.top,D="top");let I=l.left+s.width-d.width,T=l.left-h.left;if(s.width>d.width?b=(l.left-h.left)*-1:I>0?b=T-I:b=l.left-h.left,t.style.top=f+"px",t.style.left=b+"px",t.style.transformOrigin=D,o){let K=Ot(/-anchor-gutter$/)?.value;t.style.marginTop=D==="bottom"?`calc(${K??"2px"} * -1)`:K??""}}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),f,b;c.top+l+s>h.height?(f=c.top+d-s,t.style.transformOrigin="bottom",f<0&&(f=d)):(f=l+c.top+d,t.style.transformOrigin="top"),c.left+a>h.width?b=Math.max(0,c.left+p+u-a):b=c.left+p,t.style.top=f+"px",t.style.left=b+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(n);c<0?t.scrollTop=d+c:c+h>p&&(t.scrollTop=d+c-p+h)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();function vf(){Oo({variableName:fi("scrollbar.width").name})}function Df(){xo({variableName:fi("scrollbar.width").name})}var Hr=class{element;listener;scrollableParents;constructor(i,t=()=>{}){this.element=i,this.listener=t}bindScrollListener(){this.scrollableParents=Ei.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ur=(()=>{class e extends z{autofocus=!1;focused=!1;platformId=g(et);document=g(te);host=g(me);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){mn(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=Ei.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[w]})}return e})(),Tf=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({})}return e})();var Gl=["*"],Wl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Gr=(()=>{class e extends j{name="baseicon";css=Wl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Wr=(()=>{class e extends z{spin=!1;_componentStyle=g(Gr);getClassNames(){return ct("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&H(o.getClassNames())},inputs:{spin:[2,"spin","spin",v]},features:[O([Gr]),w],ngContentSelectors:Gl,decls:1,vars:0,template:function(n,o){n&1&&(Me(),Oe(0))},encapsulation:2,changeDetection:0})}return e})();var zl=["data-p-icon","spinner"],zr=(()=>{class e extends Wr{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+xt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["","data-p-icon","spinner"]],features:[w],attrs:zl,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(Jt(),Nn(0,"g"),kn(1,"path",0),Rn(),Nn(2,"defs")(3,"clipPath",1),kn(4,"rect",2),Rn()()),n&2&&(Y("clip-path",o.pathId),N(3),ji("id",o.pathId))},encapsulation:2})}return e})();var Kr=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Kl=["content"],ql=["loadingicon"],Yl=["icon"],Zl=["*"],Zr=e=>({class:e});function Ql(e,i){e&1&&qe(0)}function Xl(e,i){if(e&1&&Ke(0,"span"),e&2){let t=V(3);H(t.cx("loadingIcon")),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Jl(e,i){if(e&1&&(Jt(),Ke(0,"svg",7)),e&2){let t=V(3);H(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),L("spin",!0),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function eu(e,i){if(e&1&&(nn(0),le(1,Xl,1,4,"span",3)(2,Jl,1,5,"svg",6),on()),e&2){let t=V(2);N(),L("ngIf",t.loadingIcon),N(),L("ngIf",!t.loadingIcon)}}function tu(e,i){}function nu(e,i){if(e&1&&le(0,tu,0,0,"ng-template",8),e&2){let t=V(2);L("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function iu(e,i){if(e&1&&(nn(0),le(1,eu,3,2,"ng-container",2)(2,nu,1,1,null,5),on()),e&2){let t=V();N(),L("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),N(),L("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",at(3,Zr,t.cx("loadingIcon")))}}function ou(e,i){if(e&1&&Ke(0,"span"),e&2){let t=V(2);H(t.cx("icon")),Y("data-pc-section","icon")}}function ru(e,i){}function su(e,i){if(e&1&&le(0,ru,0,0,"ng-template",8),e&2){let t=V(2);L("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function au(e,i){if(e&1&&(nn(0),le(1,ou,1,3,"span",3)(2,su,1,1,null,5),on()),e&2){let t=V();N(),L("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),N(),L("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",at(3,Zr,t.cx("icon")))}}function lu(e,i){if(e&1&&(Ve(0,"span"),rt(1),Be()),e&2){let t=V();H(t.cx("label")),Y("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),N(),st(t.label)}}function uu(e,i){if(e&1&&Ke(0,"p-badge",9),e&2){let t=V();L("value",t.badge)("severity",t.badgeSeverity)}}var cu={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},We=(()=>{class e extends j{name="button";theme=Kr;classes=cu;static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Ge={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},qr=(()=>{class e extends z{_componentStyle=g(We);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&ot("p-button-label",!0)},features:[O([We]),w]})}return e})(),Yr=(()=>{class e extends z{_componentStyle=g(We);static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&ot("p-button-icon",!0)},features:[O([We]),w]})}return e})(),hg=(()=>{class e extends z{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Bn(Yr);labelSignal=Bn(qr);isIconOnly=be(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=B(void 0,{transform:v});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(Ge);pcFluid=g(On,{optional:!0,host:!0,skipSelf:!0});isTextButton=be(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(We);ngAfterViewInit(){super.ngAfterViewInit(),Le(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let t=[Ge.button,Ge.component];return this.icon&&!this.label&&we(this.htmlElement.textContent)&&t.push(Ge.iconOnly),this.loading&&(t.push(Ge.disabled,Ge.loading),!this.icon&&this.label&&t.push(Ge.labelOnly),this.icon&&!this.label&&!we(this.htmlElement.textContent)&&t.push(Ge.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>t.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!pt(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!pt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Le(n,o);let r=this.getIconClass();r&&Le(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=pt(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=pt(this.htmlElement,".p-button-icon"),n=pt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275dir=S({type:e,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(Pn(r,o.iconSignal,Yr,5),Pn(r,o.labelSignal,qr,5)),n&2&&Hi(2)},hostVars:4,hostBindings:function(n,o){n&2&&ot("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],outlined:[2,"outlined","outlined",v],size:"size",plain:[2,"plain","plain",v],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[O([We]),w]})}return e})(),du=(()=>{class e extends z{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=B(void 0,{transform:v});onClick=new ue;onFocus=new ue;onBlur=new ue;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=g(On,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=g(We);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=y(e)))(o||e)}})();static \u0275cmp=G({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(pe(r,Kl,5),pe(r,ql,5),pe(r,Yl,5),pe(r,ht,4)),n&2){let s;he(s=fe())&&(o.contentTemplate=s.first),he(s=fe())&&(o.loadingIconTemplate=s.first),he(s=fe())&&(o.iconTemplate=s.first),he(s=fe())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],severity:"severity",outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",Ye],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",v],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[O([We]),w],ngContentSelectors:Zl,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(Me(),Ve(0,"button",0),Te("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),Oe(1),le(2,Ql,1,0,"ng-container",1)(3,iu,3,5,"ng-container",2)(4,au,3,5,"ng-container",2)(5,lu,2,5,"span",3)(6,uu,1,2,"p-badge",4),Be()),n&2&&(H(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),L("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),Y("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),N(2),L("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),N(),L("ngIf",o.loading),N(),L("ngIf",!o.loading),N(),L("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),N(),L("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[re,Yn,Qe,Zn,In,Ur,zr,Br,_i,Q],encapsulation:2,changeDetection:0})}return e})(),fg=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=k({type:e});static \u0275inj=R({imports:[re,du,Q,Q]})}return e})();export{Ze as a,gs as b,$n as c,ms as d,ut as e,Ji as f,eo as g,Ds as h,Us as i,So as j,Yn as k,wo as l,Gs as m,Zn as n,Qe as o,zs as p,Ks as q,Zs as r,re as s,Qs as t,Xn as u,ea as v,mn as w,Sc as x,ct as y,Mo as z,Le as A,$e as B,oi as C,oa as D,ra as E,sa as F,Oc as G,No as H,ri as I,xc as J,la as K,Lc as L,Nc as M,To as N,Rc as O,kc as P,Pc as Q,ua as R,pt as S,Vc as T,Bc as U,Po as V,$c as W,si as X,ca as Y,da as Z,jc as _,Hc as $,ai as aa,yn as ba,Uc as ca,li as da,Gc as ea,Wc as fa,zc as ga,Kc as ha,qc as ia,Yc as ja,Zc as ka,Qc as la,we as ma,ma as na,Uo as oa,F as pa,je as qa,He as ra,ed as sa,td as ta,nd as ua,id as va,se as wa,ba as xa,od as ya,rd as za,ce as Aa,sd as Ba,xt as Ca,ya as Da,pd as Ea,W as Fa,hd as Ga,fd as Ha,gd as Ia,md as Ja,bd as Ka,yd as La,ht as Ma,Q as Na,vd as Oa,Dd as Pa,fi as Qa,Fa as Ra,Md as Sa,Od as Ta,j as Ua,gi as Va,ep as Wa,Je as Xa,fr as Ya,Vt as Za,Er as _a,Ci as $a,ul as ab,pl as bb,Ar as cb,z as db,Or as eb,Tn as fb,In as gb,Wp as hb,Mn as ib,yh as jb,kr as kb,Bh as lb,Ei as mb,vf as nb,Df as ob,Hr as pb,Ur as qb,Tf as rb,_i as sb,Br as tb,$r as ub,On as vb,ff as wb,Wr as xb,zr as yb,Yr as zb,hg as Ab,du as Bb,fg as Cb};
