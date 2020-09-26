<template>
    <div class="order-details-actions">
        <h4>Order Detail Controls</h4>
        
        <el-button style="margin-left:10px" type="primary">Cancel Order</el-button>
        <el-button type="primary">Change Order</el-button>
        <el-button type="primary">Afficher Order Produits</el-button>
        <el-button type="primary" @click="handleMap">Driver Progress Map</el-button>
        <!--<el-button type="primary">Danger</el-button>
        <el-button type="primary">Danger</el-button>-->

    </div>
</template>
<script>
export default {
  name: "user-card",
  /*
  |--------------------------------------------------------------------------
  | Component > props
  |--------------------------------------------------------------------------
  */
  props: {},
  /*
  |--------------------------------------------------------------------------
  | Component > data
  |--------------------------------------------------------------------------
  */
  data() {
    return {};
  },
  /*
  |--------------------------------------------------------------------------
  | Component > methods
  |--------------------------------------------------------------------------
  */
  methods:{
    handleMap () {
      this.$router.push({path: '/orders-details/' + this.$route.params.id + "/map"});
    },
  }
};
</script>
