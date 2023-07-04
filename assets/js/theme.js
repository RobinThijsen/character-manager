const theme = document.getElementById('theme')

if (localStorage.getItem('theme') != null) {
	if (localStorage.getItem('theme') == "dark") {
		document.body.classList.add('dark-mode')
		theme.classList.add("dark-mode")
	}
}

// event on click on theme button
theme.onclick = () => {
	if (document.body.classList.contains('dark-mode')) {
		document.body.classList.remove('dark-mode')
		theme.classList.remove("dark-mode")

		localStorage.setItem('theme', 'white')
		
	} else {
		document.body.classList.add('dark-mode')
		theme.classList.add("dark-mode")
		
		localStorage.setItem('theme', 'dark')
	}
}