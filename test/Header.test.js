/*global describe, it*/
'use strict';

var expect = require('expect.js');

var Header = require('./../src/js/Header');

describe('Header', function () {

	describe('constructor', function () {

		it('should throw when called without \'new\'', function () {
			expect(function () { Header(); }).to.throwException(function (e) { // jshint ignore:line
				expect(e).to.be.a(TypeError);
				expect(e.message).to.match(/Constructor Header requires \'new\'/);
			});
		});

		it('should throw when no arguments are provided', function () {
			expect(function () { new Header(); }).to.throwException(function (e) {
				expect(e).to.be.a(TypeError);
				expect(e.message).to.match(/missing required argument: element/);
			});
		});

		it('should accept type string for element argument', function () {
			new Header('#header');
		});

	});

	it('should destroy', function () {
		var headerEl = document.createElement('header');
		document.body.appendChild(headerEl);
		var header = new Header(headerEl);

		header.destroy();
	});

	it('should add o-header__collapse--expanded to body when the collapse element is expanded', function () {
		var headerEl = document.createElement('header');
		document.body.appendChild(headerEl);
		new Header(headerEl);

		dispatchEvent(headerEl, 'oCollapse.show');

		expect(document.body.classList.contains('o-header__collapse--expanded')).to.be(true);
	});

	it('should remove o-header__collapse--expanded from body when the collapse element is collapsed', function () {
		var headerEl = document.createElement('header');
		document.body.appendChild(headerEl);
		new Header(headerEl);
		document.body.classList.add('o-header__collapse--expanded');

		dispatchEvent(headerEl, 'oCollapse.hide');

		expect(document.body.classList.contains('o-header__collapse--expanded')).to.be(false);
	});

});

function dispatchEvent(element, name, data) {
	if (document.createEvent && element.dispatchEvent) {
		var event = document.createEvent('Event');
		event.initEvent(name, true, true);

		if (data) {
			event.detail = data;
		}

		element.dispatchEvent(event);
	}
}
