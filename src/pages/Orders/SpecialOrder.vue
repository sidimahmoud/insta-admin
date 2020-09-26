<template>
    <div class="content">
        <form>
            <md-card>
                <md-card-header :data-background-color="dataBackgroundColor">
                    <h4 class="title">Create a special order</h4>
                </md-card-header>

                <md-card-content>
                    <div>
                        <h4>Client Information:</h4>
                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Nom du client</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Numero telephone</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            
                        </div>

                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Address</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Code postal</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                        </div>
                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Language</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Instruction</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div>
                        <h4>Order Information:</h4>
                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Address du Commerce</label>
                                    <md-input></md-input>
                                </md-field>
                                
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Code postal</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            
                            
                        </div>

                        <div class="md-layout-item md-layout md-gutter">
                            
                            
                        </div>
                    </div>

                    <div>
                        <h4>Payment:</h4>
                        <div class="md-layout-item md-layout md-gutter">
                            <stripe-checkout
                                ref="checkoutRef"
                                :pk="publishableKey"
                                :items="items"
                                :successUrl="successUrl"
                                :cancelUrl="cancelUrl"
                            >
                            </stripe-checkout>
                            
                            
                        </div>
                    </div>

                    <div class="float-left">
                        <el-button type="success" @click="handelAdd">Submit</el-button>
                    </div>
                      
                </md-card-content>
            </md-card>
        </form>
    </div>
</template>
<script>
import { StripeCheckout } from 'vue-stripe-checkout';

export default {
  name: "edit-profile-form",
  /*
  |--------------------------------------------------------------------------
  | Component > components
  |--------------------------------------------------------------------------
  */
  components: {
    StripeCheckout
  },
  /*
  |--------------------------------------------------------------------------
  | Component > props
  |--------------------------------------------------------------------------
  */
  props: {
    dataBackgroundColor: {
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
        activeNames: ['1', '2'],
        publishableKey: process.env.PUBLISHABLE_KEY,
        items: [
            {
                sku: 'sku_FdQKocNoVzznpJ', 
                quantity: 1
            }
        ],
        successUrl: 'your-success-url',
        cancelUrl: 'your-cancel-url',
    };
  },
  /*
  |--------------------------------------------------------------------------
  | Component > methods
  |--------------------------------------------------------------------------
  */
  methods:{
    handelAdd () {
        
    },
  }
};
</script>
<style></style>
