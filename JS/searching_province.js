const inputSearch = document.querySelector(".input-search");
const autoBox = document.querySelector(".autobox");
inputSearch.onkeyup = (e) => {
    let checkData = e.target.value;
    let dataArray = [];
    if (checkData) {
        dataArray = recomentList.filter((data) => {
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
        });
        dataArray = dataArray.map((data) => {
            return data = '<li>' + data + '</li > '
        });
        autoBox.classList.add('active');
        showAdress(dataArray);
        let liItem = autoBox.querySelectorAll("li");
        for (let i = 0; i < liItem.length; i++) {
            liItem[i].addEventListener("click", function() {
                inputSearch.value = liItem[i].innerHTML;
                autoBox.classList.remove('active');
            })
        }
    } else {
        autoBox.classList.remove('active');
    }
}

function showAdress(list) {
    let listData;
    if (!list.length) {
        listData = '<li>' + inputSearch.value + '</li>';
    } else {
        listData = list.join('');
    }
    autoBox.innerHTML = listData;
}

const deleteText = document.querySelector(".delete");
deleteText.addEventListener("click", function() {
    data = "";
    inputSearch.value = data;
    autoBox.classList.remove('active');
})
let recomentList = [
    "An Giang",
    "Bà rịa – Vũng tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Thành phố Hồ Chí Minh",
    "Trà Vinh", "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Vĩnh Phúc"
];
//--------------------------------------------------------------------------money--------------------------------------------
const inputSearchMoney = document.querySelector(".input-search-money");
const moneyBox = document.querySelector(".moneybox");
inputSearchMoney.onkeyup = (e) => {
    let checkDataMoney = e.target.value;
    let dataArrayMoney = [];
    if (checkDataMoney) {
        dataArrayMoney = moneyList.filter((data) => {
            return data.toLocaleLowerCase().startsWith(checkDataMoney.toLocaleLowerCase())
        });
        dataArrayMoney = dataArrayMoney.map((data) => {
            return data = '<li>' + data + '</li > '
        });
        moneyBox.classList.add('active');
        showmoney(dataArrayMoney);
        let liMoney = moneyBox.querySelectorAll("li");
        for (let x = 0; x < liMoney.length; x++) {
            liMoney[x].addEventListener("click", function() {
                inputSearchMoney.value = liMoney[x].innerHTML;
                moneyBox.classList.remove('active');
            })
        }
        // console.log(dataArray);
    } else {
        moneyBox.classList.remove('active');
    }
}

function showmoney(list) {
    let listDataMoney;
    if (!list.length) {
        listDataMoney = '<li>' + inputSearchMoney.value + '</li>';
    } else {
        listDataMoney = list.join('');
    }
    moneyBox.innerHTML = listDataMoney;
}

const deleteMoney = document.querySelector(".delete-money");
deleteMoney.addEventListener("click", function() {
    data = "";
    inputSearchMoney.value = data;
    moneyBox.classList.remove('active');
})
let moneyList = [
    "Đô la Mỹ (USD) ",
    "Tiền tệ của chỗ nghỉ (€£$) ",
    "Bạt Thái (THB) ",
    "Bảng Ai Cập (EGP) ",
    "Bảng Anh (GBP) ",
    "Dinar Bahrain (BHD) ",
    "Dinar Jordan (JOD) ",
    "Dinar Kuwait (KWD) ",
    "Dirham UAE (AED) ",
    "Euro (EUR) ",
    "Forint (HUF) ",
    "Franc BCEAO CFA (XOF) ",
    "Franc Thụy Sỹ (CHF) ",
    "Hryvnia (UAH) ",
    "Koruna Séc (CZK) ",
    "Krone Na Uy (NOK) ",
    "Krone Đan Mạch (DKK) ",
    "Lari Georgia (GEL) ",
];

const menuBox = document.querySelector(".menu-box");
const box = document.querySelector(".box");
menuBox.addEventListener("click", function() {
    box.classList.add('activebox');
})