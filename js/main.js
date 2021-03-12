
var ScreenSize = window.innerWidth;

if (ScreenSize < 620) {
    var imgs = document.getElementById("Header_Foto_SZ");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = imgs[i].src.replace("img/Header_Foto_SZ.jpg", "img/Header_Foto_FZ.jpg");
    }
}