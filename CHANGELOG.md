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

