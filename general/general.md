# Smjernice za pisanje *front-end* koda

Ovaj dokument služi kao popis i pregled smjernica za pisanje kvalitetnog i 
konzistentnog *front-end* (HTML, CSS i JS) koda. Nastao je na temelju 
dugogodišnjeg rada i pronalaska "zajedničkog jezika" prilikom rada na 
raznim projektima.

Kao prvo, dokument nastoji biti izrazito pragmatičan. Ne sadrži dijelove koji 
se u (mojoj osobnoj) standardnoj praksi podrazumijevaju, no ako je potrebno 
provjeriti i primjeniti više sličnih smjernica, na dnu dokumenta nalaze se resursi
među kojima ima onih koji su izrazito temeljiti po pitanju definiranja standarda.

Zbog toga, podložan je promjenama i prijedlozima u svakom trenutku ako se za tim
pokaže potreba radi budućeg lakšeg rada na projektima.

## Općenito

### Pragmatizam ispred semantike

Teži tome da se držiš standarda i semantike, ali nemoj žrtvovati pragmatizam.
Koristi najbolju praksu za trenutni problem ako ona taj problem rješava na
fleksibilan način, bez obzira zahtijeva li poništavanje "standardne prakse".

Na primjer, ako će jedan *wrap* element za određeni modul rješiti više problema
odjednom, to je bolje rješenje nego se držati "klimavog" standarda.

### Imena vrijednosti

Koristiti jasna i prikladna imena za HTML klase i ID-jeve. Imena bi trebala biti 
jasna svakome tko se primi napisanog koda. Ništa nije predugačko ili preopisano
ako je na prvi pogled jasno.

Pravilno koristiti množinu i jedninu.

Prijedlozi imena klasa:

* Tipografske vrijednosti, bazirano na [grčkoj abecedi i SI vrijednostima](http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css/)
	* Ili koristiti samo [SI prefikse](http://en.wikipedia.org/wiki/SI_prefix#List_of_SI_prefixes) a za više ili manje od toga uzeti [neslužbene vrijednosti](http://en.wikipedia.org/wiki/Unofficial_SI_prefixes#Unofficial_prefixes)
	* Početna tipografska vrijednost zvala bi se [caput](http://dictionary.reference.com/browse/caput)
* [Prijedlozi nazivlja za tablice](http://snook.ca/archives/html_and_css/one-module-or-two)

#### Razdvajanje imena

Za razdvajanje imena klasa, ID-jeva i svega što nije čisti tekst a dio je kodiranja
koristi povlake.

U JavaScriptu za razdvajanje imena varijabli i funkcija koristi *underscore*.

#### Stanja

Stanja nekog elementa definiraju se prefiksom `is`, npr. `is-selected`.

Sve vezano uz JavaScript trebalo bi biti prefiksirano sa `js-`.

#### Izmjene postojećih vrijednosti

Ako postoji potreba za izmjenom postojećeg imena, novo ime trebalo bi biti što
određenije. Npr., umjesto `.article-text.big` napravi novo ime `.article-text.article-big`.

Sve izmjene treba raditi prema principu "defenzivnog programiranja" - prikladnije je *extendati* trenutnu komponentu novim izmjenama nego izmjeniti istu što bi moglo poremetiti ostale module koji koriste te komponente.

### Dužina linije 

Dužina linije bi u kodu i komentarima trebala biti u granicama tipografske 
normale, npr. oko 80 znakova. Naravno, to nije pravilo, ali bilo bi dobro
držati se smjernice u slučajevima velikog komada teksta kao što su veliki
komentari.

### *Placeholder* tekst

U slučaju nedostupnog sadržaja za projekt (što nikako ne bi trebao biti slučaj),
umjesto standardnog Lorem Ipsum teksta iskoristi prvi (ili nasumični paragraf)
sa teksta nekog članka na Wikipediji—na jeziku koji odgovara projektu. Time bolje
dočaravaš pravu prirodu sadržaja koji će se pojaviti na stranici.

### Ispis HTML entiteta

Svaki HTML entitet, bez obzira na njegovu podršku u *browserima*, ispisuje se
preko numeričkih HTML entiteta. Time se zadržava konzistentnost i osigurava
uvijek jednak ispis tog elementa neovisno o mediju koji ga konzumira.

Za CSS *generated content* HTML entiteti pretvaraju se u Unicode *code pointove*.

#### HTML

```html
<!-- Loše -->
<p>A long time ago in a galaxy far, far away…</p>

<!-- Dobro -->
<p>A long time ago in a galaxy far, far away&#8230;</p>
```

#### CSS

```css
.selector:after {
	content:'\2026';
}
```

## Formatiranje

### Uvlačenje i poravnanje

Za uvlačenje i poravnanje koriste se *tabovi* sa veličinom od 4 znaka. 
Ne miješaj *tabove* i razmake, osim u slučaju ručnog poravnanja, 
npr. ljepši prikaz komentara ili poravnanje za bolje "vizualno dočaravanje" 
napisanog.

### *Trailing whitespace*

*Trailing whitespace* potrebno je uvijek obrisati. Sublime Text *editor* ima 
opciju za brisanje prilikom spremanja datoteke, a moguće je i prilagoditi ga na
bazi sintakse, npr. Markdown sintaksa treba dva razmaka za postavljanje
paragrafa unutar liste.

## Komentari

Napisani komentari trebali bi biti dovoljno jasni za svakoga tko radi na tom kodu.
U komentarima ne držati ništa što bi moglo naštetiti projektu (lozinke,
privatne varijable i sl.). Za sve osjetljivije dijelove sličnom se sintaksom posluži
unutar *back-end* jezika koji se koristi na projektu kako bi izbjegao ispisivanje
neželjenih vrijednosti.

Gdje je to moguće, za pisanje komentara koristi se DocBlock standard. Standard
omogućuje jasan pregled komentara kao i povezivanje komentara sa kodom kojeg
opisuje: npr. za JavaScript može navesti sve varijable i povratne vrijednosti
funkcije koja se dokumentira.

Komentari se pišu iznad koda kojeg trebaju dokumentirat ili komentirat. Mogu se
i pisati pored linije koju trebaju pojasniti ako je komentar dovoljno kratak i jasan
(npr. pojašnjenje *propertyja* u CSS kodu).

Nikako ne koristiti samo verzale ( *uppercase* ) za pisanje komentara, koristiti
isključivo normalni rečenični pristup ( *titlecase* ).

Manji komentari mogu se pisati jednostavnijom sintaksom ako to jezik dopušta:
npr. JavaScript ima i oblik komentara `//`.

Grupe sadržaja vizualno su izraženije od ostatka komentara. Ime grupe može imati
prefiks `$` kako bi se lakše selektirala prilikom traženja unutar dokumenta.

Prije svake velike grupe sadržaja ( *section comment block* ) postavljaju se dvije prazne linije radi veće čitljivosti.

Uz to, svaki dio komentara moguće je i tagirati uz pomoć `@tag`.

TODO unutar komentara koristi se za lakšu pretragu dijelova koje je potrebno naknadno
doraditi ili provjeriti. Obilježava se sa `@todo [tekst]` unutar komentara za
svaki jezik.

### HTML

```html
<!-- Single and multi line basic comment -->
<div></div>

<!-- @todo -->
```

### CSS

```css
/**
 * DocBlock comment block
 */
.selector {
	/* Single line basic comment */
	background:red;
	/*
	Multi line basic comment
	 */
	color:black;
}

/**
 * =============================================================================
 * Section comment block
 * =============================================================================
 */

 /**
  * Sub-section comment block
  * -----------------------------------------------------------------------------
  */

/* @todo */
```

### JavaScript

```javascript
/**
 * DocBlock comment block
 *
 * @param  {[type]} params1 [description]
 * @param  {[type]} params2 [description]
 *
 * @return {[type]}         [description]
 */
var foo = function( params1, params2 ) {
	// Single line basic comment
	var foo = 1;
	/*
	Multi line basic comment
	 */
	var bar = 2;
};

/**
 * =============================================================================
 * Section comment block
 * =============================================================================
 */

 /**
  * Sub-section comment block
  * -----------------------------------------------------------------------------
  */

/* @todo */
```

## Arhitektura

### SUIT

Prilikom rada na arhitekturi koda dobro je koristiti [SUIT stil](https://github.com/suitcss/suit/blob/master/doc/README.md). Prilagodljiv je kako HTML-u, tako i CSS-u i JavaScriptu. Dovoljno je razumljiv za svakoga tko se primi koda.
