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
            <div class="contact_nav">
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span> Call : +01 123455678990 </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span> Email : demo@gmail.com </span>
              </a>
            </div>
            <from class="search_form">
              <input
                type="text"
                class="form-control"
                placeholder="Search here..."
              />
              <button class="" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </from>
            <div class="user_option_box">
              <a
                href="http://localhost/sistema/producto_inicio.php"
                class="account-link"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
                <span> My Account </span>
              </a>
              <a href="" class="cart-link">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span> Cart </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container">
            <a class="navbar-brand" href="index.html">
              <span> Minics </span>
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
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </RouterLink>
                <RouterLink class="nav-item" to="/about" activeClass="active">
                  <!-- <a class="nav-link" href="about.html"> About</a> -->
                  <a class="nav-link"> About </a>
                </RouterLink>
                <RouterLink
                  class="nav-item"
                  to="/productos"
                  activeClass="active"
                >
                  <!-- <a class="nav-link" href="product.html">Products</a> -->
                  <a class="nav-link"> Productos </a>
                </RouterLink>
                <RouterLink class="nav-item" to="/whyus" activeClass="active">
                  <!-- <a class="nav-link" href="why.html">Why Us</a> -->
                  <a class="nav-link"> Why Us </a>
                </RouterLink>
                <RouterLink
                  class="nav-item"
                  to="/testimonial"
                  activeClass="active"
                >
                  <!-- <a class="nav-link" href="testimonial.html">Testimonial</a> -->
                  <a class="nav-link"> Testimonial </a>
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
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
  <!-- footer section -->
</template>

<style scoped></style>
