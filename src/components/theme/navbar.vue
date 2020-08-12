<template>
  <div class="navbar navbar-expand-lg navbar-light fixed-top navbar-header">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo03"
      aria-controls="navbarTogglerDemo03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand pb-3" href="#" style="padding-top:0.75rem;">
      <img class="img-fluid" src="@/assets/images/sw_logo_1.png" alt />
      <span class="pl-2">StartWork</span>
    </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="dashboard">Anasayfa</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="apply">Başvur</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="network">Ağ</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="discussion">Tartışma</router-link>
        </li>-->
        <li class="nav-item">
          <router-link class="nav-link" to="work">İşler</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="ecosystem">Ekosistem</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="event">Olaylar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="advantage">Avantajlar</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="blog">Blog</router-link>
        </li>
      </ul>
    </div>

    <ul class="member-nav pull-right float-right" style="list-style: none;">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img class="img-fluid" src="@/assets/images/10.png" alt />
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/account-profile">Profil</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="company">Şirket</router-link>
          <div class="dropdown-divider"></div>
          <router-link class="dropdown-item" to="/account-settings-homepage">Ayarlar</router-link>
          <div class="dropdown-divider"></div>
          <button @click="logout" type="button" class="dropdown-item">Çıkış Yap</button>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$alertify.success("Başarlı bir şekilde çıkış yapıldı");

      this.$router.push("/login");
    },
  },
};
</script>

