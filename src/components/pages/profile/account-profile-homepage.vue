<template>
  <div class="container home">
    <div class="row">
      <div class="col-md-12">
        <div class="container">
          <div class="row box">
            <div class="col-md-3 style">Ayarlar</div>
            <div class="col-md-3"></div>
            <div class="col-md-3 profile-completeness">profile completeness : 70%</div>
            <div class="col-md-3">
              <div class="healthbar">
                <!-- :style="player_progress"-->
                <!-- alt div içinde olacak-->
                <div
                  class="healthbar text-center"
                  style="background-color: blue; margin: 0; color: white;"
                >{{70}}%</div>
              </div>
            </div>
          </div>
        </div>

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
                  class="list-group-item list-group-item-action "
                  id="list-home-list"
                  data-toggle="list"
                  to="/account/profile"
                  role="tab"
                  aria-controls="home"
                >Profil Ayarları</router-link>

                <router-link
                  class="list-group-item list-group-item-action "
                  id="list-profile-list"
                  data-toggle="list"
                  to="/account/mentor"
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
                  class="list-group-item list-group-item-action "
                  id="list-messages-list"
                  data-toggle="list"
                  to="/account/investment"
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
                  class="list-group-item list-group-item-action "
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
            <!-- <div class="col form-home">
              <h3 class="left-part-title">Profil</h3>
              <p class="left-part-altTitle">Profil Bilgilerini Gir</p>
              <hr style="width:110%;  margin-right:10px ;" />
            </div>
            <form class="form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName" style="text-align:left;">ADI SOYADI</label>
                  <input type="name" class="form-control" id="inputName" placeholder="Ad ve Soyad" />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputPassword">ÜYELİK TARİHİ</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationServerUsername">KULLANICI ADI</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServerUsername"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend3"
                      required
                    />
                    <div class="invalid-feedback">Please choose a username.</div>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ŞEHİR</label>
                  <select class="custom-select" required>
                    <option value>Şehir Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ÜLKE</label>
                  <select class="custom-select" required>
                    <option value>Ülke Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">E POSTA</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="E-postanızı Giriniz"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputWebsite">WEBSİTE</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputWebsite"
                    placeholder="Web sitenizi Giriniz"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputLinkedin">LİNKEDİN</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputLinkedin"
                    placeholder="Linkedin Giriniz"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputTwitter">TWİTTER</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputTwitter"
                    placeholder="Twitteri Giriniz"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">BÖLÜM</label>
                  <select class="custom-select" required>
                    <option value>Bölüm Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">OKUL</label>
                  <select class="custom-select" required>
                    <option value>Okul Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">DENEYİM VEYA POZİSYON</label>
                  <select class="custom-select" required>
                    <option value>Deneyim Veya Pozisyonu Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ŞİRKET VEYA STARTUP</label>
                  <select class="custom-select" required>
                    <option value>Şirket Veya Startup Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
              </div>

              <div class="form-group">
                <label for="biyografi">BİYOGRAFİ</label>
                <textarea class="form-control" id="biyografi" rows="3" placeholder="Hakkında ..."></textarea>
              </div>

              <div class="form-group">
                <p
                  class="profile-etiketi"
                >PROFİL ETİKETİ ( SİZE UYGUN PROFİL TİPİ VARSA İŞARETLEYİNİZ )</p>

                <div class="col form-check-group">
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Girişimci</label>
                  </div>

                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck2" />
                    <label class="form-check-label" for="exampleCheck2">Mentor</label>
                  </div>

                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck3" />
                    <label class="form-check-label" for="exampleCheck3">Yatırımcı</label>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">YETENEKLER</label>
                  <select class="custom-select" required>
                    <option value>Yetenekler Yazınız</option>
                    <option value="healty">HEALTY</option>
                    <option value="saglik">SAĞLIK</option>
                    <option value="marketing">MARKETİNG</option>
                    <option value="front-end">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ARIYOR</label>
                  <select class="custom-select" required>
                    <option value>Yazınız</option>
                    <option value="healty">HEALTY</option>
                    <option value="saglik">SAĞLIK</option>
                    <option value="marketing">MARKETİNG</option>
                    <option value="front-end">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
              </div>
              <hr style="margin-top: 20%;" />
              <div class="row">
                <div class="col-md-3">
                  <button type="submit" class="btn btn-success save">Kaydet</button>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
              </div>
            </form> -->
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