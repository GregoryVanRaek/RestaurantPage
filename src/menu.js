import { pizzas } from './pizza.js'

const menu = () => {
    // DOM
    let menuContainer = document.createElement('div');
    let main = document.getElementById('content');
    let menuTitle = document.createElement('h1');

    // Variables
    let numberOfDish = pizzas.length;

    // Content
    menuTitle.textContent = "Menu";
    menuTitle.classList.add('menuTitle');
    menuContainer.appendChild(menuTitle);

    for(let i = 0 ; i < numberOfDish ; i++)
    {
        let dishContainer = document.createElement('div');
        let dishTitleContainer = document.createElement('div');
        dishContainer.classList.add('dishContainer')
        dishTitleContainer.classList.add('dishTitleContainer');
        menuContainer.appendChild(dishContainer);
        dishContainer.appendChild(dishTitleContainer);
        let dishTitle = document.createElement('div');
        let dishPrice = document.createElement('div');
        dishTitle.textContent = pizzas[i].name;
        dishPrice.textContent = pizzas[i].price;
        dishTitleContainer.appendChild(dishTitle);
        dishTitleContainer.appendChild(dishPrice);

        dishContainer.appendChild(dishTitleContainer);
        
        let dishIngredients = document.createElement('div');
        dishContainer.appendChild(dishIngredients);
        dishIngredients.classList.add('dishIngredients');

        for(let j = 0 ; j < pizzas[i].ingredients.length ; j++)
        {
            let ingredients = document.createElement('em');
            if(j !== pizzas[i].ingredients.length - 1 )
                ingredients.textContent = pizzas[i].ingredients[j] + ", ";
            else
                ingredients.textContent = pizzas[i].ingredients[j];


            dishIngredients.appendChild(ingredients);
        }
    }

    // Style
    menuContainer.classList.add('menuContainer');

    // Structure
    main.appendChild(menuContainer);

}

export { menu };