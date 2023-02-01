import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "@fontsource/merriweather";
import "@fontsource/inter/500.css";
import "@/assets/icons/style.scss";
import "@/assets/const.scss";
import "@/assets/root.scss";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
