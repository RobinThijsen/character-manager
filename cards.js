const section = document.getElementById('cards')
const url = window.location.href
async function getCards() {

  // read our JSON
  let response = await fetch('https://character-database.becode.xyz/characters');
  let character = await response.json();

  character.map(c => {
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
    a.setAttribute('href', url + 'onlyCharacter.html?key=' + c.id)
    
    article.style.backgroundImage = "url(data:image/png;base64," + c.image + ")"
    
    div.append(h2, cite, p, a)
    article.append(div)
    section.append(article)
  })

  return character;
}

getCards();