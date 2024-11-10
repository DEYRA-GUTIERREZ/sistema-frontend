import { createRouter, createWebHistory } from "vue-router";
import Productos from "../views/Productos.vue";
import Inicio from "../views/Inicio.vue";
import Nosotros from "../views/Nosotros.vue";
import CarritoPage from "../views/CarritoPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
    },
    {
      path: "/nosotros",
      name: "nosotros",
      component: Nosotros,
    },
    {
      path: "/productos",
      name: "productos",
      component: Productos,
    },
    {
      path: "/carrito",
      name: "carrito",
      component: CarritoPage,
    },
  ],
});

export default router;
