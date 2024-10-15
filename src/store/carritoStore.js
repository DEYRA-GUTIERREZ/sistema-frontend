// stores/counterStore.js
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useCarritoStore = defineStore("Carrito", {
  state: () => ({
    // count: 0,
    productos: [],
  }),
  actions: {
    // increment() {
    //   this.count++;
    // },
    // setCount(newCount) {
    //   this.count = newCount;
    // },
    agregarProducto(producto) {
      const nuevoProducto = { ...producto, idCarrito: uuidv4() };
      this.productos.push(nuevoProducto);
    },
    borrarProducto(idCarrito) {
      this.productos = this.productos.filter(
        (item) => item.idCarrito != idCarrito
      );
    },
  },
});
