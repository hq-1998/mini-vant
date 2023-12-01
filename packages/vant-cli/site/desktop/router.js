import { createRouter, createWebHashHistory } from "vue-router";

function getRoutes() {
  const routes = [];
  const names = Object.keys(documents);

  console.log(names, '===names===');
  // names.forEach((name) => {
  //   const { component } = parseName(name);
  // });
}

export const router = createRouter({
  hostory: createWebHashHistory(),
  routes: getRoutes(),
});
