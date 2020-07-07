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
    <div class="container-fluid">
      <div class="nav p-0">
        <div class="navALL" style="width:100%;">
          <div class="navLeft">
            <div class="navFlex">
              <div class="selection">
                <span>Sektör</span>
                <div class="arrowWrapper">
                  <i class="fas fa-angle-up"></i>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="selectionMenuALL">
                  <div class="selectionMenu">
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="selection">
                <span>Seviye</span>
                <div class="arrowWrapper">
                  <i class="fas fa-angle-up"></i>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="selectionMenuALL">
                  <div class="selectionMenu">
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="selection">
                <span>Yetenek</span>
                <div class="arrowWrapper">
                  <i class="fas fa-angle-up"></i>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="selectionMenuALL">
                  <div class="selectionMenu">
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="selection">
                <span>Çalışma Şekli</span>
                <div class="arrowWrapper">
                  <i class="fas fa-angle-up"></i>
                  <i class="fas fa-angle-down"></i>
                </div>
                <div class="selectionMenuALL">
                  <div class="selectionMenu">
                    <ul>
                      <li>Angular</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="selection" style="width: auto; padding: 10px 14px;">
                <span style="margin-left:0;">
                  <i class="fas fa-ellipsis-h"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="navRight">
            <div class="navFlexRight">
              <div class="searchBox" style="width: 100%;">
                <div class="searchBoxLeft">
                  <input type="text" placeholder="Ara" />
                </div>
                <div class="searchBoxRight">
                  <i class="fa fa-search"></i>
                </div>
              </div>
              <button class="btn btn-primary m-0 mr-2" style="width: 150px">
                <i class="fas fa-plus-circle"></i>Yeni İlan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="uik-container-h__wrapper uik-social-home__page">
        <div class="uik-scroll__wrapper uik-social-home__mainContent">
          <h3 style="margin: 15px;">
            We have found
            <b>38 jobs</b> for you!
          </h3>
          <div class="uik-widget__wrapper uik-social-post-post__wrapper uik-widget__margin">
            <div class="uik-social-post-header__wrapper" onclick="togle1()">
              <div class="uik-avatar__wrapper uik-social-post-header__avatar">
                <div
                  class="uik-avatar__avatarWrapper"
                  style="margin-right: 30px;margin-bottom: 30px;"
                >
                  <img
                    alt
                    class="uik-avatar__avatar"
                    src="@/assets/media/a06.4d47556a.jpg"
                    style="height:64px; width:64px"
                  />
                </div>
                <div class="uik-avatar__info" style="margin-top: 15px;">
                  <div class="uik-avatar__textMiddle">
                    <span class="uik-social-post-header__nameText">
                      <a href>
                        <strong>Designer</strong>
                      </a>
                    </span>
                  </div>
                  <div class="uik-avatar__textBottom">Hays | City of London, United Kingdom</div>
                </div>
              </div>
              <div style="position:relative;display:inline-block">
                <a class="uik-btn__base uik-btn__success">
                  <span class="uik-btn__content" style="font-weight: bold;">NEW</span>
                </a>
                <a class>
                  <span class style="font-weight: bold;font-size: x-large;">★</span>
                </a>
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
            <div id="is-1">
              <p>
                Mid-weight/senior designer to create status-quo-challenging design work across
                a wide range of media for marketing efforts, including large scale, high profile branded
                conferences and events, product launch campaigns, presentations, web content, ads, videos
                infographics, DM and marketing material.
              </p>
              <div style="display: flex; justify-content: space-between;">
                <p style="text-align:start">
                  <a style=" color: mediumblue;">Full Job Spec -&gt;</a>
                </p>
                <p style="text-align: end">Posted 4 days ago | 64 Views</p>
              </div>

              <div class="uik-divider__horizontal"></div>
              <div>
                <div class>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Seniority Level</p>
                    </div>
                    <div>
                      <p>Not Applicable</p>
                    </div>
                  </div>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Industry</p>
                    </div>
                    <div>
                      <p>Financial Services</p>
                    </div>
                  </div>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Employment Type</p>
                    </div>
                    <div>
                      <p>Temporary</p>
                    </div>
                  </div>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Job Functions</p>
                    </div>
                    <div>
                      <p>Marketing</p>
                    </div>
                  </div>
                </div>
                <div style="margin: 10px;text-align: end;">
                  <a
                    class="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                    href="/buildings"
                  >
                    <span class="uik-btn__content">Apply</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="uik-divider__horizontal"></div>
          </div>
          <div class="uik-widget__wrapper uik-social-post-post__wrapper uik-widget__margin">
            <div class="uik-social-post-header__wrapper" onclick="togle2()">
              <div class="uik-avatar__wrapper uik-social-post-header__avatar">
                <div
                  class="uik-avatar__avatarWrapper"
                  style="margin-right: 30px;margin-bottom: 30px;"
                >
                  <img
                    alt
                    class="uik-avatar__avatar"
                    src="@/assets/media/a06.4d47556a.jpg"
                    style="height:64px; width:64px"
                  />
                </div>
                <div class="uik-avatar__info" style="margin-top: 15px;">
                  <div class="uik-avatar__textMiddle">
                    <span class="uik-social-post-header__nameText">
                      <a href>
                        <strong>Designer</strong>
                      </a>
                    </span>
                  </div>
                  <div class="uik-avatar__textBottom">Hays | City of London, United Kingdom</div>
                </div>
              </div>
              <div style="position:relative;display:inline-block">
                <a class="uik-btn__base uik-btn__success">
                  <span class="uik-btn__content" style="font-weight: bold;">NEW</span>
                </a>
                <a class>
                  <span class style="font-weight: bold;font-size: x-large;">★</span>
                </a>
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

            <div id="is-2" style="display: none;">
              <p>
                Mid-weight/senior designer to create status-quo-challenging design work across
                a wide range of media for marketing efforts, including large scale, high profile branded
                conferences and events, product launch campaigns, presentations, web content, ads, videos
                infographics, DM and marketing material.
              </p>
              <div style="display: flex; justify-content: space-between;">
                <p style="text-align:start">
                  <a style=" color: mediumblue;">Full Job Spec -&gt;</a>
                </p>
                <p style="text-align: end">Posted 4 days ago | 64 Views</p>
              </div>

              <div class="uik-divider__horizontal"></div>
              <div>
                <div class>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Seniority Level</p>
                    </div>
                    <div>
                      <p>Not Applicable</p>
                    </div>
                  </div>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Industry</p>
                    </div>
                    <div>
                      <p>Financial Services</p>
                    </div>
                  </div>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Employment Type</p>
                    </div>
                    <div>
                      <p>Temporary</p>
                    </div>
                  </div>
                  <div style="float:left">
                    <div>
                      <p
                        class
                        style="font-size: 0.75rem; color: #9EA0A5; line-height: 1.125rem;"
                      >Job Functions</p>
                    </div>
                    <div>
                      <p>Marketing</p>
                    </div>
                  </div>
                </div>
                <div style="margin: 10px;text-align: end;">
                  <a
                    class="uik-btn__base uik-btn__success uik-buildings-signup__btnAction"
                    href="/buildings"
                  >
                    <span class="uik-btn__content">Apply</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="uik-divider__horizontal"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>