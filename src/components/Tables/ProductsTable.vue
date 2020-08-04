<template>
  <div>
    <md-table v-model="products" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Image"><img :src="item.image" height="10px" width="20px"/></md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Categorie">{{ item.categorie_id | getCategorieName(categorieOpts) }}</md-table-cell>
        <md-table-cell md-label="price">{{ item.price }}</md-table-cell>
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
import {isEmpty} from '../../helpers/Common';
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
            products: [],
            categorieOpts:[]
        };
    },
    /*
    |--------------------------------------------------------------------------
    | Component > filters
    |--------------------------------------------------------------------------
    */
    filters: {
      getCategorieName (v, o) {
        if (!isEmpty(o) && !isEmpty(v)) {
          const found = window._.find(o, (x) => x.id === v);
          return found ? found.name : '';
        }
        return v;
      }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
      getProducts() {
        let vm = this;
        axios.get('http://api.instantavite.com/api/products?page=1')
            .then( (result) => {
                console.log(result.data);
                this.products = result.data;
            });
      },
      handleDelete(item){
        axios.delete(`http://api.instantavite.com/api/products/${item.id}`,item)
            .then( (result) => {
                console.log(result);
                this.getProducts();
            });
      },
      getCategoriesList(){
        axios.get('http://api.instantavite.com/api/categories')
            .then( (result) => {
                this.categorieOpts = result.data;
                console.log(this.categorieOpts);
            });
      }
    },
    /*
    |--------------------------------------------------------------------------
    | Component > mounted
    |--------------------------------------------------------------------------
    */
    mounted() {
      this.getCategoriesList();
      this.getProducts();
    },
};
</script>
