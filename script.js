// DOM elements
const picturesContainer = document.getElementById('pictures')
const loaderFirst = document.getElementById('loader-first')
const loaderSecond = document.getElementById('loader-second')

// Variables
let notLoaded = true

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
	fetchPictures()
})

let debounceTimer = null
document.addEventListener('scroll', () => {
	if (debounceTimer) {
		clearTimeout(debounceTimer)
	}

	if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
		debounceTimer = setTimeout(() => {
			fetchPictures()
		}, 500)
	}
})

// Functions

/**
 * Fetches pictures from the API and appends them to the DOM.
 *
 * @return {Promise<void>} A promise that resolves when the pictures are fetched and appended.
 */
const fetchPictures = async () => {
	if (notLoaded) {
		loaderFirst.style.display = 'block'
	} else {
		loaderSecond.style.display = 'block'
	}

	try {
		const response = await fetch(
			`https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=30`
		)
		const data = await response.json()

		appendPictures(data)

		if (notLoaded) {
			loaderFirst.style.display = 'none'
		} else {
			loaderSecond.style.display = 'none'
		}

		notLoaded = true
	} catch (error) {
		console.log(error)
	}
}

/**
 * Appends pictures to the pictures container.
 *
 * @param {array} data - The array of picture objects.
 */
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
