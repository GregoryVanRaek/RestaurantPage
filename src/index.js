import './style.css';
import { navBar } from "./nav.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from './contact.js';

// Navigation bar
navBar();

// Content
const currentPage = (() => {

    let navHome = document.getElementById('home');
    let navMenu = document.getElementById('menu');
    let navContact = document.getElementById('contact');
    let content = document.getElementById('content');

    home();

    navHome.addEventListener('click', () => {
        clear();
        timeOut(home());
    })

    navMenu.addEventListener('click', () => {
        clear();
        timeOut(menu());
    })

    navContact.addEventListener('click', () => {
        clear();
        timeOut(contact());
    })

    const clear = () => {
        content.classList.remove('anim'); // Retire la classe d'animation
        content.innerHTML = '';
    }

    const timeOut = (menu) => {
        setTimeout(() => {
            content.classList.add('anim');
            menu;
        }, 5); 
    }

})();




