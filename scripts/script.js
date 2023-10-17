$(document).ready(() => {
    // When scroll over a number, header background color change
    var scroll_pos = 0;
    let header = document.querySelector("#headPage"); 
    $(document).scroll(() => {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 100) {
            $(header).css("background-color", "#858585");
        } else {
            $(header).css("background-color", "transparent");
        }
    });
});