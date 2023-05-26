import "./assets/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import SectionContainer from "./components/UI/SectionContainer.vue";
import App from "./App.vue";
// import router from "./router";

const app = createApp(App);
app.component("section-container", SectionContainer);
app.use(createPinia());
// app.use(router);

app.mount("#app");
// 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
