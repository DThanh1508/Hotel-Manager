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
                var subject = "[Booking.coom] Th??ng B??o";
                var body = "T??i kho???n c???a b???n vi ph???m quy ?????nh c???a trang web. V?? th??? t??i kho???n n??y t???m th???i b??? kh??a";
                var massges = "Kh??a th??nh c??ng";
                sendEmail(res.data.email, subject, body, massges)
                data = { status: false };
                return data;
            } else {
                var subject = "[Booking.coom] Th??ng B??o";
                var body = "T??i kho???n c???a b???n ???? ???????c m??? kh??a";
                var massges = "M??? kh??a th??nh c??ng";
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
            var subject = "[Booking.coom] Th??ng B??o";
            var body = "T??i kho???n c???a b???n vi ph???m quy ?????nh c???a trang web. V?? th??? t??i kho???n n??y ???? b??? x??a v??nh vi???n";
            var massges = "X??a th??nh c??ng";
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
                    //     var subject = "[Booking.com] Th??ng B??o";
                    //     var body = `Hello ${user.name} <br> B???n s??? nh???n ph??ng ??? kh??ch s???n "${room.nameHotel}" v??o ng??y mai.<br>Ch??c b???n m???t ng??y t???t l??nh. <br> Thank You.`;
                    //     var massges ="G???i th??ng b??o th??nh c??ng";
                    //     sendEmail(user.email, subject, body, massges);
                    // }
                    if(checkStatus(room.check_in_date,room.check_out_date)=="???? tr??? ph??ng"){
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
            document.getElementById("totalBill").innerHTML = `${count-history} ????n`;
            document.getElementById("totalUsers").innerHTML = `${countUser} Accounts`;
            document.getElementById("totalHistory").innerHTML = `${history} ????n`;
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
        document.getElementById("totalCancal").innerHTML = `${count} ????n`;
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
    alert('????ng xu???t th??nh c??ng');
    window.location.assign('/');
}

function checkStatus(starDay,endDay){
    var d1 = new Date();
    var d2 = new Date(starDay);
    var d3 = new Date(endDay);
    if(d1.getDate() < d2.getDate()){
        return('ch??a nh???n ph??ng');
    }else if(d2.getDate()<=d1.getDate() && d1.getDate()<d3.getDate()){
        return('???? nh???n ph??ng');
    }else{
        return('???? tr??? ph??ng');
    }
}

let now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();
document.getElementById('updateTotalBill').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateTotalUser').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateTotalTurnover').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateTotalHistory').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateTotalHotelsy').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateTotalCancal').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateTotalTotal').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;
document.getElementById('updateSalary').innerHTML = `C???p nh???p l??c ${hours} gi??? ${minutes} ph??t, ng??y ${day} th??ng ${month} n??m ${year}`;

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
