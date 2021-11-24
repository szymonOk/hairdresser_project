document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('#navbar')
	const navItems = document.querySelectorAll('.nav-link')
	const showNav = document.querySelector('.navbar-collapse')

	function addNavShadow() {
		if (window.scrollY >= 100) {
			navbar.classList.add('nav-shadow')
		} else {
			navbar.classList.remove('nav-shadow')
		}
	}

	navItems.forEach(item => item.addEventListener('click', () => showNav.classList.remove('show')))

	window.addEventListener('scroll', addNavShadow)
})
