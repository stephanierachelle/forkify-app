import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'a6b870d0961851f7f923f89d58d7aa70';
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


