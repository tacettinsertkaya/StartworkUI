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
                  <input
                    type="name"
                    class="form-control"
                    id="inputName"
                    v-model="profile.nameSurname"
                    placeholder="Ad ve Soyad"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputPassword">ÜYELİK TARİHİ</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCalender"
                    v-model="profile.membershipDate"
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
                    <!-- input içindeki class içine  is-valid -->
                    <input
                      type="text"
                      class="form-control"
                      id="validationServerUsername"
                      v-model="profile.username"
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
                  <select class="custom-select" required v-model="profile.city">
                    <option value>Şehir Seçiniz</option>
                    <option
                      :value="city.il_name"
                      :key="'city'+index"
                      v-for="(city,index) in getCities"
                    >{{city.il_name}}</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ÜLKE</label>
                  <select class="custom-select" required v-model="profile.country">
                    <option value>Ülke Seçiniz</option>
                    <option value="Türkiye">Türkiye</option>
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
                    v-model="profile.email"
                    placeholder="E-postanızı Giriniz"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputWebsite">WEBSİTE</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputWebsite"
                    v-model="profile.website"
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
                    v-model="profile.linkedin"
                    placeholder="Linkedin Giriniz"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="inputTwitter">TWİTTER</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputTwitter"
                    v-model="profile.twitter"
                    placeholder="Twitteri Giriniz"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">BÖLÜM</label>
                  <select class="custom-select" required v-model="profile.department">
                    <option value>Bölüm Seçiniz</option>
                    <option
                      :value="department.bolum_ad"
                      :key="'department' +index"
                      v-for="(department , index) in newDepartments"
                    >{{department.bolum_ad}}</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">OKUL</label>
                  <select
                    class="custom-select"
                    required
                    v-model="profile.school"
                    @change="schoolSelected"
                  >
                    <option value>Okul Seçiniz</option>
                    <option
                      :value="school.uni_id"
                      :key="'school'+index"
                      v-for="(school,index) in getSchools"
                    >{{school.uni_name}}</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Bir Okul Seçiniz</div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">DENEYİM VEYA POZİSYON</label>
                  <select class="custom-select" required v-model="profile.experience">
                    <option value>Deneyim Veya Pozisyonu Seçiniz</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="sanlıurfa">Şanlıurfa</option>
                    <option value="diyarbakir">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Deneyeim Ve Pozisyonu Seçiniz</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ŞİRKET VEYA STARTUP</label>
                  <select class="custom-select" required v-model="profile.company">
                    <option value>Şirket Veya Startup Seçiniz</option>
                    <option value="1">İstanbul</option>
                    <option value="2">Şanlıurfa</option>
                    <option value="3">Diyarbakır</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Bir Şirket Veya Startup Seçiniz</div>
                </div>
              </div>

              <div class="form-group">
                <label for="biyografi">BİYOGRAFİ</label>
                <textarea
                  class="form-control"
                  id="biyografi"
                  rows="3"
                  v-model="profile.biography"
                  placeholder="Hakkında ..."
                ></textarea>
              </div>

              <div class="form-group">
                <p
                  class="profile-etiketi"
                >PROFİL ETİKETİ (SİZE UYGUN PROFİL TİPİ VARSA İŞARETLEYİNİZ)</p>
                
                <p v-for="(i,index) in profile.profileTags"   :key="'tags'+index">{{i}}</p>

                <div class="col form-check-groups">
                  <div class="form-check"  v-for="(i,index) in tags"   :key="'t'+index">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="profile.profileTags"
                      :value="i.name"
                      
                    />
                    <label class="form-check-label" for="" >{{i.name}}</label>
                  </div>
    
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">YETENEKLER</label>
                  <select class="custom-select" required v-model="profile.skill">
                    <option value>Yetenekler Yazınız</option>
                    <option value="1">HEALTY</option>
                    <option value="2">SAĞLIK</option>
                    <option value="3">MARKETİNG</option>
                    <option value="4">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Bir Yeteneğini Seçiniz</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ARIYOR</label>
                  <select class="custom-select" required v-model="profile.calling">
                    <option value>Yazınız</option>
                    <option value="1">HEALTY</option>
                    <option value="2">SAĞLIK</option>
                    <option value="3">MARKETİNG</option>
                    <option value="4">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Aradığınız Seçiniz</div>
                </div>
              </div>

              <hr style="margin-top:10%;width:103%" />

              <div class="row">
                <div class="col-md-3">
                  <button type="submit" class="btn btn-success save" @click="save">Kaydet</button>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      profile: {
        nameSurname: "",
        membershipDate: "",
        username: "",
        country: "",
        city: "",
        email: "",
        website: "",
        linkedin: "",
        twitter: "",
        department: "",
        school: "",
        experience: "",
        company: "",
        biography: "",
        profileTags: [],
        skill: "",
        calling: "",
      },
      schools: [],
      newDepartments: [],
      departments: [],
      tags: [{id:1,name:"girisimci"},{id:2,name:"mentor"},{id:3,name:"yatirimci"}],
    };
  },
  methods: {
    save() {
      console.log("Profil Bilgileri ----> : ", { ...this.profile });

      //  this.doneTodosCount();
    },

    schoolSelected() {
      this.newDepartments = this.departments.filter(
        (p) => p.uni_id == this.profile.school
      );
    },
  },
  created() {
    this.$store.dispatch("getSchools").then((res) => {
      this.schools = res.data;
    });
    this.$store.dispatch("getCities");
    this.$store.dispatch("getDepartments").then((res) => {
      this.departments = res.data;
    });
  },
  computed: {
    ...mapGetters(["getCities", "getSchools", "getDepartments"]),
  },
};
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

label {
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