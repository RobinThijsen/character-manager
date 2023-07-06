const section = document.querySelector('#cards');
const articles = section.querySelector("article")

/**
 *
 * Get and set cards from API
 * create an article with data from API
 * @param {json} object json collection of element
 *
 */
const getSetCards = (object) => {
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
    article.style.backgroundRepeat = "no-repeat";
    article.style.backgroundPosition = "cover";

    div.append(h2, cite, p, a)
    article.append(div)
    section.append(article)
  })
  
  return object;
}
  
/**
 *
 * search character by their names
 * @param {HTMLElement} section to append elment in it
 * @param {string} name to search
 *
 */
async function reSearch(section, name) {
  if (name != undefined){
    let response = await fetch('https://character-database.becode.xyz/characters?name=' + name)
    let characters = await response.json()
    //console.log(articles)
    for (let article of articles) {
      console.log(article)
      article.remove()
    }
    getSetCards(characters, section)  
  }
}
  
button.onclick = () =>{
  let name = document.querySelector('#search-input').value;
  
  reSearch(articles, name)
};
