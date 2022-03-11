const list_URL1 = "https://61cc879b198df60017aec123.mockapi.io/checkboxs";
const list_URL2 = "https://61cc879b198df60017aec123.mockapi.io/checkbox1s";

const $ = (id) => {
    return document.getElementById(id);
};

function show(){
    axios(list_URL1)
    .then(res =>{
        for(var ele of res.data){
            var html=`
            <div class="row">
                <div class="col-10">
                    <input type="checkbox"> ${ele.text}
                </div>
                <div class="col-2">
                    <p>${ele.number}</p>
                </div>
            </div>
            `;
            if(ele.type == "Health & Safety"){
                $('popular-filters').innerHTML += html;
            }else if(ele.type == "Universal filter"){
                $('popular-filters1').innerHTML += html;
            }else if(ele.type == "Sustainable Tourism"){
                $('popular-filters2').innerHTML += html;
            }else if(ele.type == "Star Rating"){
                $('popular-filters3').innerHTML += html;
            }else if(ele.type == "distance"){
                $('popular-filters4').innerHTML += html;
            }else if(ele.type == "activity"){
                $('popular-filters5').innerHTML += html;
            }else if(ele.type == "Accommodation type"){
                $('popular-filters6').innerHTML += html;
            }else if(ele.type == "Address List"){
                $('popular-filters7').innerHTML += html;
            }else if(ele.type == "Guest Review Score"){
                $('popular-filters8').innerHTML += html;
            }else if(ele.type == "Convenient" && ele.id<=66){
                $('popular-filters9').innerHTML += html;
            }else if(ele.type == "Convenient"){
                $('navbarToggleExternalContent').innerHTML += html;
            }else if(ele.type == "Room amenities" && ele.id<=80){
                $('popular-filters10').innerHTML += html;
            }else{
                $('room-amenities').innerHTML += html;
            };
        };
    })
};

show();

function show1(){
    axios(list_URL2)
    .then(res =>{
        for(var ele of res.data){
            var html=`
            <div class="row">
                <div class="col-10">
                    <input type="checkbox"> ${ele.text}
                </div>
                <div class="col-2">
                    <p>${ele.number}</p>
                </div>
            </div>
            `;
            if(ele.type == "Area" && ele.id<=10){
                $('popular-filters11').innerHTML += html;
            }else if(ele.type == "Area"){
                $('area').innerHTML += html;
            }else if(ele.type == "Trademark"){
                $('popular-filters12').innerHTML += html;
            }else if(ele.type == "Facilities for disabled guests"){
                $('popular-filters13').innerHTML += html;
            }else{
                $('popular-filters14').innerHTML += html;
            };
        };
    })
};

show1();

