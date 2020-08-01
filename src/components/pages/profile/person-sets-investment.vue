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
                    YATIRIMCI MÜSÜSÜNÜZ ? ( BU
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
                        v-model="investment.isInvesment"
                        value="true"
                      />
                      <label class="form-check-label" for="exampleCheck2">Evet</label>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-check">
                      <input
                        type="radio"
                        v-model="investment.isInvesment"
                        class="form-check-input"
                        value="false"
                      />
                      <label class="form-check-label" for="exampleCheck1">Hayır</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <p style="text-align: initial;">PORTFÖY EKLE</p>
                  <select class="custom-select" v-model="investment.portfoyId" required>
                    <option value="0">Yetenekler Yazınız</option>
                    <option value="1">STARTUP ADI</option>
                    <option value="2">SAĞLIK</option>
                    <option value="3">MARKETİNG</option>
                    <option value="4">FRONT-END</option>
                  </select>
                  <div class="invalid-feedback">Example invalid custom select feedback</div>
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
                          v-model="investment.isStatus"
                          type="radio"
                          value="true"
                          class="form-check-input"
                        />
                        <label class="form-check-label">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          v-model="investment.isStatus"
                          type="radio"
                          value="false"
                          class="form-check-input"
                        />
                        <label class="form-check-label">Hayır</label>
                      </div>
                    </div>
                  </div>
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
                          v-model="investment.isSector"
                          value="true"
                          class="form-check-input"
                        />
                        <label class="form-check-label" for="exampleCheck2">Evet</label>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-check">
                        <input
                          type="radio"
                          v-model="investment.isSector"
                          value="false"
                          class="form-check-input"
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
                  >YATIRIM AŞAMASI TERCİHİ VAR MI ?</p>
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
                  >YATIRIM AŞAMASI TERCİHİ</p>
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


<script>
export default {
  data() {
    return {
      investment: {
        isInvesment: false,
        portfoyId: 0,
        isStatus: false,
        isSector: false,
      },
    };
  },
};
</script>


<style scoped>
@import "invesment.css";
</style>