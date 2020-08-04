import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

//My routes
import OrdersPage from "@/pages/Orders/OrdersPage.vue";
import DriverPage from "@/pages/Drivers/DriverPage.vue";
import OrderDetails from "@/pages/Orders/OrderDetails.vue";
import OrderMap from "@/pages/Orders/OrderMap.vue";
import OrderCompose from "@/pages/Orders/OrderCompose.vue";
import ProductPage from "@/pages/Products/ProductPage.vue";
import ProductsCompose from "@/pages/Products/ProductsCompose.vue";
import CategoriesPage from "@/pages/Categories/CategoriesPage.vue";
import CategoriesCompose from "@/pages/Categories/CategoriesCompose.vue";
import LoginPage from "@/pages/UserProfile/LoginPage.vue";
import InboxPage from "@/pages/Inbox/InboxPage.vue";



const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      },
      //My routes
      {
        path: "orders",
        name: "Orders List",
        component: OrdersPage
      },
      {
        path: "drivers",
        name: "Drivers List",
        component: DriverPage
      },
      {
        path: "orders-details/:id",
        name: "Order Details Page",
        component: OrderDetails
      },
      {
        path: "orders-details/:id/map",
        name: "Order Details map page",
        component: OrderMap
      },
      {
        path: "add-order",
        name: "Create Order",
        component: OrderCompose
      },
      {
        path: "products",
        name: "products page",
        component: ProductPage
      },
      {
        path: "add-product",
        name: "Create products",
        component: ProductsCompose
      },
      {
        path: "categories",
        name: "categories page",
        component: CategoriesPage
      },
      {
        path: "add-categorie",
        name: "Create categories",
        component: CategoriesCompose
      },
      {
        path: "inbox",
        name: "Inbox page",
        component: InboxPage
      },
      
    ]
  },
  {
    path: "/login",
    name: "",
    component: LoginPage
  },
];

export default routes;
