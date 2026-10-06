/* ARTA NOORI STUDIO: 3D engine. Content lives in js/content.js */
const ICON = {
  wa:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.3-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2L9 9.5z"/></svg>`,
  ig:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,
  play:`<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
};


Object.assign(TX.en,{li:"LinkedIn",enterHint:"Tap to enter",tapSound:"Tap for sound",toLight:"Lights on",toDark:"Lights off",loading:"Lighting the set",
 noGL:"Your browser can't show the 3D studio. Reach me on WhatsApp or Instagram @artanourii."});
Object.assign(TX.fa,{li:"لینکدین",enterHint:"برای ورود بزن",tapSound:"برای صدا بزن",toLight:"روشن کردن نور",toDark:"خاموش کردن نور",loading:"در حال روشن کردن ست",
 noGL:"مرورگرت استودیوی سه‌بعدی رو نشون نمی‌ده. از واتس‌اپ یا اینستاگرام ‎@artanourii در تماس باش."});
ICON.sun=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
ICON.li=`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.4V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z"/></svg>`;
ICON.mute=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>`;
ICON.moon=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>`;
const LOGO_SHAPES=[{"o":[[-0.0586,0.7931],[-0.0573,0.6891],[-0.0152,0.5758],[0.0257,0.5744],[0.027,0.5771],[-0.0494,0.7747]],"h":[]},{"o":[[-0.1943,0.9697],[-0.5843,0.004],[-0.5408,0.0053],[-0.4196,0.3057],[-0.193,0.3057],[-0.193,0.3373],[-0.1733,0.3399],[-0.1548,0.3399],[-0.1443,0.3373],[-0.1443,0.0],[-0.1061,0.0013],[-0.1061,0.3267],[-0.1047,0.3373],[-0.0995,0.3399],[-0.0586,0.3386],[-0.0586,0.307],[-0.056,0.3057],[0.0889,0.3057],[0.0942,0.2964],[0.2049,0.0053],[0.2484,0.004],[0.1877,0.1647],[0.0797,0.4387],[0.0389,0.4387],[0.0731,0.3478],[0.0718,0.3426],[-0.1034,0.3426],[-0.1061,0.3452],[-0.1061,0.9157],[-0.1034,0.917],[0.5527,0.0],[0.583,0.0],[0.5843,0.9987],[0.5448,0.9987],[0.5448,0.083],[0.5356,0.0922],[-0.1126,1.0],[-0.1443,0.9987],[-0.1443,0.3439],[-0.4051,0.3439],[-0.193,0.8682]],"h":[]}];
const WORDMARK="data:image/png;base64,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";

/* ---------- basics ---------- */
const $=s=>document.querySelector(s);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const lerp=(a,b,t)=>a+(b-a)*t;
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const TOUCH=matchMedia("(pointer: coarse)").matches;
let lang="en";try{lang=localStorage.getItem("ans-lang")||"en"}catch(e){}
let themeChoice=null;try{themeChoice=localStorage.getItem("ans-theme")}catch(e){}
const sysDark=matchMedia("(prefers-color-scheme: dark)");
let dark=false;   // one look only: the warm, bright studio of the reference renders
const T=()=>TX[lang];
function el(h){const t=document.createElement("template");t.innerHTML=h.trim();return t.content.firstElementChild}

if(!window.THREE||!(()=>{try{const c=document.createElement("canvas");return !!(c.getContext("webgl2")||c.getContext("webgl"))}catch(e){return false}})()){
  $("#fbTxt").textContent=T().noGL;$("#fallback").classList.add("show");$("#loader").classList.add("done");
  throw new Error("no webgl");
}

/* ---------- renderer & quality ---------- */
const phoneLike=()=>innerWidth<640;
let Q=(TOUCH&&Math.min(innerWidth,innerHeight)<900)||phoneLike()?"mid":"high";
const canvas=$("#gl");
// antialiasing everywhere and a pixel ratio close to the screen's own, so edges and text stay crisp
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,powerPreference:"high-performance"});
let DPR=Math.min(devicePixelRatio||1,Q==="high"?2:1.6);
renderer.setPixelRatio(DPR);renderer.setSize(innerWidth,innerHeight,false);
renderer.shadowMap.enabled=Q==="high";renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.12,220);
const C=h=>new THREE.Color(h).convertSRGBToLinear();
const pmrem=new THREE.PMREMGenerator(renderer);
scene.environment=pmrem.fromScene(new THREE.RoomEnvironment(),.04).texture;
scene.fog=new THREE.FogExp2(0x000000,.03);

/* ---------- procedural textures ---------- */
function canvasTex(w,h,draw,repeat){
  const c=document.createElement("canvas");c.width=w;c.height=h;draw(c.getContext("2d"),w,h);
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.anisotropy=renderer.capabilities.getMaxAnisotropy();
  if(repeat){t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(repeat[0],repeat[1])}return t;
}
// polished concrete: fine soft grain and broad, blurred clouding (hard per-pixel noise read as pixelation)
const concreteTex=canvasTex(1024,1024,(g,w,h)=>{
  g.fillStyle="#bdbdbd";g.fillRect(0,0,w,h);
  for(let i=0;i<46;i++){const x=Math.random()*w,y=Math.random()*h,r=90+Math.random()*260,dk=Math.random()<.5;
    const gr=g.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,dk?"rgba(0,0,0,.05)":"rgba(255,255,255,.06)");gr.addColorStop(1,"rgba(0,0,0,0)");
    for(const ox of [-w,0,w])for(const oy of [-h,0,h]){g.save();g.translate(ox,oy);g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2);g.restore()}}
  const id=g.getImageData(0,0,w,h),d=id.data;
  for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*9;d[i]+=n;d[i+1]+=n;d[i+2]+=n}
  g.putImageData(id,0,0);
  if("filter" in g){g.filter="blur(.8px)";g.drawImage(g.canvas,0,0);g.filter="none"}
  g.globalAlpha=.12;g.strokeStyle="#000";g.lineWidth=2;g.strokeRect(0,0,w,h);
},[5,18]);
const acousticTex=canvasTex(256,256,(g,w,h)=>{
  g.fillStyle="#9a9a9a";g.fillRect(0,0,w,h);
  for(let y=0;y<2;y++)for(let x=0;x<2;x++){
    const gr=g.createLinearGradient(x*128,y*128,x*128+128,y*128+128);gr.addColorStop(0,"#b0b0b0");gr.addColorStop(1,"#868686");
    g.fillStyle=gr;g.fillRect(x*128+5,y*128+5,118,118);
  }
},[30,4]);
// dark wood slats for the facade of the main building
const slatTex=canvasTex(512,256,(g,w,h)=>{
  g.fillStyle="#1a1410";g.fillRect(0,0,w,h);
  for(let x=0;x<w;x+=32){const gr=g.createLinearGradient(x,0,x+26,0);gr.addColorStop(0,"#5c4636");gr.addColorStop(.5,"#7a5e48");gr.addColorStop(1,"#463428");g.fillStyle=gr;g.fillRect(x+4,0,22,h);
    g.globalAlpha=.12;for(let k=0;k<6;k++){g.fillStyle=k%2?"#000":"#6b5440";g.fillRect(x+4+Math.random()*20,0,1,h)}g.globalAlpha=1}
},[14,3]);
// a palm frond: a central rib with leaflets, on transparent
const frondTex=(()=>{const c=document.createElement("canvas");c.width=128;c.height=512;const g=c.getContext("2d");
  g.strokeStyle="#4f7a2a";g.lineWidth=5;g.beginPath();g.moveTo(64,512);g.lineTo(64,6);g.stroke();
  for(let y=500;y>20;y-=13){const t=1-y/512,len=58*Math.sin(Math.PI*Math.min(1,(1-t)*1.05))+6,col=`hsl(${95+t*20},${42+t*12}%,${22+t*14}%)`;g.strokeStyle=col;g.lineWidth=7;g.lineCap="round";
    for(const sd of [-1,1]){g.beginPath();g.moveTo(64,y);g.quadraticCurveTo(64+sd*len*.5,y-10,64+sd*len,y-26);g.stroke()}}
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.anisotropy=4;return t})();
const chairTex=canvasTex(512,160,(g,w,h)=>{g.fillStyle="#141414";g.fillRect(0,0,w,h);g.fillStyle="#efe9df";g.font="800 92px Unbounded, Arial Black, sans-serif";g.textAlign="center";g.textBaseline="middle";g.fillText("ARTA",w/2,h/2+4)});
const monitorTex=canvasTex(128,80,(g,w,h)=>{const gr=g.createLinearGradient(0,0,w,h);gr.addColorStop(0,"#1d3a5f");gr.addColorStop(1,"#c06a3b");g.fillStyle=gr;g.fillRect(0,0,w,h);g.strokeStyle="rgba(255,255,255,.6)";g.strokeRect(10,8,w-20,h-16)});
// a soft spill of light: bright along the top edge, fading away (floor glow under neon, light fans on walls)
const glowTex=canvasTex(64,256,(g,w,h)=>{const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,"rgba(255,255,255,1)");gr.addColorStop(.25,"rgba(255,255,255,.35)");gr.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=gr;g.fillRect(0,0,w,h)});
const fanTex=canvasTex(256,512,(g,w,h)=>{
  for(let y=0;y<h;y++){const t=1-y/h,half=w*(.04+.46*Math.pow(t,.8)),a=Math.pow(1-t,1.6)*.95+.05*(1-t);
    const gr=g.createLinearGradient(w/2-half,0,w/2+half,0);gr.addColorStop(0,"rgba(255,255,255,0)");gr.addColorStop(.5,`rgba(255,255,255,${a})`);gr.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=gr;g.fillRect(w/2-half,y,half*2,1)}});
const frameGlowTex=canvasTex(256,256,(g,w,h)=>{g.shadowColor="#fff";g.shadowBlur=26;g.strokeStyle="rgba(255,255,255,.9)";g.lineWidth=6;
  for(let k=0;k<3;k++){g.beginPath();const m=34,r=18;g.moveTo(m+r,m);g.arcTo(w-m,m,w-m,h-m,r);g.arcTo(w-m,h-m,m,h-m,r);g.arcTo(m,h-m,m,m,r);g.arcTo(m,m,w-m,m,r);g.closePath();g.stroke()}});
const dotTex=canvasTex(64,64,(g,w,h)=>{const gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,"rgba(255,255,255,1)");gr.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=gr;g.fillRect(0,0,w,h)});

/* ---------- materials ---------- */
const ALLM=[];const std=(c,r=.6,m=0,x={})=>{const mm=new THREE.MeshStandardMaterial(Object.assign({color:C(c),roughness:r,metalness:m},x));ALLM.push(mm);return mm};
const MAT={
  metal:std("#1c1c1f",.38,.85),standBlack:std("#0d0d0f",.5,.25),planter:std("#ece8e1",.6,0,{emissive:C("#ffd9a8"),emissiveIntensity:.12}),soil:std("#2a2119",.95,0),trunk:std("#5b4632",.85,0),metal2:std("#2b2b30",.45,.8),chrome:std("#d5d7db",.18,1),rubber:std("#0d0d0e",.9,0),
  lensGlass:std("#0a1020",.04,1,{envMapIntensity:2}),fabric:std("#121212",.95,0),wood:std("#3a2718",.6,0),
  floor:std("#0b0b0c",.32,0,{map:concreteTex,transparent:true,opacity:.86}),
  wall:std("#121214",.92,0,{map:acousticTex}),ceil:std("#08080a",.95,0),
  hallCyc:std("#1b1b1e",.85,0),plinth:std("#0c0c0d",.28,.2),logo:std("#eeebe5",.32,.08),
  tapeW:std("#e9e9e9",.7,0),truss:std("#9ea1a6",.35,.9),
  space:new THREE.MeshStandardMaterial({color:C("#ffffff"),emissive:C("#fff4e2"),emissiveIntensity:.2,roughness:.6}),
  chairCanvas:new THREE.MeshStandardMaterial({map:chairTex,roughness:.9}),
  monitor:new THREE.MeshBasicMaterial({map:monitorTex}),
  tally:new THREE.MeshStandardMaterial({color:0x330000,emissive:C("#ff2a2a"),emissiveIntensity:5})
};
const emissive=(c,i)=>{const mm=new THREE.MeshStandardMaterial({color:C("#111111"),emissive:C(c),emissiveIntensity:i,roughness:.4});ALLM.push(mm);return mm};
MAT.doorLed=emissive("#ffd49a",2.6);

/* ---------- geometry helpers ---------- */
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
function mesh(geo,mat,cast=true){const m=new THREE.Mesh(geo,mat);m.castShadow=cast&&renderer.shadowMap.enabled;m.receiveShadow=renderer.shadowMap.enabled;return m}
function box(w,h,d,mat,x=0,y=0,z=0){const m=mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);return m}
function cyl(rt,rb,h,mat,seg=16){return mesh(new THREE.CylinderGeometry(rt,rb,h,seg),mat)}
function stick(a,b,r,mat,seg=8){
  const len=a.distanceTo(b),m=cyl(r,r,len,mat,seg);
  m.position.copy(a).add(b).multiplyScalar(.5);
  m.quaternion.setFromUnitVectors(V(0,1,0),b.clone().sub(a).normalize());return m;
}
function legs(g,topY,spread,r=.018,mat=MAT.metal){
  for(let i=0;i<3;i++){const a=i/3*Math.PI*2+Math.PI/6;g.add(stick(V(0,topY,0),V(Math.cos(a)*spread,0.01,Math.sin(a)*spread),r,mat))}
  for(let i=0;i<3;i++){const a=i/3*Math.PI*2+Math.PI/6;g.add(stick(V(0,topY*.35,0),V(Math.cos(a)*spread*.6,topY*.12,Math.sin(a)*spread*.6),r*.6,mat))}
}

/* cinema camera on tripod or dolly — faces -Z */
function cameraRig(dolly){
  const g=new THREE.Group();
  const h=dolly?1.05:1.28;
  if(dolly){
    g.add(box(.9,.12,.7,MAT.metal2,0,.22,0));
    for(const [x,z] of [[-.38,-.28],[.38,-.28],[-.38,.28],[.38,.28]]){const w=cyl(.09,.09,.06,MAT.rubber,20);w.rotation.z=Math.PI/2;w.position.set(x,.1,z);g.add(w)}
    g.add(cyl(.07,.09,.75,MAT.metal,20).translateY(.65));
    g.add(box(.26,.04,.26,MAT.metal,0,1.02,0));
  }else legs(g,h,.55);
  const head=new THREE.Group();head.position.y=h+.08;g.add(head);
  head.add(box(.2,.1,.2,MAT.metal2));
  const body=new THREE.Group();body.position.y=.16;head.add(body);
  body.add(box(.17,.2,.36,MAT.metal));
  body.add(box(.172,.06,.2,MAT.metal2,0,.04,.04));
  const lens=cyl(.06,.065,.26,MAT.metal2,24);lens.rotation.x=Math.PI/2;lens.position.set(0,0,-.31);body.add(lens);
  for(const z of [-.24,-.33,-.4]){const r=cyl(.071,.071,.022,MAT.chrome,24);r.rotation.x=Math.PI/2;r.position.z=z;body.add(r)}
  const glass=cyl(.052,.052,.01,MAT.lensGlass,24);glass.rotation.x=Math.PI/2;glass.position.z=-.445;body.add(glass);
  body.add(box(.3,.22,.02,MAT.metal,0,0,-.5));
  body.add(box(.3,.02,.14,MAT.metal,0,.11,-.43));body.add(box(.02,.22,.14,MAT.metal,-.15,0,-.43));body.add(box(.02,.22,.14,MAT.metal,.15,0,-.43));
  body.add(box(.03,.03,.26,MAT.metal2,0,.16,.0));body.add(box(.02,.05,.02,MAT.metal2,0,.125,-.11));body.add(box(.02,.05,.02,MAT.metal2,0,.125,.11));
  const mon=new THREE.Group();mon.position.set(.16,.14,.05);mon.rotation.y=-.5;body.add(mon);
  mon.add(box(.15,.1,.018,MAT.metal));const scr=mesh(new THREE.PlaneGeometry(.13,.08),MAT.monitor,false);scr.position.z=.0105;scr.rotation.y=Math.PI;mon.add(scr);
  const vf=cyl(.025,.03,.12,MAT.rubber,16);vf.rotation.x=Math.PI/2;vf.position.set(-.1,.06,.22);body.add(vf);
  const tl=mesh(new THREE.SphereGeometry(.012,12,8),MAT.tally,false);tl.position.set(.07,.105,-.16);body.add(tl);
  g.userData.head=head;return g;
}
/* fresnel spotlight on a stand — head aims along -Z; call aim(worldPoint) */
function fresnel(lensColor="#fff3df",h=2.1,bare=false){
  const g=new THREE.Group();
  if(!bare){legs(g,.75,.6,.016,MAT.standBlack);g.add(stick(V(0,.75,0),V(0,h,0),.018,MAT.standBlack))}
  const yoke=new THREE.Group();yoke.position.y=h+.04;g.add(yoke);
  yoke.add(box(.04,.02,.42,MAT.metal,0,0,0));
  const head=new THREE.Group();yoke.add(head);
  head.add(box(.02,.3,.02,MAT.metal,-.2,.1,0));head.add(box(.02,.3,.02,MAT.metal,.2,.1,0));
  const can=new THREE.Group();can.position.y=.2;head.add(can);
  const house=cyl(.17,.17,.34,MAT.metal,28);house.rotation.x=Math.PI/2;can.add(house);
  for(let i=0;i<5;i++){const f=cyl(.185,.185,.012,MAT.metal2,28);f.rotation.x=Math.PI/2;f.position.z=.13-i*.05;can.add(f)}
  const lensMat=emissive(lensColor,4);
  const lens=mesh(new THREE.CircleGeometry(.14,28),lensMat,false);lens.position.z=-.172;lens.rotation.y=Math.PI;can.add(lens);
  const ring=mesh(new THREE.TorusGeometry(.155,.015,8,32),MAT.metal2);ring.position.z=-.17;can.add(ring);
  for(let i=0;i<4;i++){
    const d=new THREE.Group();d.rotation.z=i*Math.PI/2;d.position.z=-.18;can.add(d);
    const leaf=box(.28,.2,.006,MAT.metal,0,.0,0);leaf.geometry.translate(0,.1,0);leaf.position.y=.15;leaf.rotation.x=-.55;d.add(leaf);
  }
  g.userData.aim=(p)=>{g.updateMatrixWorld(true);const lt=g.worldToLocal(p.clone());
    const dx=lt.x,dz=lt.z,dy=lt.y-(h+.24);yoke.rotation.y=Math.atan2(-dx,-dz);can.rotation.x=Math.atan2(dy,Math.hypot(dx,dz));g.updateMatrixWorld(true)};
  g.userData.lensWorld=()=>lens.getWorldPosition(new THREE.Vector3());
  return g;
}
function softbox(h=1.9){
  const g=new THREE.Group();legs(g,.7,.6,.016,MAT.standBlack);g.add(stick(V(0,.7,0),V(0,h,0),.018,MAT.standBlack));
  const head=new THREE.Group();head.position.y=h+.05;g.add(head);
  const bx=mesh(new THREE.CylinderGeometry(.55,.22,.42,4,1,true),MAT.fabric);bx.rotation.x=-Math.PI/2;bx.rotation.y=Math.PI/4;bx.position.z=-.21;
  bx.material=MAT.fabric.clone();bx.material.side=THREE.DoubleSide;head.add(bx);
  const face=mesh(new THREE.PlaneGeometry(.77,.77),emissive("#fffaf0",2.4),false);face.position.z=-.425;face.rotation.y=Math.PI;head.add(face);
  head.add(box(.2,.2,.12,MAT.metal,0,0,.05));
  g.userData.aim=p=>{g.updateMatrixWorld(true);const wp=head.getWorldPosition(new THREE.Vector3());head.lookAt(wp.clone().multiplyScalar(2).sub(p))};
  g.userData.face=face;return g;
}
function ledPanel(){
  const g=new THREE.Group();legs(g,.7,.55,.015,MAT.standBlack);g.add(stick(V(0,.7,0),V(0,1.75,0),.017,MAT.standBlack));
  const head=new THREE.Group();head.position.y=1.85;g.add(head);
  head.add(box(.62,.36,.05,MAT.metal));const f=mesh(new THREE.PlaneGeometry(.56,.3),emissive("#e9f0ff",2.2),false);f.position.z=-.026;f.rotation.y=Math.PI;head.add(f);
  g.userData.aim=p=>{g.updateMatrixWorld(true);const wp=head.getWorldPosition(new THREE.Vector3());head.lookAt(wp.clone().multiplyScalar(2).sub(p))};
  return g;
}
/* a potted palm in a black square planter (one shared frond shape, rotated) */
const FROND_GEO=(()=>{const g=new THREE.PlaneGeometry(.34,1.15,1,6);g.translate(0,.575,0);const p=g.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i);p.setZ(i,-.38*y*y)}g.computeVertexNormals();return g})();
let FROND_MAT=null;
function palm(h=1.25,seed=1){
  if(!FROND_MAT){FROND_MAT=new THREE.MeshStandardMaterial({map:frondTex,alphaTest:.45,side:THREE.DoubleSide,roughness:.7});ALLM.push(FROND_MAT)}
  const g=new THREE.Group(),r=k=>{const x=Math.sin(seed*91.7+k*12.3)*43758.5;return x-Math.floor(x)};
  g.add(box(.58,.62,.58,MAT.planter,0,.31,0));g.add(box(.5,.02,.5,MAT.soil,0,.6,0));
  for(let s2=0;s2<3;s2++){
    const a=s2*2.1+r(s2),top=V(Math.cos(a)*.12,.6+h*(.55+r(s2+5)*.35),Math.sin(a)*.12);
    g.add(stick(V(0,.6,0),top,.025,MAT.trunk));
    const n=6;for(let k=0;k<n;k++){const f=new THREE.Mesh(FROND_GEO,FROND_MAT);f.position.copy(top);
      f.rotation.order="YXZ";f.rotation.y=k/n*Math.PI*2+a;f.rotation.x=-(.55+r(k+s2*7)*.5);f.scale.setScalar(.75+r(k*3+s2)*.45);g.add(f)}
  }
  return g;
}
/* a makeup mirror with round bulbs around it, on a little dressing table */
function makeupMirror(){
  const g=new THREE.Group();
  g.add(box(1.5,.06,.55,MAT.metal2,0,.76,0));for(const x of [-.68,.68])g.add(box(.06,.76,.5,MAT.metal2,x,.38,0));
  g.add(box(1.3,1.0,.04,MAT.metal,0,1.42,-.24));
  const mir=new THREE.Mesh(new THREE.PlaneGeometry(1.1,.82),new THREE.MeshStandardMaterial({color:C("#cfd3d8"),roughness:.05,metalness:1}));mir.position.set(0,1.42,-.215);g.add(mir);
  const bulb=emissive("#fff3d6",2.6);
  for(let k=0;k<6;k++){const x=-.55+k*.22;for(const y of [1.95,.9]){const b=new THREE.Mesh(new THREE.SphereGeometry(.035,10,8),bulb);b.position.set(x,y,-.2);g.add(b)}}
  for(let k=0;k<4;k++){const y=1.07+k*.24;for(const x of [-.65,.65]){const b=new THREE.Mesh(new THREE.SphereGeometry(.035,10,8),bulb);b.position.set(x,y,-.2);g.add(b)}}
  return g;
}
function chair(){
  const g=new THREE.Group(),w=MAT.wood;
  for(const x of [-.25,.25]){g.add(stick(V(x,0,-.25),V(x,.62,.22),.018,w));g.add(stick(V(x,0,.25),V(x,.62,-.22),.018,w));g.add(stick(V(x,.62,.25),V(x,1.08,.27),.016,w))}
  g.add(box(.52,.02,.42,MAT.fabric,0,.62,0));
  const back=mesh(new THREE.PlaneGeometry(.52,.16),MAT.chairCanvas);back.position.set(0,.98,.27);g.add(back);
  const back2=back.clone();back2.rotation.y=Math.PI;back2.position.z=.272;g.add(back2);
  g.add(box(.08,.02,.42,w,-.28,.82,0));g.add(box(.08,.02,.42,w,.28,.82,0));
  return g;
}
function truss(len,mat=MAT.truss){
  const g=new THREE.Group(),s=.15;
  for(const [y,z] of [[s,s],[s,-s],[-s,s],[-s,-s]]){const c=cyl(.02,.02,len,mat,8);c.rotation.z=Math.PI/2;c.position.set(0,y,z);g.add(c)}
  const n=Math.floor(len/.5),geo=new THREE.CylinderGeometry(.009,.009,.42,5),im=new THREE.InstancedMesh(geo,mat,n*2);
  const q=new THREE.Quaternion(),m=new THREE.Matrix4(),sc=V(1,1,1);
  for(let i=0;i<n;i++){
    const x=-len/2+i*.5+.25;
    q.setFromEuler(new THREE.Euler(0,0,(i%2?1:-1)*.62));m.compose(V(x,0,s),q,sc);im.setMatrixAt(i*2,m);
    m.compose(V(x,0,-s),q,sc);im.setMatrixAt(i*2+1,m);
  }
  g.add(im);return g;
}
function cycGeo(w,floorLen,r,h,seg=14){
  const prof=[[floorLen,0],[0,0]];
  for(let i=1;i<=seg;i++){const t=i/seg*Math.PI/2;prof.push([-r*Math.sin(t),r-r*Math.cos(t)])}
  prof.push([-r,h]);
  const pos=[],uv=[],idx=[];let L=0;const acc=[0];
  for(let i=1;i<prof.length;i++){L+=Math.hypot(prof[i][0]-prof[i-1][0],prof[i][1]-prof[i-1][1]);acc.push(L)}
  prof.forEach((p,i)=>{for(const x of [-w/2,w/2]){pos.push(x,p[1],p[0]);uv.push(x/w+.5,acc[i]/L)}});
  for(let i=0;i<prof.length-1;i++){const a=i*2;idx.push(a,a+2,a+1,a+1,a+2,a+3)}
  const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.Float32BufferAttribute(pos,3));
  g.setAttribute("uv",new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();return g;
}
function cable(pts){const c=new THREE.CatmullRomCurve3(pts.map(p=>V(p[0],.012,p[1])));return mesh(new THREE.TubeGeometry(c,60,.011,6),MAT.rubber,false)}

/* volumetric light beam (additive cone) */
const beams=[];
const beamMat=(color)=>new THREE.ShaderMaterial({
  uniforms:{uColor:{value:C(color)},uOpacity:{value:.5},uLen:{value:1}},
  vertexShader:`varying vec3 vN;varying vec3 vV;varying float vZ;uniform float uLen;
    void main(){vZ=position.z/uLen;vec4 mv=modelViewMatrix*vec4(position,1.);vV=-mv.xyz;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}`,
  fragmentShader:`varying vec3 vN;varying vec3 vV;varying float vZ;uniform vec3 uColor;uniform float uOpacity;
    void main(){float e=pow(abs(dot(normalize(vN),normalize(vV))),2.2);float f=pow(clamp(1.-vZ,0.,1.),1.6)*smoothstep(0.,.06,vZ);
    gl_FragColor=vec4(uColor*e*f*uOpacity,1.);}`,
  transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,fog:false
});
function beam(from,to,angle,color){
  const L=from.distanceTo(to)*1.05,R=Math.tan(angle)*L;
  const geo=new THREE.CylinderGeometry(.06,R,L,40,1,true);geo.translate(0,-L/2,0);geo.rotateX(-Math.PI/2);
  const m=new THREE.Mesh(geo,beamMat(color));m.material.uniforms.uLen.value=L;m.position.copy(from);m.lookAt(to);m.renderOrder=5;
  scene.add(m);beams.push(m);return m;
}

/* light slots served by a small pool of real spotlights (nearest win) */
const slots=[];
function slot(from,to,color,intensity,angle,pen=.5,withBeam=true){
  slots.push({from,to,color:C(color),intensity,angle,pen});
  if(withBeam&&Q==="high")beam(from,to,angle*.62,color);
}

/* ---------- build the soundstage ---------- */
const SETS=[];const anchors=[];
const SET0=-32,SETSTEP=9;
// the hall grows with the number of studios
const LED_Z=SET0-(STUDIOS.length-1)*SETSTEP-12,HALL_END=LED_Z-12,HALL_LEN=10-HALL_END,HALL_MID=(10+HALL_END)/2;
function build3D(){
  // floor, reflection, walls, ceiling
  const fl=mesh(new THREE.PlaneGeometry(36,HALL_LEN),MAT.floor,false);fl.rotation.x=-Math.PI/2;fl.position.set(0,.002,HALL_MID);scene.add(fl);
  if(Q==="high"&&THREE.Reflector){
    const rf=new THREE.Reflector(new THREE.PlaneGeometry(36,HALL_LEN),{clipBias:.003,textureWidth:innerWidth*.6,textureHeight:innerHeight*.6,color:0x8a8a8a});rf.userData.keep=true;
    // polished concrete: the reflection is smeared along the view, so lights and neon leave long streaks on the floor
    rf.material.fragmentShader=`uniform vec3 color;uniform sampler2D tDiffuse;varying vec4 vUv;
      void main(){vec2 uv=vUv.xy/vUv.w;vec3 c=vec3(0.);float ws=0.;
        for(int k=-7;k<=7;k++){float t=float(k)/7.;float w=exp(-t*t*2.2);vec3 sm=texture2D(tDiffuse,uv+vec2(t*.004,t*.055)).rgb;c+=sm*(.55+dot(sm,vec3(.5)))*w;ws+=w;}
        gl_FragColor=vec4(c/ws*color*1.1,1.);}`;
    rf.rotation.x=-Math.PI/2;rf.position.set(0,0,HALL_MID);scene.add(rf);floorMirror=rf;
  }else{MAT.floor.transparent=false;MAT.floor.opacity=1}
  for(const s of [-1,1]){const w=mesh(new THREE.PlaneGeometry(HALL_LEN,13),MAT.wall,false);w.rotation.y=-s*Math.PI/2;w.position.set(s*18,6.5,HALL_MID);scene.add(w)}
  const bw=mesh(new THREE.PlaneGeometry(36,13),MAT.wall,false);bw.position.set(0,6.5,HALL_END);scene.add(bw);
  // the main studio building: facade with a big doorway, the ARTA NOORI sign above it, and the forecourt outside
  MAT.facade=std("#4a3a2e",.7,.05,{map:slatTex});MAT.ground=std("#0d0d0f",.6,0,{map:concreteTex});
  const DW=9,DH=4.6;
  for(const sd of [-1,1])scene.add(box((36-DW)/2,13,.5,MAT.facade,sd*(DW/2+(36-DW)/4),6.5,10));
  scene.add(box(DW,13-DH,.5,MAT.facade,0,DH+(13-DH)/2,10));
  const trim=emissive("#f2c27a",2.4);
  scene.add(box(DW+.3,.07,.07,trim,0,DH+.04,10.28));for(const sd of [-1,1])scene.add(box(.07,DH,.07,trim,sd*(DW/2+.15),DH/2,10.28));
  scene.add(box(36,.06,.06,trim,0,12.97,10.28));
  const gr=mesh(new THREE.PlaneGeometry(60,40),MAT.ground,false);gr.rotation.x=-Math.PI/2;gr.position.set(0,.001,30.25);scene.add(gr);
  const fsTex=canvasSign(2048,560,(g,W,H)=>{
    rr(g,8,8,W-16,H-16,40);g.fillStyle="#0b0b0d";g.fill();g.lineWidth=10;g.strokeStyle="#e9c98d";g.stroke();
    let x=90;if(FACADE_LOGO){const k=(H-140)/FACADE_LOGO.height;g.drawImage(FACADE_LOGO,x,70,FACADE_LOGO.width*k,H-140);x+=FACADE_LOGO.width*k+80}
    // text is sized to the space left beside the logo so it always fits whatever font the device uses
    const room=W-x-90,fit=(txt,wt,px,sp)=>{let f=px;const set=()=>{g.font=`${wt} ${f}px "Unbounded", "Helvetica Neue", Arial, sans-serif`;if("letterSpacing" in g)g.letterSpacing=(f*sp)+"px"};set();while(g.measureText(txt).width>room&&f>30){f-=4;set()}};
    g.fillStyle="#f3efe6";g.textBaseline="middle";g.textAlign="left";
    fit("ARTA NOORI",700,190,.09);g.fillText("ARTA NOORI",x,H*.42);
    fit("STUDIO",500,92,.43);g.fillStyle="#e9c98d";g.fillText("STUDIO",x+6,H*.76);
  });
  const fs=new THREE.Mesh(new THREE.PlaneGeometry(7.4,2.02),new THREE.MeshBasicMaterial({map:fsTex,transparent:true}));fs.position.set(0,DH+1.42,10.27);fs.userData.keep=true;scene.add(fs);
  { const im=new Image();im.onload=()=>{FACADE_LOGO=im;fsTex.userData.redraw()};im.src="assets/logo-white.png"; }
  // palms in black planters either side of the door
  for(const sd of [-1,1]){const pl=palm(1.45,sd+3);pl.position.set(sd*(DW/2+1.4),0,10.75);scene.add(pl)}
  // warm uplights washing the facade and the sign
  for(const sd of [-1,1])slot(V(sd*6,.3,13.5),V(sd*2,DH+1.4,10),"#ffd9a6",2.2,.42,.7);
  // a row of grazing uplights along the slatted wall, each throwing a warm fan up the wood
  for(const sd of [-1,1])for(const x of [7.4,10.6]){slot(V(sd*x,.15,10.6),V(sd*x,7,10.2),"#ffcf8f",1.4,.28,.9,false);scene.add(box(.22,.08,.16,MAT.metal,sd*x,.04,10.55))}
  slot(V(0,1,17),V(0,4,10),"#fff1dc",1.6,.5,.8,false);
  { const fm=new THREE.MeshBasicMaterial({map:fanTex,color:C("#ffc47a"),transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false,fog:false});
    for(const sd of [-1,1])for(const x of [6.6,9.4,12.2,15]){const f=new THREE.Mesh(new THREE.PlaneGeometry(2.6,7.5),fm);f.position.set(sd*x,3.75,10.27);f.userData.keep=true;scene.add(f);
      const fx=box(.22,.08,.16,MAT.metal,sd*x,.04,10.4);scene.add(fx)}
    for(const sd of [-1,1]){const f=new THREE.Mesh(new THREE.PlaneGeometry(1.4,DH*1.3),fm);f.position.set(sd*(DW/2+.6),DH*.65,10.27);f.userData.keep=true;scene.add(f)}
    const gm=new THREE.MeshBasicMaterial({map:glowTex,color:C("#ffcf8a"),transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false,fog:false});
    const gl=new THREE.Mesh(new THREE.PlaneGeometry(DW+1.5,5),gm);gl.rotation.x=-Math.PI/2;gl.position.set(0,.01,12.75);gl.userData.keep=true;scene.add(gl); }
  const cl=mesh(new THREE.PlaneGeometry(36,HALL_LEN),MAT.ceil,false);cl.rotation.x=Math.PI/2;cl.position.set(0,13,HALL_MID);scene.add(cl);
  // overhead trusses + space lights
  for(const x of [-4.6,4.6]){const t=truss(HALL_LEN-20);t.rotation.y=Math.PI/2;t.position.set(x,8,HALL_MID);scene.add(t)}
  for(let z=0;z>HALL_END+4;z-=6){const t=truss(9.2);t.position.set(0,8,z);scene.add(t)}
  for(let z=-2;z>HALL_END+4;z-=8)for(const x of [-9,9]){
    const s=mesh(new THREE.CylinderGeometry(.55,.55,.9,24,1,true),MAT.space,false);s.position.set(x,9.6,z);scene.add(s);
    scene.add(stick(V(x,10.05,z),V(x,13,z),.01,MAT.metal));
  }
  for(let z=-6;z>HALL_END+4;z-=12)for(const x of [-4.6,4.6]){
    const f=fresnel("#ffe9c4",0,true);f.position.set(x,7.8,z);f.rotation.x=Math.PI;scene.add(f);
  }
  // rows of small spotlights hanging from the trusses, as in a real studio hall
  { const can=new THREE.CylinderGeometry(.11,.13,.26,14),lens=new THREE.CircleGeometry(.09,14),lensMat=emissive("#ffe2b0",2);
    for(let z=6;z>HALL_END+4;z-=2.4)for(const x of (Math.round(z/2.4)%2?[-4.6,4.6]:[-4.6,0,4.6])){
      const c=new THREE.Mesh(can,MAT.metal);c.position.set(x,7.72,z);scene.add(c);
      const l=new THREE.Mesh(lens,lensMat);l.rotation.x=Math.PI/2;l.position.set(x,7.585,z);scene.add(l);
    } }

  // warm scallops of light washing the quilted walls under the lamps
  { const wm=new THREE.MeshBasicMaterial({map:fanTex,color:C("#ffd7a0"),transparent:true,opacity:.2,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});
    for(let z=-2;z>HALL_END+4;z-=8)for(const sd of [-1,1]){const f=new THREE.Mesh(new THREE.PlaneGeometry(5,9),wm);f.rotation.set(0,sd>0?-Math.PI/2:Math.PI/2,0);f.scale.y=-1;f.position.set(sd*17.97,6.6,z);f.userData.keep=true;scene.add(f)} }

  // entrance
  MAT.floor.userData.lowEnv=.3;
  const pl=box(3.3,.5,1.5,MAT.plinth,0,.25,-6.4);scene.add(pl);pl.userData.keep=true;OCCLUDERS.push(pl);
  const logo=makeLogo();logo.position.set(0,.5,-6.4);scene.add(logo);
  // soft light halo behind the logo, so the black logo of light mode stands out from the room
  const haloTex=canvasTex(256,256,(g,w,h)=>{const gr=g.createRadialGradient(w/2,h/2,0,w/2,h/2,w/2);gr.addColorStop(0,"rgba(255,246,228,1)");gr.addColorStop(.45,"rgba(255,240,210,.45)");gr.addColorStop(1,"rgba(255,240,210,0)");g.fillStyle=gr;g.fillRect(0,0,w,h)});
  MAT.halo=new THREE.MeshBasicMaterial({map:haloTex,transparent:true,depthWrite:false,opacity:.8,toneMapped:false,fog:false});
  const halo=new THREE.Mesh(new THREE.PlaneGeometry(5.4,5.4),MAT.halo);halo.position.set(0,1.55,-7.4);halo.userData.keep=true;scene.add(halo);logo.traverse(o=>{o.userData.keep=true});OCCLUDERS.push(logo);
  const wmTex=new THREE.TextureLoader().load(WORDMARK);wmTex.encoding=THREE.sRGBEncoding;
  MAT.wordmark=new THREE.MeshBasicMaterial({map:wmTex,transparent:true,color:C("#f0eee8"),depthWrite:false,fog:false});
  const wm=new THREE.Mesh(new THREE.PlaneGeometry(1.9,.23),MAT.wordmark);wm.position.set(0,.25,-5.645);scene.add(wm);
  const L1=fresnel(),L2=fresnel();L1.position.set(-2.7,0,-4.5);L2.position.set(2.7,0,-4.5);L1.rotation.y=.3;L2.rotation.y=-.3;scene.add(L1,L2);
  const lt=V(0,1.25,-6.4);L1.userData.aim(lt);L2.userData.aim(lt);
  slot(L1.userData.lensWorld(),lt,"#fff1dc",3,.42,.55);slot(L2.userData.lensWorld(),lt,"#fff1dc",3,.42,.55);
  slot(V(0,7.6,-4.2),V(0,.6,-6.4),"#ffffff",1.3,.3,.6);
  const rig=cameraRig(false);rig.position.set(-1.7,0,-3.3);rig.lookAt(0,0,-6.4);rig.rotateY(Math.PI);scene.add(rig);
  scene.add(cable([[-2.7,-4.5],[-3.4,-3.6],[-3.8,-1],[-5,2]]),cable([[2.7,-4.5],[3.5,-3.4],[4.2,-1.2],[5.5,1.5]]),cable([[-1.7,-3.3],[-2.6,-2.4],[-3.8,-1]]));

  // Arta studio
  for(const x of [-3.6,3.6]){const t=truss(4.7);t.rotation.z=Math.PI/2;t.position.set(x,2.35,-11);scene.add(t)}
  const head=truss(7.6);head.position.set(0,4.85,-11);scene.add(head);
  const strip=box(7.2,.06,.04,emissive("#ffd9a0",1.6),0,4.66,-10.82);scene.add(strip);
  const cy=mesh(cycGeo(10,3.2,1.3,5.2),MAT.hallCyc);cy.material.side=THREE.DoubleSide;cy.position.set(-9.4,0,-16.6);cy.rotation.y=Math.PI/2;scene.add(cy);
  const dolly=cameraRig(true);dolly.position.set(2.9,0,-15.8);dolly.lookAt(-8,0,-16.6);dolly.rotateY(Math.PI);scene.add(dolly);
  for(const z of [-.5,.5]){const r=box(.05,.05,6,MAT.chrome,0,.03,0);r.position.set(2.9+z,.03,-15.8);r.rotation.y=Math.PI/2;r.scale.z=1;scene.add(r)}
  for(let i=0;i<10;i++)scene.add(box(.08,.03,1.3,MAT.wood,0.0+i*.6-2.7+2.9,.015,-15.8));
  const ch=chair();ch.position.set(4.6,0,-18.4);ch.rotation.y=-1.9;scene.add(ch);
  const mm=makeupMirror();mm.position.set(5.3,0,-21.2);mm.rotation.y=-Math.PI/2+.25;scene.add(mm);
  for(const [x,z,sd] of [[-5.6,-9.6,1],[5.6,-9.6,2],[5.9,-19.4,3],[-5.4,-22.6,4]]){const pl=palm(1.35,sd+20);pl.position.set(x,0,z);scene.add(pl)}
  const sb1=softbox(),sb2=softbox(),lp=ledPanel();
  sb1.position.set(-4.6,0,-13.2);sb2.position.set(-4.6,0,-20);lp.position.set(-2.4,0,-21.6);scene.add(sb1,sb2,lp);
  const ct=V(-8.5,1.5,-16.6);sb1.userData.aim(ct);sb2.userData.aim(ct);lp.userData.aim(ct);
  slot(V(-4.6,2.0,-13.2),ct,"#fff6e8",2.2,.75,1,false);slot(V(-4.6,2.0,-20),ct,"#fff6e8",2.2,.75,1,false);
  slot(V(0,7.6,-16.6),V(-1,0,-16.6),"#ffe3b8",1.6,.45,.7);
  scene.add(cable([[-4.6,-13.2],[-3.8,-11.8],[-5,-9],[-6.5,-6]]),cable([[-4.6,-20],[-3.6,-22.5],[-5.2,-25]]));

  // brand sets
  STUDIOS.forEach((s,i)=>buildSet(s,i));

  // end of the hall
  // end of the hall: the Instagram film floats here in its own glass frame (buildFeatureFilms)
  slot(V(0,7.6,LED_Z-3),V(0,0,LED_Z-1),"#ffe3c4",1.1,.45,.7);

  // haze particles
  const N=Math.round((Q==="high"?1400:700)*Math.min(HALL_LEN/104,2)),pp=new Float32Array(N*3);
  for(let i=0;i<N;i++){pp[i*3]=(Math.random()-.5)*20;pp[i*3+1]=Math.random()*7;pp[i*3+2]=4-Math.random()*(4-HALL_END)}
  const pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pp,3));
  MAT.dust=new THREE.PointsMaterial({size:.045,map:dotTex,transparent:true,opacity:.5,depthWrite:false,blending:THREE.AdditiveBlending,color:C("#ffe8c8")});
  dust=new THREE.Points(pg,MAT.dust);scene.add(dust);

  // base light
  hemi=new THREE.HemisphereLight(C("#cfd6e6"),C("#2a2420"),.25);scene.add(hemi);
  dir=new THREE.DirectionalLight(C("#ffffff"),0);dir.position.set(3,10,4);scene.add(dir);
}
let dust,hemi,dir,floorMirror=null;
function makeLogo(){
  const shapes=LOGO_SHAPES.map(s=>{
    const sh=new THREE.Shape(s.o.map(p=>new THREE.Vector2(p[0],p[1])));
    s.h.forEach(h=>sh.holes.push(new THREE.Path(h.map(p=>new THREE.Vector2(p[0],p[1])))));return sh;
  });
  const geo=new THREE.ExtrudeGeometry(shapes,{depth:.16,bevelEnabled:true,bevelThickness:.012,bevelSize:.006,bevelSegments:2,curveSegments:4});
  geo.translate(0,0,-.08);
  const m=mesh(geo,MAT.logo);m.scale.setScalar(1.45);m.position.y=.01;
  const g=new THREE.Group();g.add(m);return g;
}
/* brand logo or wordmark drawn onto a canvas and hung on the set's back wall */
const brandTex=[];
function drawBrand(tex){
  const {s,img}=tex.userData,cv=tex.image,g=cv.getContext("2d"),W=cv.width,H=cv.height;
  g.clearRect(0,0,W,H);g.fillStyle=s.c.ink;
  if(img){
    const iw=img.naturalWidth||img.width||1000,ih=img.naturalHeight||img.height||400,k=Math.min(W/iw,H/ih)*.92,w=iw*k,h=ih*k;
    g.drawImage(img,(W-w)/2,(H-h)/2,w,h);
    // single-colour logos (e.g. a black logo on a dark set) are recoloured in the set's text colour
    if(s.logoTint){g.globalCompositeOperation="source-in";g.fillStyle=s.c.ink;g.fillRect(0,0,W,H);g.globalCompositeOperation="source-over"}
  }
  else if(s.logo){const vb=s.logo.vb||24,k=H*.8/vb;g.save();g.translate(W/2-vb*k/2,H*.1);g.scale(k,k);g.fill(new Path2D(s.logo.d));g.restore()}
  else{
    const name=s.name.en.toUpperCase();let fs=H*.42;
    g.textAlign="center";g.textBaseline="middle";
    const font=f=>`600 ${f}px Unbounded, "Helvetica Neue", Arial, sans-serif`;
    g.font=font(fs);if("letterSpacing" in g)g.letterSpacing=(fs*.16)+"px";
    while(g.measureText(name).width>W*.94&&fs>20){fs-=4;g.font=font(fs);if("letterSpacing" in g)g.letterSpacing=(fs*.16)+"px"}
    g.fillText(name,W/2,H/2);
  }
  tex.needsUpdate=true;
}
function brandWall(s){
  const cv=document.createElement("canvas");cv.width=1024;cv.height=400;
  const tex=new THREE.CanvasTexture(cv);tex.encoding=THREE.sRGBEncoding;tex.anisotropy=4;tex.userData={s,img:null};
  drawBrand(tex);brandTex.push(tex);
  loadLogo(s,()=>{tex.userData.img=s._img;drawBrand(tex)});
  const m=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.86),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}));
  m.userData.keep=true;return m;
}
// wordmarks use the site font once it has loaded
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>brandTex.forEach(t=>{if(!t.userData.img&&!t.userData.s.logo)drawBrand(t)}));
const B3=(w,h,d,m,x,y,z)=>box(w,h,d,m,x,y,z);
let FACADE_LOGO=null;
/* ---------- brand logo images, shared by walls and signs ---------- */
function loadLogo(s,cb){
  if(!s.logoImg)return;
  if(s._img)return cb();
  (s._cbs=s._cbs||[]).push(cb);if(s._loading)return;s._loading=true;
  const im=new Image();im.onload=()=>{
    // a logo file only works when the site is served over http(s); skip it if the browser marks the canvas unsafe
    const t=document.createElement("canvas");t.width=t.height=8;const tg=t.getContext("2d");tg.drawImage(im,0,0,8,8);
    try{tg.getImageData(0,0,1,1);s._img=im;s._cbs.forEach(f=>f())}catch(e){}
  };im.src=s.logoImg;
}
// the logo drawn into its own canvas (recoloured when the brand asks for it), or null when there is no logo
function logoCanvas(s,color,maxW,maxH){
  const img=s._img;let cv=document.createElement("canvas"),g;
  if(img){
    const iw=img.naturalWidth||img.width||1000,ih=img.naturalHeight||img.height||400,k=Math.min(maxW/iw,maxH/ih);
    cv.width=Math.max(1,Math.round(iw*k));cv.height=Math.max(1,Math.round(ih*k));g=cv.getContext("2d");g.drawImage(img,0,0,cv.width,cv.height);
    if(s.logoTint){g.globalCompositeOperation="source-in";g.fillStyle=color;g.fillRect(0,0,cv.width,cv.height)}
    return cv;
  }
  if(s.logo){const vb=s.logo.vb||24,k=Math.min(maxW,maxH)/vb;cv.width=cv.height=Math.round(vb*k);g=cv.getContext("2d");g.fillStyle=color;g.scale(k,k);g.fill(new Path2D(s.logo.d));return cv}
  return null;
}
// average brightness of a logo's visible pixels (0 black .. 1 white)
function logoLum(cv){
  try{const d=cv.getContext("2d").getImageData(0,0,cv.width,cv.height).data;let s=0,n=0;
    for(let i=0;i<d.length;i+=16){const a=d[i+3]/255;if(a<.4)continue;s+=(.2126*d[i]+.7152*d[i+1]+.0722*d[i+2])/255;n++}
    return n?s/n:1}catch(e){return 1}
}
const signTex=[];
function canvasSign(w,h,draw){
  const cv=document.createElement("canvas");cv.width=w;cv.height=h;
  const t=new THREE.CanvasTexture(cv);t.encoding=THREE.sRGBEncoding;t.anisotropy=4;
  t.userData=t.userData||{};t.userData.redraw=()=>{const g=cv.getContext("2d");g.clearRect(0,0,w,h);draw(g,w,h);t.needsUpdate=true};
  t.userData.redraw();signTex.push(t);return t;
}
function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.lineTo(x+w-r,y);g.quadraticCurveTo(x+w,y,x+w,y+r);g.lineTo(x+w,y+h-r);g.quadraticCurveTo(x+w,y+h,x+w-r,y+h);g.lineTo(x+r,y+h);g.quadraticCurveTo(x,y+h,x,y+h-r);g.lineTo(x,y+r);g.quadraticCurveTo(x,y,x+r,y);g.closePath()}
const signFont=(wt,px)=>`${wt} ${px}px ${lang==="fa"?'"Vazirmatn", Tahoma':'"Unbounded", "Vazirmatn", "Helvetica Neue", Arial'}, sans-serif`;
function fitText(g,text,wt,px,maxW){let f=px;g.font=signFont(wt,f);while(g.measureText(text).width>maxW&&f>14){f-=2;g.font=signFont(wt,f)}return f}
// studio name board over the door: plate in the brand colour, logo and name
function drawHeader(s,i){return (g,W,H)=>{
  const light=s.theme==="light",fa=lang==="fa";
  rr(g,6,6,W-12,H-12,34);g.fillStyle=light?s.c.bg:s.c.bg2;g.fill();g.lineWidth=8;g.strokeStyle=s.c.acc;g.stroke();
  const lc=logoCanvas(s,s.c.ink,W*.3,H*.62);let tx=fa?W-60:60,tw=W-120;
  if(lc){const lx=fa?W-60-lc.width:60;g.drawImage(lc,lx,(H-lc.height)/2);tw-=lc.width+40;tx=fa?lx-40:lx+lc.width+40}
  if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign=fa?"right":"left";g.textBaseline="middle";g.fillStyle=s.c.ink;
  fitText(g,s.name[lang],700,H*.3,tw);g.fillText(s.name[lang],tx,H*.44);
  g.globalAlpha=.88;g.font=signFont(500,H*.13);g.fillText((fa?"استودیو ":"STUDIO ")+(fa?(i+1).toLocaleString("fa"):String(i+1).padStart(2,"0")),tx,H*.76);g.globalAlpha=1;
}}
// hanging hall sign with an arrow toward the studio; dir -1 = arrow left, 1 = arrow right
function drawHall(s,dir){return (g,W,H)=>{
  const fa=lang==="fa";
  rr(g,6,6,W-12,H-12,22);g.fillStyle="#0c0c0f";g.fill();g.lineWidth=9;g.strokeStyle=s.c.acc==="#000000"?"#ffffff":s.c.acc;g.stroke();
  g.fillStyle=s.c.acc;rr(g,4,H-22,W-8,18,8);g.fill();
  // arrow
  const ax=dir<0?70:W-70,ay=H*.45;g.save();g.translate(ax,ay);g.scale(dir,1);g.fillStyle=s.c.acc==="#000000"?"#ffffff":s.c.acc;
  g.beginPath();g.moveTo(40,-38);g.lineTo(-20,0);g.lineTo(40,38);g.lineTo(40,14);g.lineTo(-2,0);g.lineTo(40,-14);g.closePath();g.fill();g.restore();
  const left=dir<0?140:40,right=dir<0?W-40:W-140;
  const lc=logoCanvas(s,"#ffffff",H*.9,H*.5);let x0=left,x1=right;
  if(lc){
    const lx=dir<0?x1-lc.width:x0;
    // a dark logo would vanish on the dark sign, so it sits on a light pill
    if(logoLum(lc)<.45){const p=16;g.fillStyle="#f4f2ee";rr(g,lx-p,ay-lc.height/2-p*.7,lc.width+p*2,lc.height+p*1.4,22);g.fill()}
    g.drawImage(lc,lx,ay-lc.height/2);
    if(dir<0)x1-=lc.width+(logoLum(lc)<.45?44:28);else x0+=lc.width+(logoLum(lc)<.45?44:28);
  }
  if("direction" in g)g.direction=fa?"rtl":"ltr";g.textBaseline="middle";g.fillStyle="#ffffff";
  g.textAlign=dir<0?"left":"right";fitText(g,s.name[lang],700,H*.32,x1-x0);g.fillText(s.name[lang],dir<0?x0:x1,ay);
}}
const hallPick=[],signMats=[];

/* ---------- set dressing: every studio gets props that suit the brand ---------- */
function decor(s,g,back){
  const c=s.c,M=(col,r=.55,m=0)=>std(col,r,m),E=(col,i=2.2)=>emissive(col,i);
  const zN=.4,zF=back+1.1,along=n=>Array.from({length:n},(_,k)=>n===1?(zN+zF)/2:zN+(zF-zN)*k/(n-1));
  const put=(o,x,y,z,ry=0)=>{o.position.set(x,y,z);o.rotation.y=ry;g.add(o);return o};
  const G=()=>new THREE.Group(),face=sd=>sd<0?Math.PI/2:-Math.PI/2;   // turn a prop on a side wall to face the middle
  const B=(w,h,d,m,x=0,y=0,z=0)=>box(w,h,d,m,x,y,z);
  const C=(rt,rb,h,m,seg=24)=>cyl(rt,rb,h,m,seg);
  const T=(R,r,m,arc=Math.PI*2)=>mesh(new THREE.TorusGeometry(R,r,12,48,arc),m);
  const S=(r,m)=>mesh(new THREE.SphereGeometry(r,20,14),m);
  const rack=(led)=>{const o=G();o.add(B(.62,2.1,.8,M("#14171c",.45,.4),0,1.05,0));const lm=E(led,2.6);
    for(let k=0;k<9;k++)o.add(B(.46,.014,.012,lm,0,.3+k*.2,.405));return o};
  const strip=(col,x,y,z,len,vertical=true)=>g.add(vertical?B(.03,len,.03,E(col,2.4),x,y,z):B(.03,.03,len,E(col,2.4),x,y,z));
  switch(s.id){
    case "asus":{ // tech showroom: laptops on display plinths, light strips on the walls
      for(const sd of [-1,1])for(const z of along(3)){
        const o=G();o.add(B(.9,.85,.6,M(c.bg2,.35,.3),0,.425,0));
        o.add(B(.44,.02,.3,M("#2b313b",.3,.7),0,.86,.02));
        const sc=B(.44,.29,.015,M("#101318",.3,.6),0,1.0,-.12);sc.rotation.x=-.25;o.add(sc);
        const gl=B(.4,.25,.002,E(c.acc,1.6),0,1.0,-.11);gl.rotation.x=-.25;o.add(gl);
        put(o,sd*2.9,0,z,face(sd));strip(c.acc,sd*3.68,1.9,z,3.2);
      }break}
    case "aparat":{ // cinema: rows of seats and film reels on the walls
      for(const sd of [-1,1])for(const z of along(3))for(const dx of [0,.62]){
        const o=G(),red=M("#8d1034",.85);o.add(B(.56,.4,.5,red,0,.2,0));o.add(B(.56,.62,.1,red,0,.62,.22));
        o.add(B(.06,.5,.5,M("#2a0a14"),-.31,.3,0));o.add(B(.06,.5,.5,M("#2a0a14"),.31,.3,0));
        put(o,sd*(2.55+dx),0,z);
      }
      for(const sd of [-1,1])for(const z of along(2)){const o=G();o.add(T(.42,.05,M("#d9d9d9",.3,.8)));
        for(let k=0;k<5;k++){const sp=B(.03,.8,.03,M("#d9d9d9",.3,.8));sp.rotation.z=k*Math.PI/5;o.add(sp)}
        const hub=C(.07,.07,.06,M(c.acc,.4));hub.rotation.x=Math.PI/2;o.add(hub);put(o,sd*3.64,2.9,z,face(sd))}
      break}
    case "respina":case "mahannet":{ // data centre: server racks with blinking lights
      for(const sd of [-1,1])for(const z of along(s.id==="respina"?4:3))put(rack(c.acc),sd*3.25,0,z,face(sd));
      if(s.id==="mahannet")for(const sd of [-1,1])for(let k=0;k<3;k++){ // wi-fi arcs on the walls
        const a=T(.25+k*.22,.025,E(c.acc,2.6),Math.PI/2);a.rotation.z=Math.PI/4;put(a,sd*3.66,2.6,zF+.4,face(sd));}
      break}
    case "mci":{ // telecom: a cell mast and big phones on stands
      const mast=G();const t=truss(4.4);t.rotation.z=Math.PI/2;t.position.y=2.2;mast.add(t);
      for(let k=0;k<3;k++){const p=B(.12,.62,.26,M("#eef2f5",.4),Math.cos(k*2.1)*.32,3.9,Math.sin(k*2.1)*.32);p.rotation.y=-k*2.1;mast.add(p)}
      mast.add(S(.07,E(c.acc,3)));mast.children[mast.children.length-1].position.y=4.5;put(mast,2.9,0,zF+.3);
      for(const z of along(3)){const o=G();o.add(C(.22,.26,1.1,M(c.bg2,.4),20));o.children[0].position.y=.55;
        o.add(B(.4,.8,.05,M("#111",.3,.5),0,1.55,0));o.add(B(.35,.7,.002,E(c.acc,1.4),0,1.55,.03));put(o,-2.95,0,z,face(-1))}
      break}
    case "snapp":{ // street: a car, cones and lane markings
      const car=G(),body=M(c.acc,.35,.35);car.add(B(.95,.45,2.0,body,0,.48,0));car.add(B(.85,.38,1.05,M("#1b2130",.15,.7),0,.89,-.05));
      for(const x of [-.5,.5])for(const z of [-.65,.65]){const w=C(.24,.24,.2,M("#0d0d0d",.9));w.rotation.z=Math.PI/2;w.position.set(x,.24,z);car.add(w)}
      for(const x of [-.3,.3]){car.add(B(.18,.08,.02,E("#ffffff",3),x,.55,1.01));car.add(B(.18,.06,.02,E("#ff2a2a",2.4),x,.55,-1.01))}
      put(car,2.75,0,(zN+zF)/2,.12);
      for(const z of along(4)){const cone=mesh(new THREE.ConeGeometry(.16,.5,20),M("#ff7a1a",.6));put(cone,-3.0,.25,z)}
      for(let z=3.0;z>back+.8;z-=.9)g.add(B(.1,.006,.48,E("#ffffff",1.1),0,.012,z));
      break}
    case "azkivam":{ // finance: stacks of coins and big cards
      const gold=M("#e8b44a",.3,.85);
      for(const sd of [-1,1])for(const z of along(3)){const o=G();o.add(B(.8,.7,.8,M(c.bg2,.5),0,.35,0));
        [[-.18,-.15,9],[.17,.12,14],[.12,-.2,6]].forEach(([x,zz,n])=>{for(let k=0;k<n;k++){const cn=C(.14,.14,.035,gold,28);cn.position.set(x,.72+k*.036,zz);o.add(cn)}});
        put(o,sd*2.95,0,z)}
      [c.acc,"#FB953E"].forEach((col,k)=>{const cd=B(.86,.54,.02,M(col,.3,.2),0,0,0);cd.rotation.set(-.3,0,k?.15:-.15);put(cd,(k?1:-1)*3.2,2.5,zF+.5,face(k?1:-1))});
      break}
    case "analizfix":{ // repair shop: workbench with phones, tool wall
      const bench=G();bench.add(B(.7,.06,1.8,M("#3a2f28",.7),0,.9,0));for(const x of [-.3,.3])for(const z of [-.8,.8])bench.add(B(.05,.9,.05,M("#222"),x,.45,z));
      for(let k=0;k<4;k++){bench.add(B(.18,.015,.34,M("#111",.3,.5),(k%2?.12:-.12),.94,-.6+k*.4));bench.add(B(.16,.002,.3,E(c.acc,1.3),(k%2?.12:-.12),.95,-.6+k*.4))}
      put(bench,2.85,0,(zN+zF)/2);
      const board=G();board.add(B(.04,1.3,2.0,M("#2b2b2b",.8),0,1.9,0));
      const sd1=G();sd1.add(C(.06,.06,.4,M(c.acc,.5)));sd1.children[0].position.y=.2;sd1.add(C(.015,.015,.6,M("#cfd4da",.3,.9)));sd1.children[1].position.y=.7;sd1.rotation.x=Math.PI/2;sd1.position.set(.05,2.1,-.4);board.add(sd1);
      const wr=G();wr.add(B(.06,.7,.08,M("#cfd4da",.3,.9)));wr.add(T(.1,.03,M("#cfd4da",.3,.9)));wr.children[1].position.y=.42;wr.children[1].rotation.y=Math.PI/2;wr.position.set(.05,1.8,.45);board.add(wr);
      put(board,-3.66,0,(zN+zF)/2);
      break}
    case "emaratezarin":{ // classical: columns and a fountain
      const stone=M("#e9dfc6",.6),gold=M(c.acc,.35,.7);
      for(const sd of [-1,1])for(const z of along(3)){const o=G();o.add(B(.55,.16,.55,stone,0,.08,0));
        const sh=C(.17,.2,3.2,stone,22);sh.position.y=1.76;o.add(sh);o.add(B(.55,.16,.55,gold,0,3.44,0));put(o,sd*3.25,0,z)}
      const f=G();f.add(C(.75,.8,.35,stone,32));f.children[0].position.y=.18;f.add(C(.68,.68,.02,E("#7fb9e6",1.2),32));f.children[1].position.y=.36;
      const pl=C(.1,.14,.8,stone,16);pl.position.y=.75;f.add(pl);const bw=C(.36,.2,.14,gold,24);bw.position.y=1.2;f.add(bw);put(f,2.2,0,zF+.2);
      break}
    case "farmaniyeh":{ // gym: dumbbell racks, bench and barbell
      const steel=M("#2a2a2a",.4,.6),plate=M(c.acc,.6);
      for(const z of along(2)){const r=G();r.add(B(.5,.6,1.5,steel,0,.3,0));
        for(let k=0;k<4;k++){const db=G();const bar=C(.025,.025,.36,M("#bbb",.3,.9));bar.rotation.z=Math.PI/2;db.add(bar);
          for(const x of [-.16,.16]){const h=C(.08,.08,.08,M("#151515",.7));h.rotation.z=Math.PI/2;h.position.x=x;db.add(h)}
          db.rotation.y=Math.PI/2;db.position.set(0,.66,-.55+k*.37);r.add(db)}
        put(r,-3.1,0,z)}
      const bench=G();bench.add(B(.35,.1,1.2,M("#151515",.6),0,.45,0));bench.add(B(.05,.4,.05,steel,0,.2,.45));bench.add(B(.05,.4,.05,steel,0,.2,-.45));
      for(const z of [-.55,.55])bench.add(B(.06,1.1,.06,steel,0,.55,z));
      const bb=C(.025,.025,1.6,M("#c8c8c8",.3,.9));bb.rotation.x=Math.PI/2;bb.position.y=1.1;bench.add(bb);
      for(const z of [-.7,.7]){const p=C(.22,.22,.05,plate,28);p.rotation.x=Math.PI/2;p.position.set(0,1.1,z);bench.add(p)}
      put(bench,2.8,0,(zN+zF)/2);
      for(const z of along(3)){const kb=G();kb.add(S(.16,M("#1a1a1a",.6,.3)));kb.children[0].position.y=.16;const hd=T(.09,.022,M("#1a1a1a",.6,.3),Math.PI);hd.position.y=.3;kb.add(hd);put(kb,3.3,0,z)}
      break}
    case "dicardo":{ // gifts and digital cards
      const cols=[c.acc,"#FFF212","#1049DC","#C7C5EE"];
      for(const sd of [-1,1])for(const [k,z] of along(4).entries()){const sz=.35+((k*7+(sd>0?3:0))%4)*.12,o=G(),col=cols[(k+(sd>0?2:0))%4];
        o.add(B(sz,sz,sz,M(col,.5),0,sz/2,0));o.add(B(sz+.01,sz+.01,.06,M("#ffffff",.4),0,sz/2,0));o.add(B(.06,sz+.01,sz+.01,M("#ffffff",.4),0,sz/2,0));
        put(o,sd*(3.0-(k%2)*.3),0,z,k*.4)}
      for(const sd of [-1,1])for(const z of along(2)){const cd=B(.62,.4,.015,E(sd<0?c.acc:"#1049DC",1.4));cd.rotation.set(-.2,face(sd)*.6,.1*sd);put(cd,sd*2.9,2.7,z)}
      break}
    case "niromotor":{ // workshop: tyre stacks and an engine on a turntable
      for(const sd of [-1,1])for(const z of along(2)){const st=G();for(let k=0;k<4;k++){const t=T(.3,.12,M("#111",.9));t.rotation.x=Math.PI/2;t.position.y=.12+k*.24;st.add(t)}put(st,sd*3.15,0,z)}
      const eng=G();eng.add(C(.9,.9,.1,M(c.bg2,.5),40));eng.children[0].position.y=.05;eng.add(T(.9,.02,E(c.acc,2.5)));eng.children[1].rotation.x=Math.PI/2;eng.children[1].position.y=.1;
      const blk=M("#6f7a88",.4,.75);eng.add(B(.8,.5,.55,blk,0,.4,0));eng.add(B(.85,.12,.25,M("#b5272e",.4,.4),0,.71,0));
      const pu=C(.16,.16,.06,M("#333",.4,.6));pu.rotation.z=Math.PI/2;pu.position.set(.45,.42,0);eng.add(pu);put(eng,2.4,0,zF+.6);
      break}
    case "itmall":{ // gadget store: shelves with products and light under each shelf
      for(const sd of [-1,1])for(const z of along(2)){const sh=G(),wood=M("#e8ecf3",.5);
        for(const x of [-.7,.7])sh.add(B(.04,2.2,.4,wood,x,1.1,0));
        for(let k=0;k<4;k++){const y=.3+k*.55;sh.add(B(1.44,.03,.4,wood,0,y,0));sh.add(B(1.3,.012,.012,E(c.acc,2),0,y-.03,.18));
          for(let j=0;j<4;j++){const tall=(j+k)%2?.22:.14;sh.add(B(.16,tall,.1,M(j%2?"#1c2434":"#ffffff",.4,.2),-.5+j*.33,y+tall/2+.015,0))}}
        put(sh,sd*3.45,0,z,face(sd))}
      break}
    case "beauty":{ // vanity: bulb mirror, table and giant lipstick
      const v=G();v.add(B(.04,1.2,1.0,M("#dfe7ee",.04,.95),0,1.75,0));const bulb=E("#fff3d6",2.8);
      for(let k=0;k<6;k++){const sp=S(.045,bulb);sp.position.set(.03,1.17+k*.23,-.56);v.add(sp);const sp2=sp.clone();sp2.position.z=.56;v.add(sp2)}
      for(let k=0;k<4;k++){const sp=S(.045,bulb);sp.position.set(.03,2.4,-.36+k*.24);v.add(sp)}
      v.add(B(.5,.05,1.2,M("#f6efe9",.4),.25,.8,0));put(v,-3.62,0,(zN+zF)/2);
      const ls=G();ls.add(C(.13,.13,.5,M("#d6b06a",.25,.9),24));ls.children[0].position.y=.25;ls.add(C(.11,.11,.35,M(c.acc,.35),24));ls.children[1].position.y=.67;
      const tip=mesh(new THREE.ConeGeometry(.11,.18,24),M(c.acc,.35));tip.position.y=.93;ls.add(tip);ls.scale.setScalar(1.6);put(ls,2.9,0,zF+.5);
      const pb=G();pb.add(B(.3,.36,.3,new THREE.MeshPhysicalMaterial({color:C("#f4d7df"),roughness:.05,transparent:true,opacity:.5,clearcoat:1}),0,.18,0));pb.add(C(.06,.06,.1,M("#d6b06a",.25,.9)));pb.children[1].position.y=.41;pb.scale.setScalar(1.8);put(pb,3.1,0,zN);
      break}
    case "tiktok":{ // creator room: ring light on a tripod and neon strips
      for(const sd of [-1,1]){const rl=G();rl.add(T(.42,.035,E("#ffffff",3)));rl.children[0].position.y=1.7;
        rl.add(B(.09,.17,.01,M("#111",.3,.5),0,1.7,0));const pole=C(.015,.015,1.7,M("#222",.4,.6));pole.position.y=.85;rl.add(pole);
        for(let k=0;k<3;k++){const lg=C(.012,.012,.8,M("#222",.4,.6));lg.position.set(Math.cos(k*2.1)*.22,.33,Math.sin(k*2.1)*.22);lg.rotation.set(Math.sin(k*2.1)*.5,0,-Math.cos(k*2.1)*.5);rl.add(lg)}
        put(rl,sd*2.9,0,(zN+zF)/2,face(sd))}
      for(const z of along(3)){strip("#25F4EE",-3.68,2.0,z,3.4);strip("#FE2C55",3.68,2.0,z,3.4)}
      strip("#25F4EE",-3.68,4.4,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);strip("#FE2C55",3.68,4.4,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);
      break}
  }
}

function buildSet(s,i){
  const side=i%2===0?-1:1,z=SET0-i*SETSTEP;
  const g=new THREE.Group();g.position.set(side*7.2,0,z);g.rotation.y=side<0?Math.PI/2:-Math.PI/2;scene.add(g);
  // films float one behind another down a tunnel into the set, alternating left and right,
  // so the camera flies between them; sets with more films are built deeper
  // a studio with many films (more than four) becomes a deep room where smaller frames float scattered at
  // different heights and depths on both sides of the camera's path
  const n=s.videos.length,many=n>4,Z0=.5;
  let lay,DZ;
  if(!many){
    DZ=n>1?Math.min(2.6,9.1/(n-1)):0;
    lay=s.videos.map((v,j)=>{const vert=v.r!=="16/9",x=n===1?0:(j%2===0?-1:1)*(vert?.85:1.25);
      return {x,vert,y:1.72+(j%3===1?.12:j%3===2?-.06:0),z:n===1?-.3:Z0-j*DZ,sc:1}});   // a single film floats in the middle of the room
  }else{
    // rows across the whole room (the middle too), each frame at its own height; the camera stops close in
    // front of every film, so each one can be seen properly and tapped
    const cols=n<=9?3:4,rows=Math.ceil(n/cols),sc=cols===3?.68:.58;
    const xsA=cols===3?[-2.3,0,2.3]:[-2.7,-.9,.9,2.7],DZr=Math.min(1.9,8.6/Math.max(1,rows-1));DZ=DZr;
    const hs=[[1.4,2.15,1.55,2.05],[2.1,1.45,2.2,1.4]];
    lay=s.videos.map((v,j)=>{const r=Math.floor(j/cols),c0=j%cols,c=r%2?cols-1-c0:c0;   // serpentine order
      return {x:xsA[c]+(r%2?.18:-.18),vert:v.r!=="16/9",y:hs[r%2][c],z:Z0-.6-r*DZr,sc,row:r}});
  }
  const back=Math.max(-10.2,Math.min(-3.2,(lay[n-1]||{z:0}).z-2.4)),extra=-1.25-back;
  const cm=std(s.c.bg,.82,0,{side:THREE.DoubleSide});
  const cy=mesh(cycGeo(7.4,3.4+extra,1.25,4.8),cm);cy.position.z=-extra;g.add(cy);
  const edge=mesh(new THREE.PlaneGeometry(7.4,.05),MAT.tapeW,false);edge.rotation.x=-Math.PI/2;edge.position.set(0,.004,3.38);g.add(edge);
  // truss ribs along the tunnel
  for(let rz=2.6;rz>back+.6;rz-=Math.max(DZ,2.6)){
    for(const x of [-3.5,3.5]){const t=truss(5);t.rotation.z=Math.PI/2;t.position.set(x,2.5,rz);g.add(t)}
    const hd=truss(7.3);hd.position.set(0,5.1,rz);g.add(hd);
  }
  // walls: two side walls and a front wall with a door opening facing the hall
  // inside: a calm tone from the set's backdrop; outside (the hall side): the brand colour
  const wi=new THREE.Color(s.c.bg).lerp(new THREE.Color("#f4eee6"),s.theme==="light"?.35:.6);
  const wm=std("#"+wi.getHexString(),.9,0);
  const we=new THREE.Color(s.c.acc==="#000000"?s.c.bg2:s.c.acc).lerp(new THREE.Color("#ffffff"),.06);
  const wx=std("#"+we.getHexString(),.8,0,{emissive:we.clone().convertSRGBToLinear(),emissiveIntensity:.22});wx.userData.lowEnv=.1;
  const depth=3.5-back;for(const sd of [-1,1]){g.add(B3(.12,4.8,depth,wm,sd*3.76,2.4,(3.5+back)/2));g.add(B3(.02,4.8,depth+.16,wx,sd*3.83,2.4,(3.5+back)/2+.08))}
  for(const sd of [-1,1]){g.add(B3(2.16,4.8,.14,wm,sd*2.68,2.4,3.45));g.add(B3(2.16,4.8,.02,wx,sd*2.68,2.4,3.53))}
  g.add(B3(3.2,1.8,.14,wm,0,3.9,3.45));g.add(B3(3.2,1.8,.02,wx,0,3.9,3.53));
  g.add(B3(7.64,.035,.035,emissive(s.c.acc,2.4),0,4.81,3.53));
  // a warm light strip framing the door, and a palm in a black planter on each side of it
  // neon in the brand colour: the front corners, the door frame and a line along the foot of the wall
  { const nc=new THREE.Color(s.c.acc==="#000000"?s.c.bg2:s.c.acc).lerp(new THREE.Color("#ffffff"),.2),neon=emissive("#"+nc.getHexString(),3.6);
    for(const sd of [-1,1]){g.add(B3(.08,4.8,.08,neon,sd*3.84,2.4,3.56));g.add(B3(.07,3.0,.07,neon,sd*1.6,1.5,3.58))}
    g.add(B3(3.27,.07,.07,neon,0,3.0,3.58));
    for(const sd of [-1,1])g.add(B3(2.25,.06,.06,neon,sd*2.72,.04,3.6));
    for(const sd of [-1,1])g.add(B3(.04,.04,3.5-back,neon,sd*3.86,.03,(3.5+back)/2));
    // the neon spills onto the polished floor in front of the booth
    const sp=new THREE.Mesh(new THREE.PlaneGeometry(7.9,1.9),new THREE.MeshBasicMaterial({map:glowTex,color:nc,transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));
    sp.rotation.x=-Math.PI/2;sp.position.set(0,.008,3.6+.95);sp.userData.keep=true;g.add(sp); }
  for(const sd of [-1,1]){const pl=palm(1.2,i*2+sd);pl.position.set(sd*2.35,0,4.05);pl.userData.keep=false;g.add(pl)}
  // name board over the door, facing the hall
  const hb=new THREE.Mesh(new THREE.PlaneGeometry(2.9,.9),new THREE.MeshBasicMaterial({map:canvasSign(1024,318,drawHeader(s,i))}));
  hb.position.set(0,3.58,3.66);hb.userData.keep=true;hb.userData.enter=i;g.add(hb);hallPick.push(hb);signMats.push(hb.material);
  g.add(B3(3.04,1.02,.06,MAT.metal,0,3.58,3.6));
  g.add(B3(2.6,.025,.025,emissive(s.c.acc,2),0,3.04,3.68));
  const decor0=g.children.length;decor(s,g,back);const decorKids=g.children.slice(decor0);
  const fz=fresnel();fz.position.set(2.9,0,2.3);g.add(fz);
  const sb=softbox();sb.position.set(-3.1,0,1.4);g.add(sb);
  g.updateMatrixWorld(true);
  const W=p=>g.localToWorld(p.clone());
  const tgt=W(V(0,1.4,-.4));fz.userData.aim(tgt);sb.userData.aim(tgt);
  const LI=s.theme==="light"?.4:1;
  slot(fz.userData.lensWorld(),tgt,"#fff1dc",2.6*LI,.5,.6,s.theme!=="light");
  const acc=new THREE.Color(s.c.acc).getHSL({}).l<.15?"#ffffff":s.c.acc;
  slot(W(V(0,4.9,back+3.6)),W(V(0,2.3,back)),acc,2.2*LI,.62,.7);
  // brand wall at the end of the tunnel: logo (or name) with a thin light line in the brand accent
  const bw=brandWall(s);bw.position.set(0,3.12,back+.2);g.add(bw);
  const line=box(2.8,.022,.02,emissive(s.c.acc,2.4),0,2.6,back+.25);line.userData.keep=true;g.add(line);
  // the films themselves, each in its own slab of glass with a soft key light
  const frames=[],pick=[];
  s.videos.forEach((v,j)=>{
    const L=lay[j],F=makeFrame(s,v,i);F.L=L;F.y0=L.y;F.r0=many?-L.x*.06:(L.x===0?0:-Math.sign(L.x)*.22);F.ph=j*1.7+i;
    F.G.position.set(L.x,L.y,L.z);F.G.rotation.y=F.r0;F.G.scale.setScalar(L.sc);g.add(F.G);frames.push(F);
    pick.push(F.screen,F.cap);   // only the picture and its caption open the film, not the glass around it
    if(!many)slot(W(V(L.x*.4,4.8,L.z+1.8)),W(V(L.x,1.6,L.z)),"#fff4e6",1.6*LI,.42,.8,false);
  });
  // props never stand where a film floats (a big studio fills the room with films)
  { g.updateMatrixWorld(true);const fb=frames.map(F=>new THREE.Box3().setFromObject(F.G).expandByScalar(.12)),bb=new THREE.Box3();
    decorKids.forEach(o=>{bb.setFromObject(o);if(!bb.isEmpty()&&fb.some(b=>b.intersectsBox(bb)))g.remove(o)}); }
  // a deep room is lit by a few soft lights along its length instead of one per film
  if(many)for(let k=0;k<3;k++){const lz=Z0-(k+.5)*(Z0-lay[n-1].z)/3;slot(W(V(0,4.8,lz+1.2)),W(V(0,1.4,lz-.6)),"#fff4e6",1.8*LI,.7,.8,false)}
  // hanging sign over the aisle before the studio, arrow pointing to its door (both faces)
  const hs=new THREE.Group();hs.position.set(side*1.5,3.35,z+5.6);scene.add(hs);
  const fr=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.55),new THREE.MeshBasicMaterial({map:canvasSign(1024,256,drawHall(s,side)),transparent:true}));fr.position.z=.03;
  const bk=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.55),new THREE.MeshBasicMaterial({map:canvasSign(1024,256,drawHall(s,-side)),transparent:true}));bk.rotation.y=Math.PI;bk.position.z=-.03;
  [fr,bk].forEach(m=>{m.userData.keep=true;m.userData.enter=i;hs.add(m);hallPick.push(m)});
  hs.add(box(2.26,.6,.04,MAT.metal,0,0,0));for(const x of [-.9,.9])hs.add(stick(V(x,.3,0),V(x,4.6,0),.008,MAT.metal));
  loadLogo(s,()=>signTex.forEach(t=>t.userData.redraw()));
  SETS.push({g,s,i,side,z,W,frames,pick,lay,back,DZ});
}

/* ---------- 3D glass frames: each film floats in a real slab of glass ---------- */
const CAP_H=.24;
function roundRect(w,h,r){const s=new THREE.Shape(),x=-w/2,y=-h/2;
  s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s}
function drawPoster(F){
  const cv=F.posterCv,g=cv.getContext("2d"),W=cv.width,H=cv.height,s=F.s;
  const bg=g.createLinearGradient(0,0,W,H);bg.addColorStop(0,s.c.bg2);bg.addColorStop(1,s.c.bg);g.fillStyle=bg;g.fillRect(0,0,W,H);
  const gl=g.createRadialGradient(W*.3,H*.22,0,W*.3,H*.22,Math.max(W,H)*.7);gl.addColorStop(0,s.c.acc+"cc");gl.addColorStop(1,s.c.acc+"00");g.fillStyle=gl;g.fillRect(0,0,W,H);
  if(F.posterImg){const im=F.posterImg,k=Math.max(W/im.width,H/im.height);g.drawImage(im,(W-im.width*k)/2,(H-im.height*k)/2,im.width*k,im.height*k)}
  const r=Math.min(W,H)*.09;g.fillStyle="rgba(255,255,255,.18)";g.strokeStyle="rgba(255,255,255,.75)";g.lineWidth=r*.06;
  g.beginPath();g.arc(W/2,H/2,r,0,Math.PI*2);g.fill();g.stroke();
  g.fillStyle="#fff";g.beginPath();g.moveTo(W/2-r*.3,H/2-r*.42);g.lineTo(W/2+r*.48,H/2);g.lineTo(W/2-r*.3,H/2+r*.42);g.closePath();g.fill();
  F.posterTex.needsUpdate=true;
}
function drawCaption(F){
  const cv=F.capCv,g=cv.getContext("2d"),W=cv.width,H=cv.height,s=F.s,v=F.v,fa=lang==="fa";
  g.clearRect(0,0,W,H);
  const fam=fa?'"Vazirmatn", Tahoma, sans-serif':'"Vazirmatn", "Helvetica Neue", Arial, sans-serif';
  if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign=fa?"right":"left";g.textBaseline="alphabetic";
  g.shadowColor=dark?"rgba(0,0,0,.55)":"rgba(255,255,255,.35)";g.shadowBlur=dark?8:4;
  const x=fa?W-34:34;
  // long titles shrink to fit the frame instead of being cut off
  const fit=(txt,wt,px)=>{g.font=`${wt} ${px}px ${fam}`;const m=g.measureText(txt).width,max=W-68;if(m>max)g.font=`${wt} ${px*max/m}px ${fam}`};
  g.fillStyle=dark?"#ffffff":"#121014";fit(v.t[lang],700,H*.36);g.fillText(v.t[lang],x,H*.5);
  g.fillStyle=dark?"rgba(255,255,255,.85)":"#24212a";fit(v.m[lang],650,H*.26);g.fillText(v.m[lang],x,H*.86);
  F.capTex.needsUpdate=true;
}
const framesAll=[];
function makeFrame(s,v,i){
  const vert=v.r!=="16/9",w=vert?.95:1.75,h=vert?w*16/9:w*9/16,pad=.045,depth=.07;
  const G=new THREE.Group(),F={s,v,G,w,h,set:i,video:null,vtex:null};
  // glass slab with real thickness
  const slabH=h+pad*2+CAP_H,shape=roundRect(w+pad*2,slabH,.06);
  const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:.012,bevelSize:.012,bevelSegments:3,curveSegments:6});
  geo.translate(0,-CAP_H/2,-depth/2);
  const glass=new THREE.MeshPhysicalMaterial({color:new THREE.Color(s.c.acc).lerp(new THREE.Color("#bfc7d2"),.55).convertSRGBToLinear(),
    roughness:.03,metalness:.1,clearcoat:1,clearcoatRoughness:.03,transparent:true,opacity:.07,envMapIntensity:1.3,side:THREE.DoubleSide,depthWrite:false});
  glass.userData.glass=true;
  const slab=new THREE.Mesh(geo,glass);slab.renderOrder=2;G.add(slab);
  const edges=new THREE.LineSegments(new THREE.EdgesGeometry(geo,30),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.14}));G.add(edges);
  // liquid glass face: tinted body, sheen and bright rim, sitting just in front of the slab
  { const pw=w+pad*2,ph=slabH;
    const lf=new THREE.Mesh(new THREE.PlaneGeometry(pw,ph),liquidMat(pw,ph,.075));
    lf.position.set(0,-CAP_H/2,depth/2+.006);lf.renderOrder=3;G.add(lf); }
  // screen (poster until the film is ready)
  F.posterCv=document.createElement("canvas");F.posterCv.width=vert?360:640;F.posterCv.height=vert?640:360;
  F.posterTex=new THREE.CanvasTexture(F.posterCv);F.posterTex.encoding=THREE.sRGBEncoding;drawPoster(F);
  F.screenMat=new THREE.MeshBasicMaterial({map:F.posterTex,fog:false});
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(w,h),F.screenMat);scr.position.z=depth/2+.016;G.add(scr);F.screen=scr;
  // caption plate under the screen
  F.capCv=document.createElement("canvas");F.capCv.width=1024;F.capCv.height=Math.round(1024*CAP_H/w);
  F.capTex=new THREE.CanvasTexture(F.capCv);F.capTex.encoding=THREE.sRGBEncoding;drawCaption(F);
  const cap=new THREE.Mesh(new THREE.PlaneGeometry(w,CAP_H),new THREE.MeshBasicMaterial({map:F.capTex,transparent:true,depthWrite:false,fog:false}));   // no haze on the caption: it stays crisp
  cap.position.set(0,-h/2-pad-CAP_H/2+.02,depth/2+.016);cap.renderOrder=4;G.add(cap);F.cap=cap;
  // thin light line in the brand colour along the bottom edge
  const ln=new THREE.Mesh(new THREE.BoxGeometry(w*.5,.012,.012),emissive(s.c.acc,3));ln.position.set(0,-h/2-pad-CAP_H-.005,depth/2);G.add(ln);
  if(v.poster){const im=new Image();im.onload=()=>{F.posterImg=im;drawPoster(F)};im.src=v.poster}
  G.traverse(o=>{o.userData.keep=true;o.userData.frame=F});
  addGlass(G,Math.max(w,h));framesAll.push(F);return F;
}
// films play on the glass only near the camera, and only from this site's own files (other hosts can't be drawn into 3D)
const sameOrigin=src=>{try{return new URL(src,location.href).origin===location.origin}catch(e){return false}};
let frameT=0;
function updateFrames(dt){
  frameT+=dt*.001;
  P3.panels.forEach(o=>{o.G.position.y=o.y0+Math.sin(frameT*.8+o.ph)*.03});
  const cp=camera.position;
  // only the films nearest the camera play (a studio can hold ten); the others keep their cover image
  const near=new Set();
  if(setIdx>=0){near.clear();SETS[setIdx].frames.filter(F=>F.v.src).map(F=>{F.G.getWorldPosition(tmp);return [tmp.distanceTo(cp),F]})
    .sort((a,b)=>a[0]-b[0]).slice(0,Q==="high"?4:2).forEach(x=>near.add(x[1]))}
  for(const F of framesAll){
    if(F.set<0){updateFeatureFilm(F,cp);continue}
    const S=SETS[F.set];if(Math.abs(cp.z-S.z)>24)continue;
    F.G.position.y=F.y0+Math.sin(frameT*.9+F.ph)*.035;F.G.rotation.y=F.r0+Math.sin(frameT*.6+F.ph)*.025;
    if(!F.v.src||!sameOrigin(F.v.src))continue;
    F.G.getWorldPosition(tmp);const d=tmp.distanceTo(cp);
    const want=F.set===setIdx&&d<8&&near.has(F)&&!(playerEl&&playerFrame===F)&&!document.hidden;
    if(want&&!F.video){
      const vd=document.createElement("video");Object.assign(vd,{src:F.v.src,muted:true,loop:true,playsInline:true,preload:"auto"});vd.setAttribute("playsinline","");
      F.video=vd;vd.addEventListener("playing",()=>{if(!F.vtex){F.vtex=new THREE.VideoTexture(vd);F.vtex.encoding=THREE.sRGBEncoding}F.screenMat.map=F.vtex;F.screenMat.needsUpdate=true},{once:true});
      vd.addEventListener("error",()=>{F.v._bad=true});
    }
    if(F.video&&!F.v._bad){if(want&&F.video.paused)F.video.play().catch(()=>{});else if(!want&&!F.video.paused)F.video.pause()}
  }
}
/* your own two films as real glass frames: the logo film in Arta Studio (it rises into place once the camera
   has passed through the lobby logo, so the logo hides it like any solid object) and the Instagram film,
   big and floating at the end of the hall, with sound that rises as you walk up */
const FEATS3=[];
function buildFeatureFilms(){
  FEATS3.length=0;
  const mk=(f,c,appear,range)=>{if(!f||!f.src)return;
    const F=makeFrame({c,get theme(){return dark?"dark":"light"}},f,-1);Object.assign(F,{ph:Math.random()*6,r0:0,k:0,appear,range});F.base=V(0,0,0);
    // a warm glow around the frame, as in the reference renders
    F.G.updateMatrixWorld(true);const bb=new THREE.Box3().setFromObject(F.screen).union(new THREE.Box3().setFromObject(F.cap)),sz=bb.getSize(V(0,0,0)),ct=bb.getCenter(V(0,0,0));
    const gw=new THREE.Mesh(new THREE.PlaneGeometry(sz.x+.42,sz.y+.42),new THREE.MeshBasicMaterial({map:frameGlowTex,color:C(c.glow||"#ffd9a0"),transparent:true,opacity:.55,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));
    gw.position.set(ct.x,ct.y,bb.min.z-.02);gw.userData.keep=true;F.G.add(gw);
    scene.add(F.G);FEATS3.push(F)};
  mk(FEATURES.logoAd,{bg:"#141414",bg2:"#2a2a2a",ink:"#1d1a17",acc:"#ffc978"},cp=>clamp((-6.6-cp.z)/2.6,0,1),14);
  mk(FEATURES.instagramAd,{bg:"#1a1024",bg2:"#3a1a3a",ink:"#1d1a17",acc:"#e1306c"},()=>1,24);
  layoutFeatureFilms();
}
function layoutFeatureFilms(){
  const P=portrait();
  for(const F of FEATS3){
    if(F.v===FEATURES.logoAd){F.base.set(0,2.15,P?-12.6:-15);F.sc=P?1:1.3}
    else{F.base.set(0,P?3.9:3.55,LED_Z);F.sc=P?1.8:2.35}
    F.y0=F.base.y;F.G.position.copy(F.base);F.G.scale.setScalar(F.sc);
  }
}
let sndA=null;
function updateFeatureFilm(F,cp){
  const k=F.appear(cp);F.k+=(k-F.k)*.12;const e=F.k*F.k*(3-2*F.k);
  F.G.visible=e>.01;F.G.scale.setScalar(F.sc*(.6+.4*e));
  F.G.position.y=F.y0-(1-e)*.8+Math.sin(frameT*.9+F.ph)*.035;F.G.rotation.y=Math.sin(frameT*.6+F.ph)*.025;
  const sound=!!F.v.sound;let showHint=false;
  if(F.G.visible){
    F.G.getWorldPosition(tmp);const d=tmp.distanceTo(cp);
    const want=mode==="hall"&&d<F.range&&e>.5&&!playerEl&&!document.hidden;
    if(want&&!F.video){
      const vd=document.createElement("video");Object.assign(vd,{src:F.v.src,muted:true,loop:true,playsInline:true,preload:"auto"});vd.setAttribute("playsinline","");
      F.video=vd;vd.addEventListener("playing",()=>{if(!F.vtex){F.vtex=new THREE.VideoTexture(vd);F.vtex.encoding=THREE.sRGBEncoding}F.screenMat.map=F.vtex;F.screenMat.needsUpdate=true},{once:true});
      vd.addEventListener("error",()=>{F.v._bad=true});
    }
    const v=F.video;
    if(v&&!F.v._bad){
      if(want){
        if(v.paused){v.muted=!(sound&&canSound());if(!v.muted)v.volume=0;v.play().catch(()=>{v.muted=true;v.play().catch(()=>{})})}
        if(sound&&v.muted&&canSound())v.muted=false;
        // the sound rises as you walk up to the screen
        if(sound&&!v.muted){const tv=clamp((F.range-d)/(F.range*.45),0,1);v.volume=clamp(v.volume+(tv-v.volume)*.08,0,1)}
        showHint=sound&&v.muted;
      }else if(!v.paused){if(sound&&!v.muted&&v.volume>.03&&!playerEl)v.volume=clamp(v.volume*.85,0,1);else v.pause()}
    }
  }
  if(sound&&sndA)sndA.e.firstChild.hidden=!showHint;
}
function pickFeatureFilm(x,y){
  if(mode!=="hall")return null;
  ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);
  // only the picture and its caption count, not the glass around it
  for(const F of FEATS3){if(!F.G.visible)continue;const h=ray.intersectObjects([F.screen,F.cap],false)[0];if(h&&h.distance<F.range)return F}
  return null;
}
function refreshCaptions(){framesAll.forEach(drawCaption);signTex.forEach(t=>t.userData.redraw())}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(refreshCaptions);
// tap / click on a frame
const ray=new THREE.Raycaster(),ndc=new THREE.Vector2();
function pickFrame(x,y){
  if(setIdx<0)return null;
  ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);
  const hit=ray.intersectObjects(SETS[setIdx].pick,false)[0];return hit?hit.object.userData.frame:null;
}
function frameRect(F){
  const xs=[],ys=[];F.screen.updateMatrixWorld();
  for(const [a,b] of [[-1,-1],[1,-1],[1,1],[-1,1]]){tmp.set(a*F.w/2,b*F.h/2,0).applyMatrix4(F.screen.matrixWorld).project(camera);xs.push((tmp.x*.5+.5)*innerWidth);ys.push((-tmp.y*.5+.5)*innerHeight)}
  const l=Math.min(...xs),t=Math.min(...ys);return {left:l,top:t,width:Math.max(...xs)-l,height:Math.max(...ys)-t};
}
let playerFrame=null;
function pickSign(x,y){ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);const h=ray.intersectObjects(hallPick,false)[0];return h&&h.distance<26?h.object.userData.enter:-1}
canvas.addEventListener("click",e=>{
  if(dragged||playerEl)return;
  if(mode==="hall"){const ce=pickEnd(e.clientX,e.clientY);if(ce){window.open(ce.link,"_blank","noopener");return}
    const pi=pickPanel(e.clientX,e.clientY);if(pi>=0){openSheet(T().panels[pi].id);return}}
  const F=pickFrame(e.clientX,e.clientY)||pickFeatureFilm(e.clientX,e.clientY);
  if(F&&mode==="set"){const S=SETS[setIdx],j=S.frames.indexOf(F);F.screen.getWorldPosition(tmp);
    // a film further away: the camera flies over to it first; close up, a tap opens it
    if(j>=0&&(j!==curFilm(S)||tmp.distanceTo(camera.position)>2.8)){goFilm(j);return}}
  if(F){playerFrame=F;openPlayer(F.v,()=>frameRect(F),F.video?F.video.currentTime:0);return}
  const i=pickSign(e.clientX,e.clientY);if(i>=0&&i!==setIdx)enterSet(i);
});
canvas.addEventListener("pointermove",e=>{if(e.pointerType==="mouse")canvas.style.cursor=pickEnd(e.clientX,e.clientY)||pickFrame(e.clientX,e.clientY)||pickFeatureFilm(e.clientX,e.clientY)||pickSign(e.clientX,e.clientY)>=0||(mode==="hall"&&pickPanel(e.clientX,e.clientY)>=0)?"pointer":""},{passive:true});

/* ---------- Arta Studio panels and floating titles as real 3D objects ----------
   They live in the scene, so the lobby logo (or anything else) can stand in front of them. */
const OCCLUDERS=[];
const P3={panels:[],titles:[],pick:[]};
const inkCol=()=>dark?{t:"#F2EEE7",m:"#A49FAA",a:"#E0BF7A"}:{t:"#16131A",m:"#2f2b33",a:"#8F6A2A"};
// text on the glass: black on the milky glass of light mode, white on the smoky glass of dark mode
const glassInk=()=>dark?{t:"#ffffff",m:"rgba(255,255,255,.88)",a:"#f0cf8a"}:{t:"#121014",m:"#24212a",a:"#8F6A2A"};
function panelTex(w,h,draw){
  const cv=document.createElement("canvas");cv.width=w;cv.height=h;
  const t=new THREE.CanvasTexture(cv);t.encoding=THREE.sRGBEncoding;t.anisotropy=4;
  t.userData=t.userData||{};t.userData.redraw=()=>{const g=cv.getContext("2d");g.clearRect(0,0,w,h);draw(g,w,h);t.needsUpdate=true};
  return t;
}
function glassSlab(w,h){
  const geo=new THREE.ExtrudeGeometry(roundRect(w,h,.06),{depth:.05,bevelEnabled:true,bevelThickness:.01,bevelSize:.01,bevelSegments:3,curveSegments:6});geo.translate(0,0,-.025);
  const m=new THREE.MeshPhysicalMaterial({color:C("#cfd4dc"),roughness:.05,metalness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:true,opacity:.16,envMapIntensity:1.2,side:THREE.DoubleSide,depthWrite:false});
  m.userData.glass=true;const slab=new THREE.Mesh(geo,m);slab.renderOrder=2;
  const edges=new THREE.LineSegments(new THREE.EdgesGeometry(geo,30),new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.35}));
  const g=new THREE.Group();g.add(slab,edges);return g;
}
// iOS-style liquid glass drawn into a canvas: clear tinted body, top sheen, a bright specular rim
// and a faint rainbow edge where the "glass" bends the light
/* ---------- real liquid glass (like iOS 26) ----------
   Each frame the scene is drawn once without the glass into a small mipmapped texture. Glass surfaces sample
   it at their own screen position: clear in the middle, bending the scene in like a lens toward the rim,
   with a little colour fringing, a bright specular edge and a soft frost. Nothing is painted on, so the glass
   always shows what is really behind it, in light and dark mode alike. */
const GLASS={res:new THREE.Vector2(1,1),groups:[],dark:{value:1},rt:null,tick:0,fr:new THREE.Frustum(),pm:new THREE.Matrix4(),sph:new THREE.Sphere()};
{ const sz=Q==="high"?1024:512,hf=renderer.capabilities.isWebGL2&&!!renderer.extensions.get("EXT_color_buffer_float");
  GLASS.rt=new THREE.WebGLRenderTarget(sz,sz,{minFilter:THREE.LinearMipmapLinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,type:hf?THREE.HalfFloatType:THREE.UnsignedByteType,generateMipmaps:true}); }
const GLASS_VS=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const GLASS_FS=`uniform sampler2D tBack,tText;uniform vec2 uRes,uSize;uniform float uRad,uHasText,uDark,uOpacity;varying vec2 vUv;
float sdRR(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
void main(){
  vec2 hb=uSize*.5,p=(vUv-.5)*uSize;
  float d=sdRR(p,hb,uRad),aa=max(fwidth(d),1e-5),mask=1.-smoothstep(-aa,aa,d);
  if(mask<.002)discard;
  float inside=max(-d,0.),bez=max(min(uRad*1.25,min(hb.x,hb.y)*.6),.025);
  vec2 g=vec2(sdRR(p+vec2(.002,0.),hb,uRad)-sdRR(p-vec2(.002,0.),hb,uRad),sdRR(p+vec2(0.,.002),hb,uRad)-sdRR(p-vec2(0.,.002),hb,uRad));
  vec2 n=g/max(length(g),1e-6);
  float ppm=1./max(length(fwidth(p))*.7071,1e-6);   // screen pixels per metre on this surface
  float e=1.-smoothstep(0.,bez,inside),bend=e*e*(3.-2.*e);
  // lens: toward the rim the glass pulls in the scene from just beyond its edge
  vec2 suv=gl_FragCoord.xy/uRes,off=n*bend*bez*1.15*ppm/uRes;
  float lod=1.7+bend*1.8;   // soft frost, so text on the glass stays easy to read
  vec3 col=vec3(texture2D(tBack,suv+off*1.1,lod).r,texture2D(tBack,suv+off,lod).g,texture2D(tBack,suv+off*.9,lod).b);
  col=uDark>.5?col*.74+.008:col*.9+.11;   // dark mode: smoky glass; light mode: milky glass, so black text reads on it
  // specular rim: thin and bright where the light (top left) catches it, a weaker kick on the opposite edge
  vec2 L=normalize(vec2(-.55,.85));float ld=dot(n,L);
  float rim=1.-smoothstep(0.,1.4/ppm+.0025,inside);
  col+=rim*(.16+.85*pow(max(ld,0.),1.6)+.4*pow(max(-ld,0.),2.));
  col+=exp(-inside/(bez*.45))*.1*max(ld,0.);
  if(uHasText>.5){vec4 t=texture2D(tText,vUv);col=mix(col,pow(t.rgb,vec3(2.2)),t.a);}
  gl_FragColor=vec4(col,mask*uOpacity);
  #include <encodings_fragment>
}`;
function liquidMat(w,h,r,textTex){
  const m=new THREE.ShaderMaterial({uniforms:{tBack:{value:GLASS.rt.texture},tText:{value:textTex||null},uHasText:{value:textTex?1:0},uRes:{value:GLASS.res},
    uSize:{value:new THREE.Vector2(w,h)},uRad:{value:r},uDark:GLASS.dark,uOpacity:{value:1}},vertexShader:GLASS_VS,fragmentShader:GLASS_FS,
    transparent:true,depthWrite:false,extensions:{derivatives:true}});
  m.userData.glass=true;return m;
}
// a glass object (panel or film frame) is left out of the backdrop it samples
function addGlass(G,r=2){GLASS.groups.push({G,r})}
function renderBackdrop(){
  renderer.getDrawingBufferSize(GLASS.res);
  if(Q!=="high"&&(GLASS.tick++&1))return;   // phones refresh the backdrop every other frame
  GLASS.pm.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);GLASS.fr.setFromProjectionMatrix(GLASS.pm);
  const vis=[];
  for(const o of GLASS.groups){if(!o.G.visible||!o.G.parent)continue;o.G.getWorldPosition(GLASS.sph.center);GLASS.sph.radius=o.r*o.G.scale.x;
    if(GLASS.sph.center.distanceTo(camera.position)<40&&GLASS.fr.intersectsSphere(GLASS.sph))vis.push(o.G)}
  if(!vis.length)return;
  const hidden=[];for(const o of GLASS.groups)if(o.G.visible){o.G.visible=false;hidden.push(o.G)}
  const rf=floorMirror,rfv=rf&&rf.visible;if(rf)rf.visible=false;
  renderer.setRenderTarget(GLASS.rt);renderer.render(scene,camera);renderer.setRenderTarget(null);
  if(rf)rf.visible=rfv;hidden.forEach(G=>G.visible=true);
}
const PXM=620;  // canvas pixels per metre for floating panels
function liquidPanel(layout){
  // layout(g, measureOnly) returns {w,h} in px and draws when measureOnly is false
  const cv=document.createElement("canvas");cv.width=cv.height=8;
  const tex=new THREE.CanvasTexture(cv);tex.encoding=THREE.sRGBEncoding;tex.anisotropy=4;
  const face=new THREE.Mesh(new THREE.PlaneGeometry(1,1),liquidMat(1,1,.1,tex));face.renderOrder=3;
  const G=new THREE.Group();G.add(face);addGlass(G);
  let slab=null;
  const redraw=()=>{
    const m=layout(cv.getContext("2d"),true),W=Math.ceil(m.w),H=Math.ceil(m.h);
    if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;tex.dispose()}
    const g=cv.getContext("2d");g.clearRect(0,0,W,H);layout(g,false);tex.needsUpdate=true;
    const wm=W/PXM,hm=H/PXM;face.geometry.dispose();face.geometry=new THREE.PlaneGeometry(wm,hm);face.position.z=.03;
    face.material.uniforms.uSize.value.set(wm,hm);face.material.uniforms.uRad.value=Math.min(hm*.32,.1);
    // a very faint slab behind gives the glass some thickness when seen at an angle
    if(slab){G.remove(slab);slab.geometry.dispose()}
    const geo=new THREE.ExtrudeGeometry(roundRect(wm,hm,Math.min(hm*.32,.1)),{depth:.04,bevelEnabled:true,bevelThickness:.008,bevelSize:.008,bevelSegments:2,curveSegments:6});geo.translate(0,0,-.02);
    slab=new THREE.Mesh(geo,LG_SLAB);slab.renderOrder=2;G.add(slab);
    G.traverse(o=>{o.userData.keep=true});
  };
  return {G,face,tex:{userData:{redraw}},redraw};
}
const LG_SLAB=new THREE.MeshPhysicalMaterial({color:C("#dfe6f0"),roughness:.03,metalness:.1,clearcoat:1,clearcoatRoughness:.03,transparent:true,opacity:.07,envMapIntensity:1.4,side:THREE.DoubleSide,depthWrite:false});
LG_SLAB.userData.glass=true;
const textShadow=(g,on)=>{g.shadowColor=on?(dark?"rgba(0,0,0,.45)":"rgba(255,255,255,.6)"):"transparent";g.shadowBlur=on?10:0}
function buildPanels3D(){
  TX.en.panels.forEach((_,i)=>{
    const LP=liquidPanel((g,measure)=>{
      const p=T().panels[i],fa=lang==="fa",c=glassInk(),pad=46,op=T().open;
      const fK=`600 32px "Vazirmatn", sans-serif`,fT=fa?`800 64px "Vazirmatn", sans-serif`:`800 56px "Unbounded", "Vazirmatn", sans-serif`,fP=`400 32px "Vazirmatn", sans-serif`,fO=`600 30px "Vazirmatn", sans-serif`;
      g.font=fT;const wt=g.measureText(p.h).width;g.font=fP;const wp=g.measureText(p.p).width;
      const W=Math.max(wt,wp,300)+pad*2,H=pad*2+62+16+34+26+34;
      if(measure)return {w:W,h:H};
      if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign=fa?"right":"left";g.textBaseline="alphabetic";const x=fa?W-pad:pad;
      textShadow(g,true);
      g.fillStyle=c.t;g.font=fT;g.fillText(p.h,x,pad+56);
      g.fillStyle=c.m;g.font=fP;g.fillText(p.p,x,pad+62+16+30);
      g.fillStyle=c.t;g.font=fO;textShadow(g,false);
      const yy=H-pad-6,cx=fa?W-pad-17:pad+17;g.lineWidth=3;g.strokeStyle=c.t;g.beginPath();g.arc(cx,yy-10,17,0,Math.PI*2);g.stroke();
      g.fillRect(cx-8,yy-11.5,16,3);g.fillRect(cx-1.5,yy-18,3,16);g.fillText(op,fa?cx-30:cx+30,yy);
      return {w:W,h:H};
    });
    LP.face.userData.panel=i;P3.pick.push(LP.face);LP.redraw();
    scene.add(LP.G);P3.panels.push({G:LP.G,tex:LP.tex,ph:i*1.3});
  });
  const title=(draw,w,h,mw)=>{const tex=panelTex(w,h,draw),m=new THREE.Mesh(new THREE.PlaneGeometry(mw,mw*h/w),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false,fog:false}));
    m.userData.keep=true;scene.add(m);P3.titles.push({m,tex});return m};
  const heading=(k1,k2)=>(g,w,h)=>{const c=inkCol(),fa=lang==="fa",t=T();g.textAlign="center";g.textBaseline="middle";if("direction" in g)g.direction=fa?"rtl":"ltr";
    g.fillStyle=c.t;let f=150;const ff=()=>fa?`800 ${f}px "Vazirmatn", sans-serif`:`800 ${f}px "Unbounded", "Vazirmatn", sans-serif`;g.font=ff();
    if("letterSpacing" in g)g.letterSpacing=fa?"0px":(f*.12)+"px";while(g.measureText(t[k1]).width>w*.94&&f>40){f-=6;g.font=ff();if("letterSpacing" in g)g.letterSpacing=fa?"0px":(f*.12)+"px"}
    g.fillText(t[k1],w/2,h*.38);if("letterSpacing" in g)g.letterSpacing="0px";g.fillStyle=c.m;g.font=`400 58px "Vazirmatn", sans-serif`;g.fillText(t[k2],w/2,h*.8)};
  P3.gate=title(heading("arch","archSub"),2048,420,5.4);
  // the title hangs on a white banner, as in the reference renders: dark text on the dark ceiling could not be read
  { const bn=new THREE.Mesh(new THREE.PlaneGeometry(5.9,5.4*420/2048+.32),new THREE.MeshBasicMaterial({color:C("#f6f2ec"),fog:false}));bn.position.z=-.02;bn.userData.keep=true;P3.gate.add(bn);
    for(const x of [-2.6,2.6]){const w=stick(V(x,.72,-.02),V(x,2.6,-.02),.006,MAT.metal);w.userData.keep=true;P3.gate.add(w)} }
  // "The studios" heading in a liquid glass panel sized to its words
  const SP=liquidPanel((g,measure)=>{
    const t=T(),fa=lang==="fa",c=glassInk(),pad=56;
    const fT=fa?`800 92px "Vazirmatn", sans-serif`:`800 80px "Unbounded", "Vazirmatn", sans-serif`,fS=`400 36px "Vazirmatn", sans-serif`;
    g.font=fT;if("letterSpacing" in g)g.letterSpacing=fa?"0px":"8px";const wt=g.measureText(t.studios).width;g.font=fS;if("letterSpacing" in g)g.letterSpacing="0px";const ws=g.measureText(t.studiosSub).width;
    const W=Math.max(wt,ws)+pad*2.4,H=pad*2+88+20+40;if(measure)return {w:W,h:H};
    if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign="center";g.textBaseline="alphabetic";textShadow(g,true);
    g.fillStyle=c.t;g.font=fT;if("letterSpacing" in g)g.letterSpacing=fa?"0px":"8px";g.fillText(t.studios,W/2,pad+80);
    if("letterSpacing" in g)g.letterSpacing="0px";g.fillStyle=c.m;g.font=fS;g.fillText(t.studiosSub,W/2,pad+88+20+34);return {w:W,h:H};
  });
  SP.redraw();scene.add(SP.G);P3.titles.push({m:SP.G,tex:SP.tex});P3.studios=SP.G;
  buildEndPanel();
}
// positions depend on the screen shape; text depends on language and light mode
function layoutPanels3D(){
  const P=portrait(),CP=P?[[-.55,2.3,-14.2],[.55,1.3,-15.6],[-.55,2.3,-17.2],[.55,1.3,-18.6],[0,1.3,-20.4]]:[[-2.1,2.05,-14.2],[2.1,2.25,-15.4],[-2.3,1.35,-17.0],[2.25,1.45,-18.4],[0,1.4,-20.2]];
  P3.panels.forEach((o,i)=>{o.G.position.set(...CP[i]);o.y0=CP[i][1];o.G.rotation.y=-CP[i][0]*.12;o.G.scale.setScalar(P?.82:1)});
  P3.gate.position.set(0,5.6,-11);P3.gate.scale.setScalar(P?.82:1);
  P3.studios.position.set(0,P?2.2:2.35,-24.6);P3.studios.scale.setScalar(P?.8:1);
  layoutFeatureFilms();
  if(P3.end){if(P){P3.end.G.position.set(0,.95,LED_Z+1.4);P3.end.G.rotation.y=0;P3.end.G.scale.setScalar(1.22)}
    else{P3.end.G.position.set(3.6,1.8,LED_Z+.6);P3.end.G.rotation.y=-.32;P3.end.G.scale.setScalar(1.5)}}
}
/* the contact card at the end of the hall: the same 3D liquid glass as the Arta Studio panels, with tappable
   WhatsApp / Instagram / LinkedIn buttons drawn on it */
const ICON_IMG={};
function iconImg(k){
  if(ICON_IMG[k])return ICON_IMG[k];const im=new Image();ICON_IMG[k]=im;
  let svg=ICON[k].replace(/currentColor/g,"#ffffff");if(!/xmlns=/.test(svg))svg=svg.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ');
  im.onload=()=>{if(P3.end)P3.end.tex.userData.redraw()};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);return im;
}
function buildEndPanel(){
  const items=[["wa",CONTACT.whatsapp,["#1FA855"]],["ig",CONTACT.instagram,["#F5B041","#D6336C","#7B3FE4"]]];
  if(CONTACT.linkedin&&CONTACT.linkedin.link)items.push(["li",CONTACT.linkedin,["#0A66C2"]]);
  const rects=[];
  const LP=liquidPanel((g,measure)=>{
    const t=T(),fa=lang==="fa",c=glassInk(),pad=58,cw=470,chH=108,gap=22,W=pad*2+cw*2+gap;
    const fT=fa?`800 56px "Vazirmatn", sans-serif`:`800 48px "Unbounded", "Vazirmatn", sans-serif`;
    g.font=fT;const words=t.endH.split(" "),lines=[];let cur="";
    for(const w of words){const tr=cur?cur+" "+w:w;if(g.measureText(tr).width>W-pad*2&&cur){lines.push(cur);cur=w}else cur=tr}if(cur)lines.push(cur);
    const lh=fa?74:64,rowsN=Math.ceil(items.length/2),H=pad*2+lines.length*lh+34+rowsN*chH+(rowsN-1)*gap;
    if(measure)return {w:W,h:H};
    if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign="center";g.textBaseline="alphabetic";textShadow(g,true);
    g.fillStyle=c.t;g.font=fT;lines.forEach((l,k)=>g.fillText(l,W/2,pad+lh*.8+k*lh));
    textShadow(g,false);rects.length=0;
    let y=pad+lines.length*lh+34;
    items.forEach(([k,ct,cols],idx)=>{
      const row=Math.floor(idx/2),inRow=Math.min(2,items.length-row*2),col=idx%2;
      const rowW=inRow*cw+(inRow-1)*gap,x0=(W-rowW)/2+(fa?(inRow-1-col):col)*(cw+gap),yy=y+row*(chH+gap);
      rr(g,x0,yy,cw,chH,30);g.fillStyle=dark?"rgba(255,255,255,.12)":"rgba(255,255,255,.5)";g.fill();
      g.lineWidth=2;g.strokeStyle=dark?"rgba(255,255,255,.28)":"rgba(255,255,255,.9)";g.stroke();
      const bs=74,bx=fa?x0+cw-17-bs:x0+17,by=yy+(chH-bs)/2;rr(g,bx,by,bs,bs,22);
      if(cols.length>1){const gr=g.createLinearGradient(bx,by,bx+bs,by+bs);cols.forEach((cc,i)=>gr.addColorStop(i/(cols.length-1),cc));g.fillStyle=gr}else g.fillStyle=cols[0];g.fill();
      const im=iconImg(k);if(im.complete&&im.naturalWidth)g.drawImage(im,bx+bs*.22,by+bs*.22,bs*.56,bs*.56);
      const tx=fa?bx-20:bx+bs+20;g.textAlign=fa?"right":"left";
      g.fillStyle=c.m;g.font=`500 24px "Vazirmatn", sans-serif`;g.fillText(t[k],tx,yy+44);
      let f=31;g.font=`700 ${f}px "Vazirmatn", sans-serif`;while(g.measureText(ct.display).width>cw-bs-60&&f>18){f-=2;g.font=`700 ${f}px "Vazirmatn", sans-serif`}
      g.fillStyle=c.t;if("direction" in g)g.direction="ltr";g.fillText(ct.display,tx,yy+84);if("direction" in g)g.direction=fa?"rtl":"ltr";
      rects.push({x:x0,y:yy,w:cw,h:chH,link:ct.link});
    });
    return {w:W,h:H};
  });
  LP.redraw();scene.add(LP.G);
  P3.end={G:LP.G,face:LP.face,tex:LP.tex,rects,cv:LP.face.material.uniforms.tText.value.image};
  P3.titles.push({m:LP.G,tex:LP.tex});
}
function pickEnd(x,y){
  if(!P3.end||mode!=="hall")return null;ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);
  const h=ray.intersectObject(P3.end.face,false)[0];if(!h||h.distance>16||!h.uv)return null;
  const cv=P3.end.cv,px=h.uv.x*cv.width,py=(1-h.uv.y)*cv.height;
  return P3.end.rects.find(r=>px>=r.x&&px<=r.x+r.w&&py>=r.y&&py<=r.y+r.h)||null;
}
function redrawPanels3D(){P3.panels.forEach(o=>o.tex.userData.redraw());P3.titles.forEach(o=>o.tex.userData.redraw())}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(P3.panels.length)redrawPanels3D()});
function pickPanel(x,y){ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);const h=ray.intersectObjects(P3.pick,false)[0];return h&&h.distance<12?h.object.userData.panel:-1}
// HTML overlays left in the scene hide when something solid (the lobby logo) stands between them and the camera
const occRay=new THREE.Raycaster(),occDir=new THREE.Vector3();
function occluded(pos){
  if(!OCCLUDERS.length)return false;occDir.copy(pos).sub(camera.position);const d=occDir.length();occDir.normalize();
  occRay.set(camera.position,occDir);occRay.far=d;return occRay.intersectObjects(OCCLUDERS,true).length>0;
}

/* ---------- overlays anchored to 3D points ---------- */
const ovl=$("#ovl");
function anchor(html,pos,meters,opt={}){
  const e=el(`<div class="ov">${html}</div>`);ovl.appendChild(e);
  const a={e,pos,meters,zone:opt.zone||"hall",hideIn:opt.hideIn,far:opt.far||16,near:opt.near||1.1,w:0};anchors.push(a);return a;
}
function measure(){for(const a of anchors){a.e.style.transform="none";a.w=a.e.offsetWidth||1;a.h=a.e.offsetHeight||1}}
const tmp=new THREE.Vector3();
function updateAnchors(){
  const W=innerWidth,H=innerHeight,f=2*Math.tan(THREE.MathUtils.degToRad(camera.fov)/2);
  camera.updateMatrixWorld();
  const zoneNow="set"+setIdx;
  for(const a of anchors){
    let vis=(a.zone==="hall"||a.zone===zoneNow)&&a.hideIn!==setIdx&&!a.dead;
    if(vis){
      tmp.copy(a.pos).applyMatrix4(camera.matrixWorldInverse);
      const d=-tmp.z;
      if(d<.3)vis=false;
      else{
        const ppm=H/(f*d),s=Math.min(a.meters*ppm/a.w,2.4);
        tmp.copy(a.pos).project(camera);
        const x=(tmp.x*.5+.5)*W,y=(-tmp.y*.5+.5)*H;
        const o=clamp((a.far-d)/3,0,1)*clamp((d-a.near)/.9,0,1);
        if(o<.02||x<-a.w*s||x>W+a.w*s||y<-a.h*s||y>H+a.h*s||occluded(a.pos))vis=false;
        else{
          a.e.style.transform=`translate3d(${(x-a.w*s/2).toFixed(1)}px,${(y-a.h*s/2).toFixed(1)}px,0) scale(${s.toFixed(4)})`;
          a.e.style.opacity=o.toFixed(3);a.e.style.zIndex=Math.round(1000-d*10);
          a.e.style.pointerEvents=o>.5?"auto":"none";
        }
      }
    }
    a.e.style.visibility=vis?"visible":"hidden";
  }
}
function buildOverlays(){
  ovl.innerHTML="";anchors.length=0;
  const t=T(),P=innerWidth/innerHeight<.85;
  const chip=(cls,ic,small,big,ltr,href)=>`<${href?`a href="${href}" target="_blank" rel="noopener"`:"button"} class="glass chip ${cls}"><span class="ic ${ic.c}">${ic.h}</span><span><small>${small}</small><b class="${ltr?"ltr":""}">${big}</b></span></${href?"a":"button"}>`;
  const wa=chip("",{c:"wa",h:ICON.wa},t.wa,CONTACT.whatsapp.display,true,CONTACT.whatsapp.link);
  const ig=chip("",{c:"ig",h:ICON.ig},t.ig,CONTACT.instagram.display,true,CONTACT.instagram.link);
  const lg=chip("lang-chip",{c:"mono",h:lang==="en"?"فا":"EN"},t.otherSmall,t.other,false);
  const lt=chip("light-chip",{c:"mono",h:dark?ICON.sun:ICON.moon},t.lightsLabel,dark?t.toLight:t.toDark,false);
  const li=CONTACT.linkedin&&CONTACT.linkedin.link?chip("",{c:"li",h:ICON.li},t.li,CONTACT.linkedin.display,true,CONTACT.linkedin.link):"";
  // contact chips float in front of the main building, before you walk in
  if(P){
    anchor(wa,V(-.55,1.7,20),.98);anchor(ig,V(.55,1.7,20),.98);
    if(li)anchor(li,V(-.55,1.1,20),.98);
    anchor(lg,V(li?.55:0,li?1.1:.5,20),.98);
    anchor(`<div class="tagline">${t.line}</div>`,V(0,4.05,11.6),3.2,{far:24});
  }else{
    anchor(wa,V(-2.75,2.55,15),1.35);anchor(ig,V(-2.75,1.92,15),1.35);if(li)anchor(li,V(-2.75,1.29,15),1.35);
    anchor(lg,V(2.75,2.55,15),1.35);
    anchor(`<div class="tagline">${t.line}</div>`,V(0,4.05,11.6),4.4,{far:24});
  }
  // the Arta Studio panels and the two floating titles are 3D objects now (see buildPanels3D)
  if(P3.panels.length){layoutPanels3D();redrawPanels3D()}
  // contact card beside the floating Instagram film (below it on phones), never on top of the picture
  sndA=FEATURES.instagramAd&&FEATURES.instagramAd.src?anchor(`<span class="snd snd3" hidden>${ICON.mute}<span>${t.tapSound}</span></span>`,V(0,P?6.25:6.05,LED_Z+.2),P?1.5:1.3,{far:26}):null;
  ovl.querySelectorAll(".lang-chip").forEach(b=>b.addEventListener("click",toggleLang));
  ovl.querySelectorAll(".light-chip").forEach(b=>b.addEventListener("click",toggleLight));
  measure();
}

/* ---------- feature films that play on their own as you walk up ---------- */
let activated=false;
["pointerdown","keydown","touchend"].forEach(n=>addEventListener(n,()=>{activated=true},{capture:true,passive:true}));
// browsers only allow sound after the visitor has tapped, clicked or pressed a key on the page
const canSound=()=>navigator.userActivation?navigator.userActivation.hasBeenActive:activated;
/* ---------- post processing ---------- */
const FinalShader={
  uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.55},uGrain:{value:.012},uExp:{value:1}},
  vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime,uVig,uGrain,uExp;varying vec2 vUv;
    float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*uExp;
      c=clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);
      c=pow(c,vec3(1./2.2));
      float d=distance(vUv,vec2(.5));c*=mix(1.,smoothstep(.9,.28,d),uVig);
      c+=(h(gl_FragCoord.xy+fract(uTime)*97.)-.5)*uGrain;
      gl_FragColor=vec4(c,1.);}`
};
let composer=null,bloom=null,finalPass=null,useComposer=false;
function setupPost(on){
  useComposer=on&&!!THREE.EffectComposer;
  if(useComposer&&!composer){
    // the bloom chain renders into its own targets, which skip the canvas antialiasing; multisampled targets
    // (WebGL2) keep edges smooth, and half-float keeps dark gradients free of banding
    let rt;
    if(renderer.capabilities.isWebGL2&&THREE.WebGLMultisampleRenderTarget){
      const hf=!!renderer.extensions.get("EXT_color_buffer_float");
      rt=new THREE.WebGLMultisampleRenderTarget(innerWidth*DPR,innerHeight*DPR,{minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBAFormat,type:hf?THREE.HalfFloatType:THREE.UnsignedByteType});
      rt.samples=4;
    }
    composer=new THREE.EffectComposer(renderer,rt);composer.setPixelRatio(DPR);composer.setSize(innerWidth,innerHeight);
    composer.addPass(new THREE.RenderPass(scene,camera));
    bloom=new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth*(Q==="high"?.6:.4),innerHeight*(Q==="high"?.6:.4)),.8,.5,.75);composer.addPass(bloom);
    finalPass=new THREE.ShaderPass(FinalShader);composer.addPass(finalPass);
  }
  renderer.toneMapping=useComposer?THREE.NoToneMapping:THREE.ACESFilmicToneMapping;
  renderer.outputEncoding=useComposer?THREE.LinearEncoding:THREE.sRGBEncoding;
  scene.traverse(o=>{if(o.material)[].concat(o.material).forEach(m=>m.needsUpdate=true)});
}

/* ---------- spotlight pool ---------- */
const pool=[];
function setupPool(){
  const n=Q==="high"?6:4;
  for(let i=0;i<n;i++){
    const s=new THREE.SpotLight(0xffffff,0,26,.5,.5,1.4);
    if(i===0&&renderer.shadowMap.enabled){s.castShadow=true;s.shadow.mapSize.set(1024,1024);s.shadow.bias=-.0004;s.shadow.camera.near=.5;s.shadow.camera.far=26}
    scene.add(s,s.target);pool.push(s);
  }
}
let lightMul=1;
function updatePool(){
  const cp=camera.position;
  const sorted=slots.map(s=>({s,d:s.to.distanceToSquared(cp)})).sort((a,b)=>a.d-b.d);
  pool.forEach((L,i)=>{
    const it=sorted[i];if(!it){L.intensity=0;return}
    const s=it.s;L.position.copy(s.from);L.target.position.copy(s.to);L.color.copy(s.color);
    L.angle=s.angle;L.penumbra=s.pen;L.intensity=s.intensity*lightMul;
  });
}

/* ---------- theme ---------- */
function applyTheme(){
  document.documentElement.dataset.theme=dark?"dark":"light";
  GLASS.dark.value=dark?1:0;
  framesAll.forEach(drawCaption);
  const bg=dark?"#0a0807":"#b9ad9e";
  scene.background=C(bg);scene.fog.color=C(bg);scene.fog.density=dark?.024:.0026;
  MAT.floor.color=C(dark?"#0b0907":"#b3aea7");MAT.floor.roughness=dark?.3:.4;if(MAT.floor.transparent)MAT.floor.opacity=dark?.9:.6;
  MAT.wall.color=C(dark?"#1f1b18":"#d6ccbf");MAT.ceil.color=C(dark?"#0a0908":"#26241f");
  MAT.hallCyc.color=C(dark?"#1b1b1e":"#dcd8d2");MAT.plinth.color=C(dark?"#0c0c0d":"#dedad4");MAT.plinth.roughness=dark?.28:.7;MAT.plinth.metalness=dark?.2:0;
  MAT.facade.color=C(dark?"#8a7462":"#6a5646");MAT.ground.color=C(dark?"#0d0d0f":"#3e3b38");MAT.ground.roughness=.32;
  MAT.logo.color=C(dark?"#f1eee8":"#0a0a0b");if(MAT.halo){MAT.halo.userData.base=dark?.12:.12;MAT.halo.color=C(dark?"#ffffff":"#ffc978")}
  // light mode: a satin black logo with a faint warm glow, instead of flat matt black
  MAT.logo.roughness=dark?.32:.38;MAT.logo.metalness=dark?.08:0;MAT.logo.emissive=C("#000000");MAT.logo.emissiveIntensity=0;
  if(MAT.wordmark)MAT.wordmark.color=C(dark?"#f0eee8":"#000000");
  MAT.truss.color=C(dark?"#7c8087":"#4a4e55");
  // the ceiling work lights are switched off when the studio lights are on
  // the white pendant lamps glow warm, as in the reference renders
  MAT.space.emissive=C("#ffe2b8");MAT.space.emissiveIntensity=dark?.75:.85;
  hemi.intensity=dark?.24:.36;hemi.color=C(dark?"#ffe6c8":"#ffe9cc");hemi.groundColor=C(dark?"#2a1e14":"#5e4c3a");
  dir.intensity=dark?.06:.38;dir.color=C("#fff0da");
  ALLM.forEach(m=>{const metal=m.metalness>.5;m.envMapIntensity=dark?(metal?.5:.1):(metal?1:.55)});
  scene.traverse(o=>{if(o.material&&o.material.isMeshStandardMaterial&&!ALLM.includes(o.material)&&!o.material.userData.glass)o.material.envMapIntensity=dark?.1:.55});
  // the logo stands on a white plinth with its name in black
  ALLM.forEach(m=>{if(m.userData.lowEnv!=null)m.envMapIntensity=m.userData.lowEnv});
  MAT.plinth.envMapIntensity=dark?.06:.15;MAT.standBlack.envMapIntensity=dark?.1:.15;
  if(!dark)MAT.logo.envMapIntensity=.12;
  beams.forEach(b=>b.material.uniforms.uOpacity.value=dark?.22:.06);
  // name boards glow gently in the dark instead of dazzling (bright brand plates like Hamrahe Aval's)
  signMats.forEach(m=>m.color.setScalar(dark?.62:1));
  if(P3.panels.length)redrawPanels3D();
  MAT.dust.opacity=dark?.55:.12;
  lightMul=dark?.95:.5;
  if(bloom){bloom.strength=dark?.7:.5;bloom.threshold=dark?.8:1.3;bloom.radius=.55}
  if(finalPass){finalPass.uniforms.uVig.value=dark?.6:.5;finalPass.uniforms.uExp.value=dark?1.05:.96}
  renderer.toneMappingExposure=dark?1:.95;
  $("#lightBtn").innerHTML=(dark?ICON.sun:ICON.moon)+`<span>${dark?T().toLight:T().toDark}</span>`;
}
function toggleLight(){
  const f=$("#fade");f.style.opacity=.85;
  setTimeout(()=>{dark=!dark;try{localStorage.setItem("ans-theme",dark?"dark":"light")}catch(e){}themeChoice=dark?"dark":"light";applyTheme();buildOverlays();setTimeout(()=>f.style.opacity=0,60)},reduce?0:300);
}


/* ---------- camera: walk the hall, step into a studio only when asked ----------
   In the hall, scrolling walks forward and back past the studio doors. Near a studio a prompt
   offers to go in; tapping it (or the studio's signs) walks in. Inside, scrolling moves down the
   tunnel of films, past the brand wall and back out; scrolling back out of the start leaves too. */
let mode="hall",p=0,pTarget=0,vel=0,drag=null,px=0,py=0,tx=0,ty=0;
let setIdx=-1,sp=0,spTarget=0,lookYaw=0,lookPitch=0,nearIdx=-1;
const camPos=new THREE.Vector3(),camLook=new THREE.Vector3(),curPos=new THREE.Vector3(),curLook=new THREE.Vector3();
let PP0=-20.5,PP_END=1;
const portrait=()=>innerWidth/innerHeight<.85;
function hallPose(pp,pos,look){
  const z=.5-pp,out=clamp(-pp/18,0,1);  // outside, a touch of upward tilt so the sign over the door is in frame
  const lf=FEATS3[0]&&FEATS3[0].v===FEATURES.logoAd?FEATS3[0].base.z:-15,lk=clamp(1-Math.abs(z-(lf+3.4))/4.2,0,1),up=lk*lk*(3-2*lk);
  pos.set(Math.sin(pp*.08)*.25,1.65+up*.35,z);
  const end=clamp((pp-(PP_END-7))/7,0,1);
  look.set(Math.sin(pp*.08)*.15,(portrait()?1.75:1.45)+out*1.1+end*(portrait()?1.3:1)+up*.75,z-8);
}
const pose=fn=>{const a=V(0,0,0),b=V(0,0,0);fn(a,b);return {pos:a,look:b}};
function buildPath(){
  // phones start a little further back so the whole sign over the door fits the narrow screen
  PP0=portrait()?-24.5:-20.5;PP_END=.5-(LED_Z+8);
  SETS.forEach(S=>{
    const path=[];let u=0;const key=(a,b,len,ez=true)=>{path.push({u0:u,u1:u+len,a,b,ez});u+=len};
    S.ppA=.5-(S.z+3.2);S.ppD=.5-(S.z-2.6);
    const P=portrait(),n=S.lay.length;
    // standing across the aisle at eye level, looking at the door and its name board
    const Door=pose((a,b)=>{a.set(-S.side*(P?2.6:3.4),1.65,S.z);b.set(S.side*7.2,P?2.45:2.25,S.z)});
    const E=S.lay.map(L=>pose((a,b)=>{const dist=L.vert?(P?3.1:2.75):(P?3.4:2.3);a.copy(S.W(V(L.x*(P?.35:0),1.6,L.z+dist)));b.copy(S.W(V(L.x*(P?1:.6),P?1.5:1.43,L.z)))}));
    key(Door,Door,.6);S.u={in:u};
    if(n>4){
      // many films: the camera stops close in front of each one in turn (row by row, snaking left and right)
      // bigger frames (fewer columns) are seen from a little further back, but always just behind the previous row
      const dd=Math.min((P?1.62:1.55)*S.lay[0].sc/.58,S.DZ-.1);
      const C=S.lay.map(L=>pose((a,b)=>{a.copy(S.W(V(L.x*.7,L.y+.02,L.z+dd)));b.copy(S.W(V(L.x,L.y-(P?.2:.17),L.z)))}));
      S.u.stop=[];
      key(Door,C[0],5);S.u.stop.push(u+.45);key(C[0],C[0],.9);
      for(let j=1;j<n;j++){key(C[j-1],C[j],1.5);S.u.stop.push(u+.45);key(C[j],C[j],.9)}
      key(C[n-1],C[n-1],.4);
    }else{
      S.u.stop=[];
      key(Door,E[0],5);S.u.stop.push(u);
      for(let j=1;j<n;j++){key(E[j-1],E[j],3.4,false);S.u.stop.push(u+.6);key(E[j],E[j],1.2)}
      key(E[n-1],E[n-1],.8);
    }
    S.path=path;S.len=u;
  });
}
function poseIn(S,u,pos,look){
  const P=S.path;u=clamp(u,0,S.len);
  let lo=0,hi=P.length-1;while(lo<hi){const m=(lo+hi)>>1;if(P[m].u1<u)lo=m+1;else hi=m}
  const sg=P[lo],t=sg.u1>sg.u0?clamp((u-sg.u0)/(sg.u1-sg.u0),0,1):1,e=sg.ez?t*t*(3-2*t):t;
  pos.lerpVectors(sg.a.pos,sg.b.pos,e);look.lerpVectors(sg.a.look,sg.b.look,e);
}
let jumping=false;
function fadeJump(fn){
  if(reduce){fn();snapCam=true;return}
  if(jumping)return;jumping=true;const f=$("#fade");f.style.opacity=1;
  setTimeout(()=>{fn();snapCam=true;setTimeout(()=>{f.style.opacity=0;jumping=false},90)},360);
}
let snapCam=true;
function goTo(v){v=clamp(v,PP0,PP_END);vel=0;
  const move=()=>{leaveSet();p=pTarget=v};
  if(mode==="set"||Math.abs(v-p)>30)fadeJump(move);else{leaveSet();pTarget=v}}
function leaveSet(){if(mode!=="set")return;mode="hall";setIdx=-1;sp=spTarget=0;$("#shud").classList.remove("show")}
function enterSet(i){
  const S=SETS[i];if(mode==="set"&&setIdx===i)return;vel=0;lookYaw=lookPitch=0;
  const go=()=>{mode="set";setIdx=i;p=pTarget=S.ppA;sp=spTarget=0;showSetHud(S)};
  // next to the door: turn and walk in; from further away fade over to the door first
  if(mode==="hall"&&Math.abs(p-S.ppA)<10){go();sp=0}else fadeJump(go);
}
function exitSet(){if(mode!=="set")return;const S=SETS[setIdx];fadeJump(()=>{leaveSet();p=pTarget=S.ppA;lookYaw=lookPitch=0})}
function switchSet(d){if(setIdx<0)return;enterSet((setIdx+d+SETS.length)%SETS.length)}
function showSetHud(S){
  const t=T();$("#stitle").textContent=S.s.name[lang];$("#back").textContent=(lang==="fa"?"→ ":"← ")+t.back;
  $("#sprev").textContent=t.prev;$("#snext").textContent=t.next;$("#stip").textContent=t.rhint;$("#shud").classList.add("show");
  $("#fprev").setAttribute("aria-label",t.prevFilm);$("#fnext").setAttribute("aria-label",t.nextFilm);lastCount="";hintOn=null;
}
$("#back").onclick=exitSet;$("#sprev").onclick=()=>switchSet(-1);$("#snext").onclick=()=>switchSet(1);
$("#enterBtn").onclick=()=>{if(nearIdx>=0)enterSet(nearIdx)};
// look up / down buttons on touch screens (hold to keep tilting, double-tap the screen area between to reset)
for(const [id,d] of [["#lookUp",1],["#lookDown",-1]]){let iv=null;const b=$(id);if(!b)continue;
  const stop=()=>{clearInterval(iv);iv=null};
  b.addEventListener("pointerdown",e=>{e.preventDefault();lookPitch=clamp(lookPitch+d*.06,-.55,.55);stop();iv=setInterval(()=>{lookPitch=clamp(lookPitch+d*.03,-.55,.55)},40)});
  ["pointerup","pointerleave","pointercancel"].forEach(n=>b.addEventListener(n,stop));}
$("#lookReset")&&($("#lookReset").onclick=()=>{lookPitch=lookYaw=0});

function moveBy(d){
  if(mode==="set"){
    const S=SETS[setIdx];spTarget+=d;
    // scrolling back past the door, or on past the end, steps back out into the hall
    if(spTarget<-.6){leaveSet();p=pTarget=S.ppA;vel=0}
    else spTarget=Math.min(spTarget,S.len);
    return;
  }
  pTarget=clamp(pTarget+d,PP0,PP_END);
}
// while a film is open, scrolling back closes it; the short cooldown stops the same gesture from also moving the camera
let playerShutAt=0;
const backGesture=()=>{if(playerEl){closePlayer();playerShutAt=performance.now()}};
addEventListener("wheel",e=>{
  if(e.target.closest(".sheet"))return;e.preventDefault();
  if(playerEl){if(e.deltaY<-4)backGesture();return}
  // swallow the rest of the closing gesture, including trackpad momentum, until the wheel goes quiet
  if(performance.now()-playerShutAt<450){playerShutAt=performance.now();return}
  const m=e.deltaMode===1?40:e.deltaMode===2?innerHeight:1;vel=0;moveBy(e.deltaY*m*.02)},{passive:false});
let downXY=null,dragged=false;
addEventListener("pointerdown",e=>{
  downXY=[e.clientX,e.clientY];dragged=false;
  if(e.pointerType==="mouse"||e.target.closest(".hud,.map,.veil,.shud .top,.shud .bot,.player"))return;
  drag={last:e.clientY,lastX:e.clientX};vel=0;
},{passive:true});
addEventListener("pointermove",e=>{
  if(e.pointerType==="mouse"){px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5}
  if(downXY&&Math.hypot(e.clientX-downXY[0],e.clientY-downXY[1])>10)dragged=true;
  if(!drag)return;
  const dy=drag.last-e.clientY,dx=drag.lastX-e.clientX;drag.last=e.clientY;drag.lastX=e.clientX;
  if(Math.abs(dx)>Math.abs(dy)*1.2){lookYaw=clamp(lookYaw-dx*.004,-1,1);return}
  const d=dy*(innerWidth<640?.03:.022);
  moveBy(d);vel=vel*.5+d*.5;
},{passive:true});
addEventListener("pointerup",e=>{
  // swiping down on an open film closes it
  if(playerEl&&downXY&&e.clientY-downXY[1]>70&&Math.abs(e.clientY-downXY[1])>Math.abs(e.clientX-downXY[0]))backGesture();
  drag=null;downXY=null},{passive:true});
addEventListener("pointercancel",()=>{drag=null;vel=0;downXY=null},{passive:true});
addEventListener("click",e=>{if(dragged&&e.target.closest("#ovl")){e.preventDefault();e.stopPropagation();dragged=false}},true);
addEventListener("keydown",e=>{
  if(e.key==="Escape"){if(playerEl)return backGesture();if($("#veil").classList.contains("show"))return closeSheet();if(mode==="set")return exitSet()}
  if(playerEl){if(e.key==="ArrowUp"||e.key==="PageUp")backGesture();return}
  if($("#veil").classList.contains("show"))return;
  if(e.key==="ArrowDown"||e.key==="PageDown"||(e.key===" "&&!e.target.closest("button,a"))){moveBy(4);e.preventDefault()}
  if(e.key==="ArrowUp"||e.key==="PageUp"){moveBy(-4);e.preventDefault()}
  if(e.key==="Enter"&&mode==="hall"&&nearIdx>=0&&!e.target.closest("button,a"))enterSet(nearIdx);
  if(mode==="set"&&(e.key==="ArrowRight"||e.key==="ArrowLeft")){const S=SETS[setIdx],d=(e.key==="ArrowRight")!==(lang==="fa")?1:-1;goFilm(curFilm(S)+d);e.preventDefault()}
  if(e.key==="Home")goTo(PP0);if(e.key==="End")goTo(PP_END);
});

/* ---------- film by film inside a studio ---------- */
function curFilm(S){let b=0,bd=1e9;S.u.stop.forEach((u,j)=>{const d=Math.abs(u-sp);if(d<bd){bd=d;b=j}});return b}
function goFilm(j){if(mode!=="set")return;const S=SETS[setIdx];j=clamp(j,0,S.u.stop.length-1);spTarget=S.u.stop[j]}
$("#fprev").onclick=()=>{if(mode==="set")goFilm(curFilm(SETS[setIdx])-1)};
$("#fnext").onclick=()=>{if(mode==="set")goFilm(curFilm(SETS[setIdx])+1)};
const faNum=n=>lang==="fa"?n.toLocaleString("fa"):String(n);
let lastCount="";
function updateFilmHud(){
  if(mode!=="set")return;const S=SETS[setIdx],n=S.frames.length,c=curFilm(S);
  const txt=`${faNum(c+1)} / ${faNum(n)}`;if(txt!==lastCount){lastCount=txt;$("#fcount").textContent=txt}
  $("#fnav").hidden=n<2;
}
// a short hint whenever the camera is close to a film: tapping it opens the film full screen
const coarse=matchMedia("(pointer:coarse)").matches;
let hintOn=false;
function updatePlayHint(){
  let on=false;const cp=camera.position;
  if(!playerEl&&!jumping&&!$("#veil").classList.contains("show")){
    if(mode==="set"){const S=SETS[setIdx],F=S.frames[curFilm(S)];if(F&&F.v.src){F.screen.getWorldPosition(tmp);on=tmp.distanceTo(cp)<3.3&&Math.abs(spTarget-sp)<.6}}
    else for(const F of FEATS3){if(!F.G.visible||F.k<.8)continue;F.G.getWorldPosition(tmp);if(cp.z>tmp.z+.4&&tmp.distanceTo(cp)<(F.v===FEATURES.instagramAd?11:6.5))on=true}
  }
  if(on!==hintOn){hintOn=on;const h=$("#playHint");h.querySelector("span").textContent=T()[coarse?"playTap":"playClick"];h.classList.toggle("show",on)}
}

// near a studio door in the hall, offer to step inside
function updateNear(){
  let n=-1;
  // no studio button once you stand in front of the Instagram film at the end, so it never covers the film
  if(mode==="hall"&&!jumping&&curPos.z>LED_Z+9.5){const z=curPos.z;let best=99;SETS.forEach(S=>{const d=Math.abs(z-(S.z+1.2));if(d<4.2&&d<best){best=d;n=S.i}})}
  if(n!==nearIdx){nearIdx=n;const b=$("#enterBtn");
    if(n>=0){const S=SETS[n],fa=lang==="fa",arrow=S.side<0?"←":"→";b.innerHTML=fa?`<span>${arrow}</span> ورود به ${S.s.name.fa}`:`<span>${arrow}</span> Enter ${S.s.name.en}`;b.style.setProperty("--b",S.s.c.acc);b.classList.add("show")}
    else b.classList.remove("show")}
}

/* ---------- map ---------- */
let stops=[];
function buildMap(){
  const t=T();stops=[{l:t.stops.entrance,p:PP0},{l:t.stops.arta,p:9.5},{l:t.stops.hall,p:22.5}]
    .concat(SETS.map(S=>({l:S.s.name[lang],p:S.ppA,set:S.i}))).concat([{l:t.stops.end,p:PP_END}]);
  const m=$("#map");m.innerHTML="";
  stops.forEach((s,i)=>{const b=el(`<button aria-label="${s.l}"><i></i></button>`);b.onclick=()=>s.set!=null?enterSet(s.set):goTo(s.p);m.appendChild(b)});
  m.appendChild(el(`<span class="lbl" id="lbl"></span>`));
}
let lastStop=-1;
function updateMap(){
  let a=0;if(mode==="set")a=stops.findIndex(s=>s.set===setIdx);else stops.forEach((s,i)=>{if(p>=s.p-3)a=i});
  if(a!==lastStop){lastStop=a;$("#map").querySelectorAll("button").forEach((b,i)=>b.classList.toggle("on",i===a));$("#lbl").textContent=stops[a].l}
  $(".hud").style.opacity=mode==="hall"?1:0;$(".hud").style.pointerEvents=mode==="hall"?"auto":"none";
  $("#map").style.opacity=mode==="hall"?1:0;$("#map").style.pointerEvents=mode==="hall"?"auto":"none";
}

/* ---------- sheet & player ---------- */
let lastFocus=null,playerEl=null,playerRect=null;
function openSheet(id){const p=T().panels.find(x=>x.id===id);lastFocus=document.activeElement;
  $("#sheetBody").innerHTML=p.body;$("#veil").classList.add("show");setTimeout(()=>$("#sheetX").focus(),50)}
function closeSheet(){$("#veil").classList.remove("show");lastFocus&&lastFocus.focus&&lastFocus.focus()}
$("#sheetX").onclick=closeSheet;$("#veil").addEventListener("click",e=>{if(e.target.id==="veil")closeSheet()});
function openPlayer(v,getRect,startAt){
  if(playerEl)return;playerRect=getRect;const r=getRect();
  const pl=el(`<div class="player" role="dialog" aria-modal="true" aria-label="${v.t[lang]}"><button class="x" aria-label="${T().close}">✕</button><div class="ttl">${v.t[lang]}</div>
    ${v.src?`<video src="${v.src}" controls autoplay playsinline></video>`:`<div class="slot" style="--sa:#ffffff22;--sb:#111"><div><span class="play" style="margin:0 auto 18px">${ICON.play}</span>${T().soon}</div></div>`}</div>`);
  Object.assign(pl.style,{left:r.left+"px",top:r.top+"px",width:r.width+"px",height:r.height+"px"});
  document.body.appendChild(pl);playerEl=pl;pl.querySelector(".x").onclick=closePlayer;pl.getBoundingClientRect();
  const pv=pl.querySelector("video");if(pv){pv.muted=false;pv.volume=1;if(startAt>0)pv.addEventListener("loadedmetadata",()=>{pv.currentTime=startAt},{once:true})}
  setTimeout(()=>{pl.classList.add("full");Object.assign(pl.style,{left:"0px",top:"0px",width:innerWidth+"px",height:innerHeight+"px"});pl.querySelector(".x").focus()},20);
}
function closePlayer(){
  if(!playerEl)return;const pl=playerEl;playerEl=null;const v=pl.querySelector("video");if(v)v.pause();
  const r=playerRect();pl.classList.remove("full");playerFrame=null;
  Object.assign(pl.style,{left:r.left+"px",top:r.top+"px",width:Math.max(r.width,40)+"px",height:Math.max(r.height,40)+"px"});
  setTimeout(()=>pl.remove(),reduce?0:560);
}

/* ---------- language ---------- */
function applyLang(){
  hintOn=null;lastCount="";
  const t=T();document.documentElement.lang=lang;document.documentElement.dir=t.dir;
  $("#langBtn").textContent=t.other;document.title=lang==="fa"?"استودیو آرتا نوری":"ARTA NOORI STUDIO";
  $("#hint").innerHTML=(TOUCH?t.swipe:t.scroll)+"<i></i>";$("#loadTxt").textContent=t.loading;
  t.lightsLabel=lang==="fa"?"نور استودیو":"Studio lights";
  buildOverlays();buildMap();lastStop=-1;nearIdx=-2;applyTheme();refreshCaptions();if(mode==="set")showSetHud(SETS[setIdx]);
}
function toggleLang(){lang=lang==="en"?"fa":"en";try{localStorage.setItem("ans-lang",lang)}catch(e){}applyLang()}
$("#langBtn").onclick=toggleLang;$("#lightBtn").onclick=toggleLight;
$("#home").onclick=()=>goTo(0);

/* ---------- resize ---------- */
let lw=innerWidth,lh=innerHeight,rzT;
function resize(){
  camera.aspect=innerWidth/innerHeight;camera.fov=camera.aspect<.85?64:camera.aspect<1.25?56:48;camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight,false);if(composer){composer.setSize(innerWidth,innerHeight)}
}
addEventListener("resize",()=>{resize();clearTimeout(rzT);rzT=setTimeout(()=>{
  const portraitChanged=(lw/lh<.85)!==(innerWidth/innerHeight<.85);
  if(portraitChanged)buildPath();
  if(Math.abs(innerWidth-lw)>40||portraitChanged){lw=innerWidth;lh=innerHeight;buildOverlays();buildMap();lastStop=-1}else measure();
},180)});

/* ---------- main loop ---------- */
let frames=0,acc=0,last=performance.now(),started=false;
function frame(now){
  const dt=Math.max(0,Math.min(now-last,100));last=now;
  // smoothing tuned for 60fps, scaled by real frame time so motion feels the same on 30, 60 and 120Hz screens
  const f=dt/16.667,sm=k=>1-Math.pow(1-k,f);
  if(!drag&&Math.abs(vel)>.002&&!reduce){moveBy(vel*f);vel*=Math.pow(.92,f)}else if(!drag)vel=0;
  tx+=(px*.6-tx)*sm(.05);ty+=(-py*.5-ty)*sm(.05);
  p+=(pTarget-p)*(reduce?1:sm(.075));
  if(mode==="set"){sp+=(spTarget-sp)*(reduce?1:sm(.075));poseIn(SETS[setIdx],sp,camPos,camLook)}else hallPose(p,camPos,camLook);
  // the camera glides between poses, so stepping into or out of a studio never jumps
  if(snapCam){curPos.copy(camPos);curLook.copy(camLook);snapCam=false}
  else{curPos.lerp(camPos,reduce?1:sm(.14));curLook.lerp(camLook,reduce?1:sm(.14))}
  camera.position.copy(curPos);camera.lookAt(curLook);
  // gentle look-around: follows the mouse, or the visitor's swipes and look buttons on touch screens
  camera.rotateY(-tx*.14+lookYaw);camera.rotateX(ty*.06+lookPitch);
  updateNear();
  // fly through the lobby logo: it melts away as the camera reaches it and comes back behind
  { const d=Math.hypot(curPos.z+6.4,curPos.x*.5),o=clamp((d-.5)/2.4,0,1);
    MAT.logo.transparent=o<1;MAT.logo.opacity=o;MAT.logo.depthWrite=o>.98;if(MAT.wordmark)MAT.wordmark.opacity=o;
    if(MAT.halo)MAT.halo.opacity=(MAT.halo.userData.base||.5)*o; }
  updatePool();
  if(dust)dust.rotation.y=Math.sin(now*.00005)*.02,dust.position.y=Math.sin(now*.0002)*.08;
  if(finalPass)finalPass.uniforms.uTime.value=(now*.001)%100;
  renderBackdrop();
  if(useComposer)composer.render();else renderer.render(scene,camera);
  updateAnchors();updateMap();updateFrames(dt);updateFilmHud();updatePlayHint();
  $("#hint").style.opacity=p<PP0+1.5&&mode==="hall"?1:0;
  if(!started){started=true;setTimeout(()=>$("#loader").classList.add("done"),350)}
  // automatic quality: drop expensive effects if the device struggles
  frames++;if(frames>40&&frames<160){acc+=dt}
  if(frames===160){const avg=acc/120;
    if(avg>30&&useComposer){setupPost(false);applyTheme()}
    if(avg>30&&renderer.shadowMap.enabled){renderer.shadowMap.enabled=false;pool[0].castShadow=false;scene.traverse(o=>{if(o.material)[].concat(o.material).forEach(m=>m.needsUpdate=true)})}
    if(avg>40&&DPR>1){DPR=Math.max(1,DPR-.5);renderer.setPixelRatio(DPR);if(composer){composer.setPixelRatio(DPR);composer.setSize(innerWidth,innerHeight)}resize()}
  }
  requestAnimationFrame(frame);
}

/* ---------- merge static meshes by material (hundreds of parts -> a few draw calls) ---------- */
function mergeStatic(){
  if(!THREE.BufferGeometryUtils)return;
  scene.updateMatrixWorld(true);
  const groups=new Map(),kill=[];
  scene.traverse(o=>{
    if(o.constructor!==THREE.Mesh||!o.material||o.material.isShaderMaterial||o.userData.keep)return;
    let g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();
    for(const k of Object.keys(g.attributes))if(!["position","normal","uv"].includes(k))g.deleteAttribute(k);
    if(!g.attributes.uv||!g.attributes.normal)return;
    g.applyMatrix4(o.matrixWorld);
    const key=o.material.uuid;if(!groups.has(key))groups.set(key,{m:o.material,list:[],cast:false});
    const G=groups.get(key);G.list.push(g);G.cast=G.cast||o.castShadow;kill.push(o);
  });
  kill.forEach(o=>o.parent&&o.parent.remove(o));
  groups.forEach(G=>{
    const merged=THREE.BufferGeometryUtils.mergeBufferGeometries(G.list,false);if(!merged)return;
    const m=new THREE.Mesh(merged,G.m);m.castShadow=G.cast&&renderer.shadowMap.enabled;m.receiveShadow=renderer.shadowMap.enabled;m.matrixAutoUpdate=false;scene.add(m);
  });
}

/* ---------- start ---------- */
build3D();buildPanels3D();buildFeatureFilms();layoutPanels3D();mergeStatic();setupPool();setupPost(Q==="high");resize();
buildPath();p=pTarget=PP0;hallPose(p,camPos,camLook);camera.position.copy(camPos);camera.lookAt(camLook);
let booted=false;function boot(){if(booted)return;booted=true;applyLang();requestAnimationFrame(frame)}
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(boot);setTimeout(boot,2500);
