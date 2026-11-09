# RENAISSANCE — Flowchart

De bezoeker kan zowel via de navigatie als door te scrollen tussen de vier secties bewegen. De controles onder Contact horen bij de latere JavaScript-uitwerking.

```mermaid
flowchart TD
    start([Website openen]) --> home["Home: RENAISSANCE — Begin Again."]
    home --> navigate{"Navigatie kiezen of scrollen"}

    navigate -->|Home| home
    navigate -->|Collectie| collection["Collectie: de eerste longsleeve"]
    navigate -->|Ons verhaal| story["Merkidee, oorsprong van de naam en betekenis van de lelie"]
    navigate -->|Contact| contact["Contactformulier bekijken"]
    navigate -->|Website verlaten| finish([Einde bezoek])

    home -->|Ontdek de longsleeve| collection
    collection --> details["Foto en ontwerpdetails bekijken"]
    details -->|Interesse? Neem contact op| contact
    details -->|Verder ontdekken| navigate
    story --> navigate

    contact --> fill["Naam, e-mailadres en bericht invullen"]
    fill --> submit["Op Versturen klikken"]
    submit --> valid{"Alle verplichte velden ingevuld en e-mailadres geldig?"}
    valid -->|Nee| errors["Foutmelding bij het veld; focus op het eerste ongeldige veld"]
    errors --> fill
    valid -->|Ja| confirmation["Demobevestiging: bericht niet verzonden"]
    confirmation --> navigate
    contact -->|Formulier niet gebruiken| navigate
```

[Terug naar het ontwerpoverzicht](ontwerp.md)
