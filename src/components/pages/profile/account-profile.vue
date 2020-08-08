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
            <form class="form" @submit.prevent="saveProfile">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">ADI SOYADI</label>
                  <input
                     @blur="$v.profile.nameSurname"
                    type="name"
                    class="form-control"
                    id="inputName"
                    v-model="profile.nameSurname"
                    placeholder="Ad ve Soyad"
                  />
                    <small
                            v-if="saveButtonClicked && $v.profile.nameSurname.$error &&  !$v.profile.nameSurname.required"
                            class="form-text text-danger mt-1"
                          >Bu Alan Zorunludur..!
                    </small>
                </div>

                <div class="form-group col-md-6">
                  <label for="inputPassword">ÜYELİK TARİHİ</label>
                  <input
                    disabled
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
                      @blur="$v.profile.username"
                      type="text"
                      class="form-control"
                      id="validationServerUsername"
                      v-model="profile.username"
                      placeholder="Kullanıcı Adınızı Giriniz"
                      aria-describedby="inputGroupPrepend3"
                      required
                    />
                    <br>
                     <br>
                     <small 
                            v-if="saveButtonClicked && $v.profile.username.$error &&  !$v.profile.username.required"
                            class="form-text text-danger mt-1 " style="margin-left:30%"
                          >Bu Alan Zorunludur..!
                    </small>
                    
                    <div class="invalid-feedback">Lütfen Bir Kullanıcı Adı Giriniz!.</div>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ŞEHİR</label>
                  <select class="custom-select"  v-model="profile.city"  >
                    <option value=0>Şehir Seçiniz</option>
                    <option
                   
                      :value="city.id"
                      :key="'city'+index"
                      v-for="(city,index) in getCities"
                    >{{city.name}}</option>

                  </select>
                  <div class="invalid-feedback">Lütfen Bir Şehir Seçiniz!</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ÜLKE</label>
                  <select class="custom-select" required v-model="profile.countryId">
                    <option value=0>Ülke Seçiniz</option>
                    <option
                      :value="country.id"
                      :key="'country'+index"
                      v-for="(country,index) in countries"
                    >{{country.name}}</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Bir Ülke Seçiniz!</div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">E POSTA</label>
                  <input
                    disabled
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
                    <option value=0>Bölüm Seçiniz</option>
                 
                    <option
                      :value="department.id"
                      :key="'department' +index"
                      v-for="(department , index) in   newDepartments == 0 ? departments:newDepartments"
                    >{{department.name}}</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">OKUL</label>
                  <select
                    class="custom-select"
                    required
                    v-model="profile.university"
                    @change="universitySelected"
                  >
                    <option value=0>Okul Seçiniz</option>
                    <option
                      :value="university.id"
                      :key="'university'+index"
                      v-for="(university,index) in getUniversities"
                    >{{university.name}}</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Bir Okul Seçiniz</div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">DENEYİM VEYA POZİSYON</label>
                  <select class="custom-select" required v-model="profile.experienceId">
                    <option value=0>Deneyim Veya Pozisyonu Seçiniz</option>
                    <option
                      :value="experience.id"
                      :key="'experience'+index"
                      v-for="(experience,index) in experiences"
                    >{{experience.name}}</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Deneyeim Ve Pozisyonu Seçiniz</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ŞİRKET VEYA STARTUP</label>
                  <select class="custom-select" required v-model="profile.companyId">
                    <option value="0">Şirket Veya Startup Seçiniz</option>
                    <option
                      :value="company.id"
                      :key="'company'+index"
                      v-for="(company,index) in companies"
                    >{{company.name}}</option>
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

                <!--
                <p v-for="(i,index) in profile.profileTags" :key="'tags'+index">{{i}}</p>
                -->

                <div class="col form-check-groups">
                  <div class="form-check" v-for="(i,index) in tags" :key="'t'+index">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      v-model="profile.profileTags"
                      :value="i.name"
                    />
                    <label class="form-check-label" for>{{i.name}}</label>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">YETENEKLER</label>
                  <select class="custom-select" required v-model="profile.skillId">
                    <option value=0>Yetenekler Yazınız</option>
                    <option
                      :value="skill.id"
                      :key="'skills'+index"
                      v-for="(skill,index) in skills"
                    >{{skill.name}}</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Bir Yeteneğini Seçiniz</div>
                </div>

                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ARIYOR</label>
                  <select class="custom-select" required v-model="profile.callingId">
                    <option value=0>Yazınız</option>
                    <option
                      :value="call.id"
                      :key="'calling'+index"
                      v-for="(call,index) in calling"
                    >{{call.name}}</option>
                  </select>
                  <div class="invalid-feedback">Lütfen Aradığınız Seçiniz</div>
                </div>
              </div>

              <hr style="margin-top:10%;width:103%" />

              <div class="row">
                <div class="col-md-3">
                  <button type="submit" class="btn btn-success save" @click="saveProfile">Kaydet</button>
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
import Vue from "vue";
import VueAlertify from "vue-alertify";
Vue.use(VueAlertify);
import {
  required,

} from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      profile: {
        id: "",
        nameSurname: "",
        membershipDate: "",
        username: "",
        countryId: "",
        city: "",
        email: "",
        website: "",
        linkedin: "",
        twitter: "",
        university: "",
        department: "",
        experienceId: "",
        companyId: "",
        biography: "",
        profileTags: [],
        skillId: "",
        callingId: "",
        updatedAt: "",
      },
        saveButtonClicked: false,
      universities: [],
      newDepartments: [],
      departments: [],
      tags: [
        { id: 1, name: "girisimci" },
        { id: 2, name: "mentor" },
        { id: 3, name: "yatirimci" },
      ],
      countries: [{ id: 1, name: "Türkiye" }],
      experiences: [{ id: 1, name: "FOUNDER" }],
      skills: [
        { id: 1, name: "HEALTY" },
        { id: 2, name: "SAĞLIK" },
        { id: 3, name: "MARKETING" },
        { id: 4, name: "FRONT-END" },
      ],

      calling: [
        { id: 1, name: "HEALTY" },
        { id: 2, name: "SAĞLIK" },
        { id: 3, name: "MARKETING" },
        { id: 4, name: "FRONT-END" },
      ],

      companies: [{ id: 1, name: "STARTWORK" }],
    };
  },
  methods: {
    saveProfile() {

      this.saveButtonClicked = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      //this.profile.school = this.profile.school.name;
      console.log("save profile register bilgiler --->", { ...this.profile });

      this.$store.dispatch("registerProfile", { ...this.profile }).then(
        (result) => {
          this.$alertify.alertWithTitle("Kayıt Bilgisi", result.data, () =>
            this.$alertify.success("Profil Kayıt işlemi başarılı")
          );
        },
        (error) => {
          this.$alertify.alertWithTitle("Kayıt Bilgisi", error, () =>
            this.$alertify.error("Kayıt işlemi başarısız")
          );
        }
      );

 
    },

    universitySelected() {
      this.newDepartments = this.departments.filter(
        (p) => p.uni_id == this.profile.university
      );
    },
  },
  created() {
    this.$store.dispatch("getUniversities");

    this.$store.dispatch("getCities").then((res) => {
    
    });
      this.$store.dispatch("getDepartments").then((res) => {
      this.departments = res.data;
    });

    this.$store.dispatch("getProfiles").then((res) => {
      this.profile.id = res.data.id;
      this.profile.nameSurname = res.data.nameSurname;
      this.profile.membershipDate = res.data.createdAt;
      this.profile.username = res.data.username;
      this.profile.city =  res.data.city == null ?  0 : res.data.city.id;
      this.profile.countryId = res.data.countryId;
      this.profile.email = res.data.email;
      this.profile.website = res.data.website;
      this.profile.linkedin = res.data.linkedin;
      this.profile.twitter = res.data.twitter;
      this.profile.university = res.data.university == null ? 0 :res.data.university.id;
      this.profile.department = res.data.department == null ? 0 : res.data.department.id;
      this.profile.experienceId = res.data.experienceId;
      this.profile.companyId = res.data.companyId;
      this.profile.biography = res.data.biography;
      this.profile.profileTags = res.data.profileTags;
      this.profile.skillId = res.data.skillId;
      this.profile.callingId = res.data.callingId;

    });
  
  },
  computed: {
    ...mapGetters([
      "getCities",
      "getUniversities",
      "getDepartments",
      "getProfiles",
    ]),
  },

   validations: {
    profile: {
      nameSurname: {
        required,
      },
      username:{
        required,
      }
      
    },
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