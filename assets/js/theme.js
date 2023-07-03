console.log(localStorage.getItem('theme'))

if (localStorage.getItem('theme') != null) {
	if (localStorage.getItem('theme') == "dark") {
		document.body.classList.add('dark-mode')
		theme.innerText = "Make it white"
		theme.style.color = "#fff"
	}
}

// event on click on theme button
theme.onclick = () => {
	if (document.body.classList.contains('dark-mode')) {
		document.body.classList.remove('dark-mode')
		theme.innerText = "Make it dark"
		theme.style.color = '#000'

		localStorage.setItem('theme', 'white')
		
	} else {
		document.body.classList.add('dark-mode')
		theme.innerText = "Make it white"
		theme.style.color = '#fff'
		
		localStorage.setItem('theme', 'dark')
		console.log(localStorage.getItem('theme'))
	}
}