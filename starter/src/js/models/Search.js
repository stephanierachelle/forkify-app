import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '19d5e710250668f8d2e808113ca60d4d';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            console.log(res)
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
        alert(error);
        }
    }
}


