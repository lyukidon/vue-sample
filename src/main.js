import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";

import { addIcons } from "oh-vue-icons";
import { FaBars, FaRegularUserCircle, BiXLg } from "oh-vue-icons/icons";

addIcons(FaBars,FaRegularUserCircle,BiXLg);

const app = createApp(App);
app.use(store);
app.mount("#app");
