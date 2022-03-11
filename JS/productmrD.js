const API_xin = 'https://61cc879b198df60017aec123.mockapi.io/listRooms';

function getData() {
    axios.get(`${API_xin}`).then(function(res) {
        show(res);
    });
}
var dem = 0;

function show(arr) {
    for (let i = 0; i < arr.data.length; i++) {
        dem++;
        document.getElementById('tbl').innerHTML += `
        <tr>
        <td class="data1 stt">${dem}</td>
        <td class="data1">${arr.data[i].name}</td>
        <td class="data1">${arr.data[i].price.toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        })}</td>
        <td class="data1">${arr.data[i].quantily}</td>
        <td class="data1">${arr.data[i].address}</td>
        <td class="data1">${arr.data[i].phoneNumber}</td>
        <td class="data1 email">${arr.data[i].email}</td>
        <td class="edit_delete"><button onclick="getdatafromtable(${
          arr.data[i].id
        })"class="btn btn-outline-primary" data-toggle="modal" data-target="#Chinhsua"><i class="fas fa-cogs"></i></button><button class="margin-right" onclick="deleteproduct(${
      arr.data[i].id
    })"><i class="edit fas fa-trash-alt"></i></button></td>
        </tr>
        `;
        document.getElementById('totalHotels').innerHTML = `${dem} Đối Tác`;
    }
}

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('imgProduct').value = '';
    document.getElementById('star').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phonN').value = '';
    document.getElementById('eml').value = '';
    document.getElementById('price').value = '';
    document.getElementById('type').value = '';
    document.getElementById('detail').value = '';
    document.getElementById('action').value = '';
    document.getElementById('numRoom').value = '';
    document.getElementById('feedback').value = '';
    document.getElementById('numOfRe').value = '';
    document.getElementById('point').value = '';
    document.getElementById('location').value = '';
    document.getElementById('listImg1').value = '';
    document.getElementById('listImg2').value = '';
    document.getElementById('listImg3').value = '';
    document.getElementById('listImg4').value = '';
    document.getElementById('listImg5').value = '';
    document.getElementById('listImg6').value = '';
    document.getElementById('listImg7').value = '';
}

function add() {
    var nameProduct = document.getElementById('name').value;
    var imgProduct = document.getElementById('imgProduct').value;
    var starr = document.getElementById('star').value;
    var address = document.getElementById('address').value;
    var PhN = document.getElementById('phonN').value;
    var Eml = document.getElementById('eml').value;
    var priceProduct = document.getElementById('price').value;
    var typeP = document.getElementById('type').value;
    var detailProduct = document.getElementById('detail').value;
    var statusR = document.getElementById('action').value;
    var feedbackProduct = document.getElementById('feedback').value;
    var numOR = document.getElementById('numOfRe').value;
    var pointR = document.getElementById('point').value;
    var loP = document.getElementById('location').value;
    var quantity = document.getElementById('numRoom').value;
    var listImg1 = document.getElementById('listImg1').value;
    var listImg2 = document.getElementById('listImg2').value;
    var listImg3 = document.getElementById('listImg3').value;
    var listImg4 = document.getElementById('listImg4').value;
    var listImg5 = document.getElementById('listImg5').value;
    var listImg6 = document.getElementById('listImg6').value;
    var listImg7 = document.getElementById('listImg7').value;
    var data = {
        name: nameProduct,
        img: imgProduct,
        star: starr,
        address: address,
        price: priceProduct,
        type: typeP,
        text: detailProduct,
        distance: statusR,
        feedback: feedbackProduct,
        numberOfReviews: numOR,
        point: pointR,
        location: loP,
        quantily: quantity,
        phoneNumber: PhN,
        email: Eml,
        listImgs: [
            listImg1,
            listImg2,
            listImg3,
            listImg4,
            listImg5,
            listImg6,
            listImg7,
        ],
    };
    axios.post(API_xin, data).then(() => {
        location.reload();
    });
    reset();
}

function getdatafromtable(id) {
    axios.get(`${API_xin}/${id}`).then(function(res) {
        document.getElementById('named').value = res.data.name;
        document.getElementById('imgProductd').value = res.data.img;
        document.getElementById('stard').value = res.data.star;
        document.getElementById('addressd').value = res.data.address;
        document.getElementById('phonNd').value = res.data.phoneNumber;
        document.getElementById('emld').value = res.data.email;
        document.getElementById('priced').value = res.data.price;
        document.getElementById('typed').value = res.data.type;
        document.getElementById('detaild').value = res.data.text;
        document.getElementById('actiond').value = res.data.distance;
        document.getElementById('feedbackd').value = res.data.feedback;
        document.getElementById('numOfRed').value = res.data.numberOfReviews;
        document.getElementById('pointd').value = res.data.point;
        document.getElementById('locationd').value = res.data.location;
        document.getElementById('numRoomd').value = res.data.quantily;
        document.getElementById('listImgd1').value = res.data.listImgs[0];
        document.getElementById('listImgd2').value = res.data.listImgs[1];
        document.getElementById('listImgd3').value = res.data.listImgs[2];
        document.getElementById('listImgd4').value = res.data.listImgs[3];
        document.getElementById('listImgd5').value = res.data.listImgs[4];
        document.getElementById('listImgd6').value = res.data.listImgs[5];
        document.getElementById('listImgd7').value = res.data.listImgs[6];
        document.getElementById('update').value = res.data.id;
    });
}

function update(id) {
    var nameProduct = document.getElementById('named').value;
    var imgProduct = document.getElementById('imgProductd').value;
    var starr = document.getElementById('stard').value;
    var address = document.getElementById('addressd').value;
    var PhN = document.getElementById('phonNd').value;
    var Eml = document.getElementById('emld').value;
    var priceProduct = document.getElementById('priced').value;
    var typeP = document.getElementById('typed').value;
    var detailProduct = document.getElementById('detaild').value;
    var statusR = document.getElementById('actiond').value;
    var feedbackProduct = document.getElementById('feedbackd').value;
    var numOR = document.getElementById('numOfRed').value;
    var pointR = document.getElementById('pointd').value;
    var loP = document.getElementById('locationd').value;
    var quantity = document.getElementById('numRoomd').value;
    var listImg1 = document.getElementById('listImgd1').value;
    var listImg2 = document.getElementById('listImgd2').value;
    var listImg3 = document.getElementById('listImgd3').value;
    var listImg4 = document.getElementById('listImgd4').value;
    var listImg5 = document.getElementById('listImgd5').value;
    var listImg6 = document.getElementById('listImgd6').value;
    var listImg7 = document.getElementById('listImgd7').value;
    var data = {
        name: nameProduct,
        img: imgProduct,
        star: starr,
        address: address,
        price: priceProduct,
        type: typeP,
        text: detailProduct,
        distance: statusR,
        feedback: feedbackProduct,
        numberOfReviews: numOR,
        point: pointR,
        location: loP,
        quantily: quantity,
        phoneNumber: PhN,
        email: Eml,
        listImgs: [
            listImg1,
            listImg2,
            listImg3,
            listImg4,
            listImg5,
            listImg6,
            listImg7,
        ],
    };
    axios.put(`${API_xin}/${id}`, data).then(() => {
        location.reload();
    });
    reset();
}

function deleteproduct(id) {
    axios.get(`${API_xin}/${id}`);
    axios.delete(`${API_xin}/${id}`).then(() => {
        location.reload();
    });
}
getData();

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.sidebarBtn');
sidebarBtn.onclick = function() {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        sidebarBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
    } else sidebarBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
};