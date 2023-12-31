const content = document.getElementById('content');
const header = document.querySelector('.header');

const home = document.createElement('div');
home.setAttribute('class', 'home');

const home_container = document.createElement('div');
home_container.setAttribute('id', 'home_container')

home.appendChild(home_container);

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

home_container.appendChild(quoteBox);

const showcase = document.createElement('div');
showcase.setAttribute('class', 'showcase');

const column1 = document.createElement('div');
column1.setAttribute('class', 'column')
const image1 = document.createElement('img');
image1.src = "imgs/barista.jpg"
const span1 = document.createElement('span');
span1.innerHTML = "Customer Service, brewed with a smile."
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
span3.innerHTML = "Coffee, to Heal your soul."
column3.appendChild(image3);
column3.appendChild(span3);
showcase.appendChild(column3);

home.appendChild(showcase)

function loadHome(){
    header.insertAdjacentElement("afterend",home);
    return home;
}

export default loadHome;