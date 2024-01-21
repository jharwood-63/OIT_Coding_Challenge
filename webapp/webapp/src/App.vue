<template>
  <div>
    <h1 class="header">Movie Search</h1>
    <div class="search">
      <div class="searchBox">
        <v-text-field placeholder="Search by title" v-model="search"></v-text-field>
      </div>
      <div class="searchBtn">
        <v-btn @click="searchMovies">Search</v-btn>
      </div>
    </div>
    <h2>Search Results</h2>
    <v-data-table
      :items="movies">
    </v-data-table>
  </div>
</template>

<script lang="ts" setup>
import {getMovies} from "@/main";

let search: string = '';
let movies: Array<any> = [];
let errorMessage: string = '';
let isError: boolean = false;

  async function searchMovies() {
    console.log(search);
    if (search === '') {
      alert('Please enter a movie title');
      return;
    }
    const response = await getMovies(search);
    if (response != null) {
      movies = response;
      console.log(movies);
      // I know I am getting the movies back I just can't display them
    } else {
      errorMessage = 'Unable to search movies';
      isError = true;
    }

  }
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}

.search {
  display: flex;
  justify-content: center;
}

.searchBox {
  width: 20%;
}

.searchBtn {
  margin-top: .5%;
  margin-left: 2%;
}
</style>
