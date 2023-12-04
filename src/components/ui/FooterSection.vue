<template>
<div class="footer-background">
  <footer class="footer">
  	<div class="container">
  	 	<div class="row">
        <div class="col-3">
          <div class="center-content ">
            <img class="logo" src="img/logo.png" alt="Logo"> 
            <h3 class="ms-2 col-title">Deliveboo<br>Authors :</h3>
          </div>
          <div class="center-content">
            <span class="links mt-2">
              <a href="https://github.com/Samuele-Benato/deliveboo-front-office/graphs/contributors">
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                Frontend
                <font-awesome-icon :icon="['fab', 'vuejs']" />
              </a>
            </span>
          </div>
          <div class="center-content">
            <span class="links">
              <a href="https://github.com/Samuele-Benato/deliveboo-back-office/graphs/contributors">
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                Backend
                <font-awesome-icon :icon="['fab', 'laravel']" />
              </a>
            </span>
          </div>
  	 		</div>
        <div class="col-3">
          <h3 class="col-title">Quick Links :</h3>
          <ul class="list-group">
            <li class="links ">
              <a href="#">
                <font-awesome-icon :icon="['fas', 'house']" />
                Home
              </a>
            </li>
            <li class="links my-1">
              <a href="#type">
                <font-awesome-icon :icon="['fas', 'utensils']" />
                Restaurants
              </a>
            </li>
            <li class="links">
              <a href="#">
                <font-awesome-icon :icon="['fas', 'address-card']" />
                About us
              </a>
            </li>
          </ul>
        </div>
        <div class="col-6">
          <h3 class="col-title">Description :</h3>
          <p class="footer-description">
            Questo progetto rappresenta la conclusione del nostro percorso presso 
            <a class="description-link" href="https://boolean.careers/corso/full-stack-web-development">
              <font-awesome-icon :icon="['fas', 'link']" />
              <span class="ms-1">Boolean Carrers</span>
            </a>
            una prestigiosa accademia tech che permette a chiunque di approcciarsi al web developement partendo 
            dalla creazione di pagine web in HTML e CSS, si progredisce all'aggiunta di interattività con JavaScript, gestione di database con MySQL e l'utilizzo di framework come Laravel e VueJs.
          </p>
        </div>
  	 	</div>
  	</div>
  </footer>
</div>
</template>

<style scoped lang="scss">
.footer-background{
  background-image: url("img/footer-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.footer{
  padding: 3rem 0;
  background-color: rgba($color: #000, $alpha: 0.9);
}
.center-content{
  display: flex;
  align-items: center;
  justify-content: start;
}
.logo{
  width: 50px
}

.col-title{
  color: #dadada;
  font-weight: 700;
  font-size: 1.25rem;
}
.links{
  color: #dadada;
  font-weight: 600;
  font-size: 1rem;
  display: block;
}
.links:hover{
  transform: scale(1.1);
  transition: 0.2s linear;
}
.links a{
  text-decoration: none;
  color: #dadada;
  margin-right: 10px;
}
.footer-description{
  color: #dadada;
  font-weight: 600;
  font-size: 1rem;
}
.description-link{
  color: #dadada;
}
</style>