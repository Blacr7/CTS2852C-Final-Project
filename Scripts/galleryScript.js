var numslides = 0;
var currentslide = 0;
var slides = new Array();
function gallery() {
    var img = document.getElementsByClassName('Gallery');
    for (var i = 0; i < img.length; i++) {
        slides[i] = img[i];
        if (numslides == 0) {
            img[i].style.display = 'block';
        } else {
            img[i].style.display = 'none';
        }
        img[i].style.cursor = 'pointer';
        img[i].onclick = nextImage;
        numslides++;
    }
}
function nextImage() {
    slides[currentslide].style.display = 'none';
    currentslide++;
    if (currentslide >= numslides) currentslide = 0;
    slides[currentslide].style.display = 'block';
}