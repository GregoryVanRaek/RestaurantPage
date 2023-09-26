const navBar = () => {
    // Dom
    let documentHeader = document.querySelector('header');
    let navBarDiv = document.createElement('div');
    let home = document.createElement('div');
    let menu = document.createElement('div');
    let contact = document.createElement('div');
    let title = document.createElement('h1');
    
    //Content
    title.textContent = "Welcome to Pizza Casa";
    home.textContent="Home";
    home.id = "home";
    menu.textContent = "Menu";
    menu.id = "menu"
    contact.textContent = "Contact";
    contact.id = "contact";

    // Style
    navBarDiv.classList.add('navbar');
    home.classList.add('navMenu');
    menu.classList.add('navMenu');
    contact.classList.add('navMenu');


    // Stucture
    documentHeader.appendChild(title);
    documentHeader.appendChild(navBarDiv);
    navBarDiv.appendChild(home);
    navBarDiv.appendChild(menu);
    navBarDiv.appendChild(contact);
};

export { navBar };