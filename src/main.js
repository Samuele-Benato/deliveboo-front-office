import { createApp } from 'vue'
import './style.scss'
import {router} from './router'

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
import { faHouse ,faPhone, faLocationDot, faUtensils, faArrowRight, faAddressCard, faLink, faUserTie} from '@fortawesome/free-solid-svg-icons'
/* import specific brand icons */
import { faLinkedinIn, faVuejs, faLaravel, faGithub } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(faHouse,faPhone , faLocationDot, faUtensils ,faArrowRight, faAddressCard, faLink, faUserTie, faLinkedinIn, faVuejs, faLaravel, faGithub)

import App from './App.vue'

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

