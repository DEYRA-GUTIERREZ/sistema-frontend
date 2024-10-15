<script setup>
import { onMounted, ref, toRaw } from "vue";
import axios from "axios";
import { useCarritoStore } from "@/store/carritoStore";

const carritoStore = useCarritoStore();
const productos = ref([]);

const initialize = async () => {
  const { data } = await axios.get(
    "http://localhost/sistema/endpoints/productos/list.php"
  );
  productos.value = data;
};

const agregarACarrito = (producto) => {
  const objetoProducto = toRaw(producto);
  console.log("agregar carrito", objetoProducto);
  carritoStore.agregarProducto(objetoProducto);
};

onMounted(() => initialize());
</script>

<template>
  <div>
    <!-- product section -->

    <section class="product_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Nuestros Productos</h2>
        </div>
        <div class="row">
          <div
            class="col-sm-6 col-lg-4"
            v-for="producto in productos"
            :key="producto.id_producto"
          >
            <div class="box">
              <div class="img-box">
                <img :src="producto.url_imagen" alt="" />
                <a class="add_cart_btn" @click="agregarACarrito(producto)">
                  <span> Add To Cart </span>
                </a>
              </div>
              <div class="detail-box">
                <h5>{{ producto.modelo_producto }}</h5>
                <div class="product_info">
                  <h5>{{ producto.precio_producto }}<span>Bs</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn_box">
          <a href="" class="view_more-link"> View More </a>
        </div>
      </div>
    </section>

    <!-- end product section -->

    <!-- info section
    <section class="info_section">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info_contact">
              <h5>
                <a href="" class="navbar-brand">
                  <span> Minics </span>
                </a>
              </h5>
              <p>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                Address
              </p>
              <p>
                <i class="fa fa-phone" aria-hidden="true"></i>
                +01 1234567890
              </p>
              <p>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                demo@gmail.com
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_info">
              <h5>Information</h5>
              <p>
                Eligendi sunt, provident, debitis nemo, facilis cupiditate velit
                libero dolorum aperiam enim nulla iste maxime corrupti ad illo
                libero minus.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_links">
              <h5>Useful Link</h5>
              <ul>
                <li>
                  <a href="index.html"> Home </a>
                </li>
                <li>
                  <a href="about.html"> About </a>
                </li>
                <li>
                  <a href="product.html"> Products </a>
                </li>
                <li>
                  <a href="why.html"> Why Us </a>
                </li>
                <li>
                  <a href="testimonial.html"> Testimonial </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_form">
              <h5>Newsletter</h5>
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </form>
              <div class="social_box">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- end info_section -->
  </div>
</template>
