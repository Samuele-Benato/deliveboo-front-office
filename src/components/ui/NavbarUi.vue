<script>
export default {
  props: {
    cartItemCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template>
  <nav
    class="navbar bg-dark navbar-expand-lg bg-body-tertiary"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <router-link
        class="navbar-brand ms-2 d-flex align-items-center justify-content-center"
        :to="{ name: 'home' }"
      >
        <img class="logo" src="img/logo.png" alt="Logo" />
        <span class="ms-2 fw-bold">Deliveboo</span>
      </router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'about' }"
            >
              Il nostro Team
            </router-link>
          </li>
          <!-- eventuali router link -->
        </ul>
        <div class="navbar-nav ms-auto">
          <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"></div> -->
          <li class="nav-item me-3">
            <router-link
              class="nav-link"
              :class="$route.name == 'Cart' ? 'active' : ''"
              aria-current="page"
              :to="{ name: 'Cart' }"
            >
              <i class="h2">🛒</i>
              <span
                v-if="$store.state.cart.length > 0"
                class="align-items-center justify-content-center translate-middle badge rounded-pill bg-secondary"
              >
                {{ $store.state.cart.length }}
              </span>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 80px;
  position: fixed !important;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

  box-shadow: 3px 3px 3px 3px #222;
}
.logo {
  width: 50px;
}
</style>
<!-- v-if="$store.state.cart.length > 0" -->
