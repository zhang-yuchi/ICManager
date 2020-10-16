import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import ElementUI from "element-ui";
import "assets/css/theme/index.css";

import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import messages from "./lang/index";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh",
  messages,
});
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
