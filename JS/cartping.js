var cartping_URL = "https://61b5b8db0e84b70017331bac.mockapi.io/users";
var rooms_URL2 = "https://61cc879b198df60017aec123.mockapi.io/listRooms";
var cancal_URL = "https://61bc10cad8542f0017824543.mockapi.io/Cancelrooms";

function putUser(id,data){
    axios.put(`${cartping_URL}/${id}`,data)
};

function putRoom(id,data){
    axios.put(`${rooms_URL2}/${id}`,data);
};

function getRoom(id){
    return axios(`${rooms_URL2}/${id}`);
};

function getUser(id){
    return axios(`${cartping_URL}/${id}`);
};

function postCancal(data) {
    axios.post(cancal_URL, data);
};

function getCookies(name) {
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

async function showcartping() {
    var count = 0;
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var quantily = 0;
    await axios(`${cartping_URL}/${getCookies('iduser')}`)
        .then(res => {
            for (var ele of res.data.listProducts) {
                count++;
                quantily = ele.quantily;
                if (checkStatus(ele.check_in_date, ele.check_out_date) == "chưa nhận phòng") {
                    count1++;
                    var row = `<tr id="count-${count}">`;
                    row += "<td>" + count1 + "</td>";
                    row += "<td>" + `${ele.nameHotel}` + "</td>";
                    row += "<td>" + `${ele.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
                    row += "<td>" + `${checkStatus(ele.check_in_date,ele.check_out_date)}` + "</td>";
                    row += "<td>" + `<button onclick="cancelRoom(${count-1},${ele.idroom})" class="btn btn-danger text-center" type="button">Xóa</button>` + "</td>";
                    row += "</tr>";
                    document.getElementById("tblNow").innerHTML += row;
                } else if(checkStatus(ele.check_in_date, ele.check_out_date) == "đã nhận phòng"){
                    count2++;
                    var row = `<tr id="count-${count}">`;
                    row += "<td>" + count2 + "</td>";
                    row += "<td>" + `${ele.nameHotel}` + "</td>";
                    row += "<td>" + `${ele.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
                    row += "<td>" + `${checkStatus(ele.check_in_date,ele.check_out_date)}` + "</td>";
                    // row += "<td>" + `<button onclick="cancelRoom(${count-1},${ele.idroom})" class="btn btn-danger text-center" type="button">Xóa</button>` + "</td>";
                    row += "</tr>";
                    document.getElementById("tblreceived").innerHTML += row;
                } else {
                    // var data = res.data;
                    // data.history.push(ele);
                    // putUser(getCookie('iduser'),data);
                    // data.listProducts.splice(count-1, 1);
                    // putUser(getCookie('iduser'),data);
                    // showHistory();
                    // getRoom(ele.idroom)
                    // .then(rooms =>{
                    //     var room = 
                    //     {   img: rooms.data.img,
                    //         name: rooms.data.name,
                    //         star: rooms.data.star,
                    //         adaddress: rooms.data.adaddress,
                    //         distance: rooms.data.distance,
                    //         text: rooms.data.text,
                    //         feedback: rooms.data.feedback,
                    //         numberOfReviews: rooms.data.numberOfReviews,
                    //         point: rooms.data.point,
                    //         location: rooms.data.location,
                    //         price: rooms.data.price,
                    //         quantily: rooms.data.quantily + quantily,
                    //         listImgs: rooms.data.listImgs
                    //     }
                    //     putRoom(id,room);
                    // })
                    // .then(function(){
                    // }) 
                    count3++;
                    var row = `<tr id="count-${count}">`;
                    row += "<td>" + count3 + "</td>";
                    row += "<td>" + `${ele.nameHotel}` + "</td>";
                    row += "<td>" + `${ele.total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}` + "</td>";
                    row += "<td>" + `${checkStatus(ele.check_in_date,ele.check_out_date)}` + "</td>";
                    row += "</tr>";
                    document.getElementById("tblhistory").innerHTML += row;

                }
            }
        })
    document.getElementById('quantity').innerText = (count - count3);

}
showcartping()

// function showHistory(){
//     var count = 0;
//     axios(`${cartping_URL}/${getCookies('iduser')}`)
//     .then(res =>{
//         for(var ele of res.data.history){
//             count++
//             var row = `<tr id="count-${count}">`;
//             row += "<td>" + count + "</td>";
//             row += "<td>" + `${ele.nameHotel}` + "</td>";
//             row += "<td>" + `${ele.total}` + "</td>";
//             row += "<td>" + `${checkStatus(ele.check_in_date,ele.check_out_date)}` + "</td>";
//             row += "</tr>";
//             document.getElementById("tblhistory").innerHTML += row;
//         }
//     })
// }

let list_rose = [];
    console.log(list_rose);
const cancelRoom = (n,id)=>{
    var quantily = 0;
    var numbers = 0;
    getRoom(id)
    .then( async res =>{
        await getUser(getCookie('iduser'))
            .then(ele =>{
                quantily = ele.data.listProducts[n].quantily;
                numbers = ele.data.listProducts.length;
                var data = ele.data;
                var subject = "[Booking.com] Hủy đơn đặt phòng";
                var body = `Hello ${data.name}, <br> Bạn đã hủy phòng thành công. <br> Bạn sẽ phải chịu mức phí bồi thường là 3% tổng số tiền của đơn phòng. <br> Tổng số tiền chưa trừ phí bồi thường là: ${data.listProducts[n].total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}. <br> Sau khi trừ phí bồi thường: ${Math.floor(data.listProducts[n].total*0.97).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}. <br> Chúng tôi sẽ hoàn lại tiền cho bạn sớm nhất.`
                if(ele.data.listProducts[n].paymentMethods=="Thanh toán khi nhận phòng" || ele.data.listProducts[n].paymentMethods=="Thanh toán bằng thẻ ngân hàng"){
                    body = `Hello ${data.name}, <br> Bạn đã hủy phòng thành công. <br> Bạn sẽ phải chịu mức phí bồi thường là 3% tổng số tiền của đơn phòng. <br> Bạn đã đặt cọc với số tiền là ${(data.listProducts[n].total/2).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}. Sau khi trừ phí bồi thường ${(Math.floor(data.listProducts[n].total/2)-(data.listProducts[n].total*0.03)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} <br> Chúng tôi sẽ hoàn lại tiền cho bạn sớm nhất.`
                }
                var massges = "Check email của bạn!"
                sendEmail(data.email, subject, body, massges);
                var cancal ={
                    nameCustomer: data.name,
                    nameHotel: res.data.name,
                    price: data.listProducts[n].total,
                    quantity: quantily,
                    compensation: data.listProducts[n].total*0.03
                };
                postCancal(cancal);
                data.listProducts.splice(n, 1);
                putUser(getCookie('iduser'),data);
                // list_rose.push(data.listProducts[n].total*0.03);
            })
        var rooms = 
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
            quantily: res.data.quantily + quantily,
            listImgs: res.data.listImgs
        }
        putRoom(id,rooms);
        document.getElementById('quantity').innerText = numbers-1;
        alert('Xóa thành công');
        document.getElementById("room-"+id).innerHTML =`Số phòng trống: ${res.data.quantily + quantily}`;
        document.getElementById("tblNow").innerHTML ='';
        document.getElementById("tblhistory").innerHTML ='';
        showcartping()
    })
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

localStorage.setItem('list_rose', JSON.stringify(list_rose));
