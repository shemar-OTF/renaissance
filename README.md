# RENAISSANCE

Merkidee: opnieuw beginnen. Hoofdslogan: **Begin Again.**

Bekijk het [websiteontwerp met Mermaid-diagrammen](docs/diagrams/ontwerp.md):

- [Flowchart](docs/diagrams/flowchart.md)
- [Usecasediagram](docs/diagrams/usecasediagram.md)
- [Wireframe desktop](docs/diagrams/wireframe-desktop.md)
- [Wireframe mobiel](docs/diagrams/wireframe-mobiel.md)

## Home bekijken

De Home is uitgewerkt in gewone HTML, CSS en JavaScript. Open `index.html` rechtstreeks in je browser, of gebruik de Live Server-extensie van VS Code.

- `index.html`: de inhoud en structuur van de Home.
- `over-ons.html`: het merkverhaal, de oorsprong van de naam en de lelie.
- `collectie.html`: de vier longsleevevarianten met uitklapbare ontwerpdetails.
- `style.css`: de vormgeving voor desktop en mobiel.
- `script.js`: het mobiele menu en de automatische slideshow met pijlen en diakeuze.
- `assets/logos/`: de aangeleverde lelie.
- `assets/products/`: de vier longsleeve-conceptbeelden, met de kleur in de bestandsnaam.
- `assets/artworks/`: de renaissanceschilderijen voor de slideshow.

De grote longsleeve bovenaan is vervangen door een slideshow met drie renaissanceschilderijen en de slogans **Begin Again.**, **The Art of Renewal.** en **The Past Wears Forward.** De schilderijen staan lokaal in `assets/artworks/`. De slideshow vult de volledige schermbreedte en wisselt automatisch elke 6,5 seconde. Pijlen en diakeuze blijven beschikbaar. Een handmatige diakeuze herstart het interval; toetsenbordfocus onderbreekt de automatische wisseling totdat de focus de slideshow verlaat; bij verminderde beweging start deze uitgeschakeld. Zonder JavaScript blijft de eerste dia zichtbaar.

De knop **Ontdek de longsleeve** opent de Collectie-pagina (`collectie.html`). **Ons verhaal** opent de Over ons-pagina (`over-ons.html`). Beide pagina’s zijn bereikbaar vanuit de navigatie. Alleen Contact wordt nog aangeduid met **Binnenkort**.

Onder de introductie staan vier kleurvarianten naast elkaar: gewassen zwart met ivoorwit, wouwgroen met zwart, linnenwit met karmijnroze en wedeblauw met wouwgeel. Elke variant heeft een eigen afbeelding en kleurbeschrijving. Op desktop staan ze in vier kolommen; op mobiel in twee kolommen. Het overzicht werkt ook zonder JavaScript. De historische inspiratie en digitale kleurcodes staan in het [kleuronderzoek](docs/kleuronderzoek.md).

Het longsleevebeeld is een met AI gemaakte conceptvisualisatie, geen foto van een geproduceerd kledingstuk. De originele zwarte lelie is ongewijzigd overgenomen. Zie de [beeldverantwoording](docs/beeldverantwoording.md).

## Ons verhaal bekijken

Open `over-ons.html` rechtstreeks in je browser of kies **Ons verhaal** in de navigatie. De pagina gebruikt dezelfde CSS en hetzelfde mobiele menu als de Home. De knop **Bekijk de ontwerpen** opent de Collectie-pagina. Het logo wordt hergebruikt uit de bestaande assets. De Over ons-pagina toont **De school van Athene** van Rafaël, een ander werk dan de drie schilderijen in de Home-slideshow.

Het oorspronkelijke ontwerp ging uit van één doorlopende pagina. Op verzoek is **Over ons / Ons verhaal** nu als aparte pagina uitgewerkt. De inhoud beschrijft het aangeleverde merkidee; er zijn geen oprichters, productiebeloften of bedrijfsgegevens toegevoegd.

## Collectie bekijken

Open `collectie.html` in je browser of kies **Collectie** in de navigatie. De pagina toont de vier kleurvarianten naast elkaar op desktop en in twee kolommen op mobiel. Onder elke variant kun je **Ontwerpdetails** openklappen voor de kleur, lelie, pasvorm en afwerking. Dit werkt ook zonder JavaScript.

De pagina presenteert conceptontwerpen. Er zijn geen prijzen, voorraadgegevens, maatkeuzes of betalingen toegevoegd. Alle productbeelden worden hergebruikt uit `assets/products/`.
