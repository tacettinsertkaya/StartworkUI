<template>
  <div class="container home">
    <div class="row">
      <div class="col-md-12">
        <div class="row homepage">
          <div class="col-md-12 left-part">
            <div class="col form-home">
              <h3 class="left-part-title">Profil</h3>
              <p class="left-part-altTitle">Profil Bilgilerini Gir</p>
              <hr style="width:110%;  margin-right:10px ;" />
            </div>

            <form class="form">
              <div class="form-row">
                <div class="form-group col-md-10">
                  <p style="color: rgb(184, 174, 161);margin-top: 10px;">
                    MENTOR MÜSÜSÜNÜZ ? ( BU
                    BİLGİLER EŞLEŞTİRMELERDE KULLANILACAKTIR )
                  </p>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <div class="col-md-4">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="checkbox"
                        id="exampleCheck2"
                      />
                      <label class="form-check-label" for="exampleCheck2">Evet</label>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name="checkbox"
                        id="exampleCheck2"
                      />
                      <label class="form-check-label" for="exampleCheck1">Hayır</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">PORTFÖY EKLE</label>
                  <select class="custom-select" required>
                    <option value>Yetenekler Yazınız</option>
                    <option value="healty">STARTUP ADI</option>
                    <option value="saglik">SAĞLIK</option>
                    <option value="marketing">MARKETİNG</option>
                    <option value="front-end">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >MENTORLÜK İÇİN MÜSAİT MİSİNİZ ?</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Hayır</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >MENTORLÜK İÇİN SEKTÖR TERCİHİ</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Hayır</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="validationServerUsername">ODAK SEKTÖR</label>
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

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >MENTORLÜK İÇİN YATIRIM AŞAMASI TERCİHİ VAR MI ?</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Hayır</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row form-check-group">
                  <p
                    style="color: rgb(184, 174, 161);margin-top: 10px;margin-left: 10PX;"
                  >MENTORLÜK YATIRIM AŞAMASI TERCİHİ</p>
                </div>

                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Ön Tohum</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Seri B</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Tohum</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Seri C</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Seri A Öncesi</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Seri D</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="row form-check-group">
                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck2">Seri A</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="checkbox"
                          id="exampleCheck2"
                        />
                        <label class="form-check-label" for="exampleCheck1">Seri E</label>
                      </div>
                    </div>
                  </div>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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