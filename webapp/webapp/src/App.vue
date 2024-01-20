<template>
  <h1 class="header">Movie Search</h1>
  <div class="search">
    <div class="searchBox">
      <v-text-field placeholder="Search by title" v-model="search"></v-text-field>
    </div>
    <div class="searchBtn">
      <v-btn @click="searchMovies">Search</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getMovies} from "@/main";

let search: string = '';
  async function searchMovies() {
    console.log(search);
    if (search === '') {
      alert('Please enter a movie title');
      return;
    }

    await getMovies(search);

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
