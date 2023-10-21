import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.scss';
import App from './app.vue';

  createApp(App)
    .use(createPinia())
    .mount('#app');

