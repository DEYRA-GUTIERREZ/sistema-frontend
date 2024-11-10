<script setup>
import { onMounted, ref } from "vue";
import { useCarritoStore } from "@/store/carritoStore";

const carritoStore = useCarritoStore();
const carritoAbiero = ref(false);

const cerrarCarrito = () => {
  carritoAbiero.value = false;
};
const abrirCarrito = () => {
  carritoAbiero.value = true;
};
</script>

<template>
  <div class="icono-carrito" v-if="!carritoAbiero" @click="abrirCarrito()">
    <img src="/images/carrito.png" alt="" width="40px" height="40px" />
  </div>
  <div class="modal-carrito" v-if="carritoAbiero">
    <div class="cabecera-carrito">
      <a class="boton-cerrar" @click="cerrarCarrito()">X</a>
    </div>
    <h5>Productos seleccionados</h5>
    <div>
      <div
        v-for="producto in carritoStore.productos"
        :key="producto.idCarrito"
        class="modal-carrito-producto"
      >
        <div>
          {{ producto.modelo_producto }}
          <span v-if="producto.cantidad >= 1">({{ producto.cantidad }})</span>
        </div>
        <a
          class="boton-borrar-producto"
          @click="carritoStore.borrarProducto(producto.idCarrito)"
        >
          borrar
        </a>
      </div>
    </div>
  </div>
</template>
