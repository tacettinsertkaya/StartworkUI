<template>
  <div>
    <div>
      <div class="uik-App__app">
        <navbar></navbar>
        <router-view />
        <footerbar></footerbar>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../theme/navbar";
import Footer from "../theme/footer";
export default {
  components: {
    navbar: Navbar,
    footerbar: Footer
  }
};
</script>