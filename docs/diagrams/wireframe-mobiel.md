# RENAISSANCE — Wireframe — mobiel

Op mobiel staan alle onderdelen onder elkaar. De menuknop opent de vier navigatielinks. Na het kiezen van een link sluit het menu en gaat de bezoeker naar de bijbehorende sectie.

```mermaid
flowchart TB
    header["HEADER<br/>Lelie / RENAISSANCE ··· Menuknop"]
    menu["UITKLAPMENU — standaard gesloten<br/>Home<br/>Collectie<br/>Ons verhaal<br/>Contact"]

    hero["HOME<br/><br/>RENAISSANCE<br/>Begin Again.<br/><br/>Sfeerfoto<br/><br/>Knop: Ontdek de longsleeve"]

    productImage["COLLECTIE<br/><br/>Productfoto van de longsleeve"]
    productText["De eerste longsleeve<br/><br/>Gewassen zwart<br/>Rechte, licht ontspannen pasvorm<br/>Ivoorwitte lelie op de linkerborst<br/>Effen mouwen en rug<br/>Begin Again. aan de binnenkant van de nek<br/><br/>Knop: Neem contact op"]

    story["ONS VERHAAL<br/><br/>The Art of Renewal.<br/><br/>Opnieuw beginnen<br/>Oorsprong van de naam RENAISSANCE<br/>Betekenis van de lelie"]

    contactIntro["CONTACT<br/><br/>Vragen over het merk of de longsleeve?<br/><br/>Demo: berichten worden niet verzonden."]
    contactForm["Naam<br/>Invoerveld<br/><br/>E-mailadres<br/>Invoerveld<br/><br/>Bericht<br/>Tekstvak<br/><br/>Knop: Versturen<br/><br/>Ruimte voor foutmeldingen of demobevestiging"]

    footer["FOOTER<br/>Lelie / RENAISSANCE<br/>The Past Wears Forward.<br/><br/>Link: Terug naar boven"]

    header -.->|Menuknop| menu
    header --> hero --> productImage --> productText --> story --> contactIntro --> contactForm --> footer

    classDef wire fill:#fafafa,stroke:#666,color:#111;
    class header,menu,hero,productImage,productText,story,contactIntro,contactForm,footer wire;
```

[Terug naar het ontwerpoverzicht](ontwerp.md)
