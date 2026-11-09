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
- `style.css`: de vormgeving voor desktop en mobiel.
- `script.js`: het mobiele menu en de automatische slideshow met pijlen en diakeuze.
- `assets/logos/`: de aangeleverde lelie.
- `assets/products/`: de vier longsleeve-conceptbeelden, met de kleur in de bestandsnaam.
- `assets/artworks/`: de renaissanceschilderijen voor de slideshow.

De grote longsleeve bovenaan is vervangen door een slideshow met drie renaissanceschilderijen en de slogans **Begin Again.**, **The Art of Renewal.** en **The Past Wears Forward.** De schilderijen staan lokaal in `assets/artworks/`. De slideshow vult de volledige schermbreedte en wisselt automatisch elke 6,5 seconde. Pijlen en diakeuze blijven beschikbaar. Een handmatige diakeuze herstart het interval; toetsenbordfocus onderbreekt de automatische wisseling totdat de focus de slideshow verlaat; bij verminderde beweging start deze uitgeschakeld. Zonder JavaScript blijft de eerste dia zichtbaar.

De knop **Ontdek de longsleeve** verwijst naar het overzicht van de vier kleurvarianten op de Home. Collectie, Ons verhaal en Contact zijn nog niet uitgewerkt en worden in het menu aangeduid met **Binnenkort**.

Onder de introductie staan vier kleurvarianten naast elkaar: gewassen zwart met ivoorwit, wouwgroen met zwart, linnenwit met karmijnroze en wedeblauw met wouwgeel. Elke variant heeft een eigen afbeelding en kleurbeschrijving. Op desktop staan ze in vier kolommen; op mobiel in twee kolommen. Het overzicht werkt ook zonder JavaScript. De historische inspiratie en digitale kleurcodes staan in het [kleuronderzoek](docs/kleuronderzoek.md).

Het longsleevebeeld is een met AI gemaakte conceptvisualisatie, geen foto van een geproduceerd kledingstuk. De originele zwarte lelie is ongewijzigd overgenomen. Zie de [beeldverantwoording](docs/beeldverantwoording.md).

De geplande volledige website bestaat uit één pagina met Home, Collectie, Ons verhaal en Contact.
