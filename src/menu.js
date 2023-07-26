const content = document.getElementById('content');
const header = document.querySelector('.header')

const menu = document.createElement('div');
menu.setAttribute('class', 'menu')

function createMenuItem(imageSrc, name, price) {
    const itemDiv = document.createElement("div");
    itemDiv.id = "item";

    const image = document.createElement("img");
    image.src = imageSrc;
    image.height = "200";
    image.width = "200";

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    const priceDiv = document.createElement("div");
    priceDiv.id = "price";
    priceDiv.textContent = price + "/-";

    productDiv.appendChild(nameSpan);
    productDiv.appendChild(priceDiv);

    itemDiv.appendChild(image);
    itemDiv.appendChild(productDiv);

    return itemDiv;
}

function displayMenuItems() {
    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('class', 'menuGrid');

    const menuItems = [
        {
            imageSrc: "imgs/menu/latte.png",
            name: "Latte",
            price: "175"
        },
        {
            imageSrc: "imgs/menu/donut.png",
            name: "Donut",
            price: "125"
        },
        {
            imageSrc: "imgs/menu/muffin.png",
            name: "Muffin",
            price: "90"
        },
        {
            imageSrc: "imgs/menu/cappucino.png",
            name: "Cappucino",
            price: "175"
        },
        {
            imageSrc: "imgs/menu/flat_white.png",
            name: "Flat White",
            price: "195"
        },
        {
            imageSrc: "imgs/menu/espresso.png",
            name: "Espresso",
            price: "155"
        },
        {
            imageSrc: "imgs/menu/americano.png",
            name: "Americano",
            price: "145"
        },
        {
            imageSrc: "imgs/menu/tiramisu.png",
            name: "Tiramisu",
            price: "210"
        }
    ];

    menuItems.forEach(item => {
        const menuItem = createMenuItem(item.imageSrc, item.name, item.price);
        menuGrid.appendChild(menuItem);
    });

    return menuGrid;
}

const menu_grid = displayMenuItems();

menu.appendChild(menu_grid);

function loadMenu(){
    header.insertAdjacentElement("afterend", menu);
    return menu;
}

export default loadMenu;