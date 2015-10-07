'use strict';

module.exports = Header;

function Header(element) {
	if (!(this instanceof Header)) throw new TypeError('Constructor Header requires \'new\'');
	if (!element) throw new TypeError('missing required argument: element');
	if (typeof element === 'string') element = document.querySelector(element);
	if (!element) return;


	this.element = element;
	this.init();
}

Header.prototype.init = function () {

};

Header.prototype.destroy = function () {

};
