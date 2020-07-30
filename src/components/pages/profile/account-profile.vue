<template>
  <div class="container home">
    <div class="row">
      <div class="col-md-12">
        <div class="row homepage">
          <div class="col-md-12 left-part">
            <div class="col form-home">
              <h3 class="left-part-title">Profil</h3>
              <p class="left-part-altTitle">Profil Bilgilerini Gir</p>
              <hr style="width:105%;" />
            </div>
            <form class="form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">ADI SOYADI</label>
                  <input type="name" class="form-control" id="inputName" placeholder="Ad ve Soyad" />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputPassword">ÜYELİK TARİHİ</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCalender"
                    placeholder="Tarih Giriniz"
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
                    <!-- input içindeki is-valid-->
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServerUsername"
                      placeholder="Kullanıcı Adınızı Giriniz"
                      aria-describedby="inputGroupPrepend3"
                      required
                    />
                    <div class="invalid-feedback">Lütfen Bir Kullanıcı Adı Giriniz!.</div>
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
                >PROFİL ETİKETİ (SİZE UYGUN PROFİL TİPİ VARSA İŞARETLEYİNİZ)</p>

                <div class="col form-check-groups">
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
                    <option value="1">HELTY</option>
                    <option value="2">SAĞLIK</option>
                    <option value="3">MARKETİNG</option>
                    <option value="4">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ARIYOR</label>
                  <select class="custom-select" required>
                    <option value>Yazınız</option>
                    <option value="1">HELTY</option>
                    <option value="2">SAĞLIK</option>
                    <option value="3">MARKETİNG</option>
                    <option value="4">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
              </div>

              <hr style="margin-top:10%;width:103%">

              <div class="row">
                <div class="col-md-3">
                  <button type="submit" class="btn btn-success save">Kaydet</button>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
                <div class="col-md-3"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.home {
  margin-bottom: 10px;
}
.box {
  margin-top: 20px;
  width: 100%;
  border: 5px solid white;
  padding: 10px;
  box-shadow: 2px 2px 2px 2px grey;
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

 label   {
 text-align: left;
  color: rgb(159, 167, 158);
  margin-inline-start: 10px;
}

.profile-etiketi {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.form-check-groups {
  text-align: left;
  margin-bottom: 5%;
}
.form-check-label {
  margin-left: 10px;
  text-align: left;
  color: black;
  font-size: 18px;
}

.save {
  margin-top: 20px;
  text-align: center;
  width: 80%;
}
</style>