# Tree-assignment - Mestergruppen hjemmeoppgave i frontend/react
I denne oppgaven ønsker vi å teste dere i react. 
NB! Vi ønsker ikke at du kjører gjør en npm run eject eller react-scripts eject. 
NB! VI ønsker heller ikke at du bruker et ferdig bibliotek for å lage "tree-view" i sidebar. 

Vi ønsker at du lager et produktsøk-view med fokus på filtrering av søkeresultatet.

Siden skal bestå av 3 elementer. En header, en left-sidebar og en produktliste-view. (Se skisse på figma: https://www.figma.com/file/CToNjuRLFzhq8A89SzH5KN/Tree-view?node-id=0%3A1) (beklager dårlig figma skills)

# Data
I /src/data finner dere 2 json filer. 
fokusvarer.json er "alle" data. Alle produkter har en varegruppe. 
varegrupper.json inneholder kategorisering av alle mulige varegrupper. Varegruppene består av 3 nivåer; Overgruppe, Hovedgruppe og Varegruppe. 
I produkt-dataen vil du kun finne knytning mot en varegruppe, det er opp til deg å finne ut hvilken hovedruppe og overgruppe produktet tilhører. 

# Oppgave
## Header (vektlegging: 0.5)
Her er det ikke vits å bruke for mye tid, finn en bakgrunnsfarge dere liker + Simpel h1 med teksten "Prisinnsikt". Dere kan være kreative når underliggene er løst.

## Left-sidebar (Vektlegging: 4.5)
1) Her ønsker vi at dere lager et tree-filter(se skjermbilde1.png) som gjør at dere kan filtrere resultat listen. (Ligner veldig på finn.no sitt filter). Count/antall er ikke viktig i første omgang
2) Simpel søkeboks som filtrerer i søkeresultatet. Skal kunne slå opp by id(nobbNr) og fritekstsøk på produktnavn(langVaretekst). Se skjermbilde2.png
3) Hvis dere kommer så langt; lag count slik som i skjermbildet. 

## Produktliste-view (Vektlegging: 2)
1) Her vil jeg at dere skal presentere dataen på en fin og ryddig måte. Dere kan velge å presentere det akkurat som dere vil. Listeview, tableview, gridview alt er opp til dere. (eksempel se skjermbilde3.png)
2) Om dere får tid kan dere lage kule animasjoner / hover-effekt / popup etc.. 

## Ekstra utfordring:
Skriv tester

# UI
Du kan bruke ui-bibliotek til å lage checkbox+texter. Men du kan ikke bruke ferdig bibliotek som har tree-view innebygd. Vi ønsker å se at du lager tree-viewet fra scratch.
Du kan også lage css'en selv, eller du kan bruke styled-components. 

# Vurdering
- Vi vil se hvordan modeller data og state håndtering.
- Vi vektlegger funksjonalitet høyere enn utsende. 
- Sturktur og orden i kode.


# Hvordan komme i gang
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
Lag et public/private repo og push koden ditt. 


