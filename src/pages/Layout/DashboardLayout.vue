<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!--<notifications></notifications>-->
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/orders">
        <md-icon>reorder</md-icon>
        <p>All Orders</p>
      </sidebar-link>
      <sidebar-link to="/drivers-online">
        <md-icon>moped</md-icon>
        <p>Drivers online</p>
      </sidebar-link>
      <sidebar-link to="/special-order">
        <md-icon>moped</md-icon>
        <p>Special order</p>
      </sidebar-link>
      <sidebar-link to="/repayment">
        <md-icon>moped</md-icon>
        <p>Remboursement clients</p>
      </sidebar-link>
      <sidebar-link to="/drivers">
        <md-icon>moped</md-icon>
        <p>Drivers</p>
      </sidebar-link>
      <sidebar-link to="/">
        <md-icon>storefront</md-icon>
        <p>Commerces</p>
      </sidebar-link>
      <sidebar-link to="/categories">
        <md-icon>category</md-icon>
        <p>Categories</p>
      </sidebar-link>
      <sidebar-link to="/products">
        <md-icon>star</md-icon>
        <p>Products</p>
      </sidebar-link>
      <sidebar-link to="/inbox">
        <md-icon>all_inbox</md-icon>
        <p>Chat clients</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <!--<fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>-->

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
//import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    //FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  }
};
</script>
