<template>
  <div class="uik-container-v__container">
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
              <button class="uik-btn__base uik-btn__success">Yatırımcı Profili Aç</button>
            </div>
          </div>
        </div>

        <div class="startup-grid-container">
          <div class="startup-grid-header">
            <ul>
              <li>
                Hepsi
                <span>123</span>
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
            <div>ADET</div>
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
                  <div class="startup-row-name-top">kampanya adi</div>
                  <br />
                  <div class="startup-row-name-bottom">adsad</div>
                </div>
              </div>
              <div class="startup-column">adet</div>
              <div class="startup-column">tarih</div>
              <div class="startup-column">bitis</div>
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
  </div>
</template>

<script>
export default {};
</script>