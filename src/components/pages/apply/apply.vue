<template>
  <div>
    <div class="uik-container-v__container">
      <div class="container">
        <div class="startup-page-titile">
          <h1>Startup Başvuruları!</h1>
        </div>
        <div
          class="startup-header"
          style="background-image: url(../../static/images/startup-header-bg-1.jpg);"
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
                Bir startup olmak için, ekosistemdeki başvuruları
                <br class="startup-header-details-br" />değerlendirin.
              </h2>
              <button class="uik-btn__base">Başvuru İlanı Oluştur</button>
            </div>
          </div>
        </div>

        <div class="startup-grid-container">
          <div class="startup-grid-header">
            <ul>
              <li>
                Hepsi
                <span>23</span>
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
                  <div class="startup-row-name-bottom">asd</div>
                </div>
              </div>
              <div class="startup-column">3,921</div>
              <div class="startup-column">baslangic</div>
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
    <div
      class="modal fade"
      id="modal_1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal_1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal_1Label">Zeplin.io Starter İndirimi</h5>
          </div>
          <div class="modal-body">Zeplin.io Starter İndirimi</div>
          <div class="modal-footer">
            <button class="uik-btn__base" data-dismiss="modal">Kapat</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>