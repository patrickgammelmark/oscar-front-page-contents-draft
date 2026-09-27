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
| `index.html` | The page itself (all text and layout) |
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

## "Om Oscar": earlier design proposals (hidden)
Earlier proposals for the "Om Oscar" section are commented out in `index.html`.

## Public draft link
The page is online at **https://patrickgammelmark.github.io/oscar-front-page-contents-draft/** (free GitHub Pages, account patrickgammelmark). Anyone with the link can see it, no login needed.
- Search engines are told not to index the page. (The "Designforslag" banner at the top has been removed.)
- The `references/` folder is not uploaded.
- To update the online version after changes, ask Claude to "push the changes to the draft link". The links to the styling and script carry a version number (`?v=…`) that is bumped on every update, so phones and browsers always load the newest styling instead of an old saved copy. To take it offline, ask Claude to delete the GitHub repository.

## Costs
None. Everything runs locally in your browser.
