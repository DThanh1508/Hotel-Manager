document.getElementById('footer-top').innerHTML+=`
<section class="log-in-by-email">
<div class="container marginTop text-center text-white
        log-by-email">
    <h2>Tiết kiệm thời gian và tiền bạc!</h2>
    <p>Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</p>
    <div>
        <input type="email" placeholder="Địa chỉ e-mail của bạn" id="emails" name="email" class="log-in-email" />
        <button type="button" class="btn btn-primary log-email hoverbutton margin" data-bs-toggle="modal"
            data-bs-target="#log_in">
            Đăng nhập
        </button>
    </div>
    <input type="checkbox" id="checkbox" /> Gửi cho tôi đường dẫn để tải ứng dụng
    Booking.com MIỄN PHÍ!
</div>
</section>
<section class="header">
<div class="container text-center" id="padding">
    <button type="button" class="btn btn-lg btn-outline-light
            text-white
            background-color
            margin">
        Đăng chỗ nghỉ của Quý vị
    </button>
</div>
<hr style="color: white" />
<div class="container">
    <div class="row" id="list-address">
        <div class="col-6 col-md-3 bottom">
            <a href="#" class="text-white">Phiên bản di động</a>
        </div>
        <div class="col-6 col-md-3 bottom">
            <a href="#" class="text-white">Tài Khoảng của bạn</a>
        </div>
        <div class="col-6 col-md-3 bottom">
            <a href="#" class="text-white">Thay đổi đặt phòng của bạn
                trực tuyến</a>
        </div>
        <div class="col-6 col-md-3 bottom">
            <a class="text-white" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Số
                    tham chiểu của bạn là 'FB285'">
                Liên hệ dịch vụ khách hàng
            </a>
        </div>
        <div class="col-6 col-md-3 bottom">
            <a class="text-white" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Trở
                    thành đối tác phân phối">
                Trở thành đối tác phân phối
            </a>
        </div>
        <div class="col-6 col-md-3 bottom">
            <a href="#" class="text-white">Booking.com dành cho Doanh
                Nghiệp</a>
        </div>
    </div>
</div>
</section>
`;

document.getElementById('footer-bottom').innerHTML +=`
<div class="marginTop">
<div class="row" id="list-address">
    <div class="col-6 col-md-3 list-option">
        <p>Các quốc gia</p>
        <p>Khu vực</p>
        <p>Thành phố</p>
        <p>Quận</p>
        <p>sân bay</p>
        <p>Khách sạn</p>
        <p>Địa điểm được quan tâm</p>
    </div>
    <div class="col-6 col-md-3 list-option">
        <p>Nhà</p>
        <p>Căn hộ</p>
        <p>Resort</p>
        <p>Biệt thự</p>
        <p>Nhà trọ</p>
        <p>Nhà nghỉ B&B</p>
        <p>Nhà khách</p>
    </div>
    <div class="col-6 col-md-3 list-option">
        <p>Những chỗ độc đáo</p>
        <p>Tất cả các điểm đến</p>
        <p>Khám phá</p>
        <p>Đánh giá của khách</p>
        <p>Các bài viết</p>
        <p>Ưu đãi theo mùa và dịp lễ</p>
    </div>
    <div class="col-6 col-md-3 list-option">
        <p>Cho thuê xe hơi</p>
        <p>Tìm chuyến bay</p>
        <p>Đặt nhà hàng</p>
        <p>Booking.com dành cho Đại Lý Du lịch</p>
    </div>
</div>
</div>
<div class="footer">
<h5 class="text-center hover-h5">Đăng nhập vào trang
    Extranet</h5>
<p>Bản quyền © 1996–2021 Booking.com™. Bảo lưu mọi quyền.</p>
<p class="text-center">
    Booking.com là một phần của Booking Holdings Inc., tập
    đoàn đứng đầu
    thế giới về du lịch trực tuyến và các dịch vụ liên quan.
</p>
<div class="row text-center">
    <div class="col-0 col-xl-2"></div>
    <div class="col-6 col-sm-3 col-md-2 col-xl-1
            margin-bottom">
        <img src="./Img/logobooking.com.png" alt="" />
    </div>
    <div class="col-6 col-sm-3 col-md-2 col-xl-2
            margin-bottom">
        <img src="./Img/logopriceline.com.png" alt="" />
    </div>
    <div class="col-6 col-sm-3 col-md-2 col-xl-1
            margin-bottom">
        <img src="./Img/kayak.png" alt="" />
    </div>
    <div class="col-6 col-sm-3 col-md-2 col-xl-2
            margin-bottom">
        <img src="./Img/agoda.png" alt="" />
    </div>
    <div class="col-6 col-sm-6 col-md-2 col-xl-1
            margin-bottom">
        <img src="./Img/rentalcars.com.png" alt="" />
    </div>
    <div class="col-6 col-sm-6 col-md-2
            col-xl-2margin-bottom">
        <img src="./Img/opentable.png" alt="" />
    </div>
</div>
</div>
`;