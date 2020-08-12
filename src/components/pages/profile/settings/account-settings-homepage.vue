<template>
  <div class="container home">
    <div class="row">
      <div class="col-md-12">
        <!-- <div class="container">
          <div class="row box">
            <div class="col-md-3 style">Ayarlar</div>
            <div class="col-md-3"></div>
            <div class="col-md-3 profile-completeness">profile completeness : 70%</div>
            <div class="col-md-3">
              <div class="healthbar">
              
                <div
                  class="healthbar text-center"
                  style="background-color: blue; margin: 0; color: white;"
                >{{70}}%</div>
              </div>
            </div>
          </div>
        </div>-->

        <div class="row homepage">
          <div class="col">
            <div class="col-md-4">
              <div class="card" style="width: 400%;">
                <img
                  class="card-img-top"
                  src="@/assets/media/profilePic.ca1a0f64.jpg"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Carcas , Venezule</p>
                  <p class="card-text">Kullanıcı Adı</p>
                </div>
              </div>
            </div>

            <div class="card" style="width: 98%;margin-left:14px;margin-top:5px;">
              <div class="card-header card-header-details">DETAYLAR</div>
              <div class="list-group" id="list-tab" role="tablist">
                <!--
                <a
                  class="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="account-profile"
                  role="tab"
                  aria-controls="home"
                >Profil Ayarları</a>
                -->

                <router-link
                  class="list-group-item list-group-item-action"
                  id="list-home-list"
                  data-toggle="list"
                  to="/account-settings-homepage/profile-settings"
                  role="tab"
                  aria-controls="home"
                >Profil Ayarları</router-link>

                <router-link
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  to="/account-settings-homepage/mentor-settings"
                  role="tab"
                  aria-controls="profile"
                >Mentor Ayarları</router-link>
                <!--
                <a
                  class="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >Mentor Ayarları</a>
                -->
                <router-link
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  to="/account-settings-homepage/investment-settings"
                  role="tab"
                  aria-controls="profile"
                >Yatırımcı Ayarları</router-link>
                <!--
                <a
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                 to="/person-sets-mentor"
                  role="tab"
                  aria-controls="messages"
                >Yatırımcı Ayarları</a>

                -->
                <router-link
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  to="/account/investment"
                  role="tab"
                  aria-controls="profile"
                >Yatırım Turları</router-link>
                <!--
                <a
                  class="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >Yatırım Turları</a>

                -->
              </div>
            </div>
          </div>

          <div class="col-md-8 left-part">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  margin-bottom: 10px;
}
.box {
  margin-top: 20px;
  width: 102.5%;
  border: 5px solid white;
  padding: 10px;
  box-shadow: 3px 3px 3px 3px grey;
  background-color: white;
  margin-left: 0px;
}
.style {
  font-weight: bold;
  font-size: 20px;
}
.profile-completeness {
  font-size: 18px;
}

.healthbar {
  width: 70%;
  height: 20px;
  background-color: #eee;
  margin: auto;
  transition: width 500ms;
}

.homepage {
  margin-top: 2%;
  margin-bottom: 10px;
}

.left-part {
  background-color: white;
  border: 1px solid rgb(238, 226, 226);
  padding: 20px 20px 20px 20px;
  margin-left: 10px;
}
.left-part-title {
  text-align: left;
  font-weight: bold;
}
.left-part-altTitle {
  text-align: left;
  margin-top: 7px;
}

.form {
  color: black;
}

.card-header-details {
  font-weight: 600;
  text-align: left;
  color: rgb(212, 212, 207);
}

label {
  text-align: left;
  color: rgb(159, 167, 158);
}

.profile-etiketi {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.form-check-group {
  color: black;
  text-align: left;
  background-color: red;
}
.form-check-label {
  text-align: left;
  color: black;
}

.save {
  margin-top: 20px;
  text-align: left;
}
</style>