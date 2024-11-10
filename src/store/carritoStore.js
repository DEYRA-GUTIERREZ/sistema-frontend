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
      const productoEncontrado = this.productos.find(
        (item) => item.id_producto === producto.id_producto
      );

      if (typeof productoEncontrado !== "undefined") {
        //en caso de que ya existe el producto en el carrito
        this.productos = this.productos.map((item) => {
          if (item.id_producto === productoEncontrado.id_producto) {
            return { ...item, cantidad: item.cantidad + 1 };
          } else {
            return item;
          }
        });
      } else {
        //en caso de que el producto no exista en el carrito
        const nuevoProducto = { ...producto, idCarrito: uuidv4(), cantidad: 1 };
        this.productos.push(nuevoProducto);
      }
    },
    borrarProducto(idCarrito) {
      this.productos = this.productos.filter(
        (item) => item.idCarrito != idCarrito
      );
    },
    aumentarCantidad(idProducto, cant) {
      this.productos = this.productos.map((item) => {
        if (item.id_producto === idProducto) {
          return { ...item, cantidad: item.cantidad + cant };
        } else {
          return item;
        }
      });
    },
    borrarProductos() {
      this.productos = [];
    },
  },
});
