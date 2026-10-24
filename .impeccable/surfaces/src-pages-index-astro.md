---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home — surface brief

**Mode:** Persuade. **Scope:** home (`/`) of the demo. `/cotizar` is built; other routes are linked but not built yet.

- **Audience:** a new client from Mar del Plata, usually over 45, often on a phone, with no producer yet.
- **Primary action:** "Cotizá tu seguro", which goes to `/cotizar`. **Secondary:** a WhatsApp button (`wa.me`). Since the 23/10/2026 facelift requested by the user: no form and no phone numbers in the hero. **Claims:** a link from the hero plus a full red section with direct CTAs per claim type.
- **Proof:** 35 years, the office address and hours, the ten insurers (marked "a confirmar"), people with names, and the SSN. Nothing invented. The only highlighted figure is the "35 años" seal.
- **Assets:** the current logo (circular badge); hero photo of the rambla y Hotel Provincial de Mar del Plata (Ezarate, CC BY-SA 4.0) (Wikimedia Commons, Rocío Libro, CC BY-SA 4.0, credited on the image); stock photos only for places; pending-photo placeholders for named people.

## Direction contract

THESIS: Trust as clarity, starting from the city. The hero shows Mar del Plata in slow motion; underneath, the page reads like a well-drafted insurance policy (ruled fields, numbered clauses, stamp). It refuses the stock-family hero with three benefit icons and the hero holding a form.

OWN-WORLD: A warm off-white ground (paper #f6f4ef) with a very subtle grain on its own fixed layer behind the content; white sheets and clean text on top. Navy ink, ruled fields with mono numbers, the logo's green as a rubber-stamp seal, the logo-gradient field, and red reserved for claims (a full field in that section). Square corners, 1px and 2px rules, no shadows and no rounded cards.

STORY: The visitor recognises their city, understands that a local broker chooses insurer, cover and price for them, believes it through verifiable facts, and starts a quote or writes on WhatsApp. Anyone with a claim finds a direct route.

FIRST VIEWPORT: A minimal single-row fixed navbar (logo, Seguros · Siniestros · Contacto, and a Cotizá button), transparent with white ink over the photo, with no second row. Then a full-width photo of the rambla y Hotel Provincial de Mar del Plata (Ezarate, CC BY-SA 4.0) with a slow zoom (Ken Burns, about 32s, alternating) and a navy veil from the left. Over it: a white H1 "Tu seguro, bien elegido.", a one-line lead, a white "Cotizá tu seguro →" button, a green "Escribinos por WhatsApp" button, a link "¿Tuviste un siniestro? Te ayudamos" and the "+35 años" seal in white ink. Photo credit at the bottom right.

FORM: grounded "La póliza bien hecha", the user's choice from the safer re-roll (position 2 on that list). Hero refined by direct user request. seed:71148f634bc520fa

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction

The navbar slides in on load, turns solid off-white after a short scroll, hides when scrolling down and reappears when scrolling up; links draw an underline on hover; on phones a menu unfolds by animating its height. The hero photo zooms slowly and is still under reduced motion. The seal stamps itself on load. The fixed mobile bar appears only after scrolling past the hero, which already carries the same buttons. In Siniestros, each claim type is a white tile that starts the report for that type.

## Unresolved

The insurer list, the producer roster and the team photos are pending with the client. The "10 aseguradoras" figure is added only once the list is confirmed. `/siniestros/denuncia` is not built yet.
