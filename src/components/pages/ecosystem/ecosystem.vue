<template>
  <div class="uik-container-v__container">
    <div class="container">
      <div class="startup-page-titile">
        <h1>Startup Ekosistemini Keşfet</h1>
      </div>
      <div
        class="startup-header"
        style="background-image: url(@/assets/images/startup-header-bg.jpg);"
      >
        <div class="startup-header-row1">
          <div class="startup-header-logo">
            <img src="@/assets/images/startup-logo.png" />
            <div class="startups-logo-text">Startups</div>
          </div>
          <div class="startup-header-btn-premium">
            <a href="javascript:;">PREMIUM</a>
          </div>
        </div>
        <div class="startup-header-row2">
          <div class="startup-header-details">
            <h2>
              Sürdürülebilir bir ekosistem için
              <br class="startup-header-details-br" />dijitaldeyiz.
            </h2>
            <button
              class="uik-btn__base uik-btn__success"
              type="button"
              data-toggle="modal"
              data-target="#StartupOlustur"
            >Startup Oluştur!</button>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="StartupOlustur"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content" style="width:100%">
            <div class="modal-header">
              <h5 class="modal-title" id="StartupOlustur">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form
                class="form-horizontal"
                autocomplete="off"
                enctype="multipart/form-data"
                method="post"
                accept-charset="utf-8"
              >
                <div class="form-group">
                  <label for="exampleFormControlInput1">Startup Adı</label>
                  <input type="text" class="form-control" name="Adi" placeholder="StartWork" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Startup Kısaca</label>
                  <input
                    type="text"
                    class="form-control"
                    name="Kisaca"
                    placeholder="Dijital Dünyanın Girişimcileri"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Geliştirme Alanı</label>
                  <input type="text" class="form-control" name="StartKonum" placeholder="Bursa" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Startup Logo</label>
                  <input type="file" class="form-control-file" name="Logo" />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Startup Arka plan</label>
                  <input type="file" class="form-control-file" name="ArkaPlan" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
              <input type="submit" class="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
      <div class="startup-grid-container">
        <div class="startup-grid-header">
          <ul>
            <li>
              Hepsi
              <span>2</span>
              <div class="startup-grid-header-divider"></div>
            </li>
            <li>Teknopark</li>
            <li>Hızlandırıcı</li>
            <li>Kuluçka Merkezi</li>
            <li>Melek Yatırımcı</li>
          </ul>
        </div>

        <div class="startup-grid-table-header">
          <div>APP</div>
          <div>BAŞVURU</div>
          <div>BAŞLANGIÇ</div>
          <div>BİTİŞ</div>
          <div style="display:none;">DURUM</div>
          <div>İŞLEMLER</div>
        </div>
        <div class="startup-grid-body">
          <div class="startup-grid-row" data-toggle="modal" data-target="#modal_1">
            <div class="startup-column">
              <div class="startup-row-logo">
                <img src="@/assets/images/startup-logo.png" />
              </div>
              <div class="startup-row-name">
                <div class="startup-row-name-top">ad</div>
                <br />
                <div class="startup-row-name-bottom">location</div>
              </div>
            </div>
            <div class="startup-column">3,921</div>
            <div class="startup-column">01/16/2018</div>
            <div class="startup-column">01/16/2018</div>
            <div class="startup-column" style="display:none;">
              <button class="uik-btn__base uik-btn__success uik-btn__xs">İNCELE</button>
            </div>
            <div class="startup-column">
              <i class="uikon">edit</i>
              <i>
                <img src="@/assets/images/icons/trash.png" width="13" height="13" />
              </i>
              <i class="uikon">more</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>