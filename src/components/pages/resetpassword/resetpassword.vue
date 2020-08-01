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
              <h3 class="text-center">Şifre Değiştirme Alanı</h3>
              <p>Şifrenizi buradan sıfırlayabilirsiniz.</p>
              <div class="panel-body">
                <form @submit.prevent="resetPassword">
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="glyphicon glyphicon-envelope color-blue"></i>
                      </span>
                      <input
                        @blur="$v.user.password.$touch()"
                        id="password"
                        name="password"
                        placeholder="Yeni şifrenizi giriniz "
                        class="form-control"
                        type="password"
                        v-model="user.password"
                      />
                    </div>

                    <small
                      v-if="buttonClicked && $v.user.password.$error && !$v.user.password.required"
                      class="form-text text-danger"
                    >Bu alan zorunludur...</small>
                    <small
                      v-if="buttonClicked && $v.user.password.$error &&  !$v.user.password.minLength"
                      class="form-text text-danger"
                    >
                      Lütfen şifreniz en az {{
                      $v.user.password.$params.minLength.min }} karakterden oluşmalıdır...
                    </small>
                    <small
                      v-if="buttonClicked && $v.user.password.$error && !$v.user.password.maxLength"
                      class="form-text text-danger"
                    >
                      Lütfen şifreniz en fazla {{
                      $v.user.password.$params.maxLength.max }} karakterden oluşmalıdır...
                    </small>
                  </div>

                  <div class="input-group">
                    <span class="input-group-addon">
                      <i class="glyphicon glyphicon-envelope color-blue"></i>
                    </span>
                    <input
                      @blur="$v.repassword.$touch()"
                      id="repassword"
                      name="repassword"
                      placeholder="Tekrar yeni şifreyi giriniz "
                      class="form-control"
                      type="password"
                      v-model="repassword"
                    />
                  </div>

                  <small
                    v-if="buttonClicked && $v.repassword.$error && !$v.repassword.required"
                    class="form-text text-danger"
                  >Bu alan zorunludur...</small>
                  <small
                    v-if="buttonClicked && $v.repassword.$error && !$v.repassword.minLength"
                    class="form-text text-danger"
                  >
                    Lütfen şifreniz en az {{
                    $v.repassword.$params.minLength.min }} karakterden oluşmalıdır...
                  </small>
                  <small
                    v-if="buttonClicked && $v.repassword.$error && !$v.repassword.maxLength"
                    class="form-text text-danger"
                  >
                    Lütfen şifreniz en fazla {{
                    $v.repassword.$params.maxLength.max }} karakterden oluşmalıdır...
                  </small>
                  <small
                    v-if="buttonClicked && $v.repassword.$error && !$v.repassword.sameAs"
                    class="form-text text-danger"
                  >
                    Girdiğiniz şifreler
                    birbirleriyle uyuşmuyor...
                  </small>
                  <div class="form-group">
                    <button
                      name="recover-submit"
                      class="btn btn-lg btn-primary btn-block"
                      type="submit"
                    >Gönder</button>
                  </div>

                  <!--
                    <input type="hidden" class="hide" name="token" id="token" value="" > 
                    <div class="" >   {{  $route.params.token }}</div>

                  -->
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
import Vue from "vue";
import VueAlertify from "vue-alertify";
Vue.use(VueAlertify);
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        password: "",
        token: this.$route.params.token,
      },
      repassword: "",
      buttonClicked: false,
    };
  },
  methods: {
    resetPassword() {
      this.buttonClicked = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      this.$store
        .dispatch("resetPassword", { ...this.user })
        .then((result) => {
          setTimeout(() => {
            this.$alertify.scucess("İşlem başarılı");
            this.$router.push({ name: "login" });

            this.user = {
              password: "",
              token: "",
            };
            this.repassword = "";
          }, 2000);
        })
        .catch((err) => {
          this.$alertify.error("İşlem sırasında hata oluştu");
        });
    },
  },
  computed: {
    saveEnabled() {
      if (this.user.email.length > 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  validations: {
    user: {
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(8),
      },
    },
    repassword: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(8),
      //  sameAs: sameAs(user.password),

      sameAs: sameAs((vm) => {
        return vm.user.password;
      }),
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
