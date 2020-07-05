<template>
  <div>
    <navbar></navbar>
    <router-view/>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Navbar from '../theme/navbar'
import Footer from '../theme/footer'
export default {
     components:{
    'navbar':Navbar,
    'footerbar':Footer
  }
}
</script>