# HTML

* Za zadržavanje kompatibilnosti sa raznim verzijama HTML-a, u nekim slučajevima
koristi se [*polyglot markup*](http://dev.w3.org/html5/html-xhtml-author-guide/).
* Svaka nova razina unutar HTML-a zahtijeva dodatno uvlačenje radi jednostavnijeg
pregleda koda i njegove hijerarhije u dokumentu.	
* Uz to, radi lakšeg pregled koda, moguće je i dodati malo praznog prostora
između elementa "roditelja" i elementa "djeteta".
* Koristi samo kurent (mala slova). Svaki komad čistog koda mora biti napisan 
kurentom: imena elemenata, atributi, vrijednosti atributa (osim ako 
se ne radi o tekstu ili `CDATA`), selektori (osim ako se ne radi o 
specifičnim selektorima vezanim za određene module).
* Kad god je to moguće i sigurno, izbjeći ispisivanje protokola sa resursa koji se
uključuju unutar dokumenta. Uklanjanjem protokola izbjegavaju se problemi sa
prikazom resursa sa više protokola.
* Svaka linija "udomljava" samo jedan element. Iznimno se može izbjeći ako je
potrebno ukloniti razmak prilikom korištenja `display:inline-block;` deklaracije 
u CSS-u za prikaz elemenata ili se koristi neki *wrap* mehanizam.
* Potrebno je uvijek pisati završni *tag* svakog elementa. Pravilo vrijedi i za
*self-closing* elemente kojima se na kraj mora dodati *slash*.
* Za obilježavanje vrijednosti atributa koriste se dvostruki navodnici.
* *boolean* atributi, bez obzira na svoju jasnu prirodu postojanja, trebaju imati
kopiranu vrijednost imena atributa.
* Elementi sa više atributa mogu se odvojiti u više linija kako bi se poboljšala
čitljivost i pregled prilikom *diffa*.
* Raspored HTML atributa trebao bi sljediti sljedeću praksu:
	1. `id`
	2. `class`
	3. `data-*`
	4. `for|type|href`
	5. Sve ostalo
* Sve slike **moraju** imati `alt` atribut, makar on bio prazan.

### Semantika

Gdje je to moguće, koristiti [Schema.org](http://schema.org) za označavanje sadržaja.
Bolja semantika znači bolju poziciju na tražilicama.

### Ikone

Ako koristiš `<i>` element za definiranje *spritea*, postavi `role="img"` ili 
`role="presentation"` kao atribute kako bi taj element izbacio iz sloja kojeg 
čitaju *screen readeri*.

```html
<i class="icon" role="img|presentation"></i>
```

### ARIA atributi

Koristiti ARIA atribute za bolji *accessibility*.

* [ARIA Landmark Roles](http://a11yproject.com/posts/aria-landmark-roles/)
* [Using WAI-ARIA Landmarks](http://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)

## Primjer

```html
<!DOCTYPE html>
<html lang="hr" class="no-js">
<head>
	<meta charset="utf-8" />
	<title>Example</title>
	<link rel="stylesheet" href="//example.com/assets/css/style.css" />
	<script src="//example.com/assets/js/script.js"></script>
</head>
<body>

	<div class="foo">

		<!-- Prvi element -->
		<div class="bar">
			<p>Tekst 1</p>
			<input type="checkbox" checked="checked" />
		</div>

		<!--
		  Drugi element
		  @todo do something :)
		-->
		<div class="baz" 
		id="foobar" 
		data-action="foobaz">
			<p>Tekst 2</p>
		</div>

	</div>

</body>
</html>
```
