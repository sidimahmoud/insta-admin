<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Filters</h4>
          </md-card-header>
          <md-card-content>
            <h4 class="title">Filters content</h4>
            <div class="float-left">
                <el-button type="success" @click="handelAdd">Create product</el-button>
            </div>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Products Table</h4>
          </md-card-header>
          <md-card-content>
            <products-table></products-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {ProductsTable } from "@/components";

export default {
    /*
    |--------------------------------------------------------------------------
    | Component > components
    |--------------------------------------------------------------------------
    */
    components: {
        ProductsTable
    },
    /*
    |--------------------------------------------------------------------------
    | Component > methods
    |--------------------------------------------------------------------------
    */
    methods: {
        handelAdd(){
            this.$router.push({path: '/add-product'});
        }
    },
    
};
</script>
