<template >
  <div class="container-fluid account-profile">
    <div class="container-fluid top-part">
      <div class="row">
        <div class="col-md-3">
          <div class="text-center picture-part">
            <img src="../../../assets/images/pp.jpg" class="picture" alt="..." />
          </div>
        </div>
        <div class="col-md-4 top-part-informations">
          <h5>Startup Name</h5>
          <p class="mb-1">@startupid</p>
          <br />

          <div class="row list-properties">
            <div class="col-md-4">
              <p>INVESTOR</p>
            </div>
            <div class="col-md-4">
              <p class="list">MENTOR</p>
            </div>
            <div class="col-md-4">
              <p class="list">ENTREPRENEUR</p>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-3 top-part-right">
          <div class="col-md-12">
            <div class="row">
              <div class="col-4">
                <button type="button" class="btn btn-primary btn-sm">Mesaj</button>
              </div>
              <div class="col-4">
                <button type="button" class="btn btn-primary btn-sm">Takip</button>
              </div>
              <div class="col-2"></div>
              <div class="col-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="coninter links">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-md-2">
                <a href="/home#/account-profile" class="stretched-link">Timeline</a>
              </div>
              <div class="col-md-2">
                <a href="/home#/account-profile" class="stretched-link">Hakkında</a>
              </div>
              <div class="col-md-3">
                <a href="/home#/account-profile" class="stretched-link">Sosyal 580</a>
              </div>
              <div class="col-md-2">
                <a href="/home#/account-profile" class="stretched-link">İşler</a>
              </div>
              <div class="col-md-2">
                <a href="/home#/account-profile" class="stretched-link">Finansman</a>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
      </div>
    </div>
    <div class="container about-part">
      <div class="row">
        <div class="col-md-12">
          <h6 class="about-title">Hakkında</h6>
          <hr style="width: 102%;margin-left: -1%;" />
        </div>

        <div class="container social-accounts">
          <div class="row">
            <div class="col-md-3">
              <i class="far fa-comment" style="font-size:24px;margin-left:10px"></i>
              deneme@gmail.com
            </div>

            <div class="col-md-3">
              <i class="fas fa-map-marker-alt" style="font-size:24px;margin-right:10px"></i>İstabul , Turkey
            </div>
            <div class="col-md-3">
              <i class="far fa-user" style="font-size:24px;margin-right: 10px;"></i>
              username
            </div>
            <div class="col-md-3"></div>
          </div>
        </div>
        <div class="container biyografi-part">
          <div class="row">
            <div class="col-md-12">
              <h6 style="margin-top: 2%;color: rgb(142, 180, 180);">BIYOGRAFI</h6>
              <p>Ben bir biyografi yazisi yazmak için yapıyorum</p>
            </div>
          </div>
        </div>

        <div class="container skills-part">
          <div class="row list-properties">
            <div class="col-md-6">
              <h6 class="skills-title-part">YETENEKLER</h6>
              <div class="row">
                <div class="col-md-4">
                  <p class="list">INVESTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">MENTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">ENTREPRENEUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mentor-part">
          <div class="row list-properties">
            <div class="col-md-6">
              <h6 class="mentor-title-part">MENTOR ODAK SEKTÖR</h6>
              <div class="row">
                <div class="col-md-4">
                  <p>INVESTOR</p>
                </div>
                <div class="col-md-4">
                  <p>MENTOR</p>
                </div>
                <div class="col-md-4">
                  <p>ENTREPRENEUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container investmentpart">
          <div class="row list-properties">
            <div class="col-md-6">
              <h6 class="investment-title-part">YATIRIM ODAK SEKTÖR</h6>
              <div class="row">
                <div class="col-md-4">
                  <p class="list">INVESTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">MENTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">ENTREPRENEUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container program-type">
          <div class="row list-properties">
            <div class="col-md-6">
              <h6 class="program-title-type">PROGRAM TÜRÜ</h6>
              <div class="row">
                <div class="col-md-4">
                  <p class="list">INVESTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">MENTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">ENTREPRENEUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container investment-stage">
          <div class="row list-properties">
            <div class="col-md-6">
              <h6 class="investment-title-stage">YATIRIM AŞAMASI</h6>
              <div class="row">
                <div class="col-md-4">
                  <p class="list">INVESTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">MENTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">ENTREPRENEUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container calling">
          <div class="row list-properties">
            <div class="col-md-6">
              <h6 class="calling-title">ARIYOR</h6>
              <div class="row">
                <div class="col-md-4">
                  <p class="list">INVESTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">MENTOR</p>
                </div>
                <div class="col-md-4">
                  <p :class="list">ENTREPRENEUR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container under-part">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <img
                    src="../../../assets/images/pp.jpg"
                    alt="JR"
                    class="rounded-circle"
                    style="width: 100%;"
                  />
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-5 list-properties">
                      <p class="list" style="font-size: 10px;margin-bottom:5px">FOUNDER</p>
                    </div>
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-1" style="font-size:17px">of</div>
                        <div class="col-md-9">
                          <h6 style="font-weight: bold;font-size:17px">Startwork</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="col-md-6"
                      style="color: rgb(182, 195, 207);margin-right: -30px;font-size: 15px;"
                    >
                      <p style="margin-top:10px">Daha Önce :</p>
                    </div>
                    <div
                      class="col-md-6"
                      style="color: rgb(182, 195, 207);margin-right: -30px;font-size: 15px;"
                    >
                      <p style="font-size: 17px;margin-top:10px">Lambo And BMW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-4"></div>
          </div>
        </div>
        <div class="container under-part">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <img
                    src="../../../assets/images/pp.jpg"
                    alt="JR"
                    class="rounded-circle"
                    style="width: 100%;"
                  />
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-5 list-properties">
                      <p class="list" style="font-size: 10px;margin-bottom:5px">DEVELOPER</p>
                    </div>
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-1" style="font-size:17px">of</div>
                        <div class="col-md-9">
                          <h6 style="font-weight: bold;">Startwork</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="col-md-6"
                      style="color: rgb(182, 195, 207);margin-right: -30px;font-size: 15px;"
                    >
                      <p style="margin-top:5px">Daha Önce :</p>
                    </div>
                    <div
                      class="col-md-6"
                      style="color: rgb(182, 195, 207);margin-right: -30px;font-size: 15px;"
                    >
                      <p
                        style="color: rgb(182, 195, 207);margin-right: -30px;font-size: 15px;"
                      >Lambo And BMW</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mentor-area">
      <div class="row">
        <div class="col-md-12">
          <h6 class="mentor-area-title">Mentörlük</h6>
          <hr style="width: 102%;margin-left: -1%;" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3">
                  <img
                    src="../../../assets/images/pp.jpg"
                    class="rounded-circle"
                    style="width: 60%;"
                    alt="..."
                  />
                </div>
                <div class="col-md-7" style="margin-left: -20px;">
                  <h6 style="font-weight:bold">Hernon Howard</h6>
                  <p style="color: rgb(74, 79, 83); margin-top: 0px;">Product Designer at Dribble</p>
                  <p
                    style="color: rgb(74, 79, 83);margin-top: 0px;font-size: 15px;"
                  >Katherine allen and 12 other mutual friends</p>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-primary btn-sm" style="margin-top: 15%;">Takip</button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3">
                  <img
                    src="../../../assets/images/pp.jpg"
                    class="rounded-circle"
                    style="width: 60%;"
                    alt="..."
                  />
                </div>
                <div class="col-md-7" style="margin-left: -20px;">
                  <h6 style="font-weight:bold">Hernon Howard</h6>
                  <p style="color: rgb(74, 79, 83); margin-top: -5px;">Product Designer at Dribble</p>
                  <p
                    style="color: rgb(74, 79, 83);margin-top: 5px;font-size: 15px;"
                  >Katherine allen and 12 other mutual friends</p>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-primary btn-sm" style="margin-top: 15%;">Takip</button>
                </div>
              </div>
            </div>
            <hr style="width: 102%;margin-left: 0%;" />
          </div>
        </div>
      </div>
    </div>
    <div class="container investment-title-part">
      <div class="row">
        <div class="col-md-12">
          <h6>Yatırımlar</h6>
          <hr style="width: 102%;margin-left: -1%;" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3">
                  <img
                    src="../../../assets/images/pp.jpg"
                    class="rounded-circle"
                    style="width: 60%;"
                    alt="..."
                  />
                </div>
                <div class="col-md-7" style="margin-left: -20px;">
                  <h6>Hernon Howard</h6>
                  <p style="color: rgb(74, 79, 83); margin-top: -5px;">Product Designer at Dribble</p>
                  <p
                    style="color: rgb(74, 79, 83);margin-top: -17px;font-size: 15px;"
                  >Katherine allen and 12 other mutual friends</p>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-primary btn-sm" style="margin-top: 15%;">Takip</button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-3">
                  <img
                    src="../../../assets/images/pp.jpg"
                    class="rounded-circle"
                    style="width: 60%;"
                    alt="..."
                  />
                </div>
                <div class="col-md-7" style="margin-left: -20px;">
                  <h6>Hernon Howard</h6>
                  <p style="color: rgb(74, 79, 83); margin-top: -5px;">Product Designer at Dribble</p>
                  <p
                    style="color: rgb(74, 79, 83);margin-top: -17px;font-size: 15px;"
                  >Katherine allen and 12 other mutual friends</p>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-primary btn-sm" style="margin-top: 15%;">Takip</button>
                </div>
              </div>
            </div>
            <hr style="width: 102%;margin-left: 0%;" />
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
      profile: {
        nameSurname: "",
        username: "",
        city: "",
        country: "",
        email: "",
        website: "",
        linkedin: "",
        twitter: "",
        department: "",
        school: "",
        experience: "",
        company: "",
        biography: "",
        createdAt: "",
        updatedAt: "",
      },
    };
  },
  methods: {
    getLoginProfile(loginProfile) {
      profile.email = loginProfile.email;
      profile.createdAt = loginProfile.createdAt;
      profile.nameSurname = loginProfile.nameSurname;
    },
  },
};

//@import './account.profile.css';
</script>
<style scoped>
.account-profile {
  margin-top: 110px;
}
.top-part {
  margin-top: 1%;
  border: 1px sloid red;
  background-color: yellow;
  box-shadow: 1px 1px 1px 1px grey;
  background-color: white;
  padding-top: 1%;
  padding-bottom: 0.5%;
}

.picture-part img {
  border-radius: 50%;
  width: 60%;
}

.top-part-informations {
  color: black;
  margin-top: 1%;
}

.top-part-right {
  margin-top: 1%;
}

.top-part-right-under-part {
  margin-top: 7%;
}

.links {
  margin-top: 1%;
}
.links a {
  color: rgb(87, 80, 80);
  font-weight: bold;
}

.links a:hover {
  color: blue;
}
a:active {
  color: blue;
}

.list-properties p {
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 5px 2px 5px;
  text-align: center;
  background-color: blue;
  color: white;
  font-size: 15px;
  font-weight: 600;
}
.about-part {
  margin-top: 30px;
  border: 1px solid rgb(207, 217, 218);
  box-shadow: 1px 1px 1px 1px rgb(233, 227, 227);
  padding-bottom: 1%;
  text-align: left;
}

.about-part .about-title {
  margin-top: 4%;
  font-weight: bold;
}

.social-accounts {
  margin-top: 1%;
  margin-bottom: 1%;
}

.biyografi-part {
  margin-top: 1%;
  margin-bottom: 3%;
}

.skills-part {
  margin-top: 1%;
  margin-bottom: 2%;
}

.skills-title-part {
  margin-top: 1%;
  margin-bottom: 2%;
  color: rgb(142, 180, 180);
}

.mentor-part {
  margin-top: 1%;
  margin-bottom: 2%;
}

.mentor-title-part {
  margin-top: 1%;
  margin-bottom: 2%;
  color: rgb(142, 180, 180);
}

.investment-part {
  margin-top: 1%;
  margin-bottom: 2%;
}

.investment-title-part {
  margin-top: 1%;
  margin-bottom: 2%;
  color: rgb(142, 180, 180);
}

.program-type {
  margin-top: 1%;
  margin-bottom: 2%;
}

.program-title-type {
  margin-top: 1%;
  margin-bottom: 2%;
  color: rgb(142, 180, 180);
}

.investment-stage {
  margin-top: 1%;
  margin-bottom: 1%;
}
.investment-title-stage {
  margin-top: 1%;
  margin-bottom: 2%;
  color: rgb(142, 180, 180);
}

.calling {
  margin-top: 1%;
  margin-bottom: 10%;
}
.calling-title {
  margin-top: 1%;
  margin-bottom: 2%;
  color: rgb(142, 180, 180);
}

.under-part {
  padding-top: 1%;
}

.mentor-area {
  margin-top: 2%;
  border: 1px sloid red;
  background-color: yellow;
  box-shadow: 1px 1px 1px 1px grey;
  background-color: white;
  padding-top: 1%;
  padding-bottom: 0.5%;
}

.mentor-area-title{
    text-align: left;
    font-weight: bold;
    margin-left: 20px;
    margin-top:10px;
    font-size:20px;
}
</style>