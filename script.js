// DOM elements
const picturesContainer = document.getElementById('pictures')

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	// fetchPictures()
})

// Functions

const fetchPictures = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=12`
	)
	const data = await response.json()

	console.log(data)
}
