<template>
  <div class="about-background">
    <div class="about-container">
      <div class="mobile">
        <span class="about-title">Team 5 classe #103</span>
      </div>
      <div class="row one">
        <div class="card">
          <img
            class="samuele-white"
            src="/img/team/samuele-white.jpg"
            alt="Samuele Benato"
          />
          <img
            class="samuele-black"
            src="/img/team/samuele.png"
            alt="Samuele Benato"
          />
          <div class="info">
            <h2>Samuele Benato</h2>
            <p>
              Mi definisco un ragazzo caparbio ed intraprendente, motivarmi e
              motivare è il mio punto di forza.
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/samuele-benato-a9615a29b/"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
              <a href="https://github.com/Samuele-Benato"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
              <a href="https://samuele-benato.github.io/portfolio/#/"
                ><font-awesome-icon :icon="['fas', 'user-tie']"
              /></a>
            </div>
          </div>
        </div>

        <div class="col-3 text-center desktop">
          <span class="about-title">Team 5 classe #103</span>
        </div>

        <div class="card">
          <img src="/img/team/pasquale.webp" alt="Pasquale Cicinelli" />
          <div class="info">
            <h2>Pasquale Cicinelli</h2>
            <p>
              Sono un ragazzo che persiste con forza, ma mai si arrende: la
              determinazione è la chiave del mio successo.
            </p>
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/pasquale-cicinelli-64885b174/"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
              <a href="https://github.com/pasqualecicinelli"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="row two">
        <div class="card">
          <img src="/img/team/filippo.webp" alt="Filippo Tartaglia" />
          <div class="info">
            <h2>Filippo Tartaglia</h2>
            <p>
              sono un ragazzo semplice ma testardo, voglio sempre arrivare
              all'obbiettivo che mi sono prefissato
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/filippo-tartaglia-4b8382284/"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
              <a href="https://github.com/TartagliaFilippo"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="/img/team/alessandro.webp" alt="Alessandro Angelelli" />
          <div class="info">
            <h2>Alessandro Angelelli</h2>
            <p>
              Pronto a contribuire attivamente e con successo a nuove sfide
              professionali.
            </p>
            <div class="social-links">
              <a
                href="https://www.linkedin.com/in/alessandro-angelelli-9514b827b/"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
              <a href="https://github.com/Alessandroang"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="/img/team/vincenzo.webp" alt="Vincenzo Marcello" />
          <div class="info">
            <h2>Vincenzo Marcello</h2>
            <p>
              Internet ha cambiato il mondo, nel mio piccolo voglio contribuire
              a questo cambiamento !
            </p>
            <div class="social-links">
              <a href="https://www.linkedin.com/in/vincenzo-marcello-1552972a0/"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
              <a href="https://github.com/VincenzoMarcello"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-background {
  background-image: url("/img/about-background.jpg");
  background-size: 100%;
  background-size: cover;
  background-position: start;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 72vh;
}
.about-container {
  background-color: rgba($color: #000, $alpha: 0.7);
  width: 100%;
  min-width: 400px;
  height: 100%;
  min-height: 72vh;
  padding-top: 8rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.about-title {
  font-size: 2rem;
  padding: 0.5rem;
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0) 0%,
    rgba(34, 34, 34, 0.6) 20%,
    rgba(34, 34, 34, 0.9) 50%,
    rgba(34, 34, 34, 0.6) 80%,
    rgba(34, 34, 34, 0) 100%
  );
  color: #d7d3d3;
  font-weight: 700;
}
.row {
  align-items: center;
}
.one {
  justify-content: center;
}
.two {
  justify-content: space-around;
}
.card {
  width: 300px;
  aspect-ratio: 1;
  border-radius: 15px;
  margin: 2rem 0;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
}

.card:hover {
  transform: translateY(-20px);
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}
.card:hover:before {
  opacity: 1;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}
.info {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
}
.social-links a:hover {
  color: #24262b;
  background-color: #ffffff;
}
p {
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
  font-weight: 500;
}

.mobile {
  display: none;
}

.samuele-white {
  display: none;
}

@media only screen and (max-width: 992px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
  .one {
    justify-content: space-around;
  }
}

@media (max-width: 939px) {
  .samuele-white {
    display: block;
  }
  .samuele-black {
    display: none;
  }
}
</style>
