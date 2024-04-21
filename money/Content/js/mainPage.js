function formload() {
    close_nav()
}
function close_nav() {
    var sideBar = document.getElementById('side-bar-id');
    sideBar.classList.remove('expanded');
    sideBar.classList.toggle('collapsed');

    var open_div = document.getElementById("side-bar-open-id");
    open_div.style.display = "block";
    var close_div = document.getElementById("side-bar-close-id");
    close_div.style.display = "none";

    var descriptions = document.querySelectorAll('.side-bar-link-desc');
    descriptions.forEach(function (description) {
        description.style.display = 'none';
    });

    var anchors = document.querySelectorAll('.side-bar a');
    anchors.forEach(function (anchor) {
        anchor.style.paddingLeft = '10px';
    });

}
function open_nav() {
    debugger
    var sideBar = document.getElementById('side-bar-id');
    sideBar.classList.remove('collapsed');
    sideBar.classList.toggle('expanded');

    var open_div = document.getElementById("side-bar-open-id");
    open_div.style.display = "none";
    var close_div = document.getElementById("side-bar-close-id");
    close_div.style.display = "block";

    var descriptions = document.querySelectorAll('.side-bar-link-desc');
    descriptions.forEach(function (description) {
        description.style.display = 'block';
    });

    var anchors = document.querySelectorAll('.side-bar a');
    anchors.forEach(function (anchor) {
        anchor.style.padding = '8px 8px 8px 38px';
    });
}
function sign_out() {
    window.location.href = '/Account/Index';
}