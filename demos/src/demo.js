document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('theme-light').addEventListener('change', (e) => {
		const header = document.querySelector('.o-header');
		header.classList[e.target.checked ? 'add' : 'remove']('o-header--theme-light');
	});
});
