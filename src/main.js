// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import CaAccordian from '../components/CaAccordian';
import CaLoading from '../components/CaLoading';
import CaButton from '../components/CaButton';
import CaPagination from '../components/CaPagination';
import CaCheckbox from '../components/CaCheckbox';
import CaDropdown from '../components/CaDropdown';
import CaRadio from '../components/CaRadio';
import CaBreadcrumb from '../components/CaBreadcrumb';
import CaCodeSnippet from '../components/CaCodeSnippet';
import CaContentSwithcher from '../components/CaContentSwitcher';

require('carbon-components/css/carbon-components.css');

Vue.config.productionTip = false;

Vue.use(CaAccordian);
Vue.use(CaLoading);
Vue.use(CaButton);
Vue.use(CaPagination);
Vue.use(CaCheckbox);
Vue.use(CaDropdown);
Vue.use(CaRadio);
Vue.use(CaBreadcrumb);
Vue.use(CaCodeSnippet);
Vue.use(CaContentSwithcher);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
