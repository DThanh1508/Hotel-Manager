const users_URL = "https://61b5b8db0e84b70017331bac.mockapi.io/users";
var cancal_URL = "https://61bc10cad8542f0017824543.mockapi.io/Cancelrooms";
var id = -1;


function getAccount(id) {
    return axios(`${users_URL}/${id}`);
};

function deleteAccounts(id) {
    axios.delete(`${users_URL}/${id}`)
        .then(() => {
            location.reload()
        })
};

function putAccount(id, data) {
    axios.put(`${users_URL}/${id}`, data)
};
var idpro = 0;
var count = 0;

function addUser() {
    axios(users_URL)
        .then(res => {
            for (var user of res.data) {
                id = user.id;
                if(user.id== 1){
                    continue;
                };
                count++;
                var row = "<tr>";
                row += '<td class="stt">' + count + "</td>";
                row += "<td>" + `${user.name}` + "</td>";
                row += "<td>" + `${user.gender}` + "</td>";
                row += "<td>" + `${user.data_of_birth}` + "</td>";
                row += "<td>" + `${user.identity_card}` + "</td>";
                row += "<td>" + `${user.phone_number}` + "</td>";
                row += "<td>" + `${user.address}` + "</td>";
                row += `<td><button onclick="eye(${id})"class="btn btn-outline-danger"><i id="eye${id}" class="fas fa-eye"></i></button>`
                row += `<button onclick="deleteAccount(${id})" class="btn ml-1 btn-outline-success"><i class="fas fa-trash"></i></button></td>`;
                row += "</tr>";
                document.getElementById("tblhoai").innerHTML += row;
                if (user.status == false) {
                    document.getElementById('eye' + id).classList.add('fa-eye-slash');
                }
            }
        })
}
addUser()

function eye(id) {
    document.getElementById('eye' + id).classList.toggle('fa-eye-slash');
    document.getElementById('eye' + id).classList.toggle('fa-eye');
    var data;
    getAccount(id)
        .then(res => {
            if (res.data.status) {
                var subject = "[Booking.coom] Thông Báo";
                var body = "Tài khoản của bạn vi phạm quy định của trang web. Vì thế tài khoản này tạm thời bị khóa";
                var massges = "Khóa thành công";
                sendEmail(res.data.email, subject, body, massges)
                data = { status: false };
                return data;
            } else {
                var subject = "[Booking.coom] Thông Báo";
                var body = "Tài khoản của bạn đã được mở khóa";
                var massges = "Mở khóa thành công";
                sendEmail(res.data.email, subject, body, massges)
                data = { status: true };
                return data;
            }
        })
        .then(function(data) {
            putAccount(id, data);
        })
};

const deleteAccount = n => {
    getAccount(n)
        .then(res => {
            var subject = "[Booking.coom] Thông Báo";
            var body = "Tài khoản của bạn vi phạm quy định của trang web. Vì thế tài khoản này đã bị xóa vĩnh viễn";
            var massges = "Xóa thành công";
            sendEmail(res.data.email, subject, body, massges);
        })
        .then(function() {
            deleteAccounts(n);
        })
}

function showBillRooms() {
    var turnover = 0;
    var count = 0;
    var countUser = 0;
    var history = 0;
    axios(users_URL)
        .then(users => {
            for (var user of users.data) {
                if(user.id==1){
                    continue;
                }
                countUser ++;
                for (var room of user.listProducts) {
                    count++;
                    turnover = turnover + room.total;
                    var row = "<tr>";
                    row += '<td class="stt">' + count + "</td>";
                    row += "<td>" + `${user.name}` + "</td>";
                    row += "<td>" + `${user.identity_card}` + "</td>";
                    row += "<td>" + `${room.nameHotel}` + "</td>";
                    row += '<td class="numberRoom">' + `${room.quantily}` + "</td>";
                    row += "<td>" + `${room.check_in_date}` + "</td>";
                    row += "<td>" + `${room.check_out_date}` + "</td>";
                    row += "<td>" + `${room.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
                    row += "<td>" + `${(room.total*0.97).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
                    row += "<td>" + `${(room.total*0.03).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
                    row += "</tr>";
                    document.getElementById("tblBill").innerHTML += row;
                    // if(numberOfNightsBetweenDates(room.check_in_date)==1){
                    //     var subject = "[Booking.com] Thông Báo";
                    //     var body = `Hello ${user.name} <br> Bạn sẽ nhận phòng ở khách sạn "${room.nameHotel}" vào ngày mai.<br>Chúc bạn một ngày tốt lành. <br> Thank You.`;
                    //     var massges ="Gửi thông báo thành công";
                    //     sendEmail(user.email, subject, body, massges);
                    // }
                    if(checkStatus(room.check_in_date,room.check_out_date)=="đã trả phòng"){
                        history++;
                    }
                }
            };
            document.getElementById("turnover").innerHTML = `${turnover.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
            document.getElementById("salary").innerHTML = `${(turnover-(turnover)*0.03).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
            axios(cancal_URL)
            .then(res =>{
                turnover = turnover*0.03;
                for(var cancal of res.data){
                    turnover = turnover + cancal.compensation;
                }
                document.getElementById("totaltotal").innerHTML = `${turnover.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`;
            })
            document.getElementById("totalBill").innerHTML = `${count-history} Đơn`;
            document.getElementById("totalUsers").innerHTML = `${countUser} Accounts`;
            document.getElementById("totalHistory").innerHTML = `${history} Đơn`;
        })
};

showBillRooms();

function cancal(){
    axios(cancal_URL)
    .then(res =>{
        var count = 0;
        for(var cancal of res.data){
            count++;
            var row = "<tr>";
            row += "<td>" + count + "</td>";
            row += "<td>" + `${cancal.nameCustomer}` + "</td>";
            row += "<td>" + `${cancal.nameHotel}` + "</td>";
            row += "<td>" + `${cancal.quantity}` + "</td>";
            row += "<td>" + `${cancal.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
            row += "<td>" + `${cancal.compensation.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
            row += "</tr>";
            document.getElementById("tblcancal").innerHTML += row;
        }
        document.getElementById("totalCancal").innerHTML = `${count} Đơn`;
    })
}

cancal();

function homePage() {
    document.getElementById('create').style.display = 'none';
    document.getElementById('product').style.display = 'none';
    document.getElementById('bill').style.display = 'none';
    document.getElementById('user').style.display = 'none';
    document.getElementById('cancalRooms').style.display = 'none';
    document.getElementById('home-content').style.display = 'block';

};


function roomManager() {
    document.getElementById('create').style.display = 'block';
    document.getElementById('product').style.display = 'block';
    document.getElementById('bill').style.display = 'none';
    document.getElementById('user').style.display = 'none';
    document.getElementById('cancalRooms').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
};

function userManager() {
    document.getElementById('create').style.display = 'none';
    document.getElementById('product').style.display = 'none';
    document.getElementById('bill').style.display = 'none';
    document.getElementById('cancalRooms').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('user').style.display = 'block';
};

function bookRoomManager() {
    document.getElementById('bill').style.display = 'block';
    document.getElementById('create').style.display = 'none';
    document.getElementById('product').style.display = 'none';
    document.getElementById('cancalRooms').style.display = 'none';
    document.getElementById('user').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
};

function cancalRooms() {
    document.getElementById('create').style.display = 'none';
    document.getElementById('product').style.display = 'none';
    document.getElementById('user').style.display = 'none';
    document.getElementById('bill').style.display = 'none';
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('cancalRooms').style.display = 'block';
};

function logout() {
    alert('Đăng xuất thành công');
    window.location.assign('/');
}

function checkStatus(starDay,endDay){
    var d1 = new Date();
    var d2 = new Date(starDay);
    var d3 = new Date(endDay);
    if(d1.getDate() < d2.getDate()){
        return('chưa nhận phòng');
    }else if(d2.getDate()<=d1.getDate() && d1.getDate()<d3.getDate()){
        return('đã nhận phòng');
    }else{
        return('đã trả phòng');
    }
}

let now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();
document.getElementById('updateTotalBill').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateTotalUser').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateTotalTurnover').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateTotalHistory').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateTotalHotelsy').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateTotalCancal').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateTotalTotal').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;
document.getElementById('updateSalary').innerHTML = `Cập nhập lúc ${hours} giờ ${minutes} phút, ngày ${day} tháng ${month} năm ${year}`;

function updates(){
    location.reload();
}

const numberOfNightsBetweenDates = (startDate) => {
    const start = new Date(startDate)
    const end = new Date()
    let dayCount = 0
    while (start > end) {
        dayCount++
        end.setDate(end.getDate() + 1)
    }
    return dayCount
}
