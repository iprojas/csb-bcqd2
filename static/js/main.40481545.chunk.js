(this["webpackJsonptest-tarot"]=this["webpackJsonptest-tarot"]||[]).push([[0],{11:function(t,e,a){"use strict";a.r(e);var n=a(6),o=a(4),i=a(1),r=a(9),c=a(0),d=a(3),u=a(10),p=(a(16),a(7)),s=["https://upload.wikimedia.org/wikipedia/en/thumb/9/90/RWS_Tarot_00_Fool.jpg/640px-RWS_Tarot_00_Fool.jpg","https://upload.wikimedia.org/wikipedia/en/7/7f/RWS_Tarot_18_Moon.jpg","https://upload.wikimedia.org/wikipedia/en/f/ff/RWS_Tarot_21_World.jpg","https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg","https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg","https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg"],j=function(t){return{x:0,y:-4*t,scale:1,rot:20*Math.random()-10,delay:100*t}},l=function(t){return Object(i.a)({x:0,y:-4*t,rot:0,scale:1.5},"y",-1e3)},b=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")};function f(){var t=Object(c.useState)((function(){return new Set})),e=Object(o.a)(t,1)[0],a=Object(d.c)(s.length,(function(t){return Object(n.a)(Object(n.a)({},j(t)),{},{from:l(t)})})),i=Object(o.a)(a,2),r=i[0],f=i[1],g=Object(u.a)((function(t){var a=Object(o.a)(t.args,1)[0],n=t.down,i=Object(o.a)(t.delta,1)[0],r=(t.distance,Object(o.a)(t.direction,1)[0]),c=t.velocity,d=r<0?-1:1;!n&&c>.15&&e.add(a),f((function(t){if(a===t){var o=e.has(a);return{x:o?(200+window.innerWidth)*d:n?i:0,rot:i/100+(o?10*d*c:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:o?200:500}}}})),n||e.size!==s.length||setTimeout((function(){return e.clear()||f((function(t){return j(t)}))}),6e3)}));return r.map((function(t,e){var a=t.x,o=t.y,i=t.rot,r=t.scale;return Object(p.jsx)(d.a.div,{style:{transform:Object(d.b)([a,o],(function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0)")}))},children:Object(p.jsx)(d.a.div,Object(n.a)(Object(n.a)({},g(e)),{},{style:{transform:Object(d.b)([i,r],b),backgroundImage:"url(".concat(s[e],")")}}))},e)}))}Object(r.render)(Object(p.jsx)(f,{}),document.getElementById("root"))},16:function(t,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.40481545.chunk.js.map