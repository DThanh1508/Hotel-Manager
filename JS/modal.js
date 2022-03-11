document.getElementById('modal').innerHTML+=`
<!-- ------------------------------------------------modal currency--------------------------------------------------- -->
<div class="modal fade" id="currency" tabindex="-1" aria-labelledby="currencyLabel" aria-hidden="true">
    <div class="modal-dialog" style="max-width: 900px; width: 100%;">
        <div class="modal-content currency">
            <div class="modal-header">
                <h5 class="modal-title" id="currencyLabel">Chọn loại tiền tệ của bạn</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="suggestion">
                        <h5 class="secion_modal">Đề xuất cho bạn</h5>
                        <div class="row text-black" id="offerCurrency">
                        </div>
                    </div>
                    <div class="all_currency">
                        <h5 class="secion_modal ">Tất cả loại tiền tệ</h5>
                        <div class="row text-black" id="allCurrency">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                <button type="button" class="btn btn-primary">Đồng ý</button>
            </div>
        </div>
    </div>
</div>
<!-- -------------------------------------------------------languages------------------------------------------ -->
<div class="modal fade" id="Country" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog" style="max-width: 900px; width: 100%;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="CountryLabel">Chọn ngôn ngữ của bạn</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="suggestion">
                        <h5 class="secion_modal">Đề xuất cho bạn</h5>
                        <div class="row text-black" id="offerCountry">
                        </div>
                    </div>
                    <div class="all_currency">
                        <h5 class="secion_modal ">Tất cả loại ngôn ngữ</h5>
                        <div class="row text-black" id="allCountry">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                <button type="button" class="btn btn-primary">Đồng ý</button>
            </div>
        </div>
    </div>
</div>
<!-- ----------------------------------------offcanvar account management------------------------------ -->
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_account_mangement"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h3 id="offcanvasRightLabel">Quản lý tài khoản</h3>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <h4>Thông tin khách hàng:</h4>
        <div id="inforcurtomer" method='POST'>
            <div class="infor">
                <h6>Email:</h6>
                <input id="usernamecurtomer" type="text" />
            </div>
            <div class="infor">
                <h6>Mật khẩu:</h6>
                <input id="passwordcurtomer" type="password" />
            </div>
            <div class="infor">
                <h6>Tên khách hàng:</h6>
                <input id="namecurtomer" type="text" />
            </div>
            <div class="infor">
                <h6>Giới tính:</h6>
                <input id="gendercurtomer" type="text" />
            </div>
            <div class="infor">
                <h6>Ngày sinh:</h6>
                <input id="dateofbirthcurtomer" type="text" />
            </div>
            <div class="infor">
                <h6>Số CMND ( thẻ căn cước công dân):</h6>
                <input id="identitycardcurtomer" type="text" />
            </div>
            <div class="infor">
                <h6>Số điện thoại:</h6>
                <input id="phonenumbercurtomer" type="tel" />
            </div>
            <div class="infor">
                <h6>Địa chỉ:</h6>
                <input id="addresscurtomer" type="text" />
            </div>
        </div>
        <div id="infor"></div>
        <button id="saveinfor" type="button" class="btn btn-primary" onclick="saveinfor()">
            <h6>Lưu</h6>
        </button>
        <button id="saveudate" type="button" class="btn btn-primary" onclick="updateinfor()">
            <h6>Lưu</h6>
        </button>
        <button id="updateinfor" type="button" class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#madalPassword">
            <h6>Sửa thông tin cá nhân và tài khoản</h6>
        </button>
        <button type="button" class="btn btn-danger" onclick="logout()">
            Đăng xuất <i class="fas fa-sign-out-alt"></i>
        </button>
    </div>
</div>
<!-- ------------------------modal Enter the password----------------------------------------- -->
<div class="modal fade" id="madalPassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Nhập lại mật khẩu
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h6>Nhập lại mật khẩu:</h6>
                <input id="enter-the-password" type="password" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Thoát
                </button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="checkpassword()">
                    Đồng ý
                </button>
            </div>
        </div>
    </div>
</div>

<!-- ------------------------modal cartping----------------------------------------- -->
<div class="modal fade" id="listBookRooms" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog" style="max-width: 900px; width: 100%;">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Danh Sách Đơn Đặt Phòng</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid" id="small">
                <ul class="nav nav-tabs nav-pills nav-fill" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                    <button onclick="now()" class="nav-link active" id="now-tab" data-bs-toggle="tab" data-bs-target="#now" type="button" role="tab" aria-controls="now" aria-selected="true">Chưa nhận phòng</button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button onclick="history()" class="nav-link" id="received-tab" data-bs-toggle="tab" data-bs-target="#received" type="button" role="tab" aria-controls="history" aria-selected="false">Đã nhận phòng</button>
                    </li>
                    <li class="nav-item" role="presentation">
                    <button onclick="history()" class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="history" aria-selected="false">Đã trả phòng</button>
                    </li>
                </ul>                                                       
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="now" role="tabpanel" aria-labelledby="now-tab">
                        <table class="table">
                        <thead class="thead-light header text-white">
                            <tr>
                                <th>Số thứ tự</th>
                                <th>Tên Khách Sạn</th>
                                <th>Tổng tiền</th>
                                <th>Trạng Thái</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody id="tblNow">
                        </tbody>
                        </table>
                        </div>
                         <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab"><table class="table">
                         <thead class="thead-light header text-white">
                             <tr>
                                 <th>Số thứ tự</th>
                                 <th>Tên Khách Sạn</th>
                                 <th>Tổng tiền</th>
                                 <th>Trạng Thái</th>
                             </tr>
                         </thead>
                        <tbody id="tblhistory">
                         </tbody>
                        </table></div>
                        <div class="tab-pane fade" id="received" role="tabpanel" aria-labelledby="received-tab"><table class="table">
                         <thead class="thead-light header text-white">
                             <tr>
                                 <th>Số thứ tự</th>
                                 <th>Tên Khách Sạn</th>
                                 <th>Tổng tiền</th>
                                 <th>Trạng Thái</th>
                             </tr>
                         </thead>
                        <tbody id="tblreceived">
                         </tbody>
                        </table></div>
                    </div>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ------------------------modal support----------------------------------------- -->
<div class="modal fade" id="support" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hỗ trợ</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Quy Định:</h5>
        <h6>1. Khi đặt phòng phải đặt cọc trước 50% tổng hóa đơn.</h6>
        <h6>2. Khi bạn hủy đơn đặt phòng thì bạn phải bồi thường 3% tổng hóa đơn cho chung tôi.</h6>
        <h6>3. Khi khi các bạn vi phạm các quy định thì chúng tôi sẽ khóa hoặc xóa tài khoảng vĩnh viễn.</h6>
        <h6>4. Mọi thắc mắt xin liên hệ với chúng tôi qua sđt: 033 3456 789.</h6>
      </div>
    </div>
  </div>
</div>
`;

// ----------------------------------currency-------------------------------------------------

var listcurrency=[
    {name:"Tiền tệ của chỗ nghỉ", abbreviation:"€£$"},
    {name:"Bạt Thái", abbreviation:"THB"},
    {name:"Bảng Ai Cập", abbreviation:"EGP"},
    {name:"Bảng Anh", abbreviation:"GBP"},
    {name:"Dirham UAE", abbreviation:"AED"},
    {name:"Nhân Dân Tệ", abbreviation:"CNY"},
    {name:"Rúp Nga", abbreviation:"RUB"},
    {name:"Won Hàn Quốc", abbreviation:"KRW"},
    {name:"Việt Nam", abbreviation:"VNĐ"},
    {name:"Đô la Mỹ", abbreviation:"USA"},
    {name:"Euro", abbreviation:"EUR"},
    {name:"Yên Nhật", abbreviation:"JPY"},
    {name:"Đô la Úc", abbreviation:"AUD"},
    {name:"Đô la ingapore", abbreviation:"SGD"},
    {name:"Rupee Ấn Độ", abbreviation:"INR"},
    {name:"Riyal Qatar", abbreviation:"QAR"},
    {name:"Rupiah", abbreviation:"IDR"}
];

for(var h=8; h<14; h++){
    document.getElementById('offerCurrency').innerHTML+=`
    <div class=" col-6 col-sm-3 currency-1">
        <input type="radio" name="currency"> ${listcurrency[h].name}<br> ${listcurrency[h].abbreviation}
    </div>
    `;
};

for (var currency of listcurrency){
    document.getElementById('allCurrency').innerHTML+=`
    <div class=" col-6 col-sm-3 currency-1">
        <input type="radio" name="currency"> ${currency.name}<br> ${currency.abbreviation}
    </div>
    `;
}

// -----------------------------------------country---------------------------------------------

var listcountry =[
    {img:"./Img/Vietnam.png", name:"Tiếng Việt"},
    {img:"./Img/My.png", name:"English (US)"},
    {img:"./Img/Anh.png", name:"English (UK)"},
    {img:"./Img/Phap.png", name:"Francais"},
    {img:"./Img/Hanquoc.png", name:"Korean"},
    {img:"./Img/Halan.png", name:"Nederlands"},
    {img:"./Img/peru.png", name:"Espanol(MX)"},
    {img:"./Img/nhatban.png", name:"Japanese"},
    {img:"./Img/italia.png", name:"Italiano"},
    {img:"./Img/Taybannha.png", name:"Espanol"},
    {img:"./Img/bodaonha.png", name:"Portugues(PT)"},
    {img:"./Img/trungquoc.png", name:"Chinese"},
    {img:"./Img/acgentina.png", name:"Espanol (AR)"},
    {img:"./Img/Bỉ.png", name:"Deutsch"},
    {img:"./Img/brazin.png", name:"Portugues"},
    {img:"./Img/thuydien.png", name:"Svenska"},
    {img:"./Img/thúyy.png", name:"Dansk"},
    {img:"./Img/catala.png", name:"Catalá"}
];

for (var indexCountry = 0; indexCountry < 5; indexCountry++){
    document.getElementById('offerCountry').innerHTML+=`
    <div class=" col-6 col-sm-3 currency-1 ">
        <img class="country " src="${listcountry[indexCountry].img}" alt="country "> ${listcountry[indexCountry].name}
    </div>
    `;
};

for (var country of listcountry){
    document.getElementById('allCountry').innerHTML+=`
    <div class=" col-6 col-sm-3 currency-1 ">
        <img class="country " src="${country.img}" alt="country "> ${country.name}
    </div>
    `;
};

// -------------------------------------------list-address------------------------------------------

var listaddress =[
    {name:"Phú Yên", quantyli:"212 chỗ nghỉ", type:1},
    {name:"Bình Thuận", quantyli:"599 chỗ nghỉ", type:1},
    {name:"Cà Mau", quantyli:"48 chỗ nghỉ", type:1},
    {name:"Khu vực TP. Hồ Chí Minh", quantyli:"5,632 chỗ nghỉ", type:1},
    {name:"Đắc Lắc", quantyli:"123 chỗ nghỉ", type:2},
    {name:"Vĩnh Long", quantyli:"42 chỗ nghỉ", type:2},
    {name:"Thành phố Đà Nẵng", quantyli:"2,511 chỗ nghỉ", type:2},
    {name:"Thanh Hóa", quantyli:"256 chỗ nghỉ", type:2},
    {name:"Trà Vinh", quantyli:"17 chỗ nghỉ", type:3},
    {name:"Bạc Liêu", quantyli:"23 chỗ nghỉ", type:3},
    {name:"Hà Tĩnh", quantyli:"37 chỗ nghỉ", type:3},
    {name:"Thừa Thiên - Huế", quantyli:"518 chỗ nghỉ", type:3},
    {name:"Bình Dương", quantyli:"78 chỗ nghỉ", type:4},
    {name:"Gia Lai", quantyli:"86 chỗ nghỉ", type:4},
    {name:"Vịnh Hạ Long", quantyli:"1,369 chỗ nghỉ", type:4},
    {name:"Quảng Bình", quantyli:"267 chỗ nghỉ", type:4}
];

for(var address of listaddress){
    var html =`
    <div>
        <a class="effect " href="# ">
            ${address.name}
        </a>
        <p>${address.quantyli}</p>
    </div>
    `;
    if(address.type==1){
        document.getElementById('address1').innerHTML+=html;
    }else if(address.type==2){
        document.getElementById('address2').innerHTML+=html;
    }else if(address.type==3){
        document.getElementById('address3').innerHTML+=html;
    }else{
        document.getElementById('address4').innerHTML+=html;
    };
};