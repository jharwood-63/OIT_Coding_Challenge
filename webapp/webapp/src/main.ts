/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import axios from 'axios';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

async function getMovies(searchParam: string) {
  const url = `http://localhost:8080/movies?search=${searchParam}`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export {getMovies};
