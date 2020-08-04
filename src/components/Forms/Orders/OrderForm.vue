<template>
    <div class="order-detail-list">
        <table class="detail-list">
            <tr>
                <td class="cell-label"><span>ID</span></td>
                <td class="cell-value"><span>5</span></td>
            </tr>

            <tr>
                <td class="cell-label"><span>Name</span></td>
                <td class="cell-value"><span>Test</span></td>
            </tr>

            <tr>
                <td class="cell-label"><span>Amount</span></td>
                <td class="cell-value"><span>$50</span></td>
            </tr>
            <tr>
                <td class="cell-label"><span>Date</span></td>
                <td class="cell-value"><span>20/05/2020</span></td>
            </tr>
            <tr>
                <td class="cell-label"><span>Address</span></td>
                <td class="cell-value"><span>test address</span></td>
            </tr>
        </table>
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
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
    };
  }
};
</script>
<style></style>
