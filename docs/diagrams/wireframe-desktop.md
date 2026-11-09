# RENAISSANCE — Wireframe — desktop

Dit is een schematische indeling, geen definitieve vormgeving. De pijlen tonen de leesvolgorde op dezelfde pagina. Tekst en beeld staan naast elkaar waar de schermbreedte dat toelaat.

```mermaid
flowchart TB
    header["HEADER<br/>Lelie / RENAISSANCE ··· Home | Collectie | Ons verhaal | Contact"]

    subgraph hero["HOME"]
        direction LR
        heroText["RENAISSANCE<br/><br/>Begin Again.<br/><br/>Knop: Ontdek de longsleeve"]
        heroImage["Grote sfeerfoto"]
        heroText ~~~ heroImage
    end

    subgraph collection["COLLECTIE"]
        direction LR
        productImage["Grote productfoto<br/>Voorkant van de longsleeve"]
        productText["De eerste longsleeve<br/><br/>Gewassen zwart<br/>Rechte, licht ontspannen pasvorm<br/>Kleine ivoorwitte lelie op de linkerborst<br/>Effen mouwen en rug<br/>Begin Again. aan de binnenkant van de nek<br/><br/>Knop: Interesse? Neem contact op"]
        productImage ~~~ productText
    end

    subgraph story["ONS VERHAAL"]
        direction LR
        storyTitle["The Art of Renewal.<br/><br/>Leliesymbool"]
        storyText["Opnieuw beginnen<br/><br/>De naam RENAISSANCE<br/>Herleving van kunst, wetenschap en cultuur<br/>De betekenis van de lelie voor het merk"]
        storyTitle ~~~ storyText
    end

    subgraph contact["CONTACT"]
        direction LR
        contactText["Neem contact op<br/><br/>Vragen over RENAISSANCE of de longsleeve?<br/><br/>Demo: berichten worden niet verzonden."]
        contactForm["Naam: invoerveld<br/>E-mailadres: invoerveld<br/>Bericht: tekstvak<br/><br/>Knop: Versturen<br/><br/>Ruimte voor foutmeldingen of demobevestiging"]
        contactText ~~~ contactForm
    end

    footer["FOOTER<br/>Lelie / RENAISSANCE · The Past Wears Forward.<br/>Link: Terug naar boven"]

    header --> hero --> collection --> story --> contact --> footer

    classDef wire fill:#fafafa,stroke:#666,color:#111;
    class header,heroText,heroImage,productImage,productText,storyTitle,storyText,contactText,contactForm,footer wire;
```

[Terug naar het ontwerpoverzicht](ontwerp.md)
