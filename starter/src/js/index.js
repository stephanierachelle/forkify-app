// Global app controller
import axios from 'axios';
async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '19d5e710250668f8d2e808113ca60d4d';
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`)
        const recipes = res.data.recipes
        console.log(recipes);
    } catch (error) {
    alert(error);
    }
}
getResults('pizza');


