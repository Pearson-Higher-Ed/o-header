'use strict';

var DomDelegate = require('dom-delegate');

module.exports = Header;

function Header(element) {
	if (!(this instanceof Header)) throw new TypeError('Constructor Header requires \'new\'');
	if (!element) throw new TypeError('missing required argument: element');
	if (typeof element === 'string') element = document.querySelector(element);
	if (!element) return;

	var elementDelegate;

	this.element = element;
	this.destroy = destroy;
	init();

	function handleCollapseShow(e) {
		document.body.classList.add('o-header__collapse--expanded');
	}

	function handleCollapseHide(e) {
		document.body.classList.remove('o-header__collapse--expanded');
	}

	function init() {
		elementDelegate = new DomDelegate(element);
		elementDelegate.on('oCollapse.show', handleCollapseShow);
		elementDelegate.on('oCollapse.hide', handleCollapseHide);
	}

	function destroy() {
		elementDelegate.destroy();
	}
}
