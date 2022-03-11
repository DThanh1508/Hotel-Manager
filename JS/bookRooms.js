var users_URL1 ="https://61b5b8db0e84b70017331bac.mockapi.io/users";
var rooms_URL1 = "https://61cc879b198df60017aec123.mockapi.io/listRooms";
    
function getUser(id){
    return axios(`${users_URL1}/${id}`);
};

function putUser(id,data){
    axios.put(`${users_URL1}/${id}`,data)
};

function putRoom(id,data){
    axios.put(`${rooms_URL1}/${id}`,data);
};

function getRoom(id){
    return axios(`${rooms_URL1}/${id}`);
};

let cookies = document.cookie;

function createCookie(name, value, expDay = 1) {
    let now = new Date();
    now.setTime(now.getTime() + expDay * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ";expires=" + now.toUTCString() + ";path/"
};

function getCookie(name) {
    let cookieStr = document.cookie;
    if (cookieStr) {
        let cookieArr = cookieStr.split(';');
        for (var i = 0; i < cookieArr.length; i++) {
            let keyValueArr = cookieArr[i].split("=")
            if (keyValueArr[0].trim() == name) {
                return keyValueArr[1];
            };
        };
    };
};

function deleteCookie(name) {
    let now = new Date();
    now.setTime(now.getTime() - 24 * 60 * 60 * 1000);
    document.cookie = name + "=;expires=" + now.toUTCString() + ";path/"
}


function showRoom(res){
    if(getCookie('idroom')){
        document.getElementById('room').innerHTML=`
    <div class="row">
        <div class="col-5">
            <h3>${res.data.name}</h3>
        </div>
        <div class="col-3">
        ${res.data.star}
        </div>
        <div class="col-4">
            <h3>Đánh Giá: ${res.data.feedback}</h3>
        </div>
        </div>
            <div class="row">
                <div class="col-5">
                    <p>Địa chỉ: ${res.data.address}</p>
                </div>
                <div class="col-3">Điểm: ${res.data.point}</div>
                <div class="col-4">Địa điểm: ${res.data.location}</div>
            </div>
            <div class="row">
                <div class="col-5">
                    <p id="room-${getCookie('idroom')}">Số phòng trống: ${res.data.quantily}</p>
                </div>
                <div class="col-3">Giá phòng/ngày: ${res.data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</div>
                <div class="col-4"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingRoom">Đặt phòng</button></div>
            </div>
            <div class="row margin-top">
                <div class="col-4">
                    <img width="100%" height="223px" src="${res.data.listImgs[0]}" alt="">
                    <br> <br>
                    <img width="100%" height="223px" style="margin-top: 5px;" src="${res.data.listImgs[1]}" alt="">
                </div>
                <div class="col-8">
                    <img width="99.9%"  height="475px" src="${res.data.listImgs[2]}" alt="">
                </div>
            </div>
            <br>
            <div class="grid">
                <img width="100%" src="${res.data.listImgs[3]}" alt="">
                <img width="100%" src="${res.data.listImgs[4]}" alt="">
                <img width="100%" src="${res.data.listImgs[5]}" alt="">
                <img width="100%" src="${res.data.listImgs[6]}" alt="">
            </div>
            <div class="row margin-top">
                <div class="col-8">
                    <p> <big> <b>Thông tin chi tiết:</b></big> ${res.data.distance}. <br>
                    ${res.data.text}</p>
                </div>
                <div class="col-4 text-center">
                    <br>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingRoom">Đặt phòng</button>
                </div>
                </div>
    `;
    document.getElementById('inforRoom').innerHTML+=`
    <p>Tên chỗ nghỉ/điểm đến: ${res.data.name}</p>
    <p>Giá phòng/ngày: ${res.data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
    `;
    }
};

function getData(){
    getRoom(getCookie('idroom'))
    .then(res =>{
        showRoom(res)
    })
};
getData();

// -------------------------------------form-booking-room------------------------------------------
const inputNumber = document.querySelector(".number-people");
const adultsPlus = document.querySelector(".adultsPlus");
const adultsMinus = document.querySelector(".adultsMinus");
let adultsValue = document.querySelector(".adults span");
let i = 1;
adultsPlus.addEventListener("click", function() {
    if (i < 9) {
        i = i + 1;
        adultsValue.innerHTML = i;
    };
    inputNumber.value = i + " " + "người lớn";
})
adultsMinus.addEventListener("click", function() {
    if (i > 1) {
        i = i - 1;
        adultsValue.innerHTML = i;
        inputNumber.value = i + " " + "người lớn";
    };
})
const childrenNumber = document.querySelector(".number-children");
const childrenPlus = document.querySelector(".childrenPlus");
const childrenMinus = document.querySelector(".childrenMinus");
let childrenValue = document.querySelector(".children span");
let x = 0;
childrenPlus.addEventListener("click", function() {
    if (x < 9) {
        x = x + 1;
        childrenValue.innerHTML = x;
    };
    childrenNumber.value = x + " " + "trẻ em";
})
childrenMinus.addEventListener("click", function() {
    if (x > 0) {
        x = x - 1;
        childrenValue.innerHTML = x;
        childrenNumber.value = x + " " + "trẻ em";
    };
})
const roomNumber = document.querySelector(".number-room");
const roomPlus = document.querySelector(".roomPlus");
const roomMinus = document.querySelector(".roomMinus");
let roomValue = document.querySelector(".room span");
let j = 1;
roomPlus.addEventListener("click", function() {
    if (j < 3) {
        j = j + 1;
        roomValue.innerHTML = j;
    };
    roomNumber.value = j + " " + "phòng";
})
roomMinus.addEventListener("click", function() {
    if (j > 1) {
        j = j - 1;
        roomValue.innerHTML = j;
        roomNumber.value = j + " " + "phòng";
    };
})

const closeForm = document.querySelector(".close");
closeForm.addEventListener("click", function() {
    numberBox.classList.remove('active');
    i = 1;
    inputNumber.value = i + " " + "người lớn";
    x = 0;
    childrenNumber.value = x + " " + "trẻ em";
    j = 1;
    roomNumber.value = j + " " + "phòng";
    adultsValue.innerHTML = i;
    childrenValue.innerHTML = x;
    roomValue.innerHTML = j;

})
const agreeForm = document.querySelector(".agree");
agreeForm.addEventListener("click", function() {
    numberBox.classList.remove('active');
})

const numberBox = document.querySelector(".number-box");
inputNumber.addEventListener("click", function() {
    numberBox.classList.add('active');
})
childrenNumber.addEventListener("click", function() {
    numberBox.classList.add('active');
})
roomNumber.addEventListener("click", function() {
    numberBox.classList.add('active');
});

// -----------------------------------------Booking-Room---------------------------------------------


var numbers = 0;

function number (){
    getUser(getCookie('iduser'))
    .then(res =>{
        numbers = res.data.listProducts.length;
        document.getElementById('quantity').innerText = numbers;
    })
}

number();

var idroom = 0;
var total = 0;

function book(){
    var received_date = document.getElementById('received-date').value;
    var pay_day = document.getElementById('pay-day').value;
    var number_of_booking_days = numberOfNightsBetweenDates(received_date,pay_day);
    var payment_methods = document.getElementById('payment').value;
    if(received_date==''|| pay_day==''){
        alert('Bạn cần nhập đầy đủ ngày đặt phòng và ngày trả phòng!')
        return;
    }
    getRoom(getCookie('idroom'))
    .then(async res =>{
        if(res.data.quantily<j){
            alert('Số phòng vượt quá số phòng còn trống!');
            return;
        }
        await getUser(getCookie('iduser'))
            .then(ele =>{
                total = res.data.price * j * number_of_booking_days;
                idroom = ele.data.listProducts.length+1;
                // var nameCustomer = ele.data.name;
                // var newNameCustomer = nameCustomer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                var id = 1;
                if(ele.data.listProducts.length > 0){
                    id= ele.data.listProducts[ele.data.listProducts.length-1].id+1;
                }
                var room = {
                    id: id,
                    nameHotel: res.data.name,
                    price: res.data.price,
                    quantily: j,
                    total: total,
                    check_in_date: received_date,
                    check_out_date: pay_day,
                    number_of_booking_days: number_of_booking_days,
                    paymentMethods: payment_methods,
                    idroom:getCookie('idroom')
                };
                var data = ele.data;
                data.listProducts.push(room);
                putUser(getCookie('iduser'),data);
                var subject = "[Booking.com] Hóa Đơn Đặt Phòng";
                var body = `Chào: ${ele.data.name} <br> <h3><b>Hóa Đơn Đặt Phòng:</b></h3> <br> Tên Khách Sạn: ${res.data.name} <br> Giá Phòng/Ngày: ${res.data.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} <br> Ngày Đặt Và Trả Phòng: ${received_date} Đến ${pay_day} <br> Số Ngày Đặt Phòng: ${number_of_booking_days} <br> Số Phòng Được Đặt: ${j} <br> Số Người Lớn: ${i} <br> Số Trẻ Em: ${x} <br> Tổng Tiền: ${total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} <br> Phương Thức Thanh Toán: ${payment_methods} <br><br><br> Cảm Ơn Bạn Đã Tin Tưởng Và Lượng Chọn Trang Web Cho Chúng Tôi.`;
                var massges ="Đã Gửi Hóa Đơn Đặt Phòng Qua Email Của Bạn.";
                sendEmail(ele.data.email, subject, body, massges);
            })
        var room = 
        {   img: res.data.img,
            name: res.data.name,
            star: res.data.star,
            adaddress: res.data.adaddress,
            distance: res.data.distance,
            text: res.data.text,
            feedback: res.data.feedback,
            numberOfReviews: res.data.numberOfReviews,
            point: res.data.point,
            location: res.data.location,
            price: res.data.price,
            quantily: res.data.quantily - j,
            listImgs: res.data.listImgs
        }
        putRoom(getCookie('idroom'),room);
        document.getElementById('quantity').innerText = numbers+1;
        var row = `<tr id="count-${idroom-1}">`;
            row += "<td>" + `${idroom}` + "</td>";
            row += "<td>" + `${res.data.name}` + "</td>";
            row += "<td>" + `${total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
            row += "<td>" + `Chưa nhận phòng` + "</td>";
            row += "<td>" + `<button onclick="cancelRoom(${idroom-1},${getCookie('idroom')})" class="btn btn-danger text-center" type="button">Xóa</button>` + "</td>";
            row += "</tr>";
            document.getElementById("tblNow").innerHTML += row;
        bookingRoomModal.hide();
        alert('thành công');
        // total = total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
        if(payment_methods =="Thanh toán qua ZaloPay" || payment_methods=="Thanh toán qua Momo"){
            qrcodes(
                `Total: ${total} VND.
Payment success
                `)
            myModal.show();
        }else{
            qrcodes(
                `Total: ${total/2} VND.
Payment success
                `)
            myModal.show();    
        }
        document.getElementById("room-"+getCookie('idroom')).innerHTML =`Số phòng trống: ${res.data.quantily - j}`;
        numberBox.classList.remove('active');
        i = 1;
        inputNumber.value = i + " " + "người lớn";
        x = 0;
        childrenNumber.value = x + " " + "trẻ em";
        j = 1;
        roomNumber.value = j + " " + "phòng";
        adultsValue.innerHTML = i;
        childrenValue.innerHTML = x;
        roomValue.innerHTML = j;
        document.getElementById('received-date').value='';
        document.getElementById('pay-day').value='';
        document.getElementById('payment').value = "Thanh toán khi nhận phòng";
        document.getElementById('payDay').style.display='none';
    })
}

const numberOfNightsBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    let dayCount = 0
    while (end > start) {
        dayCount++
        start.setDate(start.getDate() + 1)
    }
    return dayCount
}

// ---------------------------------------QR Code------------------------------------------------
function qrcodes(text){
    document.getElementById('id_qrcode').innerHTML = `<div></div>`;
    return new QRCode("id_qrcode", {
		text:text,
		width:200,
		height:200,
		colorDark:"#000000",
		colorLight:"#ffffff",
		correctLevel:QRCode.CorrectLevel.H
	});
}   

var myModal = new bootstrap.Modal(document.getElementById('qrcodemodal'));
var bookingRoomModal = new bootstrap.Modal(document.getElementById('bookingRoom'));
myModal.addEventListener('hidden.bs.modal', function check (event) {
    location.reload();
})