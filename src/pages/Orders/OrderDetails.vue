<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <order-form data-background-color="green"> </order-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <order-actions> </order-actions>
      </div>
    </div>
  </div>
</template>

<script>
import { OrderForm, OrderActions } from "@/components";

export default {
  components: {
    OrderForm,
    OrderActions
  }
};
</script>
