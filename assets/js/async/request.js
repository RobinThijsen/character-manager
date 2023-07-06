/** 
 *
 * select one character from the API
 * @param {string} id of the character
 *
 */
export async function onlyCharactere(id) {
	let response = await fetch('https://character-database.becode.xyz/characters/'+ id);
	let c = await response.json();
	
	const h1 = document.querySelector('#onlyName');
	h1.innerText = c.name;
	
	const nameCard = document.createElement('h2');
	nameCard.innerText = c.name;
	
	const section = document.querySelector('#onlyCharacter');
	
	const imgProfil = document.createElement('img');
	imgProfil.src = "data:image/png;base64," + c.image;
	
	//name character
	const h2 = document.createElement('h2');
	h2.innerText = c.name;
	
	//bubbles icon
	
	
	const cite = document.createElement('cite')
	cite.innerText = c.shortDescription
	const blocText = document.createElement('div');
	blocText.className = 'blocText';
	const p = document.createElement('p')
	p.innerText = c.description
	
	
	blocText.append(p);
	
	section.prepend(imgProfil, h2, cite, blocText);
	
	const a = document.querySelector('.blueButton');
	a.href = '/addAndUpdate.html?id=' + c.id;
}

/**
 *
 * Post the data in the API (add)
 * @param {string} url of the API
 * @param {[string]} data to set in the API
 *
 */
export async function postRequest(url, data) {
	let postObje = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	}
	
	const response = await fetch(url, postObje)
}

/**
 *
 * Put the data in the API (update)
 * @param {string} url of the API
 * @param {string} id of the element to update in the API
 * @param {[string]} data to set in the API
 */
export async function putRequest(url, id, data) {
	let postObje = {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	}
	
	const response = await fetch(url + id, postObje)
	const result = response.json()
}

/**
	*
	* Delete a data in the API (delete)
	* @param {string} url of the API
	* @param {string} id of the data to delete in API
	*
	*/
export async function deleteRequest(url) {
	console.log('delete')
	
	const response = await fetch(url, {
		method: 'DELETE',
	})
	
	//window.location.href = "./index.html"
}