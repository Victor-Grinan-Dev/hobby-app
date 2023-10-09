import { createApp } from "vue";
// import { defineAsyncComponent } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";

import MainBtn from "./components/appBtn/MainBtn.vue";
import AppDialog from "./components/appDialog/appDialog.vue";
const app = createApp(App);

// const AppDialog = defineAsyncComponent(() =>
//   import("./components/appDialog/AppDialog.vue")
// );

app.component("main-btn", MainBtn);
app.component("app-dialog", AppDialog);

/**
app.component("app-card", AppCard);
app.component("app-button", AppButton);
app.component("app-spinner", AppSpinner);
app.component("app-dialog", AppDialog);
*/

app.use(store);
app.use(router);
app.mount("#app");
