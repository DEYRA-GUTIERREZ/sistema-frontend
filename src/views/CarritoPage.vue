<script setup>
import { computed } from "vue";
import { useCarritoStore } from "@/store/carritoStore";

const carritoStore = useCarritoStore();

const totalAPagar = computed(() => {
  let total = 0;
  carritoStore.productos.forEach((item) => {
    total += item.cantidad * item.precio_producto;
  });
  return total;
});
</script>

<template>
  <h3>Carrito</h3>
  <div class="table-container">
    <table>
      <tbody>
        <tr>
          <th>Nro</th>
          <th>Foto</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Precio/U</th>
          <th>Suntotal</th>
          <th>Aciones</th>
        </tr>
        <tr v-for="(producto, index) in carritoStore.productos">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="img-container">
              <img :src="producto.url_imagen" alt="" style="width: 100%" />
            </div>
          </td>
          <td>
            <div>
              {{ producto.modelo_producto }}
            </div>
            <div>
              {{ producto.descripcion_producto }}
            </div>
          </td>
          <td>{{ producto.cantidad }}</td>
          <td>{{ producto.precio_producto }}</td>
          <td>{{ producto.cantidad * producto.precio_producto }}</td>
          <td>
            <button
              @click="carritoStore.aumentarCantidad(producto.id_producto, 1)"
            >
              +
            </button>
            <button
              @click="carritoStore.aumentarCantidad(producto.id_producto, -1)"
            >
              -
            </button>
            <button @click="carritoStore.borrarProducto(producto.idCarrito)">
              borrar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <h3>Total: {{ totalAPagar }}</h3>
    </div>
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.table-container {
  max-width: 800px;
  padding: 10px;
}

.img-container {
  width: 60px;
  height: 60px;
}
</style>
