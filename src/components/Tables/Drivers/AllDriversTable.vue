<template>
  <div>
    <md-table v-model="drivers" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Phone number">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Number of orders">2</md-table-cell>
        <md-table-cell md-label="Actions">
          
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "drivers-table",
  /*
  |--------------------------------------------------------------------------
  | Component > props
  |--------------------------------------------------------------------------
  */
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  /*
  |--------------------------------------------------------------------------
  | Component > data
  |--------------------------------------------------------------------------
  */
  data() {
    return {
      drivers: [],
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
    /* handleEdit (scope) {
     this.$router.push({path: '/orders-details/' + scope.id});
    }, */
    getDrivers() {
      let _this = this;
      axios.get('https://api.instantavite.com/api/drivers')
      .then( (result) => {
        _this.drivers = result.data.data;
        _this.count_orders = result.data.total;
        _this.per_page = result.data.per_page;
      });
    },
    reloadList(n){
      
      axios.get(`https://api.instantavite.com/api/drivers?page=${n}`)
      .then( (result) => {
        this.drivers = result.data.data;
        this.count_orders = result.data.total;
        this.per_page = result.data.per_page;
      });
    },
  },
  /*
  |--------------------------------------------------------------------------
  | Component > mounted
  |--------------------------------------------------------------------------
  */
  mounted() {
    //this.getCategoriesList();
    this.getDrivers();
  },
};
</script>
