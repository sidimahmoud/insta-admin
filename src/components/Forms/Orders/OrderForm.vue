<template>
    <div>
      <div class="order-detail-list">
          <table class="detail-list">
              <tr>
                  <td class="cell-label"><span>ID</span></td>
                  <td class="cell-value"><span>{{order.id}}</span></td>
              </tr>

              <tr>
                  <td class="cell-label"><span>Client Name</span></td>
                  <td class="cell-value"><span>{{order.booker_name}}</span></td>
              </tr>

              <tr>
                  <td class="cell-label"><span>Amount</span></td>
                  <td class="cell-value"><span>{{order.amount}}</span></td>
              </tr>
              <tr>
                  <td class="cell-label"><span>Date</span></td>
                  <td class="cell-value"><span>{{order.created_at}}</span></td>
              </tr>
              <tr>
                  <td class="cell-label"><span>Address</span></td>
                  <td class="cell-value"><span>{{order.address}}</span></td>
              </tr>
          </table>
      </div>

      <div class="order-detail-list">
        <h5>Products list</h5>
        <table class="detail-list">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>

            <tr v-for="pro in order.products" v-bind:key="pro.id">
                <td><img :src="pro.product.image" alt="Img" class="product-grid__img"/></td>
                <td><span>{{pro.product.name}}</span></td>
                <td><span>{{pro.product.price}}</span></td>
                <td><span>{{pro.quantity}}</span></td>
            </tr>
        </table>
    </div>
    </div>
</template>
<script>
export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      order: {},
    };
  },
  /*
  |--------------------------------------------------------------------------
  | Component > methods
  |--------------------------------------------------------------------------
  */
  methods:{
    getOrder() {
      let _this = this;
      let id =  this.$route.params.id;

      axios.get(`https://api.instantavite.com/api/orders/${id}?include=products.product`)
      .then( (result) => {
        _this.order = result.data;
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
    this.getOrder();
  },
};
</script>
<style></style>
