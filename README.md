# Tree-assignment - Mestergruppen hjemmeoppgave i frontend/react
I denne oppgaven ønsker vi å teste deg i React. Vi ønsker at du lager et produktsøk-view med fokus på filtrering av søkeresultatet. Vi ønsker ikke at du bruker et ferdig bibliotek for å lage "tree-view" i sidebar. 


Siden skal bestå av 3 elementer:
* En header
* En left-sidebar
* Et produktliste-view
(Se skisse på figma: https://www.figma.com/file/CToNjuRLFzhq8A89SzH5KN/Tree-view?node-id=0%3A1) (beklager dårlig figma ferdigheter)

# Data
I `/src/data` finner du 2 json filer:
* `fokusvarer.json` - inneholder "alle" data. Alle produkter har en varegruppe. 
* `varegrupper.json` - inneholder kategorisering av alle mulige varegrupper. Varegruppene består av 3 nivåer; Overgruppe, Hovedgruppe og Varegruppe. 
I produkt-dataen vil du kun finne knytning mot en varegruppe, det er opp til deg å finne ut hvilken hovedruppe og overgruppe produktet tilhører. 

# Oppgave
## Header (vektlegging: 0.5)
Her er det ikke vits å bruke for mye tid, finn en bakgrunnsfarge du liker + Simpel h1 med teksten "Prisinnsikt". Du kan være kreativ når underliggene er løst.

## Left-sidebar (Vektlegging: 4.5)
1) Her ønsker vi at du lager et tree-filter(se skjermbilde1.png) som gjør at bruker kan filtrere resultat listen. (Ligner veldig på finn.no sitt filter). Count/antall er ikke viktig i første omgang.
2) Lag en enkel søkeboks som filtrerer i søkeresultatet. Skal kunne slå opp på id(nobbNr) og fritekstsøk på produktnavn(langVaretekst). Se skjermbilde2.png
3) Hvis du kommer så langt; lag count slik som i skjermbildet. 

## Produktliste-view (Vektlegging: 2)
1) Her vil vi at du skal presentere dataen på en fin og ryddig måte. Du kan velge å presentere det akkurat som du vil,  listeview, tableview, gridview - alt er opp til deg (se skjermbilde3.png for eksempel). 
2) Om dere får tid kan dere lage kule animasjoner / hover-effekt / popup etc.. 

## Ekstra utfordring:
Skriv tester.

# UI
Du kan bruke ui-bibliotek til å lage checkbox+texter. Men du kan ikke bruke ferdig bibliotek som har tree-view innebygd. Vi ønsker å se at du lager tree-viewet fra scratch.
Du kan også lage css'en selv, eller du kan bruke styled-components. 

# Vurdering
- Vi vil se hvordan modeller data og state håndtering.
- Vi vektlegger funksjonalitet høyere enn utsende. 
- Vi vektlegger sturktur og orden i kode.


# Hvordan komme i gang
Vi anbefaler node versjon 14++
Clone / Fork prosjektet
```
$ npm install
$ npm start
```

Åpne http://localhost:3000

## Hvordan importere data
Vi har gjort det enkelt slik at du kan importere json filene inne i src/data. Alt du trenger å importere filene øverst i fila der du vil bruke det. 

```
import React from 'react';
import products from '../data/fokusvarer.json'
import varegrupper from '../data/varegrupper.json'

...


const Component = () => {
  // bruk products her
   return <div> ... </div>
}

```

# Levering (velg 1 av 2)
## Fork
Fork vårt prosjekt og push på din egen repo. 

## Eget github repo
Lag et public/private repo og push koden dit. 


