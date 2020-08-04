<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Client">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Total Order">{{ item.amount }}</md-table-cell>
        <md-table-cell md-label="Mobile">{{ item.mobile }}</md-table-cell>
        <md-table-cell md-label="Address">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
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
      users: [
        {
          id: 1,
          name: "Dakota Rice",
          amount: "$36,738",
          mobile: "078965632",
          address: "Oud-Turnhout",
          date: "21/06/2020"
        },
        {
          id: 2,
          name: "Minerva Hooper",
          amount: "$23,738",
          mobile: "069965632",
          address: "Sinaai-Waas",
          date: "21/06/2020"
        },
        {
          id: 3,
          name: "Sage Rodriguez",
          amount: "$56,142",
          mobile: "078962000",
          address: "Overland Park",
          date: "20/06/2020"
        },
        {
          id: 4,
          name: "Philip Chaney",
          amount: "$38,735",
          mobile: "07896963",
          address: "Gloucester",
          date: "20/06/2020"
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
