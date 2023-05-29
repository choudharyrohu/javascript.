// img=["nature1.png","nature2.png","nature3.png","nature5.jpg","nature6.png","nature7.png","nature8.png","nature9.png"];
// x=0;
// window.onload=()=>slide();

// function slide(){
//       img1.style.backgroundImage="url('./img/"+img[0]+"')";
//       img2.style.backgroundImage="url('./img/"+img[1]+"')";
//       img3.style.backgroundImage="url('./img/"+img[2]+"')";
//       img4.style.backgroundImage="url('./img/"+img[3]+"')";

// }


var img = ["nature1.png", "nature2.png", "nature3.png", "nature5.jpg", "nature6.png", "nature7.png", "nature8.png", "nature9.png"];
x = 4;
window.onload = () => slide();

function slide() {
    img1.style.backgroundImage = "url('./img/" + img[x] + "')";
    img2.style.backgroundImage = "url('./img/" + img[x+1] + "')";
    img3.style.backgroundImage = "url('./img/" + img[x+2] + "')";
    img4.style.backgroundImage = "url('./img/" + img[x+3] + "')";

}
img1.onclick = () => {

    box1.style.backgroundImage = "url(../nature1.png)";

}

img2.onclick = () => {

    box1.style.backgroundImage = "url(../nature2.png)";

}

img3.onclick = () => {

    box1.style.backgroundImage = "url(../nature3.png)";

}

img4.onclick = () => {

    box1.style.backgroundImage = "url(./nature5.jpg)";

}
right.onclick = () => {
    if (x < 3) {
        x++;
    }
    else {
        x = 0;
    }
    slide();
}

left.onclick = () => {
    if (x > 0) {
        x--;
    }
    else {
        x = 3;
    }
    slide();
}