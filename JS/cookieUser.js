// -------------------------------------------cookies------------------------------------------------
var users_URL = "https://61b5b8db0e84b70017331bac.mockapi.io/users";

function getAccount(id) {
    return axios(`${users_URL}/${id}`);
};

function putAccount(id, data) {
    axios.put(`${users_URL}/${id}`, data)
};

const getID = (id) => {
    return document.getElementById(id);
};

function saveinfor() {
    var gender = getID('gendercurtomer').value;
    var data_of_birth = getID('dateofbirthcurtomer').value;
    var identity_card = getID('identitycardcurtomer').value;
    var phone_number = getID('phonenumbercurtomer').value;
    var address = getID('addresscurtomer').value;
    getAccount(getCookie('iduser'))
        .then(res => {
            if (res.data.gender == '' && gender != '' && data_of_birth != '' && identity_card != '' && phone_number != '' && address != '') {
                data = {
                    gender: gender,
                    data_of_birth: data_of_birth,
                    identity_card: identity_card,
                    phone_number: phone_number,
                    address: address
                };
                putAccount(getCookie('iduser'), data);
                getID('infor').style.display = 'block';
                getID('inforcurtomer').style.display = 'none';
                getID('saveinfor').style.display = 'none';
                getID('updateinfor').style.display = 'block';
                getID('infor').innerHTML = `
                    <h6>Họ và tên: ${res.data.name}</h6>
                    <h6>Số điện thoại: ${phone_number}</h6>
                    <h6>Địa chỉ: ${address}</h6>
                    `;
                sendEmail(res.data.name, res.data.email, res.data.phone_number)
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
    getAccount(getCookie('iduser'))
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
        putAccount(getCookie('iduser'), data);
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