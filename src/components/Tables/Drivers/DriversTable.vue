<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
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
      selected: [],
      users: [
        {
          id: 1,
          name: "Mark",
          mobile: "078965632",
          address: "Oud-Turnhout"
        },
        {
          id: 2,
          name: "Jill",
          mobile: "069965632",
          address: "Sinaai-Waas"
        },
        {
          id: 3,
          name: "Messi",
          mobile: "078962000",
          address: "Overland Park"
        },
        {
          id: 4,
          name: "Philip",
          mobile: "07896963",
          address: "Gloucester"
        }
      ]
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
  }
};
</script>
