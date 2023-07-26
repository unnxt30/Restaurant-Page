import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadAbout from "./aboutus.js";


loadHome();
const content = document.getElementById("content");

const home_button = document.getElementById("home");
const menu_button = document.getElementById("menu");
const about_button = document.getElementById("about");

home_button.onclick = () =>{
    if (loadMenu())
    {
        content.removeChild(loadMenu());
    }
    if (loadAbout())
    {
        content.removeChild(loadAbout())
    }

    loadHome();
}

menu_button.onclick = () =>{
    if(loadHome()){
        content.removeChild(loadHome())
    }
    if (loadAbout())
    {
        content.removeChild(loadAbout())
    }

    loadMenu();
}

about_button.onclick = () =>{
    if(loadHome()){
        content.removeChild(loadHome())
    }
    if (loadMenu())
    {
        content.removeChild(loadMenu())
    }
    loadAbout();
}
