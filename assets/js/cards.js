const section = document.getElementById('cards')
const theme = document.getElementById('theme')

/**
 *
 * Get and set cards from API
 * create an article with data from API
 *
 */
function getSetCards(object) {

  object.map(c => {
    //if (c.image != undefined) {
      // cards container
      const article = document.createElement('article')
      // div element container
      const div = document.createElement('div')
      // cards name
      const h2 = document.createElement('h2')
      h2.innerText = c.name
      // cards short description
      const cite = document.createElement('cite')
      cite.innerText = c.shortDescription
      
      // cards description
      const p = document.createElement('p')
      p.innerText = c.description
      
      // cards link
      const a = document.createElement('a')
      a.innerText = "Details"
      a.classList.add('blueButton')
      a.href = '/onlyCharacter.html?id=' + c.id
      
      article.style.backgroundImage = "url(data:image/png;base64," + c.image + ")"
      
      div.append(h2, cite, p, a)
      article.append(div)
      section.append(article)
    /*} else {
      console.log("There was an error while trying to get the card " + c.id + "!")
      console.log("info = " + c.name)
    }*/
  })

  return object;
}

async function getCharacters() {
  // read our JSON
  let response = await fetch('https://character-database.becode.xyz/characters')
  let characters = await response.json()
  
  getSetCards(characters);
}
getCharacters()
