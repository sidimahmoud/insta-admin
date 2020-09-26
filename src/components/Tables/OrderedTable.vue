<template>
  <div>
    <md-table v-model="orders" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Order number">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.created_at }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.booker_name }}</md-table-cell>
        <md-table-cell md-label="Total Order">${{ item.amount }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.status_id }}</md-table-cell>
        <md-table-cell md-label="Mobile">{{ item.mobile }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Actions">
          <el-button
            class="circle b"
            type="success"
            title="Details"
            @click.stop="handleEdit(item)"
            size="mini"
            icon="el-icon-info"
          >
          </el-button>
          <el-button
            class="circle b"
            type="danger"
            title="Details"
            @click.stop="handleEdit(item)"
            size="mini"
            icon="el-icon-delete"
          >
          </el-button>
        </md-table-cell>
      </md-table-row>
    </md-table>

<!--     <paginate
      :page-count="count_orders"
      :page-range="per_page"
      :click-handler="clickHandler"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :containerClass="'pagination'">
    </paginate> -->
    <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :page-size="per_page"
        :page-sizes="[15, 20, 50, 100, 200]"
        :total="count_orders"
        :current-page="current_page"
        @current-change="reloadList"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      orders: [],
      per_page: '',
      count_orders: '',
      current_page: 1
    };
  },
  /*
  |--------------------------------------------------------------------------
  | Component > methods
  |--------------------------------------------------------------------------
  */
  methods:{
    handleEdit (scope) {
     this.$router.push({path: '/orders-details/' + scope.id});
    },
    getOrders() {
      let vm = this;
      axios.get('https://api.instantavite.com/api/orders')
      .then( (result) => {
        this.orders = result.data.data;
        this.count_orders = result.data.total;
        this.per_page = result.data.per_page;
      });
    },
    reloadList(n){
      console.log(n)
      axios.get(`https://api.instantavite.com/api/orders?page=${n}`)
      .then( (result) => {
        this.orders = result.data.data;
        this.count_orders = result.data.total;
        this.per_page = result.data.per_page;
      });
    }
  },
  /*
  |--------------------------------------------------------------------------
  | Component > mounted
  |--------------------------------------------------------------------------
  */
  mounted() {
    //this.getCategoriesList();
    this.getOrders();
  },
};
</script>
