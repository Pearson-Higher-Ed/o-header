'use strict';

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('theme-light').addEventListener('change', function (e) {
		var header = document.querySelector('.o-header');
		header.classList[e.target.checked ? 'add' : 'remove']('o-header--theme-light');
	});
});
