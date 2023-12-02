<template>

  <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
        <div class="col-3">
          <div class="center-content ">
            <img class="logo" src="img/logo.png" alt="Logo"> 
            <h3 class="ms-2 col-title">Deliveboo<br>Authors :</h3>
          </div>
          <div class="center-content">
            <span class="links my-2">
              <a href="https://github.com/Samuele-Benato/deliveboo-front-office/graphs/contributors">
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
                Frontend
                <font-awesome-icon :icon="['fab', 'vuejs']" />
              </a>
            </span>
          </div>
          <div class="center-content">
            <span class="links my-2">
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
          <p>
            Questo progetto rappresenta il successo del corso intensivo presso l'Accademia Boolean Careers, progettato per avviare chiunque, anche senza esperienza, nel mondo della tecnologia. 
            In 700 ore, il programma copre lo sviluppo web front-end e back-end, partendo da zero.
             Dalla creazione di pagine web in HTML e CSS, si progredisce all'aggiunta di interattività con JavaScript, gestione di database con MySQL e l'utilizzo di framework come Laravel e VueJs.
          </p>
        </div>
  	 	</div>
  	 </div>
  </footer>
</template>

<style scoped lang="scss">
.footer{
	background-color: #222;
  padding: 70px 0;
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
}
.links{
  color: #dadada;
  font-weight: 600;
  font-size: 1.25rem;
  display: block;
}
.links a{
  text-decoration: none;
  color: #dadada;
  margin-right: 10px;
}
</style>