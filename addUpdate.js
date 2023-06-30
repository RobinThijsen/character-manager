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

function toDataURL(src) {
	if (src) {
		const reader = new FileReader()
		reader.readAsDataURL(src)
		console.log("reader = " + reader.result)
	}
}

async function getCard(url, id, nameInput, shortDescInput, descInput, fileInput, h1) {
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

async function deleteRequest(url) {
	const response = await fetch(url, {
		method: 'DELETE',
	})
	
	return response
}

addUpdate.onclick = () => {
	if (id != undefined) {
	} else {
		console.log("hello")
		setCard(nameInput, shortDescInput, descInput, fileInput)
	}
}

del.onclick = () => {
	console.log('delete')
	//deleteRequest('https://character-database.becode.xyz/characters/' + id)
}