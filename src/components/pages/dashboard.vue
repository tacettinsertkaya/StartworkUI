<template>
  <div class="uik-container-v__container">
    <div class="uik-tab__container uik-socialio__mobileNavigation">
      <span class="uik-tab__item uik-socialio__mobileItem uik-tab__smaller">
        <i class="uikon">gallery_grid_view</i>
      </span>
      <span class="uik-tab__item uik-socialio__mobileItem active uik-tab__smaller">
        <i class="uikon">home</i>
      </span>
      <span class="uik-tab__item uik-socialio__mobileItem uik-tab__smaller">
        <i class="uikon">message</i>
      </span>
    </div>

    <div class="uik-container-h__wrapper uik-socialio__contentContainer uik-socialio__Home">
      <div class="uik-nav-panel__wrapper">
        <div class="mth-user-card">
          <img alt class="img-fluid rounded-circle" src="@/assets/media/a21.9703cc6c.jpg" />
          <div class="mth-user-info mb-2">
            <h4 class="mt-3">Sena BAYRAK</h4>
            <p class="font-weight-light">
              Work at
              <a href="#">StartWork</a>
            </p>
            <p>Girişimci olmak ya da olmamak...</p>
            <p>sema@startwork.co</p>
            <p class="font-weight-light">0543 333 33 33</p>
            <button type="button" class="btn btn-primary">Backend</button>
          </div>
          <p class="text-uppercase mth-profile-link m-2">Profili Görüntüle</p>
        </div>
        <div class="mth-company-card">
          <img src="@/assets/images/sw_logo_1.png" class="img-fluid" />
          <span class="mth-company-title">StartWork</span>
          <br />
          <span class="font-weight-light">Digital Startup Ecosystem</span>
          <div class="clearfix"></div>
          <div class="istatistikler">
            <div class="takipciler">
              <p class="num">144</p>
              <p class="text">Takipçi</p>
            </div>
            <div class="takip">
              <p class="num">89</p>
              <p class="text">Takip</p>
            </div>
          </div>
        </div>
      </div>
      <div class="uik-socialio__content">
        <div class="uik-container-h__wrapper uik-social-home__page">
          <div class="uik-scroll__wrapper uik-social-home__mainContent">
            <div class="uik-widget__wrapper uik-widget__margin">
              <div class="uik-social-post-create__message">
                <div class="uik-avatar__wrapper">
                  <div class="uik-avatar__avatarWrapper">
                    <img alt class="uik-avatar__avatar" src="@/assets/media/a02.fa362332.jpg" />
                  </div>
                </div>
                <textarea placeholder="Neredesin? Napıyorsun? Numaran ne? Paylaş!" rows="2"></textarea>
              </div>
              <div class="uik-social-post-create__footer">
                <button class="uik-btn__base uik-btn__hasIcon uik-btn__transparent" type="button">
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon uik-social-post-create__iconPhoto">camera</i>
                  </span>
                  <span class="uik-btn__content">Foto/Video</span>
                </button>
                <button class="btn btn-primary float-right m-0" type="button">
                  <span class="uik-btn__content">Yayınla</span>
                </button>
              </div>
            </div>
            <div class="uik-widget__wrapper uik-social-post-post__wrapper uik-widget__margin">
              <div class="uik-social-post-header__wrapper">
                <div class="uik-avatar__wrapper uik-social-post-header__avatar">
                  <div class="uik-avatar__avatarWrapper">
                    <img alt class="uik-avatar__avatar" src="@/assets/media/a06.4d47556a.jpg" />
                  </div>
                  <div class="uik-avatar__info">
                    <div class="uik-avatar__name">
                      <span class="uik-social-post-header__nameText">
                        <a href="profile.html">
                          <strong>Roxie Mills</strong>
                        </a>
                        <span class="uik-social-post-header__text">
                          is feeling excited
                          <span aria-label="excited" role="img">😳</span> with
                        </span>
                        <a href="profile.html">Patrick Rodriguez</a>
                      </span>
                    </div>
                    <div class="uik-avatar__textBottom">December 28, 2018</div>
                  </div>
                </div>
                <div style="position:relative;display:inline-block">
                  <button
                    class="uik-btn__base uik-btn__clear uik-btn__hasIcon uik-btn__iconOnly"
                    type="button"
                  >
                    <span class="uik-btn__iconWrapper">
                      <i class="uikon">more</i>
                    </span>
                    <span class="uik-btn__content"></span>
                  </button>
                </div>
              </div>
              <p>Travelling to the future, it’s already December 2018 here! 💁🏼🙋🏻‍♂️</p>
              <div class="uik-social-post-image-group__wrapper">
                <a
                  class="uik-social-post-image-group__photo"
                  style="background-image:url(@/assets/media/s01.fa7a6efc.jpg)"
                  href="/social"
                ></a>
                <a
                  class="uik-social-post-image-group__photo"
                  style="background-image:url(@/assets/media/s02.3b3e9ef5.jpg)"
                  href="/social"
                ></a>
                <a
                  class="uik-social-post-image-group__photo"
                  style="background-image:url(@/assets/media/s03.ca516f74.jpg)"
                  href="/social"
                ></a>
              </div>
              <div class="uik-divider__horizontal"></div>
              <div class="uik-social-post-actions__btns">
                <button class="uik-btn__base uik-btn__hasIcon uik-btn__transparent" type="button">
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon">love</i>
                  </span>
                  <span class="uik-btn__content">Beğen</span>
                </button>
                <button class="uik-btn__base uik-btn__hasIcon uik-btn__transparent" type="button">
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon">message_2</i>
                  </span>
                  <span class="uik-btn__content">Yorum Yap</span>
                </button>
                <button
                  class="uik-btn__base uik-btn__hasIcon uik-btn__transparent uik-social-post-actions__hide"
                  type="button"
                >
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon">send_round</i>
                  </span>
                  <span class="uik-btn__content">Paylaş</span>
                </button>
              </div>
              <div class="uik-divider__horizontal"></div>
              <div class="uik-social-post-create__message">
                <div class="uik-avatar__wrapper">
                  <div class="uik-avatar__avatarWrapper">
                    <img alt class="uik-avatar__avatar" src="@/assets/media/a02.fa362332.jpg" />
                  </div>
                </div>
                <textarea placeholder="Bir yorum yaz..." rows="1"></textarea>
                <div class="uik-social-post-create__actions">
                  <i class="uikon">camera</i>
                  <i class="uikon">smile</i>
                </div>
              </div>
            </div>
            <div class="uik-widget__wrapper uik-social-post-post__wrapper uik-widget__margin">
              <div class="uik-social-post-header__wrapper">
                <div class="uik-avatar__wrapper uik-social-post-header__avatar">
                  <div class="uik-avatar__avatarWrapper">
                    <img alt class="uik-avatar__avatar" src="@/assets/media/a06.4d47556a.jpg" />
                  </div>
                  <div class="uik-avatar__info">
                    <div class="uik-avatar__name">
                      <span class="uik-social-post-header__nameText">
                        <a href="profile.html">
                          <strong>Roxie Mills</strong>
                        </a>
                        <span class="uik-social-post-header__text">
                          is feeling excited
                          <span aria-label="excited" role="img">😳</span>
                          with
                        </span>
                        <a href="profile.html">Patrick Rodriguez</a>
                      </span>
                    </div>
                    <div class="uik-avatar__textBottom">December 28, 2018</div>
                  </div>
                </div>
                <div style="position:relative;display:inline-block">
                  <button
                    class="uik-btn__base uik-btn__clear uik-btn__hasIcon uik-btn__iconOnly"
                    type="button"
                  >
                    <span class="uik-btn__iconWrapper">
                      <i class="uikon">more</i>
                    </span>
                    <span class="uik-btn__content"></span>
                  </button>
                </div>
              </div>
              <p>At the end of your life you’ll always regret the stuff what you didn’t do more than the stuff you did. And that&#x27;s deep.</p>
              <div class="uik-divider__horizontal"></div>
              <div class="uik-social-post-actions__btns">
                <button class="uik-btn__base uik-btn__hasIcon uik-btn__transparent" type="button">
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon">love</i>
                  </span>
                  <span class="uik-btn__content">Beğen</span>
                </button>
                <button class="uik-btn__base uik-btn__hasIcon uik-btn__transparent" type="button">
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon">message_2</i>
                  </span>
                  <span class="uik-btn__content">Yorum yap</span>
                </button>
                <button
                  class="uik-btn__base uik-btn__hasIcon uik-btn__transparent uik-social-post-actions__hide"
                  type="button"
                >
                  <span class="uik-btn__iconWrapper">
                    <i class="uikon">send_round</i>
                  </span>
                  <span class="uik-btn__content">Paylaş</span>
                </button>
              </div>
              <div class="uik-divider__horizontal"></div>
              <div class="uik-social-post-create__message">
                <div class="uik-avatar__wrapper">
                  <div class="uik-avatar__avatarWrapper">
                    <img alt class="uik-avatar__avatar" src="@/assets/media/a02.fa362332.jpg" />
                  </div>
                </div>
                <textarea placeholder="Bir yorum yaz..." rows="1"></textarea>
                <div class="uik-social-post-create__actions">
                  <i class="uikon">camera</i>
                  <i class="uikon">smile</i>
                </div>
              </div>
            </div>
          </div>
          <div class="uik-scroll__wrapper uik-social-home__extraContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

