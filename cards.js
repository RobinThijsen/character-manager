const section = document.getElementById('cards')
const theme = document.getElementById('theme')

async function getCards() {
  // read our JSON
  let response = await fetch('https://character-database.becode.xyz/characters')
  let characters = await response.json()

  characters.map(c => {
    if (c.image != undefined) {
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
    } else {
      console.log("There was an error while trying to get the card " + c.id + "!")
    }
  })

  return characters;
}

const getColor = () => {
  const r = document.querySelector(':root')
  let rs = getComputedStyle(r)
  console.log("The value of --blue is: " + rs.getPropertyValue('--blue'))
}

const setColor = (value, color) => {
  const r = document.querySelector(':root')
  r.style.setProperty(value, color)
}

getCards();

theme.onclick = () => {
  console.log(theme.getAttribute('data-value'))
  if (theme.getAttribute("data-value") == '1') {
    theme.innerText = "Make it white"
    theme.setAttribute("data-value", "2")
    
    setColor('background', 'hsla(0, 0%, 18%, 1)')
    setColor('text', 'hsla(208, 100%, 97%, 1)')
  } else {
    theme.innerText = "Make it dark"
    theme.setAttribute("data-value", "1")
    
    setColor('background', 'hsla(208, 100%, 97%, 1)')
    setColor('text', 'hsla(0, 0%, 18%, 1)')
  }
}