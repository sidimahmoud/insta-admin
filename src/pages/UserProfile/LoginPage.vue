<template>
    <div class="app-page login-page">

        <div class="app-container">
            <div class="login-form">
                    <form class="app-form">
                        <h1>
                            <img src="@/assets/img/app-logo.png" alt="app-logo">
                            <span>Instantavite Admin</span>
                        </h1>
                        <div class="form-container">
                            <md-field>
                                <label>Email</label>
                                <md-input v-model="form.email" placeholder="your@email.com"></md-input>
                            </md-field>

                            <md-field>
                                <label>Password</label>
                                <md-input v-model="form.password" type="password"></md-input>
                            </md-field>

                            <el-button id="login_submit_btn"
                               type="success"
                               icon="el-icon-fa fa-sign-in"
                               @click="handleFormSubmit">
                                Login
                            </el-button>   
                        </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /*
    |--------------------------------------------------------------------------
    | component > data
    |--------------------------------------------------------------------------
    */
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
        }
    },// End of component > data

    /*
    |--------------------------------------------------------------------------
    | component > methods
    |--------------------------------------------------------------------------
    */
    methods: {

      /**
       * Handle when the Log In form was submitted.
       *
       * @return {boolean}
       */
      handleFormSubmit () {
        this.$router.push({path: '/orders'});

        // Prepare payload data to be sent to API.
        /*let data = {
          grant_type: app_client_grant_type,
          username: this.form.email,
          password: this.form.password,
          client_id: app_client_id,
          client_secret: app_client_secret,
        };

        this.$store.commit('auth/destroyAccessToken');

        this.$store.dispatch('auth/requestAccessToken', {data})
            .then((r) => {
              if (r.data['token_type'] === 'Access') {
                this.verifyForm.qr_code = r.data.qr_code
                this.verifyForm.access_code = r.data.access_code
                this.showVerify = true
              } else {
                if (r.data.user.type === 1) {
                  window.location.reload();

                } else {
                  this.$notify.error({
                    title: this.$t('error'),
                    message: this.$t('user_is_not_an_admin')
                  });
                }
              }
            })
            .catch((e) => {
              this.$notify.error({
                title: this.$t('unable_to_login'),
                message: window._.isNil(e.response)
                         ? this.$t('email_or_password_is_incorrect')
                         : e.response.data.message,
              });
            });*/

      }, // End of handleFormSubmit() method

    }, // End of component > methods

    /*
    |--------------------------------------------------------------------------
    | component > mounted
    |--------------------------------------------------------------------------
    */
    mounted () {
      const hasAccessToken = localStorage.getItem("instant_access_token");
      // If user has access token already, redirect to dashboard.
      if (hasAccessToken) {
        this.$router.push({path: '/orders'});
      }
    }, // End of component > mounted
        
}
</script>