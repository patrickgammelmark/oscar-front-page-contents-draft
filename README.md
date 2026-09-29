# hejoscar.dk – local copy of the front page

## What this is
A copy of the front page of https://hejoscar.dk as it looked on 23 September 2026. It is meant as a starting point for design proposals you can show the product team.

- It is **only the front page**. Every link goes to `#`, so clicking one keeps you on the same page.
- Images, fonts and styling come from the live site and are saved in this folder, so the page works offline.
- The page does not connect to anything. Search, login, the car carousel and the language menu are just for show.
- These parts work when you click them:
  - The menus in the top bar (Biludlejning, Afdelinger …) open as dropdowns. Their content is copied from the live site.
  - The arrow buttons in the review section scroll through the reviews.
  - "Skift skrifttype" at the bottom of the "Kontakt & FAQ" menu switches between Silka + Inter and Quicksand + IBM Plex Sans.
  - The FAQ questions open and close, and on phones so do the steps in "Lej en bil på 3 minutter".
- The region tabs ("Hovedstaden", "Midtjylland" …) change which tab is highlighted, but they keep showing the first region's content.

## How to open it
1. Open this folder in Finder.
2. Double-click `index.html`. It opens in your browser.

You don't need to install or set up anything.

### Live preview (updates automatically)
To see changes as soon as they are saved, without refreshing:
1. Open this folder in VS Code. The free "Live Server" extension must be installed; it already is on this Mac.
2. Click **Go Live** in the blue bar at the bottom right of VS Code. The page opens in your browser at `http://127.0.0.1:5500`.
3. Leave that browser tab open. Every time a file in the folder is saved, the page reloads by itself.

To stop, click the same button again (it now shows **Port : 5500**).

## How to make changes
Ask Claude Code, for example: *"Change the hero headline to …"* or *"Move the reviews section above 'Se vores biler'"*. Then refresh the browser to see the result.

Tip: keep a copy of the untouched folder (for example `Hejoscar.dk original`), so you can show before and after side by side.

## What's in the folder
| Item | What it is |
|---|---|
| `index.html` | The page itself, in Danish (all text and layout) |
| `en.html` | The English version of the page (same layout, English text) |
| `aarhus-n.html` | Example location page (Aarhus N – Randersvej), redesigned in the front page's style, in Danish |
| `en-aarhus-n.html` | The English version of the location page |
| `assets/img/loc/` | Images for the location page (branch photo, partner photo, map, car photos) |
| `assets/css/` | The live site's styling |
| `assets/css/custom.css` | Our own design changes (e.g. the curved bottom of the top section) |
| `assets/fonts/` | The Inter and Silka fonts from the live site, plus Quicksand (headings) and IBM Plex Sans (body text) |
| `assets/img/` | All images and icons |
| `assets/js/interactions.js` | A small script that makes menus, buttons and the FAQ clickable |
| `references/` | Reference material: brand colour guide, design screenshots, the original hero photo and app badges. The page does not use these files, so they can be deleted. |

## Changes made so far
- Headline changed to "Lej en bil nær dig", and the page title updated to match.
- The customer rating has moved from under the search button to above the headline. It is redesigned as five rounded orange stars (4.5 of 5 filled) followed by "10.303 anmeldelser". The text "Kundeanmeldelser: 4,5/5" is gone. To change the numbers, edit `--rating: 4.5` and the text "10.303 anmeldelser" in `index.html`.
- The App Store and Google Play badges are no longer shown in the hero (files kept in `assets/img/badge-app-store.svg` and `assets/img/badge-google-play.svg`). Only the star rating sits above the headline on desktop.
- The "Chaufførens alder" (driver age) selector is removed from the search form.
- The search form is simplified: the "Biludlejning"/"Bilabonnement" dropdown and the car type buttons (Personbil, Varevogn, Flyttebil, Minibus, Andet) are removed, so the form only has location, dates and the "Søg" button. On phones the form has 16px padding on all sides. The location field says "Hvor vil du leje din bil?" instead of "By eller postnummer".
- The four benefits under the "Kendt fra" logos are redesigned (from `references/Skærmbillede 2026-09-23 kl. 14.52.32.png`). They are no longer in boxes. Each has a white icon in a square orange box with rounded corners (light orange brand-orange-02, in the style of the hero pills) above a heading and a soft grey line of text: "4,5/5 fra 10.000+ kunder – Prøv selv, og find ud af hvorfor.", "Gratis afbestilling – når du aflyser mindst 7 dage før." (with a calendar icon), "Vejhjælp 24/7 – Ring og få hjælp uden merpris." followed by an orange link, "Brug for vejhjælp?", and "Ingen skjulte gebyrer – Du ser alt, før du betaler.". On desktop they sit in four columns. On tablet they sit two by two, and on phones they are stacked. On phones each benefit has the icon on the left and the heading and text on the right, with a slightly smaller heading so it stays on one line.
- The car listing (heading now "Du har noget, du skal. Vi har lejebilen.") no longer shows individual cars. Instead it shows the four car type cards that used to sit further down under "Vi har en lejebil til ethvert behov": Personbil (fra 249 kr.), Varevogn (fra 269 kr.), Flyttebil (fra 599 kr.) and Minibus (fra 699 kr.). That lower section is removed. The car type buttons are gone, and the heading is now "Du har noget, du skal. Vi har lejebilen." (before "Se vores biler"), centred. The four cards stand on a light blue panel (white with a light border, with a 20px Oscar-orange stripe along the top and a 20px blue brand-blue-600 #2949A3 stripe along the bottom, like the Oscar sign). The cards are semi-transparent light blue (#F1F3FA at 98%) with a light blur and a clear thin edge that starts partway up, so the white cards rise above its top edge, and the cars rise above the top of the cards. A soft blue glow behind each card shows above it, behind the car. The bottom of each card (inspired by `references/Eksempel på bund-sektion under cards.png`) has a thin line, "fra X kr. /dag" on the left and an orange button with the number of available vehicles on the right (+600, +150, +40 and +25 are placeholders). The heading "Du har noget, du skal. Vi har lejebilen." and "Det her kan blive din oplevelse" are 20% bigger than the other section headings. On phones "Vi har lejebilen." sits on its own line.
- New "Om Oscar" section between the car types and the reviews. It uses the same set-up as the hero: the text on the left at the page's left edge (heading "Lokal biludlejning" with "for alle" on its own line in Oscar orange, and four short paragraphs about what Oscar does) and the photo on the right, across the full content width. There is no box behind it, so it is a calm white section between the car panel and the light blue review panel. The photo has rounded corners and the same soft shadow as the other panels. It shows an Oscar partner in front of an "Oscar Biludlejning – Lokalt, enkelt, billigt" sign (`assets/img/partner-oscar.jpg`, from hejoscar.dk/erhverv). On phones the photo sits above the text. The old "Biludlejning hos Oscar" section at the bottom of the page is removed.
- The "how it works" section heading is now "Lej en bil på 3 minutter" (before "Biludlejning er nemt med Oscar"). The four steps now read "Find en bil", "Vælg tilvalg", "Betal" and "Kør", with new short texts. On phones the steps open and close when tapped.
- The app section (heading now "Få rabatter & gem ubrugte kilometer med Oscars app", with a new short text) has moved up to sit right under "Lej en bil på 3 minutter" (before the FAQ). On tablet and desktop, the hand holding the phone (`assets/img/app-phone-hand.webp`, from `references/Mobil i hånd, transparent baggrund.png`) rises above the top edge of the dark section. The QR code stands on its own, without a background box, with the text "Scan for at downloade".
- The contact section has moved down to sit just before the footer, and it is redesigned in the style of the rest of the page: a light blue panel with only the heading "Brug for hjælp?" on the left, and two white cards on the right ("Skriv til os" with the email address, and "Livechat" with the opening hours). Each card has an orange icon box, like the benefits, and an outlined button. On phones everything is stacked.
- The FAQ is renamed "Ofte stillede spørgsmål om Oscar Biludlejning", with the short text "Få svar på de mest almindelige spørgsmål herunder." It keeps only four questions (returning the car to another department, cancelling, driving abroad, and extra cost for young drivers), and the "Se alle ofte stillede spørgsmål" button sits under them. The FAQ and "Populære byer i Danmark" headings are the same size as the other large section headings.
- "Populære byer i Danmark" is one simple list of all 13 cities (taken from hejoscar.dk on 27 September 2026), sorted by number of cars, instead of region tabs. Each city has a photo, its name and the number of available cars, with no borders or arrows. Four columns on desktop, two on phones (where it says just "598 biler"). The photos are in `assets/img/cities/`.
- The "Find din nærmeste Oscar afdeling i Danmark" section is removed for now (it is commented out in `index.html`).
- The review section (heading now "Det her kan blive din oplevelse", before "Læs hvad vores kunder siger") is redesigned as a carousel on a light blue panel (#F1F3FA), like the "Om Oscar" box. The heading is followed by the overall star rating and a "Se alle 13.303 anmeldelser" link (the button below the cards is removed). The review cards are white, each with five white stars on a small light orange pill, a photo and the reviewer's name followed by a town. The photos of Mette, Mark and Henriette were supplied by Jakob (originals in `references/`). The other three photos in `assets/img/avatars/` are AI-generated people who do not exist (from thispersondoesnotexist.com). The towns are made up. All of these are placeholders only, and you can scroll through them with the arrow buttons (swipe on phones).
- The review section starts with a featured review, with no background behind it. The reviewer (`assets/img/featured-reviewer.webp`, from `references/fremhævet anmelder.png`) stands on the left, right on the top edge of the review panel. That edge cuts him at the waist, so he seems to rise out of the reviews. On the right is a large review in Quicksand with five stars. An oversized quotation mark in light brand blue (brand-blue-80, #CFDFFC) floats in the background behind him and the text. The review text and "Thomas, Silkeborg – Lejede en varevogn" are placeholders.
- Two lines of body text under the USPs: "Tag på weekendtur, få styr på flytningen eller løs logistikken. Få hverdagen til at køre med en lejebil fra Oscar Biludlejning – fra 249 kr./dag."
- Fonts: headings use Silka and body text uses Inter (the live site's own fonts). The earlier proposal, Quicksand for headings and IBM Plex Sans for body text (both free, saved in `assets/fonts/`), is kept: switch between the two with "Skift skrifttype" at the bottom of the "Kontakt & FAQ" menu. The browser remembers the choice. (Figtree and DM Sans were tried for body text and dropped.)
- The tagline under the headline is removed. Three USPs sit under the headline instead: "Gratis 100 km./dag", "Inkl. kasko" and "Støt lokalt". They are pills in the style of the print marketing (`references/Skærmbillede 2026-09-24 kl. 13.22.40.png`): rounded, slightly see-through Oscar orange with white bold text and a check mark in a white circle. On desktop all four sit on one line; on phones they sit two by two.
- Mobile hero: the App Store and Google Play badges are hidden (the rating stays), the three USP pills sit on one line below the search form (above the rating), and the text under them starts at "Få hverdagen til at køre …" (the first sentence is hidden to save space). The hero has a little extra space at the bottom, and the "Kendt fra" logos have a bit more space around them. On phones the headline, pills and text are centred. On phones the whole hero photo is covered by the brand blue (brand-blue-800), fading from 100% at the top to 90% at the bottom. The blue hero also wraps the whole search form on phones (on desktop the form still overlaps the bottom edge), the headline is the first thing in the hero, and the star rating sits below the search form.
- The bottom of the blue top section is now slightly curved instead of straight, with an even, circular curve.
- New hero photo (`assets/img/oscar-hero.jpg`, a couple packing an orange car by the coast). A dark shade on the left keeps the white text readable. The shade uses brand-blue-800 (#17275B) from `references/Oscar-Brand-Colors-Guide.pdf`. On mobile the photo is shifted so the couple and the car stay in view.
- The search form stands out more: a deeper shadow, a thin edge around the card, visible edges on the fields and an orange highlight on the field you're typing in. It also has more padding inside and slightly rounder corners (12px instead of 8px).
- More space between the sections further down the page: 64px above and below each section on desktop (was 40px) and 40px on phones (was 24px).
- More side padding on desktop: 30px on each side (was 16px), so the content has room on screens around 1280px wide. All sections, including the FAQ and the app section, now line up on the same left and right edges.
- Car section ("Du har noget, du skal. Vi har lejebilen."): the buttons say "Se 600+ biler" (the numbers are placeholders). The cars rise above the top of their cards by the same amount at every screen width, phones included, and the cards are a little lower. When the button has to sit below the price, it fills the card's full width. On screens under 1024px the panel behind the cards runs edge to edge without rounded corners, like a band you slide the cards along.
- The heading "Du har noget, du skal. Vi har lejebilen." always breaks at the full stop when it doesn't fit on one line, on every screen size.
- The hero headline "Lej en bil nær dig" never wraps: on screens where it wouldn't fit on one line, it shrinks gradually instead. The bottom of the "g" is no longer cut off on phones.
- The heading "Lokal biludlejning for alle" sits on one line when there is room (tablets and wide phones). Otherwise it breaks just before "for alle", as before.
- "Lej en bil på 3 minutter" on phones: no longer a fold-out list. All four steps are shown, each as a row with the picture on the left and the title and description on the right. Tablets and desktop are unchanged. The pictures take up about half the row (48%), the text the rest.
- Arrows between the four steps (a white arrow in an orange circle with a white ring, easy to spot when skimming; the circles overlap the pictures slightly) in "Lej en bil på 3 minutter", so it reads as a step-by-step guide: pointing right between the pictures on tablet and desktop, pointing down between the rows on phones.
- Step 2 text now ends "... ekstra chauffører, mm."
- Tighter text under "Lokal biludlejning for alle": new first sentence ("Med Oscar Biludlejning kan du finde gode, billige lejebiler hos lokale virksomheder."), "Det er nemt: Du vælger bil, tid, sted og tilvalg." (was "Idéen er enkel: ... og dine tilvalg."), and "Vi sørger for, at nøglerne ligger klar til dig."
- The city list heading is now "Find en lejebil i din by" (was "Populære byer i Danmark").
- The link "Brug for vejhjælp?" ("Need roadside assistance?" on the English page) under "Vejhjælp 24/7" is removed.
- English car section heading: "You’ve got things to do. We’ve got the car."
- The "Kendt fra" logo row under the hero is replaced by App Store and Google Play download badges (Danish badges "Hent i …" on the Danish page, English "Download on the App Store" / "Get it on Google Play" on the English page). They are 36px tall on phones and 40px on desktop (the badges' standard size).
- English hero text starts "Plan a weekend away, tackle a move or get things from A to B."
- English benefits: "Rated 4.5/5 by 10,000+ customers", "Free cancellation up to 7 days before pickup.", "Help whenever you need it, at no extra cost." and "See the full price before you book." English car card texts: "Cars for city trips, weekends and everyday driving.", "… ideal for tools, equipment and smaller loads.", "Minibuses for private trips and business travel." (all four card texts now end with a full stop).
- English review heading: "See what our customers say".
- English app text: "…renting a car from Oscar is even easier and more affordable."
- English search placeholder: "Where do you need a rental car?"
- English text under "Local car rental for everyone" is shorter: three paragraphs starting "Find affordable rental cars from local businesses with Oscar."
- English steps: "Find a car", "Choose extras", "Pay securely" and "Start driving", with shorter texts.
- English app section: heading "Save more with the Oscar app" and a shorter text about app-only discounts and saved kilometres.
- FAQ: the short text under the heading is removed (both languages).
- English help section: "Email us", "We reply within 2–4 business hours." and "Start live chat".
- English hero pill: "Rent local" (was "Support local").
- Help section ("Brug for hjælp?" / "Need help?"), both languages: the heading now sits on top, with three cards below it: email, live chat and a new phone card ("Ring til os" / "Call us", +45 42 90 90 48, the number on hejoscar.dk/oscar-kundeservice). Three columns from 1024px, stacked on smaller screens.
- Danish text changes: placeholder "Hvor vil du leje en bil?"; "Prøv selv, og find ud af hvorfor." removed (the benefit title is centred next to its icon on phones); shorter car card texts; shorter step texts ("Vælg tid og sted, og find en bil til dit behov.", "Betal nemt og sikkert med din foretrukne betalingsløsning.", "Hent din lejebil, og kør!"); app heading "Få rabatter og gem ubrugte kilometer med Oscar-appen".
- New Danish text under "Lokal biludlejning for alle" (four short paragraphs, starting "Hos Oscar finder du billige lejebiler hos lokale virksomheder." and ending "Lokalt, enkelt og uden skjulte gebyrer.").

## English version
The flag in the menu bar opens a language menu (Dansk / English). English opens `en.html`: **https://patrickgammelmark.github.io/oscar-front-page-contents-draft/en.html**.
- Everything on the page is translated, including image descriptions and text only screen readers see. Names, cities (except "Copenhagen"), the company name in the footer and prices in DKK are kept. Pictures with Danish text (step screenshots, the app screenshot, the sign in the partner photo) are not translated.
- The two pages are separate files. A change to the Danish page is **not** copied to the English one automatically: make the same change in `en.html` too (or ask Claude to).
- The English texts are a good first version, but should be checked by a native speaker before anything goes into production.
- A few layout tweaks apply only to the English page, because some English texts are longer: the hero headline shrinks a little sooner, the car card buttons move below the price sooner, and on the narrowest phones the hero pills are slightly smaller and the benefit titles may wrap.

## Location page (example: Aarhus N – Randersvej)
Open it from the menu: **Afdelinger → Lokationsside** (English: **Locations → Location page**), or directly:
**https://patrickgammelmark.github.io/oscar-front-page-contents-draft/aarhus-n.html** (English: `en-aarhus-n.html`). The language menu switches between the two location pages.
It starts from a 1:1 copy of hejoscar.dk/afdelinger/aarhus-n (taken 29 September 2026) and is redesigned to match the new front page:
- **Hero:** the branch photo (on larger screens 70% wide and aligned right, so it is sharper; the left side is an almost solid brand-blue area) with the front page's even, circle-like curved bottom. The Google rating (4,7) and the address sit on one line above the headline "Biludlejning i Aarhus N - Randersvej", which never wraps (it shrinks on smaller screens). Below it a short local text with the lowest price (fra 329 kr./dag).
- **Search:** only "Fra" and "Til" dates and a button "Se ledige biler" (the location is already chosen), narrower than on the front page. Like on the front page it sits across the edge between the blue and the white, with the three USP pills right below it.
- **Car cards:** unchanged. On phones the cars now come before the location card.
- **Location card** beside the cars (below them on smaller screens): light blue panel with orange icon boxes for opening status, address, phone and email, the map with an orange pin, the Google rating and a "Find vej" button.
- **"Din lokale biludlejning i Aarhus N"** right below the cars: intro text, the partner's quote (Jann Lund) and a large partner photo with the badges "Lokal partner siden 2019" and "Eget værksted".
- **"Når du lejer hos Oscar, får du altid":** four benefits in the front page's benefits style.
- **FAQ** in the front page's style, a dark **call to action** ("Klar til at leje bil i Aarhus N?") and, at the bottom, the **SEO text** in its own quiet grey section: grey text, all headings the same size, two columns on desktop.
- The detailed opening hours per weekday are not on the live page's first load, so the card only shows "Åben nu · lukker kl. 18.00".

## "Om Oscar": earlier design proposals (hidden)
Earlier proposals for the "Om Oscar" section are commented out in `index.html`.

## Public draft link
The page is online at **https://patrickgammelmark.github.io/oscar-front-page-contents-draft/** (free GitHub Pages, account patrickgammelmark). Anyone with the link can see it, no login needed.
- Search engines are told not to index the page. (The "Designforslag" banner at the top has been removed.)
- The `references/` folder is not uploaded.
- To update the online version after changes, ask Claude to "push the changes to the draft link". The links to the styling and script carry a version number (`?v=…`) that is bumped on every update, so phones and browsers always load the newest styling instead of an old saved copy. To take it offline, ask Claude to delete the GitHub repository.

## Costs
None. Everything runs locally in your browser.
