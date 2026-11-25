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

Plain static files, no build step:

```
python -m http.server 8093 --directory .
```

Open http://127.0.0.1:8093. Add `?preview` to try the form without sending anything,
`?lang=ru` (en, es, ru, ar) to pick a language.

## Where things are

| What | File |
|---|---|
| Numbers, contacts, the Google Sheet address, what each format includes | `static/data.js` |
| Texts shared with the first site | `static/i18n.js` (a copy) |
| Texts that exist only here | `static/i18n-v3.js` |
| Sections, calculator, form, film player | `static/app.js` |
| Particle shapes and their motion | `static/particles.js` |
| Styles | `static/style.css` |

The form posts to the same Google Sheet as the first site. There are no prices, guarantees or
result figures on the page, because none are confirmed; the calculator is labelled as an estimate.
