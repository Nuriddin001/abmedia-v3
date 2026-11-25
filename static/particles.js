/* One fixed canvas of particles. Each page section names a shape; the particles fly from the
   current shape to the next one as the page scrolls. Plain WebGL, no libraries. */
(function () {
"use strict";

const H = 400;                       /* shape canvases are 400 px tall; 200 px = 1 unit */
/* how fast particles settle into a shape: softer spring = slower. With the stagger below a shape forms in about 2 s */
const SPRING = .014, DAMP = .88;
const SCATTER = .012;                /* pull towards the random spot while a particle waits its turn */
const WHITE = "#ffffff", ACC = "#ff0000", REC = "#0000ff";   /* marker colours, read back when sampling */

/* ---------- shape drawings ---------- */
function cv(w) { const c = document.createElement("canvas"); c.width = w; c.height = H; const x = c.getContext("2d"); x.lineCap = "round"; x.lineJoin = "round"; return [c, x]; }
const SHAPES = {
  logo() {
    const [c, x] = cv(520);
    x.fillStyle = REC; x.beginPath(); x.arc(92, 150, 46, 0, 7); x.fill();
    x.fillStyle = WHITE; x.textBaseline = "alphabetic";
    x.font = "800 150px Unbounded, Arial Black, sans-serif"; x.fillText("AB", 162, 204);
    x.font = "800 82px Unbounded, Arial Black, sans-serif"; x.fillText("MEDIA", 46, 316);
    return c;
  },
  chart() {
    const [c, x] = cv(480);
    x.strokeStyle = WHITE; x.lineWidth = 3; x.beginPath(); x.moveTo(50, 40); x.lineTo(50, 350); x.lineTo(450, 350); x.stroke();
    x.lineWidth = 9; x.beginPath(); x.moveTo(52, 345);
    x.bezierCurveTo(90, 340, 110, 70, 140, 70); x.bezierCurveTo(175, 70, 190, 330, 300, 338); x.lineTo(440, 342); x.stroke();
    x.strokeStyle = ACC; x.lineWidth = 12; x.beginPath(); x.moveTo(52, 345);
    x.bezierCurveTo(180, 330, 250, 190, 440, 96); x.stroke();
    x.fillStyle = ACC; x.beginPath(); x.arc(440, 96, 16, 0, 7); x.fill();
    return c;
  },
  funnel() {
    const [c, x] = cv(460);
    [[400, WHITE], [250, WHITE], [150, WHITE], [86, ACC]].forEach(([w, col], i) => {
      x.fillStyle = col; const y = 44 + i * 84; x.beginPath(); x.roundRect(230 - w / 2, y, w, 58, 8); x.fill();
    });
    return c;
  },
  cross() {
    const [c, x] = cv(400);
    x.strokeStyle = WHITE; x.lineWidth = 10; x.beginPath(); x.arc(200, 200, 160, 0, 7); x.stroke();
    x.lineWidth = 34; x.beginPath(); x.moveTo(130, 130); x.lineTo(270, 270); x.moveTo(270, 130); x.lineTo(130, 270); x.stroke();
    return c;
  },
  check() {
    const [c, x] = cv(400);
    x.strokeStyle = WHITE; x.lineWidth = 10; x.beginPath(); x.arc(200, 200, 160, 0, 7); x.stroke();
    x.strokeStyle = ACC; x.lineWidth = 36; x.beginPath(); x.moveTo(122, 206); x.lineTo(180, 262); x.lineTo(284, 142); x.stroke();
    return c;
  },
  clapper() {
    const [c, x] = cv(440);
    x.fillStyle = WHITE; x.beginPath(); x.roundRect(60, 170, 320, 190, 10); x.fill();
    x.globalCompositeOperation = "destination-out";
    x.fillRect(84, 214, 272, 8); x.fillRect(84, 262, 272, 8); x.fillRect(84, 310, 150, 8);
    x.globalCompositeOperation = "source-over";
    x.save(); x.translate(60, 150); x.rotate(-0.24);
    x.fillStyle = ACC; x.beginPath(); x.roundRect(0, -46, 330, 46, 6); x.fill();
    x.globalCompositeOperation = "destination-out";
    for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(26 + i * 58, -46); x.lineTo(52 + i * 58, -46); x.lineTo(26 + i * 58, 0); x.lineTo(i * 58, 0); x.fill(); }
    x.restore(); x.globalCompositeOperation = "source-over";
    return c;
  },
  play() {
    const [c, x] = cv(400);
    x.strokeStyle = WHITE; x.lineWidth = 12; x.beginPath(); x.arc(200, 200, 162, 0, 7); x.stroke();
    x.lineWidth = 3; x.beginPath(); x.arc(200, 200, 186, 0.4, 2.4); x.stroke(); x.beginPath(); x.arc(200, 200, 186, 3.5, 5.5); x.stroke();
    x.fillStyle = ACC; x.beginPath(); x.moveTo(160, 122); x.lineTo(160, 278); x.lineTo(286, 200); x.closePath(); x.fill();
    return c;
  },
  camera() {
    const [c, x] = cv(480);
    x.fillStyle = WHITE; x.beginPath(); x.roundRect(60, 170, 250, 160, 14); x.fill();
    x.beginPath(); x.moveTo(322, 236); x.lineTo(420, 186); x.lineTo(420, 314); x.lineTo(322, 264); x.closePath(); x.fill();
    x.strokeStyle = WHITE; x.lineWidth = 16;
    x.beginPath(); x.arc(126, 112, 44, 0, 7); x.stroke(); x.beginPath(); x.arc(238, 106, 52, 0, 7); x.stroke();
    x.fillStyle = REC; x.beginPath(); x.arc(272, 206, 13, 0, 7); x.fill();
    x.globalCompositeOperation = "destination-out"; x.beginPath(); x.arc(272, 206, 20, 0, 7); x.fill();
    x.globalCompositeOperation = "source-over"; x.fillStyle = REC; x.beginPath(); x.arc(272, 206, 12, 0, 7); x.fill();
    return c;
  },
  strip() {
    const [c, x] = cv(520);
    x.save(); x.translate(260, 200); x.rotate(-0.12); x.translate(-260, -200);
    x.fillStyle = WHITE; x.beginPath(); x.roundRect(20, 110, 480, 180, 8); x.fill();
    x.globalCompositeOperation = "destination-out";
    for (let i = 0; i < 12; i++) { x.fillRect(36 + i * 39, 122, 20, 14); x.fillRect(36 + i * 39, 264, 20, 14); }
    for (let i = 0; i < 3; i++) x.fillRect(38 + i * 152, 150, 136, 100);
    x.globalCompositeOperation = "source-over";
    x.fillStyle = ACC; x.fillRect(38 + 2 * 152 + 8, 158, 120, 84);
    x.restore();
    return c;
  },
  plane() {
    const [c, x] = cv(460);
    x.fillStyle = WHITE; x.beginPath(); x.moveTo(40, 190); x.lineTo(420, 60); x.lineTo(300, 350); x.lineTo(232, 236); x.closePath(); x.fill();
    x.fillStyle = ACC; x.beginPath(); x.moveTo(232, 236); x.lineTo(420, 60); x.lineTo(196, 262); x.lineTo(196, 340); x.closePath(); x.fill();
    return c;
  },
  question() {
    const [c, x] = cv(400);
    x.strokeStyle = WHITE; x.lineWidth = 8; x.beginPath(); x.arc(200, 200, 168, 0, 7); x.stroke();
    x.lineWidth = 34; x.beginPath(); x.arc(200, 158, 58, Math.PI, Math.PI * 2.42); x.stroke();
    x.beginPath(); x.moveTo(229, 207); x.lineTo(202, 240); x.stroke();
    x.fillStyle = ACC; x.beginPath(); x.arc(200, 298, 21, 0, 7); x.fill();
    return c;
  },
  wordmark() {
    const [c, x] = cv(1240);
    x.textBaseline = "alphabetic"; x.font = "800 150px Unbounded, Arial Black, sans-serif";
    x.fillStyle = REC; x.beginPath(); x.arc(70, 200, 44, 0, 7); x.fill();
    x.fillStyle = WHITE; x.fillText("AB", 142, 254);
    x.fillStyle = ACC; x.fillText("MEDIA", 142 + x.measureText("AB").width + 46, 254);
    return c;
  }
};
/* flat shapes (words) turn less than objects */
const FLAT = { logo: 0.45, wordmark: 0.3, chart: 0.6, funnel: 0.6 };

function sample(canvas, n) {
  const w = canvas.width, d = canvas.getContext("2d").getImageData(0, 0, w, H).data, px = [];
  for (let y = 0; y < H; y += 1) for (let x = 0; x < w; x += 1) {
    const i = (y * w + x) * 4; if (d[i + 3] < 140) continue;
    px.push(x, y, d[i] > 180 && d[i + 2] < 90 ? 1 : (d[i + 2] > 180 && d[i] < 90 ? 2 : 0));
  }
  const pos = new Float32Array(n * 3), col = new Uint8Array(n), m = px.length / 3;
  for (let k = 0; k < n; k++) {
    const j = ((Math.random() * m) | 0) * 3;
    pos[k * 3] = (px[j] + Math.random() - .5 - w / 2) / 200;
    pos[k * 3 + 1] = -(px[j + 1] + Math.random() - .5 - H / 2) / 200;
    pos[k * 3 + 2] = (Math.random() - .5) * .14;
    col[k] = px[j + 2];
  }
  return { pos, col, half: w / 400 };
}

const VS = `
attribute vec3 aPos; attribute float aSeed; attribute vec2 aCol; attribute float aDust;
uniform float uT, uYaw, uPitch, uScale, uAlpha, uDpr, uSpread; uniform vec2 uCenter, uRes;
varying float vA; varying vec3 vC;
void main(){
  vec3 p = aPos;
  p.x += sin(uT * .9 + aSeed * 40.) * .007; p.y += cos(uT * .7 + aSeed * 57.) * .007;
  float a = aSeed * 6.2831 * 13.; float r = uSpread * (.2 + fract(aSeed * 31.7));
  p += vec3(cos(a), sin(a * 1.7), sin(a)) * r;
  float cy = cos(uYaw), sy = sin(uYaw); p = vec3(p.x * cy + p.z * sy, p.y, -p.x * sy + p.z * cy);
  float cp = cos(uPitch), sp = sin(uPitch); p = vec3(p.x, p.y * cp - p.z * sp, p.y * sp + p.z * cp);
  float persp = 1. / (1. - clamp(p.z, -1.5, 1.5) * .3);
  vec2 px = uCenter + vec2(p.x, -p.y) * uScale * persp;
  gl_Position = vec4(px.x / uRes.x * 2. - 1., 1. - px.y / uRes.y * 2., 0., 1.);
  gl_PointSize = (1.3 + fract(aSeed * 7.3) * 1.9) * uDpr * persp;
  vec3 c = mix(vec3(.93, .94, .96), vec3(.957, .651, .165), aCol.x);
  vC = mix(c, vec3(.9, .28, .235), aCol.y);
  float tw = .7 + .3 * sin(uT * 2.2 + aSeed * 200.);
  vA = uAlpha * tw * mix(1., .35, aDust);
}`;
const FS = `
precision mediump float; varying float vA; varying vec3 vC;
void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; gl_FragColor = vec4(vC, vA * smoothstep(.5, .15, d)); }`;

window.ABM_Particles = function (canvas) {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const small = () => innerWidth < 900;
  const N = small() ? 7000 : 18000, DUST = Math.round(N * .16), NS = N - DUST;
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false });
  const api = { ok: !!gl, thumb, setTarget, shapes: Object.keys(SHAPES) };
  const canv = {}; for (const k in SHAPES) canv[k] = SHAPES[k]();
  function thumb(name, size) {
    const s = canv[name], c = document.createElement("canvas"); c.width = c.height = size; const x = c.getContext("2d");
    const k = Math.min(size / s.width, size / H) * .92; x.drawImage(s, (size - s.width * k) / 2, (size - H * k) / 2, s.width * k, H * k);
    x.globalCompositeOperation = "source-in"; x.fillStyle = "#E9EDF2"; x.fillRect(0, 0, size, size); return c;
  }
  if (!gl) { api.setTarget = () => {}; return api; }

  const data = {}; for (const k in canv) data[k] = sample(canv[k], NS);
  const pos = new Float32Array(N * 3), vel = new Float32Array(N * 3), tgt = new Float32Array(N * 3), mid = new Float32Array(N * 2);
  const col = new Float32Array(N * 2), tcol = new Float32Array(N * 2), seed = new Float32Array(N), dust = new Float32Array(N), delay = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    seed[i] = Math.random();
    const a = Math.random() * 6.283, r = 1.2 + Math.random() * 2.2;
    pos[i * 3] = Math.cos(a) * r * 1.5; pos[i * 3 + 1] = Math.sin(a) * r; pos[i * 3 + 2] = (Math.random() - .5) * 1.6;
    if (i >= NS) { dust[i] = 1; tgt[i * 3] = pos[i * 3] * .8; tgt[i * 3 + 1] = pos[i * 3 + 1] * .8; tgt[i * 3 + 2] = pos[i * 3 + 2]; }
  }

  function sh(type, src) { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
  const prog = gl.createProgram(); gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog); gl.useProgram(prog);
  function attr(name, arr, size, dyn) {
    const b = gl.createBuffer(), l = gl.getAttribLocation(prog, name); gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, arr, dyn ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, size, gl.FLOAT, false, 0, 0); return b;
  }
  const bPos = attr("aPos", pos, 3, true), bCol = attr("aCol", col, 2, true); attr("aSeed", seed, 1); attr("aDust", dust, 1);
  const U = {}; ["uT", "uYaw", "uPitch", "uScale", "uAlpha", "uDpr", "uSpread", "uCenter", "uRes"].forEach(n => U[n] = gl.getUniformLocation(prog, n));
  gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE); gl.clearColor(0, 0, 0, 0);

  let W = 0, Hh = 0, dpr = 1;
  function resize() { dpr = Math.min(devicePixelRatio || 1, 2); W = innerWidth; Hh = innerHeight; canvas.width = W * dpr; canvas.height = Hh * dpr; gl.viewport(0, 0, canvas.width, canvas.height); }
  addEventListener("resize", resize); resize();

  /* what the page asks for */
  let shape = null, flat = 1, half = 1;
  const want = { x: .5, y: .5, alpha: 1 }, cur = { x: .5, y: .5, alpha: 0, scale: 100, spread: 1.6 };
  let now = 0;
  function setTarget(name, x, y, alpha) {
    want.x = x; want.y = y; want.alpha = alpha;
    if (name === shape || !data[name]) return;
    const first = shape === null; shape = name; flat = FLAT[name] || 1; half = data[name].half;
    const s = data[name];
    for (let i = 0; i < NS; i++) {
      tgt[i * 3] = s.pos[i * 3]; tgt[i * 3 + 1] = s.pos[i * 3 + 1]; tgt[i * 3 + 2] = s.pos[i * 3 + 2];
      tcol[i * 2] = s.col[i] === 1 ? 1 : 0; tcol[i * 2 + 1] = s.col[i] === 2 ? 1 : 0;
      if (reduce) { pos[i * 3] = tgt[i * 3]; pos[i * 3 + 1] = tgt[i * 3 + 1]; pos[i * 3 + 2] = tgt[i * 3 + 2]; continue; }
      /* between two shapes every particle first flies to a random spot anywhere on the screen, then comes in */
      if (first) { delay[i] = now + Math.random() * 1.6; mid[i * 2] = pos[i * 3]; mid[i * 2 + 1] = pos[i * 3 + 1]; }
      else {
        delay[i] = now + .35 + Math.random() * .85;
        mid[i * 2] = ((Math.random() - .5) * 1.08 - (want.x - .5)) * W / cur.scale;
        mid[i * 2 + 1] = ((Math.random() - .5) * 1.08 + (want.y - .5)) * Hh / cur.scale;
        vel[i * 3 + 2] += (Math.random() - .5) * .07;
      }
    }
  }
  api.setTarget = setTarget;

  /* pointer and scroll speed */
  const ptr = { x: -9, y: -9, nx: 0, ny: 0 };
  addEventListener("pointermove", e => { ptr.x = e.clientX; ptr.y = e.clientY; ptr.nx = e.clientX / W - .5; ptr.ny = e.clientY / Hh - .5; }, { passive: true });
  let lastY = scrollY, speed = 0;

  let t0 = performance.now(), running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) { t0 = performance.now(); requestAnimationFrame(frame); } });
  function frame(t) {
    if (!running) return;
    const dt = Math.min((t - t0) / 1000, .05); t0 = t;
    step(dt); requestAnimationFrame(frame);
  }
  /* one simulation step and one draw; also callable by hand (api.step) to fast-forward */
  function step(dt) {
    now += dt;
    const sy = scrollY; speed += (Math.min(Math.abs(sy - lastY) / 60, 1.4) - speed) * .12; lastY = sy;
    const k = 1 - Math.pow(.001, dt);
    /* motion is counted in 60 fps frames, so it takes the same time on any screen */
    const fr = dt * 60, damp = Math.pow(DAMP, fr);
    cur.x += (want.x - cur.x) * k * .7; cur.y += (want.y - cur.y) * k * .7; cur.alpha += (want.alpha - cur.alpha) * k * .6;
    const fit = Math.min(Hh * .33, W * (small() ? .4 : .2) / Math.max(half, 1) * (small() ? 1 : 1.25));
    cur.scale += (fit - cur.scale) * k;
    cur.spread += ((reduce ? 0 : speed * .45) - cur.spread) * k;
    /* pointer in shape units */
    const mx = (ptr.x - cur.x * W) / cur.scale, my = -(ptr.y - cur.y * Hh) / cur.scale;
    for (let i = 0; i < N; i++) {
      const j = i * 3, d = i >= NS;
      if (!reduce) {
        const wait = !d && now < delay[i], s = (d ? .012 : wait ? SCATTER : SPRING) * fr;
        let ax = ((wait ? mid[i * 2] : tgt[j]) - pos[j]) * s, ay = ((wait ? mid[i * 2 + 1] : tgt[j + 1]) - pos[j + 1]) * s;
        if (!d) { const dx = pos[j] - mx, dy = pos[j + 1] - my, q = dx * dx + dy * dy; if (q < .05) { const f = (.05 - q) * .35; ax += dx * f; ay += dy * f; } }
        vel[j] = (vel[j] + ax) * damp; vel[j + 1] = (vel[j + 1] + ay) * damp; vel[j + 2] = (vel[j + 2] + (tgt[j + 2] - pos[j + 2]) * s) * damp;
        pos[j] += vel[j] * fr; pos[j + 1] += vel[j + 1] * fr; pos[j + 2] += vel[j + 2] * fr;
      }
      const c = i * 2; col[c] += (tcol[c] - col[c]) * .08; col[c + 1] += (tcol[c + 1] - col[c + 1]) * .08;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, bPos); gl.bufferSubData(gl.ARRAY_BUFFER, 0, pos);
    gl.bindBuffer(gl.ARRAY_BUFFER, bCol); gl.bufferSubData(gl.ARRAY_BUFFER, 0, col);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(U.uT, now); gl.uniform1f(U.uDpr, dpr); gl.uniform1f(U.uAlpha, cur.alpha); gl.uniform1f(U.uSpread, cur.spread);
    gl.uniform1f(U.uYaw, reduce ? 0 : (Math.sin(now * .35) * .34 + ptr.nx * .25) * flat);
    gl.uniform1f(U.uPitch, reduce ? 0 : (Math.sin(now * .27) * .1 + ptr.ny * .15) * flat);
    gl.uniform1f(U.uScale, cur.scale * dpr); gl.uniform2f(U.uCenter, cur.x * W * dpr, cur.y * Hh * dpr); gl.uniform2f(U.uRes, canvas.width, canvas.height);
    gl.drawArrays(gl.POINTS, 0, N);
  }
  /* share of shape particles still away from their place (for timing checks) */
  api.away = () => { let c = 0; for (let i = 0; i < NS; i++) { const j = i * 3; if (Math.abs(tgt[j] - pos[j]) + Math.abs(tgt[j + 1] - pos[j + 1]) > .04) c++; } return c / NS; };
  api.step = n => { for (let i = 0; i < (n || 1); i++) step(.016); };
  requestAnimationFrame(frame);
  return api;
};
})();
