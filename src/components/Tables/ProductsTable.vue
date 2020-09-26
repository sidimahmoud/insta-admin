<template>
  <div>
    <md-table v-model="products" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Categorie">{{ item.categorie_id | getCategorieName(categorieOpts) }}</md-table-cell>
        <md-table-cell md-label="price">{{ item.price }}</md-table-cell>
        <md-table-cell md-label="Actions">
          <el-button
            class="circle b"
            type="success"
            title="Edit"
            @click.stop="handleEdit(item)"
            size="mini"
            icon="el-icon-info"
          >
          </el-button>
          <el-button
            class="circle b"
            type="danger"
            title="Delete"
            @click.stop="handleDelete(item)"
            size="mini"
            icon="el-icon-delete"
          >
          </el-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    
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
            categorieOpts:[],
            page: '1',
            last_page: '',
            per_page: '',
            count_products: '',
            current_page: 1
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
        axios.get('https://api.instantavite.com/api/products?page=1')
        .then( (result) => {
          this.last_page = result.last_page;
          this.products = result.data.data;
          this.count_orders = result.data.total;
          this.per_page = result.data.per_page;
        });
      },
      handleDelete(item){
        axios.delete(`https://api.instantavite.com/api/products/${item.id}`,item)
            .then( (result) => {
              this.getProducts();
            });
      },
      getCategoriesList(){
        axios.get('https://api.instantavite.com/api/categories')
            .then( (result) => {
              this.categorieOpts = result.data;
            });
      },
      handleEdit(item){
        let query = {};
        
        query[`id`] = item.id;
        const path = '/add-product';
        this.$router.push({path, query});
      },
      reloadList(n){
        console.log(n)
        axios.get(`https://api.instantavite.com/api/products?page=${n}`)
        .then( (result) => {
          this.products = result.data.data;
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
      this.getCategoriesList();
      this.getProducts();
    },
};
</script>
