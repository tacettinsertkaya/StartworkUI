<template>
  <div class="container">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

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
            <div class="uik-buildings-signup__content">
              <form @submit.prevent="saveUser">
                <div class="uik-widget-content__wrapper uik-buildings-signup__left">
                  <h2 class="uik-headline__wrapper">Create Your Account</h2>
                  <p
                    class="uik-headline-desc__wrapper"
                  >Get started with Buildings and rent with love!</p>
                  <div class="uik-form-input-group__vertical">
                    <div
                      class="uik-buildings-signup__inputNameSurnameGroup uik-form-input-group__horizontal"
                    >
                      <div class>
                        <span class="uik-content-title__wrapper">Name</span>
                        <div class="uik-input__inputWrapper">
                          <input
                            @blur="$v.user.name"
                            type="text"
                            class="uik-input__input"
                            name="name"
                            v-model="user.name"
                          />

                          <small
                            v-if="saveButtonClicked && $v.user.name.$error &&  !$v.user.name.required"
                            class="form-text text-danger mt-1"
                          >Bu Alan Zorunludur..!</small>
                        </div>
                      </div>
                      <div class>
                        <span class="uik-content-title__wrapper">Surname</span>
                        <div class="uik-input__inputWrapper">
                          <input
                            type="text"
                            class="uik-input__input"
                            name="surname"
                            v-model="user.surname"
                          />
                          <small
                            v-if=" saveButtonClicked && $v.user.name.$error && !$v.user.surname.required"
                            class="form-text text-danger mt-1"
                          >Bu Alan Zorunludur..!</small>
                        </div>
                      </div>
                    </div>
                    <div class>
                      <span class="uik-content-title__wrapper">E-mail address</span>
                      <div class="uik-input__inputWrapper">
                        <input
                          type="text"
                          class="uik-input__input"
                          v-model="user.email"
                          name="email"
                          placeholder="your@email.com"
                        />
                        <small
                          v-if=" saveButtonClicked && $v.user.name.$error && !$v.user.email.required"
                          class="form-text text-danger mt-1"
                        >Bu Alan Zorunludur..!</small>
                        <small
                          v-if="!$v.user.email.email"
                          class="form-text text-danger mt-1"
                        >Lütfen Geçerli Bir E-Posta Giriniz..!</small>
                      </div>
                    </div>
                    <div class>
                      <span class="uik-content-title__wrapper">Password</span>
                      <div class="uik-input__inputWrapper">
                        <input
                          type="password"
                          class="uik-input__input"
                          name="password"
                          v-model="user.password"
                          placeholder="Şifrenizi giriniz"
                        />

                        <small
                          v-if="saveButtonClicked && $v.user.name.$error && !$v.user.password.required"
                          class="form-text text-danger"
                        >Bu alan zorunludur...</small>

                        <small
                          v-if="saveButtonClicked && $v.user.name.$error && !$v.user.password.minLength"
                          class="form-text text-danger"
                        >
                          Lütfen şifreniz en az {{
                          $v.user.password.$params.minLength.min }} karakterden oluşmalıdır...
                        </small>
                        <small
                          v-if="saveButtonClicked && $v.user.name.$error && !$v.user.password.maxLength"
                          class="form-text text-danger"
                        >
                          Lütfen şifreniz en fazla {{
                          $v.user.password.$params.maxLength.max }} karakterden oluşmalıdır...
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="uik-divider__horizontal uik-divider__margin"></div>
                  <h3 class="uik-buildings-signup__headline">What are you looking for?</h3>
                  <div class="uik-buildings-signin-card-container__wrapper">
                    <button
                      class="uik-buildings-signin-card__wrapper uik-buildings-signin-card__selected"
                      type="button"
                    >
                      <i class="uikon">wallet</i>
                      <p>Rent</p>
                      <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                    </button>
                    <button class="uik-buildings-signin-card__wrapper" type="button">
                      <i class="uikon">lightbulb</i>
                      <p>Co-work</p>
                      <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                    </button>
                    <button class="uik-buildings-signin-card__wrapper" type="button">
                      <i class="uikon">rocket</i>
                      <p>Invest</p>
                      <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                    </button>
                  </div>
                  <!--
                <a
                  class="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                  href="/buildings"
                  :disabled="saveEnabled"
                >
                  <span class="uik-btn__content">Get Started With Buildings</span>
                </a>
                  -->
                  <button
                    type="submit"
                    class="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                    @click="saveUser"
                  >Get Started With Buildings</button>
                </div>
              </form>
              <div class="uik-buildings-signup__right">
                <h3 class="uik-buildings-signup__headline">
                  <i class="uikon">building</i>Buildings
                </h3>
                <p class="uik-buildings-signup__desc">
                  Architecture begins when you place two bricks carefully
                  together.
                </p>
                <div class="uik-avatar__wrapper uik-avatar__small">
                  <div class="uik-avatar__avatarWrapper">
                    <img alt class="uik-avatar__avatar" src="@/assets/media/a11.f961f960.jpg" />
                  </div>
                  <div class="uik-avatar__info">
                    <div class="uik-avatar__name">Ludwig Mies van der Rohe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Already on Buildings? Let us take you to
            <router-link to="/login">Sign In!</router-link>
          </p>
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
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        password: "",
      },
      saveButtonClicked: false,
    };
  },
  methods: {
    saveUser() {
      this.saveButtonClicked = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch("register", { ...this.user }).then(
        (result) => {
          this.$alertify.alertWithTitle("E-posta Bilgisi", result.data, () =>
            this.$alertify.success("Kayıt işlemi başarılı")
          );
        },
        (error) => {
          this.$alertify.alertWithTitle("E-posta Bilgisi", error.data, () =>
            this.$alertify.error("Kayıt işlemi başarısız")
          );
        }
      );

    
      setTimeout(() => {

        this.$router.push({ name: "login" });
      }, 2000);

    },
  },
  computed: {
    saveEnabled() {
      if (
        this.user.name.length > 0 &&
        this.user.surname.length > 0 &&
        this.user.email.length > 0 &&
        this.user.password.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    isLoading() {
      if (this.saveButtonClicked) {
        return {
          display: "block",
        };
      } else {
        return {
          display: "none",
        };
      }
    },
  },
  validations: {
    user: {
      name: {
        required,
      },
      surname: {
        required,
      },
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

<style scoped>
@import "../../../assets/loading.css"
</style>