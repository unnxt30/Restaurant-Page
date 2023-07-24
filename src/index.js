import loadHome from './home.js'

loadHome();

const homeButton = document.getElementById('home');

homeButton.onclick = () => {
    loadHome();
}