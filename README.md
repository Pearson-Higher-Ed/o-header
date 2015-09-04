# o-header [![Build Status](https://travis-ci.org/Pearson-Higher-Ed/o-header.svg)](https://travis-ci.org/Pearson-Higher-Ed/o-header)

Responsive page header.

## Quick start

Add the following markup to your page:

```html
<header class="o-header"></header>
```

## Sections

Sections can be added to the header using the `<section>` tag:

```html
<header class="o-header">
	<div class="o-header__container">
		<section class="o-header__section"></section>
		<section class="o-header__section"></section>
	</div>
</header>
```

Use `o-header__section--right` to float a section to the right:

```html
<header class="o-header">
	<div class="o-header__container">
		<section class="o-header__section"></section>
		<section class="o-header__section o-header__section--right"></section>
	</div>
</header>
```

## Navs

To add navigation items, use the `nav` tag with an unordered list:

```html
<header class="o-header">
	<div class="o-header__container">
		<section class="o-header__section">
			<nav class="o-header__nav">
				<ul class="o-header__nav-items">
					<li class="o-header__nav-item">
						<a href="https://example.com">Link</a>
					</li>
					<li class="o-header__nav-item">
						<a href="https://example.com">Link</a>
					</li>
				</ul>
			</nav>
		</section>
	</div>
</header>
```

## Fixed

To fix the header to the top of the page, add the `o-header--fixed` class:

```html
<header class="o-header o-header--fixed"></header>
```

You will need to adjust the top margin of the main content to accommodate the header's height, which is defined by the `$o-header-mobile-height` and `$o-header-height` Sass variables.

## Logo

To add the Pearson logo, use the following markup:

```html
<div class="o-header__brand">
  <a href="https://pearson.com">
    <div class="o-header__logo o-header__logo--pearson"></div>
  </a>
</div>
```

## Tagline

To add the tagline, use the following markup:

```html
<div class="o-header__tagline o-header__tagline--always-learning"></div>
```

## z-index

By default, the header's `z-index` property is set to 1000. This value can be changed by setting the `$o-header-z-index` SASS variable.

## Light theme

The header comes with a light theme:

```html
<header class="o-header o-header--theme-light"></header>
```

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
