# Oppgave

## Header (vektlegging: 0.5)

Her er det ikke vits å bruke for mye tid, finn en bakgrunnsfarge du liker + Simpel h1 med teksten "Prisinnsikt". Du kan være kreativ når underliggene er løst.

## Left-sidebar (Vektlegging: 4.5)

1. Her ønsker vi at du lager et tree-filter(se skjermbilde1.png) som gjør at bruker kan filtrere resultat listen. (Ligner veldig på finn.no sitt filter). Count/antall er ikke viktig i første omgang.
2. Lag en enkel søkeboks som filtrerer i søkeresultatet. Skal kunne slå opp på id(nobbNr) og fritekstsøk på produktnavn(langVaretekst). Se skjermbilde2.png
3. Hvis du kommer så langt; lag count slik som i skjermbildet.

## Produktliste-view (Vektlegging: 2)

1. Her vil vi at du skal presentere dataen på en fin og ryddig måte. Du kan velge å presentere det akkurat som du vil, listeview, tableview, gridview - alt er opp til deg (se skjermbilde3.png for eksempel).
2. Om dere får tid kan dere lage kule animasjoner / hover-effekt / popup etc..

## Notater fra Edwin

1. Header: 
Header ble løst på en enkel måte ved bruk av css-grid. 
Endringer jeg ville ha gjort er legge search bar mot slutten av headerbar helt til venstre. Evt legge den i en component fil for ryddigere kode.
Problemer som oppsto var jeg var ikke helt sikker på hvordan jeg skulle få searchbar til å fungere uten i fra App.js filen. 

2. Left-sidebar:
Sidebar var litt klønete grunnet av lite erfaring rundt dette temaet. Planen var jeg ville først bruke .map funsjonen til å legge frem de forskjellige "kategoriene" og da oppsto neste problem som var å fjerne duplikate verdier og/eller data typer. F.eks på vareType så står det "STANDARD" gjennom hele endepunktet. Prøvde meg fra med en kodesnutt fra reactgo og en innbydge function .Set() men det gikk ingen vei. Grunnet tiden jeg har igjen så bestemmte jeg meg for å hard kode noen få resultater inn i tree-view. Resultatet var noe jeg ikke var så veldig fornøyd med men har lyst til å bli bedre på.

3. Produktliste-view:
I Produktliste-view så har jeg brukt .map funsjonen for å hente de diverse produktene fra listen. Ved hjelp av .filter så kan jeg legge inn det de skriver i searchbar for å søke opp produkter.
Searchbar tar både opp nobbNr og langvaretekst som søke parameter og får opp det som tilsvarer.
Selve produktliste er jeg stortsett fornøyd med og vet jeg kan gjøre sånt det ser bedre ut.  