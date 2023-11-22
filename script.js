// DOM elements
const picturesContainer = document.getElementById('pictures')

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	// fetchPictures()
})

// Functions

const fetchPictures = async () => {
	const response = await fetch(
		`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=30`
	)
	const data = await response.json()

	appendPictures(data)
}

const appendPictures = (data) => {
	const fragment = new DocumentFragment()

	data.forEach((picture) => {
		const imageContainer = document.createElement('div')
		imageContainer.classList.add('image-container')

		const anchor = document.createElement('a')
		anchor.href = picture.links.html
		anchor.target = '_blank'

		const image = document.createElement('img')
		image.classList.add('image')
		image.src = picture.urls.regular
		image.alt = picture.alt_description

		anchor.appendChild(image)
		imageContainer.appendChild(anchor)

		fragment.appendChild(imageContainer)
	})

	picturesContainer.appendChild(fragment)
}
