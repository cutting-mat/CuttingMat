System.register(["./index-legacy.b2bea30a.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.i}],execute:function(){var r=e("l",(function(e){return t.get("/orgs",{params:e})})),n=e("a",(function(e){return t.post("/org",e)})),o=e("e",(function(e){return t.put("/org",e)})),u=e("r",(function(e){return t.delete("/org",{params:e})})),i=Object.freeze(Object.defineProperty({__proto__:null,list:r,get:function(e){return t.get("/org",{params:e})},add:n,edit:o,remove:u},Symbol.toStringTag,{value:"Module"}));e("o",i)}}}));