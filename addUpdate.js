const id = (new URLSearchParams(window.location.search)).get('id')
const fileInput = document.getElementById("file")
const nameInput = document.getElementById("name")
const shortDescInput = document.getElementById("sDesc")
const descInput = document.getElementById("desc")

const addUpdate = document.getElementById("saveBtn")
addUpdate.innerText = 'Add one'
const del = document.getElementById("delete")

function toDataURL(src) {
	if (src) {
		const reader = new FileReader()
		reader.readAsDataURL(src)
		console.log("reader = " + reader.result)
	}
}

async function getCard(url, id, nameInput, shortDescInput, descInput, fileInput) {
	let response = await fetch(url + id)
	let character = await response.json()
	
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
		console.log('update')
		getCards('https://character-database.becode.xyz/characters', id)
	} else {
		console.log("hello")
		setCards(nameInput, shortDescInput, descInput, fileInput)
	}
}

del.onclick = () => {
	console.log('delete')
	//deleteRequest('https://character-database.becode.xyz/characters/' + id)
}