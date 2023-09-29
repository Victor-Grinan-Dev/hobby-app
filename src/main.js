import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";

import MainBtn from "./components/appBtn/MainBtn.vue";

const app = createApp(App);

app.component("main-btn", MainBtn);

app.use(store);
// app.use(router);
app.mount("#app");
