var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
//----------------------------------pink------------------------------
const heart = (n) => {
    document.getElementById('tranfrom' + n).classList.add('add');
    setTimeout(function() {
        document.getElementById('tranfrom' + n).classList.remove('add');
        document.getElementById('fa-heart' + n).classList.toggle('pink');
    }, 1000);
};
//----------------------------button up and down------------------------------
const buttonDown = (n) => {
    document.getElementById('down' + n).classList.toggle('fa-angle-up');
};