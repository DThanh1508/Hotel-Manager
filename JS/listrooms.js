var rooms_URL = "https://61cc879b198df60017aec123.mockapi.io/listRooms";

function show(){
    axios(rooms_URL)
    .then(res =>{
        var count = 0;
        var topic ='';
        if(getCookie('typeRooms')){
            topic = getCookie('typeRooms');
        }
        if(getCookie('address')){
            topic = getCookie('address');
        }
        if(getCookie('price_start')){
            topic = `Giá từ ${getCookie('price_start_topic')} đến ${getCookie('price_end_topic')}`;
        }
        for(var ele of res.data){
            var html =`
                <div class="row rim" onclick="bookRoom(${ele.id})">
                    <div class="col-3">
                        <img class="item" src="${ele.img}" alt="photo">
                        <i id="fa-heart${ele.id}" onclick="heart(${ele.id})" class="fas fa-heart " data-bs-toggle="tooltip" data-bs-placement="top" title="Lưu"></i>
                        <div id="tranfrom${ele.id}" class="tranfrom">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 marginTop link">
                        <h5 class="hover-h5 float">${ele.name}</h5>
                        <div class="comment">
                            ${ele.star}
                        </div>
                        <div class="clearfix"></div>
                        <a href="#">${ele.address}</a>
                        <a href="#">Xem trên bản đồ</a>
                        <a href="#" class="effect2" data-bs-toggle="tooltip" data-bs-placement="top" title="Đây là khoảng cách đường chim bay. Thời gian di chuyển thực tế có thể sẽ lâu hơn nếu bạn lái xe hay sử dụng phương tiện công cộng.">
                        ${ele.distance}
                        </a>
                        <p>${ele.text}</p>
                    </div>
                    <div class="col-3 marginTop">
                        <div class="row">
                            <div class="col-6">
                                <h6>${ele.feedback}</h6>
                                <p>${ele.numberOfReviews} đánh giá</p>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-primary color"><h5>${ele.point}</h5></button>
                            </div>
                        </div>
                        <h6 class="text-center hover-h5">Địa điểm ${ele.location}</h6>
                        <button type="button" class="btn btn-primary price-display" data-bs-toggle="tooltip" data-bs-placement="top" title="Nhập ngày nhận phòng và trả phòng của ạn vào ô tìm kiếm ở bên trái để có giá phòng chính xác và chọn lọc theo giá.">
                            Hiển thị giá
                        </button>
                    </div>
                </div>
                `;
            if(ele.type == getCookie('typeRooms')){
                count++;
                if (ele.id == 1) {
                    document.getElementById('room1').innerHTML+= html;
                }else{
                    document.getElementById('listrooms').innerHTML+= html;
                };
            };
            if(ele.address == getCookie('address')){
                count++;
                if (ele.id == 1) {
                    document.getElementById('room1').innerHTML+= html;
                }else{
                    document.getElementById('listrooms').innerHTML+= html;
                };
            };
            if(ele.price >= getCookie('price_start') && ele.price <= getCookie('price_end')){
                count++;
                if (ele.id == 1) {
                    document.getElementById('room1').innerHTML+= html;
                }else{
                    document.getElementById('listrooms').innerHTML+= html;
                };
            };
        };
        document.getElementById('topic').innerHTML = `${topic}: tìm thấy ${count} chỗ nghỉ`;    
    })
};

show();

const bookRoom = (n) =>{
    createCookie('idroom',n)
    window.location.href='detailRoom.html';
}

function come_back(){
    deleteCookie('typeRooms');
    deleteCookie('address');
    deleteCookie('price_end');
    deleteCookie('price_start');
    deleteCookie('price_start_topic');
    deleteCookie('price_end_topic');
}
