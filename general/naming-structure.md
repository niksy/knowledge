# Naming structure

## Naming dictionary

Having consistent naming dictionary is useful.

* detector
* common
* misc
* core
* global
* assets
* options
* settings
* modules
* components
* fragments
* form
* field
* item
* option
* input
* select
* link
* button
* wrap
* container
* inner
* major
* init
* bind ui actions
* interactions
* set
* get
* grade
* caption
* title
* morph (za gridove)
* pravila za wrap - `-wrap{FOO}` a ne `-{FOO}Wrap`

### Abbreviation dictionary

To escape large names, abbreviation dictionary can be used.

```
aux - auxillary
bg - background
cat - catalog, category
col - column
def - default
del - delete
err - error
el - element
ext - external
hl - highlight
img - image
num - number
opts - options
```

## Forms

Legacy proposal on naming form elements:

```
form-standard

	form-items
	
		form-item
			form-label
			form-field
				form-field-text
				form-field-choice
			form-field-validation-message
			form-field-help

		form-item
			form-label
			form-field-collection form-field-collection--range
				form-field form-field-col form-field-col--from
					form-field-text
				form-field form-field-col form-field-col--bond
					...
				form-field form-field-col form-field-col--to
					form-field-text
		
		form-item
			form-label
			form-field
				form-field-text

		form-item
			form-label form-label--as-field
					form-field-choice ...
			form-field-validation-message
			form-field-help

		form-item
			form-label
			form-field-collection form-field-collection--multiple-choice
				form-label form-label--as-field
						form-field-choice ...
				form-label form-label--as-field
						form-field-choice ...
				form-label form-label--as-field
						form-field-choice ...
		
		form-actions
			form-action form-action--submit
			form-action form-action--reset
			form-action form-action--check
```

### SASS variables

Sass variable names should be composed of dash(-) separated parts, with each part sorted from the most generic to the most specific variable characteristic. This is quite useful in most IDE as you can take advantage of autocompletion.

```scss

$color-default-light:   #fff;
$color-default-dark:    #333;
$color-default-darker:  #000;

$color-main:            #ff7f50;
$color-main-light:      #ff9e7e;
$color-main-lighter:    #ffdec7;

$color-secondary:       #5cbcaa;

$color-alt:             #f1ede4;
$color-alt-dark:        #c2c0bc;
$color-alt-light:       #f8f5ec;

$color-alt2:            #637c84;

$type-size-m: 16px;
$type-size-l: 18px;
$type-size-xl: 24px;
```

## Imenovanje datoteka

* Vizualni elementi se imenuju sistemom *generic to specific* + BEM:
	* Pozadinska grafika: `bg-*.png`
	* Ikone: `icon-*.png`
	* Razne grafike (maskote i sl.): `graphic-*.png`
	* Smjer elementa: `icon-arrow--left-*.png`
	* Modifikatori: `icon-arrow--left-01.png`

## In the wild

Examples of "in the wild" project which use SUIT/BEM naming structure.

* http://nicolasgallagher.com/
* http://simonsmith.io/
* http://www.theguardian.com/international
* http://www.bloomberg.com/
* https://www.shopa.com/
* https://twitter.com
