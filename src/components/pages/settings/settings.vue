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
    <div class="uik-layout-main__wrapperInner" style="margin:0 auto;">
      <div class="uik-socialio__content">
        <div class="uik-buildings-user__splitContent">
          <div class="uik-widget__container uik-buildings-user__subNav">
            <div class="uik-widget__wrapper">
              <div
                class="uik-buildings-user__profilePic"
                style="background-image:url(&quot;./static/media/profilePic.ca1a0f64.jpg&quot;)"
              ></div>
              <div class="uik-widget-content__wrapper uik-buildings-user__userMeta">
                <h2>Ethel Harvey</h2>
                <p>
                  Caracas, Venezuela
                  <br />Your time: 4:32 PM (GMT-4)
                </p>
              </div>
              <div class="uik-divider__horizontal"></div>
              <div class="uik-buildings-user__userMenu">
                <section class="uik-nav-section__wrapper">
                  <a
                    class="uik-nav-link__wrapper uik-nav-link__wrapperDark active"
                    aria-current="page"
                    href="/buildings/user/settings"
                  >
                    <span class="uik-nav-link__text">
                      Account
                      Settings
                    </span>
                  </a>
                  <a
                    class="uik-nav-link__wrapper uik-nav-link__wrapperDark"
                    href="/buildings/user/teams"
                  >
                    <span class="uik-nav-link__text">Teams</span>
                  </a>
                  <a
                    class="uik-nav-link__wrapper uik-nav-link__wrapperDark"
                    href="/buildings/user/password"
                  >
                    <span class="uik-nav-link__text">Password</span>
                  </a>
                  <a
                    class="uik-nav-link__wrapper uik-nav-link__wrapperDark"
                    href="/buildings/user/invoices"
                  >
                    <span class="uik-nav-link__text">Invoices</span>
                  </a>
                  <a
                    class="uik-nav-link__wrapper uik-nav-link__wrapperDark"
                    href="/buildings/user/integrations"
                  >
                    <span class="uik-nav-link__text">Integrations</span>
                  </a>
                  <a
                    class="uik-nav-link__wrapper uik-nav-link__wrapperDark"
                    href="/buildings/user/privacy"
                  >
                    <span class="uik-nav-link__text">Privacy</span>
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div class="uik-widget__container">
            <div class="uik-widget__wrapper">
              <div class="uik-widget-content__wrapper">
                <h3>Basic Profile</h3>
                <p>This information can be edited from your profile page.</p>
              </div>
              <div class="uik-divider__horizontal"></div>
              <form>
                <div class="uik-widget-content__wrapper">
                  <div class="uik-form-input-group__vertical">
                    <div class="uik-form-input-group__horizontal">
                      <div class>
                        <span class="uik-content-title__wrapper">First Name</span>
                        <div class="uik-input__inputWrapper">
                          <input
                            type="text"
                            class="uik-input__input"
                            name="first_name"
                            value="Ethel"
                          />
                        </div>
                      </div>
                      <div class>
                        <span class="uik-content-title__wrapper">Last Name</span>
                        <div class="uik-input__inputWrapper">
                          <input
                            type="text"
                            class="uik-input__input"
                            name="last_name"
                            value="Harvey"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="uik-form-input-group__horizontal">
                      <div class>
                        <span class="uik-content-title__wrapper">Email Address</span>
                        <div class="uik-input__inputWrapper">
                          <input
                            type="text"
                            class="uik-input__input"
                            name="email"
                            value="ethel.harvey@janlosert.com"
                          />
                        </div>
                      </div>
                      <div class>
                        <span class="uik-content-title__wrapper">Phone Number</span>
                        <div class="uik-input__inputWrapper">
                          <input
                            type="text"
                            class="uik-input__input"
                            name="phone"
                            placeholder="+1-000-000-0000"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="uik-form-input-group__horizontal">
                      <div class="uik-select__wrapper">
                        <span class="uik-content-title__wrapper">Country</span>
                        <button class="uik-btn__base uik-select__valueRendered" type="button">
                          <span class="uik-btn__content">
                            <div class="uik-select__valueRenderedWrapper">
                              <div class="uik-select__valueWrapper">
                                <span>
                                  <img
                                    alt="english"
                                    class="uik-buildings-user__selectFlag"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAwCAYAAABDl2dmAAAABGdBTUEAALGOGCHvlwAABA9JREFUaAXl2ltoVEcYB/D/ObuGeMM0CRW0DYIXfKhCn6IWtUr70idf7Et9EIooERUviRq1aNqgtFqwKdUuLdRejQUVRAVREw1q4iWJWW0uuJoasjG3NRs3u2vOnjP9vsVTNkuMm2T3YWcGhnNmzmHZ77czs3PmjIa4JIR4i6o+pPwO5QzKsic/BfiQco2maVZssJpdIBQnnRdT3kt5gl2v0LGJYl1LQDV2zFGcP881587ImXhz+eJ359oXFD2aFPdWAirj+Lm1oKW5+/LvtR1zDcPER8tmcZWqyUGBH6ZeVElAbt31R8Nnt+56F5qWhSPH7+D8ZY+qMHbcPM4e54Le2fmiABDR7kViKPv5Hk5faLFvVPW4hCxm6v2Bwbx4Addv9fjrTGN8tWrlOXokYg77d33ilBu/lLtVA4mNd7IeW4o/P3m2ET/+Wh9frUx5RBxWOHOxBUd/ugcajpRLb8RhkYtXPDh87DYsxYQSwmGgK1WtOPhdNUxTnSaUMA4DVVW3oeTbGzCMIY8gfEnKNCocFqip9eKLr6vwcpBn2nKnUeMwR92DTuw5eB3BUERqnTHhsMiDpm7sLq1EYMCQFmjMOCzS7PGh6MsK+PtfSgk0LhwWefxvH3aUVMD3PCwd0LhxWKStvR87DlxFV09QKqCk4LCItzOA7fuvwvssIA1Q0nBYpLs3SC2oAk+pJcmQkorDIL6+EAppDPK09qW9T9JxWIT/vXZ+VYnmR760BkoJDosEBgaxq/Qa3I3daQvkDD/zhVL17UNhA/tKKyJl+UZNdqZIq9miIzcn7HT6+yZBm5YSnwxY2GQ0OCdX9XyQdtNEzXEo+momFTKTEEGRVY95In0H5pTgZIHGG7MWeUjvOU/ScaaLIHZbdXgbKRvKUtHQh/3MpOLkiRfYJerALUeGlDSc+TS2FIp6TBTyrPEkBed90YMtogEZQq7l03HjLBUdWG/9Ax3yLbyPC+cT8RRrLHnfq48Z51PxCKusVhnG3dfGMGocjbrP56IJK632136oLBdGheMkmI2WG/miS5b4R4wjYZxMmNhm3cd7Ir2XIUbUiLuYEM5UmtQVEcxswRsv1UlvxMkWYRTT48AMDKij8irSEXEYpJgeB7Ih32uXRH5ppwPDL0JxF+KuxF1KxUST2pA+BYY3PvgFohd7RK2yMOxh6Y4nOi0tnIjFyUdX9AEyU8i/iyI27thzDVpdzskf2vTN5YXfLxS9T/jiStGOzaYbTsV2cA2FgenQHbT9+NUO9kWO4Ir5Zv/dVZYnN/ZGFc9pQ3bJtPJj1Rx7dHM2n4jVBVOea8Y31Gg2cFm9pHUQxrrsv13n7dj/x7Er/KsL5piIfEzlmZSH3aNs3yvJ0a9peJiVhUuayzVkJ8R/3QhoLDU0oyQAAAAASUVORK5CYII="
                                  />Czech Republic
                                </span>
                              </div>
                              <div class="uik-select__arrowWrapper"></div>
                            </div>
                          </span>
                        </button>
                      </div>
                      <div class="uik-select__wrapper">
                        <span class="uik-content-title__wrapper">City</span>
                        <button class="uik-btn__base uik-select__valueRendered" type="button">
                          <span class="uik-btn__content">
                            <div class="uik-select__valueRenderedWrapper">
                              <div class="uik-select__valueWrapper">Prague</div>
                              <div class="uik-select__arrowWrapper"></div>
                            </div>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="uik-widget-content__wrapper">
                  <button class="uik-btn__base uik-btn__success" type="button">
                    <span class="uik-btn__content">Save Settings</span>
                  </button>
                </div>
              </form>
            </div>
            <div class="uik-widget__wrapper">
              <div class="uik-widget-content__wrapper">
                <h3>Notifications</h3>
                <p>
                  Receive notifications, requests to write a review, pricing notices, and other reminders
                  related to your activities on Building platform.
                </p>
              </div>
              <form>
                <div class="uik-divider__horizontal"></div>
                <div class="uik-widget-content__wrapper">
                  <div class="uik-form-input-group__horizontal">
                    <div class="uik-form-input-group__vertical">
                      <h4>Promotions</h4>
                      <label class="uik-checkbox__wrapper">
                        <input
                          type="checkbox"
                          class="uik-checkbox__checkbox"
                          name="[promotions]email"
                          checked
                        />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
																		C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
																		L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
																		5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
																		C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
																		L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
																		11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
																	6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Email
                        </div>
                      </label>
                      <label class="uik-checkbox__wrapper">
                        <input
                          type="checkbox"
                          class="uik-checkbox__checkbox"
                          name="[promotions]push"
                        />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
																		C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
																		L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
																		5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
																		C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
																		L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
																		11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
																	6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Push
                          Notifications
                        </div>
                        <p class="uik-checkbox__description">For your mobile or tablet device</p>
                      </label>
                      <label class="uik-checkbox__wrapper">
                        <input
                          type="checkbox"
                          class="uik-checkbox__checkbox"
                          name="[promotions]text"
                        />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
																	C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
																	L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
																	5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
																	C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
																	L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
																	11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
																6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Text
                          Messages
                        </div>
                      </label>
                      <label class="uik-checkbox__wrapper">
                        <input
                          type="checkbox"
                          class="uik-checkbox__checkbox"
                          name="[promotions]phone"
                        />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
																C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
																L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
																5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
																C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
																L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
																11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
															6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Phone
                          Calls
                        </div>
                      </label>
                    </div>
                    <div class="uik-form-input-group__vertical">
                      <h4>Messages</h4>
                      <label class="uik-checkbox__wrapper">
                        <input
                          type="checkbox"
                          class="uik-checkbox__checkbox"
                          name="[messages]email"
                        />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
															C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
															L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
															5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
															C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
															L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
															11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
														6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Email
                        </div>
                      </label>
                      <label class="uik-checkbox__wrapper">
                        <input
                          type="checkbox"
                          class="uik-checkbox__checkbox"
                          name="[messages]push"
                          checked
                        />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
															C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
															L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
															5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
															C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
															L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
															11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
														6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Push
                          Notifications
                        </div>
                        <p class="uik-checkbox__description">For your mobile or tablet device</p>
                      </label>
                      <label class="uik-checkbox__wrapper">
                        <input type="checkbox" class="uik-checkbox__checkbox" name="[messages]text" />
                        <div class="uik-checkbox__label green">
                          <svg class="uik-checkbox__checkboxIcon" version="1.1" viewBox="0 0 8 6">
                            <defs />
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              id="Symbols"
                              stroke="none"
                              stroke-width="1"
                            >
                              <g
                                fill="#FFFFFF"
                                id="Checkbox/Checked/Default"
                                transform="translate(-4.000000, -5.000000)"
                              >
                                <g id="Checkbox/Checked">
                                  <path
                                    d="M6.65183265,10.8942434 L4.10636422,8.33133321
														C3.96454526,8.1903244 3.96454526,7.96081005 4.10636422,7.81830114
														L4.62054884,7.30601913 C4.76236779,7.16501031 4.99291451,7.16501031
														5.13473346,7.30601913 L6.9092886,9.10013126 L10.8649465,5.10613163
														C11.0067655,4.96512282 11.2373122,4.96512282 11.3791312,5.10613163
														L11.8933158,5.6191637 C12.0351347,5.76017251 12.0351347,5.9904369
														11.8933158,6.13069567 L7.16601727,10.8942434 C7.02419831,11.0352522
													6.7936516,11.0352522 6.65183265,10.8942434"
                                    id="Check"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>Text
                          Messages
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="uik-widget-content__wrapper">
                  <button class="uik-btn__base uik-btn__transparent" type="button">
                    <span class="uik-btn__content">Save Settings</span>
                  </button>
                </div>
              </form>
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