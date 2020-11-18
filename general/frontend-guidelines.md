# Guidelines for writing front-end code

This document serves as a list and overview of guidelines for writing quality and
consistent front-end (HTML, CSS, and JS) code. It is base on long standing work
and finding a "common language" when working on various projects.

The document seeks to be extremely pragmatic and it is subject to change and
suggestions at any time if there is need for future easier work on projects.

## General

### Pragmatism above semantics

Try to keep standards and semantics, but do not sacrifice pragmatism.
Use the best practice for the current problem if it solves problem in most
flexible way, whether or not it requires disobeying of "standard practice".

For example, if a wrap element for a particular module solves multiple problems
in future, it is a better solution than to stick to the best practice of keeping
HTML simple and clean.

### Values for names

Use clear and appropriate names for HTML classes, IDs and variable and
functio names. The name should be clear to anyone who works on the code.
Nothing is too long or too descriptive if at first glance it is clear what it means.

* Use [greek alphabet](https://en.wikipedia.org/wiki/Greek_alphabet#Letters) when describing HTML class names
* Initial typographical value would be called [caput](http://dictionary.reference.com/browse/caput)
* [Suggestions for table definitions](http://snook.ca/archives/html_and_css/one-module-or-two)

#### Name separation

To split the HTML class name, ID and everything that is not pure text and is part of the encoding
uses dashes.

For script code, variable and function names shoulf use camel-casing pattern.

#### Element states

Element states are defined with prefix `is`, e.g. `is-selected`.

#### Changes to existing values

If there is a need to change an existing name, the new name should be specific.
For example, instead of `.article-text.big`, new name should be `.article-text.article-big`.

All changes should be done according to the principle of "defensive programming" - it is more appropriate to extend the current component with new modifications than to modify the same that could disrupt other modules that use these components.

### Line length

Line length in code and comments should be within the normal typographic boundaries,
e.g. about 80 characters.

### Placeholder text

In case of unavailable content for the project, instead of the standard Lorem Ipsum text,
use the first (or random) paragraph from the article text on Wikipedia in the language
corresponding to the project. That way, you will at least have content that corresponds
to true content that will appear on the page the true nature of the content that
will appear on the page.

### Displaying HTML entities

Each HTML entity, regardless of its support in browsers, is displayed
via numeric HTML entities. This keeps the consistency and ensures that element
is properly displayed regardless of the media consuming it.

For CSS generated content, HTML entities are converted to Unicode code points.

#### HTML

```html
<!-- Bad -->
<p>A long time ago in a galaxy far, far away…</p>

<!-- Good -->
<p>A long time ago in a galaxy far, far away&#8230;</p>
```

#### CSS

```css
.selector:after {
	content:'\2026';
}
```

## Formatting

### Indentation and alignment

4 tabs are used for indentationa and alignment. Do not mix tabs and spaces.

### Trailing whitespace

Trailing whitespace should always be deleted. Most modern editors and IDEs have
option to delete trailing space when saving a file.

## Naming structure

### Naming convention

When working on the code architecture, prefer [SUIT CSS style](https://github.com/suitcss/suit/blob/master/doc/README.md).
It is adaptable to HTML, CSS and JS and understandable to anyone who works on the code.

### Dictionary

Having consistent naming dictionary is useful.

#### Abbreviation dictionary

To escape large names, abbreviation dictionary can be used.

|Abbreviation|Description|
|-|-|
|`aux`|auxillary|
|`bg`|background|
|`cat`|category|
|`col`|column|
|`err`|error|
|`el`|element|
|`ext`|external|
|`img`|image|
|`num`|number|
|`opts`|options|

### Sass variables

Sass variable names should be composed of dash (-) separated parts, with each part
sorted from the most generic to the most specific variable characteristic.
This is quite useful in most editors and IDEs as you can take advantage of autocompletion.

```scss
$color-default-light: #fff;
$color-default-dark: #333;
$color-default-darker: #000;

$color-main: #ff7f50;
$color-main-light: #ff9e7e;
$color-main-lighter: #ffdec7;

$color-secondary: #5cbcaa;

$color-alt: #f1ede4;
$color-alt-dark: #c2c0bc;
$color-alt-light: #f8f5ec;

$color-alt2: #637c84;

$type-size-m: 16px;
$type-size-l: 18px;
$type-size-xl: 24px;
```

### Naming files

Visual elements are named with *generic to specific* system + SUIT.

|Filename|Description|
|-|-|
|`bg-*.png`|Background graphic|
|`icon-*.png`|Icon|
|`graphic-*.png`|Various graphics (mascots, etc.)|
|`icon-arrow--left-*.png`|Element direction|
|`icon-arrow--left-01.png`|Modifiers|

## Working with style components

* Modern CSS features usage is recommended, where PostCSS process should be used to transform it down to proper output
* Majority of best practice should already be defined with linter configuration so refer to linter output when working on codebase

## Working with script components

* Modern ES features usage is recommended, where Babel process should be used to transpile it down to proper output
* Majority of best practice should already be defined with linter configuration so refer to linter output when working on codebase

## Working with markup

* To keep compatibility with various versions of HTML use [polyglot markup](http://dev.w3.org/html5/html-xhtml-author-guide/)
* Each new level within HTML requires additional indentation to make it simpler to review the code and its hierarchy in the document
* It is also possible to add a blank space between the parent and child element for better code overview
* Use only lowercase for element names, attribute names and attribute values
* Avoid using resource protocols inside document
* Each line should contain only one element
* Always write the final tag of element; the rule also applies to self-closing elements
* Use double qutes for attribute values
* Boolean attributes should always have attribute value, regardless of their nature (e.g. `disabled` should be `disabled="disabled"`)
* Multiple attribute elements can be separated into multiple lines to improve readability code review
* The layout of the HTML attribute should follow the following practice:
	1. `id`
	2. `class`
	3. `data-*`
	4. `for|type|href`
	5. Everything else
* All image elements must have an `alt` attribute, even if it was empty

### Semantics

Where possible, use [Schema.org] (http://schema.org) to tag content. Better semantics mean better position on search engines.

### Icons

If you use the `<i>` element to define sprite, set `role="img"` or `role="presentation"`
to remove element from screen reader layer.

```html
<i class="icon" role="img|presentation"></i>
```

### ARIA attributes

Use ARIA attributes for better accessibility.

* [ARIA Landmark Roles](http://a11yproject.com/posts/aria-landmark-roles/)
* [Using WAI-ARIA Landmarks](http://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)

## Example

```html
<!doctype html>
<html lang="hr" class="no-js">
<head>
	<meta charset="utf-8" />
	<title>Example</title>
	<link rel="stylesheet" href="//example.com/assets/css/style.css" />
	<script src="//example.com/assets/js/script.js"></script>
</head>
<body>

	<div class="foo">

		<!-- First element -->
		<div class="bar">
			<p>Text 1 1</p>
			<input type="checkbox" checked="checked" />
		</div>

		<!--
		  Second element
		  @todo do something :)
		-->
		<div
			class="baz"
			id="foobar"
			data-action="foobaz"
		>
			<p>Text 2</p>
		</div>

	</div>

</body>
</html>
```

## Starting markup

```html
<!doctype html>
<html lang="hr" class="no-js">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title></title>
	<meta name="description" content="" />
	<meta name="author" content="" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="stylesheet" href="" />
</head>
<body>

	<script src=""></script>
</body>
</html>
```
