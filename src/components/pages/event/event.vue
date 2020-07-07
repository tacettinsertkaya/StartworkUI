<template>
  <div class="uik-container-v__container">
    <div class>
      <!--Etkinlikk Oluştur-->
      <div class="createEvent" id="createEvent">
        <div class="createALL" id="createALL">
          <div class="createHeader">
            <div class="createHeaderALL">
              <div class="createHeaderLeft">
                <h1>Güzel Anlar İçin Bir Etkinlik Oluştur</h1>
              </div>
              <div class="createHeaderRight">
                <i class="fas fa-times" style="cursor: pointer;" onclick="closeModal()"></i>
              </div>
            </div>
          </div>
          <div class="createImg">
            <img src="@/assets/images/sea.jpg" alt="cover" />
            <button id="addImage">
              <i class="fas fa-upload" style="margin-right: 5px;"></i> Resim veya Video Yükle
            </button>
          </div>
          <div class="createTable">
            <div class="createCellHalf">
              <p>Etkinlik Adı</p>
              <input type="text" placeholder="Kısa ve net bir isim" />
            </div>
            <div class="createCellHalf">
              <p>Konum</p>
              <input type="text" placeholder="Bir yer veya adres" />
            </div>
          </div>
          <div class="createTable">
            <div class="myRow">
              <div class="createCell">
                <p>EtkinlikTürü</p>
              </div>
            </div>
            <div class="myRow">
              <div class="createCell">
                <div class="selection" style="width: 100%; margin-left: 0; margin-top: 5px;">
                  <span>Meetup</span>
                  <div class="arrowWrapper">
                    <i class="fas fa-angle-up"></i>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="createTable">
            <div class="createCellHalf">
              <p>Starts</p>
              <div class="selectFlex" style="display: flex; width: 100%;">
                <div
                  class="selection"
                  style="width: 60%; margin-left: 0; margin-top: 5px; margin-right: 0; font-size: 0.8em;"
                >
                  <span>
                    <i class="fas fa-calendar" style="margin-right: 5px; color: #d9d9d9;"></i>04/08/2019
                  </span>
                  <div class="arrowWrapper">
                    <i class="fas fa-angle-up"></i>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
                <div
                  class="selection"
                  style="width: 40%; margin-left: 0; margin-top: 5px; font-size: 0.8em;"
                >
                  <span>04.00 PM</span>
                  <div class="arrowWrapper">
                    <i class="fas fa-angle-up"></i>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="createCellHalf">
              <p>Ends</p>
              <div class="selectFlex" style="display: flex; width: 100%;">
                <div
                  class="selection"
                  style="width: 60%; margin-left: 0; margin-top: 5px; margin-right: 0; font-size: 0.8em;"
                >
                  <span>
                    <i class="fas fa-calendar" style="margin-right: 5px; color: #d9d9d9;"></i>04/08/2019
                  </span>
                  <div class="arrowWrapper">
                    <i class="fas fa-angle-up"></i>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
                <div
                  class="selection"
                  style="width: 40%; margin-left: 0; margin-top: 5px; font-size: 0.8em;"
                >
                  <span>04.00 PM</span>
                  <div class="arrowWrapper">
                    <i class="fas fa-angle-up"></i>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="createTable">
            <div class="createCell">
              <p>Açıklama</p>
              <textarea name="desc" id cols="30" rows="5" placeholder="Açıklama"></textarea>
            </div>
          </div>
          <div class="createTable">
            <div class="createCell">
              <div class="inputBox" style="display: flex; justify-content: flex-start;">
                <input type="checkbox" style="width: 14px; height: 14px; margin-right: 10px" />
                <label>Ücretli</label>
              </div>
            </div>
          </div>
          <div class="createTable">
            <div class="buttonCellLeft">
              <button class="cancelModal" onclick="closeModal()">Vazgeç</button>
            </div>
            <div class="buttonCellRight">
              <button class="createModal">Oluştur</button>
            </div>
          </div>
        </div>
      </div>
      <!--Takvim-->
      <div class="takvim" id="takvim">
        <i
          class="fas fa-times"
          style="position: absolute; right: 10px; top: 10px; color: #fff; font-size: 1.1em; cursor: pointer;"
          onclick="takvimClose()"
        ></i>
        <div class="takvimALL">
          <iframe src="events-calendar.html" style="width: 100%; height: 100%;" frameborder="0"></iframe>
        </div>
      </div>
      <div class="containerApp">
        <!-- Navigation -->

        <div class="nav">
          <div class="navALL">
            <div class="navLeft">
              <div class="navFlex">
                <div class="selection">
                  <span>Hepsi</span>
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
                  <span>Ücret</span>
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
                  <span>Konum</span>
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
                <div class="searchBox">
                  <div class="searchBoxLeft">
                    <input type="text" placeholder="Ara" />
                  </div>
                  <div class="searchBoxRight">
                    <i class="fa fa-search"></i>
                  </div>
                </div>
                <button id="createEvent" onclick="openModal()">
                  <i class="fas fa-plus-circle"></i>Etkinlik Oluştur
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="mainALL">
            <div class="mainCellLeft">
              <!--Öne Çıkanlar-->
              <h1 class="heading">Öne Çıkan Etkinlikler</h1>
              <div class="mainCardFlex">
                <div class="mainCard">
                  <div class="mainCardImage">
                    <img src="@/assets/images/micro.jpg" alt="cover" />
                  </div>
                  <div class="mainCardContent">
                    <div class="mainCardContentLeft">
                      <div class="contentCard">
                        <p class="weekDay">THU</p>
                        <p class="monthDay">24</p>
                      </div>
                    </div>
                    <div class="mainCardContentRight">
                      <h1>Workup - Hackathon</h1>
                      <p>Thu 14 June, DejaVu</p>
                      <p>35.242 people interested</p>
                    </div>
                  </div>
                  <div class="mainCardButton">
                    <div class="mainCardButtonLeft">
                      <button>İncele</button>
                    </div>
                    <div class="mainCardButtonRight">
                      <p>5 friends are going</p>
                    </div>
                  </div>
                </div>
                <div class="mainCard">
                  <div class="mainCardImage">
                    <img src="@/assets/images/micro.jpg" alt="cover" />
                  </div>
                  <div class="mainCardContent">
                    <div class="mainCardContentLeft">
                      <div class="contentCard">
                        <p class="weekDay">THU</p>
                        <p class="monthDay">24</p>
                      </div>
                    </div>
                    <div class="mainCardContentRight">
                      <h1>Workup - Hackathon</h1>
                      <p>Thu 14 June, DejaVu</p>
                      <p>35.242 people interested</p>
                    </div>
                  </div>
                  <div class="mainCardButton">
                    <div class="mainCardButtonLeft">
                      <button>İncele</button>
                    </div>
                    <div class="mainCardButtonRight">
                      <p>5 friends are going</p>
                    </div>
                  </div>
                </div>
                <div class="mainCard">
                  <div class="mainCardImage">
                    <img src="@/assets/images/micro.jpg" alt="cover" />
                  </div>
                  <div class="mainCardContent">
                    <div class="mainCardContentLeft">
                      <div class="contentCard">
                        <p class="weekDay">THU</p>
                        <p class="monthDay">24</p>
                      </div>
                    </div>
                    <div class="mainCardContentRight">
                      <h1>Workup - Hackathon</h1>
                      <p>Thu 14 June, DejaVu</p>
                      <p>35.242 people interested</p>
                    </div>
                  </div>
                  <div class="mainCardButton">
                    <div class="mainCardButtonLeft">
                      <button>İncele</button>
                    </div>
                    <div class="mainCardButtonRight">
                      <p>5 friends are going</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Etkinlikler-->
              <div class="events">
                <h1 class="heading" style="color: #1b6adf;">Etkinlik Listesi</h1>
                <div class="eventsCon">
                  <div class="eventsTop">
                    <div class="eventsTopLeft">
                      <div class="contentCard">
                        <p class="weekDay">THU</p>
                        <p class="monthDay">24</p>
                      </div>
                    </div>
                    <div class="eventsTopRight">
                      <h1 class="eventsTopTitle">Startup Grind İstanbul</h1>
                      <p class="eventsTopDate">Thu 14, June - 08.00 pm - Mallorca</p>
                      <div class="eventsTopImage">
                        <img src="@/assets/images/pp.jpg" alt="avatar" />
                        <img src="@/assets/images/pp.jpg" alt="avatar" />
                        <img src="@/assets/images/pp.jpg" alt="avatar" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="eventsBottom">
                  <button>
                    <i class="fas fa-check"></i>Going
                  </button>
                  <button>
                    <i class="fas fa-question"></i>Maybe
                  </button>
                  <button>
                    <i class="fas fa-times"></i>Can't Go
                  </button>

                  <div class="selection">
                    <span>Share</span>
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
                </div>
              </div>
              <div class="eventsCon">
                <div class="eventsTop">
                  <div class="eventsTopLeft">
                    <div class="contentCard">
                      <p class="weekDay">THU</p>
                      <p class="monthDay">24</p>
                    </div>
                  </div>
                  <div class="eventsTopRight">
                    <h1 class="eventsTopTitle">Startup Grind İstanbul</h1>
                    <p class="eventsTopDate">Thu 14, June - 08.00 pm - Mallorca</p>
                    <div class="eventsTopImage">
                      <img src="@/assets/images/pp.jpg" alt="avatar" />
                      <img src="@/assets/images/pp.jpg" alt="avatar" />
                      <img src="@/assets/images/pp.jpg" alt="avatar" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="eventsBottom">
                <button>
                  <i class="fas fa-check"></i>Going
                </button>
                <button>
                  <i class="fas fa-question"></i>Maybe
                </button>
                <button>
                  <i class="fas fa-times"></i>Can't Go
                </button>

                <div class="selection">
                  <span>Share</span>
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
              </div>
              <div class="leftALL">
                <p>Hepsini Gör</p>
              </div>
            </div>
            <div class="mainCellRight">
              <div class="rightContainer">
                <div class="rightHeading">
                  <p>Keşfet</p>
                </div>
                <div class="rightFlex">
                  <div class="rightCard">
                    <i class="fas fa-calendar absoluteIcon"></i>
                    <div class="rightCardTint" onclick="takvim()">
                      <i class="fas fa-calendar"></i>
                      <p>Bugün</p>
                    </div>
                  </div>
                  <div class="rightCard" style="background: #f8c449;">
                    <i class="fas fa-calendar absoluteIcon"></i>
                    <div class="rightCardTint" onclick="takvim()">
                      <i class="fas fa-calendar"></i>
                      <p>Yarın</p>
                    </div>
                  </div>
                  <div class="rightCard" style="background: #845af4;">
                    <i class="fas fa-calendar absoluteIcon"></i>
                    <div class="rightCardTint" onclick="takvim()">
                      <i class="fas fa-calendar"></i>
                      <p>Bu Hafta</p>
                    </div>
                  </div>
                  <div class="rightCard" style="background: #c6cad3;">
                    <i class="fas fa-calendar absoluteIcon"></i>
                    <div class="rightCardTint" onclick="takvim()">
                      <i class="fas fa-calendar"></i>
                      <p>Tarih Seç</p>
                    </div>
                  </div>
                </div>
                <div class="rightList">
                  <ul>
                    <li>
                      <i class="fas fa-gamepad"></i>Fuckup
                    </li>
                    <li>
                      <i class="fas fa-glass-martini"></i>Meetup
                    </li>
                    <li>
                      <i class="fas fa-ruler"></i>Söyleşi
                    </li>
                    <li>
                      <i class="fas fa-table-tennis"></i>Hackathon
                    </li>
                    <li>
                      <i class="fas fa-music"></i>Demo Day
                    </li>
                  </ul>
                </div>
                <div class="rightDevam">
                  <p>Devamı</p>
                </div>
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