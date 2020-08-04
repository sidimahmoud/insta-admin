<template>
    <div class="content">
        <form>
            <md-card>
                <md-card-header :data-background-color="dataBackgroundColor">
                    <h4 class="title">Create an order</h4>
                </md-card-header>

                <md-card-content>
                    <div>
                        <h4>Client Information:</h4>
                        <div class="md-layout-item md-layout md-gutter">
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Nom</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Tel</label>
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
                                    <label>Products</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            <div class="md-layout-item">
                                <md-field>
                                    <label>Language</label>
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
                                    <label>Payment Method</label>
                                    <md-input></md-input>
                                </md-field>
                            </div>
                            
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
export default {
  name: "edit-profile-form",
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
