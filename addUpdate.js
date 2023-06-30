const id = (new URLSearchParams(window.location.search)).get('id')

const fileInput = document.getElementById("file")
const nameInput = document.getElementById("name")
const shortDescInput = document.getElementById("sDesc")
const descInput = document.getElementById("desc")

const addUpdate = document.getElementById("saveBtn")
const del = document.getElementById("delete")
const lastH1 = document.getElementById('last-h1')

if (id != undefined) {
	console.log('update')
	getCard(
		'https://character-database.becode.xyz/characters',
		id,
		nameInput,
		shortDescInput,
		descInput,
		h1
	)
} else {
	lastH1.textContent = "Add"
	addUpdate.innerText = 'Add one'
}

/**
 *
 * print reader.result
 * @param {src} url of image
 *
 */
function toDataURL(src) {
	if (src) {
		const reader = new FileReader()
		reader.readAsDataURL(src)
		console.log("reader = " + reader.result)
	}
}

/**
 *
 * Return the result of the fetch search API
 * @param {url} url of the API
 * @param {id} id of the character in API
 * @return {result} result of the fetch
 *
 */
async function getCard(url, id) {
	let response = await fetch(url + id)
	let result = await response.json()
	
	return result
}

/**
 *
 * set value of character in input
 * @param {url} url of the API
 * @param {id} id of the character on API
 * @param {nameInput} input for the name
 * @param {shortDescInput} input for the short desc
 * @param {descInput} input for the desc
 * @param {fileInput} input for the file
 * @param {h1} element h1 to modify title
 *
 */
async function setCardInInput(url, id, nameInput, shortDescInput, descInput, fileInput, h1) {
	let response = await fetch(url + id)
	let character = await response.json()
	
	h1.innerText = character.name
	nameInput.value = character.name
	shortDescInput.value = character.shortDescription
	descInput.value = character.description
}

async function setCard(nameInput, shortDescInput, descInput, fileInput) {
  // read our JSON
  let data = {
	  name: '',
	  shortDescription: '',
	  description: '',
	  image: ''
  }
  
  data.name = nameInput.value
  data.shortDescription = shortDescInput.value
  data.description = descInput.value
  data.image = toDataUrl(fileInput.files[0])
  
  console.log('set card')
  //postRequest('https://character-database.becode.xyz/characters', data)
}

/**
 *
 * Post the data in the API
 * @param {url} url of the API
 * @param {data} data to set in the API
 * @return {result} result of the fetch
 *
 */
async function postRequest(url, data) {
	let postObje = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	}
	
	const response = await fetch(url, postObje)
	const result = response.json()
	
	return result
}

/**
 *
 * Delete a data in the API
 * @param {url} url of the API
 * @param {id} id of the data to delete in API
 * @return {response} the result of the delete
 *
 */
async function deleteRequest(url, id) {
	const response = await fetch(url + id, {
		method: 'DELETE',
	})
	
	return response
}

// event on click on add/update button
addUpdate.onclick = () => {
	if (id != undefined) {
	} else {
		console.log("hello")
		//setCard(nameInput, shortDescInput, descInput, fileInput)
	}
}

// event on click on delete button
del.onclick = () => {
	console.log('delete')
	//deleteRequest('https://character-database.becode.xyz/characters/' + id)
}