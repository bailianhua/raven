import Vue from "vue";
import VueRouter from "vue-router";
import DragonRaja from "../views/DragonRaja.vue";
import DragonRajaGuide from "../views/DragonRajaGuide.vue";
import DragonRajaClassGuide from "../views/DragonRajaClassGuide.vue";
import Community from "../views/Community.vue";
import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/dragonraja",
    name: "dragonraja",
    component: DragonRaja
  },
  {
    path: "/member/adjust",
    name: "member",
    component: () => import("../views/Memberadjust.vue")
  },
  {
    path: "/member",
    name: "memberadjust",
    component: () => import("../views/Member.vue")
  },
  {
    path: "/dragonraja-guide",
    name: "dragonraja-guide",
    component: DragonRajaGuide
  },
  {
    path: "/dragonraja-class-guide",
    name: "dragonraja-class-guide",
    component: DragonRajaClassGuide
  },
  {
    path: "/community",
    name: "community",
    component: Community
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/raven/",
  routes
});

export default router;
