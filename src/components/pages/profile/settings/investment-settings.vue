<template>
  <div class="container home">
    <div class="row">
      <div class="col-md-12">
        <div class="row homepage">
          <div class="col-md-12 left-part">
            <div class="col form-home">
              <h3 class="left-part-title">Profil</h3>
              <p class="left-part-altTitle">Profil Bilgilerini Gir</p>
              <hr style="width:105.5%;" />
            </div>

            <form class="form" @submit.prevent="saveInvestor">
              <div class="form-row">
                <div class="form-group col-md-10">
                  <p style="color: rgb(184, 174, 161);margin-top: 10px;">
                    YATIRIM MÜSÜNÜZ ? ( BU
                    BİLGİLER EŞLEŞTİRMELERDE KULLANILACAKTIR )
                  </p>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <div class="col-md-4">
                    <div class="form-check">
                      <input
                        type="radio"
                        class="form-check-input"
                        :value="true"
                        v-model="investor.isInvesment"
                        name="checkbox"
                        id="exampleCheck2"
                      />
                      <label class="form-check-label" for="exampleCheck2">Evet</label>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-check">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="checkbox"
                        :value="false"
                        v-model="investor.isInvesment"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">Hayır</label>
                    </div>
                  </div>
                </div>

                <small
                  v-if="saveButtonClicked && $v.investor.isInvesment.$error &&  !$v.investor.isInvesment.required"
                  class="form-text text-danger mt-1"
                >Bu Alan Zorunludur..!</small>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">PORTFÖY EKLE</label>
                  <select v-model="investor.portfoyId" class="custom-select" required>
                    <option value=0>Yetenekler Giriniz</option>
                    <option :value="portfolio.id" :key="'portfolio'+index" 
                    v-for="(portfolio,index) in portfolios">{{portfolio.name}}</option>
                   
                  </select>
                  <small
                    v-if="
                    $v.investor.portfoyId.$error && 
                     !$v.investor.portfoyId.required ||
                     !$v.investor.portfoyId.between "
                    class="form-text text-danger mt-1"
                  >Lütfen Bir Portföy Eklemek İçin Bir Alan Seçiniz..!</small>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >YATIRIM İÇİN MÜSAİT MİSİNİZ ?</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="radio3"
                          :value="true"
                          v-model="investor.isStatus"
                        />
                        <label class="form-check-label">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          :value="false"
                          v-model="investor.isStatus"
                        />
                        <label class="form-check-label">Hayır</label>
                      </div>
                    </div>
                  </div>
                  <small
                    v-if="saveButtonClicked && $v.investor.isStatus.$error &&  !$v.investor.isStatus.required"
                    class="form-text text-danger mt-1"
                  >Bu Alan Zorunludur..!</small>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >YATIRIM İÇİN SEKTÖR TERCİHİ</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          :value="true"
                          v-model="investor.isSector"
                        />
                        <label class="form-check-label">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          :value="false"
                          v-model="investor.isSector"
                        />
                        <label class="form-check-label">Hayır</label>
                      </div>
                    </div>
                  </div>
                  <small
                    v-if="saveButtonClicked && $v.investor.isSector.$error &&  !$v.investor.isSector.required"
                    class="form-text text-danger mt-1"
                  >Bu Alan Zorunludur..!</small>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ODAK SEKTÖR</label>
                  <select v-model="investor.destinationSectorId" class="custom-select" required>
                    <option value=0>Odak Sektörünü Giriniz</option>
                    <option :value="sector.id" :key="'sector'+index" v-for="(sector,index) in sectors" >{{sector.name}}</option>
                  
                  </select>
                  <small
                    v-if=" $v.investor.destinationSectorId.$error && 
                     !$v.investor.destinationSectorId.required" ||
                      !$v.investor.destinationSectorId.between
                    class="form-text text-danger mt-1"
                  >Lütfen Bir Odak Sektörü Seçiniz..!</small>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >YATIRIM İÇİN YATIRIM AŞAMASI TERCİHİ VAR MI ?</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          :value="true"
                          v-model="investor.isInvestmentStep"
                        />
                        <label class="form-check-label">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          :value="false"
                          v-model="investor.isInvestmentStep"
                        />
                        <label class="form-check-label">Hayır</label>
                      </div>
                    </div>
                  </div>
                  <small
                    v-if="saveButtonClicked && $v.investor.isInvestmentStep.$error &&  !$v.investor.isInvestmentStep.required"
                    class="form-text text-danger mt-1"
                  >Bu Alan Zorunludur..!</small>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10px;"
                  > YATIRIM AŞAMASI TERCİHİ</p>
                </div>
               
             

                <div class="row form-check-group">
                  <div class="col-md-4" v-for="(i,index) in investmentSteps" :key="'investmentStepIds'+index">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="investor.investmentStepIds"
                        :value="i.id"
                      />
                     <label class="form-check-label" for>{{i.name}}</label>
                    </div>
                  </div>
                </div>
                <small
                  v-if="saveButtonClicked && $v.investor.investmentStepIds.$error &&  !$v.investor.investmentStepIds.required"
                  class="form-text text-danger mt-1"
                >Bu Alan Zorunludur..!</small>
              </div>

              <hr style="margin-top: 20%;" />
              <div class="row">
                <div class="col-md-3">
                  <button type="submit" class="btn btn-success save"
                   :disabled="saveEnabled"
                   @click="saveInvestor">Kaydet</button>
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
import { required ,between} from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      investor: {
        id: 0,
        isInvesment: "",
        portfoyId: 0,
        isStatus: "",
        isSector: "",
        destinationSectorId: 0,
        isInvestmentStep: "",
        investmentStepIds: [],
        updatedAt: new Date(),
        createdAt: "",
      },
      saveButtonClicked: false,
      investmentSteps: [
        { id: 1, name: "Ön Tohum" },
        { id: 2, name: "Seri B" },
        { id: 3, name: "Tohum" },
        { id: 4, name: "Seri C" },
        { id: 5, name: "Seri A Öncesi" },
        { id: 6, name: "Seri D" },
        { id: 7, name: "Seri A" },
        { id: 8, name: "Seri E" },
      ],
      portfolios:[
        {id:1,name:"STARTUP ADI"},
        {id:2,name:"HEALTY"},
        {id:3,name:"MARKETING"},
        {id:4,name:"FRONT-END"}
      ],
      sectors:[
        {id:1,name:"HEALTY"},
        {id:2,name:"SAĞLIKLI"},
        {id:3,name:"MARKETING"},
        {id:4,name:"FRONT-END"}
      ]
    };
  },
  methods: {
    saveInvestor() {
      this.saveButtonClicked = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log("save investor register bilgiler --->", { ...this.investor });


      this.$store.dispatch("registerInvestor", { ...this.investor }).then(
        (result) => {
          this.$alertify.success(" Kayıt işlemi başarılı");
        },
        (error) => {
          this.$alertify.error("Kayıt işlemi başarısız");
        }
      );
      
    },
  },
  created() {
    var userData = JSON.parse(localStorage.getItem("user"));
    let userId = userData.id;


    this.$store.dispatch("getInvestor", userId)

    .then((res) => {
      console.log("Gelen investor -------->:", res);
      
      this.investor.id = res.data.id;
      this.investor.isInvesment = res.data.isInvesment;
      this.investor.portfoyId = res.data.portfoyId;
      this.investor.isStatus = res.data.isStatus;
      this.investor.isSector = res.data.isSector;
      this.investor.destinationSectorId = res.data.destinationSectorId;
      this.investor.isInvestmentStep = res.data.isInvestmentStep;
      this.investor.investmentStepIds = res.data.investmentStepIds;
      this.investor.updatedAt = res.data.updatedAt;
      this.investor.createdAt = res.data.createdAt;

      
    });
    
  },
  computed: {
    ...mapGetters(["getInvestor"]),
     saveEnabled() {
      if (
        this.investor.portfoyId > 0 &&
        this.investor.destinationSectorId > 0 
      ) {
        console.log("this.investor.city-------->", this.investor.portfoyId);
        return false;
      } else {
        console.log(" true this.investor.city-------->:", this.investor.destinationSectorId);
        return true;
      }
    },
  },

  validations: {
    investor: {
      isInvesment: {
        required,
      },
      portfoyId: {
        required,
         between: between(1, 100000),
      },
      isStatus: {
        required,
      },
      isSector: {
        required,
      },
      destinationSectorId: {
        required,
         between: between(1, 100000),
      },
      isInvestmentStep: {
        required,
      },
      investmentStepIds: {
        required,
      },
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
  width: 103%;
  border: 5px solid white;
  padding: 10px;
  box-shadow: 10px 10px 10px 10px grey;
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
  color: rgb(164, 185, 181);
}
.form-check-group {
  color: black;
  text-align: left;
}
.form-check-input {
  margin-top: 9px;
}
.form-check-label {
  text-align: left;
  color: black;
  margin-left: 10px;
  font-size: 17px;
}

.save {
  text-align: left;
  width: 80%;
  text-align: center;
}
</style>