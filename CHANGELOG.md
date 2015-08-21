<a name="0.6.1"></a>
## [0.6.1](//compare/v0.6.0...v0.6.1) (2015-08-21)


### Bug Fixes

* **a11y:** dropdown menu item hover color contrast in default and light themes e751053



<a name="0.6.0"></a>
# [0.6.0](//compare/v0.5.0...v0.6.0) (2015-08-21)


### Features

* convert logo and tagline to SVG 3fd878d
* redesign 7bd41da



<a name"0.5.0"></a>
## 0.5.0 (2015-07-31)


#### Bug Fixes

* iOS scroll issue with auto-resizing address bar ([f409cea8](https://github.com/Pearson-Higher-Ed/o-header/commit/f409cea8))


#### Features

* mobile: remove border from nav items; add border to containers ([868a9600](https://github.com/Pearson-Higher-Ed/o-header/commit/868a9600))


<a name"0.4.0"></a>
## 0.4.0 (2015-07-10)


#### Bug Fixes

* overlay issue in Chrome when o-header__primary has no visible elements ([1123f6da](https://github.com/Pearson-Higher-Ed/o-header/commit/1123f6da))


#### Features

* update mobile menu styles ([c3be134d](https://github.com/Pearson-Higher-Ed/o-header/commit/c3be134d))
* remove section re-ordering in the mobile view ([901ecf35](https://github.com/Pearson-Higher-Ed/o-header/commit/901ecf35))
* add js module and support for disabling body scrolling when collapsible section is expanded ([a5741f9b](https://github.com/Pearson-Higher-Ed/o-header/commit/a5741f9b))


<a name"0.3.0"></a>
## 0.3.0 (2015-06-17)


#### Features

* new header regions ([914c11d0](https://github.com/Pearson-Higher-Ed/o-header/commit/914c11d0))


#### Breaking Changes

* 
`o-header__primary__left` and `o-header__primary__right` have been
replaced:

```html
<header data-o-component="o-header" class="o-header">
  <div class="o-header__container">
    <div class="o-header__head"></div>
    <div class="o-header__primary"></div>
    <div class="o-header__user"></div>
  </div>
</header>
```

 ([914c11d0](https://github.com/Pearson-Higher-Ed/o-header/commit/914c11d0))


<a name"0.2.0"></a>
## 0.2.0 (2015-06-09)


#### Features

* rename module to o-header ([e78cef51](https://github.com/Pearson-Higher-Ed/o-header/commit/e78cef51))


#### Breaking Changes

* the `he-` prefix was removed from the component name;
the module is now `o-header`. This affects any namespaces that begin with the module name (CSS selectors, SASS variables, data- attributes, etc).

 ([e78cef51](https://github.com/Pearson-Higher-Ed/o-header/commit/e78cef51))


<a name"0.1.0"></a>
## 0.1.0 (2015-05-22)


#### Features

* **header:** highlight link when focused ([fc60b603](https://github.com/Pearson-Higher-Ed/o-header/commit/fc60b603))
* **nav:** improve nav support ([6758aa66](https://github.com/Pearson-Higher-Ed/o-header/commit/6758aa66))


#### Breaking Changes

* nav elements must add .o-header__nav and
.o-header__nav-item classes.

To migrate existing markup:

Before:

```html
<nav>
  <ul>
    <li><a href="#">Foo</a></li>
    <li><a href="#">Bar</a></li>
  </ul>
</nav>
```

After:

```html
<nav class="o-header__nav">
  <ul>
    <li class="o-header__nav-item"><a href="#">Foo</a></li>
    <li class="o-header__nav-item"><a href="#">Bar</a></li>
  </ul>
</nav>
```

 ([6758aa66](https://github.com/Pearson-Higher-Ed/o-header/commit/6758aa66))


<a name"0.0.2"></a>
### 0.0.2 (2015-05-19)


#### Features

* **demos:** enable navigation demo ([383aee76](https://github.com/Pearson-Higher-Ed/o-header/commit/383aee76))
* **header:** support fixing the header to the top of the page ([d6d1f62a](https://github.com/Pearson-Higher-Ed/o-header/commit/d6d1f62a))


<a name"0.0.1"></a>
### 0.0.1 (2015-05-14)


#### Bug Fixes

* **brand:** set height to header height ([f3274e45](https://github.com/Pearson-Higher-Ed/o-header/commit/f3274e45))
* **header:**
  * prevent inner elements from overflowing the primary containers ([9ea1e744](https://github.com/Pearson-Higher-Ed/o-header/commit/9ea1e744))
  * set relative position for container elements ([7214f67f](https://github.com/Pearson-Higher-Ed/o-header/commit/7214f67f))
* **nav:** float left by default ([8e2ecc7c](https://github.com/Pearson-Higher-Ed/o-header/commit/8e2ecc7c))


#### Features

* **header:** tagline ([ee5c814f](https://github.com/Pearson-Higher-Ed/o-header/commit/ee5c814f))

