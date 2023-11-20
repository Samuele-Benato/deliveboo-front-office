import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Puoi importare solo i componenti che ti servono, ad esempio:
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/dropdown';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

