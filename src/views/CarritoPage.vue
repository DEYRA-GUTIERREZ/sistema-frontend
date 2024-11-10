<script setup>
import axios from "axios";
import { computed, ref } from "vue";
import { useCarritoStore } from "@/store/carritoStore";

const metodoDePago = ref();
const infoVenta = ref({});
const carritoStore = useCarritoStore();

const totalAPagar = computed(() => {
  let total = 0;
  carritoStore.productos.forEach((item) => {
    total += item.cantidad * item.precio_producto;
  });
  return total;
});

const completarVenta = async () => {
  console.log("completarVenta");
  await axios.post(
    "http://localhost/sistema/endpoints/productos/finalizarCompra.php",
    {
      productos: carritoStore.productos,
      test: "sebas",
    }
  );
  carritoStore.borrarProductos();
  infoVenta.value = {};
};
</script>

<template>
  <h3 style="text-align: center; margin: 10px">Productos seleccionados</h3>
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
    <hr />
    <div>
      <h4 style="text-align: end">Total: {{ totalAPagar }}</h4>
    </div>
  </div>
  <div>
    <div>
      <h5 style="text-align: center; margin-bottom: 50px">
        Metodo de pago
        <span style="margin-right: 30px"></span>
        <select name="" id="" v-model="metodoDePago">
          <option value="tarjeta">Tarjeta de debito/credito</option>
          <option value="qr">QR</option>
        </select>
      </h5>
      <div style="display: flex; justify-content: center">
        <div v-if="metodoDePago === 'tarjeta'">
          <div class="form-group">
            <label class="control-label">Numero de tarjeta</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <input
                  placeholder="123456789"
                  class="form-control"
                  type="text"
                  v-model="infoVenta.numero_tarjeta"
                />
              </div>
            </div>
          </div>

          <!-- Text input-->

          <div class="form-group">
            <label class="control-label">Codigo cvv</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-user"></i
                ></span>
                <input
                  placeholder="codigo cvv"
                  class="form-control"
                  type="text"
                  v-model="infoVenta.codigo_cvv"
                />
              </div>
            </div>
          </div>

          <!-- Text input-->
          <div class="form-group">
            <label class="control-label">Nombre completo</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-envelope"></i
                ></span>
                <input
                  placeholder="Nombre completo"
                  class="form-control"
                  type="text"
                  v-model="infoVenta.nombre_completo"
                />
              </div>
            </div>
          </div>

          <!-- Text input-->

          <div class="form-group">
            <label class="control-label">Direccion</label>
            <div class="inputGroupContainer">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="glyphicon glyphicon-earphone"></i
                ></span>
                <input
                  placeholder="Direccion"
                  class="form-control"
                  type="text"
                  v-model="infoVenta.direccion"
                />
              </div>
            </div>
          </div>
        </div>

        <div v-if="metodoDePago === 'qr'">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/Codigo_QR.svg"
            alt=""
            width="200px"
            height="200px"
          />
        </div>
      </div>
      <div style="display: flex; justify-content: center; margin-top: 50px">
        <button @click="completarVenta">Completar la venta</button>
      </div>
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
  margin: auto;
}

.img-container {
  width: 60px;
  height: 60px;
}
</style>
