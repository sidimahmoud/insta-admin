<template>
  <div>
    <md-table v-model="categories" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
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
            @click.stop="handleDelete(item)"
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
    name: "products-table",
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
            categories: []
        };
    },
    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        getCategories() {
            let vm = this;
            axios.get('https://api.instantavite.com/api/categories?page=1')
                .then( (result) => {
                    this.categories = result.data;
                });
        },
        handleDelete(item){
            axios.delete(`https://api.instantavite.com/api/categories/${item.id}`,item)
                .then( (result) => {
                    this.getCategories();
                });
        }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
        this.getCategories();
    },
};
</script>
