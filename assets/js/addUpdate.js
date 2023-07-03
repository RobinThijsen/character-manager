const id = (new URLSearchParams(window.location.search)).get('id')

const main = document.querySelector(".add-update")

const fileInput = document.getElementById("file")
const nameInput = document.getElementById("name")
const shortDescInput = document.getElementById("sDesc")
const descInput = document.getElementById("desc")

const addUpdate = document.getElementById("saveBtn")
const del = document.getElementById("delete")
const lastH1 = document.getElementById('last-h1')

if (id != undefined) {
	console.log('update')
	setCardInInput(
		'https://character-database.becode.xyz/characters/',
		id,
		nameInput,
		shortDescInput,
		descInput,
		fileInput,
		lastH1
	)
	addUpdate.innerText = "Save change"
	const div = document.createElement('div')
	
	for(let i = 0; i < 3; i++) {
		const i = document.createElement('i')
		i.classList.add('fa-solid', 'fa-angle-right')
		div.append(i)
	}
	addUpdate.append(div)
} else {
	lastH1.innerText = "Add"
	addUpdate.innerText = 'Add one'
}

/**
 *
 * print reader.result
 * @param {src} url of image
 *
 *//*
function toDataURL(src) {
	console.log(src.name)
	if (src.name) {
		const reader = new FileReader()
		const result = reader.readAsDataURL(src)
		console.log("result = " + result)
		return result
	}
}
*/
function convertImageToBase64(imgUrl, callback) {
  const image = new Image();
  image.crossOrigin='anonymous';
  image.onload = () => {
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.height = image.naturalHeight;
	canvas.width = image.naturalWidth;
	ctx.drawImage(image, 0, 0);
	const dataUrl = canvas.toDataURL();
	callback && callback(dataUrl)
  }
  image.src = imgUrl.name;
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
	
	const figure = document.createElement("figure")
	const img = document.createElement("img")
	img.src = "data:image/png;base64," + character.image
	img.setAttribute('alt', "image of character")
	figure.append(img)
	main.prepend(figure)
}

function setCard(nameInput, shortDescInput, descInput, fileInput) {
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
  data.image = convertImageToBase64(fileInput.files[0], console.log)
  
  console.log("image = " + data.image)
  
  return data
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
	
	console.log('post', postObje)
	
	const response = await fetch(url, postObje)
	const result = response.json()
	
	return result
}

async function putRequest(url, data) {
	let postObje = {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	}
	
	console.log('put', postObje)
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
async function deleteRequest(url) {
	console.log('delete')
	
	const response = await fetch(url, {
		method: 'DELETE',
	})
	
	window.location.href = "/index.html"
	return response
}

// event on click on add/update button
addUpdate.onclick = () => {
	console.log("id = " + id)
	if (id != undefined) {
		const data = setCard(nameInput, shortDescInput, descInput, fileInput)
		putRequest('https://character-database.becode.xyz/characters/' + id, data)
	} else {
		const data = setCard(nameInput, shortDescInput, descInput, fileInput)
		postRequest('https://character-database.becode.xyz/characters', data)
	}
}

// event on click on delete button
del.onclick = () => {
	deleteRequest('https://character-database.becode.xyz/characters/' + id)
}