<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="text-center">
              <h3>
                <i class="fa fa-lock fa-4x"></i>
              </h3>
              <h3 class="text-center">Parolanızı mı unuttunuz?</h3>
              <p>Şifrenizi buradan sıfırlayabilirsiniz.</p>
              <div class="panel-body">
                <form id="register-form" role="form" autocomplete="off" class="form">
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-envelope color-blue"></i>
                      </span>
                      <input
                        @blur="$v.user.email.$touch()"
                        id="email"
                        name="email"
                        placeholder="E-postanızı giriniz "
                        class="form-control"
                        type="email"
                        v-model="user.email"
                      />
                     
                    </div>
                     <small
                        v-if="!$v.user.email.required"
                        class="form-text text-danger mt-1"
                      >Bu Alan Zorunludur..!</small>
                      <small
                        v-if="!$v.user.email.email"
                        class="form-text text-danger mt-1"
                      >Lütfen Geçerli Bir E-Posta Giriniz..!</small>
                  </div>
                  <div class="form-group">
                    <input
                     :disabled="$v.$invalid"
                      name="recover-submit"
                      class="btn btn-lg btn-primary btn-block"
                      @click.prevent="forgotPassword()"
                      value="Gönder"
                      type="submit"
                    />
                  </div>

                  <!--   <input type="hidden" class="hide" name="token" id="token" value=""> -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import Vue from 'vue'
import VueAlertify from 'vue-alertify';
 Vue.use(VueAlertify);
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    forgotPassword() {
          console.log("Forgot Password  : ",this.user);
       this.$store.dispatch("forgotPassword", {...this.user})
       .then((result) => {
       
            this.$alertify.alertWithTitle("E-posta Bilgisi", result.data, () =>
            this.$alertify.warning("alert is closed")
      );
       })
       .catch((err) => {
           
       });

       
    },
  },
  computed: {
    saveEnabled() {
      if (
        this.user.email.length > 0  
      ) {
        return false;
      } else {
        return true;
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
    },
  },

};
</script>

<style scoped>
.container {
  margin-top: 10%;
  margin-left: 40%;
}
.form-gap {
  padding-top: 90px;
}
</style>
