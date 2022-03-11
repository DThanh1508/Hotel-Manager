// alert('Chào Mừng Bạn Đến Với Booking.com');
// confirm("Xác nhận bạn đủ tuổi");
flatpickr("#myID", {
    // enableTime: true,
    // dateFormat: "d-m-y",
});
$('.none').waypoint(
    function(direction) {
        if (direction == "down") {
            $('.none').addClass('add');
        } else {
            $('none').removeClass('add');
        }
    }, {
        offset: '600px'
    }
)