<template>
  <div>
    <md-table v-model="drivers" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Active Order number">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Time since accept">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Phone number">{{ item.mobile }}</md-table-cell>
        <md-table-cell md-label="Actions">
          <el-button
            class="circle b"
            type="success"
            title="Details"
            @click.stop="handleEdit(item)"
            size="mini"
            icon="el-icon-chat-dot-round"
          >
          </el-button>
          <el-button
            class="circle b"
            type="info"
            title="Details"
            @click.stop="handleDriver(item)"
            size="mini"
            icon="el-icon-position"
          ></el-button>
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
    handleEdit (scope) {
     this.$router.push({path: '/chat-drivers'});
    },
    getDrivers() {
      let _this = this;
      axios.get('https://api.instantavite.com/api/drivers?filter[is_online]=1')
      .then( (result) => {
        _this.drivers = result.data.data;
        _this.count_orders = result.data.total;
        _this.per_page = result.data.per_page;
      });
    },
    reloadList(n){
      
      axios.get(`https://api.instantavite.com/api/drivers?filter[is_online]=1&page=${n}`)
      .then( (result) => {
        this.drivers = result.data.data;
        this.count_orders = result.data.total;
        this.per_page = result.data.per_page;
      });
    },
    handleDriver(item){
      this.$router.push({path: '/driver/' + item.id + "/location"});
    }
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
