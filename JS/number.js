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
let j = 0;
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
// --------------------------------baner--------------------------------------
const baner1 = document.querySelector(".baner1");
const closeBaner1 = document.querySelector(".close-baner1");
const baner2 = document.querySelector(".baner2");
const closeBaner2 = document.querySelector(".close-baner2");
const baner3 = document.querySelector(".baner3");
const closeBaner3 = document.querySelector(".close-baner3");
const colBaner1 = document.querySelector(".col-baner1");
const colBaner2 = document.querySelector(".col-baner2");

closeBaner1.addEventListener("click", function() {
    baner1.classList.add('active');
    colBaner2.classList.remove('col-6');
    colBaner2.classList.add('col-12');


})
closeBaner2.addEventListener("click", function() {
    baner2.classList.add('active');
    colBaner1.classList.remove('col-6');
    colBaner1.classList.add('col-12');
})

closeBaner3.addEventListener("click", function() {
    baner3.classList.add('active');
})