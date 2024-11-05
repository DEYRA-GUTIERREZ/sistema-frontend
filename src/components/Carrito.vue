<script setup>
import { onMounted, ref } from "vue";
import { useCarritoStore } from "@/store/carritoStore";
import axios from "axios";

const carritoStore = useCarritoStore();
const carritoAbiero = ref(false);
const metodoDePago = ref();

const cerrarCarrito = () => {
  carritoAbiero.value = false;
};
const abrirCarrito = () => {
  carritoAbiero.value = true;
};

const completarVenta = () => {
  console.log("completarVenta");
  axios.post(
    "http://localhost/sistema/endpoints/productos/finalizarCompra.php",
    {
      productos: carritoStore.productos,
      test: "sebas",
    }
  );
};
</script>

<template>
  <div class="icono-carrito" v-if="!carritoAbiero" @click="abrirCarrito()">
    carrito
  </div>
  <div class="modal-carrito" v-if="carritoAbiero">
    <div class="cabecera-carrito">
      <a class="boton-cerrar" @click="cerrarCarrito()">X</a>
    </div>
    <h3>carrito</h3>
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
  <div>
    <div>
      <h4>Metodo de pago</h4>
      <select name="" id="" v-model="metodoDePago">
        <option value="tarjeta">Tarjeta de debito/credito</option>
        <option value="qr">QR</option>
      </select>
      <div v-if="metodoDePago === 'tarjeta'">
        <div>
          <label for="">Nuero de la tarjeta</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Codigo cvv</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Nombre completo</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Direccion</label>
          <input type="text" />
        </div>
      </div>
      <div v-if="metodoDePago === 'qr'">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Codigo_QR.svg"
          alt=""
        />
      </div>
    </div>
    <button @click="completarVenta">Completar la venta</button>
  </div>
</template>
