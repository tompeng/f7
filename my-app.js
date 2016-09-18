// Initialize app
var myApp = new Framework7({
    swipePanel: 'left',
    init: false
});

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

myApp.onPageInit('index', function (page) {
    updateNavbarTitle("Lana Del Rey");
});

myApp.init();


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

$$('#tab_link_album').on('click', function() {
    updateNavbarTitle("Lana Del Rey");
});

$$('#tab_link_song').on('click', function() {
    updateNavbarTitle("Born to Die");
});

$$('#tab_link_lyric').on('click', function() {
    updateNavbarTitle("Born to Die");
});


function updateNavbarTitle(title) {
    $$('.view-main .navbar .center').text(title);
    myApp.sizeNavbars('.view-main');
}