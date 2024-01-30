<template>
  <div class="footer-background">
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="mb-4 col-6 col-md-3">
            <div class="center-content">
              <!-- <img class="logo" src="img/logo.png" alt="Logo" /> -->

              <h3 class="ms-2 col-title">Deliveboo<br />Authors :</h3>
            </div>
            <div class="center-content">
              <span class="links mt-2">
                <a
                  href="https://github.com/Samuele-Benato/deliveboo-front-office/graphs/contributors"
                >
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                  Frontend
                  <font-awesome-icon :icon="['fab', 'vuejs']" />
                </a>
              </span>
            </div>
            <div class="center-content">
              <span class="links">
                <a
                  href="https://github.com/Samuele-Benato/deliveboo-back-office/graphs/contributors"
                >
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                  Backend
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                </a>
              </span>
            </div>
          </div>
          <div class="mb-4 col-6 col-md-3">
            <h3 class="col-title">Link Veloci :</h3>
            <ul class="list-group">
              <li class="links">
                <router-link :to="{ name: 'home' }">
                  <font-awesome-icon :icon="['fas', 'house']" />
                  Home
                </router-link>
              </li>
              <li class="links my-1">
                <router-link :to="{ name: 'home' }">
                  <font-awesome-icon :icon="['fas', 'utensils']" />
                  Ristoranti
                </router-link>
              </li>
              <li class="links">
                <router-link :to="{ name: 'about' }">
                  <font-awesome-icon :icon="['fas', 'address-card']" />
                  Il nostro team
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <h3 class="col-title">Descrizione :</h3>
            <p class="footer-description">
              Questo progetto rappresenta la conclusione del nostro percorso
              presso
              <a
                class="description-link"
                href="https://boolean.careers/corso/full-stack-web-development"
              >
                <font-awesome-icon :icon="['fas', 'link']" />
                <span class="ms-1">Boolean Careers</span>
              </a>
              una prestigiosa accademia tech che permette a chiunque di
              approcciarsi al web development partendo dalla creazione di pagine
              web in HTML and CSS, si progredisce all'aggiunta di interattività
              con JavaScript, gestione di database con MySQL e l'utilizzo di
              framework come Laravel e VueJs.
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      Copyright © 2024 Boolean classe 103 team 5. Tutti i diritti riservati.
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-background {
  background-image: url("/img/footer-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
}
.footer-background:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 93%;
  background-color: rgba($color: #222, $alpha: 1);
}
.copyright {
  text-align: center;
  background-color: rgba($color: #222, $alpha: 1);
  color: #dadada;
  padding: 3px 0;
  font-size: 0.9rem;
}
.footer {
  padding: 2rem 0;
  min-width: 420px;
  background-color: rgba($color: #000, $alpha: 0.9);
}
.center-content {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 3;
}
.logo {
  width: 50px;
}

.col-title {
  color: #dadada;
  font-weight: 700;
  font-size: 1.25rem;
  padding-top: 1rem;
}
.links {
  color: #dadada;
  font-weight: 600;
  font-size: 1rem;
  display: block;
}
.links:hover {
  transform: scale(1.1);
  transition: 0.2s linear;
}
.links a {
  text-decoration: none;
  color: #dadada;
  margin-right: 10px;
}
.footer-description {
  color: #dadada;
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
}
.description-link {
  color: #dadada;
}
</style>
