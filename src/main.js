import { createApp } from 'vue'
import App from './App.vue'


import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import Button from 'primevue/button';
import Card from 'primevue/card';

import 'primeflex/primeflex.css';
import Aura from '@primevue/themes/aura';


const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(PrimeVue, {theme: {
        preset: Aura
    }});
app.use(ToastService);
app.component('Button', Button);
app.component('Card', Card);

app.mount('#app')
