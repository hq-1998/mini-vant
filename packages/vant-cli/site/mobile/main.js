import { createApp } from 'vue';

const app = createApp(App);
app.use(router);

app.mount('#app');
window.app = app;