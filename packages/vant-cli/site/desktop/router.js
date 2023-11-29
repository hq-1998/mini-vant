import { createRouter, createWebHashHistory } from "vue-router";

function getRoutes() {
  const routes = [];
  const names = Object.keys(documents);
}

export const router = createRouter({
  hostory: createWebHashHistory(),
  routes: getRoutes(),
});
