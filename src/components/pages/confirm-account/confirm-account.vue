<template >
  <div id="root">
    <div class="uik-App__app">
      <div class="uik-Navigator__wrapper"></div>
      <div class="uik-buildings-signup__pageWrapper">
        <div v-if="isSucess" class="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
          <div class="uik-buildings-signup__content" style="width: 350px;">
            <div class="uik-widget-content__wrapper uik-buildings-signup__left">
              <h1 class="uik-headline__wrapper">Selam!</h1>
              <h2>Hesabınız onaylandı.Login sayfasına yönlendirileceksiniz.</h2>
            </div>
          </div>
        </div>

        <div v-if="!isSucess" class="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
          <div class="uik-buildings-signup__content" style="width: 350px;">
            <div class="uik-widget-content__wrapper uik-buildings-signup__left">
              <h1>Hesabınız onaylanamadı.</h1>
              <h2>Login sayfasına yönlendirileceksiniz.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSucess: null,
    };
  },
  created() {
    console.log(this.$route.params.token);

    this.$store
      .dispatch("confirmAccount", this.$route.params.token)

      .then((res) => {
        this.isSucess = res;
        console.log("Gelen mentor -------->:", res);
        // setTimeout(function () {}, 5000);
        if (this.isSucess) {
          this.$router.push("/login");
        }
      });
  },
};

// this.$route.params.id
</script>