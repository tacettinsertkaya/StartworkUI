<template >
  <div class="cotainer">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>

    <div id="root">
      <div class="uik-App__app">
        <div class="uik-Navigator__wrapper"></div>
        <div class="uik-buildings-signup__pageWrapper">
          <div v-if="isSucess" class="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
            <div class="uik-buildings-signup__content" style="width: 350px;">
              <div class="uik-widget-content__wrapper uik-buildings-signup__left">
                <h1 class="uik-headline__wrapper">Selam!</h1>
                <h2>Hesabınız onaylandı.</h2>
                <h2>Login sayfasına yönlendirileceksiniz.</h2>
              </div>
            </div>
          </div>

          <div v-if="!isSucess" class="uik-widget__wrapper uik-buildings-signup__widgetWrapper">
            <div class="uik-buildings-signup__content" style="width: 350px;">
              <div class="uik-widget-content__wrapper uik-buildings-signup__left">
                <h2>Lütfen Bekleyiniz!</h2>
                <h2>Login sayfasına yönlendirileceksiniz.</h2>
              </div>
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
      isSucess: false,
    };
  },
  created() {
    console.log("Confirm account gelen tokun --->", this.$route.params.token);

    this.$store
      .dispatch("confirmAccount", this.$route.params.token)
      .then((res) => {
        this.isSucess = res.data;
        console.log("Gelen confirmAccount -------->:", this.isSucess);
      
        setTimeout(() => {
          if (this.isSucess) {
            this.$router.push("/login");
          }
        }, 2000);
      });
  },
  computed: {
    isLoading() {
      if (!this.isSucess) {
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
};

// this.$route.params.id
</script>

<style scoped>
 @import url("../../../assets/loading.css");
</style>