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
                      v-model="email"
                      name="email"
                      placeholder="e-posta"
                    />
                  </div>
                </div>
                <div class>
                  <span class="uik-content-title__wrapper">ŞİFRE</span>
                  <div class="uik-input__inputWrapper">
                    <input
                      type="password"
                      v-model="password"
                      class="uik-input__input"
                      name="password"
                      placeholder="********"
                    />
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
                <button class="uik-buildings-signin-card__wrapper" type="button">
                  <i class="uikon">rocket</i>
                  <p>Google</p>
                  <i class="uikon uik-buildings-signin-card__selectedCheck">check</i>
                </button>
              </div>
              <button
                @click="sendLogin()"
                class="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
              >
                <span class="uik-btn__content">Giriş</span>
              </button>
            </div>
          </div>
        </div>
        <p>
          StartWork.co hesabına sahip değil misin?
          <router-link to="/signup">Kayıt ol!</router-link>
        </p>
        <p>
          Eğer şifreni unuttuysan!
          <router-link to="/reset-password">Yeni şifre oluştur</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isError: false,
      studentUser: {
        token: "jf_e^fUjw6?%&3#MUDSEa+7_2LquH68Hp",
        studentId: "240038",
        password: "12345678"
      }
    };
  },
  methods: {
    sendLogin() {
      if ((this.email = "dev@gmail.com" && this.password == "dev123")) {
        this.$router.push("/dashboard");
        this.isError = false;
      } else {
        this.isError = true;
      }
      this.email = "";
      this.password = "";
      // this.$store.dispatch("login", this.studentUser);
    }
  }
};
</script>

