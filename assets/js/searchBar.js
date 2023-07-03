/*document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".cardName");
    let cards = document.querySelectorAll(".cardHeroes");
    let index = 0;
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
      index++;
    });
  });*/

const section = document.querySelector('#cards');
const articles = section.querySelector("article")

  function getSetCards(object) {
    console.log("first element = " + object[0].name)
    object.map(c => {
        console.log("individual = " + c.name)
        
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
      /*} else {
        console.log("There was an error while trying to get the card " + c.id + "!")
        console.log("info = " + c.name)
      }*/
  
    })

    return object;
  }
  





/*const button = document.getElementById("search");
button.onclick = () =>{
    let name = document.querySelector('#search-input').value;
    async function reSearch(section){
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
    reSearch(articles, section)
  };*/

  let button = document.getElementById('search');

  button.addEventListener('click',async()=>{
  
      let input = document.getElementById('search-input');
  
      document.getElementById("cards").innerHTML = "";
      let response = await fetch('https://character-database.becode.xyz/characters?name=' + input.value)
      let characters = await response.json()

      getSetCards(characters);
  
  });
  
//getSetCards(c.name);
