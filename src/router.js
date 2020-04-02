import Vue from "vue";
import Router from "vue-router";

// Page content
import Home from "@/pages/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
});
