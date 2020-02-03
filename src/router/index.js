import Vue from "vue";
import VueRouter from "vue-router";
import DragonRaja from "../views/DragonRaja.vue";
import DragonRajaGuide from "../views/DragonRajaGuide.vue";
import Member from "../views/Member.vue";
import Community from "../views/Community.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dragonraja",
    name: "dragonraja",
    component: DragonRaja
  },
  {
    path: "/member",
    name: "member",
    component: Member
  },
  {
    path: "/dragonraja-guide",
    name: "dragonraja-guide",
    component: DragonRajaGuide
  },
  {
    path: "/community",
    name: "community",
    component: Community
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
