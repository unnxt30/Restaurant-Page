import { LibManifestPlugin } from "webpack";

const content = document.getElementById('content');
const footer = document.querySelector('.footer');

const home = document.createElement('div');
home.setAttribute('class', 'home');

const quoteBox = document.createElement('div');
quoteBox.setAttribute('class', 'quoteBox');

const quote1 = document.createElement('div');
quote1.setAttribute('id', 'quote1');
quote1.innerHTML = "Where coffee brews moments, and conversations percolate.";
quoteBox.appendChild(quote1);

const quote2 = document.createElement('div');
quote2.setAttribute('id', 'quote2');
quote2.innerHTML = "Embrace the aroma, savor the flavors, create lasting memories.";
quoteBox.appendChild(quote2);

home.appendChild(quoteBox);

const showcase = document.createElement('div');
showcase.setAttribute('class', 'showcase');

const column1 = document.createElement('div');
column1.setAttribute('class', 'column')
const image1 = document.createElement('img');
image1.src = "imgs/coffeebeans.jpg"
const span1 = document.createElement('span');
span1.innerHTML = "Hand-Picked, Aromatic Beans"
column1.appendChild(image1);
column1.appendChild(span1);
showcase.appendChild(column1);

const column2 = document.createElement('div');
column2.setAttribute('class', 'column')
const image2 = document.createElement('img');
image2.src = "imgs/cafe.jpg"
const span2 = document.createElement('span');
span2.innerHTML = "Ambience, for the Romantic in you."
column2.appendChild(image2);
column2.appendChild(span2);
showcase.appendChild(column2);

const column3 = document.createElement('div');
column3.setAttribute('class', 'column')
const image3 = document.createElement('img');
image3.src = "imgs/coffee.jpg"
const span3 = document.createElement('span');
span3.innerHTML = "Cofee, to Heal your soul."
column3.appendChild(image3);
column3.appendChild(span3);
showcase.appendChild(column3);

home.appendChild(showcase)

function loadHome(){
    content.insertBefore(home,footer)
}

export default loadHome();