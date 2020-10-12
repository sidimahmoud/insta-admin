// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./bootstrap');
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { 
  Button,
  Collapse,
  CollapseItem,
  Row,
  Col,
  Pagination
} from 'element-ui';
Vue.use(Button);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Pagination);

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7rm1TvaEdv_Tl3StaVbID85z7E8yHaog",
    authDomain: "instantavite-1ea10.firebaseapp.com",
    databaseURL: "https://instantavite-1ea10.firebaseio.com",
    projectId: "instantavite-1ea10",
    storageBucket: "instantavite-1ea10.appspot.com",
    messagingSenderId: "790349346690",
    appId: "1:790349346690:web:d4cd485a135e76251a419b",
    measurementId: "G-17RDSYV94J"
};
firebase.initializeApp(firebaseConfig);

//sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)
Vue.use(VueSweetalert2);

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAmGhfMkVv6jEXF4xdtxQZbYJrlqAKokSE',
    libraries: 'places',
  },
})
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(Paginate)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
});
