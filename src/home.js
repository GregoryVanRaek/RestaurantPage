import { suggestions } from './pizza.js'

const home = () => {
    // Dom
    let main = document.querySelector('#content');
    let suggestionTitle = document.createElement('h2');
    let suggestionContainer = document.createElement('div');
    suggestionTitle.id = "homeContent";

    // Variable
    let numberOfSuggestion = suggestions.length;
    
    // Content
    suggestionTitle.textContent = "Suggestions";

    // Style
    suggestionTitle.classList.add('suggestionsTitle')
    suggestionContainer.classList.add('suggestionContainer')

    // Structure
    main.appendChild(suggestionTitle);
    main.appendChild(suggestionContainer);

        // Suggestion
        for(let i = 0 ; i < numberOfSuggestion ; i++)
        {
            // Dom
            let suggestion = document.createElement('div');
            let suggestionImg = document.createElement('img');
            let suggestionName = document.createElement('div');
            let suggestionDescription = document.createElement('div');

            // Content
            suggestionImg.src = suggestions[i].img;
            suggestionName.textContent = suggestions[i].name;

            for(let j = 0 ; j < suggestions[i].ingredients.length ; j++)
            {
                let ingredient = document.createElement('div');
                if(j !== suggestions[i].ingredients.length - 1)
                    ingredient.textContent = suggestions[i].ingredients[j] + ", ";
                else
                    ingredient.textContent = suggestions[i].ingredients[j];
                suggestionDescription.appendChild(ingredient);
            }

            // Style
            suggestion.classList.add('suggestion');
            suggestionImg.classList.add('suggestionImg')
            suggestionDescription.classList.add('suggestionDescription')

            // Structure
            suggestion.appendChild(suggestionImg);
            suggestion.appendChild(suggestionName);
            suggestion.appendChild(suggestionDescription);
            suggestionContainer.appendChild(suggestion);
        }
}

export{ home };