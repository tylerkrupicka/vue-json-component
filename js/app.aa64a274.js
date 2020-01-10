(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="http://tylerkrupicka.com/vue-json-component/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push(["7309","chunk-vendors"]),n()})({"19e6":function(e,t,n){},7309:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{class:{dark:e.dark}},[n("json-view",{attrs:{data:e.data,rootKey:"view",maxDepth:1,styles:{key:"#0977e6"},colorScheme:e.colorScheme},on:{selected:e.itemSelected}}),n("json-view",{attrs:{rootKey:"string",data:"Not an object",colorScheme:e.colorScheme}}),n("json-view",{staticClass:"customize",attrs:{rootKey:"customization",data:"Using CSS Variables",colorScheme:e.colorScheme}})],1),n("button",{attrs:{id:"darkButton"},on:{click:e.toggleDark}},[e._v("Toggle Dark Mode")]),n("h5",[e._v("Events")]),e._l(e.events,(function(t,r){return n("div",{key:r},[e._v(e._s(t))])}))],2)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("json-view-item",{class:[{"root-item":!0,dark:"dark"===e.colorScheme}],attrs:{data:e.parsed,maxDepth:e.maxDepth,canSelect:e.hasSelectedListener},on:{selected:e.itemSelected}})},c=[],s=n("9ab4"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"json-view-item"},["object"===e.data.type||"array"===e.data.type?n("div",[n("div",{staticClass:"data-key",on:{click:function(t){return t.stopPropagation(),e.toggleOpen(t)}}},[n("div",{class:e.classes}),e._v(" "+e._s(e.data.key)+": "),n("span",{staticClass:"properties"},[e._v(e._s(e.lengthString))])]),e._l(e.data.children,(function(t){return n("json-view-item",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],key:e.getKey(t),attrs:{data:t,maxDepth:e.maxDepth,canSelect:e.canSelect},on:{selected:e.bubbleSelected}})}))],2):e._e(),"value"===e.data.type?n("div",{class:e.valueClasses,on:{click:function(t){return e.clickEvent(e.data)}}},[n("span",{staticClass:"value-key"},[e._v(e._s(e.data.key)+":")]),n("span",{style:e.getValueStyle(e.data.value)},[e._v(" "+e._s(e.dataValue)+" ")])]):e._e()])},u=[];function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var p=r["a"].extend({name:"json-view-item",data:function(){return{open:this.data.depth<this.maxDepth}},props:{data:{required:!0,type:Object},maxDepth:{type:Number,required:!1,default:1},canSelect:{type:Boolean,required:!1,default:!1}},methods:{toggleOpen:function(){this.open=!this.open},clickEvent:function(e){this.$emit("selected",{key:e.key,value:e.value,path:e.path})},bubbleSelected:function(e){this.$emit("selected",e)},getKey:function(e){return isNaN(e.key)?'"'+e.key+'":':e.key+":"},getValueStyle:function(e){var t=d(e);switch(t){case"string":return{color:"var(--vjc-string-color)"};case"number":return{color:"var(--vjc-number-color)"};case"boolean":return{color:"var(--vjc-boolean-color)"};case"object":return{color:"var(--vjc-null-color)"};case"undefined":return{color:"var(--vjc-null-color)"};default:return{color:"var(--vjc-valueKey-color)"}}}},computed:{classes:function(){return{"chevron-arrow":!0,opened:this.open}},valueClasses:function(){return{"value-key":!0,"can-select":this.canSelect}},lengthString:function(){return"array"===this.data.type?1===this.data.length?this.data.length+" element":this.data.length+" elements":1===this.data.length?this.data.length+" property":this.data.length+" properties"},dataValue:function(){return"undefined"===typeof this.data.value?"undefined":JSON.stringify(this.data.value)}}}),h=p,f=(n("7534"),n("2877")),y=Object(f["a"])(h,l,u,!1,null,"547d5036",null),v=y.exports;function m(e){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}window.matchMedia("(prefers-color-scheme: dark)").matches;var b=r["a"].extend({name:"json-view",props:{data:{required:!0},rootKey:{type:String,required:!1,default:"root"},maxDepth:{type:Number,required:!1,default:1},colorScheme:{type:String,required:!1,default:"light"}},components:{"json-view-item":v},methods:{build:function(e,t,n,r,o){if(this.isObject(t)){for(var a=[],i=0,c=Object.entries(t);i<c.length;i++){var s=c[i],l=s[0],u=s[1];a.push(this.build(l,u,n+1,o?""+r+e+".":""+r,!0))}return{key:e,type:"object",depth:n,path:r,length:a.length,children:a}}if(this.isArray(t)){a=[];for(var d=0;d<t.length;d++)a.push(this.build(d.toString(),t[d],n+1,o?""+r+e+"["+d+"].":""+r,!1));return{key:e,type:"array",depth:n,path:r,length:a.length,children:a}}return{key:e,type:"value",path:o?r+e:r.slice(0,-1),depth:n,value:t}},isObject:function(e){return"object"===m(e)&&null!==e&&!this.isArray(e)},isArray:function(e){return Array.isArray(e)},itemSelected:function(e){this.$emit("selected",e)}},computed:{parsed:function(){return"object"===m(this.data)?this.build(this.rootKey,s["a"]({},this.data),0,"",!0):{key:this.rootKey,type:"value",path:"",depth:0,value:this.data}},hasSelectedListener:function(){return Boolean(this.$listeners&&this.$listeners.selected)}}}),g=b,S=(n("c82f"),Object(f["a"])(g,i,c,!1,null,"ad4e6f14",null)),k=S.exports,j=r["a"].extend({data:function(){return{events:[],dark:!1}},components:{"json-view":k},methods:{itemSelected:function(e){this.events.push("Selected: "+e.path+" with value "+e.value)},toggleDark:function(){this.dark=!this.dark}},computed:{data:function(){var e={first:"level",works:!0,number:100,missing:null,undefined:void 0,list:["fun",{test:{passed:!0}}],object:{working:"properly"}};return e},colorScheme:function(){return this.dark?"dark":"light"}}}),w=j,_=(n("a834"),n("c014"),Object(f["a"])(w,o,a,!1,null,"3280563c",null)),O=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},7534:function(e,t,n){"use strict";var r=n("cc4f"),o=n.n(r);o.a},9114:function(e,t,n){},9519:function(e,t,n){},a834:function(e,t,n){"use strict";var r=n("19e6"),o=n.n(r);o.a},c014:function(e,t,n){"use strict";var r=n("9114"),o=n.n(r);o.a},c82f:function(e,t,n){"use strict";var r=n("9519"),o=n.n(r);o.a},cc4f:function(e,t,n){}});
//# sourceMappingURL=app.aa64a274.js.map