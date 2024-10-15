import { createRouter, createWebHistory } from "vue-router";
import Productos from "../views/Productos.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Testimonial from "../views/Testimonial.vue";
import WhyUs from "../views/WhyUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/productos",
      name: "productos",
      component: Productos,
    },
    {
      path: "/whyus",
      name: "whyus",
      component: WhyUs,
    },
    {
      path: "/testimonial",
      name: "testimonial",
      component: Testimonial,
    },
  ],
});

export default router;
