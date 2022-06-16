(function(t){function e(e){for(var o,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/CSC3007-assignment3/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=Object(o["e"])("section",{class:"hero"},[Object(o["e"])("div",{class:"hero-body"},[Object(o["e"])("p",{class:"title"},"Peikai Tan"),Object(o["e"])("p",{class:"subtitle"},"Singapore Population Plot")])],-1),r={class:"container"},i={class:"columns"},c=Object(o["e"])("div",{class:"column"},null,-1),s=Object(o["e"])("div",{class:"column is-three-fifths"},[Object(o["e"])("svg")],-1),l={id:"tooltip",class:"column"},p={class:"card-content"},u=Object(o["e"])("br",null,null,-1);function f(t,e,n,f,d,b){return Object(o["f"])(),Object(o["c"])(o["a"],null,[a,Object(o["e"])("div",r,[Object(o["e"])("div",i,[c,s,Object(o["e"])("div",l,[Object(o["e"])("div",p,[Object(o["d"])(Object(o["g"])(d.properties.Name.toLowerCase())+" ",1),u,Object(o["d"])(" Population: "+Object(o["g"])(d.properties.Population?d.properties.Population:0),1)])])])])],64)}n("7db0"),n("4160"),n("d81d"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("466d"),n("159b"),n("ddb0");var d=n("898b"),b={name:"App",data:function(){return{mapData:null,populationData:null,maxPopulation:0,properties:{Name:"",Population:""}}},methods:{match:function(t){t=t.toLowerCase();var e=this.populationData.find((function(e){return e["Subzone"].toLowerCase()===t}));return e&&(e=parseInt(e["Population"],10),e&&(this.maxPopulation=Math.max(e,this.maxPopulation))),e},generateColor:function(t){if(isNaN(t))return"white";var e=Math.round((this.maxPopulation-t)/this.maxPopulation*255).toString(16);return 1===e.length&&(e="0"+e),"#"+e+e+e}},components:{},mounted:function(){var t=this,e=1e3,n=640,o=d["i"]("svg").attr("viewBox","0 0 "+e+" "+n);Promise.all([d["f"]("https://raw.githubusercontent.com/Chi-Loong/CSC3007/main/assignments/sgmap.json"),d["b"]("https://raw.githubusercontent.com/Chi-Loong/CSC3007/main/assignments/population2021.csv")]).then((function(a){t.mapData=a[0],t.populationData=a[1],t.mapData.features.forEach((function(e){e.properties["Population"]=t.match(e.properties["Subzone Name"])}));var r=d["c"]().center([103.851959,1.29027]).fitExtent([[20,20],[980,580]],a[0]),i=d["d"]().projection(r),c=d["i"]("#tooltip").style("opacity",0);o.append("g").attr("id","districts").selectAll("path").data(t.mapData.features).enter().append("path").attr("d",i).attr("stroke","black").attr("fill",(function(e){return t.generateColor(e.properties.Population)})).on("mouseover",(function(e,n){d["i"](e.target).transition().duration("50").attr("opacity",".85"),c.transition().duration(50).style("opacity",1),t.properties=n.properties})).on("mouseout",(function(e){d["i"](e.target).transition().duration("50").attr("opacity","1"),c.transition().duration("50").style("opacity",0),t.properties={Name:"",Population:""}}));var s=o.append("defs"),l={top:0,right:40,bottom:30,left:40},p=15,u=d["h"](d["e"]("white","black")).domain([0,t.maxPopulation]),f=d["g"]().domain(u.domain()).range([l.left,e-l.right]),b=function(t){return t.attr("class","x-axis").attr("transform","translate(0,".concat(n-l.bottom,")")).call(d["a"](f).ticks(e/80).tickSize(-p))},m=s.append("linearGradient").attr("id","linear-gradient");m.selectAll("stop").data(u.ticks().map((function(t,e,n){return{offset:"".concat(100*e/n.length,"%"),color:u(t)}}))).enter().append("stop").attr("offset",(function(t){return t.offset})).attr("stop-color",(function(t){return t.color})),o.append("g").attr("transform","translate(0,".concat(n-l.bottom-p,")")).append("rect").attr("transform","translate(".concat(l.left,", 0)")).attr("width",e-l.right-l.left).attr("height",p).style("fill","url(#linear-gradient)"),o.append("g").call(b)}))}};n("64be");b.render=f;var m=b;Object(o["b"])(m).mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},c894:function(t,e,n){}});
//# sourceMappingURL=app.cb6c24c9.js.map