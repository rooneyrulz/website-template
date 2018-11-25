$(document).ready(() => {
    $('#sidenav-toggle').on('click', (e) => {
        $('.sidenav').animate({left: 0});
    });

    $('#sidenav-close').on('click', (e) => {
        $('.sidenav').animate({left: -250});
    });
});