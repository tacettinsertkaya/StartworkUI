<template>
  <div id="root">
    <div class="uik-App__app">
      <div class="uik-Navigator__wrapper">
        <button class="uik-Navigator__expandButton" type="button">
          <i class="uikon">view_list</i>
        </button>
        <div class="uik-Navigator__list">
          <a class="uik-nav-link__wrapper uik-nav-link__wrapperDark" href="/">
            <span class="uik-nav-link__text">
              <span class="uik-nav-link__icon">
                <i class="uikon">gallery_grid_view</i>
              </span>Screen Previews
            </span>
          </a>
          <a class="uik-nav-link__wrapper uik-nav-link__wrapperDark" href="/docs">
            <span class="uik-nav-link__text">
              <span class="uik-nav-link__icon">
                <i class="uikon">rocket</i>
              </span>Getting Started
            </span>
          </a>
          <a class="uik-nav-link__wrapper uik-nav-link__wrapperDark" href="/docs/react">
            <span class="uik-nav-link__text">
              <span class="uik-nav-link__icon">
                <i class="uikon">help</i>
              </span>React
              Docs
            </span>
          </a>
          <a class="uik-nav-link__wrapper uik-nav-link__wrapperDark" href="/docs/changelog">
            <span class="uik-nav-link__text">
              <span class="uik-nav-link__icon">
                <i class="uikon">multitasking</i>
              </span>Changelog
            </span>
          </a>
          <a class="uik-nav-link__wrapper uik-nav-link__wrapperDark" href="/docs/support">
            <span class="uik-nav-link__text">
              <span class="uik-nav-link__icon">
                <i class="uikon">lightbulb</i>
              </span>Support
            </span>
          </a>
          <a
            class="uik-nav-link__wrapper uik-nav-link__wrapperDark active"
            href="https://janlosert.com/store/dashboard-ui-kit-3.html?from=docs"
          >
            <span class="uik-nav-link__text">
              <span class="uik-nav-link__icon">
                <i class="uikon">love</i>
              </span>Download
              kit
            </span>
          </a>
        </div>
      </div>
      <div class="uik-buildings-signup__pageWrapper">
        <div class="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
          <div class="uik-buildings-signup__content" style="width: 350px;">
            <div class="uik-widget-content__wrapper uik-buildings-signup__left">
              <h2 class="uik-headline__wrapper">Selam!</h2>
              <p class="uik-headline-desc__wrapper">Seni buradan görmekten mutluyuz!</p>
              <form @submit.prevent="login">
                <div class="uik-form-input-group__vertical">
                  <div
                    v-if="isError"
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Geçersiz!</strong> Email veya şifre hatalı
                    <button
                      type="button"
                      class="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class>
                    <span class="uik-content-title__wrapper">E-POSTA</span>
                    <div class="uik-input__inputWrapper">
                      <input
                        type="text"
                        class="uik-input__input"
                        v-model="user.email"
                        name="email"
                        placeholder="e-posta"
                      />
                      <small
                        v-if="saveButtonClicked && $v.user.email.$error && !$v.user.email.required"
                        class="form-text text-danger mt-1"
                      >Bu Alan Zorunludur..!</small>
                      <small
                        v-if="saveButtonClicked && $v.user.email.$error && !$v.user.email.email"
                        class="form-text text-danger mt-1"
                      >Lütfen Geçerli Bir E-Posta Giriniz..!</small>
                    </div>
                  </div>
                  <div class>
                    <span class="uik-content-title__wrapper">ŞİFRE</span>
                    <div class="uik-input__inputWrapper">
                      <input
                        type="password"
                        v-model="user.password"
                        class="uik-input__input"
                        name="password"
                        placeholder="Şifrenizi giriniz"
                      />
                      <small
                        v-if="saveButtonClicked && $v.user.password.$error && !$v.user.password.required"
                        class="form-text text-danger"
                      >Bu alan zorunludur...</small>

                      <small
                        v-if="saveButtonClicked && $v.user.password.$error && !$v.user.password.minLength"
                        class="form-text text-danger"
                      >
                        Lütfen şifreniz en az {{
                        $v.user.password.$params.minLength.min }} karakterden oluşmalıdır...
                      </small>
                      <small
                        v-if="saveButtonClicked && $v.user.password.$error && !$v.user.password.maxLength"
                        class="form-text text-danger"
                      >
                        Lütfen şifreniz en fazla {{
                        $v.user.password.$params.maxLength.max }} karakterden oluşmalıdır...
                      </small>
                    </div>
                  </div>
                </div>
                <div class="uik-divider__horizontal uik-divider__margin"></div>
                <h3 class="uik-buildings-signup__headline" style="text-align:center;">veya</h3>
                <div class="uik-buildings-signin-card-container__wrapper">
                  <button
                    class="uik-buildings-signin-card__wrapper uik-buildings-signin-card__selected"
                    type="button"
                  >
                    <i class="uikon">wallet</i>
                    <p>Twitter</p>
                    <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                  </button>
                  <button class="uik-buildings-signin-card__wrapper" type="button">
                    <i class="uikon">lightbulb</i>
                    <p>Facebook</p>
                    <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                  </button>
                  <button
                    class="uik-buildings-signin-card__wrapper"
                    type="button"
                    @click="loginWithWoogle()"
                  >
                    <i class="uikon">rocket</i>
                    <p>Google</p>
                    <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                  </button>
                </div>
                <button
                  type="submit"
                  @click="login()"
                  class="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                >
                  <span class="uik-btn__content">Giriş</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <p>
          StartWork.co hesabına sahip değil misin?
          <router-link to="/signup">Kayıt ol!</router-link>
        </p>
        <p>
          Eğer şifreni unuttuysan!
          <router-link to="/reset-email">Yeni şifre oluştur</router-link>
        </p>
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
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      saveButtonClicked: false,
      isError: false,
      studentUser: {
        token: "jf_e^fUjw6?%&3#MUDSEa+7_2LquH68Hp",
        studentId: "240038",
        password: "12345678",
      },
    };
  },
  methods: {
    login() {
      this.saveButtonClicked = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch("login", { ...this.user }).then(
        (result) => {
          console.log("login result --->:", result[0]);
          if (result[0].email) {
            this.$alertify.success("Giriş işlemi başarılı");

            this.$router.push("/dashboard");
          } else {
            this.$alertify.warning("Giriş işlemi başarısız");
          }
        },
        (err) => {
          this.$alertify.danger("Giriş işlemi başarısız");
          this.user.email = "";
          this.user.password = "";
        }
      );
    },
    loginWithWoogle() {
      this.$store.dispatch("loginWithWoogle");
    },
  },

  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(8),
      },
    },
  },
};
</script>
