# o-header [![Build Status](https://travis-ci.org/aarmour/o-header.svg)](https://travis-ci.org/aarmour/o-header)

Responsive page header.

## Quick start

TODO

## Browser support

TODO

## Element containers

The header provides the following content containers:

* Primary: Left
* Primary: Right

## Fixed

To fix the header to the top of the page, add the `o-header--fixed` class:

```html
<header class="o-header o-header--fixed"></header>
```

You will need to adjust the top margin of the main content to accommodate the header's height, which is defined by the `$o-header-height` Sass variable.

## Logos

To add the Pearson logo, use the following markup:

```html
<div class="o-header__brand">
  <a href="https://example.com/Pearson">
    <div class="o-header__logo o-header__logo--pearson"></div>
  </a>
</div>
```

## Tagline

To add the tagline, use the following markup:

```html
<div class="o-header__tagline o-header__tagline--always-learning"></div>
```

The element should also be floated right.

## License

This software is published by Pearson Education under the [MIT license](LICENSE).
