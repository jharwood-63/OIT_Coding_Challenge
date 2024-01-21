const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8080;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.ACCESS_TOKEN
    }
};

app.use(cors());

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
        // console.log(response.data.results);
        let movieResponse = [];
        const imageUrlPrefix = "https://image.tmdb.org/t/p/original";
        for (let i = 0; i < 10; i++) {
            if (i > response.data.results.length-1) {
                break;
            }
            const movie = response.data.results[i];
            console.log('movie ', i, movie)
            const popSum = `${movie.popularity} out of ${movie.vote_count}`;

            movieResponse.push({
                movie_id: movie.id,
                title: movie.title,
                poster_image_url: imageUrlPrefix + movie.poster_path,
                popularity_summary: popSum
            });
        }

        return movieResponse;
    } catch (error) {
        console.log(error);
        return false;
    }
}