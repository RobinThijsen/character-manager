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


  const button = document.getElementById("search");
  button.onclick = () =>{

    let name = document.querySelector('#search-input').value;
console.log(name);

    async function reSearch(){
        if (name != undefined){
            let response = await fetch('https://character-database.becode.xyz/characters/' + name)
            let characters = await response.json()
            section.remove()
            getSetCards(characters)
            
        }
        
    }
  };


