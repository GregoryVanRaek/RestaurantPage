// Object
function Pizza(name, ingredients, img){
    this.name = name;
    this.ingredients = ingredients;
    this.img = img;
}

// Pizza
let margherita = new Pizza("Margherita", ["tomato", "mozzarella", "basil"], "../dist/img/pizza/margherita.jpg");
let matriciana = new Pizza("Matriciana", ["tomato", "mozzarella", "basil", "pepers", "pecorino", "olives", 'onions'], "../dist/img/pizza/matriciana.jpg");
let casa = new Pizza("Casa", ['tomato', 'mozzarella', 'basil', 'olives', 'onions', 'pepers', 'broccoli'], '../dist/img/pizza/casa');
let diavola = new Pizza("Diavola", ["tomato", "mozzarella", "spicy salami"], "../dist/img/pizza/diavola.jpg");
let hawai = new Pizza("Hawaiian", ["tomato", "mozzarella", "ham", "pineapple"], "../dist/img/pizza/hawai.jpg");
let napolitan = new Pizza("Neapolitan", ["tomato", "mozzarella", "anchovies", "olives", "capers"], "../dist/img/pizza/napolitan.jpg");
let pepperoni = new Pizza("Pepperoni", ["tomato", "mozzarella", "pepperoni"], "../dist/img/pizza/pepperoni.jpg");
let seafood = new Pizza("Seafood", ["tomato ", "mozzarella ", "mixed seafood"], "../dist/img/pizza/seafood.jpg");
let veggie = new Pizza("Veggie", ["tomato", "mozzarella", "mushrooms", "bell peppers", "onions"], "../dist/img/pizza/veggie.jpg");

// Array
const pizzas = [margherita, matriciana, diavola, hawai, napolitan, pepperoni, seafood, veggie, casa];
const suggestions = [margherita, matriciana, diavola, hawai];

export { suggestions };