const header = document.querySelector('.header');

const about = document.createElement("div");
about.setAttribute('class', 'about');

const about_container = document.createElement('div');
about_container.setAttribute('class', 'about_container');

about_container.innerHTML = "Established in 2005, Smoking Mocha Café has since become an integral part of the community. What started as a small coffee corner grew into a cosy café, thanks to the overwhelming support of our loyal customers. Throughout the years, we've remained committed to excellence, consistently delivering an unparalleled coffee experience.\
Our journey began years ago when our founder, Sofia, fell in love with the aroma and complexity of coffee. She travelled the world, exploring coffee plantations and learning from seasoned roasters and growers. Inspired by this passion, he set out to create a haven where coffee lovers could indulge in the finest brews.\
Our café is more than just a place to grab a drink; it's a haven where you can unwind and savour the moments. Our cosy seating, ambient lighting, and tranquil atmosphere create the perfect setting to catch up with friends, read a book, or simply enjoy your own company.\
Come, be a part of the Smoking Mocha family, and let us take you on a journey of aromatic flavors and warm moments. We look forward to serving you and making your time at Smoking Mocha Café truly unforgettable."

const about_span = document.createElement('span');
about_span.innerHTML = "Visit us today and experience the magic of Smoking Mocha!";

about_container.appendChild(about_span);
about.appendChild(about_container);


function loadAbout(){
    // header.insertAdjacentElement("afterend", about);
    // return about;
    alert("hello");
}

export default loadAbout;