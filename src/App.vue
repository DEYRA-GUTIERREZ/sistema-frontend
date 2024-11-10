<script setup>
import { RouterLink, RouterView } from "vue-router";
import Carrito from "./components/Carrito.vue";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="">
    <!-- header section strats -->
    <header class="header_section">
      <div class="header_top">
        <div class="container-fluid">
          <div class="top_nav_container">
            <div class="user_option_box">
              <!-- <a
                href="http://localhost/sistema/producto_inicio.php"
                class="account-link"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
                <span> My Account </span>
              </a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span> JMC </span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <RouterLink class="nav-item" to="/" activeClass="active">
                  <!-- <a class="nav-link" href="index.html"
                    >Home <span class="sr-only">(current)</span></a
                  > -->
                  <a class="nav-link">
                    Inicio
                    <span class="sr-only">(current)</span>
                  </a>
                </RouterLink>
                <RouterLink
                  class="nav-item"
                  to="/nosotros"
                  activeClass="active"
                >
                  <!-- <a class="nav-link" href="about.html"> About</a> -->
                  <a class="nav-link"> Acerca de nosotros </a>
                </RouterLink>
                <RouterLink
                  class="nav-item"
                  to="/productos"
                  activeClass="active"
                >
                  <!-- <a class="nav-link" href="product.html">Products</a> -->
                  <a class="nav-link"> Productos </a>
                </RouterLink>
                <RouterLink class="nav-item" to="/carrito" activeClass="active">
                  <a class="nav-link"> Carrito </a>
                </RouterLink>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!-- end header section -->
  </div>
  <div class="contenedor-principal">
    <RouterView />
    <div class="contenedor-carrito">
      <Carrito />
    </div>
  </div>
  <!-- footer section -->
  <footer class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> Todos los derechos reservados por
        JVMC
      </p>
    </div>
  </footer>
  <!-- footer section -->
</template>

<style scoped></style>
