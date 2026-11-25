/* AB Media v3: page structure (offer bar, hero with two CTAs, difference, calculator, problems,
   fixes, process, work, why, formats, request form, FAQ, contacts) and its behaviour. */
(function () {
"use strict";
const I = window.ABM_I18N, V = window.ABM_V3, D = window.ABM_DATA;
const $ = (s, r) => (r || document).querySelector(s), $$ = (s, r) => [...(r || document).querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const mark = s => esc(s).replace(/\*(.+?)\*/g, "<b>$1</b>");
const store = {
  get(k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } },
  set(k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) {} }
};
const QS = new URLSearchParams(location.search);
const PREVIEW = QS.has("preview");          /* ?preview: the form sends nothing */
const small = () => innerWidth < 900;
const CASE = {}; I.CASES.forEach(c => CASE[c.client] = c);

let lang = [QS.get("lang"), store.get("abm-lang"), (navigator.language || "en").slice(0, 2).toLowerCase(), "en"].find(x => I.LANGS.includes(x));
let t = null, reach = D.cjm.reach_default, calc = null, fmt = "", particles = null;
const num = n => Math.round(n).toLocaleString(lang === "ar" ? "en-US" : lang);
const arrow = () => `<i class="ar" aria-hidden="true">${lang === "ar" ? "←" : "→"}</i>`;
const pic = (name, alt, cls) => `<picture${cls ? ` class="${cls}"` : ""}><source type="image/avif" srcset="media/${name}.avif"><source type="image/webp" srcset="media/${name}.webp"><img src="media/${name}.jpg" alt="${esc(alt)}" loading="lazy" decoding="async"></picture>`;

/* ---------- sections ---------- */
let count = 0;
function sec(id, shape, side, eb, h, body, wide, tag) {
  count++; tag = tag || "h2";
  return `<section class="s s-${id}" id="${id}" data-shape="${shape}" data-side="${side}" data-eb="${esc(eb)}">
<div class="wrap"><div class="head"><div class="head-t">
<p class="eb rv"><span>${String(count).padStart(2, "0")}</span><i></i><span>${esc(eb)}</span></p>
<${tag} class="h rv">${mark(h)}</${tag}>${body || ""}</div></div>${wide ? `<div class="wide">${wide}</div>` : ""}</div></section>`;
}
const cta = (cls) => `<a class="btn btn-acc ${cls || ""}" href="#request">${esc(t.cta)} ${arrow()}</a>`;
const list = (items, cls) => `<ul class="${cls}">${items.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;

function page() {
  count = 0;
  const f = CASE[D.featured], c = D.contacts;
  const hero = sec("hero", "logo", "right", t.eb_hero, t.h_hero, `
<p class="lead rv">${esc(t.hero_sub)}</p>
<div class="cta-row rv">${cta()}<a class="btn btn-line" href="#work">${esc(t.cta2)}</a></div>
<p class="badge rv"><span class="rec"></span>${esc(t.badge)}</p>
<button class="chip rv" type="button" data-play="${esc(f.client)}"><span class="chip-p" aria-hidden="true">▶</span><span><small>${esc(t.now)}</small>${esc(f.client)} · ${f.dur}</span></button>
<dl class="stats rv">${t.stats.map(s => `<div><dt>${esc(s[1])}</dt><dd>${esc(s[0])}</dd></div>`).join("")}</dl>`, "", "h1");

  const diff = sec("diff", "chart", "left", t.d_eb, t.h_diff, `<p class="lead rv">${esc(t.diff_p)}</p>`, `
<div class="cmp">
<article class="card rv"><p class="mono tag">${esc(t.ad_tag)}</p><h3>${esc(t.d_ad)}</h3>${list(t.ad_pts, "ul-x")}</article>
<article class="card card-acc rv"><p class="mono tag acc">${esc(t.film_tag)}</p><h3>${esc(t.d_film)}</h3>${list(t.film_pts, "ul-v")}</article>
</div>`);

  const calcS = sec("calc", "funnel", "right", t.calc_h, t.h_calc, `
<p class="lead rv">${esc(t.calc_p)}</p>
<div class="calc rv">
<div class="calc-top"><label class="mono" for="reach">${esc(t.c_reach)}</label><output id="reach-o" for="reach"></output></div>
<input type="range" id="reach" min="${D.cjm.reach_min}" max="${D.cjm.reach_max}" step="10000" value="${reach}">
<div class="calc-t">
<div class="calc-r calc-hd mono"><span></span><span>${esc(t.j_modes[0])}</span><span class="acc">${esc(t.j_modes[1])}</span></div>
${[1, 2, 3].map(i => `<div class="calc-r"><span class="mono">${esc(t.j_stages[i])}</span><span id="n${i}"></span><span class="acc" id="f${i}"></span></div>`).join("")}
</div>
<p class="sum" id="sum"></p>
<p class="note">${esc(t.j_note)}</p>
<a class="btn btn-acc" href="#request" id="calc-cta">${esc(t.c_cta)} ${arrow()}</a>
</div>`);

  const prob = sec("problems", "cross", "left", t.pr_eb, t.h_prob, "", `
<div class="grid3">${t.fixes.map(x => `<article class="card pain rv"><span class="pain-x" aria-hidden="true">×</span><h3>${esc(x[0])}</h3></article>`).join("")}</div>`);

  const fix = sec("fix", "check", "right", t.f_eb, t.h_fix, "", `
<div class="fx-t">
<div class="fx fx-hd mono"><span></span><span>${esc(t.others)}</span><span class="acc">${esc(t.j_ours)}</span></div>
${t.fixes.map((x, i) => `<div class="fx rv"><span class="mono">${String(i + 1).padStart(2, "0")}</span><s>${esc(x[0])}</s><b>${esc(x[1])}</b></div>`).join("")}
</div>
<div class="cta-row rv">${cta()}</div>`);

  const how = sec("how", "clapper", "left", t.how_eb, t.h_how, `
<ol class="rows">${t.steps.map((x, i) => `<li class="rv"><span class="mono">${String(i + 1).padStart(2, "0")}</span><div><b>${esc(x[0])}</b><small>${esc(x[1])}</small></div></li>`).join("")}</ol>
<div class="cta-row rv">${cta()}</div>`);

  const names = D.order.map(n => `<span>${esc(n)}</span>`).join("");
  const work = sec("work", "play", "right", t.cs_eb, t.h_work, "", `
<p class="mono tr-eb rv">${esc(t.tr_eb)}</p>
<div class="marq rv" aria-hidden="true"><div>${names}${names}</div></div>
<div class="films">${D.order.map(n => { const k = CASE[n]; return `<button class="film rv" type="button" data-play="${esc(n)}">${pic(k.video, t.alt_still.replace("{c}", n))}<span class="film-p" aria-hidden="true">▶</span><span class="film-m"><b>${esc(n)}</b><small class="mono">${esc(t.cat[n])} · ${k.dur}</small></span></button>`; }).join("")}</div>
<div class="cta-row rv">${cta()}</div>`);

  const why = sec("why", "camera", "left", t.why_eb, t.h_why, `
<figure class="person rv">${pic("portrait", t.alt_p)}<figcaption><b>${esc(t.name)}</b><small>${esc(t.role)}</small></figcaption></figure>
<ul class="rows rows-s">${t.why.map((x, i) => `<li class="rv"><span class="mono">${String(i + 1).padStart(2, "0")}</span><div><b>${esc(x)}</b></div></li>`).join("")}</ul>`);

  const formats = sec("formats", "strip", "right", t.fmt_eb, t.h_fmt, "", `
<div class="grid3 fmts">${t.fm.map((x, i) => `<article class="card fmt rv${i === 2 ? " card-acc" : ""}">
${i === 2 ? `<p class="mono tag acc">${esc(t.fmt_tag)}</p>` : `<p class="mono tag">${String(i + 1).padStart(2, "0")}</p>`}
<h3>${esc(x[0])}</h3><p class="fmt-d">${esc(t.fmt_d[i])}</p>
${list(D.formats[i].map(k => t.sc[k]), "ul-v")}
<p class="mono fmt-price">${esc(t.fmt_price)}</p>
<a class="btn ${i === 2 ? "btn-acc" : "btn-line"}" href="#request" data-format="${i}">${esc(t.pick)} ${arrow()}</a></article>`).join("")}</div>`);

  const request = sec("request", "plane", "right", t.rq_eb, t.h_rq, `
<p class="lead rv">${esc(t.rq_p)}</p>
<p class="badge rv"><span class="rec"></span>${esc(D.bonus[lang])}</p>
<form class="form rv" id="form" novalidate>
<p class="extra" id="extra" hidden></p>
<label class="fl"><span class="mono">${esc(t.f_name)}</span><input id="f-name" name="name" autocomplete="name" required></label><p class="err" id="e-name" hidden></p>
<label class="fl"><span class="mono">${esc(t.f_phone)}</span><input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" required></label><p class="err" id="e-phone" hidden></p>
<label class="fl"><span class="mono">${esc(t.f_email)}</span><input id="f-email" name="email" type="email" autocomplete="email" dir="ltr" required></label><p class="err" id="e-email" hidden></p>
<label class="fl"><span class="mono">${esc(t.f_format)}</span><select id="f-format" name="format"><option value="">${esc(t.f_none)}</option>${t.fm.map((x, i) => `<option value="${i}">${esc(x[0])}</option>`).join("")}</select></label>
<input class="hp" id="f-web" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
<button class="btn btn-acc btn-wide" type="submit"><span>${esc(t.f_btn)}</span> ${arrow()}</button>
<p class="err" id="send-err" hidden></p>
<p class="note">${esc(t.privacy)}</p>
</form>
<div class="sent" id="done" hidden><h3 id="done-h" tabindex="-1">${esc(t.done_h)}</h3><p id="done-msg"></p><button class="btn btn-line" type="button" id="again">${esc(t.again)}</button></div>`, `
<p class="mono tr-eb rv">${esc(t.nx_h)}</p>
<ol class="grid3 next">${t.nx.map((x, i) => `<li class="card rv"><span class="mono">${String(i + 1).padStart(2, "0")}</span><b>${esc(x)}</b></li>`).join("")}</ol>`);

  const faq = sec("faq", "question", "left", t.faq_eb, t.h_faq, `
<div class="faq">${t.faq.map((x, i) => `<details class="rv"${i ? "" : " open"}><summary><span>${esc(x[0])}</span><i aria-hidden="true">+</i></summary><p>${esc(x[1])}</p></details>`).join("")}</div>`);

  const links = [
    [t.ct[0], "tel:" + c.phone.replace(/\s/g, ""), c.phone],
    [t.ct[1], c.telegram[lang], "@" + c.telegram[lang].split("/").pop()],
    [t.ct[2], c.instagram[lang], "@" + c.instagram[lang].split("/").filter(Boolean).pop()],
    [t.ct[4], c.youtube, "@" + c.youtube.split("@").pop()]
  ];
  const contact = sec("contact", "wordmark", "center", t.ct_eb, t.h_ct, `
<ul class="links rv">${links.map(l => `<li><span class="mono">${esc(l[0])}</span><a href="${esc(l[1])}"${/^http/.test(l[1]) ? ' target="_blank" rel="noopener"' : ""} dir="ltr">${esc(l[2])}</a></li>`).join("")}</ul>
<footer class="foot rv"><span>© 2026 AB Media</span><span>${esc(t.foot)}</span></footer>`);

  return hero + diff + calcS + prob + fix + how + work + why + formats + faq + request + contact;
}

/* ---------- render ---------- */
function render() {
  const keep = {}; $$("#form input, #form select").forEach(i => keep[i.id] = i.value);
  t = Object.assign({}, I.L[lang], V[lang]);
  document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = "AB Media — " + t.hero_tag;
  $('meta[name="description"]').content = t.foot;
  $("#app").innerHTML = page();
  /* numbers follow the order on the page, whatever order the sections were built in */
  $$(".s .eb span:first-child").forEach((e, i) => { e.textContent = String(i + 1).padStart(2, "0"); });
  Object.keys(keep).forEach(id => { const i = $("#" + id); if (i) i.value = keep[id]; });
  if (fmt !== "") $("#f-format").value = fmt;

  const href = ["#work", "#how", "#formats", "#faq"];
  $("#nav").innerHTML = t.nav3.map((x, i) => `<a href="${href[i]}">${esc(x)}</a>`).join("");
  $("#top-cta").textContent = t.cta; $("#float-cta").textContent = t.cta; $("#pl-cta").textContent = t.cta;
  $("#pl-x").setAttribute("aria-label", t.close);
  $("#langs").setAttribute("aria-label", t.lang_l);
  $("#langs").innerHTML = I.LANGS.map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("");
  $("#bar-t").innerHTML = `${esc(t.bar.replace("5", String(D.offer_minutes)))} <b>${esc(D.bonus[lang])}</b>`;

  rail(); reveal(); bindCalc(); bindForm(); extra(); onScroll();
}

/* ---------- rail (section thumbnails on the side) ---------- */
function rail() {
  const r = $("#rail"); r.innerHTML = "";
  $$(".s").forEach((s, i) => {
    const a = document.createElement("a"); a.href = "#" + s.id; a.title = s.dataset.eb; a.setAttribute("aria-label", s.dataset.eb);
    if (particles) a.appendChild(particles.thumb(s.dataset.shape, 56));
    const n = document.createElement("span"); n.textContent = i + 1; a.appendChild(n); r.appendChild(a);
  });
}

/* ---------- reveal on scroll ---------- */
let io = null;
function reveal() {
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
  $$(".rv").forEach(el => { const sib = $$(":scope > .rv", el.parentElement); el.style.setProperty("--d", Math.min(sib.indexOf(el), 7) * 70 + "ms"); io.observe(el); });
}

/* ---------- scroll: active section, particles target, rail, progress ---------- */
let active = -1, tick = false;
function onScroll() {
  tick = false;
  const vh = innerHeight, secs = $$(".s"), mid = vh * .5;
  let a = 0; secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= mid) a = i; });
  const s = secs[a]; if (!s) return;
  if (a !== active) { active = a; $$("#rail a").forEach((x, i) => x.classList.toggle("on", i === a)); }
  const h = $(".head", s).getBoundingClientRect();
  const vis = Math.max(0, Math.min(1, (Math.min(h.bottom, vh) - Math.max(h.top, 0)) / Math.min(h.height, vh)));
  let x = s.dataset.side === "right" ? .73 : s.dataset.side === "left" ? .3 : .5, y = s.dataset.side === "center" ? .3 : .52, al = .12 + .88 * vis;
  if (lang === "ar") x = 1 - x;
  /* phones: the shape sits in the empty top of each section and scrolls away with it */
  if (small()) { x = .5; y = (h.top + vh * .29) / vh; al = 1; }
  if (particles) particles.setTarget(s.dataset.shape, x, y, al);
  const max = document.documentElement.scrollHeight - vh;
  $("#prog").style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
  $("#top").classList.toggle("stuck", scrollY > 20);
  /* floating button (phones): only while no other request button or the form is on screen */
  const seen = $$("#app .btn-acc, #form").some(b => { const r = b.getBoundingClientRect(); return r.bottom > 0 && r.top < vh; });
  $("#float-cta").hidden = seen || scrollY < vh * .7;
}
addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener("resize", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } });

/* ---------- calculator (estimated journey model) ---------- */
function bindCalc() {
  const r = $("#reach");
  const upd = () => {
    reach = +r.value; const k = reach / D.cjm.base_reach, n = D.cjm.now, f = D.cjm.film;
    $("#reach-o").textContent = num(reach);
    [1, 2, 3].forEach(i => { $("#n" + i).textContent = num(n[i] * k); $("#f" + i).textContent = num(f[i] * k); });
    $("#sum").innerHTML = t.j_sum.replace("{n}", num((f[3] - n[3]) * k)).replace("{x}", String(+(f[3] / n[3]).toFixed(1)));
    r.style.setProperty("--p", ((reach - r.min) / (r.max - r.min) * 100) + "%");
  };
  r.addEventListener("input", upd); upd();
  $("#calc-cta").addEventListener("click", () => {
    const k = reach / D.cjm.base_reach;
    calc = { reach, buyers_now: Math.round(D.cjm.now[3] * k), buyers_film: Math.round(D.cjm.film[3] * k), extra: Math.round((D.cjm.film[3] - D.cjm.now[3]) * k) };
    extra();
  });
}
/* the estimate attached to the request */
function extra() {
  const e = $("#extra"); if (!e) return;
  if (!calc) { e.hidden = true; return; }
  e.hidden = false;
  e.innerHTML = `<span class="mono">${esc(t.calc_l)}</span><b>${esc(t.calc_s.replace("{r}", num(calc.reach)).replace("{n}", num(calc.extra)))}</b><button type="button" aria-label="${esc(t.remove)}">×</button>`;
  $("button", e).addEventListener("click", () => { calc = null; extra(); });
}

/* ---------- form ---------- */
function bindForm() {
  const form = $("#form"), F = { name: ["#f-name", "e-name", "e_name"], phone: ["#f-phone", "e-phone", "e_phone"], email: ["#f-email", "e-email", "e_email"] };
  const setErr = (input, id, key) => {
    const e = $("#" + id);
    if (key) { e.textContent = t[key]; e.hidden = false; input.setAttribute("aria-invalid", "true"); input.setAttribute("aria-describedby", id); }
    else { e.hidden = true; input.removeAttribute("aria-invalid"); input.removeAttribute("aria-describedby"); }
  };
  const utm = () => { const o = {}; ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(k => { const v = QS.get(k); if (v) o[k] = v.slice(0, 100); }); return o; };
  $("#f-format").addEventListener("change", e => { fmt = e.target.value; });
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const n = $("#f-name"), p = $("#f-phone"), m = $("#f-email"), btn = $('button[type="submit"]', form), label = $("span", btn), se = $("#send-err");
    const digits = p.value.replace(/\D/g, "");
    const okN = n.value.trim().length >= 2;
    const okP = /^\+?[\d\s().-]+$/.test(p.value.trim()) && digits.length >= 7 && digits.length <= 15;
    const okM = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.value.trim());
    setErr(n, "e-name", okN ? null : "e_name"); setErr(p, "e-phone", okP ? null : "e_phone"); setErr(m, "e-email", okM ? null : "e_email");
    if (!okN) return n.focus(); if (!okP) return p.focus(); if (!okM) return m.focus();
    se.hidden = true;
    const brief = fmt === "" ? null : { fmt: I.L.en.fm[+fmt][0] };
    const lead = { name: n.value.trim(), phone: p.value.trim(), email: m.value.trim(), lang, brief, calc, website: $("#f-web").value, utm: utm(), page: location.pathname, referrer: document.referrer.slice(0, 300) };
    btn.disabled = true; label.textContent = t.sending;
    if (!PREVIEW && D.leads_sheet) try {
      /* no-cors + text/plain: Apps Script takes it without a CORS preflight; the reply is opaque, so only a network error counts as failure */
      await fetch(D.leads_sheet, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(lead) });
    } catch (err) { btn.disabled = false; label.textContent = t.f_btn; se.textContent = t.e_send; se.hidden = false; return; }
    btn.disabled = false; label.textContent = t.f_btn;
    form.hidden = true; $("#done").hidden = false; $("#done-msg").textContent = t.ok.replace("{n}", lead.name); $("#done-h").focus({ preventScroll: true });
  });
  Object.values(F).forEach(([s, id]) => $(s).addEventListener("input", e => { if (e.target.getAttribute("aria-invalid")) setErr(e.target, id, null); }));
  $("#again").addEventListener("click", () => { form.reset(); calc = null; fmt = ""; extra(); $("#done").hidden = true; form.hidden = false; $("#f-name").focus(); });
}

/* ---------- clicks: language, format choice, film player ---------- */
const player = $("#player"), video = $("#pl-video");
function play(client) {
  const c = CASE[client]; if (!c) return;
  video.poster = `media/${c.video}.jpg`; video.src = `media/${small() ? "m/" : ""}${c.video}.mp4`;
  $("#pl-cat").textContent = `${t.cat[client]} · ${c.dur}`; $("#pl-title").textContent = client;
  const tx = c.t[lang] || c.t.en;
  $("#pl-dl").innerHTML = `<dt class="mono">${esc(t.l_task)}</dt><dd>${esc(tx[0])}</dd><dt class="mono">${esc(t.l_concept)}</dt><dd>${esc(tx[1])}</dd>`;
  player.showModal(); video.play().catch(() => {});
}
function stop() { video.pause(); video.removeAttribute("src"); video.load(); }
player.addEventListener("close", stop);
player.addEventListener("click", e => { if (e.target === player) player.close(); });
$("#pl-x").addEventListener("click", () => player.close());
$("#pl-cta").addEventListener("click", () => player.close());
document.addEventListener("click", e => {
  const l = e.target.closest("[data-lang]"); if (l) { lang = l.dataset.lang; store.set("abm-lang", lang); active = -1; render(); return; }
  const p = e.target.closest("[data-play]"); if (p) return play(p.dataset.play);
  const f = e.target.closest("[data-format]"); if (f) { fmt = f.dataset.format; $("#f-format").value = fmt; }
});

/* ---------- offer bar: the bonus holds for a few minutes from the first visit ---------- */
(function () {
  const bar = $("#bar"), tm = $("#timer"), total = D.offer_minutes * 60;
  let start = +store.get("abm-offer", true); if (!start) { start = Date.now(); store.set("abm-offer", String(start), true); }
  const step = () => {
    const left = total - Math.floor((Date.now() - start) / 1000);
    if (left <= 0) { bar.hidden = true; document.body.classList.remove("has-bar"); return; }
    bar.hidden = false; document.body.classList.add("has-bar");
    tm.textContent = String(Math.floor(left / 60)).padStart(2, "0") + ":" + String(left % 60).padStart(2, "0");
    setTimeout(step, 1000);
  };
  step();
})();

/* ---------- start ---------- */
render();
/* the logo shapes are drawn with Unbounded, so the particles wait for that font (2 s at most) */
const face = window.FontFace ? new FontFace("Unbounded", 'url("static/fonts/unbounded-latin.woff2")', { weight: "200 900" }).load().then(f => document.fonts.add(f)) : Promise.resolve();
Promise.race([face, new Promise(r => setTimeout(r, 2000))]).catch(() => {}).then(() => {
  try { particles = window.ABM_Particles($("#stage")); } catch (e) { particles = null; }
  window.ABM_P = particles;
  rail(); active = -1; onScroll();
  setTimeout(() => { $("#loader").classList.add("done"); document.body.classList.add("ready"); }, 500);
});
})();
