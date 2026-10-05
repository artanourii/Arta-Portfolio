/* ARTA NOORI STUDIO: 3D engine. Content lives in js/content.js */
const ICON = {
  wa:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.3-2-1-1 .8a4 4 0 0 1-2.2-2.2l.8-1-1-2L9 9.5z"/></svg>`,
  ig:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>`,
  play:`<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
};


Object.assign(TX.en,{toLight:"Lights on",toDark:"Lights off",loading:"Lighting the set",
  rhint:"Scroll or swipe to dolly along the set. Tap a film to play.",noGL:"Your browser can't show the 3D studio. Reach me on WhatsApp or Instagram @artanourii."});
Object.assign(TX.fa,{toLight:"روشن کردن نور",toDark:"خاموش کردن نور",loading:"در حال روشن کردن ست",
  rhint:"اسکرول کن یا بکش تا دوربین روی ریل حرکت کنه. روی هر فیلم بزن تا پخش شه.",noGL:"مرورگرت استودیوی سه‌بعدی رو نشون نمی‌ده. از واتس‌اپ یا اینستاگرام ‎@artanourii در تماس باش."});
ICON.sun=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
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
let dark=themeChoice?themeChoice==="dark":sysDark.matches;
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
const renderer=new THREE.WebGLRenderer({canvas,antialias:Q==="high",powerPreference:"high-performance"});
let DPR=Math.min(devicePixelRatio||1,Q==="high"?1.75:1.5);
renderer.setPixelRatio(DPR);renderer.setSize(innerWidth,innerHeight,false);
renderer.shadowMap.enabled=Q==="high";renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.05,220);
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
const concreteTex=canvasTex(512,512,(g,w,h)=>{
  g.fillStyle="#bdbdbd";g.fillRect(0,0,w,h);
  const id=g.getImageData(0,0,w,h),d=id.data;
  for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*26;d[i]+=n;d[i+1]+=n;d[i+2]+=n}
  g.putImageData(id,0,0);
  for(let i=0;i<40;i++){g.fillStyle=`rgba(${Math.random()<.5?0:255},${Math.random()<.5?0:255},255,0)`;}
  g.globalAlpha=.06;for(let i=0;i<70;i++){g.fillStyle=Math.random()<.5?"#000":"#fff";g.beginPath();g.arc(Math.random()*w,Math.random()*h,8+Math.random()*60,0,7);g.fill()}
  g.globalAlpha=.18;g.strokeStyle="#000";g.lineWidth=2;g.strokeRect(0,0,w,h);
},[10,36]);
const acousticTex=canvasTex(256,256,(g,w,h)=>{
  g.fillStyle="#9a9a9a";g.fillRect(0,0,w,h);
  for(let y=0;y<2;y++)for(let x=0;x<2;x++){
    const gr=g.createLinearGradient(x*128,y*128,x*128+128,y*128+128);gr.addColorStop(0,"#b0b0b0");gr.addColorStop(1,"#868686");
    g.fillStyle=gr;g.fillRect(x*128+5,y*128+5,118,118);
  }
},[30,4]);
const chairTex=canvasTex(512,160,(g,w,h)=>{g.fillStyle="#141414";g.fillRect(0,0,w,h);g.fillStyle="#efe9df";g.font="800 92px Unbounded, Arial Black, sans-serif";g.textAlign="center";g.textBaseline="middle";g.fillText("ARTA",w/2,h/2+4)});
const ledTex=canvasTex(512,256,(g,w,h)=>{
  const gr=g.createLinearGradient(0,0,w,h);gr.addColorStop(0,"#2a1747");gr.addColorStop(.5,"#7a3b5e");gr.addColorStop(1,"#c98a3d");
  g.fillStyle=gr;g.fillRect(0,0,w,h);g.fillStyle="rgba(0,0,0,.45)";
  for(let y=0;y<h;y+=4)g.fillRect(0,y,w,1.4);for(let x=0;x<w;x+=4)g.fillRect(x,0,1.4,h);
});
ledTex.wrapS=THREE.RepeatWrapping;
const monitorTex=canvasTex(128,80,(g,w,h)=>{const gr=g.createLinearGradient(0,0,w,h);gr.addColorStop(0,"#1d3a5f");gr.addColorStop(1,"#c06a3b");g.fillStyle=gr;g.fillRect(0,0,w,h);g.strokeStyle="rgba(255,255,255,.6)";g.strokeRect(10,8,w-20,h-16)});
const dotTex=canvasTex(64,64,(g,w,h)=>{const gr=g.createRadialGradient(32,32,0,32,32,32);gr.addColorStop(0,"rgba(255,255,255,1)");gr.addColorStop(1,"rgba(255,255,255,0)");g.fillStyle=gr;g.fillRect(0,0,w,h)});

/* ---------- materials ---------- */
const ALLM=[];const std=(c,r=.6,m=0,x={})=>{const mm=new THREE.MeshStandardMaterial(Object.assign({color:C(c),roughness:r,metalness:m},x));ALLM.push(mm);return mm};
const MAT={
  metal:std("#1c1c1f",.38,.85),metal2:std("#2b2b30",.45,.8),chrome:std("#d5d7db",.18,1),rubber:std("#0d0d0e",.9,0),
  lensGlass:std("#0a1020",.04,1,{envMapIntensity:2}),fabric:std("#121212",.95,0),wood:std("#3a2718",.6,0),
  floor:std("#0b0b0c",.32,0,{map:concreteTex,transparent:true,opacity:.86}),
  wall:std("#121214",.92,0,{map:acousticTex}),ceil:std("#08080a",.95,0),
  hallCyc:std("#1b1b1e",.85,0),plinth:std("#0c0c0d",.28,.2),logo:std("#eeebe5",.32,.08),
  tape:std("#e8c234",.7,0),tapeW:std("#e9e9e9",.7,0),truss:std("#9ea1a6",.35,.9),
  space:new THREE.MeshStandardMaterial({color:C("#ffffff"),emissive:C("#fff4e2"),emissiveIntensity:.2,roughness:.6}),
  chairCanvas:new THREE.MeshStandardMaterial({map:chairTex,roughness:.9}),
  led:new THREE.MeshBasicMaterial({map:ledTex,toneMapped:false}),
  monitor:new THREE.MeshBasicMaterial({map:monitorTex}),
  tally:new THREE.MeshStandardMaterial({color:0x330000,emissive:C("#ff2a2a"),emissiveIntensity:5})
};
const emissive=(c,i)=>{const mm=new THREE.MeshStandardMaterial({color:C("#111111"),emissive:C(c),emissiveIntensity:i,roughness:.4});ALLM.push(mm);return mm};

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
  if(!bare){legs(g,.75,.6,.016);g.add(stick(V(0,.75,0),V(0,h,0),.018,MAT.chrome))}
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
  const g=new THREE.Group();legs(g,.7,.6,.016);g.add(stick(V(0,.7,0),V(0,h,0),.018,MAT.chrome));
  const head=new THREE.Group();head.position.y=h+.05;g.add(head);
  const bx=mesh(new THREE.CylinderGeometry(.55,.22,.42,4,1,true),MAT.fabric);bx.rotation.x=-Math.PI/2;bx.rotation.y=Math.PI/4;bx.position.z=-.21;
  bx.material=MAT.fabric.clone();bx.material.side=THREE.DoubleSide;head.add(bx);
  const face=mesh(new THREE.PlaneGeometry(.77,.77),emissive("#fffaf0",2.4),false);face.position.z=-.425;face.rotation.y=Math.PI;head.add(face);
  head.add(box(.2,.2,.12,MAT.metal,0,0,.05));
  g.userData.aim=p=>{g.updateMatrixWorld(true);const wp=head.getWorldPosition(new THREE.Vector3());head.lookAt(wp.clone().multiplyScalar(2).sub(p))};
  g.userData.face=face;return g;
}
function ledPanel(){
  const g=new THREE.Group();legs(g,.7,.55,.015);g.add(stick(V(0,.7,0),V(0,1.75,0),.017,MAT.chrome));
  const head=new THREE.Group();head.position.y=1.85;g.add(head);
  head.add(box(.62,.36,.05,MAT.metal));const f=mesh(new THREE.PlaneGeometry(.56,.3),emissive("#e9f0ff",2.2),false);f.position.z=-.026;f.rotation.y=Math.PI;head.add(f);
  g.userData.aim=p=>{g.updateMatrixWorld(true);const wp=head.getWorldPosition(new THREE.Vector3());head.lookAt(wp.clone().multiplyScalar(2).sub(p))};
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
function tapeX(x,z,mat=MAT.tape){const g=new THREE.Group();for(const r of [.785,-.785]){const t=mesh(new THREE.PlaneGeometry(.32,.05),mat,false);t.rotation.x=-Math.PI/2;t.rotation.z=r;g.add(t)}g.position.set(x,.004,z);return g}

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
  if(withBeam)beam(from,to,angle*.62,color);
}

/* ---------- build the soundstage ---------- */
const SETS=[];const anchors=[];
const SET0=-32,SETSTEP=9,DEPTH=84.5,LED_Z=-92;
function build3D(){
  // floor, reflection, walls, ceiling
  const fl=mesh(new THREE.PlaneGeometry(36,124),MAT.floor,false);fl.rotation.x=-Math.PI/2;fl.position.set(0,.002,-46);scene.add(fl);
  if(Q==="high"&&THREE.Reflector){
    const rf=new THREE.Reflector(new THREE.PlaneGeometry(36,124),{clipBias:.003,textureWidth:innerWidth*.6,textureHeight:innerHeight*.6,color:0x555555});rf.userData.keep=true;
    rf.rotation.x=-Math.PI/2;rf.position.set(0,0,-46);scene.add(rf);
  }else{MAT.floor.transparent=false;MAT.floor.opacity=1}
  for(const s of [-1,1]){const w=mesh(new THREE.PlaneGeometry(124,13),MAT.wall,false);w.rotation.y=-s*Math.PI/2;w.position.set(s*18,6.5,-46);scene.add(w)}
  const bw=mesh(new THREE.PlaneGeometry(36,13),MAT.wall,false);bw.position.set(0,6.5,-104);scene.add(bw);
  const fw=bw.clone();fw.rotation.y=Math.PI;fw.position.z=10;scene.add(fw);
  const cl=mesh(new THREE.PlaneGeometry(36,124),MAT.ceil,false);cl.rotation.x=Math.PI/2;cl.position.set(0,13,-46);scene.add(cl);
  // overhead trusses + space lights
  for(const x of [-4.6,4.6]){const t=truss(104);t.rotation.y=Math.PI/2;t.position.set(x,8,-46);scene.add(t)}
  for(let z=0;z>-100;z-=12){const t=truss(9.2);t.position.set(0,8,z);scene.add(t)}
  for(let z=-2;z>-100;z-=8)for(const x of [-9,9]){
    const s=mesh(new THREE.CylinderGeometry(.55,.55,.9,24,1,true),MAT.space,false);s.position.set(x,9.6,z);scene.add(s);
    scene.add(stick(V(x,10.05,z),V(x,13,z),.01,MAT.metal));
  }
  for(let z=-6;z>-100;z-=12)for(const x of [-4.6,4.6]){
    const f=fresnel("#ffe9c4",0,true);f.position.set(x,7.8,z);f.rotation.x=Math.PI;scene.add(f);
  }

  // entrance
  const pl=box(3.3,.5,1.5,MAT.plinth,0,.25,-6.4);scene.add(pl);
  const logo=makeLogo();logo.position.set(0,.5,-6.4);scene.add(logo);
  const wmTex=new THREE.TextureLoader().load(WORDMARK);wmTex.encoding=THREE.sRGBEncoding;
  MAT.wordmark=new THREE.MeshBasicMaterial({map:wmTex,transparent:true,color:C("#f0eee8"),depthWrite:false,fog:false});
  const wm=new THREE.Mesh(new THREE.PlaneGeometry(1.9,.23),MAT.wordmark);wm.position.set(0,.25,-5.645);scene.add(wm);
  const L1=fresnel(),L2=fresnel();L1.position.set(-2.7,0,-4.5);L2.position.set(2.7,0,-4.5);L1.rotation.y=.3;L2.rotation.y=-.3;scene.add(L1,L2);
  const lt=V(0,1.25,-6.4);L1.userData.aim(lt);L2.userData.aim(lt);
  slot(L1.userData.lensWorld(),lt,"#fff1dc",3,.42,.55);slot(L2.userData.lensWorld(),lt,"#fff1dc",3,.42,.55);
  slot(V(0,7.6,-4.2),V(0,.6,-6.4),"#ffffff",1.3,.3,.6);
  const rig=cameraRig(false);rig.position.set(-1.7,0,-3.3);rig.lookAt(0,0,-6.4);rig.rotateY(Math.PI);scene.add(rig);
  scene.add(tapeX(-1.7,-3.3),tapeX(0,-4.9,MAT.tapeW));
  scene.add(cable([[-2.7,-4.5],[-3.4,-3.6],[-3.8,-1],[-5,2]]),cable([[2.7,-4.5],[3.5,-3.4],[4.2,-1.2],[5.5,1.5]]),cable([[-1.7,-3.3],[-2.6,-2.4],[-3.8,-1]]));

  // Arta studio
  for(const x of [-3.6,3.6]){const t=truss(4.7);t.rotation.z=Math.PI/2;t.position.set(x,2.35,-11);scene.add(t)}
  const head=truss(7.6);head.position.set(0,4.85,-11);scene.add(head);
  const strip=box(7.2,.06,.04,emissive("#ffd9a0",3),0,4.66,-10.82);scene.add(strip);
  const cy=mesh(cycGeo(10,3.2,1.3,5.2),MAT.hallCyc);cy.material.side=THREE.DoubleSide;cy.position.set(-9.4,0,-16.6);cy.rotation.y=Math.PI/2;scene.add(cy);
  const dolly=cameraRig(true);dolly.position.set(2.9,0,-15.8);dolly.lookAt(-8,0,-16.6);dolly.rotateY(Math.PI);scene.add(dolly);
  for(const z of [-.5,.5]){const r=box(.05,.05,6,MAT.chrome,0,.03,0);r.position.set(2.9+z,.03,-15.8);r.rotation.y=Math.PI/2;r.scale.z=1;scene.add(r)}
  for(let i=0;i<10;i++)scene.add(box(.08,.03,1.3,MAT.wood,0.0+i*.6-2.7+2.9,.015,-15.8));
  const ch=chair();ch.position.set(4.6,0,-18.4);ch.rotation.y=-1.9;scene.add(ch);
  const sb1=softbox(),sb2=softbox(),lp=ledPanel();
  sb1.position.set(-4.6,0,-13.2);sb2.position.set(-4.6,0,-20);lp.position.set(-2.4,0,-21.6);scene.add(sb1,sb2,lp);
  const ct=V(-8.5,1.5,-16.6);sb1.userData.aim(ct);sb2.userData.aim(ct);lp.userData.aim(ct);
  slot(V(-4.6,2.0,-13.2),ct,"#fff6e8",2.2,.75,1,false);slot(V(-4.6,2.0,-20),ct,"#fff6e8",2.2,.75,1,false);
  slot(V(0,7.6,-16.6),V(-1,0,-16.6),"#ffe3b8",1.6,.45,.7);
  scene.add(tapeX(2.9,-15.8),tapeX(0,-16.6,MAT.tapeW));
  scene.add(cable([[-4.6,-13.2],[-3.8,-11.8],[-5,-9],[-6.5,-6]]),cable([[-4.6,-20],[-3.6,-22.5],[-5.2,-25]]));

  // brand sets
  STUDIOS.forEach((s,i)=>buildSet(s,i));

  // LED wall
  const fr=box(14.6,6.6,.2,MAT.metal,0,3.5,LED_Z-.12);scene.add(fr);
  const led=mesh(new THREE.PlaneGeometry(14,6),MAT.led,false);led.position.set(0,3.5,LED_Z);scene.add(led);
  slot(V(0,7.6,LED_Z+6),V(0,0,LED_Z+2),"#c9a0ff",1.4,.5,.7);
  for(const x of [-7.6,7.6]){const t=truss(7);t.rotation.z=Math.PI/2;t.position.set(x,3.5,LED_Z);scene.add(t)}

  // haze particles
  const N=Q==="high"?1400:700,pp=new Float32Array(N*3);
  for(let i=0;i<N;i++){pp[i*3]=(Math.random()-.5)*20;pp[i*3+1]=Math.random()*7;pp[i*3+2]=4-Math.random()*100}
  const pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pp,3));
  MAT.dust=new THREE.PointsMaterial({size:.045,map:dotTex,transparent:true,opacity:.5,depthWrite:false,blending:THREE.AdditiveBlending,color:C("#ffe8c8")});
  dust=new THREE.Points(pg,MAT.dust);scene.add(dust);

  // base light
  hemi=new THREE.HemisphereLight(C("#cfd6e6"),C("#2a2420"),.25);scene.add(hemi);
  dir=new THREE.DirectionalLight(C("#ffffff"),0);dir.position.set(3,10,4);scene.add(dir);
}
let dust,hemi,dir;
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
function buildSet(s,i){
  const side=i%2===0?-1:1,z=SET0-i*SETSTEP;
  const g=new THREE.Group();g.position.set(side*7.2,0,z);g.rotation.y=side<0?Math.PI/2:-Math.PI/2;scene.add(g);
  const cm=std(s.c.bg,.82,0,{side:THREE.DoubleSide});
  const cy=mesh(cycGeo(7.4,3.4,1.25,4.8),cm);g.add(cy);
  const edge=mesh(new THREE.PlaneGeometry(7.4,.05),MAT.tapeW,false);edge.rotation.x=-Math.PI/2;edge.position.set(0,.004,3.38);g.add(edge);
  for(const x of [-3.8,3.8]){const t=truss(5);t.rotation.z=Math.PI/2;t.position.set(x,2.5,2.6);g.add(t)}
  const hd=truss(7.9);hd.position.set(0,5.1,2.6);g.add(hd);
  const fz=fresnel();fz.position.set(2.9,0,2.3);g.add(fz);
  const sb=softbox();sb.position.set(-3.1,0,1.4);g.add(sb);
  const rig=cameraRig(i%2===0);rig.position.set(-3.3,0,4.2);g.add(rig);
  g.updateMatrixWorld(true);
  const W=p=>g.localToWorld(p.clone());
  const tgt=W(V(0,1.4,-.4));fz.userData.aim(tgt);sb.userData.aim(tgt);
  rig.lookAt(W(V(0,0,-.5)));rig.rotateY(Math.PI);
  slot(fz.userData.lensWorld(),tgt,"#fff1dc",2.6,.5,.6);
  const acc=new THREE.Color(s.c.acc).getHSL({}).l<.15?"#ffffff":s.c.acc;
  slot(W(V(0,4.9,2.4)),W(V(0,2.3,-1.25)),acc,2.2,.62,.7);
  // video positions along the set
  const n=s.videos.length,sp=n<=1?0:n===2?2.2:n===3?1.9:1.6;
  const xs=s.videos.map((_,j)=>(j-(n-1)/2)*sp);
  SETS.push({g,s,i,side,z,xs,W});
}

/* ---------- overlays anchored to 3D points ---------- */
const ovl=$("#ovl");
function anchor(html,pos,meters,opt={}){
  const e=el(`<div class="ov">${html}</div>`);ovl.appendChild(e);
  const a={e,pos,meters,zone:opt.zone||"hall",far:opt.far||16,near:opt.near||1.1,w:0};anchors.push(a);return a;
}
function measure(){for(const a of anchors){a.e.style.transform="none";a.w=a.e.offsetWidth||1;a.h=a.e.offsetHeight||1}}
const tmp=new THREE.Vector3();
function updateAnchors(){
  const W=innerWidth,H=innerHeight,f=2*Math.tan(THREE.MathUtils.degToRad(camera.fov)/2);
  camera.updateMatrixWorld();
  const zoneNow=mode==="set"||mode==="toSet"?"set"+setIdx:"hall";
  for(const a of anchors){
    let vis=a.zone==="hall"?(mode==="hall"||mode==="toHall"):a.zone===zoneNow;
    if(vis){
      tmp.copy(a.pos).applyMatrix4(camera.matrixWorldInverse);
      const d=-tmp.z;
      if(d<.3)vis=false;
      else{
        const ppm=H/(f*d),s=Math.min(a.meters*ppm/a.w,2.4);
        tmp.copy(a.pos).project(camera);
        const x=(tmp.x*.5+.5)*W,y=(-tmp.y*.5+.5)*H;
        const o=clamp((a.far-d)/3,0,1)*clamp((d-a.near)/.9,0,1)*(mode==="toSet"||mode==="toHall"?tweenFade:1);
        if(o<.02||x<-a.w*s||x>W+a.w*s||y<-a.h*s||y>H+a.h*s)vis=false;
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
  if(P){
    anchor(wa,V(-.74,3.5,-6.0),1.36);anchor(ig,V(.74,3.5,-6.0),1.36);
    anchor(lg,V(-.74,2.88,-6.0),1.36);anchor(lt,V(.74,2.88,-6.0),1.36);
    anchor(`<div class="tagline">${t.line}</div>`,V(0,2.35,-6.4),1.9);
  }else{
    anchor(wa,V(-2.95,1.85,-6.0),1.3);anchor(ig,V(-2.95,1.25,-6.0),1.3);
    anchor(lg,V(2.95,1.85,-6.0),1.3);anchor(lt,V(2.95,1.25,-6.0),1.3);
    anchor(`<div class="tagline">${t.line}</div>`,V(0,2.42,-6.4),2.6);
  }
  anchor(`<div class="gate"><h2>${t.arch}</h2><p>${t.archSub}</p></div>`,V(0,5.6,-11),P?4.4:5.4,{far:22});
  const CP=P?[[-.55,2.3,-14.2],[.55,1.3,-15.6],[-.55,2.3,-17.2],[.55,1.3,-18.6],[0,2.1,-20.4]]:[[-2.1,2.05,-14.2],[2.1,2.25,-15.4],[-2.3,1.35,-17.0],[2.25,1.45,-18.4],[0,2.5,-20.2]];
  t.panels.forEach((p,i)=>{
    const a=anchor(`<button class="glass card" data-panel="${p.id}"><div class="k">${p.k}</div><h3>${p.h}</h3><p>${p.p}</p><span class="open">${t.open}</span></button>`,V(...CP[i]),P?.95:1.25);
    a.e.querySelector("button").addEventListener("click",()=>openSheet(p.id));
  });
  anchor(`<div class="studios-h"><h2>${t.studios}</h2><p>${t.studiosSub}</p></div>`,V(0,3.3,-25.5),P?3:4.6,{far:20});
  // portrait screens are too narrow to see doors at the hall walls, so their signs float in the aisle just in front of each door
  SETS.forEach(S=>{
    const s=S.s,num=lang==="fa"?(S.i+1).toLocaleString("fa"):String(S.i+1).padStart(2,"0");
    const a=anchor(`<button class="glass sign" style="--b:${s.c.acc==="#141414"||s.c.acc==="#F5F2EA"?s.c.frame:s.c.acc}"><span class="bar"></span><div class="n">${num}</div><h3>${s.name[lang]}</h3><p>${s.tag[lang]}</p><div class="row"><span>${t.films(s.videos.length)}</span><b>${t.enter}</b></div></button>`,P?V(S.side*.3,2.2,S.z-.5):S.W(V(0,3.55,3.0)),P?1.45:1.7,{far:18});
    a.e.querySelector("button").addEventListener("click",()=>enterSet(S.i));
    s.videos.forEach((v,j)=>{
      const vert=v.r==="9/16",wM=vert?.95:1.75;
      const scr=v.src?`<video src="${v.src}" muted loop playsinline preload="metadata"></video>`:"";
      const b=anchor(`<button class="glass vcard" style="width:${vert?300:520}px"><div class="screen" style="aspect-ratio:${v.r};--sa:${s.c.acc}aa;--sb:${s.c.bg2}">${scr}<div class="slot" ${v.src?'style="background:none"':""}><span class="play">${ICON.play}</span></div></div><div class="vcap"><b>${v.t[lang]}</b><span>${v.m[lang]}</span></div></button>`,S.W(V(S.xs[j],1.62,.15)),wM,{zone:"set"+S.i,far:9,near:.4});
      const btn=b.e.querySelector("button");btn.addEventListener("click",()=>openPlayer(v,btn));
      const vid=btn.querySelector("video");if(vid&&!TOUCH){btn.addEventListener("mouseenter",()=>vid.play().catch(()=>{}));btn.addEventListener("mouseleave",()=>vid.pause())}
    });
  });
  const endA=anchor(`<div class="glass end"><h2>${t.endH}</h2><div class="row">${wa}${ig}</div></div>`,V(0,2.7,LED_Z+1.2),P?3.2:6,{far:22});
  ovl.querySelectorAll(".lang-chip").forEach(b=>b.addEventListener("click",toggleLang));
  ovl.querySelectorAll(".light-chip").forEach(b=>b.addEventListener("click",toggleLight));
  measure();
}

/* ---------- post processing ---------- */
const FinalShader={
  uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.55},uGrain:{value:.035},uExp:{value:1}},
  vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime,uVig,uGrain,uExp;varying vec2 vUv;
    float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    void main(){vec3 c=texture2D(tDiffuse,vUv).rgb*uExp;
      c=clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);
      c=pow(c,vec3(1./2.2));
      float d=distance(vUv,vec2(.5));c*=mix(1.,smoothstep(.9,.28,d),uVig);
      c+=(h(vUv*vec2(1920.,1080.)+uTime)-.5)*uGrain;
      gl_FragColor=vec4(c,1.);}`
};
let composer=null,bloom=null,finalPass=null,useComposer=false;
function setupPost(on){
  useComposer=on&&!!THREE.EffectComposer;
  if(useComposer&&!composer){
    composer=new THREE.EffectComposer(renderer);composer.setPixelRatio(DPR);composer.setSize(innerWidth,innerHeight);
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
  const bg=dark?"#060607":"#ECEAE6";
  scene.background=C(bg);scene.fog.color=C(bg);scene.fog.density=dark?.03:.02;
  MAT.floor.color=C(dark?"#070708":"#d6d3cf");MAT.floor.roughness=dark?.34:.38;if(MAT.floor.transparent)MAT.floor.opacity=dark?.9:.93;
  MAT.wall.color=C(dark?"#141416":"#e7e5e1");MAT.ceil.color=C(dark?"#08080a":"#f3f2ef");
  MAT.hallCyc.color=C(dark?"#1b1b1e":"#f6f5f2");MAT.plinth.color=C(dark?"#0c0c0d":"#f5f4f1");
  MAT.logo.color=C(dark?"#f1eee8":"#0e0e0f");MAT.logo.roughness=dark?.32:.22;MAT.logo.metalness=dark?.08:.25;
  if(MAT.wordmark)MAT.wordmark.color=C(dark?"#f0eee8":"#0e0e0f");
  MAT.truss.color=C(dark?"#8f9297":"#c9ccd1");
  MAT.space.emissiveIntensity=dark?.18:2.4;
  hemi.intensity=dark?.12:1.05;hemi.color=C(dark?"#cfd6e6":"#ffffff");hemi.groundColor=C(dark?"#1a1614":"#b9b4ae");
  dir.intensity=dark?0:.55;
  ALLM.forEach(m=>{const metal=m.metalness>.5;m.envMapIntensity=dark?(metal?.45:.06):(metal?1:.55)});
  scene.traverse(o=>{if(o.material&&o.material.isMeshStandardMaterial&&!ALLM.includes(o.material))o.material.envMapIntensity=dark?.06:.55});
  beams.forEach(b=>b.material.uniforms.uOpacity.value=dark?.3:.07);
  MAT.dust.opacity=dark?.55:.12;
  lightMul=dark?.95:.6;
  if(bloom){bloom.strength=dark?.7:.25;bloom.threshold=dark?.8:.94;bloom.radius=.45}
  if(finalPass){finalPass.uniforms.uVig.value=dark?.6:.35;finalPass.uniforms.uExp.value=dark?1:1.04}
  renderer.toneMappingExposure=dark?1:1.05;
  $("#lightBtn").innerHTML=(dark?ICON.sun:ICON.moon)+`<span>${dark?T().toLight:T().toDark}</span>`;
}
function toggleLight(){
  const f=$("#fade");f.style.opacity=.85;
  setTimeout(()=>{dark=!dark;try{localStorage.setItem("ans-theme",dark?"dark":"light")}catch(e){}themeChoice=dark?"dark":"light";applyTheme();buildOverlays();setTimeout(()=>f.style.opacity=0,60)},reduce?0:300);
}
sysDark.addEventListener&&sysDark.addEventListener("change",e=>{if(!themeChoice){dark=e.matches;applyTheme();buildOverlays()}});

/* ---------- camera, modes, input ---------- */
let mode="hall",p=0,pTarget=0,vel=0,drag=null,px=0,py=0,tx=0,ty=0;
let setIdx=-1,dolly=0,dollyT=0,tween=null,tweenFade=1,hallP=0;
const camPos=new THREE.Vector3(),camLook=new THREE.Vector3();
function hallPose(pp,pos,look){
  const z=.5-pp,P=innerWidth/innerHeight<.85;
  pos.set(Math.sin(pp*.08)*.25,1.65,z);
  look.set(Math.sin(pp*.08)*.15+tx*1.1,(P?1.75:1.45)+ty*.5,z-8);
}
function setPose(S,dx,pos,look){
  const P=innerWidth/innerHeight<.85,dz=P?2.35:3.35;
  pos.copy(S.W(V(dx,1.6,dz)));look.copy(S.W(V(dx*.92+tx*.4,1.52+ty*.25,-1.4)));
}
function startTween(toPos,toLook,dur,done,fadeMode){
  tween={fp:camera.position.clone(),fl:camLook.clone(),tp:toPos,tl:toLook,t0:performance.now(),dur:reduce?1:dur,done,fadeMode};
}
function enterSet(i){
  if(tween)return;
  const S=SETS[i];if(mode==="hall")hallP=pTarget;
  setIdx=i;dolly=dollyT=S.xs[0];mode="toSet";vel=0;
  const tp=new THREE.Vector3(),tl=new THREE.Vector3();setPose(S,dolly,tp,tl);
  startTween(tp,tl,1600,()=>{mode="set"},"in");
  showSetHud(S);
}
function exitSet(){
  if(tween||mode!=="set")return;
  const S=SETS[setIdx];hallP=clamp(-3.5-S.z,0,DEPTH);p=pTarget=hallP;
  mode="toHall";const tp=new THREE.Vector3(),tl=new THREE.Vector3();hallPose(hallP,tp,tl);
  startTween(tp,tl,1400,()=>{mode="hall";setIdx=-1},"out");
  $("#shud").classList.remove("show");
}
function switchSet(d){if(tween||mode!=="set")return;const n=(setIdx+d+SETS.length)%SETS.length;setIdx=n;mode="toSet";const S=SETS[n];dolly=dollyT=S.xs[0];
  const tp=new THREE.Vector3(),tl=new THREE.Vector3();setPose(S,dolly,tp,tl);startTween(tp,tl,1800,()=>{mode="set"},"in");showSetHud(S)}
function showSetHud(S){
  const t=T();$("#stitle").textContent=S.s.name[lang];$("#back").textContent=(lang==="fa"?"→ ":"← ")+t.back;
  $("#sprev").textContent=t.prev;$("#snext").textContent=t.next;$("#stip").textContent=t.rhint;$("#shud").classList.add("show");
}
$("#back").onclick=exitSet;$("#sprev").onclick=()=>switchSet(-1);$("#snext").onclick=()=>switchSet(1);

function moveBy(d){
  if(mode==="hall")pTarget=clamp(pTarget+d,0,DEPTH);
  else if(mode==="set"){const S=SETS[setIdx];const lo=Math.min(...S.xs),hi=Math.max(...S.xs);dollyT=clamp(dollyT+d*(S.side<0?1:1)*.45,lo,hi)}
}
const UI=".hud,.map,.veil,.shud .top,.shud .bot,.player,#ovl a,#ovl button";
addEventListener("wheel",e=>{if(e.target.closest(".sheet")||playerEl)return;e.preventDefault();const m=e.deltaMode===1?40:e.deltaMode===2?innerHeight:1;vel=0;moveBy(e.deltaY*m*.02)},{passive:false});
let downXY=null,dragged=false;
addEventListener("pointerdown",e=>{
  downXY=[e.clientX,e.clientY];dragged=false;
  if(e.pointerType==="mouse"||e.target.closest(".hud,.map,.veil,.shud .top,.shud .bot,.player"))return;
  drag={last:e.clientY,lastX:e.clientX};vel=0;
},{passive:true});
addEventListener("pointermove",e=>{
  px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5;
  if(downXY&&Math.hypot(e.clientX-downXY[0],e.clientY-downXY[1])>10)dragged=true;
  if(!drag)return;
  const dy=drag.last-e.clientY,dx=drag.lastX-e.clientX;drag.last=e.clientY;drag.lastX=e.clientX;
  const d=(mode==="set"&&Math.abs(dx)>Math.abs(dy)?dx*(lang==="fa"?-1:1):dy)*(innerWidth<640?.03:.022);
  moveBy(d);vel=vel*.5+d*.5;
},{passive:true});
addEventListener("pointerup",()=>{drag=null;downXY=null},{passive:true});
addEventListener("pointercancel",()=>{drag=null;vel=0;downXY=null},{passive:true});
addEventListener("click",e=>{if(dragged&&e.target.closest("#ovl")){e.preventDefault();e.stopPropagation();dragged=false}},true);
addEventListener("keydown",e=>{
  if(e.key==="Escape"){if(playerEl)return closePlayer();if($("#veil").classList.contains("show"))return closeSheet();if(mode==="set")return exitSet()}
  if(playerEl||$("#veil").classList.contains("show"))return;
  if(e.key==="ArrowDown"||e.key==="PageDown"||(e.key===" "&&!e.target.closest("button,a"))){moveBy(mode==="set"?3:4);e.preventDefault()}
  if(e.key==="ArrowUp"||e.key==="PageUp"){moveBy(mode==="set"?-3:-4);e.preventDefault()}
  if(mode==="set"&&e.key==="ArrowRight")moveBy(3);if(mode==="set"&&e.key==="ArrowLeft")moveBy(-3);
  if(e.key==="Home"&&mode==="hall")goTo(0);if(e.key==="End"&&mode==="hall")goTo(DEPTH);
});

/* ---------- map ---------- */
let stops=[];
function buildMap(){
  const t=T();stops=[{l:t.stops.entrance,p:0},{l:t.stops.arta,p:9.5},{l:t.stops.hall,p:22.5}]
    .concat(SETS.map(S=>({l:S.s.name[lang],p:-3.5-S.z}))).concat([{l:t.stops.end,p:DEPTH}]);
  const m=$("#map");m.innerHTML="";
  stops.forEach((s,i)=>{const b=el(`<button aria-label="${s.l}"><i></i></button>`);b.onclick=()=>{if(mode==="set"){exitSet();setTimeout(()=>goTo(s.p),1500)}else goTo(s.p)};m.appendChild(b)});
  m.appendChild(el(`<span class="lbl" id="lbl"></span>`));
}
function goTo(v){pTarget=clamp(v,0,DEPTH);vel=0}
let lastStop=-1;
function updateMap(){
  let a=0;stops.forEach((s,i)=>{if(p>=s.p-3)a=i});
  if(a!==lastStop){lastStop=a;$("#map").querySelectorAll("button").forEach((b,i)=>b.classList.toggle("on",i===a));$("#lbl").textContent=stops[a].l}
  $(".hud").style.opacity=mode==="hall"?1:0;$(".hud").style.pointerEvents=mode==="hall"?"auto":"none";
  $("#map").style.opacity=mode==="hall"?1:0;$("#map").style.pointerEvents=mode==="hall"?"auto":"none";
}

/* ---------- sheet & player ---------- */
let lastFocus=null,playerEl=null,playerCard=null;
function openSheet(id){const p=T().panels.find(x=>x.id===id);lastFocus=document.activeElement;
  $("#sheetBody").innerHTML=`<div style="color:var(--accent);font-weight:600">${p.k}</div>`+p.body;$("#veil").classList.add("show");setTimeout(()=>$("#sheetX").focus(),50)}
function closeSheet(){$("#veil").classList.remove("show");lastFocus&&lastFocus.focus&&lastFocus.focus()}
$("#sheetX").onclick=closeSheet;$("#veil").addEventListener("click",e=>{if(e.target.id==="veil")closeSheet()});
function openPlayer(v,card){
  if(playerEl)return;playerCard=card.querySelector(".screen");const r=playerCard.getBoundingClientRect();
  const pl=el(`<div class="player" role="dialog" aria-modal="true" aria-label="${v.t[lang]}"><button class="x" aria-label="${T().close}">✕</button><div class="ttl">${v.t[lang]}</div>
    ${v.src?`<video src="${v.src}" controls autoplay playsinline></video>`:`<div class="slot" style="--sa:#ffffff22;--sb:#111"><div><span class="play" style="margin:0 auto 18px">${ICON.play}</span>${T().soon}</div></div>`}</div>`);
  Object.assign(pl.style,{left:r.left+"px",top:r.top+"px",width:r.width+"px",height:r.height+"px"});
  document.body.appendChild(pl);playerEl=pl;pl.querySelector(".x").onclick=closePlayer;pl.getBoundingClientRect();
  setTimeout(()=>{pl.classList.add("full");Object.assign(pl.style,{left:"0px",top:"0px",width:innerWidth+"px",height:innerHeight+"px"});pl.querySelector(".x").focus()},20);
}
function closePlayer(){
  if(!playerEl)return;const pl=playerEl;playerEl=null;const v=pl.querySelector("video");if(v)v.pause();
  const r=playerCard.getBoundingClientRect();pl.classList.remove("full");
  Object.assign(pl.style,{left:r.left+"px",top:r.top+"px",width:Math.max(r.width,40)+"px",height:Math.max(r.height,40)+"px"});
  setTimeout(()=>pl.remove(),reduce?0:560);
}

/* ---------- language ---------- */
function applyLang(){
  const t=T();document.documentElement.lang=lang;document.documentElement.dir=t.dir;
  $("#langBtn").textContent=t.other;document.title=lang==="fa"?"استودیو آرتا نوری":"ARTA NOORI STUDIO";
  $("#hint").innerHTML=(TOUCH?t.swipe:t.scroll)+"<i></i>";$("#loadTxt").textContent=t.loading;
  t.lightsLabel=lang==="fa"?"نور استودیو":"Studio lights";
  buildOverlays();buildMap();lastStop=-1;applyTheme();if(mode==="set")showSetHud(SETS[setIdx]);
}
function toggleLang(){lang=lang==="en"?"fa":"en";try{localStorage.setItem("ans-lang",lang)}catch(e){}applyLang()}
$("#langBtn").onclick=toggleLang;$("#lightBtn").onclick=toggleLight;
$("#home").onclick=()=>{if(mode==="set"){exitSet();setTimeout(()=>goTo(0),1500)}else goTo(0)};

/* ---------- resize ---------- */
let lw=innerWidth,lh=innerHeight,rzT;
function resize(){
  camera.aspect=innerWidth/innerHeight;camera.fov=camera.aspect<.85?64:camera.aspect<1.25?56:48;camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight,false);if(composer){composer.setSize(innerWidth,innerHeight)}
}
addEventListener("resize",()=>{resize();clearTimeout(rzT);rzT=setTimeout(()=>{
  const portraitChanged=(lw/lh<.85)!==(innerWidth/innerHeight<.85);
  if(Math.abs(innerWidth-lw)>40||portraitChanged){lw=innerWidth;lh=innerHeight;buildOverlays()}else measure();
},180)});

/* ---------- main loop ---------- */
let frames=0,acc=0,last=performance.now(),started=false;
function frame(now){
  const dt=Math.max(0,Math.min(now-last,100));last=now;
  // smoothing tuned for 60fps, scaled by real frame time so motion feels the same on 30, 60 and 120Hz screens
  const f=dt/16.667,sm=k=>1-Math.pow(1-k,f);
  if(!drag&&Math.abs(vel)>.002&&!reduce){moveBy(vel*f);vel*=Math.pow(.92,f)}else if(!drag)vel=0;
  tx+=(px*.6-tx)*sm(.05);ty+=(-py*.5-ty)*sm(.05);
  if(tween){
    const k=clamp((now-tween.t0)/tween.dur,0,1),e=ease(k);
    camera.position.lerpVectors(tween.fp,tween.tp,e);camLook.lerpVectors(tween.fl,tween.tl,e);
    // lift the camera in an arc so it glides over the aisle like a crane move
    camera.position.y+=Math.sin(e*Math.PI)*.9;
    tweenFade=tween.fadeMode==="in"?clamp((k-.55)/.45,0,1):clamp((k-.5)/.5,0,1);
    if(k>=1){const d=tween.done;tween=null;tweenFade=1;d&&d()}
  }else if(mode==="hall"){
    p+=(pTarget-p)*(reduce?1:sm(.075));hallPose(p,camPos,camLook);camera.position.copy(camPos);
  }else if(mode==="set"){
    dolly+=(dollyT-dolly)*(reduce?1:sm(.08));setPose(SETS[setIdx],dolly,camPos,camLook);camera.position.lerp(camPos,reduce?1:sm(.2));
  }
  camera.lookAt(camLook);
  updatePool();
  ledTex.offset.x=(now*.00002)%1;
  if(dust)dust.rotation.y=Math.sin(now*.00005)*.02,dust.position.y=Math.sin(now*.0002)*.08;
  if(finalPass)finalPass.uniforms.uTime.value=(now*.001)%100;
  if(useComposer)composer.render();else renderer.render(scene,camera);
  updateAnchors();updateMap();
  $("#hint").style.opacity=p<1.5&&mode==="hall"?1:0;
  if(!started){started=true;setTimeout(()=>$("#loader").classList.add("done"),350)}
  // automatic quality: drop expensive effects if the device struggles
  frames++;if(frames>40&&frames<160){acc+=dt}
  if(frames===160){const avg=acc/120;
    if(avg>30&&useComposer){setupPost(false);applyTheme()}
    if(avg>30&&renderer.shadowMap.enabled){renderer.shadowMap.enabled=false;pool[0].castShadow=false;scene.traverse(o=>{if(o.material)[].concat(o.material).forEach(m=>m.needsUpdate=true)})}
    if(avg>40){DPR=1;renderer.setPixelRatio(1)}
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
build3D();mergeStatic();setupPool();setupPost(true);resize();
hallPose(0,camPos,camLook);camera.position.copy(camPos);
let booted=false;function boot(){if(booted)return;booted=true;applyLang();requestAnimationFrame(frame)}
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(boot);setTimeout(boot,2500);
