const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.ACCESS_TOKEN
    }
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/movies', async (req, res) => {
    const response = await searchMovies(req.query.search);
    res.send(response);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


async function searchMovies(searchParam) {
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchParam}&include_adult=false&language=en-US&region=US&page=1`;

    try {
        const response = await axios.get(urlString, options);
        return response.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}