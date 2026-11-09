# RENAISSANCE — Usecasediagram

**Actor:** bezoeker. Het kader is de grens van de RENAISSANCE-website. Doorgetrokken lijnen verbinden de bezoeker met de beschikbare handelingen. De gestippelde relaties met `include` geven verplichte onderdelen van het uitproberen van het formulier aan. De bevestiging verschijnt alleen bij geldige invoer.

Mermaid ondersteunt geen afzonderlijk UML-usecasediagram. Daarom gebruikt deze benadering een flowchart met afgeronde usecases en een systeemgrens.

```mermaid
flowchart LR
    visitor["Bezoeker"]

    subgraph website["RENAISSANCE — merkwebsite"]
        direction TB
        viewHome(["Home bekijken"])
        navigate(["Tussen secties navigeren"])
        viewCollection(["Longsleeve en productdetails bekijken"])
        readStory(["Merkverhaal lezen"])
        tryContact(["Contactformulier uitproberen"])
        validate(["Invoer controleren"])
        feedback(["Foutmelding of demobevestiging tonen"])

        tryContact -.->|include| validate
        tryContact -.->|include| feedback
    end

    visitor --- viewHome
    visitor --- navigate
    visitor --- viewCollection
    visitor --- readStory
    visitor --- tryContact
```

[Terug naar het ontwerpoverzicht](ontwerp.md)
