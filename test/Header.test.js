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

});
