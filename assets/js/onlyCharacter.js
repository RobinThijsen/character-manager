
const id = (new URLSearchParams(window.location.search)).get('id');
//console.log(id);


async function onlyCharactere(id){
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
const bubles = document.createElement('div');
bubles.className = 'bubles';

const cite = document.createElement('cite')
cite.innerText = c.shortDescription

const blocText = document.createElement('div');
blocText.className = 'blocText';
const p = document.createElement('p')
p.innerText = c.description

bubles.append(cite);

blocText.append(p);

section.prepend(imgProfil, h2, bubles, blocText);

const a = document.querySelector('.blueButton');
a.href = '/addAndUpdate.html?id=' + c.id;

}
onlyCharactere(id);
