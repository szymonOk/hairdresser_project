document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('#navbar')

	function addNavShadow() {
		if (window.scrollY >= 100) {
			navbar.classList.add('nav-shadow')
		} else {
			navbar.classList.remove('nav-shadow')
		}
	}

    window.addEventListener('scroll', addNavShadow)

})
