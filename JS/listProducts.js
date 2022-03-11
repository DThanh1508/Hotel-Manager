
function getCookie(name){
    let cookieStr = document.cookie;
    if(cookieStr){
        let cookieArr = cookieStr.split(';');
        for( var i =0; i<cookieArr.length; i++){
            let keyValueArr = cookieArr[i].split("=")
            if(keyValueArr[0].trim() == name){
                return keyValueArr[1];
            };
        };
    };
};

//---------------------------service2---------------------------------------------------
let listProducts2 = [
    { img: "./Img/2.1.webp", names: "Đà Lạt", quantity: "2,144 chỗ nghỉ" },
    { img: "./Img/2.2.webp", names: "Vũng Tàu", quantity: "1,821 chỗ nghỉ" },
    { img: "./Img/2.3.webp", names: "TP. Hồ Chí Minh", quantity: "5,605 chỗ nghỉ" },
    { img: "./Img/2.4.webp", names: "Hà Nội", quantity: "3,802 chỗ nghỉ" },
    { img: "./Img/2.5.webp", names: "Phú Quốc", quantity: "673 chỗ nghỉ" },
    { img: "./Img/2.6.webp", names: "Đà Nẵng", quantity: "2,508 chỗ nghỉ" },
    { img: "./Img/2.7.webp", names: "Nha Trang", quantity: "1,658 chỗ nghỉ" },
    { img: "./Img/2.8.webp", names: "Sa Pa", quantity: "443 chỗ nghỉ" },
    { img: "./Img/2.9.webp", names: "Hồ Tràm", quantity: "16 chỗ nghỉ" },
    { img: "./Img/2.10.webp", names: "Hội An", quantity: "1,007 chỗ nghỉ" },
];

var stt2 = 0;
function showService2 (){
    for (var room of listProducts2){
        var link ="#";
        if(getCookie('iduser')){
            link = "child_site.html";
        }
        document.getElementById('service2').innerHTML += `
        <a onclick="addresss(${stt2})" href="/${link}" class="col-1 padding-items items1 styleA">
            <div>
                <img src="${room.img}" class="items">
                <h5>${room.names}</h5>
                <p>${room.quantity}</p>
            </div>
        </a>
        `;
        stt2++;
    }
}

showService2 ()

const addresss =(n) =>{
    if (getCookie('iduser')) {
        createCookie('address',listProducts2[n].names);
    } else {
        alert('Bạn chưa đăng nhập!Bạn cần đăng nhập để có thể đặt phòng');
    };
}

let listItem = [
    { img: "./Img/4.2.jpg", title: "Appartamento Benincampi Roma", price_start: 100000,price_end:500000, point: "9,7", assess: "Xuất sắc", quantityAssess: "- 72 đánh giá" },
    { img: "./Img/4.3.jpg", title: "Apartments on Belinskogo",price_start: 500000,price_end:1000000, point: "9,7", assess: "Xuất sắc", quantityAssess: "- 28 đánh giá" },
    { img: "./Img/4.4.jpg", title: "Villa Rock Barcelona", price_start: 1000000,price_end:1500000, point: "9,3", assess: "Tuyệt hảo", quantityAssess: "- 18 đánh giá" },
    { img: "./Img/mới.PNG", title: "Hyde Park Residence London", price_start: 1500000,price_end:2000000, point: "9,8", assess: "Xuất sắc", quantityAssess: "- 9 đánh giá" },
    { img: "./Img/family.PNG", title: "Villa Rock Barcelona", price_start: 2000000,price_end:3000000, point: "9,3", assess: "Tuyệt hảo", quantityAssess: "- 18 đánh giá" }
];

var link ='#';

function show(){
    for (var index = 0; index < listItem.length; index++){
        if(getCookie('iduser')){
            link = "child_site.html";
        }
        var htmlFavorite = `
        <a href="/${link}" class="col-1 padding-items" onclick="rooms(${(index+1)})">
                <img class="items" src="${listItem[index].img}" alt="">
                <p class="margin-p">${listItem[index].title}</p>
                <h5>Giá từ ${listItem[index].price_start.toLocaleString('it-IT', )} -> ${listItem[index].price_end.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h5>
                <div class="row">
                    <div class="col-2">
                        <button type="button" class="btn btn-primary color point"><h5>${listItem[index].point}</h5></button>
                    </div>
                    <div class="col-4 margin-h6">
                        <h6>${listItem[index].assess}</h6>
                    </div>
                    <div class="col-4 margin-h6">
                        <p>${listItem[index].quantityAssess}</p>
                    </div>
                </div>
        </a>
        `;
        var appFavorite = document.querySelector('#favorite');
        appFavorite.innerHTML += htmlFavorite;
    };
};
show()

const rooms =(n) =>{
    if (getCookie('iduser')) {
        createCookie('price_start',listItem[n-1].price_start);
        createCookie('price_end',listItem[n-1].price_end);
        createCookie('price_start_topic',listItem[n-1].price_start.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));
        createCookie('price_end_topic',listItem[n-1].price_end.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}));

    } else {
        alert('Bạn chưa đăng nhập!Bạn cần đăng nhập để có thể đặt phòng');
    };
}

// -------------------------------------------------service---------------------------------------

var listrooms = [
    {img:"./Img/3.jpg",name:"Căn hộ",number:"724,443 căn hộ"},
    {img:"./Img/4.jpg ",name:"Resort",number:"17,285 resort"},
    {img:"./Img/6.jpg",name:"Nhà gỗ",number:"30,964 nhà gỗ"},
    {img:"./Img/7.jpg",name:"Nhà nghỉ thôn dã",number:"129,972 nhà nghỉ thôn dã"},
    {img:"./Img/8.jpg",name:"Glamping",number:"8,919 địa điểm glamping"},
    {img:"./Img/9.jpg",name:"Khách sạn căn hộ",number:"30,046 khách sạn căn hộ"},
    {img:"./Img/11.jpg",name:"Nhà khách",number:"101,205 nhà khách"},
    {img:"./Img/13.jpg",name:"Nhà nghỉ ven đường",number:"13,136 nhà nghỉ ven đường"},
    {img:"./Img/14.jpg",name:"Nhà nghỉ B&B",number:"182,834 nhà nghỉ B&B"},
    {img:"./Img/15.jpg",name:"Ryokan",number:"2,198 ryokan"},
    {img:"./Img/16.jpg",name:"Riad",number:"1,144 riad"},
    {img:"./Img/18.jpg",name:"Chỗ nghỉ nhà dân",number:"131,022 chỗ nghỉ nhà dân"},
    {img:"./Img/19.jpg",name:"Khu cắm trại",number:"6,253 khu cắm trại"},
    {img:"./Img/20.jpg",name:"Nhà nghỉ nông thô",number:"11,411 nhà nghỉ nông thôn"},
    {img:"./Img/21.jpg",name:"Nhà nghỉ trang trại",number:"9,207 nhà nghỉ trang trại"},
    {img:"./Img/22.jpg",name:"Nhà thuyền",number:"1,186 nhà thuyền"},
    {img:"./Img/23.jpg",name:"Lều trại sang trọng",number:"724,443 căn hộ"},
    {img:"./Img/24.jpg",name:"Khách sạn tự phục vụ",number:"646,789 khách sạn tự phục vụ"}
];

var stt = 0;
function showService (){
    for (var room of listrooms){
        var link ="#";
        if(getCookie('iduser')){
            link = "child_site.html";
        }
        document.getElementById('service').innerHTML += `
        <a onclick="types(${stt})" href="/${link}" class="col-1 padding-items styleA">
            <div>
                <img src="${room.img}" class="items">
                <h5>${room.name}</h5>
                <p>${room.number}</p>
            </div>
        </a>
        `;
        stt++;
    }
}

showService ()

const types =(n) =>{
    if (getCookie('iduser')) {
        createCookie('typeRooms',listrooms[n].name);
    } else {
        alert('Bạn chưa đăng nhập!Bạn cần đăng nhập để có thể đặt phòng');
    };
}


