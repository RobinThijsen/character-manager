
const key = (new URLSearchParams(window.location.search)).get('key');
//console.log(key);


async function onlyCharactere(key){
let response = await fetch('https://character-database.becode.xyz/characters/'+ key);
let c = await response.json();

const h1 = document.querySelector('#onlyName');
h1.innerText = c.name;

const nameCard = document.createElement('h2');
nameCard.innerText = c.name;

const section = document.querySelector('#onlyCharacter');



const imgProfil = document.createElement('img');
imgProfil.src = "data:image/png;base64," + c.image;

const h2 = document.createElement('h2');
h2.innerText = c.name;

const figure = document.querySelector('figure');

const cite = document.createElement('cite')
cite.innerText = c.shortDescription

const p = document.createElement('p')
p.innerText = c.description

figure.append(cite)
section.prepend(  imgProfil, h2, p);

}
onlyCharactere(key);
