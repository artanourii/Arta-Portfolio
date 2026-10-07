/* ARTA NOORI STUDIO: 3D engine. Content lives in js/content.js */
const ICON = {
  wa:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.3-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2L9 9.5z"/></svg>`,
  ig:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,
  play:`<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
};


Object.assign(TX.en,{fsOn:"Full screen",fsOff:"Exit full screen",a2hs:"For full screen, tap Share {s} and then “Add to Home Screen”",li:"LinkedIn",enterHint:"Tap to enter",tapSound:"Tap for sound",toLight:"Lights on",toDark:"Lights off",loading:"Lighting the set",
 noGL:"Your browser can't show the 3D studio, reach me on WhatsApp or Instagram @artanourii"});
Object.assign(TX.fa,{fsOn:"تمام‌صفحه",fsOff:"خروج از تمام‌صفحه",a2hs:"برای تمام‌صفحه، دکمه‌ی اشتراک‌گذاری {s} رو بزن و بعد «Add to Home Screen» رو انتخاب کن",li:"لینکدین",enterHint:"برای ورود بزن",tapSound:"برای صدا بزن",toLight:"روشن کردن نور",toDark:"خاموش کردن نور",loading:"در حال روشن کردن ست",
 noGL:"مرورگرت استودیوی سه‌بعدی رو نشون نمی‌ده، از واتس‌اپ یا اینستاگرام ‎@artanourii در تماس باش"});
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
// English by default; visitors whose phone or browser is set to Persian get the Persian site. A language chosen with
// the button is remembered and always wins
const sysLang=/^fa(-|$)/i.test((navigator.languages&&navigator.languages[0])||navigator.language||"")?"fa":"en";   // the device's main language
let lang=sysLang;try{lang=localStorage.getItem("ans-lang")||sysLang}catch(e){}
let themeChoice=null;try{themeChoice=localStorage.getItem("ans-theme")}catch(e){}
const sysDark=matchMedia("(prefers-color-scheme: dark)");
// computers and TVs open in the bright studio; phones and tablets follow the device's own light or dark setting.
// The visitor's own choice (the Lights button) is remembered and always wins
const HANDHELD=TOUCH&&Math.min(screen.width,screen.height)<1100;
let dark=themeChoice?themeChoice==="dark":HANDHELD&&sysDark.matches;
const T=()=>TX[lang];
function el(h){const t=document.createElement("template");t.innerHTML=h.trim();return t.content.firstElementChild}

if(!window.THREE||!(()=>{try{const c=document.createElement("canvas");return !!(c.getContext("webgl2")||c.getContext("webgl"))}catch(e){return false}})()){
  $("#fbTxt").textContent=T().noGL;$("#fallback").classList.add("show");$("#loader").classList.add("done");
  throw new Error("no webgl");
}

/* ---------- renderer & quality ---------- */
const phoneLike=()=>innerWidth<640;
const IOS=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
// tablets with room to spare (iPads, Android tablets with 6 GB or more) get the full studio with glow and floor reflections;
// phones keep the lighter pipeline at full sharpness: on iPhone the full one ran past Safari's graphics memory and the
// page stopped, and on Android it was slow
const GL2=(()=>{try{return !!document.createElement("canvas").getContext("webgl2")}catch(e){return false}})();
const TABLET=Math.min(screen.width,screen.height)>=744;
const STRONG=GL2&&TABLET&&(IOS||(navigator.deviceMemory||0)>=6);
let Q=((TOUCH&&Math.min(innerWidth,innerHeight)<900)||phoneLike())&&!STRONG?"mid":"high";
// phones use the standard material for glass and clearcoat paint: the clearcoat variant is the slowest shader to
// prepare, and on a phone screen its extra sheen is not visible; computers keep it
const PhysMat=Q==="high"?THREE.MeshPhysicalMaterial:class extends THREE.MeshStandardMaterial{constructor(p={}){const q={...p};delete q.clearcoat;delete q.clearcoatRoughness;super(q)}};
const canvas=$("#gl");
// antialiasing everywhere and a pixel ratio close to the screen's own, so edges and text stay crisp
const renderer=new THREE.WebGLRenderer({canvas,antialias:!(TOUCH&&devicePixelRatio>=2.5&&Q!=="high"),powerPreference:"high-performance"});   // dense phone screens: no multisampling (edges are already fine at 2.5x), a large saving on the graphics chip
let DPR=Math.min(devicePixelRatio||1,2);const DPR_MAX=DPR;   // phones render at up to 2x too (1.6 looked soft on sharp phone screens)
renderer.setPixelRatio(DPR);renderer.setSize(innerWidth,innerHeight,false);
renderer.shadowMap.enabled=Q==="high"&&!TOUCH;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;   // refreshed every third frame (see frame())
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.18,220);
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
// soft glow textures computed pixel by pixel: canvas gradients are dithered by some browsers (iOS Safari), and that
// noise showed through additive glows as coloured specks
function smoothTex(w,h,alpha){
  const c=document.createElement("canvas");c.width=w;c.height=h;const g=c.getContext("2d"),id=g.createImageData(w,h),d=id.data;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){const k=(y*w+x)*4,a=Math.max(0,Math.min(1,alpha((x+.5)/w,(y+.5)/h)));d[k]=d[k+1]=d[k+2]=255;d[k+3]=Math.round(a*255)}
  g.putImageData(id,0,0);const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;return t;
}
const lerpA=(a,b,t)=>a+(b-a)*t;
const glowTex=smoothTex(64,256,(u,v)=>v<.25?lerpA(1,.35,v/.25):lerpA(.35,0,(v-.25)/.75));
// neon light spilling from a studio front onto the hall floor: strongest at the wall, dying away smoothly toward the
// middle of the hall and at both ends, so it has no hard rectangular edge
const sstep=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t)};
let SIGN_DARK=dark;   // signs are drawn for the current theme when made; redrawn only when it changes
const spillTex=smoothTex(128,256,(u,v)=>Math.pow(1-sstep(0,1,v),2.4)*sstep(0,.22,u)*sstep(0,.22,1-u));
const fanTex=smoothTex(256,512,(u,v)=>{const t=1-v,half=.04+.46*Math.pow(t,.8),a=Math.pow(1-t,1.6)*.95+.05*(1-t);return a*Math.max(0,1-Math.abs(u-.5)/half)});
const frameGlowTex=canvasTex(256,256,(g,w,h)=>{g.shadowColor="#fff";g.shadowBlur=26;g.strokeStyle="rgba(255,255,255,.9)";g.lineWidth=6;
  for(let k=0;k<3;k++){g.beginPath();const m=34,r=18;g.moveTo(m+r,m);g.arcTo(w-m,m,w-m,h-m,r);g.arcTo(w-m,h-m,m,h-m,r);g.arcTo(m,h-m,m,m,r);g.arcTo(m,m,w-m,m,r);g.closePath();g.stroke()}});
// board-formed concrete panels for the end wall: soft clouding, panel joints and tie holes
const concTex=canvasTex(512,512,(g,w,h)=>{
  g.fillStyle="#9a9690";g.fillRect(0,0,w,h);
  for(let i=0;i<26;i++){const x=Math.random()*w,y=Math.random()*h,r=60+Math.random()*180,dk=Math.random()<.55;const gr=g.createRadialGradient(x,y,0,x,y,r);
    gr.addColorStop(0,dk?"rgba(40,36,32,.10)":"rgba(255,255,255,.09)");gr.addColorStop(1,"rgba(0,0,0,0)");g.fillStyle=gr;g.fillRect(x-r,y-r,r*2,r*2)}
  g.fillStyle="rgba(30,28,26,.55)";g.fillRect(0,0,w,4);g.fillRect(0,0,4,h);
  g.fillStyle="rgba(255,255,255,.12)";g.fillRect(4,4,w-4,2);
  g.fillStyle="rgba(35,32,30,.45)";for(const x of [w*.18,w*.82])for(const y of [h*.2,h*.5,h*.8]){g.beginPath();g.arc(x,y,5,0,Math.PI*2);g.fill()}
},[15,5.4]);
const dotTex=smoothTex(64,64,(u,v)=>1-Math.hypot(u-.5,v-.5)*2);

/* ---------- materials ---------- */
const ALLM=[];const std=(c,r=.6,m=0,x={})=>{const mm=new THREE.MeshStandardMaterial(Object.assign({color:C(c),roughness:r,metalness:m},x));ALLM.push(mm);return mm};
const MAT={
  metal:std("#1c1c1f",.38,.85),standBlack:std("#0d0d0f",.5,.25),planter:std("#161514",.45,.15),soil:std("#2a2119",.95,0),trunk:std("#5b4632",.85,0),metal2:std("#2b2b30",.45,.8),chrome:std("#d5d7db",.18,1),rubber:std("#0d0d0e",.9,0),
  lensGlass:std("#0a1020",.04,1,{envMapIntensity:2}),fabric:std("#121212",.95,0),wood:std("#3a2718",.6,0),
  floor:std("#0b0b0c",.32,0,{map:concreteTex,transparent:true,opacity:.86}),
  wall:std("#121214",.92,0,{map:acousticTex}),ceil:std("#08080a",.95,0),
  hallCyc:std("#1b1b1e",.85,0),plinth:std("#0c0c0d",.28,.2),logo:std("#eeebe5",.32,.08),
  tapeW:std("#e9e9e9",.7,0),truss:std("#9ea1a6",.35,.9),
  space:new THREE.MeshStandardMaterial({color:C("#ffdcaa"),emissive:C("#ffcf8e"),emissiveIntensity:.2,roughness:.6}),
  chairCanvas:new THREE.MeshStandardMaterial({map:chairTex,roughness:.9}),
  monitor:new THREE.MeshBasicMaterial({map:monitorTex}),
  tally:new THREE.MeshStandardMaterial({color:0x330000,emissive:C("#ff2a2a"),emissiveIntensity:5})
};
const emissive=(c,i)=>{const mm=new THREE.MeshStandardMaterial({color:C("#111111"),emissive:C(c),emissiveIntensity:i,roughness:.4});ALLM.push(mm);return mm};
MAT.doorLed=emissive("#ffd49a",2.6);const GLARE=[];   // lights seen straight on: door frames, neon, softbox faces (dimmed per theme)

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
  // braces from a collar on the centre column to the middle of each leg (they used to end in the air and read as a second small tripod)
  for(let i=0;i<3;i++){const a=i/3*Math.PI*2+Math.PI/6,f=.55;g.add(stick(V(0,topY*.62,0),V(Math.cos(a)*spread*f,topY*(1-f)+.01*f,Math.sin(a)*spread*f),r*.6,mat))}
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
  const fm=emissive("#fffaf0",2.4);fm.userData.glare=[1.4,1.3];GLARE.push(fm);const face=mesh(new THREE.PlaneGeometry(.77,.77),fm,false);face.position.z=-.425;face.rotation.y=Math.PI;head.add(face);
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
const FROND_GEO=(()=>{const g=new THREE.PlaneGeometry(.3,.34,1,6);g.translate(0,.17,0);const p=g.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i);p.setZ(i,-.9*y*y)}g.computeVertexNormals();return g})();
let FROND_MAT=null,POT_GEO=null,POT_MAT=null,POT_RIM=null;
let PALM_UP=null,PALM_LED=null;
function palm(h=1.25,seed=1){
  if(!FROND_MAT){FROND_MAT=new THREE.MeshStandardMaterial({map:frondTex,alphaTest:.45,side:THREE.DoubleSide,roughness:.7});ALLM.push(FROND_MAT)}
  const g=new THREE.Group(),r=k=>{const x=Math.sin(seed*91.7+k*12.3)*43758.5;return x-Math.floor(x)};
  // a square planter, open at the top: four walls with a thin lip, and the soil sitting a little below the rim
  if(!POT_MAT){POT_MAT=std("#1b1a19",.5,.12);POT_RIM=std("#2a2826",.4,.15)}
  for(const sd of [-1,1]){g.add(box(.58,.62,.04,POT_MAT,0,.31,sd*.27));g.add(box(.04,.62,.5,POT_MAT,sd*.27,.31,0))}
  g.add(box(.5,.5,.5,POT_MAT,0,.25,0));
  for(const sd of [-1,1]){g.add(box(.62,.025,.06,POT_RIM,0,.632,sd*.28));g.add(box(.06,.025,.5,POT_RIM,sd*.28,.632,0))}
  const soil=box(.5,.02,.5,MAT.soil,0,.555,0);g.add(soil);
  for(let k=0;k<7;k++){const st=new THREE.Mesh(new THREE.DodecahedronGeometry(.03,0),POT_RIM);st.position.set(Math.cos(k*1.7)*(.08+.1*(k%3)/2),.57,Math.sin(k*1.7)*(.08+.1*(k%3)/2));st.rotation.set(k,k*2,0);g.add(st)}
  // a warm uplight hidden in the planter washes up through the fronds
  if(!PALM_UP){PALM_UP=new THREE.MeshBasicMaterial({map:fanTex,color:C("#ffc77a"),transparent:true,opacity:.38,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});PALM_LED=emissive("#ffd49a",3)}
  for(const ry of [0,Math.PI/2]){const u=new THREE.Mesh(new THREE.PlaneGeometry(1.1,h*1.5),PALM_UP);u.position.set(0,.62+h*.75,0);u.rotation.y=ry+.4;u.userData.keep=true;u.userData.mergeAdd=true;g.add(u)}
  for(let s2=0;s2<3;s2++){
    const a=s2*2.1+r(s2),top=V(Math.cos(a)*.16,.6+h*(.3+r(s2+5)*.2),Math.sin(a)*.16);
    const base=V(Math.cos(a)*.07,.565,Math.sin(a)*.07);g.add(stick(base,top,.025,MAT.trunk));
    const n=11;for(let k=0;k<n;k++){const f=new THREE.Mesh(FROND_GEO,FROND_MAT);f.position.copy(top);
      f.rotation.order="YXZ";f.rotation.y=k/n*Math.PI*2+a;f.rotation.x=-(.7+r(k+s2*7)*.6);f.scale.setScalar(.8+r(k*3+s2)*.35);g.add(f)}
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
const slots=[];let SLOT_ZONE=-1;   // zone: the studio a light belongs to (-1 = hall)
function slot(from,to,color,intensity,angle,pen=.5,withBeam=true,alwaysBeam=false){
  slots.push({from,to,color:C(color),intensity,angle,pen,zone:SLOT_ZONE});
  if(withBeam&&(Q==="high"||alwaysBeam))beam(from,to,angle*.62,color);
}

/* ---------- build the soundstage ---------- */
const SETS=[];const anchors=[];
const SET0=-32,SETSTEP=8;   // studios stand in facing pairs, each pair right next to the one before
// the hall grows with the number of studios
const LED_Z=SET0-(Math.ceil(STUDIOS.length/2)-1)*SETSTEP-12,HALL_END=LED_Z-12,HALL_LEN=10-HALL_END,HALL_MID=(10+HALL_END)/2;
function build3D(){
  // floor, reflection, walls, ceiling
  const fl=mesh(new THREE.PlaneGeometry(36,HALL_LEN),MAT.floor,false);fl.rotation.x=-Math.PI/2;fl.position.set(0,.01,HALL_MID);scene.add(fl);
  if(Q==="high"&&THREE.Reflector){
    const rf=new THREE.Reflector(new THREE.PlaneGeometry(36,HALL_LEN),{clipBias:.003,textureWidth:innerWidth*.6,textureHeight:innerHeight*.6,color:0x8a8a8a});rf.userData.keep=true;
    // polished concrete: the reflection is smeared along the view, so lights and neon leave long streaks on the floor
    rf.material.fragmentShader=`uniform vec3 color;uniform sampler2D tDiffuse;varying vec4 vUv;
      void main(){vec2 uv=vUv.xy/vUv.w;vec3 c=vec3(0.);float ws=0.;
        // many samples with a little sideways blur, so ceiling lamps become soft streaks instead of stacked rectangles
        // (no per-pixel jitter: that read as grain on dark floors)
        for(int k=-16;k<=16;k++){float t=float(k)/16.;float w=exp(-t*t*2.6);
          vec3 sm=texture2D(tDiffuse,uv+vec2(t*.006+.004,t*.06)).rgb+texture2D(tDiffuse,uv+vec2(-t*.006-.004,t*.06)).rgb;sm*=.5;
          c+=sm*(.6+dot(sm,vec3(.33)))*w;ws+=w;}
        gl_FragColor=vec4(c/ws*color*1.1,1.);}`;
    rf.rotation.x=-Math.PI/2;rf.position.set(0,0,HALL_MID);scene.add(rf);floorMirror=rf;
    // the floor's reflection is a heavily smeared copy of the scene, so it is redrawn every other frame while moving
    // (one frame older is invisible in the smear) instead of every frame: one whole extra scene pass saved per two frames
    { const ob=rf.onBeforeRender;rf.onBeforeRender=function(r,sc,cam){if(!isIdle&&(frames&1)&&frames>10)return;ob.call(this,r,sc,cam)} }
  }else{MAT.floor.transparent=false;MAT.floor.opacity=1}
  for(const s of [-1,1]){const w=mesh(new THREE.PlaneGeometry(HALL_LEN,13),MAT.wall,false);w.rotation.y=-s*Math.PI/2;w.position.set(s*18,6.5,HALL_MID);scene.add(w)}
  const bw=mesh(new THREE.PlaneGeometry(36,13),MAT.wall,false);bw.position.set(0,6.5,HALL_END);scene.add(bw);
  // the main studio building: facade with a big doorway, the ARTA NOORI sign above it, and the forecourt outside
  MAT.facade=std("#4a3a2e",.7,.05,{map:slatTex});MAT.ground=std("#0d0d0f",.6,0,{map:concreteTex});
  const gr=mesh(new THREE.PlaneGeometry(60,40),MAT.ground,false);gr.rotation.x=-Math.PI/2;gr.position.set(0,.001,30.25);scene.add(gr);
  const fsTex=FACADE_TEX=canvasSign(2048,560,(g,W,H)=>{
    rr(g,8,8,W-16,H-16,40);g.fillStyle="#0b0b0d";g.fill();g.lineWidth=10;g.strokeStyle="#e9c98d";g.stroke();
    let x=90;if(FACADE_LOGO){const k=(H-140)/FACADE_LOGO.height;g.drawImage(FACADE_LOGO,x,70,FACADE_LOGO.width*k,H-140);x+=FACADE_LOGO.width*k+80}
    // text is sized to the space left beside the logo so it always fits whatever font the device uses
    const room=W-x-90,fit=(txt,wt,px,sp)=>{let f=px;const set=()=>{g.font=`${wt} ${f}px "Unbounded", "Helvetica Neue", Arial, sans-serif`;if("letterSpacing" in g)g.letterSpacing=(f*sp)+"px"};set();while(g.measureText(txt).width>room&&f>30){f-=4;set()}};
    g.fillStyle="#f3efe6";g.textBaseline="middle";g.textAlign="left";
    fit("ARTA NOORI",700,190,.09);g.fillText("ARTA NOORI",x,H*.42);
    fit("STUDIO",500,92,.43);g.fillStyle="#e9c98d";g.fillText("STUDIO",x+6,H*.76);
  });
  { const im=new Image();im.onload=()=>{FACADE_LOGO=im;fsTex.userData.redraw()};im.src="assets/logo-white.png"; }
  // warm uplights washing the facade and the sign
  for(const sd of [-1,1])slot(V(sd*6,.3,13.5),V(sd*2,6,10),"#ffd9a6",2.2,.42,.7);
  // a row of grazing uplights along the slatted wall, each throwing a warm fan up the wood
  for(const sd of [-1,1])for(const x of [7.4,10.6]){slot(V(sd*x,.15,10.6),V(sd*x,7,10.2),"#ffcf8f",1.4,.28,.9,false);scene.add(box(.22,.08,.16,MAT.metal,sd*x,.04,10.55))}
  slot(V(0,1,17),V(0,4,10),"#ffdcaa",1.6,.5,.8,false);
  { const fm=new THREE.MeshBasicMaterial({map:fanTex,color:C("#ffc47a"),transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false,fog:false});
    for(const sd of [-1,1])for(const x of [6.6,9.4,12.2,15]){const f=new THREE.Mesh(new THREE.PlaneGeometry(2.6,7.5),fm);f.userData.mergeAdd=true;f.position.set(sd*x,3.75,10.27);f.userData.keep=true;scene.add(f);
      const fx=box(.22,.08,.16,MAT.metal,sd*x,.04,10.4);scene.add(fx)}
  FACADE_FAN=fm; }
  buildFacade();
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
  { const can=new THREE.CylinderGeometry(.11,.13,.26,14),lens=new THREE.CircleGeometry(.09,14),lensMat=emissive("#ffc274",2);
    for(let z=6;z>HALL_END+4;z-=2.4)for(const x of (Math.round(z/2.4)%2?[-4.6,4.6]:[-4.6,0,4.6])){
      const c=new THREE.Mesh(can,MAT.metal);c.position.set(x,7.72,z);scene.add(c);
      const l=new THREE.Mesh(lens,lensMat);l.rotation.x=Math.PI/2;l.position.set(x,7.585,z);scene.add(l);
    } }

  // warm scallops of light washing the quilted walls under the lamps
  { const wm=new THREE.MeshBasicMaterial({map:fanTex,color:C("#ffd7a0"),transparent:true,opacity:.2,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});
    for(let z=-2;z>HALL_END+4;z-=8)for(const sd of [-1,1]){const f=new THREE.Mesh(new THREE.PlaneGeometry(5,9),wm);f.userData.mergeAdd=true;f.rotation.set(0,sd>0?-Math.PI/2:Math.PI/2,0);f.scale.y=-1;f.position.set(sd*17.97,6.6,z);f.userData.keep=true;scene.add(f)} }

  // entrance
  MAT.floor.userData.lowEnv=.3;
  const pl=box(3.3,.5,1.5,MAT.plinth,0,.25,-6.4);scene.add(pl);pl.userData.keep=true;OCCLUDERS.push(pl);
  const logo=makeLogo();logo.position.set(0,.5,-6.4);scene.add(logo);
  // soft light halo behind the logo, so the black logo of light mode stands out from the room
  const haloTex=smoothTex(256,256,(u,v)=>{const r=Math.hypot(u-.5,v-.5)*2;return r<.45?lerpA(1,.45,r/.45):lerpA(.45,0,(r-.45)/.55)});
  MAT.halo=new THREE.MeshBasicMaterial({map:haloTex,transparent:true,depthWrite:false,opacity:.8,toneMapped:false,fog:false});
  const halo=new THREE.Mesh(new THREE.PlaneGeometry(5.4,5.4),MAT.halo);halo.position.set(0,1.55,-7.4);halo.userData.keep=true;scene.add(halo);logo.traverse(o=>{o.userData.keep=true});OCCLUDERS.push(logo);
  const wmTex=new THREE.TextureLoader().load(WORDMARK);wmTex.encoding=THREE.sRGBEncoding;
  MAT.wordmark=new THREE.MeshBasicMaterial({map:wmTex,transparent:true,color:C("#f0eee8"),depthWrite:false,fog:false});
  const wm=new THREE.Mesh(new THREE.PlaneGeometry(1.9,.23),MAT.wordmark);wm.position.set(0,.25,-5.645);scene.add(wm);
  MAT.wmGlow=new THREE.MeshBasicMaterial({map:haloTex,color:C("#ffdcaa"),transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,fog:false});
  const wg=new THREE.Mesh(new THREE.PlaneGeometry(2.6,.62),MAT.wmGlow);wg.position.set(0,.25,-5.648);wg.userData.keep=true;scene.add(wg);
  MAT.logoGlow=new THREE.MeshBasicMaterial({map:haloTex,color:C("#ffe2b8"),transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false,fog:false});
  const lgw=new THREE.Mesh(new THREE.PlaneGeometry(3.6,3.0),MAT.logoGlow);lgw.position.set(0,1.45,-6.56);lgw.userData.keep=true;scene.add(lgw);
  const L1=fresnel(),L2=fresnel();L1.position.set(-2.7,0,-4.5);L2.position.set(2.7,0,-4.5);L1.rotation.y=.3;L2.rotation.y=-.3;scene.add(L1,L2);
  const lt=V(0,1.25,-6.4);L1.userData.aim(lt);L2.userData.aim(lt);
  // the two projectors light the logo (their beams show on phones too)
  slot(L1.userData.lensWorld(),lt,"#ffe6c4",3.4,.42,.55,true,true);slot(L2.userData.lensWorld(),lt,"#ffe6c4",3.4,.42,.55,true,true);
  slot(V(0,7.6,-4.2),V(0,.6,-6.4),"#ffffff",1.3,.3,.6);
  const rig=cameraRig(false);rig.position.set(-1.7,0,-3.3);rig.lookAt(0,0,-6.4);rig.rotateY(Math.PI);scene.add(rig);

  // Arta studio
  for(const x of [-3.6,3.6]){const t=truss(4.7);t.rotation.z=Math.PI/2;t.position.set(x,2.35,-11);scene.add(t)}
  const head=truss(7.6);head.position.set(0,4.85,-11);scene.add(head);
  const strip=box(7.2,.06,.04,emissive("#ffd9a0",1.6),0,4.66,-10.82);scene.add(strip);
  const cy=mesh(cycGeo(10,3.2,1.3,5.2),MAT.hallCyc);cy.material.side=THREE.DoubleSide;cy.position.set(-9.4,.02,-16.6);cy.rotation.y=Math.PI/2;scene.add(cy);
  // the cyclorama is a built wall, not a sheet in the air: a solid back and closed ends down to the floor
  { const sh=new THREE.Shape(),r=1.3,h=5.2,T=.25;sh.moveTo(0,0);for(let i=0;i<=14;i++){const t=i/14*Math.PI/2;sh.lineTo(-r*Math.sin(t),r-r*Math.cos(t))}
    sh.lineTo(-r,h);sh.lineTo(-r-T,h);sh.lineTo(-r-T,0);sh.closePath();
    const cap=new THREE.ExtrudeGeometry(sh,{depth:.12,bevelEnabled:false,curveSegments:2});cap.rotateY(-Math.PI/2);
    const sideM=std("#d9d3c8",.8);
    for(const x of [-5.06,5.06]){const m=mesh(cap,sideM);m.position.set(x+.06,0,0);cy.add(m)}
    cy.add(box(10.24,h,T,sideM,0,h/2-.02,-r-T/2-.04));cy.add(box(10.24,.04,T+.06,std("#bfb7aa",.6),0,h+.01,-r-T/2-.02)); }
  const dolly=cameraRig(true);dolly.position.set(2.9,0,-15.8);dolly.lookAt(-8,0,-16.6);dolly.rotateY(Math.PI);scene.add(dolly);
  for(const z of [-.5,.5]){const r=box(.05,.05,6,MAT.chrome,0,.03,0);r.position.set(2.9+z,.03,-15.8);r.rotation.y=Math.PI/2;r.scale.z=1;scene.add(r)}
  for(let i=0;i<10;i++)scene.add(box(.08,.03,1.3,MAT.wood,0.0+i*.6-2.7+2.9,.015,-15.8));
  const ch=chair();ch.position.set(4.6,0,-18.4);ch.rotation.y=-1.9;scene.add(ch);
  const mm=makeupMirror();mm.position.set(5.3,0,-21.2);mm.rotation.y=-Math.PI/2+.25;scene.add(mm);
  for(const [x,z,sd] of [[-5.6,-9.6,1],[5.6,-9.6,2],[5.9,-19.4,3],[-5.4,-22.6,4]]){const pl=palm(1.35,sd+20);pl.position.set(x,0,z);scene.add(pl)}
  const sb1=softbox(),sb2=softbox(),lp=ledPanel();
  sb1.position.set(-4.6,0,-13.2);sb2.position.set(-4.6,0,-20);lp.position.set(-2.4,0,-21.6);scene.add(sb1,sb2,lp);
  const ct=V(-8.5,1.5,-16.6);sb1.userData.aim(ct);sb2.userData.aim(ct);lp.userData.aim(ct);
  slot(V(-4.6,2.0,-13.2),ct,"#ffe0b4",2.2,.75,1,false);slot(V(-4.6,2.0,-20),ct,"#ffe0b4",2.2,.75,1,false);
  slot(V(0,7.6,-16.6),V(-1,0,-16.6),"#ffe3b8",1.6,.45,.7);

  // brand sets
  STUDIOS.forEach((s,i)=>buildSet(s,i));

  // end of the hall
  // end of the hall: a concrete wall closes the hall just behind the Instagram film, washed by small wall lights,
  // with palms in black planters along its foot (as in the reference render)
  { MAT.endWall=std("#a39f99",.85,0,{map:concTex});
    const ew=mesh(new THREE.PlaneGeometry(36,13),MAT.endWall,false);ew.position.set(0,6.5,LED_Z-1.2);scene.add(ew);
    const wm=new THREE.MeshBasicMaterial({map:fanTex,color:C("#ffcf94"),transparent:true,opacity:.42,blending:THREE.AdditiveBlending,depthWrite:false});
    for(const x of [-10.6,-6.6,-2.35,2.35,6.6,10.6]){const f=new THREE.Mesh(new THREE.PlaneGeometry(2.2,4.6),wm);f.userData.mergeAdd=true;f.position.set(x,4.9,LED_Z-1.18);f.userData.keep=true;scene.add(f);
      const d=new THREE.Mesh(new THREE.PlaneGeometry(1.6,2.6),wm);d.scale.y=-1;d.position.set(x,1.4,LED_Z-1.18);d.material.side=THREE.DoubleSide;d.userData.keep=true;scene.add(d);
      scene.add(box(.16,.1,.1,MAT.metal,x,2.68,LED_Z-1.14));scene.add(box(.1,.02,.06,emissive("#ffd49a",3),x,2.62,LED_Z-1.12))}
    for(const [x,z,hh,sd] of [[-2.35,-.55,.8,41],[2.35,-.55,.8,41],[-6.55,-.45,1.35,42],[6.55,-.45,1.35,42],[-8.7,-.5,1.05,43],[8.7,-.5,1.05,43]]){
      const pl=palm(hh,sd);pl.position.set(x,0,LED_Z+z);scene.add(pl)} }
  // the Instagram film floats here in its own frame (buildFeatureFilms)
  // ceiling spots wash the end wall: the film and the plaques either side of it (it matters most with the lights off)
  for(const x of [-4.3,0,4.3]){slot(V(x*.8,9.2,LED_Z+4.2),V(x,2.6,LED_Z-1.2),"#ffd9a8",x?2.3:2.6,.32,.75);
    const cn=new THREE.Mesh(new THREE.CylinderGeometry(.13,.16,.32,16),MAT.metal);cn.position.set(x*.8,9.35,LED_Z+4.2);scene.add(cn);
    const ln=new THREE.Mesh(new THREE.CircleGeometry(.11,16),emissive("#ffd49a",3));ln.rotation.x=Math.PI/2;ln.position.set(x*.8,9.18,LED_Z+4.2);scene.add(ln)}

  // haze particles
  const N=Math.round((Q==="high"?1400:700)*Math.min(HALL_LEN/104,2)),pp=new Float32Array(N*3);
  for(let i=0;i<N;i++){pp[i*3]=(Math.random()-.5)*20;pp[i*3+1]=Math.random()*7;pp[i*3+2]=4-Math.random()*(4-HALL_END)}
  const pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pp,3));
  MAT.dust=new THREE.PointsMaterial({size:.045,map:dotTex,transparent:true,opacity:.5,depthWrite:false,blending:THREE.AdditiveBlending,color:C("#ffe8c8")});
  dust=new THREE.Points(pg,MAT.dust);dust.visible=Q==="high";scene.add(dust);   // phones showed the tiny dots as coloured specks

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
    // a studio that shows what it does keeps that line under its logo
    const sub=s.showTag&&s.tag?s.tag[lang]:"",LH=sub?H*.7:H;
    const iw=img.naturalWidth||img.width||1000,ih=img.naturalHeight||img.height||400,k=Math.min(W/iw,LH/ih)*.92,w=iw*k,h=ih*k;
    g.drawImage(img,(W-w)/2,(LH-h)/2,w,h);
    if(sub){g.textAlign="center";g.textBaseline="middle";if("direction" in g)g.direction=lang==="fa"?"rtl":"ltr";let f2=H*.12;const f2f=()=>`500 ${f2}px "Vazirmatn", sans-serif`;g.font=f2f();
      while(g.measureText(sub).width>W*.94&&f2>14){f2-=2;g.font=f2f()}g.globalAlpha=.85;g.fillText(sub,W/2,H*.85);g.globalAlpha=1;if("direction" in g)g.direction="ltr"}
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
    // a studio can show what it does under its name (Dream Salon: brow fibrosis, lip shading, microblading)
    const sub=s.showTag&&s.tag?s.tag[lang]:"";
    g.fillText(name,W/2,sub?H*.38:H/2);
    if(sub){if("letterSpacing" in g)g.letterSpacing="0px";if("direction" in g)g.direction=lang==="fa"?"rtl":"ltr";let f2=H*.13;const f2f=()=>`500 ${f2}px "Vazirmatn", sans-serif`;g.font=f2f();
      while(g.measureText(sub).width>W*.94&&f2>14){f2-=2;g.font=f2f()}g.globalAlpha=.85;g.fillText(sub,W/2,H*.76);g.globalAlpha=1;if("direction" in g)g.direction="ltr"}
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
  // phones draw signs at 90% size (Safari on iPhone stops creating canvases once their total memory is too large)
  const k=TOUCH?.9:1;
  const cv=document.createElement("canvas");cv.width=Math.round(w*k);cv.height=Math.round(h*k);
  const t=new THREE.CanvasTexture(cv);t.encoding=THREE.sRGBEncoding;t.anisotropy=4;
  t.userData=t.userData||{};t.userData.redraw=()=>{const g=cv.getContext("2d");if(!g)return;g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,cv.width,cv.height);g.setTransform(k,0,0,k,0,0);draw(g,w,h);t.needsUpdate=true};
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
  const glow=(col,b)=>{if(dark){g.shadowColor=col;g.shadowBlur=b}},noGlow=()=>{g.shadowBlur=0;g.shadowColor="transparent"};
  const ac=s.c.acc==="#000000"?"#ffffff":s.c.acc;
  const ax=dir<0?70:W-70,ay=H*.45;g.save();g.translate(ax,ay);g.scale(dir,1);g.fillStyle=ac;glow(ac,H*.1);
  g.beginPath();g.moveTo(40,-38);g.lineTo(-20,0);g.lineTo(40,38);g.lineTo(40,14);g.lineTo(-2,0);g.lineTo(40,-14);g.closePath();g.fill();g.restore();noGlow();
  const left=dir<0?140:40,right=dir<0?W-40:W-140;
  const lc=logoCanvas(s,"#ffffff",H*.9,H*.5);let x0=left,x1=right;
  if(lc){
    const lx=dir<0?x1-lc.width:x0;
    // a dark logo would vanish on the dark sign, so it sits on a light pill
    glow("rgba(255,255,255,.85)",H*.09);
    if(logoLum(lc)<.45){const p=16;g.fillStyle="#f4f2ee";rr(g,lx-p,ay-lc.height/2-p*.7,lc.width+p*2,lc.height+p*1.4,22);g.fill();noGlow()}
    g.drawImage(lc,lx,ay-lc.height/2);noGlow();
    if(dir<0)x1-=lc.width+(logoLum(lc)<.45?44:28);else x0+=lc.width+(logoLum(lc)<.45?44:28);
  }
  if("direction" in g)g.direction=fa?"rtl":"ltr";g.textBaseline="middle";g.fillStyle="#ffffff";
  g.textAlign=dir<0?"left":"right";fitText(g,s.name[lang],700,H*.32,x1-x0);glow("rgba(255,255,255,.9)",H*.1);g.fillText(s.name[lang],dir<0?x0:x1,ay);noGlow();
}}
const hallPick=[],signMats=[];

/* ---------- set dressing: every studio gets props that suit the brand ---------- */
/* props reuse one material per colour, so the merged scene keeps few draw calls */
const MATC={};const cstd=(c,r=.55,m=0)=>MATC[c+"|"+r+"|"+m]||(MATC[c+"|"+r+"|"+m]=std(c,r,m));const cemi=(c,i=2.2)=>MATC["e"+c+"|"+i]||(MATC["e"+c+"|"+i]=emissive(c,i));
/* inside colours of each studio (walls, backdrop) and, where the room is dark, full-strength lights */
const INNER={
  asus:{wall:"#1b2028",cyc:"#15191f",deep:2.5},aparat:{wall:"#241016",cyc:"#1a0b10",deep:3},respina:{wall:"#0a2328",cyc:"#081c20",deep:1.6},
  mci:{wall:"#9fb6c9",cyc:"#aec3d4",li:.2},snapp:{wall:"#1d212c",cyc:"#2a2e39"},azkivam:{wall:"#aab6e3",cyc:"#b7c2ea",li:.25},
  beauty:{wall:"#d9a9a2",cyc:"#e3b4ab",deep:2.5},dreamsalon:{wall:"#c9a8cb",cyc:"#d8bcd9",deep:1.2},analizfix:{wall:"#171b2b",cyc:"#121522",deep:3},
  niromotor:{wall:"#0f1f3a",cyc:"#0b1830",deep:3.2},itmall:{wall:"#a7b4cf",cyc:"#b6c2da",li:.25},farmaniyeh:{wall:"#2b2c2f",cyc:"#1f2023",li:1,deep:1.6},
  dicardo:{wall:"#140d3a",cyc:"#0c0828",deep:1.4},emaratezarin:{wall:"#13213a",cyc:"#0f1a2e"},mahannet:{wall:"#262222",cyc:"#1b1919",li:1},
  tiktok:{wall:"#0d0d10",cyc:"#08080a",deep:1.5}
};
/* props shared by the studios */
function propLaptop(screen="#3a7bd5",body="#2b313b"){
  const o=new THREE.Group();o.add(box(.36,.02,.25,cstd(body,.3,.7),0,.01,0));
  const lid=new THREE.Group();lid.position.set(0,.02,-.12);lid.rotation.x=-.28;o.add(lid);
  lid.add(box(.36,.24,.012,cstd(body,.3,.7),0,.12,0));lid.add(box(.33,.2,.002,cemi(screen,1.5),0,.125,.008));return o;
}
function propMoto(col){   // a sport motorcycle, front towards +z, about 1.9 m long
  const o=new THREE.Group(),paint=cstd(col,.25,.55),blk=cstd("#111214",.6,.3),chr=cstd("#d7dbe0",.15,1);
  for(const z of [-.7,.7]){const t=mesh(new THREE.TorusGeometry(.3,.075,14,36),blk);t.rotation.y=Math.PI/2;t.position.set(0,.37,z);o.add(t);
    const rim=cyl(.21,.21,.06,chr,28);rim.rotation.z=Math.PI/2;rim.position.set(0,.37,z);o.add(rim);
    const disc=cyl(.13,.13,.07,cstd("#8c9096",.3,.9),24);disc.rotation.z=Math.PI/2;disc.position.set(0,.37,z);o.add(disc)}
  o.add(stick(V(0,.37,-.7),V(0,.78,-.12),.035,chr));o.add(stick(V(0,.37,-.7),V(0,.55,.1),.03,chr));
  for(const x of [-.08,.08])o.add(stick(V(x,.37,.7),V(x,1.0,.42),.028,chr));
  o.add(box(.28,.32,.46,cstd("#3b3f46",.4,.8),0,.5,-.02));
  const tank=mesh(new THREE.SphereGeometry(.2,20,14),paint);tank.scale.set(1,.72,1.55);tank.position.set(0,.88,.14);o.add(tank);
  o.add(box(.25,.08,.5,blk,0,.87,-.33));const tail=box(.22,.12,.38,paint,0,.86,-.64);tail.rotation.x=.25;o.add(tail);
  const fair=box(.34,.3,.3,paint,0,.92,.46);fair.rotation.x=-.5;o.add(fair);
  o.add(stick(V(-.36,1.08,.42),V(.36,1.08,.42),.018,blk));
  const hl=cyl(.08,.08,.06,cemi("#fff6e0",2.4),20);hl.rotation.x=Math.PI/2;hl.position.set(0,.95,.6);o.add(hl);
  const tl=box(.14,.04,.02,cemi("#ff2a2a",2.2),0,.92,-.84);o.add(tl);
  o.add(stick(V(.17,.36,-.05),V(.2,.52,-.85),.045,chr));
  const ff=mesh(new THREE.TorusGeometry(.33,.03,8,24,Math.PI*.7),paint);ff.rotation.set(0,Math.PI/2,Math.PI*.15);ff.position.set(0,.37,.7);o.add(ff);
  return o;
}
function propCar(col,trim){   // a saloon car, front towards +z, about 4.2 m long
  const o=new THREE.Group(),b=new THREE.Group();b.rotation.y=-Math.PI/2;o.add(b);
  const sh=new THREE.Shape();[[-2.1,.32],[-2.12,.86],[-1.9,.97],[-1.15,1.02],[-.78,1.42],[.5,1.45],[1.12,1.02],[1.98,.88],[2.12,.62],[2.08,.32]].forEach(([x,y],k)=>k?sh.lineTo(x,y):sh.moveTo(x,y));sh.closePath();
  const bg=new THREE.ExtrudeGeometry(sh,{depth:1.5,bevelEnabled:true,bevelThickness:.12,bevelSize:.09,bevelSegments:4,curveSegments:4});bg.translate(0,0,-.75);
  const paint=new PhysMat({color:C(col),roughness:.25,metalness:.6,clearcoat:1,clearcoatRoughness:.08});ALLM.push(paint);
  b.add(mesh(bg,paint));
  const glass=cstd("#0c1218",.05,.9);
  const win=new THREE.Shape();[[-1.08,1.05],[-.74,1.36],[.46,1.39],[1.02,1.05]].forEach(([x,y],k)=>k?win.lineTo(x,y):win.moveTo(x,y));win.closePath();
  for(const z of [-.88,.88]){const w=mesh(new THREE.ShapeGeometry(win),glass,false);w.position.z=z;if(z<0)w.rotation.y=Math.PI,w.scale.x=-1;b.add(w);
    b.add(box(.02,.36,.02,glass,.0,1.2,z*1.003))}
  const ws=box(.03,.74,1.55,glass,.87,1.32,0);ws.rotation.z=.96;b.add(ws);const rw=box(.03,.54,1.5,glass,-1.04,1.29,0);rw.rotation.z=-.75;b.add(rw);
  const tyre=cstd("#0e0e0f",.85,0),rimM=cstd("#c9cdd3",.2,1);
  for(const x of [-1.32,1.32])for(const z of [-.78,.78]){const t=cyl(.34,.34,.24,tyre,28);t.rotation.x=Math.PI/2;t.position.set(x,.34,z);b.add(t);
    const r=cyl(.22,.22,.25,rimM,20);r.rotation.x=Math.PI/2;r.position.set(x,.34,z);b.add(r)}
  for(const z of [-.55,.55]){b.add(box(.04,.1,.32,cemi("#fffaf0",3),2.16,.7,z));b.add(box(.04,.1,.3,cemi("#ff2020",2.4),-2.2,.78,z))}
  b.add(box(.04,.08,.9,cstd("#1b1b1b",.5,.4),2.18,.45,0));
  if(trim){b.add(box(3.9,.07,.01,cemi(trim,1.6),0,.62,.97));b.add(box(3.9,.07,.01,cemi(trim,1.6),0,.62,-.97))}
  return o;
}
function propRing(h=1.7){
  const o=new THREE.Group();const rl=mesh(new THREE.TorusGeometry(.42,.035,12,48),cemi("#ffffff",3));rl.position.y=h;o.add(rl);
  o.add(box(.09,.17,.01,cstd("#111",.3,.5),0,h,0));legs(o,h-.45,.32,.014,cstd("#222",.4,.6));o.add(stick(V(0,h-.46,0),V(0,h-.42,0),.016,cstd("#222",.4,.6)));
  o.add(stick(V(0,h-.46,0),V(0,h-.4,0),.015,cstd("#222")));o.add(stick(V(0,.9,0),V(0,h-.42,0),.016,cstd("#222",.4,.6)));return o;
}
/* app tiles for Dicardo: AI tools and Adobe apps, drawn as glowing rounded squares with a label */
function aiTile(kind){return (g,W,H)=>{
  const tile=(bg,edge)=>{rr(g,W*.05,H*.05,W*.9,H*.9,W*.2);g.fillStyle=bg;g.fill();g.lineWidth=W*.025;g.strokeStyle=edge;g.stroke()};
  const label=(t,col)=>{g.fillStyle=col;g.font=`600 ${W*.1}px "Unbounded", Arial, sans-serif`;g.textAlign="center";g.textBaseline="middle";g.fillText(t,W/2,H*.8)};
  const cx=W/2,cy=H*.42;
  if(kind==="gpt"){tile("#0d0d0d","#ffffff");g.strokeStyle="#ffffff";g.lineWidth=W*.04;for(let k=0;k<6;k++){g.save();g.translate(cx,cy);g.rotate(k*Math.PI/3);g.beginPath();g.ellipse(W*.09,0,W*.13,W*.06,0,0,Math.PI*2);g.stroke();g.restore()}label("ChatGPT","#ffffff")}
  else if(kind==="claude"){tile("#262624","#D97757");g.fillStyle="#D97757";for(let k=0;k<12;k++){const a=k/12*Math.PI*2,l=W*(k%2?.2:.26);g.save();g.translate(cx,cy);g.rotate(a);g.beginPath();g.moveTo(-W*.025,0);g.lineTo(0,-l);g.lineTo(W*.025,0);g.closePath();g.fill();g.restore()}
    g.beginPath();g.arc(cx,cy,W*.05,0,7);g.fill();label("Claude","#F0EEE6")}
  else if(kind==="higgs"){tile("#0a0a0a","#d6ff3a");g.strokeStyle="#d6ff3a";g.lineWidth=W*.05;g.beginPath();g.arc(cx,cy,W*.2,0,7);g.stroke();g.fillStyle="#ffffff";g.font=`800 ${W*.22}px "Unbounded", Arial, sans-serif`;g.textAlign="center";g.textBaseline="middle";g.fillText("H",cx,cy+W*.01);label("Higgsfield","#ffffff")}
  else if(kind==="gemini"){tile("#101321","#8ab4ff");const gr=g.createLinearGradient(cx-W*.2,cy-W*.2,cx+W*.2,cy+W*.2);gr.addColorStop(0,"#4285F4");gr.addColorStop(.55,"#9B72CB");gr.addColorStop(1,"#D96570");g.fillStyle=gr;
    const r=W*.24;g.beginPath();g.moveTo(cx,cy-r);g.quadraticCurveTo(cx,cy,cx+r,cy);g.quadraticCurveTo(cx,cy,cx,cy+r);g.quadraticCurveTo(cx,cy,cx-r,cy);g.quadraticCurveTo(cx,cy,cx,cy-r);g.fill();label("Gemini","#ffffff")}
  else{const A={Ps:["#001E36","#31A8FF"],Ai:["#330000","#FF9A00"],Pr:["#00005B","#9999FF"]}[kind]||["#111","#fff"];tile(A[0],A[1]);g.fillStyle=A[1];g.font=`700 ${W*.34}px "Unbounded", Arial, sans-serif`;g.textAlign="center";g.textBaseline="middle";g.fillText(kind,cx,cy);label("Adobe","#ffffff")}
}}
function decor(s,g,back,zL){
  const c=s.c,M=cstd,E=cemi;
  // the open space at the back of the room, between the last row of films and the brand wall, where the main props stand
  const bz0=zL-.5,bz1=back+.35,bzm=(bz0+bz1)/2;
  const zN=.4,zF=back+1.1,along=n=>Array.from({length:n},(_,k)=>n===1?(zN+zF)/2:zN+(zF-zN)*k/(n-1));
  const put=(o,x,y,z,ry=0)=>{o.position.set(x,y,z);o.rotation.y=ry;g.add(o);return o};
  const G=()=>new THREE.Group(),face=sd=>sd<0?Math.PI/2:-Math.PI/2;   // turn a prop on a side wall to face the middle
  const B=(w,h,d,m,x=0,y=0,z=0)=>box(w,h,d,m,x,y,z);
  const Cy=(rt,rb,h,m,seg=24)=>cyl(rt,rb,h,m,seg);
  const T=(R,r,m,arc=Math.PI*2)=>mesh(new THREE.TorusGeometry(R,r,12,48,arc),m);
  const S=(r,m)=>mesh(new THREE.SphereGeometry(r,20,14),m);
  const strip=(col,x,y,z,len,vertical=true)=>g.add(vertical?B(.03,len,.03,E(col,2.4),x,y,z):B(.03,.03,len,E(col,2.4),x,y,z));
  // a picture or neon sign drawn on a canvas, as a flat panel; wall(sd,…) hangs one on a side wall facing the middle
  const pic=(w,h,draw,glow=false,px=512)=>{const cv=document.createElement("canvas");cv.width=px;cv.height=Math.round(px*h/w);draw(cv.getContext("2d"),cv.width,cv.height);
    const tx=new THREE.CanvasTexture(cv);tx.encoding=THREE.sRGBEncoding;
    const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tx,transparent:true,depthWrite:!glow,blending:glow?THREE.AdditiveBlending:THREE.NormalBlending,fog:false}));m.userData.keep=true;return m};
  const wall=(sd,z,y,o)=>put(o,sd*3.69,y,z,face(sd));
  const neon=(g2,col,blur)=>{g2.shadowColor=col;g2.shadowBlur=blur;g2.strokeStyle=col;g2.fillStyle=col};
  const logoPath=s.logo&&s.logo.d?new Path2D(s.logo.d):null;
  const icon=(txt,bg,fg)=>(g2,W,H)=>{rr(g2,W*.06,H*.06,W*.88,H*.88,W*.2);g2.fillStyle=bg;g2.fill();g2.lineWidth=W*.03;g2.strokeStyle=fg;g2.stroke();
    g2.fillStyle=fg;g2.font=`700 ${W*.36}px "Unbounded", Arial, sans-serif`;g2.textAlign="center";g2.textBaseline="middle";g2.fillText(txt,W/2,H*.53)};
  const thumb=(k)=>(g2,W,H)=>{const hue=(k*67)%360,gr=g2.createLinearGradient(0,0,W,H);gr.addColorStop(0,`hsl(${hue},60%,45%)`);gr.addColorStop(1,`hsl(${(hue+50)%360},70%,25%)`);
    rr(g2,4,4,W-8,H-8,18);g2.fillStyle=gr;g2.fill();g2.fillStyle="rgba(0,0,0,.35)";g2.fillRect(4,H-46,W-8,42);
    g2.fillStyle=c.acc;g2.fillRect(10,H-12,(W-20)*(.25+(k*37%60)/100),6);
    g2.beginPath();g2.arc(W/2,H/2-14,34,0,7);g2.fillStyle="rgba(255,255,255,.9)";g2.fill();g2.beginPath();g2.moveTo(W/2-11,H/2-32);g2.lineTo(W/2+20,H/2-14);g2.lineTo(W/2-11,H/2+4);g2.fillStyle=c.acc;g2.fill()};
  const shelf=(len,col)=>{const o=G();o.add(B(len,.03,.28,M(col,.45),0,0,0));return o};
  const plinth=(w,h,d,col)=>{const o=G();o.add(B(w,h,d,M(col,.35,.2),0,h/2,0));o.add(B(w+.02,.025,d+.02,E(c.acc,1.6),0,h+.01,0));return o};
  const rack=(led)=>{const o=G();o.add(B(.62,2.1,.8,M("#14171c",.45,.4),0,1.05,0));const lm=E(led,2.6);
    for(let k=0;k<9;k++)o.add(B(.46,.014,.012,lm,0,.3+k*.2,.405));
    for(let k=0;k<9;k++)o.add(S(.012,E(k%3?"#39ff7a":"#ffb020",3)).translateX(.2).translateY(.3+k*.2).translateZ(.41));return o};
  const cables=(col,n,y)=>{for(let k=0;k<n;k++){const x=-3+k*(6/(n-1));g.add(B(.025,.025,Math.abs(zF-zN)+2.6,E(k%2?col:"#7ff6ff",1.8),x,y-(k%3)*.06,(zN+zF)/2-.4))}};
  switch(s.id){
    case "asus":{ // laptop store: laptops on lit display tables in the open space at the back, laptop shelves along both walls, green light strips
      for(const [x,z] of [[-2.2,bzm+.6],[0,bzm-.3],[2.2,bzm+.6]]){const t=plinth(1.1,.82,.8,"#232a35");for(const lx of [-.3,.3]){const l=propLaptop(lx<0?c.acc:"#56a0ff");l.position.set(lx,.84,0);t.add(l)}put(t,x,0,z)}
      { const big=G();big.add(B(1.6,.06,1.1,M("#2b313b",.3,.7),0,.03,0));const lid=G();lid.position.set(0,.06,-.52);lid.rotation.x=-.3;big.add(lid);
        lid.add(B(1.6,1.05,.05,M("#2b313b",.3,.7),0,.52,0));lid.add(B(1.5,.95,.01,E(c.acc,1.3),0,.53,.03));big.scale.setScalar(.9);put(big,0,1.0,bz1+.5);big.add(B(.3,1.0,.3,M("#1b2028",.4,.4),0,-.5,0)) }
      for(const sd of [-1,1])for(const z of along(5)){const o=G();for(const y of [1.05,1.75,2.45]){const sh=shelf(.7,"#2a313c");sh.rotation.y=Math.PI/2;sh.position.y=y;o.add(sh);
          const l=propLaptop((y*10|0)%2?c.acc:"#56a0ff");l.position.set(0,y+.015,0);l.rotation.y=Math.PI/2;o.add(l)}
        o.position.set(sd*3.55,0,z);o.rotation.y=sd<0?0:Math.PI;g.add(o);strip(c.acc,sd*3.68,3.3,z,.9)}
      strip(c.acc,-3.68,3.9,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);strip(c.acc,3.68,3.9,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);
      break}
    case "aparat":{ // a video platform: rows of red cinema seats facing the screen at the back, walls of video thumbnails, a play button and a vlog camera
      let k=0;for(const sd of [-1,1])for(const z of along(4))for(const y of [3.25,4.05]){wall(sd,z,y,pic(1.1,.62,thumb(k++),false,256))}
      for(const sd of [-1,1])for(const z of along(4)){wall(sd,z,1.75,pic(1.1,.62,thumb(k++),false,256))}
      const seat=()=>{const o=G(),red=M("#a3142f",.85),dk=M("#2a0a14",.7);o.add(B(.56,.14,.5,red,0,.42,0));o.add(B(.56,.66,.12,red,0,.78,.24));
        for(const x of [-.31,.31])o.add(B(.06,.6,.55,dk,x,.38,.02));o.add(B(.5,.3,.06,dk,0,.18,-.2));return o};
      const rows=Math.max(2,Math.min(4,Math.floor((bz0-bz1-.6)/.95)));
      for(let r=0;r<rows;r++)for(let j=0;j<5;j++){put(seat(),(j-2)*.66,r*.12,bz1+1.3+r*.95,Math.PI)}
      for(let r=1;r<rows;r++)g.add(B(3.5,r*.12,.95,M("#2a0a14",.8),0,r*.06,bz1+1.3+r*.95));
      const pb=G();pb.add(B(1.2,.84,.16,M(c.acc,.35,.1),0,1.1,0));const tri=new THREE.Shape();tri.moveTo(-.16,-.22);tri.lineTo(.26,0);tri.lineTo(-.16,.22);tri.closePath();
      const tm=mesh(new THREE.ShapeGeometry(tri),E("#ffffff",1.6),false);tm.position.set(0,1.1,.085);pb.add(tm);pb.add(stick(V(0,0,0),V(0,.68,0),.04,M("#222",.4,.6)));pb.add(B(.5,.04,.5,M("#222",.4,.6),0,.02,0));
      put(pb,2.75,0,bz0-.3,-.4);
      const cam=cameraRig(false);put(cam,-2.75,0,bz0-.4,.3);
      break}
    case "respina":case "mahannet":{ // internet: a glowing globe wrapped in data rings, a satellite dish, server racks, fibre light lines on the floor and overhead
      const red=s.id==="mahannet",lc=red?c.acc:"#00e0ff";
      for(const sd of [-1,1])for(const z of along(red?3:4))put(rack(c.acc),sd*3.25,0,z,face(sd));
      cables(lc,9,4.45);
      const gz=red?Math.min(-1.7,bzm):bzm;
      { const gl=G();gl.add(Cy(.45,.6,.9,M("#101418",.4,.5)));gl.children[0].position.y=.45;gl.add(T(.5,.02,E(lc,2.4)));gl.children[1].rotation.x=Math.PI/2;gl.children[1].position.y=.91;
        gl.add(S(.62,M(red?"#1b1010":"#06262b",.5,.3)).translateY(1.75));
        const wire=mesh(new THREE.SphereGeometry(.66,20,14),new THREE.MeshBasicMaterial({color:C(lc),wireframe:true,transparent:true,opacity:.75}));wire.position.y=1.75;wire.userData.keep=true;gl.add(wire);
        for(let k=0;k<3;k++){const r=T(.95+k*.12,.012,E(k?"#ffffff":lc,2.2));r.position.y=1.75;r.rotation.set(Math.PI/2+.5*(k-1),.6*k,0);gl.add(r);
          const sat=S(.05,E("#ffffff",3));sat.position.set(Math.cos(k*2)*(.95+k*.12),1.75+Math.sin(k*2)*.3,Math.sin(k*2)*(.95+k*.12)*.4);gl.add(sat)}
        put(gl,0,0,gz) }
      for(const sd of [-1,1]){const n=6;for(let k=0;k<n;k++){const x0=sd*2.9,z0=zN-.2-k*(zN-gz)/n;g.add(stick(V(x0,.035,z0),V(sd*.55,.035,gz+(k-2.5)*.08),.012,E(k%2?lc:"#ffffff",2)))}}
      if(!red){const dish=G();dish.add(Cy(.06,.08,1.2,M("#c9d2d8",.3,.8),12));dish.children[0].position.y=.6;
        const bowl=mesh(new THREE.SphereGeometry(.6,24,12,0,Math.PI*2,0,Math.PI*.32),M("#e8eef2",.35,.4));bowl.material.side=THREE.DoubleSide;bowl.rotation.x=-Math.PI/2.6;bowl.position.set(0,1.45,0);dish.add(bowl);
        dish.add(stick(V(0,1.45,.05),V(0,1.75,.62),.012,M("#c9d2d8",.3,.8)));dish.add(S(.05,E(lc,3)).translateY(1.78).translateZ(.64));put(dish,-2.5,0,gz-.6,.6)}
      const rt=plinth(.7,.9,.7,"#15191f");rt.add(B(.5,.12,.34,M("#0f1114",.4,.4),0,.98,0));for(let k=0;k<5;k++)rt.add(B(.03,.014,.01,E(k<4?"#39ff7a":c.acc,3),-.16+k*.08,.99,.175));
      for(const x of [-.2,-.07,.07,.2])rt.add(stick(V(x,1.02,-.12),V(x*1.6,1.5,-.18),.012,M("#0f1114",.4,.4)));
      put(rt,red?-2.2:2.4,0,red?zF+.35:gz-.4,red?.4:-.5);
      const gauge=pic(1.3,.85,(g2,W,H)=>{neon(g2,c.acc,18);g2.lineWidth=14;g2.beginPath();g2.arc(W/2,H*.8,H*.62,Math.PI,Math.PI*1.85);g2.stroke();
        g2.strokeStyle="#ffffff";g2.lineWidth=8;g2.beginPath();g2.moveTo(W/2,H*.8);g2.lineTo(W/2+H*.5*Math.cos(Math.PI*1.75),H*.8+H*.5*Math.sin(Math.PI*1.75));g2.stroke();
        g2.fillStyle="#ffffff";g2.font=`700 ${H*.17}px "Unbounded", Arial, sans-serif`;g2.textAlign="center";g2.fillText("1 Gbps",W/2,H*.97)},true);
      wall(red?1:-1,red?zF+.6:gz+.3,3.4,gauge);
      for(let x=-3;x<=3.01;x+=1)g.add(B(.015,.004,Math.abs(back)+2.6,E(lc,.7),x,.03,(2.6+back)/2));
      if(red)for(let k=0;k<3;k++){const a=T(.25+k*.22,.025,E(c.acc,2.6),Math.PI/2);a.rotation.z=Math.PI/4;put(a,-3.66,2.9,(zN+zF)/2,face(-1))}
      break}
    case "mci":{ // telecom: a cell mast and big phones on stands
      const mast=G();const t=truss(4.4);t.rotation.z=Math.PI/2;t.position.y=2.2;mast.add(t);
      for(let k=0;k<3;k++){const p=B(.12,.62,.26,M("#eef2f5",.4),Math.cos(k*2.1)*.32,3.9,Math.sin(k*2.1)*.32);p.rotation.y=-k*2.1;mast.add(p)}
      mast.add(S(.07,E(c.acc,3)));mast.children[mast.children.length-1].position.y=4.5;put(mast,2.9,0,zF+.3);
      for(const z of along(3)){const o=G();o.add(Cy(.22,.26,1.1,M(c.bg2,.4),20));o.children[0].position.y=.55;
        o.add(B(.4,.8,.05,M("#111",.3,.5),0,1.55,0));o.add(B(.35,.7,.002,E(c.acc,1.4),0,1.55,.03));put(o,-2.95,0,z,face(-1))}
      break}
    case "snapp":{ // a ride on the street: a real car with the green Snapp light, cones and lane markings
      const car=propCar("#00b85c","#ffffff");car.add(B(.55,.16,.28,E("#ffffff",2.2),0,1.58,0));put(car,2.3,0,-.55,.06);
      for(const z of along(4)){const cone=G();cone.add(mesh(new THREE.ConeGeometry(.16,.5,20),M("#ff7a1a",.6)));cone.children[0].position.y=.27;cone.add(B(.36,.03,.36,M("#222"),0,.015,0));
        const band=mesh(new THREE.CylinderGeometry(.1,.125,.08,20,1,true),M("#ffffff",.4));band.position.y=.3;cone.add(band);put(cone,-2.7,0,z)}
      for(let z=3.0;z>back+.8;z-=.9)g.add(B(.1,.006,.48,E("#ffffff",1.1),0,.032,z));
      for(const sd of [-1,1])g.add(B(.08,.006,Math.abs(back)+3,E("#ffd34d",1),sd*1.55,.032,(3+back)/2));
      wall(-1,(zN+zF)/2,2.9,pic(1.6,.9,(g2,W,H)=>{rr(g2,6,6,W-12,H-12,40);g2.fillStyle="#0c3b26";g2.fill();g2.lineWidth=10;g2.strokeStyle="#ffffff";g2.stroke();
        g2.fillStyle="#ffffff";g2.font=`700 ${H*.3}px "Unbounded", Arial, sans-serif`;g2.textAlign="center";g2.textBaseline="middle";g2.fillText("TAXI",W/2,H/2)}));
      break}
    case "azkivam":{ // loans: a bank vault door, stacks of coins and banknotes, a glowing percent sign
      const gold=M("#e8b44a",.3,.85);
      for(const z of along(3)){const o=G();o.add(B(.8,.7,.8,M(c.bg2,.5),0,.35,0));
        [[-.18,-.15,9],[.17,.12,14],[.12,-.2,6]].forEach(([x,zz,n])=>{for(let k=0;k<n;k++){const cn=Cy(.14,.14,.035,gold,28);cn.position.set(x,.72+k*.036,zz);o.add(cn)}});
        put(o,2.95,0,z)}
      const vault=G(),steel=M("#9aa3ad",.3,.9);const dr=Cy(.95,.95,.18,steel,40);dr.rotation.x=Math.PI/2;vault.add(dr);
      const rim=T(.98,.06,M("#6d757f",.3,.9));vault.add(rim);const hub=Cy(.18,.18,.12,M("#cfd5db",.2,1));hub.rotation.x=Math.PI/2;hub.position.z=.12;vault.add(hub);
      for(let k=0;k<4;k++){const sp=B(.7,.05,.05,M("#cfd5db",.2,1),0,0,.16);sp.rotation.z=k*Math.PI/4;vault.add(sp)}
      for(let k=0;k<8;k++){const bt=Cy(.05,.05,.1,M("#cfd5db",.2,1),12);bt.rotation.x=Math.PI/2;bt.position.set(Math.cos(k*Math.PI/4)*.78,Math.sin(k*Math.PI/4)*.78,.1);vault.add(bt)}
      vault.position.y=1.6;const vw=G();vw.add(vault);put(vw,-3.58,0,(zN+zF)/2+.4,face(-1));
      const tb=plinth(.9,.75,.6,"#c9d2f3");for(let k=0;k<6;k++){const n=B(.3,.04,.15,M("#5fae6b",.6),(k%3-1)*.27,.79+Math.floor(k/3)*.045,0);tb.add(n);tb.add(B(.06,.042,.152,M("#f4f1e6",.6),(k%3-1)*.27,.79+Math.floor(k/3)*.045,0))}
      put(tb,-2.6,0,zF+.6,face(-1));
      wall(1,zF+.6,3.3,pic(.9,.9,(g2,W,H)=>{neon(g2,c.acc,20);g2.lineWidth=16;g2.beginPath();g2.arc(W*.3,H*.3,W*.12,0,7);g2.stroke();g2.beginPath();g2.arc(W*.7,H*.7,W*.12,0,7);g2.stroke();
        g2.beginPath();g2.moveTo(W*.75,H*.18);g2.lineTo(W*.25,H*.82);g2.stroke()},true));
      break}
    case "beauty":{ // makeup: a vanity with a bulb mirror and a makeup chair at the back, giant lipstick and perfume, bulb mirrors and lipstick shelves on the walls
      const bulb=E("#fff3d6",2.8),rose=M("#d9a08f",.25,.85);
      const mirror=()=>{const o=G();o.add(B(.9,1.15,.04,rose,0,1.75,0));o.add(B(.8,1.05,.02,M("#e8eef2",.04,.95),0,1.75,.025));
        for(let k=0;k<5;k++)for(const x of [-.43,.43])o.add(S(.04,bulb).translateX(x).translateY(1.27+k*.24).translateZ(.04));
        for(let k=0;k<4;k++)o.add(S(.04,bulb).translateX(-.3+k*.2).translateY(2.33).translateZ(.04));return o};
      for(const sd of [-1,1])for(const [k,z] of along(4).entries()){const o=G();
        if(k%2===0)o.add(mirror());else{for(const y of [1.25,1.75,2.25]){o.add(B(.8,.03,.22,rose,0,y,.11));
          for(let j=0;j<5;j++){const col=["#b0313f","#e07a8b","#7a2232","#f3c1b3","#c24d63"][(j+k)%5];const lp=Cy(.03,.03,.14,M(col,.35),12);lp.position.set(-.3+j*.15,y+.085,.11);o.add(lp);
            o.add(Cy(.032,.032,.06,M("#d6b06a",.25,.9),12).translateX(-.3+j*.15).translateY(y+.03).translateZ(.11))}}}
        put(o,sd*3.66,0,z,face(sd))}
      const v=G();v.add(B(1.5,.05,.55,M("#f8efe9",.35),0,.78,0));for(const x of [-.7,.7])v.add(B(.05,.76,.5,M("#f8efe9",.4),x,.38,0));
      v.add(B(1.1,1.25,.04,rose,0,1.5,-.25));v.add(B(1.0,1.15,.02,M("#e8eef2",.04,.95),0,1.5,-.22));
      for(let k=0;k<5;k++)for(const x of [-.57,.57])v.add(S(.04,bulb).translateX(x).translateY(1.0+k*.25).translateZ(-.22));
      for(let k=0;k<5;k++)v.add(S(.04,bulb).translateX(-.4+k*.2).translateY(2.15).translateZ(-.22));
      for(let k=0;k<5;k++){const b2=Cy(.04,.05,.12+k%2*.06,new PhysMat({color:C(["#f4d7df","#e9b7c3","#fbe6d6","#d98fa0","#f4d7df"][k]),roughness:.05,transparent:true,opacity:.75,clearcoat:1}),16);b2.position.set(-.5+k*.25,.87,.08);v.add(b2)}
      put(v,-.9,0,bz1+.45);
      const ch=G(),vel=M("#e8b4b8",.9);ch.add(Cy(.25,.28,.06,M("#d6b06a",.25,.9),24));ch.children[0].position.y=.03;ch.add(Cy(.04,.04,.4,M("#d6b06a",.25,.9)));ch.children[1].position.y=.25;
      ch.add(B(.55,.14,.5,vel,0,.52,0));ch.add(B(.55,.55,.12,vel,0,.85,-.2));put(ch,-.9,0,bz1+1.3,Math.PI);
      const ls=G();ls.add(Cy(.13,.13,.5,M("#d6b06a",.25,.9)));ls.children[0].position.y=.25;ls.add(Cy(.11,.11,.35,M(c.acc,.35)));ls.children[1].position.y=.67;
      const tip=mesh(new THREE.ConeGeometry(.11,.18,24),M(c.acc,.35));tip.position.y=.93;ls.add(tip);ls.scale.setScalar(2.2);put(ls,1.6,0,bz1+.7);
      const pf=G();pf.add(B(.3,.36,.3,new PhysMat({color:C("#f4d7df"),roughness:.05,transparent:true,opacity:.55,clearcoat:1}),0,.18,0));pf.add(Cy(.06,.06,.1,M("#d6b06a",.25,.9)));pf.children[1].position.y=.41;pf.scale.setScalar(2.2);put(pf,2.55,0,bz1+1.2);
      wall(1,bzm,3.6,pic(1.4,.6,(g2,W,H)=>{neon(g2,"#ff8fb1",22);g2.font=`italic 600 ${H*.5}px Georgia, serif`;g2.textAlign="center";g2.textBaseline="middle";g2.fillText("Beauty",W/2,H/2)},true));
      for(const z of [bzm,(zN+zF)/2]){const ch2=G();ch2.add(stick(V(0,4.8,0),V(0,4.2,0),.01,M("#d6b06a",.3,.9)));for(let j=0;j<10;j++){const a=j/10*Math.PI*2;ch2.add(S(.035,E("#fff1dc",2.2)).translateX(Math.cos(a)*.32).translateY(4.15).translateZ(Math.sin(a)*.32))}
        const rg=T(.32,.015,M("#d6b06a",.3,.9));rg.rotation.x=Math.PI/2;rg.position.y=4.18;ch2.add(rg);put(ch2,0,0,z)}
      break}
    case "dreamsalon":{ // brows and lips studio: a treatment bed with a magnifier lamp and a tool trolley at the back, arched mirrors, pigment shelves, neon lips and brow
      const white=M("#fbf7fa",.35),gold=M("#d6b06a",.25,.9);
      const bed=G();bed.add(B(1.9,.16,.7,M("#f2e6f1",.55),0,.68,0));bed.add(B(.5,.12,.66,M("#f2e6f1",.55),-.72,.82,0));bed.add(B(1.5,.6,.5,white,0,.3,0));put(bed,-.4,0,bzm);
      const lamp=G();lamp.add(B(.4,.04,.4,M("#222",.4,.5),0,.02,0));lamp.add(stick(V(0,0,0),V(0,1.5,0),.02,M("#ddd",.3,.8)));lamp.add(stick(V(0,1.5,0),V(.5,1.62,0),.015,M("#ddd",.3,.8)));
      const ring=T(.16,.03,E("#ffffff",2.6));ring.rotation.x=Math.PI/2.4;ring.position.set(.6,1.56,0);lamp.add(ring);put(lamp,-1.95,0,bzm-.55,-.4);
      const cart=G();cart.add(B(.45,.03,.35,white,0,.85,0));cart.add(B(.45,.03,.35,white,0,.45,0));for(const x of [-.2,.2])for(const z of [-.15,.15])cart.add(B(.02,.85,.02,gold,x,.43,z));
      for(let k=0;k<5;k++)cart.add(Cy(.025,.025,.09,M(["#6b3b2a","#8a4b3a","#b56b5b","#c97b84","#5a2f24"][k],.4),12).translateX(-.16+k*.08).translateY(.91));put(cart,1.25,0,bzm+.2);
      const stool=G();stool.add(Cy(.2,.2,.08,M("#e9d7ea",.7),20));stool.children[0].position.y=.6;stool.add(Cy(.03,.03,.56,gold));stool.children[1].position.y=.3;stool.add(Cy(.2,.22,.03,gold,20));put(stool,.75,0,bzm-.75);
      const arch=()=>{const o=G();const sh=new THREE.Shape();sh.moveTo(-.42,0);sh.lineTo(-.42,.9);sh.absarc(0,.9,.42,Math.PI,0,true);sh.lineTo(.42,0);sh.closePath();
        const m=mesh(new THREE.ShapeGeometry(sh,24),M("#e8eef2",.04,.95),false);m.position.set(0,1.1,.02);o.add(m);
        const fr=mesh(new THREE.ShapeGeometry(sh,24),gold,false);fr.scale.set(1.1,1.06,1);fr.position.set(0,1.05,.01);o.add(fr);
        const led=T(.46,.012,E("#fff1e0",2.4),Math.PI);led.position.set(0,2.0,.03);o.add(led);return o};
      for(const sd of [-1,1])for(const [k,z] of along(4).entries()){const o=G();
        if(k%2===0)o.add(arch());else for(const y of [1.3,1.8,2.3]){o.add(B(.8,.03,.2,white,0,y,.1));for(let j=0;j<6;j++)o.add(Cy(.025,.025,.1,M(["#5a2f24","#8a4b3a","#c97b84","#a3505f","#6b3b2a","#e0a1a8"][(j+k)%6],.4),12).translateX(-.3+j*.12).translateY(y+.065).translateZ(.1))}
        put(o,sd*3.66,0,z,face(sd))}
      wall(1,bzm,3.2,pic(1.3,.75,(g2,W,H)=>{neon(g2,"#ff7fb0",20);g2.lineWidth=12;g2.beginPath();g2.moveTo(W*.12,H*.5);g2.bezierCurveTo(W*.3,H*.12,W*.42,H*.3,W*.5,H*.36);g2.bezierCurveTo(W*.58,H*.3,W*.7,H*.12,W*.88,H*.5);
        g2.bezierCurveTo(W*.7,H*.92,W*.3,H*.92,W*.12,H*.5);g2.stroke();g2.beginPath();g2.moveTo(W*.12,H*.5);g2.quadraticCurveTo(W*.5,H*.62,W*.88,H*.5);g2.stroke()},true));
      wall(-1,bzm,3.3,pic(1.3,.5,(g2,W,H)=>{neon(g2,"#e9c7ff",18);g2.lineWidth=14;g2.lineCap="round";g2.beginPath();g2.moveTo(W*.1,H*.75);g2.quadraticCurveTo(W*.45,H*.05,W*.9,H*.55);g2.stroke();
        g2.lineWidth=4;for(let k=0;k<12;k++){const t=.12+k*.065,x=W*t,y=H*(.75-Math.sin(t*3)*.45);g2.beginPath();g2.moveTo(x,y);g2.lineTo(x+W*.03,y-H*.18);g2.stroke()}},true));
      for(const sd of [-1,1]){const pv=G();pv.add(Cy(.12,.1,.4,white,20));pv.children[0].position.y=.2;for(let k=0;k<7;k++){pv.add(stick(V(0,.38,0),V(Math.sin(k)*.28,1.2+(k%3)*.12,Math.cos(k*1.3)*.2),.008,M("#d9c3a5",.8)));
          const pl=S(.07,M("#efe2cf",.95));pl.scale.set(.8,1.8,.8);pl.position.set(Math.sin(k)*.28,1.22+(k%3)*.12,Math.cos(k*1.3)*.2);pv.add(pl)}put(pv,sd*2.9,0,bz1+.4)}
      break}
    case "analizfix":{ // phone repair: a workbench with a microscope, open phones and a soldering station at the back, a glass case of phones, a giant cracked phone, tool walls
      const bench=G();bench.add(B(2.0,.06,.75,M("#2a2f3d",.6),0,.9,0));for(const x of [-.9,.9])for(const z of [-.3,.3])bench.add(B(.05,.9,.05,M("#111"),x,.45,z));
      bench.add(B(1.9,.004,.66,M("#2a8a6a",.8),0,.932,0));
      for(let k=0;k<3;k++){bench.add(B(.16,.012,.32,M("#111",.3,.5),-.55+k*.3,.94,.05));bench.add(B(.14,.002,.28,E(k===1?"#3a7bd5":"#0b0b0b",1.3),-.55+k*.3,.948,.05));bench.add(B(.16,.01,.32,M("#c8ccd2",.3,.8),-.55+k*.3,.94,-.2))}
      const mic=G();mic.add(B(.22,.03,.22,M("#e6e6e6",.4),0,.95,0));mic.add(stick(V(0,.95,-.08),V(0,1.4,-.08),.02,M("#e6e6e6",.4)));
      const tube=Cy(.05,.045,.24,M("#2b2b2b",.4,.6),16);tube.rotation.x=.5;tube.position.set(0,1.34,0);mic.add(tube);mic.position.x=.55;bench.add(mic);
      bench.add(B(.22,.14,.18,M("#1c1c1c",.5),.85,1.0,-.15));bench.add(B(.1,.035,.005,E("#ff3b30",2.4),.85,1.02,-.059));
      bench.add(B(1.6,.5,.03,M("#262a33",.8),0,1.3,-.36));for(let k=0;k<6;k++){bench.add(Cy(.025,.025,.14,M(k%2?c.acc:"#2f80ed",.5),10).translateX(-.6+k*.24).translateY(1.35).translateZ(-.33))}
      put(bench,0,0,bzm+.2);
      const lampB=G();lampB.add(stick(V(0,.93,0),V(.2,1.6,0),.015,M("#ddd",.3,.8)));lampB.add(stick(V(.2,1.6,0),V(.55,1.55,0),.015,M("#ddd",.3,.8)));lampB.add(T(.12,.02,E("#ffffff",2.6)).translateX(.6).translateY(1.53));
      lampB.children[2].rotation.x=Math.PI/2;put(lampB,-.95,0,bzm+.05);
      const cs=G();cs.add(B(.9,.9,.5,M("#1a1d26",.5,.3),0,.45,0));cs.add(B(.9,.9,.5,new PhysMat({color:C("#cfe3ff"),roughness:.05,transparent:true,opacity:.18}),0,1.35,0));
      for(let r=0;r<2;r++)for(let k=0;k<3;k++){cs.add(B(.14,.28,.02,M("#111",.3,.5),-.28+k*.28,1.08+r*.42,.0));cs.add(B(.12,.25,.002,E(["#3a7bd5","#ff5e3a","#27ae60"][(k+r)%3],1.1),-.28+k*.28,1.08+r*.42,.012))}
      cs.add(B(.92,.02,.52,E(c.acc,1.8),0,.91,0));put(cs,-2.55,0,bzm-.2,.5);
      const ph=G();ph.add(B(.62,1.22,.08,M("#111",.3,.5),0,.95,0));const scr=pic(.56,1.14,(g2,W,H)=>{g2.fillStyle="#0e1a33";g2.fillRect(0,0,W,H);g2.strokeStyle="#cfe3ff";g2.lineWidth=3;
        const cx=W*.62,cy=H*.38;for(let k=0;k<11;k++){let x=cx,y=cy;g2.beginPath();g2.moveTo(x,y);for(let j=0;j<5;j++){x+=Math.cos(k*.57+j*.4)*W*.14;y+=Math.sin(k*.57+j*.6)*H*.08;g2.lineTo(x,y)}g2.stroke()}},false,256);
      scr.position.set(0,.95,.041);ph.add(scr);ph.add(B(.1,.4,.25,M("#222",.4,.5),0,.2,-.1));ph.scale.setScalar(1.3);put(ph,2.5,0,bzm-.2,-.5);
      const board=G();board.add(B(.04,1.4,2.2,M("#262a33",.8),0,1.9,0));
      for(let r=0;r<3;r++)for(let k=0;k<5;k++){board.add(B(.012,.32,.16,M("#0f0f12",.3,.5),.03,1.4+r*.45,-.8+k*.4));board.add(B(.004,.28,.13,E(["#1e2a44","#2b2b2b","#3a1f4a"][r],1),.04,1.4+r*.45,-.8+k*.4))}
      put(board,-3.66,0,(zN+zF)/2,0);
      const tools=G();tools.add(B(.04,1.2,1.6,M("#c76a24",.7),0,1.9,0));
      for(let k=0;k<6;k++){const sd1=G();sd1.add(Cy(.03,.03,.16,M(k%2?c.acc:"#2f80ed",.5),10));sd1.add(Cy(.008,.008,.22,M("#cfd4da",.3,.9),8));sd1.children[1].position.y=-.19;sd1.position.set(.05,2.2,-.6+k*.24);tools.add(sd1)}
      for(let k=0;k<4;k++)tools.add(T(.07,.012,M("#cfd4da",.3,.9)).translateX(.05).translateY(1.6).translateZ(-.45+k*.3));
      put(tools,3.66,0,(zN+zF)/2,0);
      break}
    case "emaratezarin":{ // wedding hall: flower arch around the brand wall, round banquet tables, chandeliers, an aisle carpet
      const stone=M("#e9dfc6",.6),gold=M(c.acc,.35,.7),cloth=M("#f7f3ea",.8);
      for(const sd of [-1,1])for(const z of along(3)){const o=G();o.add(B(.55,.16,.55,stone,0,.08,0));
        const sh=Cy(.17,.2,3.2,stone,22);sh.position.y=1.76;o.add(sh);o.add(B(.55,.16,.55,gold,0,3.44,0));put(o,sd*3.4,0,z)}
      const ar=G();for(const x of [-1.55,1.55])ar.add(B(.1,2.0,.1,gold,x,1.0,0));const top=T(1.55,.06,gold,Math.PI);top.position.y=2.0;ar.add(top);
      const fl=["#ffffff","#f6d1dc","#fbe7ee","#e8a8bb"];for(let k=0;k<46;k++){const t=k/45,a=t*Math.PI,on=k%3;
        const p=k<30?V(Math.cos(a)*1.55,2.0+Math.sin(a)*1.55,0):V((k%2?-1:1)*1.55,.3+((k-30)/16)*1.7,0);
        const f=S(.09+on*.02,M(fl[k%4],.7));f.position.copy(p).add(V(0,0,.05));ar.add(f)}
      put(ar,0,0,back+.55);
      g.add(B(1.3,.008,3.4-back,M("#8f1d2c",.9),0,.03,(3.4+back)/2));
      const table=()=>{const o=G();o.add(Cy(.5,.55,.74,cloth,32));o.children[0].position.y=.37;o.add(Cy(.52,.52,.02,cloth,32));o.children[1].position.y=.75;
        for(let k=0;k<3;k++){o.add(Cy(.02,.02,.14,M("#fffaf0",.5),10).translateX(Math.cos(k*2.1)*.2).translateY(.83).translateZ(Math.sin(k*2.1)*.2));o.add(S(.02,E("#ffcf7a",3)).translateX(Math.cos(k*2.1)*.2).translateY(.92).translateZ(Math.sin(k*2.1)*.2))}
        for(let k=0;k<4;k++){const ch=G();ch.add(B(.38,.05,.38,M("#f2ead8",.6),0,.46,0));ch.add(B(.38,.5,.04,M("#f2ead8",.6),0,.72,-.17));for(const x of [-.16,.16])for(const z of [-.16,.16])ch.add(B(.03,.45,.03,gold,x,.22,z));
          const a=(k+.5)/4*Math.PI*2;ch.position.set(Math.sin(a)*.85,0,Math.cos(a)*.85);ch.rotation.y=a+Math.PI;o.add(ch)}
        for(let k=0;k<5;k++)o.add(S(.06,M(fl[k%4],.7)).translateX((k-2)*.06).translateY(.82+k%2*.05));return o};
      put(table(),-2.1,0,1.4);put(table(),2.1,0,.2);
      for(const z of [1.6,-1.2]){const ch=G();ch.add(stick(V(0,4.8,0),V(0,4.0,0),.012,gold));for(let r=0;r<2;r++)for(let j=0;j<12;j++){const a=j/12*Math.PI*2;ch.add(S(.03,E("#fff1dc",2.4)).translateX(Math.cos(a)*(.45-r*.2)).translateY(3.9-r*.18).translateZ(Math.sin(a)*(.45-r*.2)))}
        ch.add(T(.45,.02,gold));ch.children[ch.children.length-1].rotation.x=Math.PI/2;ch.children[ch.children.length-1].position.y=3.92;put(ch,0,0,z)}
      break}
    case "farmaniyeh":{ // gym: dark room, rubber floor, a cable gym machine and a treadmill at the back, a bench press, dumbbell racks and kettlebells, orange light lines
      const steel=M("#2a2a2a",.4,.6),chrome=M("#c8c8c8",.3,.9),blk=M("#151515",.7),plate=M("#1b1b1d",.5,.4);
      g.add(B(6.6,.01,Math.abs(back)+2.6,M("#18181a",.95),0,.028,(2.6+back)/2));
      for(const z of along(2)){const r=G();r.add(B(.5,.6,1.5,steel,0,.3,0));
        for(let k=0;k<4;k++){const db=G();const bar=Cy(.025,.025,.36,chrome);bar.rotation.z=Math.PI/2;db.add(bar);
          for(const x of [-.16,.16]){const h=Cy(.08,.08,.08,blk);h.rotation.z=Math.PI/2;h.position.x=x;db.add(h)}
          db.rotation.y=Math.PI/2;db.position.set(0,.66,-.55+k*.37);r.add(db)}
        put(r,-3.1,0,z)}
      const gym=G();for(const x of [-.75,.75])gym.add(B(.08,2.3,.08,steel,x,1.15,0));gym.add(B(1.58,.08,.08,steel,0,2.3,0));gym.add(B(1.6,.08,.9,steel,0,.04,-.3));
      for(let k=0;k<12;k++)gym.add(B(.34,.05,.18,k%4?blk:M("#d94d20",.6),-.4,.12+k*.06,-.05));gym.add(B(.02,1.6,.02,chrome,-.4,1.3,-.05));
      gym.add(B(.5,.08,.5,M("#1d1d1f",.6),.25,.55,.35));gym.add(B(.5,.6,.08,M("#1d1d1f",.6),.25,.9,.08));for(const x of [.05,.45])gym.add(stick(V(x,2.25,0),V(x,1.1,.35),.008,M("#888",.4,.6)));
      for(const x of [-.05,.55])gym.add(B(.16,.04,.04,chrome,x,1.1,.38));put(gym,-1.35,0,bz1+.75);
      const tm=G();tm.add(B(.8,.2,1.8,M("#1d1d1f",.5,.3),0,.1,0));tm.add(B(.62,.02,1.6,M("#0b0b0b",.9),0,.21,0));
      for(const x of [-.36,.36])tm.add(stick(V(x,.2,.8),V(x,1.25,.75),.025,steel));tm.add(B(.8,.32,.12,M("#1d1d1f",.5,.3),0,1.3,.75));tm.add(B(.4,.16,.01,E(c.acc,1.6),0,1.33,.69));
      put(tm,1.6,0,bz1+1.2,Math.PI);
      const bench=G();bench.add(B(.35,.1,1.2,blk,0,.45,0));bench.add(B(.05,.4,.05,steel,0,.2,.45));bench.add(B(.05,.4,.05,steel,0,.2,-.45));
      for(const z of [-.55,.55])bench.add(B(.06,1.1,.06,steel,0,.55,z));
      const bb=Cy(.025,.025,1.6,chrome);bb.rotation.x=Math.PI/2;bb.position.y=1.1;bench.add(bb);
      for(const z of [-.7,.7]){const pl=Cy(.22,.22,.05,plate,28);pl.rotation.x=Math.PI/2;pl.position.set(0,1.1,z);bench.add(pl)}
      put(bench,2.75,0,(zN+zF)/2);
      for(const z of along(3)){const kb=G();kb.add(S(.16,blk));kb.children[0].position.y=.16;const hd=T(.09,.022,blk,Math.PI);hd.position.y=.3;kb.add(hd);put(kb,3.35,0,z)}
      for(const sd of [-1,1]){strip(c.acc,sd*3.68,3.6,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);strip(c.acc,sd*3.68,.4,(zN+zF)/2,Math.abs(zF-zN)+1.2,false)}
      wall(-1,(zN+zF)/2,2.3,pic(1.8,1.1,(g2,W,H)=>{g2.fillStyle="#9aa7b3";g2.fillRect(0,0,W,H);const gr=g2.createLinearGradient(0,0,W,H);gr.addColorStop(0,"rgba(255,255,255,.5)");gr.addColorStop(.5,"rgba(255,255,255,.05)");gr.addColorStop(1,"rgba(255,255,255,.35)");g2.fillStyle=gr;g2.fillRect(0,0,W,H)}));
      break}
    case "dicardo":{ // AI and design accounts: glowing ChatGPT, Claude, Higgsfield, Gemini and Adobe tiles on the walls, floating AI screens around a hologram at the back
      const apps=["gpt","claude","higgs","gemini","Ps","Ai","Pr","gpt","claude","higgs"];
      let k=0;for(const sd of [-1,1])for(const z of along(4))for(const y of [1.5,2.4]){wall(sd,z,y,pic(.62,.62,aiTile(apps[k++%apps.length]),false,256))}
      const holo=G();const hb=Cy(.35,.4,.12,M("#15123a",.4,.5),32);hb.position.y=.06;holo.add(hb);holo.add(Cy(.3,.3,.02,E(c.acc,2),32).translateY(.13));
      const brain=mesh(new THREE.IcosahedronGeometry(.35,1),new THREE.MeshBasicMaterial({color:C(c.acc),wireframe:true}));brain.position.y=1.2;brain.userData.keep=true;holo.add(brain);
      const cone=mesh(new THREE.ConeGeometry(.34,.95,24,1,true),new THREE.MeshBasicMaterial({color:C(c.acc),transparent:true,opacity:.12,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide}));cone.rotation.x=Math.PI;cone.position.y=.62;cone.userData.keep=true;holo.add(cone);
      put(holo,0,0,bzm);
      ["gpt","claude","higgs","gemini"].forEach((a,j)=>{const ang=(j-1.5)*.55,pn=pic(.8,.8,aiTile(a),false,256);pn.position.set(Math.sin(ang)*1.7,1.55+(j%2)*.25,bzm+Math.cos(ang)*.2-.3);pn.rotation.y=-ang*.6;g.add(pn)});
      const desk=G();desk.add(B(1.3,.05,.65,M("#1f1a4a",.4,.3),0,.75,0));for(const x of [-.6,.6])desk.add(B(.04,.75,.6,M("#1f1a4a",.4,.3),x,.375,0));
      const l=propLaptop(c.acc,"#cfd2da");l.position.set(0,.775,0);desk.add(l);put(desk,2.3,0,bzm+.4,-.5);
      break}
    case "niromotor":{ // motorcycles: a bike on a lit turntable in the middle of the open space at the back, four more around it
      const cols=["#1f4fae","#c81d25","#111214","#e9ecef","#f2a900"];
      const tt=G();tt.add(Cy(1.0,1.0,.1,M(c.bg2,.5),40));tt.children[0].position.y=.05;tt.add(T(1.0,.02,E(c.acc,2.5)));tt.children[1].rotation.x=Math.PI/2;tt.children[1].position.y=.1;
      const m=propMoto(cols[4]);m.position.y=.1;m.rotation.y=Math.PI/2;tt.add(m);put(tt,0,0,bzm,.35);
      const dz=Math.min(1.2,(bz0-bz1)/2-.2);
      put(propMoto(cols[0]),-2.35,0,bzm+dz,.5);put(propMoto(cols[1]),2.35,0,bzm+dz,-.5);put(propMoto(cols[2]),-2.35,0,bzm-dz,2.6);put(propMoto(cols[3]),2.35,0,bzm-dz,-2.6);
      for(const sd of [-1,1])strip(c.acc,sd*3.68,3.4,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);
      break}
    case "itmall":{ // gadget store: phone shelves, a gaming desk with a PC and monitor, a games console with a TV
      for(const z of along(2)){const sh=G(),wood=M("#e8ecf3",.5);
        for(const x of [-.7,.7])sh.add(B(.04,2.2,.4,wood,x,1.1,0));
        for(let k=0;k<4;k++){const y=.3+k*.55;sh.add(B(1.44,.03,.4,wood,0,y,0));sh.add(B(1.3,.012,.012,E(c.acc,2),0,y-.03,.18));
          for(let j=0;j<4;j++){sh.add(B(.16,.3,.02,M("#111",.3,.5),-.5+j*.33,y+.17,.02));sh.add(B(.14,.27,.002,E(["#3a7bd5","#ff5e3a","#9b51e0","#27ae60"][(j+k)%4],1.2),-.5+j*.33,y+.17,.032))}}
        put(sh,-3.45,0,z,face(-1))}
      const desk=G();desk.add(B(1.4,.05,.7,M("#1a1d24",.4,.3),0,.75,0));for(const x of [-.66,.66])desk.add(B(.04,.75,.66,M("#1a1d24",.4,.3),x,.375,0));
      desk.add(B(.9,.52,.03,M("#0d0f13",.3,.5),0,1.15,-.22));desk.add(B(.86,.48,.002,E("#5a3ee6",1.4),0,1.15,-.204));desk.add(B(.05,.3,.05,M("#222"),0,.9,-.24));
      const pc=G();pc.add(B(.22,.48,.48,M("#111318",.3,.5),0,.24,0));pc.add(B(.002,.42,.42,new PhysMat({color:C("#9aa"),roughness:.05,transparent:true,opacity:.35}),.111,.24,0));
      for(let k=0;k<3;k++)pc.add(T(.06,.012,E(["#ff2fd2","#2fe6ff","#7cff2f"][k],2.4)).translateX(.1).translateY(.13+k*.13));pc.children.slice(-3).forEach(r=>r.rotation.y=Math.PI/2);
      pc.position.set(.55,.775,-.05);desk.add(pc);desk.add(B(.45,.02,.15,M("#222",.4,.3),-.1,.785,.12));put(desk,2.6,0,(zN+zF)/2,-Math.PI/2);
      const ps=plinth(.7,.8,.5,"#e8ecf3");const con=G();con.add(B(.1,.4,.3,M("#f4f5f7",.25,.1),0,.2,0));con.add(B(.06,.38,.28,M("#111",.3,.4),-.04,.2,0));con.add(B(.115,.008,.29,E(c.acc,2.2),0,.4,0));con.position.set(-.15,.8,0);ps.add(con);
      const pad=G();pad.add(B(.16,.04,.1,M("#f4f5f7",.3),0,0,0));for(const x of [-.09,.09])pad.add(S(.045,M("#f4f5f7",.3)).translateX(x).translateZ(.03));pad.position.set(.15,.84,0);ps.add(pad);
      put(ps,2.5,0,zN+.7,-Math.PI/2);
      wall(1,zF+.8,2.4,pic(1.6,.9,(g2,W,H)=>{const gr=g2.createLinearGradient(0,0,W,H);gr.addColorStop(0,"#1a0b3a");gr.addColorStop(1,"#0b3a4a");g2.fillStyle=gr;g2.fillRect(0,0,W,H);
        g2.fillStyle="#ffffff";g2.font=`700 ${H*.16}px "Unbounded", Arial, sans-serif`;g2.textAlign="center";g2.fillText("GAME ON",W/2,H*.55);g2.strokeStyle="#111";g2.lineWidth=18;g2.strokeRect(0,0,W,H)}));
      break}
    case "tiktok":{ // creator room at the back: a sofa under the logo wall, two ring lights and a phone on a tripod facing it, neon TikTok logos and light strips
      const sofa=G(),vel=M("#2a1a2e",.9);sofa.add(B(1.9,.4,.75,vel,0,.2,0));sofa.add(B(1.9,.55,.18,vel,0,.62,-.3));for(const x of [-.9,.9])sofa.add(B(.16,.58,.75,vel,x,.3,0));
      for(const x of [-.45,.45])sofa.add(B(.55,.12,.55,M(x<0?"#25F4EE":"#FE2C55",.8),x,.46,.05));put(sofa,0,0,bz1+.65);
      put(propRing(),-1.35,0,bz1+2.1,Math.PI+.5);put(propRing(),1.35,0,bz1+2.1,Math.PI-.5);
      const tp=G();legs(tp,1.2,.3,.012,M("#222",.4,.6));tp.add(stick(V(0,.4,0),V(0,1.25,0),.014,M("#222",.4,.6)));tp.add(B(.09,.17,.01,M("#111",.3,.5),0,1.33,0));tp.add(B(.08,.15,.002,E("#25F4EE",1),0,1.33,-.006));put(tp,0,0,bz1+2.5,Math.PI);
      const lg=()=>(g2,W,H)=>{if(!logoPath)return;const k=Math.min(W,H)/26;g2.save();g2.translate((W-24*k)/2,(H-24*k)/2);g2.scale(k,k);
        g2.shadowBlur=14;g2.shadowColor="#25F4EE";g2.fillStyle="#25F4EE";g2.translate(-.5,-.3);g2.fill(logoPath);g2.shadowColor="#FE2C55";g2.fillStyle="#FE2C55";g2.translate(1,.6);g2.fill(logoPath);
        g2.shadowBlur=6;g2.shadowColor="#ffffff";g2.fillStyle="#ffffff";g2.translate(-.5,-.3);g2.fill(logoPath);g2.restore()};
      for(const sd of [-1,1])for(const z of along(3))wall(sd,z,4.1,pic(.8,.8,lg(),true,256));
      for(const sd of [-1,1]){const lgp=pic(1.0,1.0,lg(),true,256);lgp.position.set(sd*2.2,2.2,back+.06);g.add(lgp)}
      for(const z of along(5)){strip("#25F4EE",-3.68,2.0,z,3.4);strip("#FE2C55",3.68,2.0,z,3.4)}
      strip("#25F4EE",-3.68,4.7,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);strip("#FE2C55",3.68,4.7,(zN+zF)/2,Math.abs(zF-zN)+1.2,false);
      g.add(B(.05,.006,Math.abs(back)+3,E("#25F4EE",1.4),-3.45,.034,(3+back)/2));g.add(B(.05,.006,Math.abs(back)+3,E("#FE2C55",1.4),3.45,.034,(3+back)/2));
      for(let k=0;k<6;k++){const h=pic(.32,.3,(g2,W,H)=>{neon(g2,"#FE2C55",12);g2.beginPath();g2.moveTo(W/2,H*.85);g2.bezierCurveTo(W*.05,H*.5,W*.15,H*.08,W/2,H*.32);g2.bezierCurveTo(W*.85,H*.08,W*.95,H*.5,W/2,H*.85);g2.fill()},true,128);
        h.position.set((k%2?1:-1)*(.9+k*.25),3.0+(k%3)*.35,bz1+.4+k*.3);g.add(h)}
      break}
  }
  return {noSoft:["emaratezarin"].includes(s.id)};
}

const PENDING_SETS=[];
function buildSet(s,i){
  SLOT_ZONE=i;
  const side=i%2===0?-1:1,z=SET0-Math.floor(i/2)*SETSTEP;
  const g=new THREE.Group();g.position.set(side*7.2,0,z);g.rotation.y=side<0?Math.PI/2:-Math.PI/2;scene.add(g);
  // films float one behind another down a tunnel into the set, alternating left and right,
  // so the camera flies between them; sets with more films are built deeper
  // a studio with many films (more than four) becomes a deep room where smaller frames float scattered at
  // different heights and depths on both sides of the camera's path
  const n=s.videos.length,many=n>4,Z0=.5,IN0=INNER[s.id]||{};
  // in a room with many films the rows start a metre further forward, which leaves room at the back for the props
  const F0=Z0-.6+(many?1:0);
  let lay,DZ;
  if(!many){
    DZ=n>1?Math.min(2.6,9.1/(n-1)):0;
    lay=s.videos.map((v,j)=>{const vert=v.r!=="16/9",x=n===1?0:(j%2===0?-1:1)*(vert?.85:1.25);
      return {x,vert,y:1.72+(j%3===1?.12:j%3===2?-.06:0),z:n===1?-.3:Z0-j*DZ,sc:1}});   // a single film floats in the middle of the room
  }else if(n>20){
    // a very big studio (TikTok, Asus, Makeup): two tiers of films, one above the other, so the rows can stand far apart
    // instead of crowding into each other; the camera snakes along the lower tier and back along the upper one
    const xsA=[-2.7,-.9,.9,2.7],rows=Math.ceil(n/8),DZr=Math.min(2.4,7.2/Math.max(1,rows-1));DZ=DZr;
    lay=s.videos.map((v,j)=>{const r=Math.floor(j/8),k=j%8,half=k<4?0:1,c=half?7-k:k,up=(r%2)^half;
      return {x:xsA[c]+(r%2?.18:-.18),vert:v.r!=="16/9",y:(up?2.95:1.2)+(c%2?.05:-.05),z:F0-r*DZr,sc:.58,row:r}});
  }else{
    // rows across the whole room (the middle too), each frame at its own height; the camera stops close in
    // front of every film, so each one can be seen properly and tapped
    const cols=n<=9?3:4,rows=Math.ceil(n/cols),sc=cols===3?.68:.58;
    const xsA=cols===3?[-2.3,0,2.3]:[-2.7,-.9,.9,2.7],DZr=Math.min(1.9,7.6/Math.max(1,rows-1));DZ=DZr;
    const hs=[[1.4,2.15,1.55,2.05],[2.1,1.45,2.2,1.4]];
    lay=s.videos.map((v,j)=>{const r=Math.floor(j/cols),c0=j%cols,c=r%2?cols-1-c0:c0;   // serpentine order
      return {x:xsA[c]+(r%2?.18:-.18),vert:v.r!=="16/9",y:hs[r%2][c],z:F0-r*DZr,sc,row:r}});
  }
  const back=Math.max(-10.2,Math.min(-3.2,(lay[n-1]||{z:0}).z-2.4-(IN0.deep||0))),extra=-1.25-back;
  const IN=INNER[s.id]||{};
  // the inside of a studio (backdrop, trusses, props, films and their lights) can be built a moment later: the studios
  // farther down the hall are finished just after the entrance is on screen, so the site opens sooner; from the
  // entrance only their fronts can be seen, and those are built at once
  const frames=[],pick=[];let W=null;
  const interiorA=()=>{
  const cm=std(IN.cyc||s.c.bg,.82,0,{side:THREE.DoubleSide});
  const cy=mesh(cycGeo(7.4,3.4+extra,1.25,4.8),cm);cy.position.set(0,.02,-extra);g.add(cy);
  const edge=mesh(new THREE.PlaneGeometry(7.4,.05),MAT.tapeW,false);edge.rotation.x=-Math.PI/2;edge.position.set(0,.026,3.38);g.add(edge);
  // truss ribs along the tunnel
  for(let rz=2.6;rz>back+.6;rz-=Math.max(DZ,2.6)){
    for(const x of [-3.5,3.5]){const t=truss(5);t.rotation.z=Math.PI/2;t.position.set(x,2.5,rz);g.add(t)}
    const hd=truss(7.3);hd.position.set(0,5.1,rz);g.add(hd);
  }
  };
  // walls: two side walls and a front wall with a door opening facing the hall
  // inside: a calm tone from the set's backdrop; outside (the hall side): the brand colour
  const wi=IN.wall?new THREE.Color(IN.wall):new THREE.Color(s.c.bg).lerp(new THREE.Color("#f4eee6"),s.theme==="light"?.35:.6);
  const wm=std("#"+wi.getHexString(),.9,0);
  const we=new THREE.Color(s.c.acc==="#000000"?s.c.bg2:s.c.acc).lerp(new THREE.Color("#ffffff"),.06);
  const wx=std("#"+we.getHexString(),.8,0,{emissive:we.clone().convertSRGBToLinear(),emissiveIntensity:.22});wx.userData.lowEnv=.1;
  const depth=3.5-back;for(const sd of [-1,1]){g.add(B3(.12,4.8,depth,wm,sd*3.76,2.4,(3.5+back)/2));g.add(B3(.02,4.8,depth+.16,wx,sd*3.83,2.4,(3.5+back)/2+.08))}
  for(const sd of [-1,1]){g.add(B3(2.16,4.8,.14,wm,sd*2.68,2.4,3.45));g.add(B3(2.16,4.8,.02,wx,sd*2.68,2.4,3.53))}
  g.add(B3(3.2,1.8,.14,wm,0,3.9,3.45));g.add(B3(3.2,1.8,.02,wx,0,3.9,3.53));
  g.add(B3(7.64,.035,.035,emissive(s.c.acc,2.4),0,4.81,3.53));
  // a warm light strip framing the door, and a palm in a black planter on each side of it
  // neon in the brand colour: the front corners, the door frame and a line along the foot of the wall
  { const nc=new THREE.Color(s.c.acc==="#000000"?s.c.bg2:s.c.acc).lerp(new THREE.Color("#ffffff"),.2),neon=emissive("#"+nc.getHexString(),3.6);neon.userData.glare=[2.5,2.2];GLARE.push(neon);
    // the door frame itself is lit warm white, as in the reference renders
    const warm=MAT.doorLed||emissive("#ffd9a0",3);
    for(const sd of [-1,1]){g.add(B3(.08,4.8,.08,neon,sd*3.84,2.4,3.56));g.add(B3(.1,3.0,.09,warm,sd*1.6,1.5,3.58))}
    g.add(B3(3.3,.1,.09,warm,0,3.0,3.58));
    for(const sd of [-1,1])g.add(B3(2.25,.06,.06,neon,sd*2.72,.04,3.6));
    for(const sd of [-1,1])g.add(B3(.04,.04,3.5-back,neon,sd*3.86,.03,(3.5+back)/2));
    // the neon spills onto the polished floor in front of the booth
    const sp=new THREE.Mesh(new THREE.PlaneGeometry(8.6,2.8),new THREE.MeshBasicMaterial({map:spillTex,color:nc,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));
    sp.rotation.x=-Math.PI/2;sp.position.set(0,.016,3.6+1.4);sp.userData.keep=true;sp.userData.mergeAdd=true;g.add(sp); }
  for(const sd of [-1,1]){const pl=palm(1.2,i*2+sd);pl.position.set(sd*2.35,0,4.05);pl.userData.keep=false;g.add(pl)}
  // name board over the door, facing the hall
  const hb=new THREE.Mesh(new THREE.PlaneGeometry(2.9,.9),new THREE.MeshBasicMaterial({map:canvasSign(1024,318,drawHeader(s,i))}));
  hb.position.set(0,3.58,3.66);hb.userData.keep=true;hb.userData.front=true;hb.userData.enter=i;g.add(hb);hallPick.push(hb);signMats.push(hb.material);
  g.add(B3(3.04,1.02,.06,MAT.metal,0,3.58,3.6));
  g.add(B3(2.6,.025,.025,emissive(s.c.acc,2),0,3.04,3.68));
  g.updateMatrixWorld(true);W=p=>g.localToWorld(p.clone());
  const interiorB=()=>{
  const decor0=g.children.length;const DC=decor(s,g,back,(lay[n-1]||{z:0}).z)||{};const decorKids=g.children.slice(decor0);
  const fz=fresnel();fz.position.set(2.9,0,2.3);g.add(fz);
  const sb=DC.noSoft?null:softbox();if(sb){sb.position.set(-3.1,0,1.4);g.add(sb)}
  g.updateMatrixWorld(true);
  const tgt=W(V(0,1.4,-.4));fz.userData.aim(tgt);if(sb)sb.userData.aim(tgt);
  const LI=IN.li||(s.theme==="light"?.4:1);
  slot(fz.userData.lensWorld(),tgt,"#ffdcaa",2.6*LI,.5,.6,s.theme!=="light");
  const acc=new THREE.Color(s.c.acc).getHSL({}).l<.15?"#ffffff":s.c.acc;
  slot(W(V(0,4.9,back+3.6)),W(V(0,2.3,back)),acc,2.2*LI,.62,.7);
  // brand wall at the end of the tunnel: logo (or name) with a thin light line in the brand accent
  const bw=brandWall(s);bw.position.set(0,3.12,back+.2);g.add(bw);
  const line=box(2.8,.022,.02,emissive(s.c.acc,2.4),0,2.6,back+.25);line.userData.keep=true;g.add(line);
  // the films themselves, each in its own slab of glass with a soft key light
  s.videos.forEach((v,j)=>{
    const L=lay[j],F=makeFrame(s,v,i);F.L=L;F.y0=L.y;F.r0=many?-L.x*.06:(L.x===0?0:-Math.sign(L.x)*.22);F.ph=j*1.7+i;
    F.G.position.set(L.x,L.y,L.z);F.G.rotation.y=F.r0;F.G.scale.setScalar(L.sc);g.add(F.G);frames.push(F);
    pick.push(F.screen,F.cap);   // only the picture and its caption open the film, not the glass around it
    if(!many)slot(W(V(L.x*.4,4.8,L.z+1.8)),W(V(L.x,1.6,L.z)),"#ffd9a6",1.6*LI,.42,.8,false);
  });
  // props never stand where a film floats (a big studio fills the room with films)
  { g.updateMatrixWorld(true);const fb=frames.map(F=>new THREE.Box3().setFromObject(F.G).expandByScalar(.12)),bb=new THREE.Box3();
    decorKids.forEach(o=>{bb.setFromObject(o);if(!bb.isEmpty()&&fb.some(b=>b.intersectsBox(bb)))g.remove(o)}); }
  // a deep room is lit by a few soft lights along its length instead of one per film
  { const bz=((lay[n-1]||{z:0}).z-.5+back+.35)/2;if((lay[n-1]||{z:0}).z-back>2.6)slot(W(V(0,4.8,bz+1.6)),W(V(0,.5,bz-.4)),"#ffe2bd",2.0*LI,.8,.85,false) }
  if(many)for(let k=0;k<3;k++){const lz=Z0-(k+.5)*(Z0-lay[n-1].z)/3;slot(W(V(0,4.8,lz+1.2)),W(V(0,1.4,lz-.6)),"#ffd9a6",1.8*LI,.7,.8,false)}
  };
  const finish=()=>{if(SETS[i].built)return;SETS[i].built=true;const z0=SLOT_ZONE;SLOT_ZONE=i;interiorA();interiorB();SLOT_ZONE=z0};
  // hanging sign over the aisle before the studio, arrow pointing to its door (both faces)
  const hs=new THREE.Group();hs.position.set(side*1.5,3.35,z+5.6);scene.add(hs);
  const fr=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.55),new THREE.MeshBasicMaterial({map:canvasSign(1024,256,drawHall(s,side)),transparent:true}));fr.position.z=.03;
  const bk=new THREE.Mesh(new THREE.PlaneGeometry(2.2,.55),new THREE.MeshBasicMaterial({map:canvasSign(1024,256,drawHall(s,-side)),transparent:true}));bk.rotation.y=Math.PI;bk.position.z=-.03;
  [fr,bk].forEach(m=>{m.userData.keep=true;m.userData.enter=i;hs.add(m);hallPick.push(m);m.material.userData.hang=true;signMats.push(m.material)});
  hs.add(box(2.26,.6,.04,MAT.metal,0,0,0));
for(const x of [-.9,.9])hs.add(stick(V(x,.3,0),V(x,4.6,0),.008,MAT.metal));
  loadLogo(s,()=>signTex.forEach(t=>t.userData.redraw()));
  SLOT_ZONE=-1;
  SETS[i]={g,s,i,side,z,W,frames,pick,lay,back,DZ,built:false,finish};
  PENDING_SETS.push(SETS[i]);
}

/* ---------- 3D glass frames: each film floats in a real slab of glass ---------- */
const CAP_H=.24;
function roundRect(w,h,r){const s=new THREE.Shape(),x=-w/2,y=-h/2;
  s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s}
function drawPoster(F){
  if(!F.posterCv)return;
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
  if(!F.capCv)return;
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
const framesAll=[],FRAME_GEO={};
const BLANK_TEX=(()=>{const t=new THREE.DataTexture(new Uint8Array([20,20,24,255]),1,1,THREE.RGBAFormat);t.needsUpdate=true;return t})();
// film covers and captions keep their mipmaps (without them they shimmered and looked low quality); graphics memory is
// kept down instead by freeing the films of studios far down the hall
function lightTex(t){return t}
function makeFrame(s,v,i){
  const vert=v.r!=="16/9",w=vert?.95:1.75,h=vert?w*16/9:w*9/16,pad=.045,depth=.07;
  const G=new THREE.Group(),F={s,v,G,w,h,set:i,video:null,vtex:null};
  // glass slab with real thickness
  // frames come in two sizes, so the glass slab and its edge lines are built once per size and shared (building one
  // per film was a large part of the time the page took to open)
  const slabH=h+pad*2+CAP_H,gk=w+"x"+h;
  const GG=FRAME_GEO[gk]||(FRAME_GEO[gk]=(()=>{const g=new THREE.ExtrudeGeometry(roundRect(w+pad*2,slabH,.06),{depth,bevelEnabled:true,bevelThickness:.012,bevelSize:.012,bevelSegments:3,curveSegments:6});
    g.translate(0,-CAP_H/2,-depth/2);return {slab:g,edges:new THREE.EdgesGeometry(g,30),face:new THREE.PlaneGeometry(w+pad*2,slabH),scr:new THREE.PlaneGeometry(w,h),cap:new THREE.PlaneGeometry(w,CAP_H),ln:new THREE.BoxGeometry(w*.5,.012,.012)}})());
  const geo=GG.slab;
  const glass=new PhysMat({color:new THREE.Color(s.c.acc).lerp(new THREE.Color("#bfc7d2"),.55).convertSRGBToLinear(),
    roughness:.03,metalness:.1,clearcoat:1,clearcoatRoughness:.03,transparent:true,opacity:.07,envMapIntensity:1.3,side:THREE.DoubleSide,depthWrite:false});
  glass.userData.glass=true;
  const slab=new THREE.Mesh(geo,glass);slab.renderOrder=2;G.add(slab);
  const edges=new THREE.LineSegments(GG.edges,new THREE.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.14}));G.add(edges);
  // liquid glass face: tinted body, sheen and bright rim, sitting just in front of the slab
  { const pw=w+pad*2,ph=slabH;
    const lf=new THREE.Mesh(GG.face,liquidMat(pw,ph,.075));
    lf.position.set(0,-CAP_H/2,depth/2+.006);lf.renderOrder=3;G.add(lf); }
  // screen (poster until the film is ready)
  F.screenMat=new THREE.MeshBasicMaterial({map:BLANK_TEX,fog:false});
  const scr=new THREE.Mesh(GG.scr,F.screenMat);scr.position.z=depth/2+.016;G.add(scr);F.screen=scr;
  // caption plate under the screen
  const cap=new THREE.Mesh(GG.cap,new THREE.MeshBasicMaterial({map:BLANK_TEX,transparent:true,depthWrite:false,fog:false}));   // no haze on the caption: it stays crisp
  cap.position.set(0,-h/2-pad-CAP_H/2+.02,depth/2+.016);cap.renderOrder=4;G.add(cap);F.cap=cap;
  // thin light line in the brand colour along the bottom edge
  const ln=new THREE.Mesh(GG.ln,cemi(s.c.acc,3));ln.position.set(0,-h/2-pad-CAP_H-.005,depth/2);G.add(ln);
  F.loadPoster=()=>{if(F.posterReq||!v.poster)return;F.posterReq=true;const im=new Image();im.decoding="async";im.onload=()=>{F.posterImg=im;drawPoster(F)};im.src=v.poster};
  // the cover and caption canvases exist only while their studio is near: on iPhone, Safari stops the page once all
  // canvases together pass its memory limit, and 133 films each holding two canvases came close to it
  F.makeTex=()=>{if(F.posterCv)return;const TS=TOUCH?.85:1;
    F.posterCv=document.createElement("canvas");F.posterCv.width=Math.round((vert?360:640)*TS);F.posterCv.height=Math.round((vert?640:360)*TS);
    F.posterTex=new THREE.CanvasTexture(F.posterCv);F.posterTex.encoding=THREE.sRGBEncoding;drawPoster(F);
    F.capCv=document.createElement("canvas");F.capCv.width=Math.round(1024*TS);F.capCv.height=Math.round(1024*TS*CAP_H/w);
    F.capTex=new THREE.CanvasTexture(F.capCv);F.capTex.encoding=THREE.sRGBEncoding;drawCaption(F);
    if(!F.vtex){F.screenMat.map=F.posterTex;F.screenMat.needsUpdate=true}cap.material.map=F.capTex;cap.material.needsUpdate=true;F.loadPoster()};
  F.freeTex=()=>{if(!F.posterCv)return;F.posterTex.dispose();F.capTex.dispose();F.posterCv.width=F.posterCv.height=F.capCv.width=F.capCv.height=0;
    F.posterCv=F.capCv=F.posterTex=F.capTex=null;if(!F.vtex){F.screenMat.map=BLANK_TEX;F.screenMat.needsUpdate=true}cap.material.map=BLANK_TEX;cap.material.needsUpdate=true};
  if(i<0)F.makeTex();
  G.traverse(o=>{o.userData.keep=true;o.userData.frame=F});
  addGlass(G,Math.max(w,h));framesAll.push(F);return F;
}
// films play on the glass only near the camera, and only from this site's own files (other hosts can't be drawn into 3D)
// the small films on the 3D walls play light copies (arta-videos-5/w/), so several can stream at once without stutter;
// tapping a film opens the original at full quality
const wallOf=src=>/^https:\/\/artanourii\.github\.io\/arta-videos-\d+\//.test(src)?"https://artanourii.github.io/arta-videos-5/w/"+src.split("/").pop():src;
// videos come from this site or from the arta-videos repos on GitHub Pages, which send CORS headers, so they can be drawn on the 3D walls
const sameOrigin=src=>{try{const o=new URL(src,location.href).origin;return o===location.origin||o==="https://artanourii.github.io"}catch(e){return false}};
let frameT=0;
function dropVideo(F){const v=F.video;F.video=null;v.pause();v.removeAttribute("src");v.load();
  if(F.vtex){F.vtex.dispose();F.vtex=null}F.screenMat.map=F.posterTex||BLANK_TEX;F.screenMat.needsUpdate=true}
function updateFrames(dt){
  frameT+=dt*.001;
  P3.panels.forEach(o=>{o.G.position.y=o.y0+Math.sin(frameT*.8+o.ph)*.03});
  const cp=camera.position;
  // only the films nearest the camera play (a studio can hold ten); the others keep their cover image
  // the next few films along the way already load (paused), so a film starts as soon as the camera reaches it
  const near=new Set(),pre=new Set(),NP=Q==="high"&&!TOUCH?4:2;
  if(setIdx>=0)SETS[setIdx].frames.filter(F=>F.v.src).map(F=>{F.G.getWorldPosition(tmp);return [tmp.distanceTo(cp),F]})
    .sort((a,b)=>a[0]-b[0]).slice(0,NP+2).forEach((x,k)=>{pre.add(x[1]);if(k<NP)near.add(x[1])});
  for(const F of framesAll){
    if(F.set<0){updateFeatureFilm(F,cp);continue}
    // leaving a studio frees its films (phones can only hold a few at a time)
    if(F.video&&F.set!==setIdx&&playerFrame!==F){dropVideo(F);continue}
    const S=SETS[F.set],far=Math.abs(cp.z-S.z)>22;
    // films of studios far down the hall are hidden and their covers freed from graphics memory (phones ran out of it)
    if(F.G.visible===far){F.G.visible=!far;if(far)F.freeTex()}
    if(!far)F.makeTex();
    if(far)continue;
    F.G.position.y=F.y0+Math.sin(frameT*.9+F.ph)*.035;F.G.rotation.y=F.r0+Math.sin(frameT*.6+F.ph)*.025;
    if(!F.v.src||!sameOrigin(F.v.src))continue;
    F.G.getWorldPosition(tmp);const d=tmp.distanceTo(cp);
    const want=F.set===setIdx&&d<8&&near.has(F)&&!(playerEl&&playerFrame===F)&&!document.hidden;
    if(!F.video&&F.set===setIdx&&pre.has(F)&&d<16&&!F.v._bad){
      const vd=document.createElement("video");vd.crossOrigin="anonymous";Object.assign(vd,{src:wallOf(F.v.src),muted:true,loop:true,playsInline:true,preload:"auto"});vd.setAttribute("playsinline","");
      F.video=vd;vd.addEventListener("playing",()=>{if(F.video!==vd)return;if(!F.vtex){F.vtex=new THREE.VideoTexture(vd);F.vtex.encoding=THREE.sRGBEncoding}F.screenMat.map=F.vtex;F.screenMat.needsUpdate=true},{once:true});
      // a missing light copy falls back to the original; only a failing original marks the film as broken
      vd.addEventListener("error",()=>{if(F.video!==vd)return;if(!vd._fb&&vd.src!==F.v.src){vd._fb=1;vd.src=F.v.src;vd.play().catch(()=>{})}else F.v._bad=true});
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
    if(c.glow!==false){F.G.updateMatrixWorld(true);const bb=new THREE.Box3().setFromObject(F.screen).union(new THREE.Box3().setFromObject(F.cap)),sz=bb.getSize(V(0,0,0)),ct=bb.getCenter(V(0,0,0));
    const gw=new THREE.Mesh(new THREE.PlaneGeometry(sz.x+.42,sz.y+.42),new THREE.MeshBasicMaterial({map:frameGlowTex,color:C(c.glow||"#ffd9a0"),transparent:true,opacity:.55,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));
    gw.position.set(ct.x,ct.y,bb.min.z-.02);gw.userData.keep=true;F.G.add(gw);}
    scene.add(F.G);FEATS3.push(F)};
  mk(FEATURES.logoAd,{bg:"#141414",bg2:"#2a2a2a",ink:"#1d1a17",acc:"#ffc978"},cp=>clamp((-6.6-cp.z)/2.6,0,1),14);
  mk(FEATURES.instagramAd,{bg:"#1a1024",bg2:"#3a1a3a",ink:"#1d1a17",acc:"#e1306c",glow:false},()=>1,24);
  layoutFeatureFilms();
}
function layoutFeatureFilms(){
  const P=portrait();
  for(const F of FEATS3){
    if(F.v===FEATURES.logoAd){F.base.set(0,2.15,P?-12.6:-15);F.sc=P?1:1.3}
    else{F.base.set(0,P?4.75:3.55,LED_Z);F.sc=P?1.6:2.35}
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
      const vd=document.createElement("video");vd.crossOrigin="anonymous";Object.assign(vd,{src:wallOf(F.v.src),muted:true,loop:true,playsInline:true,preload:"auto"});vd.setAttribute("playsinline","");
      F.video=vd;vd.addEventListener("playing",()=>{if(F.video!==vd)return;if(!F.vtex){F.vtex=new THREE.VideoTexture(vd);F.vtex.encoding=THREE.sRGBEncoding}F.screenMat.map=F.vtex;F.screenMat.needsUpdate=true},{once:true});
      // a missing light copy falls back to the original; only a failing original marks the film as broken
      vd.addEventListener("error",()=>{if(F.video!==vd)return;if(!vd._fb&&vd.src!==F.v.src){vd._fb=1;vd.src=F.v.src;vd.play().catch(()=>{})}else F.v._bad=true});
    }
    const v=F.video;
    if(v&&!F.v._bad){
      if(want){
        if(v.paused){v.muted=!(sound&&canSound());F.vol=0;if(!v.muted)v.volume=0;v.play().catch(()=>{v.muted=true;v.play().catch(()=>{})})}
        if(sound&&v.muted&&canSound())v.muted=false;
        // the sound rises as you walk up to the screen
        if(sound&&!v.muted){const tv=clamp((F.range-d)/(F.range*.45),0,1);F.vol=clamp((F.vol||0)+(tv-(F.vol||0))*.08,0,1);v.volume=F.vol}
        showHint=sound&&v.muted;
      }else if(!v.paused){
        // the fade is counted by the site, not read back from the video: iPhone ignores video.volume, so the film never stopped
        if(sound&&!v.muted&&(F.vol||0)>.03&&!playerEl&&!IOS){F.vol*=.85;v.volume=F.vol}else{F.vol=0;v.pause()}}
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
function refreshCaptions(){framesAll.forEach(drawCaption);brandTex.forEach(t=>{if(t.userData.s.showTag)drawBrand(t)});signTex.forEach(t=>t.userData.redraw())}
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
  if(mode==="hall"){const pq=pickPlaque(e.clientX,e.clientY);if(pq){if(pq.act==="lang")toggleLang();else if(pq.act==="light")toggleLight();else window.open(pq.link,"_blank","noopener");return}
    const ce=pickEnd(e.clientX,e.clientY);if(ce){window.open(ce.link,"_blank","noopener");return}
    const pi=pickPanel(e.clientX,e.clientY);if(pi>=0){openSheet(T().panels[pi].id);return}}
  const F=pickFrame(e.clientX,e.clientY)||pickFeatureFilm(e.clientX,e.clientY);
  if(F&&mode==="set"){const S=SETS[setIdx],j=S.frames.indexOf(F);F.screen.getWorldPosition(tmp);
    // a film further away: the camera flies over to it first; close up, a tap opens it
    if(j>=0&&(j!==curFilm(S)||tmp.distanceTo(camera.position)>2.8)){goFilm(j);return}}
  if(F){playerFrame=F;openPlayer(F.v,()=>frameRect(F),F.video?F.video.currentTime:0);return}
  const i=pickSign(e.clientX,e.clientY);if(i>=0&&i!==setIdx)enterSet(i);
});
canvas.addEventListener("pointermove",e=>{if(e.pointerType==="mouse")canvas.style.cursor=pickPlaque(e.clientX,e.clientY)||pickEnd(e.clientX,e.clientY)||pickFrame(e.clientX,e.clientY)||pickFeatureFilm(e.clientX,e.clientY)||pickSign(e.clientX,e.clientY)>=0||(mode==="hall"&&pickPanel(e.clientX,e.clientY)>=0)?"pointer":""},{passive:true});

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
  const m=new PhysMat({color:C("#cfd4dc"),roughness:.05,metalness:.1,clearcoat:1,clearcoatRoughness:.05,transparent:true,opacity:.16,envMapIntensity:1.2,side:THREE.DoubleSide,depthWrite:false});
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
  float lod=2.5+bend*1.6;   // frost, so text on the glass stays easy to read and small bright lights behind don't sparkle
  vec3 col=vec3(texture2D(tBack,suv+off*1.1,lod).r,texture2D(tBack,suv+off,lod).g,texture2D(tBack,suv+off*.9,lod).b);
  // bright lamps and light cones behind the glass are compressed, so they can't flash through it as the camera moves
  col=col*1.3/(1.+col*.6);
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
  // every frame while the camera moves (skipping then made the glass lag and flicker); at rest every fourth frame
  if(camRest>3&&(GLASS.tick++&3))return;
  GLASS.pm.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);GLASS.fr.setFromProjectionMatrix(GLASS.pm);
  const vis=[];
  for(const o of GLASS.groups){if(!o.G.visible||!o.G.parent)continue;o.G.getWorldPosition(GLASS.sph.center);GLASS.sph.radius=o.r*o.G.scale.x;
    if(GLASS.sph.center.distanceTo(camera.position)<16&&GLASS.fr.intersectsSphere(GLASS.sph))vis.push(o.G)}   // farther glass is too small for its backdrop to show
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
    if(face.material.uniforms){face.material.uniforms.uSize.value.set(wm,hm);face.material.uniforms.uRad.value=Math.min(hm*.32,.1)}
    // a very faint slab behind gives the glass some thickness when seen at an angle
    if(slab){G.remove(slab);slab.geometry.dispose()}
    const geo=new THREE.ExtrudeGeometry(roundRect(wm,hm,Math.min(hm*.32,.1)),{depth:.04,bevelEnabled:true,bevelThickness:.008,bevelSize:.008,bevelSegments:2,curveSegments:6});geo.translate(0,0,-.02);
    slab=new THREE.Mesh(geo,LG_SLAB);slab.renderOrder=2;G.add(slab);
    G.traverse(o=>{o.userData.keep=true});
  };
  return {G,face,tex:{userData:{redraw}},redraw};
}
const LG_SLAB=new PhysMat({color:C("#dfe6f0"),roughness:.03,metalness:.1,clearcoat:1,clearcoatRoughness:.03,transparent:true,opacity:.07,envMapIntensity:1.4,side:THREE.DoubleSide,depthWrite:false});
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
    if(dark){g.shadowColor="rgba(255,236,205,.8)";g.shadowBlur=26}   // a soft glow round the letters at night (phones have no bloom pass)
    g.fillStyle=c.t;let f=150;const ff=()=>fa?`800 ${f}px "Vazirmatn", sans-serif`:`800 ${f}px "Unbounded", "Vazirmatn", sans-serif`;g.font=ff();
    if("letterSpacing" in g)g.letterSpacing=fa?"0px":(f*.12)+"px";while(g.measureText(t[k1]).width>w*.94&&f>40){f-=6;g.font=ff();if("letterSpacing" in g)g.letterSpacing=fa?"0px":(f*.12)+"px"}
    g.fillText(t[k1],w/2,h*.38);if("letterSpacing" in g)g.letterSpacing="0px";g.fillStyle=c.m;g.font=`400 58px "Vazirmatn", sans-serif`;g.fillText(t[k2],w/2,h*.8)};
  P3.gate=title(heading("arch","archSub"),2048,420,5.4);
  // the title hangs on a white banner, as in the reference renders: dark text on the dark ceiling could not be read
  { const bn=new THREE.Mesh(new THREE.PlaneGeometry(5.9,5.4*420/2048+.32),(MAT.banner=new THREE.MeshBasicMaterial({color:C("#f6f2ec"),fog:false})));bn.position.z=-.02;bn.userData.keep=true;P3.gate.add(bn);
    const be=new THREE.Mesh(new THREE.PlaneGeometry(5.98,5.4*420/2048+.4),(MAT.bannerEdge=new THREE.MeshBasicMaterial({color:C("#d9d3ca"),fog:false})));be.position.z=-.03;be.userData.keep=true;P3.gate.add(be);   // a thin rim so the board reads against the dark ceiling
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
  buildEndPanel();buildPlaques();
}
// positions depend on the screen shape; text depends on language and light mode
function layoutPanels3D(){
  const P=portrait(),CP=P?[[-.55,2.3,-14.2],[.55,1.3,-15.6],[-.55,2.3,-17.2],[.55,1.3,-18.6],[0,1.3,-20.4]]:[[-2.1,2.05,-14.2],[2.1,2.25,-15.4],[-2.3,1.35,-17.0],[2.25,1.45,-18.4],[0,1.4,-20.2]];
  P3.panels.forEach((o,i)=>{o.G.position.set(...CP[i]);o.y0=CP[i][1];o.G.rotation.y=-CP[i][0]*.12;o.G.scale.setScalar(P?.82:1)});
  P3.gate.position.set(0,5.6,-11);P3.gate.scale.setScalar(P?.82:1);
  P3.studios.position.set(0,P?2.2:2.35,-24.6);P3.studios.scale.setScalar(P?.8:1);
  layoutFeatureFilms();
}
/* the contact card at the end of the hall: the same 3D liquid glass as the Arta Studio panels, with tappable
   WhatsApp / Instagram / LinkedIn buttons drawn on it */
const ICON_IMG={};
function iconImg(k){
  if(ICON_IMG[k])return ICON_IMG[k];const im=new Image();ICON_IMG[k]=im;
  let svg=ICON[k].replace(/currentColor/g,"#ffffff");if(!/xmlns=/.test(svg))svg=svg.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" ');
  im.onload=()=>{redrawPlaques()};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);return im;
}


/* ---------- the entrance wall, built to the screen: a wide door on a computer, tablet or a phone held sideways,
   a narrow one on a phone held upright so the glass plaques fit on the wall above it; rebuilt when the device turns ---------- */
let FACADE_G=null,FACADE_TEX=null,FACADE_FAN=null,FACADE_PORT=null;
function buildFacade(){
  const PORT=portrait(),SHORT=shortLand(),key=PORT?"p":SHORT?"s":"w";if(FACADE_G&&FACADE_PORT===key)return false;FACADE_PORT=key;
  if(FACADE_G){scene.remove(FACADE_G);FACADE_G.traverse(o=>{if(o.geometry)o.geometry.dispose()})}
  const G=FACADE_G=new THREE.Group();scene.add(G);
  // a phone held sideways is short: a smaller door and sign so the plaques beside it can be read close up
  const DW=PORT?2.4:SHORT?5:9,DH=PORT?3.2:SHORT?3.7:4.6,SS=PORT?.85:SHORT?.8:1;
  for(const sd of [-1,1])G.add(box((36-DW)/2,13,.5,MAT.facade,sd*(DW/2+(36-DW)/4),6.5,10));
  G.add(box(DW,13-DH,.5,MAT.facade,0,DH+(13-DH)/2,10));
  if(!MAT.trim)MAT.trim=emissive("#f2c27a",2.4);const trim=MAT.trim;
  G.add(box(DW+.3,.07,.07,trim,0,DH+.04,10.28));for(const sd of [-1,1])G.add(box(.07,DH,.07,trim,sd*(DW/2+.15),DH/2,10.28));
  G.add(box(36,.06,.06,trim,0,12.97,10.28));
  const fs=new THREE.Mesh(new THREE.PlaneGeometry(7.4*SS,2.02*SS),new THREE.MeshBasicMaterial({map:FACADE_TEX,transparent:true}));fs.position.set(0,PORT?7.45:DH+(SHORT?1.2:1.42),10.27);G.add(fs);
  // palms in black planters either side of the door
  for(const sd of [-1,1]){const pl=palm(1.45,sd+3);pl.position.set(sd*(DW/2+4.1),0,10.75);G.add(pl)}
  // warm light washing up the door posts, and its glow on the forecourt
  for(const sd of [-1,1]){const f=new THREE.Mesh(new THREE.PlaneGeometry(1.4,DH*1.3),FACADE_FAN);f.position.set(sd*(DW/2+.6),DH*.65,10.27);G.add(f)}
  const gm=new THREE.MeshBasicMaterial({map:glowTex,color:C("#ffcf8a"),transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false,fog:false});
  const gl=new THREE.Mesh(new THREE.PlaneGeometry(DW+1.5,5),gm);gl.rotation.x=-Math.PI/2;gl.position.set(0,.01,12.75);G.add(gl);
  G.traverse(o=>{o.userData.keep=true});
  return true;
}
/* ---------- glass plaques screwed to the facade: contacts on the left, language and lights on the right ---------- */
const END_FOCUS=new THREE.Object3D(),PLQ=[],PLQ_W=2.4,PLQ_H=.72;let PLQ_SHADOW=null,PLQ_RIM=null;
// a satin finish: a mirror-sharp clearcoat caught the moving spotlights and flashed whenever the camera moved
const PLQ_GLASS=new PhysMat({color:C("#caa676"),roughness:.5,metalness:0,clearcoat:.6,clearcoatRoughness:.35,transparent:true,opacity:.34,emissive:C("#ffc27a"),emissiveIntensity:.06,envMapIntensity:.6});
PLQ_GLASS.userData.glass=true;
function buildPlaques(){
  const items=[{k:"wa",cols:["#1FA855"],ct:CONTACT.whatsapp},{k:"ig",cols:["#F5B041","#D6336C","#7B3FE4"],ct:CONTACT.instagram}];
  if(CONTACT.linkedin&&CONTACT.linkedin.link)items.push({k:"li",cols:["#0A66C2"],ct:CONTACT.linkedin});
  items.push({k:"lang",cols:["#141210"],act:"lang",right:true},{k:"light",cols:["#141210"],act:"light",right:true});
  // the end of the hall: the same glass plaques on the concrete wall, contacts on one side of the Instagram film and
  // a matching plaque with the invitation on the other, so the wall is symmetric
  items.push({k:"head",cols:[],end:true,W:PLQ_W,H:PLQ_H*3+.26});
  items.filter(it=>it.ct).forEach(it=>items.push(Object.assign({},it,{end:true})));
  const D=.06,GEO={};
  // a slab of frosted glass with real thickness, a polished bright edge, four chrome standoff screws and a soft shadow on the wall
  const geos=(W,H)=>GEO[W+"x"+H]||(GEO[W+"x"+H]=(()=>{const rimS=roundRect(W+.026,H+.026,.082);rimS.holes.push(roundRect(W-.012,H-.012,.064));
    return {slab:new THREE.ExtrudeGeometry(roundRect(W,H,.07),{depth:D,bevelEnabled:true,bevelThickness:.012,bevelSize:.012,bevelSegments:3,curveSegments:8}),rim:new THREE.ShapeGeometry(rimS,8)}})());
  const bolt=new THREE.CylinderGeometry(.034,.034,.11,20);bolt.rotateX(Math.PI/2);const cap=new THREE.CylinderGeometry(.04,.04,.018,20);cap.rotateX(Math.PI/2);
  if(!PLQ_SHADOW){PLQ_SHADOW=new THREE.MeshBasicMaterial({map:canvasTex(256,96,(g,w,h)=>{g.filter="blur(10px)";rr(g,22,22,w-44,h-44,14);g.fillStyle="rgba(0,0,0,.85)";g.fill()}),transparent:true,depthWrite:false,opacity:.55});PLQ_RIM=emissive("#fff1d8",.35)}   // a soft edge: brighter, the thin line shimmered in the glow as the camera moved
  items.forEach(it=>{
    const W=it.W||PLQ_W,H=it.H||PLQ_H,cvW=1080,cvH=Math.round(1080*H/W),{slab:geo,rim:rimG}=geos(W,H);
    const G=new THREE.Group();
    const sh=new THREE.Mesh(new THREE.PlaneGeometry(W+.3,H+.3),PLQ_SHADOW);sh.position.set(.05,-.06,-.075);sh.renderOrder=7;G.add(sh);
    const slab=new THREE.Mesh(geo,PLQ_GLASS);slab.position.z=-D/2;slab.renderOrder=8;G.add(slab);
    const rim=new THREE.Mesh(rimG,PLQ_RIM);rim.position.z=D/2+.013;rim.renderOrder=9;G.add(rim);
    for(const sx of [-1,1])for(const sy of [-1,1]){const b=new THREE.Mesh(bolt,MAT.chrome);b.position.set(sx*(W/2-.1),sy*(H/2-.1),-.02);G.add(b);
      const c=new THREE.Mesh(cap,MAT.chrome);c.position.set(sx*(W/2-.1),sy*(H/2-.1),D/2+.02);G.add(c)}
    const cv=document.createElement("canvas");cv.width=cvW;cv.height=cvH;const tex=new THREE.CanvasTexture(cv);tex.encoding=THREE.sRGBEncoding;tex.anisotropy=8;
    const face=new THREE.Mesh(new THREE.PlaneGeometry(W,H),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}));face.position.z=D/2+.014;face.renderOrder=10;G.add(face);face.material.color.setScalar(dark?.86:1);
    const draw=()=>{const g=cv.getContext("2d"),t=T(),fa=lang==="fa";g.clearRect(0,0,cvW,cvH);
      // frosted glass: a diagonal sheen over a soft warm tint, so the slats behind still show through faintly
      const gr=g.createLinearGradient(0,0,cvW*.6,cvH*1.4);gr.addColorStop(0,"rgba(250,238,218,.9)");gr.addColorStop(.45,"rgba(238,220,192,.84)");gr.addColorStop(1,"rgba(222,200,168,.8)");
      rr(g,0,0,cvW,cvH,56);g.fillStyle=gr;g.fill();
      const sh2=g.createLinearGradient(0,0,0,cvH*.5);sh2.addColorStop(0,"rgba(255,255,255,.22)");sh2.addColorStop(1,"rgba(255,255,255,0)");rr(g,0,0,cvW,cvH*.5,56);g.fillStyle=sh2;g.fill();
      if(it.k==="head"){   // the invitation: big words centred on the glass
        if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign="center";g.textBaseline="alphabetic";g.fillStyle="#15100b";
        const fT=fa?`800 128px "Vazirmatn", sans-serif`:`800 112px "Unbounded", "Vazirmatn", sans-serif`;g.font=fT;
        const words=t.endH.split(" "),lines=[];let cur="";for(const w of words){const tr=cur?cur+" "+w:w;if(g.measureText(tr).width>cvW-150&&cur){lines.push(cur);cur=w}else cur=tr}if(cur)lines.push(cur);
        const lh=fa?160:142,y0=cvH/2-(lines.length*lh)/2-30;lines.forEach((l,i)=>g.fillText(l,cvW/2,y0+lh*.8+i*lh));
        g.fillStyle="#2b231c";g.font=`600 60px "Vazirmatn", sans-serif`;g.fillText(t.endSub,cvW/2,y0+lines.length*lh+84);
        tex.needsUpdate=true;return}
      const bs=150,bx=fa?cvW-80-bs:80,by=(cvH-bs)/2;rr(g,bx,by,bs,bs,38);
      if(it.cols.length>1){const ig=g.createLinearGradient(bx,by+bs,bx+bs,by);it.cols.forEach((c,i)=>ig.addColorStop(i/(it.cols.length-1),c));g.fillStyle=ig}else g.fillStyle=it.cols[0];g.fill();
      if(it.k==="lang"){g.fillStyle="#fff";g.font=`800 64px ${fa?'"Unbounded", sans-serif':'"Vazirmatn", sans-serif'}`;g.textAlign="center";g.textBaseline="middle";g.fillText(fa?"EN":"فا",bx+bs/2,by+bs/2+4)}
      else{const im=iconImg(it.k==="light"?(dark?"sun":"moon"):it.k);if(im.complete&&im.naturalWidth)g.drawImage(im,bx+bs*.2,by+bs*.2,bs*.6,bs*.6)}
      const small=it.k==="lang"?t.otherSmall:it.k==="light"?t.lightsLabel:t[it.k],big=it.k==="lang"?t.other:it.k==="light"?(dark?t.toLight:t.toDark):it.ct.display;
      if("direction" in g)g.direction=fa?"rtl":"ltr";g.textAlign=fa?"right":"left";g.textBaseline="alphabetic";
      const tx=fa?bx-44:bx+bs+44,room=cvW-bs-80-44-(it.act?150:80);
      g.fillStyle="#2b231c";g.font=`600 52px "Vazirmatn", sans-serif`;g.fillText(small,tx,cvH/2-14);
      let f=74;const ff=()=>`700 ${f}px "Vazirmatn", sans-serif`;g.font=ff();while(g.measureText(big).width>room&&f>36){f-=3;g.font=ff()}
      g.fillStyle="#15100b";if(!it.act&&"direction" in g)g.direction="ltr";g.fillText(big,tx,cvH/2+72);
      if(it.act){const cx=fa?78:cvW-88;g.strokeStyle="#15100b";g.lineWidth=9;g.lineCap="round";g.lineJoin="round";g.beginPath();const d=fa?-1:1;g.moveTo(cx-d*14,cvH/2-28);g.lineTo(cx+d*13,cvH/2);g.lineTo(cx-d*14,cvH/2+28);g.stroke()}
      tex.needsUpdate=true};
    draw();G.traverse(o=>{o.userData.keep=true});scene.add(G);
    PLQ.push({G,face,draw,it,link:it.ct&&it.ct.link,act:it.act,sc:1,W,H});
  });
  layoutPlaques();
}
function layoutPlaques(){
  const P=portrait(),door=PLQ.filter(o=>!o.it.end),L=door.filter(o=>!o.it.right),R=door.filter(o=>o.it.right);
  // end wall: invitation left of the film, the three contacts right of it, mirrored; on a phone the contacts sit under the film
  { const ez=LED_Z-1.2+.075,head=PLQ.find(o=>o.it.k==="head"),ec=PLQ.filter(o=>o.it.end&&o.it.ct);
    if(!P){head.G.visible=true;head.G.position.set(-4.3,2.55,ez);head.sc=1;head.G.scale.setScalar(1);ec.forEach((o,i)=>{o.G.position.set(4.3,3.4-i*.85,ez);o.sc=1;o.G.scale.setScalar(1)})}
    else{head.G.visible=true;head.G.position.set(-.74,1.62,ez);head.sc=.55;head.G.scale.setScalar(.55);ec.forEach((o,i)=>{o.G.position.set(.74,2.09-i*.47,ez);o.sc=.55;o.G.scale.setScalar(.55)})}
    END_FOCUS.position.set(0,P?1.62:2.55,ez);END_FOCUS.position.x=P?0:4.3;END_FOCUS.rotation.set(0,0,0); }
  const put=(o,x,y,z,sc)=>{o.G.position.set(x,y,z);o.sc=sc;o.G.scale.setScalar(sc)};
  if(!P&&shortLand()){
    // phone held sideways: a smaller door, the plaques close beside it
    L.forEach((o,i)=>put(o,-3.75,2.95-i*.8,10.33,.92));R.forEach((o,i)=>put(o,3.75,2.95-i*.8,10.33,.92));
  }else if(!P){
    // flat on the slatted wall either side of the door, held a few centimetres off it by four screws
    L.forEach((o,i)=>put(o,-6.15,3.0-i*.92,10.33,1));R.forEach((o,i)=>put(o,6.15,3.0-i*.92,10.33,1));
  }else{
    // a phone screen is tall and narrow: the plaques hang in two columns on the wall between the door and the sign
    const sc=1.25;L.forEach((o,i)=>put(o,i>=R.length?0:-1.55,5.95-i*.98,10.33,sc));R.forEach((o,i)=>put(o,1.55,5.95-i*.98,10.33,sc));
  }
  PLQ.forEach(o=>{if(o.hit){o.hit.meters=o.W*o.sc;o.hit.dead=!o.G.visible}});
}
function pickPlaque(x,y){
  if(mode!=="hall"||!PLQ.length)return null;ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);
  const h=ray.intersectObjects(PLQ.map(o=>o.face),false)[0];if(!h||h.distance>30)return null;return PLQ.find(o=>o.face===h.object)||null;
}
function redrawPlaques(){PLQ.forEach(o=>o.draw())}
// the contacts at the end of the hall are glass plaques now (buildPlaques); the camera's last stop faces them
function buildEndPanel(){P3.end={G:END_FOCUS}}
function pickEnd(x,y){
  if(!P3.end||!P3.end.face||mode!=="hall")return null;ndc.set(x/innerWidth*2-1,-(y/innerHeight)*2+1);ray.setFromCamera(ndc,camera);
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
  // the contact and setting chips are glass plaques on the facade now (buildPlaques)
  if(!P&&!shortLand())anchor(`<div class="tagline">${t.line}</div>`,V(0,4.05,11.6),4.4,{far:24});   // a phone has no room for it beside the plaques
  // invisible real links and buttons over the glass plaques, so a tap or click always opens them
  PLQ.forEach(o=>{if(o.it.k==="head")return;const lbl=o.act==="lang"?t.otherSmall:o.act==="light"?t.lightsLabel:t[o.it.k];
    const h=o.link?`<a class="plq-hit" href="${o.link}" target="_blank" rel="noopener" aria-label="${lbl}"></a>`:`<button class="plq-hit ${o.act}-chip" aria-label="${lbl}"></button>`;
    o.hit=anchor(h,o.G.position,o.W*o.sc,{far:30,near:.6})});
  if(PLQ.length){layoutPlaques();redrawPlaques()}
  // the Arta Studio panels and the two floating titles are 3D objects now (see buildPanels3D)
  if(P3.panels.length){layoutPanels3D();redrawPanels3D()}
  // contact card beside the floating Instagram film (below it on phones), never on top of the picture
  sndA=FEATURES.instagramAd&&FEATURES.instagramAd.src?anchor(`<span class="snd snd3" hidden>${ICON.mute}<span>${t.tapSound}</span></span>`,V(0,P?6.25:6.05,LED_Z+.2),P?1.5:1.3,{far:26}):null;
  ovl.querySelectorAll(".lang-chip").forEach(b=>b.addEventListener("click",toggleLang));
  ovl.querySelectorAll(".light-chip").forEach(b=>b.addEventListener("click",toggleLight));
  ovl.querySelectorAll(".lang-chip,.light-chip").forEach(b=>b.addEventListener("pointerdown",e=>e.stopPropagation()));
  measure();
}

/* ---------- feature films that play on their own as you walk up ---------- */
let activated=false;
["pointerdown","keydown","touchend"].forEach(n=>addEventListener(n,()=>{activated=true},{capture:true,passive:true}));
// browsers only allow sound after the visitor has tapped, clicked or pressed a key on the page
const canSound=()=>navigator.userActivation?navigator.userActivation.hasBeenActive:activated;
/* ---------- post processing ---------- */
const FinalShader={
  uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.55},uGrain:{value:.005},uExp:{value:1},uWarm:{value:new THREE.Vector3(1,1,1)}},
  vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime,uVig,uGrain,uExp;uniform vec3 uWarm;varying vec2 vUv;
    float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*uExp*uWarm;   // a warm golden grade, as in the reference renders
     
      c=clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);
      c=pow(c,vec3(1./2.2));
      float d=distance(vUv,vec2(.5));c*=mix(1.,smoothstep(.9,.28,d),uVig);
      c+=(h(gl_FragCoord.xy)+h(gl_FragCoord.yx+.37)-1.)*uGrain;
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
      rt.samples=DPR>=1.5?2:4;   // on sharp (high-density) screens two samples give the same clean edges as four
    }
    composer=new THREE.EffectComposer(renderer,rt);composer.setPixelRatio(DPR);composer.setSize(innerWidth,innerHeight);
    composer.addPass(new THREE.RenderPass(scene,camera));
    bloom=new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth*(Q==="high"?.6:.4),innerHeight*(Q==="high"?.6:.4)),.8,.5,.75);composer.addPass(bloom);
    // the bloom's small blurred layers were 8-bit: soft dark glows broke into visible steps and blocks; half-float keeps them smooth
    if(renderer.capabilities.isWebGL2&&renderer.extensions.get("EXT_color_buffer_float"))[bloom.renderTargetBright,...bloom.renderTargetsHorizontal,...bloom.renderTargetsVertical].forEach(t=>{if(t)t.texture.type=THREE.HalfFloatType});
    finalPass=new THREE.ShaderPass(FinalShader);composer.addPass(finalPass);
  }
  renderer.toneMapping=useComposer?THREE.NoToneMapping:THREE.ACESFilmicToneMapping;
  renderer.outputEncoding=useComposer?THREE.LinearEncoding:THREE.sRGBEncoding;
  scene.traverse(o=>{if(o.material)[].concat(o.material).forEach(m=>m.needsUpdate=true)});
}

/* ---------- spotlight pool ---------- */
const pool=[];
function setupPool(){
  const n=Q==="high"?7:5;
  for(let i=0;i<n;i++){
    const s=new THREE.SpotLight(0xffffff,0,26,.5,.5,1.4);
    if(i===0&&renderer.shadowMap.enabled){s.castShadow=true;s.shadow.mapSize.set(1024,1024);s.shadow.bias=-.0004;s.shadow.camera.near=.5;s.shadow.camera.far=26}
    scene.add(s,s.target);pool.push(s);
  }
}
let lightMul=1;
function updatePool(){
  // the few real spotlights are shared out among the light positions. Inside a studio its own lights stay fixed
  // wherever the camera goes; in the hall the nearest lights win, and a light only lets go once it is clearly
  // farther than the others, so lights do not pulse on and off as the camera moves (that made the floors flicker)
  const cp=camera.position,N=pool.length;let want;
  if(mode==="set"&&setIdx>=0)want=new Set(slots.filter(s=>s.zone===setIdx).sort((a,b)=>b.intensity-a.intensity).slice(0,N));
  else{const K=Math.max(2,N-2),rank=slots.map(s=>[s,s.to.distanceToSquared(cp)]).sort((a,b)=>a[1]-b[1]).map(a=>a[0]);
    want=new Set(rank.slice(0,K));
    for(const L of pool){const s=L.userData.slot;if(s&&s.w>.5&&want.size<N&&rank.indexOf(s)<K+2)want.add(s)}}
  for(const L of pool){const s=L.userData.slot;if(!s)continue;const tgt=want.has(s)?1:0;s.w=(s.w||0)+(tgt-(s.w||0))*.06;if(!tgt&&s.w<.02){s.w=0;L.userData.slot=null}}
  for(const s of want){if(pool.some(L=>L.userData.slot===s))continue;const L=pool.find(L=>!L.userData.slot);if(!L)break;
    L.userData.slot=s;s.w=0;L.position.copy(s.from);L.target.position.copy(s.to);L.color.copy(s.color);L.angle=s.angle;L.penumbra=s.pen}
  for(const L of pool){const s=L.userData.slot;L.intensity=s?s.intensity*lightMul*s.w:0}
}

/* ---------- theme ---------- */
if(sysDark.addEventListener)sysDark.addEventListener("change",()=>{if(!themeChoice&&HANDHELD&&dark!==sysDark.matches){dark=sysDark.matches;applyTheme();buildOverlays()}});
function applyTheme(){
  document.documentElement.dataset.theme=dark?"dark":"light";
  GLASS.dark.value=dark?1:0;
  framesAll.forEach(drawCaption);
  const bg=dark?"#0a0807":"#b9ad9e";
  scene.background=C(bg);scene.fog.color=C(bg);scene.fog.density=dark?.024:.0026;
  MAT.floor.color=C(dark?"#0b0907":"#b3aea7");MAT.floor.roughness=dark?.3:.4;if(MAT.floor.transparent)MAT.floor.opacity=dark?.9:.6;
  MAT.wall.color=C(dark?"#1f1b18":"#a7a29b");MAT.ceil.color=C(dark?"#0a0908":"#3f3c38");
  MAT.hallCyc.color=C(dark?"#1b1b1e":"#dcd8d2");MAT.plinth.color=C(dark?"#0c0c0d":"#dedad4");MAT.plinth.roughness=dark?.28:.7;MAT.plinth.metalness=dark?.2:0;
  MAT.facade.color=C(dark?"#8a7462":"#6a5646");MAT.ground.color=C(dark?"#0d0d0f":"#3e3b38");MAT.ground.roughness=.32;
  MAT.logo.color=C(dark?"#f1eee8":"#0a0a0b");if(MAT.halo){MAT.halo.userData.base=dark?0:.12;MAT.halo.color=C(dark?"#fff0d6":"#ffc978")}
  // the glow planes stand in for the bloom pass on phones; with bloom on they only add a touch
  if(MAT.wmGlow)MAT.wmGlow.userData.base=0;if(MAT.logoGlow)MAT.logoGlow.userData.base=0;   // a soft glow behind the logo and its name at night, also on phones that skip the bloom pass
  // light mode: a satin black logo with a faint warm glow, instead of flat matt black
  MAT.logo.roughness=dark?.32:.38;MAT.logo.metalness=dark?.08:0;MAT.logo.emissive=C(dark?"#fff3dc":"#000000");MAT.logo.emissiveIntensity=dark?.1:0;   // with the lights off the projectors light the AN logo
  if(MAT.wordmark)MAT.wordmark.color=dark?C("#fff6e8").multiplyScalar(.78):C("#000000");   // and its name on the plinth is simply bright, no halo
  MAT.truss.color=C(dark?"#7c8087":"#4a4e55");
  // the ceiling work lights are switched off when the studio lights are on
  // the white pendant lamps glow warm, as in the reference renders
  MAT.space.emissive=C("#ffc98a");MAT.space.emissiveIntensity=dark?.75:.85;
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
  // at night the hanging signs glow softly (their white letters sit a little above the glow threshold, less than at first);
  // the boards over the doors are lit but don't glow
  signMats.forEach(m=>m.color.setScalar(dark?(m.userData.hang?1:.9):1));
  if(SIGN_DARK!==dark){SIGN_DARK=dark;signTex.forEach(t=>t.userData.redraw&&t.userData.redraw())}   // hanging signs draw their glow for night
  PLQ.forEach(q=>q.face.material.color.setScalar(dark?.86:1));   // boards stay clearly below the glow threshold at night
  // [night, day] brightness of lights seen straight on; the door frames were the strongest glare in both modes
  MAT.doorLed.emissiveIntensity=dark?1.55:1.1;GLARE.forEach(m=>m.emissiveIntensity=m.userData.glare[dark?0:1]);
  if(P3.panels.length)redrawPanels3D();
  MAT.dust.opacity=dark?.55:.12;
  PLQ_GLASS.emissiveIntensity=dark?.32:.14;
  if(MAT.banner)MAT.banner.color=C(dark?"#0c0b0a":"#f6f2ec");   // at night the ARTA STUDIO banner turns black with softly glowing white letters
  if(MAT.bannerEdge)MAT.bannerEdge.color=C(dark?"#5a5249":"#d9d3ca");
  if(P3.gate)P3.gate.material.color=dark?C("#ffffff").multiplyScalar(1.25):C("#ffffff");
  if(MAT.endBoard)MAT.endBoard.color=C(dark?"#a9a59e":"#f2efe9");
  if(MAT.endWall)MAT.endWall.color=C(dark?"#4a4744":"#a39f99");
  lightMul=dark?.95:.5;
  if(bloom){bloom.strength=dark?.7:.5;bloom.threshold=dark?1.05:1.3;bloom.radius=.55}
  if(finalPass){finalPass.uniforms.uVig.value=dark?.6:.5;finalPass.uniforms.uExp.value=dark?1.05:.96;finalPass.uniforms.uWarm.value.set(1.05,1.0,dark?.9:.88)}
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
let PP0=-20.5,PP_END=1,PP_FILM=1;
const endPos=new THREE.Vector3(),endLook=new THREE.Vector3();
const shortLand=()=>innerWidth/innerHeight>=.85&&innerHeight<=500;
const portrait=()=>innerWidth/innerHeight<.85;
function hallPose(pp,pos,look){
  // past the Instagram film, scrolling on turns the camera to the contact card and walks up to it
  const ek=PP_END>PP_FILM?clamp((pp-PP_FILM)/(PP_END-PP_FILM),0,1):0,ee=ek*ek*(3-2*ek);pp=Math.min(pp,PP_FILM);
  const z=.5-pp,out=clamp(-pp/18,0,1);  // outside, a touch of upward tilt so the sign over the door is in frame
  const lf=FEATS3[0]&&FEATS3[0].v===FEATURES.logoAd?FEATS3[0].base.z:-15,lk=clamp(1-Math.abs(z-(lf+3.4))/4.2,0,1),up=lk*lk*(3-2*lk);
  pos.set(Math.sin(pp*.08)*.25,1.65+up*.35,z);
  const end=clamp((pp-(PP_FILM-7))/7,0,1);
  look.set(Math.sin(pp*.08)*.15,(portrait()?1.75:1.45)+out*1.1+end*(portrait()?1.3:1)+up*.75,z-8);
  if(ee>0&&P3.end){const G=P3.end.G,ry=G.rotation.y,d=portrait()?5.4:5.4;
    endPos.set(G.position.x+Math.sin(ry)*d,G.position.y+(portrait()?.25:.1),G.position.z+Math.cos(ry)*d);endLook.copy(G.position);
    pos.lerp(endPos,ee);look.lerp(endLook,ee)}
}
const pose=fn=>{const a=V(0,0,0),b=V(0,0,0);fn(a,b);return {pos:a,look:b}};
function buildPath(){
  // phones start a little further back so the whole sign over the door fits the narrow screen
  PP0=portrait()?-21.5:shortLand()?-18:-20.5;PP_FILM=.5-(LED_Z+8);PP_END=PP_FILM+6;
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
      // in through the middle of the door, then over to the first film
      const In=pose((a,b)=>{a.copy(S.W(V(0,1.65,3.0)));b.copy(S.W(V(0,1.7,-2)))});
      key(Door,In,2.6);key(In,C[0],2.4);S.u.stop.push(u+.45);key(C[0],C[0],.9);
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
  const S=SETS[i];if(!S.built){S.finish();S.merged=mergeStatic(S.g)}if(mode==="set"&&setIdx===i)return;vel=0;lookYaw=lookPitch=0;
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
["#enterBtn","#enterBtn2"].forEach(id=>{$(id).onclick=e=>{const i=e.currentTarget.dataset.set;if(i!=="")enterSet(+i)}});
// look up / down buttons on touch screens (hold to keep tilting, double-tap the screen area between to reset)
for(const [id,d] of [["#lookUp",1],["#lookDown",-1]]){let iv=null;const b=$(id);if(!b)continue;
  const stop=()=>{clearInterval(iv);iv=null};
  b.addEventListener("pointerdown",e=>{e.preventDefault();lookPitch=clamp(lookPitch+d*.06,-.55,.55);stop();iv=setInterval(()=>{lookPitch=clamp(lookPitch+d*.03,-.55,.55)},40)});
  ["pointerup","pointerleave","pointercancel"].forEach(n=>b.addEventListener(n,stop));}
$("#lookReset")&&($("#lookReset").onclick=()=>{lookPitch=lookYaw=0});

// the studio whose door the camera is turned toward (looking left or right in the hall, near that door), or -1
// (the camera's actual view is used, so a door seen at an angle a little ahead counts too)
const fwdV=new THREE.Vector3(),doorV=new THREE.Vector3();
function facingStudio(){
  let y=lookYaw%(Math.PI*2);if(y>Math.PI)y-=Math.PI*2;if(y<-Math.PI)y+=Math.PI*2;
  if(Math.abs(y)<.3)return -1;   // looking down the hall: scrolling walks along it as usual
  camera.getWorldDirection(fwdV);fwdV.y=0;fwdV.normalize();let best=-1,ba=.5;
  for(const S of SETS){doorV.copy(S.W(V(0,1.6,3.5))).sub(curPos);doorV.y=0;const d=doorV.length();if(d>11||d<.5)continue;
    const a=fwdV.angleTo(doorV.normalize());if(a<ba){ba=a;best=S.i}}
  return best;
}
let enterAcc=0,exitCool=0;
function moveBy(d){
  if(mode==="set"){
    const S=SETS[setIdx];spTarget+=d;
    // scrolling back past the door, or on past the end, steps back out into the hall
    if(spTarget<-.6){leaveSet();p=pTarget=S.ppA;vel=0;drag=null;exitCool=performance.now()}   // the rest of that swipe or scroll does not carry on down the hall
    else spTarget=Math.min(spTarget,S.len);
    return;
  }
  if(performance.now()-exitCool<600)return;
  // turned toward a studio's door: scrolling or swiping forward walks straight in, no need to tap its name
  if(d>0&&!jumping){const i=facingStudio();if(i>=0){enterAcc+=d;if(enterAcc>.45){enterAcc=0;vel=0;drag=null;enterSet(i)}return}}
  enterAcc=0;
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
/* touch: one finger swiped up or down walks, swiped sideways turns the view all the way round; two fingers look
   freely in any direction (up, down and around); a double tap straightens the view again */
const TOUCHES=new Map();let lastTap=0,mouseLook=null;
addEventListener("pointerdown",e=>{
  downXY=[e.clientX,e.clientY];dragged=false;
  if(e.pointerType==="mouse"){mouseLook=e.button===0&&e.target===canvas?{x:e.clientX,y:e.clientY}:null;return}
  if(e.target.closest(".hud,.map,.veil,.shud .top,.shud .bot,.player"))return;
  TOUCHES.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(TOUCHES.size===1){const t=performance.now();if(t-lastTap<300&&e.pointerType==="touch"){lookYaw=lookPitch=0}lastTap=t}
  drag={last:e.clientY,lastX:e.clientX};vel=0;
},{passive:true});
addEventListener("pointermove",e=>{
  if(e.pointerType==="mouse"){px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5;
    if((e.buttons&1)&&mouseLook){const dx=e.clientX-mouseLook.x,dy=e.clientY-mouseLook.y;mouseLook.x=e.clientX;mouseLook.y=e.clientY;
      if(dragged){lookYaw-=dx*.004;lookPitch=clamp(lookPitch-dy*.003,-.65,.65)}}}
  if(downXY&&Math.hypot(e.clientX-downXY[0],e.clientY-downXY[1])>10)dragged=true;
  if(!drag)return;
  const tp=TOUCHES.get(e.pointerId);
  if(TOUCHES.size>=2&&tp){   // two fingers: look around freely, without walking
    const lx=e.clientX-tp.x,ly=e.clientY-tp.y;tp.x=e.clientX;tp.y=e.clientY;
    lookYaw+=lx*.005/TOUCHES.size;lookPitch=clamp(lookPitch+ly*.004/TOUCHES.size,-.65,.65);vel=0;return}
  if(tp){tp.x=e.clientX;tp.y=e.clientY}
  const dy=drag.last-e.clientY,dx=drag.lastX-e.clientX;drag.last=e.clientY;drag.lastX=e.clientX;
  if(Math.abs(dx)>Math.abs(dy)*1.2){lookYaw-=dx*.005;return}
  const d=dy*(innerWidth<640?.03:.022);

  moveBy(d);vel=vel*.5+d*.5;
},{passive:true});
addEventListener("pointerup",e=>{
  // swiping down on an open film closes it
  if(playerEl&&downXY&&e.clientY-downXY[1]>70&&Math.abs(e.clientY-downXY[1])>Math.abs(e.clientX-downXY[0]))backGesture();
  TOUCHES.delete(e.pointerId);if(TOUCHES.size){const r=[...TOUCHES.values()][0];drag={last:r.y,lastX:r.x}}else{drag=null;downXY=null}},{passive:true});
addEventListener("pointercancel",e=>{TOUCHES.delete(e.pointerId);if(!TOUCHES.size){drag=null;vel=0;downXY=null}},{passive:true});
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
    else for(const F of FEATS3){if(!F.G.visible||F.k<.8||(F.v===FEATURES.instagramAd&&p>PP_FILM+1.5))continue;   // not once the camera has turned to the contact card
      F.G.getWorldPosition(tmp);if(cp.z>tmp.z+.4&&tmp.distanceTo(cp)<(F.v===FEATURES.instagramAd?11:6.5))on=true}
  }
  if(on!==hintOn){hintOn=on;const h=$("#playHint");h.querySelector("span").textContent=T()[coarse?"playTap":"playClick"];h.classList.toggle("show",on)}
}

// near a studio door in the hall, offer to step inside
function updateNear(){
  // studios stand in facing pairs, so near a pair both doors get a button: the left one on the left, the right one on the right
  let near=[];
  // no studio button once you stand in front of the Instagram film at the end, so it never covers the film
  if(mode==="hall"&&!jumping&&curPos.z>LED_Z+9.5){const z=curPos.z;let best=99;SETS.forEach(S=>{const d=Math.abs(z-(S.z+1.2));if(d<4.2&&d<best-.01)best=d});
    near=SETS.filter(S=>Math.abs(Math.abs(z-(S.z+1.2))-best)<.01&&best<4.2).sort((a,b)=>a.side-b.side)}
  const key=near.map(S=>S.i).join(",");
  if(key!==nearKey){nearKey=key;nearIdx=near.length?near[0].i:-1;
    const fa=lang==="fa",btns=[$("#enterBtn"),$("#enterBtn2")];
    btns.forEach((b,k)=>{const S=near[k];b.classList.remove("pair-l","pair-r");
      if(!S){b.classList.remove("show");b.dataset.set="";return}
      const arrow=S.side<0?"←":"→";b.dataset.set=S.i;const short=near.length>1&&innerWidth<640,nm=short?S.s.name[lang]:(fa?"ورود به "+S.s.name.fa:"Enter "+S.s.name.en);
      b.innerHTML=S.side<0?`<span>${arrow}</span> ${nm}`:`${nm} <span>${arrow}</span>`;
      b.style.setProperty("--b",S.s.c.acc);if(near.length>1)b.classList.add(k?"pair-r":"pair-l");b.classList.add("show")});
  }
}
let nearKey="";

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
  $("#sheetBody").innerHTML=p.body+`<p class="copy">${lang==="fa"?"© ۲۰۲۶ آرتا نوری. همه‌ی حقوق ویدیوها و محتوای این سایت محفوظ است.":"© 2026 Arta Noori. All films and content on this site are copyrighted, all rights reserved."}</p>`;$("#veil").classList.add("show");setTimeout(()=>$("#sheetX").focus(),50)}
function closeSheet(){$("#veil").classList.remove("show");lastFocus&&lastFocus.focus&&lastFocus.focus()}
$("#sheetX").onclick=closeSheet;$("#veil").addEventListener("click",e=>{if(e.target.id==="veil")closeSheet()});
function openPlayer(v,getRect,startAt){
  if(playerEl)return;playerRect=getRect;const r=getRect();
  const pl=el(`<div class="player" role="dialog" aria-modal="true" aria-label="${v.t[lang]}"><button class="x" aria-label="${T().close}">✕</button><div class="ttl">${v.t[lang]}</div>
    ${v.src?`<video src="${v.src}" controls controlslist="nodownload noremoteplayback" disablepictureinpicture autoplay playsinline></video>`:`<div class="slot" style="--sa:#ffffff22;--sb:#111"><div><span class="play" style="margin:0 auto 18px">${ICON.play}</span>${T().soon}</div></div>`}</div>`);
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
  // a clear invitation at the entrance: a glass pill with an animated mouse (or a swiping finger on touch screens)
  $("#hint").innerHTML=`<span class="hint-pill glass">${TOUCH?'<b class="hint-swipe"></b>':'<b class="hint-mouse"><em></em></b>'}<span>${TOUCH?t.swipe:t.scroll}${TOUCH&&t.swipeLook?`<small>${t.swipeLook}</small>`:""}</span></span><i></i>`;$("#loadTxt").textContent=t.loading;
  t.lightsLabel=lang==="fa"?"نور استودیو":"Studio lights";
  buildOverlays();buildMap();lastStop=-1;nearKey="#";applyTheme();refreshCaptions();if(mode==="set")showSetHud(SETS[setIdx]);
}
function toggleLang(){lang=lang==="en"?"fa":"en";try{localStorage.setItem("ans-lang",lang)}catch(e){}applyLang()}
$("#langBtn").onclick=toggleLang;$("#lightBtn").onclick=toggleLight;
let A2HS=null;
/* full screen: a button where the browser allows it (computers, Android, iPad); on iPhone, where Safari keeps its bars,
   a one-time hint explains that the site opens full screen when added to the home screen */
const FS_ICON={on:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  off:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>'};
const fsEl=()=>document.fullscreenElement||document.webkitFullscreenElement;
const STANDALONE=matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches||navigator.standalone===true;
function drawFsBtn(){const b=$("#fsBtn"),on=!!fsEl();b.innerHTML=on?FS_ICON.off:FS_ICON.on;b.setAttribute("aria-label",on?T().fsOff:T().fsOn);b.title=on?T().fsOff:T().fsOn}
if(!STANDALONE&&(document.fullscreenEnabled||document.webkitFullscreenEnabled)){
  const b=$("#fsBtn");b.hidden=false;drawFsBtn();
  b.onclick=()=>{const d=document.documentElement;
    if(fsEl())(document.exitFullscreen||document.webkitExitFullscreen).call(document);
    else{const r=(d.requestFullscreen||d.webkitRequestFullscreen).call(d,{navigationUI:"hide"});if(r&&r.then)r.then(()=>{try{screen.orientation.unlock()}catch(e){}}).catch(()=>{})}};
  ["fullscreenchange","webkitfullscreenchange"].forEach(ev=>document.addEventListener(ev,()=>{drawFsBtn();setTimeout(resize,120)}));
}else if(!STANDALONE&&/iPhone|iPod/.test(navigator.userAgent)){
  let seen=false;try{seen=localStorage.getItem("ans-a2hs")==="1"}catch(e){}
  // shown a few seconds after the studio has appeared
  if(!seen)A2HS=()=>setTimeout(()=>{const h=$("#a2hs"),share='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v12M8 7l4-4 4 4M5 11v9h14v-9"/></svg>';
    h.querySelector("p").innerHTML=T().a2hs.replace("{s}",share);h.dir=lang==="fa"?"rtl":"ltr";h.hidden=false;
    const close=()=>{h.hidden=true;try{localStorage.setItem("ans-a2hs","1")}catch(e){}};$("#a2hsX").onclick=close;setTimeout(close,14000)},4500);
}
$("#home").onclick=()=>goTo(0);

/* ---------- resize ---------- */
let lw=innerWidth,lh=innerHeight,rzT;
function resize(){
  camera.aspect=innerWidth/innerHeight;camera.fov=camera.aspect<.85?64:camera.aspect<1.25?56:48;camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight,false);if(composer){composer.setSize(innerWidth,innerHeight)}
}
addEventListener("resize",()=>{resize();clearTimeout(rzT);rzT=setTimeout(()=>{
  const portraitChanged=(lw/lh<.85)!==(innerWidth/innerHeight<.85);
  const was0=PP0;if(buildFacade()||portraitChanged){buildPath();
    // standing at the entrance when the device turns: move to the new entrance spot for this screen
    if(mode==="hall"&&(p<PP0||Math.abs(p-was0)<.8)){p=pTarget=PP0;snapCam=true}else pTarget=clamp(pTarget,PP0,PP_END)}
  if(Math.abs(innerWidth-lw)>40||portraitChanged){lw=innerWidth;lh=innerHeight;buildOverlays();buildMap();lastStop=-1}else measure();
},180)});

// no "Save video as" or "Save image as" on right-click over the films and the 3D view
addEventListener("contextmenu",e=>{if(e.target.closest("video,canvas,.player"))e.preventDefault()});

/* ---------- main loop ---------- */
let frames=0,acc=0,last=performance.now(),started=false,dynN=0,dynT=0,dynLast=0,isIdle=false;
/* the studio is drawn at most 60 times a second (120 Hz screens doubled the work for no visible gain), and about 30 times
   a second while nothing moves: no input, the camera at rest and no film being watched up close */
let lastInput=performance.now(),camRest=0;const prevCam=new THREE.Vector3();
["pointerdown","pointermove","wheel","keydown","touchstart","touchmove"].forEach(ev=>addEventListener(ev,()=>{lastInput=performance.now()},{passive:true}));
function frame(now){
  { const idle=now-lastInput>2500&&camRest>40&&!playerEl,gap=idle?32:15;isIdle=idle;
    if(frames>5&&now-last<gap){requestAnimationFrame(frame);return} }
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
  camRest=curPos.distanceToSquared(prevCam)<1e-6?camRest+1:0;prevCam.copy(curPos);
  // gentle look-around: follows the mouse, or the visitor's swipes and look buttons on touch screens
  camera.rotateY(-tx*.14+lookYaw);camera.rotateX(ty*.06+lookPitch);
  updateNear();
  // fly through the lobby logo: it melts away as the camera reaches it and comes back behind
  { const d=Math.hypot(curPos.z+6.4,curPos.x*.5),o=clamp((d-.5)/2.4,0,1);
    MAT.logo.transparent=o<1;MAT.logo.opacity=o;MAT.logo.depthWrite=o>.98;if(MAT.wordmark)MAT.wordmark.opacity=o;
    if(MAT.halo){MAT.halo.opacity=(MAT.halo.userData.base||0)*o;MAT.halo.visible=MAT.halo.opacity>.005}
    for(const m of [MAT.wmGlow,MAT.logoGlow])if(m){m.opacity=(m.userData.base||0)*o;m.visible=m.opacity>.005} }
  updatePool();
  if(dust)dust.rotation.y=Math.sin(now*.00005)*.02,dust.position.y=Math.sin(now*.0002)*.08;
  if(finalPass)finalPass.uniforms.uTime.value=(now*.001)%100;
  if(frames%3===0)renderer.shadowMap.needsUpdate=true;
  renderBackdrop();
  if(useComposer)composer.render();else renderer.render(scene,camera);
  updateAnchors();updateMap();updateFrames(dt);updateFilmHud();updatePlayHint();
  $("#hint").style.opacity=p<PP0+1.5&&mode==="hall"?1:0;
  if(started&&PENDING_SETS.length&&frames%2===0){const S=PENDING_SETS.shift();if(!S.built){S.finish();S.merged=mergeStatic(S.g)}}
  // a studio's inside (props, trusses, backdrop) is drawn only while the camera is within about 30 m of it: from
  // farther away it shows only as a small glimpse through the door, and skipping it saves the graphics chip most work
  for(const S of SETS){if(!S.merged)continue;const on=Math.abs(curPos.z-S.z)<30||(mode==="set"&&setIdx===S.i);if(S.mOn!==on){S.mOn=on;S.merged.forEach(m=>m.visible=on);S.g.children.forEach(c=>{if(!c.userData.front&&!c.userData.frame)c.visible=on})}}
  if(!started){started=true;setTimeout(()=>$("#loader").classList.add("done"),120);if(A2HS)A2HS()}
  // automatic quality: drop expensive effects if the device struggles
  frames++;if(frames>40&&frames<160){acc+=dt}
  // automatic resolution: when a device can't keep up (frames slower than ~30 a second while moving) the picture is drawn
  // at a slightly lower resolution so walking stays smooth, and goes back up once it can; strong devices never step down
  if(frames>60&&!isIdle&&!document.hidden){dynN++;dynT+=dt;if(dynN>=30){const a=dynT/dynN;dynN=dynT=0;
    const next=a>45&&DPR>1?Math.max(1,DPR-.5):a>33&&DPR>1?Math.max(1,DPR-.25):a<19&&DPR<DPR_MAX?Math.min(DPR_MAX,DPR+.25):DPR;
    if(next!==DPR&&now-dynLast>(next<DPR?700:2500)){dynLast=now;DPR=next;renderer.setPixelRatio(DPR);if(composer){composer.setPixelRatio(DPR);composer.setSize(innerWidth,innerHeight)}resize()}}}
  if(frames===160){const avg=acc/120;
    if(avg>30&&useComposer){setupPost(false);applyTheme()}
    if(avg>30&&renderer.shadowMap.enabled){renderer.shadowMap.enabled=false;pool[0].castShadow=false;scene.traverse(o=>{if(o.material)[].concat(o.material).forEach(m=>m.needsUpdate=true)})}
  }
  requestAnimationFrame(frame);
}

/* ---------- merge static meshes by material (hundreds of parts -> a few draw calls) ---------- */
function mergeStatic(root=scene){
  const made=[];
  if(!THREE.BufferGeometryUtils)return;
  root.updateMatrixWorld(true);
  // materials that the theme or the studio lights change by name must stay themselves; any other materials that look
  // exactly alike are shared, so their parts merge into one draw call (each studio had made its own copies)
  const keepM=new Set([...Object.values(MAT),...GLARE,...signMats].filter(Boolean)),canon=new Map();
  const sig=m=>[m.type,m.color&&m.color.getHexString(),m.emissive&&m.emissive.getHexString(),m.emissiveIntensity,m.roughness,m.metalness,
    m.map&&m.map.uuid,m.transparent,m.opacity,m.side,m.blending,m.depthWrite,m.alphaTest,m.fog,JSON.stringify(m.userData)].join("|");
  const seen=new Map(),shared=m=>{if(keepM.has(m)||m.isShaderMaterial)return m;let c=seen.get(m);if(c)return c;const k=sig(m);if(!canon.has(k))canon.set(k,m);c=canon.get(k);seen.set(m,c);return c};
  const groups=new Map(),kill=[];
  const add=(o,m,g,zc)=>{
    for(const k of Object.keys(g.attributes))if(!["position","normal","uv"].includes(k))g.deleteAttribute(k);
    if(!g.attributes.uv||!g.attributes.normal)return false;
    // grouped by material and by 24 m stretch of the hall: merged parts outside the view are then skipped entirely
    const key=m.uuid+"|"+Math.floor(zc/24);if(!groups.has(key))groups.set(key,{m,list:[],cast:false});
    const G=groups.get(key);G.list.push(g);G.cast=G.cast||o.castShadow;return true};
  root.traverse(o=>{
    if(!o.material||Array.isArray(o.material)||o.material.isShaderMaterial)return;
    if(o.userData.keep&&!o.userData.mergeAdd)return;
    const m=shared(o.material);
    if(o.isInstancedMesh){   // truss lattices: every instance baked into the merged geometry
      const base=o.geometry.index?o.geometry.toNonIndexed():o.geometry,mi=new THREE.Matrix4();let ok=true;
      for(let i=0;i<o.count;i++){o.getMatrixAt(i,mi);mi.premultiply(o.matrixWorld);const g=base.clone();g.applyMatrix4(mi);ok=add(o,m,g,mi.elements[14])&&ok}
      if(ok)kill.push(o);return}
    if(o.constructor!==THREE.Mesh)return;
    const g=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone();g.applyMatrix4(o.matrixWorld);
    if(add(o,m,g,o.matrixWorld.elements[14]))kill.push(o);
  });
  kill.forEach(o=>o.parent&&o.parent.remove(o));
  groups.forEach(G=>{
    const merged=THREE.BufferGeometryUtils.mergeBufferGeometries(G.list,false);if(!merged)return;
    const m=new THREE.Mesh(merged,G.m);m.castShadow=G.cast&&renderer.shadowMap.enabled;m.receiveShadow=renderer.shadowMap.enabled;m.matrixAutoUpdate=false;
    if(G.m.blending===THREE.AdditiveBlending)m.renderOrder=6;m.userData.keep=true;scene.add(m);made.push(m);
  });
  return made;
}

/* ---------- start ---------- */
build3D();buildPanels3D();buildFeatureFilms();layoutPanels3D();mergeStatic();
// the first four studios are finished before the first picture; the rest follow one by one just after it
for(let k=0;k<4&&PENDING_SETS.length;k++){const S=PENDING_SETS.shift();S.finish();S.merged=mergeStatic(S.g)}
setupPool();setupPost(Q==="high");resize();
buildPath();p=pTarget=PP0;hallPose(p,camPos,camLook);camera.position.copy(camPos);camera.lookAt(camLook);
let booted=false;function boot(){if(booted)return;booted=true;applyLang();requestAnimationFrame(frame)}
// the studio starts at once instead of waiting for the fonts (that wait could hold the loading screen for up to 2.5 s);
// signs, captions and panels redraw themselves in the right font as soon as it arrives
boot();
// heavy files that rarely change are kept on the device (sw.js), so later visits open faster
if("serviceWorker" in navigator&&location.protocol==="https:")addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{signTex.forEach(t=>t.userData.redraw&&t.userData.redraw());if(typeof buildOverlays==="function")buildOverlays()});
