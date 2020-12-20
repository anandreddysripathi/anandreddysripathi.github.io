let themeDots = document.getElementsByClassName('theme-dot')

let theme = localStorage.getItem('theme')

const about = `<b>Focused Computer Science major student specializing in Data Science attending Bradley University. Aiming to leverage proven communication, teamwork, and management skills to successfully fill the software developer role at a company bringing value to the table.</b>`;
document.getElementById('about_p').innerHTML = about;

if (theme == null) {
	setTheme('cyan')
} else {
	setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		// console.log('option clicked', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'cyan') {
		document.getElementById('theme-style').href = 'cyan.css'
	}
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'light.css'
	}
	if (mode == 'dark') {
		document.getElementById('theme-style').href = 'red.css'
	}
	localStorage.setItem('theme', mode)
}
