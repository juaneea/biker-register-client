import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/views/Landing";
import RoomCatalog from "@/views/RoomCatalog";
import ReservationForm from "@/views/ReservationForm";
import Fares from "@/views/Fares";
import Services from "@/views/Services";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: Landing,
  },
  {
    path: "/habitaciones",
    name: "RoomCatalog",
    component: RoomCatalog,
  },
  {
    path: "/reservaciones",
    name: "ReservationForm",
    component: ReservationForm,
  },
  {
    path: "/tarifas",
    name: "FaresSection",
    component: Fares,
  },
  {
    path: "/servicios",
    name: "ServicesSection",
    component: Services,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
