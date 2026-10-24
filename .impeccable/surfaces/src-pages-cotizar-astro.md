---
version: 1
slug: "src-pages-cotizar-astro"
primary_target: "src/pages/cotizar.astro"
related_targets: []
---

# Cotizar — surface brief

**Mode:** Operate. **Scope:** `/cotizar` in the demo (src/pages/cotizar.astro). It inherits the "La póliza bien hecha" world from DESIGN.md.

- **Audience:** a client who already left contact details on the home, or who arrives from "Cotizar" on a coverage. Often on a phone, usually over 45.
- **Task:** complete the minimum data for the line of insurance so the adviser calls already prepared. The user chose "minimum, and the adviser calls".
  - Auto: make, model, year.
  - Home/business: property type and postcode.
  - Personal accident: who it is for.
  - Other: which policy, plus an optional comment.
  - Contact: preloaded from the home via sessionStorage, editable; asked for if missing.
  - Producer: optional.
- **States:** line preselected by `?rama=`; no line; contact known or empty; field errors; ready (seal); sent (demo, sends nothing).
- **Constraints:** nothing invented. "Demo" stays visible on the confirmation.

## Direction contract

THESIS: The request and its cover page. You fill in a short numbered form and, beside it, the policy cover page builds itself with what you write. It refuses a generic stepper wizard and the long single-column form.

OWN-WORLD: The DESIGN.md world: tint-sea paper, a white sheet with ruled fields and mono numbers in the margin, navy ink, the green seal as the only stamp, red only for errors. The cover page is a white sheet with a guilloché strip and data rows (mono label, value in ink), and a dashed line where data is still missing.

STORY: The visitor sees that very little is asked, watches their request take shape on the cover page, and sends it knowing an adviser will call them.

FIRST VIEWPORT: Shared site header. Left column (about 60%): back link, H1 "Pedí tu cotización", one-line lead, then the sheet with 01 line (4 square choices), 02 line-specific fields, 03 contact (known block or inputs), 04 optional producer, and a navy submit bar naming the line. Right column (470px, sticky): "Carátula del pedido" with a guilloché strip and rows for line, item, holder, phone and producer.

FORM: dealt surface structure "Hoja con carátula en vivo", position 1 on my ordered list (dealt 3rd). seed:42742a6821de5d98

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

Every field writes into its cover-page row as you type. When the required data is complete, the green seal "LISTO PARA ENVIAR" is stamped onto the cover page (the same stamp move as the home). On send, the cover page changes to "Pedido recibido".
