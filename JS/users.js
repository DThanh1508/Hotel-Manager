var users_URL = "https://61b5b8db0e84b70017331bac.mockapi.io/users";

var iduser = getCookie('iduser');

const getID = (id) => {
    return document.getElementById(id);
};

function postAccount(data) {
    axios.post(users_URL, data);
};

function putAccount(id, data) {
    axios.put(`${users_URL}/${id}`, data)
        .then(res => { console.log(res.data) })
};

function deleteAccount(id) {
    axios.delete(`${users_URL}/${id}`);
};

function getAccount(id) {
    return axios(`${users_URL}/${id}`);
};

// ----------------------------Code OTP-----------------------------------------------------------
function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
};

// ---------------------------------sign in - log in--------------------------------------------------------

var otp = 0;
var send = false;
async function next(){
    otp = TaoSoNgauNhien(100000, 999999);
    var emailsignup = getID('emailsignup').value;
    var name_customer = getID('namesignup').value;
    if(emailsignup==''|| name_customer==''){
        alert("Bạn hãy nhập thông tin đầy đủ.");
        return;
    }
    await axios(users_URL)
    .then(res =>{
        for (var user of res.data) {
            if (emailsignup == user.email) {
                alert("Email này đã tồn tại! Bạn hãy đăng ký lại.");
                send = true;
                return false;
            };
        }
        return true;
    })
    .then(function(status){
        if(status){
            getID('buttonsignup').style.display='block';
            getID('otp').style.display='block';
            getID('buttonNext').style.display='none';
            getID('frorm').style.display='none';
        }
    })
    if(send){
        return;
    }
    var subject ="[Booking.com] Mã OTP";
    var body =`Hello: ${name_customer},<br>Email: ${emailsignup} <br> Mã OPT: ${otp}`;
    var massges = 'Đang gửi mã OTP vào email của bạn!';
    sendEmail(emailsignup, subject, body, massges);
}

function sign_up() {
    var emailsignup = getID('emailsignup').value;
    var name_customer = getID('namesignup').value;
    var passwordsignup = getID('passwordsignup').value;
    var pass2 = getID('pass2').value;
    var codeOTP = getID('codeOtp').value;
    if(codeOTP != otp){
        alert("Mã OTP không đúng! Vui lòng mời bạn nhập lại");
        return;
    }
    if (passwordsignup == '' || pass2 == '') {
        alert("Bạn hãy nhập thông tin đầy đủ.");
        return;
    };
    if (passwordsignup != pass2) {
        alert("Mật khẩu không khớp! Bạn hãy nhập thông tin đầy đủ.");
        return false;
    };
    if (passwordsignup.length >= 8){
        axios(users_URL)
            .then(res => {
                for (var user of res.data) {
                    if (emailsignup == user.email) {
                        alert("Email này đã tồn tại! Bạn hãy đăng ký lại.");
                        return false;
                    };
                }
                return true;
            })
            .then(function (status) {
                if (status) {
                    data = {
                        email: emailsignup,
                        password: passwordsignup,
                        name: name_customer,
                        gender: '',
                        identity_card: '',
                        phone_number: '',
                        address: '',
                        status: true,
                        listProducts: [],
                        history: []
                    };
                    postAccount(data);
                    sign_in_modal.hide();
                    getID('buttonsignup').style.display='none';
                    getID('otp').style.display='none';
                    getID('buttonNext').style.display='block';
                    getID('frorm').style.display='block';
                    getID('emailsignup').value='';
                    getID('namesignup').value='';
                    getID('passwordsignup').value='';
                    getID('pass2').value='';
                    getID('codeOtp').value='';
                    alert('Đăng ký thành công');
                };
            })
    } else {
        alert('Mật khẩu phải từ 8 ký tự trở lên!')
    };
}

async function login() {
    var error = false;
    var email = getID('emaillogin').value;
    var password = getID('passlogin').value;
    await axios(users_URL)
        .then(res => {
            for (var user of res.data) {
                if (email == user.email && password == user.password) {
                    if(email =="adminbooking@gmail.com"){
                        alert('Bạn đăng nhập với vị trí Admin!')
                        window.location.href = 'admin.html';
                        return false;
                    }
                    if (user.status == false) {
                        alert('Tài khoản này đã bị khóa! Do vi phạm các quy định của web.');
                        return false;
                    } else {
                        alert('Đăng nhập thành công');
                        getID('emaillogin').value = '';
                        getID('passlogin').value = '';
                        getID('sign_up').style.display = 'none';
                        getID('log_in_account').style.display = 'none';
                        getID('accountmanagement').style.display = 'block';
                        getID('sign_up1').style.display = 'none';
                        getID('log_in_account1').style.display = 'none';
                        getID('cartping').style.display = 'block';
                        getID('accountmangement').style.display = 'block';
                        getID('roommangement').style.display = 'block';
                        getID('usernamecurtomer').value = user.email;
                        getID('passwordcurtomer').value = user.password;
                        getID('namecurtomer').value = user.name;
                        iduser = user.id;
                        createCookie("iduser", user.id);
                        if (user.gender != '') {
                            getID('gendercurtomer').value = user.gender;
                            getID('dateofbirthcurtomer').value = user.data_of_birth;
                            getID('identitycardcurtomer').value = user.identity_card;
                            getID('phonenumbercurtomer').value = user.phone_number;
                            getID('addresscurtomer').value = user.address;
                            getID('saveinfor').style.display = 'none';
                            getID('updateinfor').style.display = 'block';
                            getID('inforcurtomer').style.display = 'none';
                            getID('infor').innerHTML = `
                        <h6>Họ và tên: ${user.name}</h6>
                        <h6>Số điện thoại: ${user.phone_number}</h6>
                        <h6>Địa chỉ: ${user.address}</h6>
                        `;
                        };
                        log_in_modal.hide();
                    };
                    return false;
                }
            }
            return true;
        })
        .then(function (status) {
            if (status) {
                alert("Email hoặc Mật khẩu không đúng hoặc bạn điền thiếu thông tin! Bạn hãy đăng nhập lại.");
                error = true;
            };
        })
        if(error){
            return;
        }
        if(email != "adminbooking@gmail.com"){
            location.reload();
        }
};

function agree() {
    var identity_card = getID('enter-the-identity-card').value;
    axios(users_URL)
        .then(res => {
            for (var user of res.data) {
                if (identity_card == user.identity_card) {
                    getID('email-back').value = user.email;
                    getID('password-back').value = user.password;
                    alert('Lấy lại tài khoản thành công');
                    getID('acount_password').style.display='block';
                    return false;
                };
            };
            return true;
        })
        .then(function (status) {
            if (status) {
                getID('enter-the-identity-card').value = '';
                alert('Số chứng minh nhân dân không tồn tại!');
            };
        })
};

function closes(){
    getID('acount_password').style.display='none';
    getID('enter-the-identity-card').value ='';
    getID('email-back').value ='';
    getID('password-back').value ='';
}

function saveinfor() {
    var gender = getID('gendercurtomer').value;
    var data_of_birth = getID('dateofbirthcurtomer').value;
    var identity_card = getID('identitycardcurtomer').value;
    var phone_number = getID('phonenumbercurtomer').value;
    var address = getID('addresscurtomer').value;
    getAccount(iduser)
        .then(res => {
            if (res.data.gender == '' && gender != '' && data_of_birth != '' && identity_card != '' && phone_number != '' && address != '') {
                data = {
                    gender: gender,
                    data_of_birth: data_of_birth,
                    identity_card: identity_card,
                    phone_number: phone_number,
                    address: address
                };
                putAccount(iduser, data);
                getID('infor').style.display = 'block';
                getID('inforcurtomer').style.display = 'none';
                getID('saveinfor').style.display = 'none';
                getID('updateinfor').style.display = 'block';
                getID('infor').innerHTML = `
                    <h6>Họ và tên: ${res.data.name}</h6>
                    <h6>Số điện thoại: ${phone_number}</h6>
                    <h6>Địa chỉ: ${address}</h6>
                    `;
                alert('Lưu thông tin thành công');
                return false;
            };
            return true;
        })
        .then(function (status) {
            if (status) {
                alert('Bạn hãy điền đầy đủ thông tin');
            };
        })

};

function checkpassword() {
    var password = getID('enter-the-password').value;
    getAccount(iduser)
        .then(res => {
            if (password == res.data.password) {
                getID('infor').style.display = 'none'
                getID('inforcurtomer').style.display = 'block';
                getID('updateinfor').style.display = 'none'
                getID('saveudate').style.display = 'block';
                getID('enter-the-password').value = '';
            } else { alert('Mật khẩu sai') };
        });
};

function checkidentitycard() {
    var identitycard = getID('identitycard').value;
    axios(users_URL)
        .then(res => {
            for (var user of res.data) {
                if (identitycard != user.identity_card) {
                    return true;
                };
            };
            return false;
        })

}

function updateinfor() {
    var email = getID('usernamecurtomer').value;
    var password = getID('passwordcurtomer').value;
    var name = getID('namecurtomer').value;
    var gender = getID('gendercurtomer').value;
    var dateofbirth = getID('dateofbirthcurtomer').value;
    // var identitycard = getID('identitycardcurtomer').value;
    var phonenumber = getID('phonenumbercurtomer').value;
    var address = getID('addresscurtomer').value;
    if (name != '' && gender != '' && dateofbirth != '' && phonenumber != '' && address != '') {
        data = {
            email: email,
            password: password,
            name: name,
            gender: gender,
            data_of_birth: dateofbirth,
            // identity_card:identitycard,
            phone_number: phonenumber,
            address: address
        };
        putAccount(iduser, data);
        getID('updateinfor').style.display = 'block'
        getID('saveudate').style.display = 'none';
        getID('infor').style.display = 'block';
        getID('inforcurtomer').style.display = 'none';
        getID('infor').innerHTML = `
            <h6>Họ và tên: ${name}</h6>
            <h6>Số điện thoại: ${phonenumber}</h6>
            <h6>Địa chỉ: ${address}</h6>
        `;
        alert('Cập nhập thông tin thành công');
    } else { alert('Bạn hãy điền đầy đủ thông tin') };
};

function logout() {
    deleteCookie("iduser");
    deleteCookie('typeRooms');
    deleteCookie('address');
    deleteCookie('price_end');
    deleteCookie('price_start');
    deleteCookie('idroom');
    deleteCookie('price_start_topic');
    deleteCookie('price_end_topic');
    alert('Đăng xuất thành công');
    window.location.assign('/');
};

var statusEye = true;
function eye() {
    getID('eye').classList.toggle('fa-eye');
    getID('eye').classList.toggle('fa-eye-slash');
    if (statusEye) {
        getID('passlogin').setAttribute('type', 'text');
        statusEye = false;
    } else {
        getID('passlogin').setAttribute('type', 'password');
        statusEye = true;
    };
};

// -------------------------------------------cookies------------------------------------------------

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

async function cookie() {
    const user = await getCookie('iduser');
    if (user) {
        if (window.location.href.indexOf('.html') < 0 || window.location.href.indexOf('index.html') >= 0) {
            getID('sign_up').style.display = 'none';
            getID('log_in_account').style.display = 'none';
            getID('accountmanagement').style.display = 'block';
            getID('cartping').style.display = 'block';
            getID('accountmangement').style.display = 'block';
            getID('roommangement').style.display = 'block';
            getID('sign_up1').style.display = 'none';
            getID('log_in_account1').style.display = 'none';
        }
        await getAccount(getCookie('iduser'))
            .then(res => {
                getID('usernamecurtomer').value = res.data.email;
                getID('passwordcurtomer').value = res.data.password;
                getID('namecurtomer').value = res.data.name;
                if (res.data.gender != '') {
                    getID('gendercurtomer').value = res.data.gender;
                    getID('dateofbirthcurtomer').value = res.data.data_of_birth;
                    getID('identitycardcurtomer').value = res.data.identity_card;
                    getID('phonenumbercurtomer').value = res.data.phone_number;
                    getID('addresscurtomer').value = res.data.address;
                    getID('saveinfor').style.display = 'none';
                    getID('updateinfor').style.display = 'block';
                    getID('inforcurtomer').style.display = 'none';
                    getID('infor').innerHTML = `
                <h6>Họ và tên: ${res.data.name}</h6>
                <h6>Số điện thoại: ${res.data.phone_number}</h6>
                <h6>Địa chỉ: ${res.data.address}</h6>
                `;
                };
            })
    };
};

cookie();

// ----------------------------------modal-----------------------------------------------------------
var sign_in_modal = new bootstrap.Modal(document.getElementById('sign-up'));
var log_in_modal = new bootstrap.Modal(document.getElementById('log_in'));

