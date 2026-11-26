# AB Media — landing page, version 3

A new, separate site. `abmedia-site` and `abmedia-v2` are not touched by it.

- **Structure and calls to action** follow di-force.uz: offer bar with a timer, hero with two buttons,
  "the difference", calculator, problems, "others vs us", process, clients and work, why us,
  formats (in place of price plans), request form, FAQ, contacts.
- **Look and motion** follow oqdoppi.uz: one fixed field of particles that reassembles into a new shape
  for every section, a numbered rail on the side, mono labels, light headings with a bold ending.
- **Content** (texts in EN / ES / RU / AR, films, contacts, the journey model) comes from `abmedia-site`.
  Palette: night, one tungsten accent, REC red only for the live dot.

## Run

The pages are written by one script (Node, no packages):

```
node build.js
python -m http.server 8093 --directory .
```

Open http://127.0.0.1:8093. Add `?preview` to try the form without sending anything.
Every language has its own address: `/`, `/es/`, `/ru/`, `/ar/`; every film has a page: `/work/<film>/`.
`index.html`, `es/`, `ru/`, `ar/`, `work/`, `sitemap.xml`, `robots.txt`, `404.html`, `llms.txt` and
`site.webmanifest` are build output: change the sources and run `node build.js`, do not edit them by hand.

## Search engines

- The text of every page is in its HTML (no script needed to read it), with its own title, description,
  canonical address, hreflang links, share image and structured data (organisation, FAQ, films, breadcrumbs).
- Page titles, descriptions and film descriptions are in `seo.json`.
- The site address is the `SITE` line at the top of `build.js`. After a move to its own domain: change it,
  add a `CNAME` file with the domain, run the build, push.
- `robots.txt` is read by robots only at the root of a host, so it starts to work with an own domain;
  until then the sitemap is given to Google and Bing by hand in their webmaster tools.
- `google992a91b1ebd6f7bc.html` is the Google Search Console ownership file.

## Where things are

| What | File |
|---|---|
| Numbers, contacts, the Google Sheet address, what each format includes | `static/data.js` |
| Texts shared with the first site | `static/i18n.js` (a copy) |
| Texts that exist only here | `static/i18n-v3.js` |
| Markup of the sections (shared by the browser and the build) | `static/page.js` |
| Calculator, form, film player, scroll | `static/app.js` |
| Page head, film pages, sitemap | `build.js`, `seo.json` |
| Particle shapes and their motion | `static/particles.js` |
| Styles | `static/style.css` |

The form posts to the same Google Sheet as the first site. There are no prices, guarantees or
result figures on the page, because none are confirmed; the calculator is labelled as an estimate.
