const galleries = 
[
{ galleryName: "DungeonMystery", dir: "Images/", photos: ["DM1.jpg", "DM2.jpg", "DM3.jpg", "DM4.jpg", "DM5.jpg", "DM6.jpg"] },
{galleryName: "TreasureHunt", dir: "Images/", photos: ["TH1.png", "TH2.png", "TH3.png", "TH4.png", "TH5.png"]},
{galleryName: "MainPage", dir: "Images/", photos: ["TH1.png", "DM2.jpg", "TH2.png", "DM3.jpg", "TH4.png", "DM4.jpg"]}
];
let currentImage = 0;

function changeImage(right/*bool*/, ImageViewID/*string*/, beforeDir/*string*/, gameName /*string*/) {
    let id = 0;
    for(let i = 0; i < galleries.length; i++){
        if(galleries[i].galleryName == gameName){
            id = i;
            break;
        }
    }
    let elem = document.getElementById(ImageViewID);
    if (right) {
        currentImage++;
        if (currentImage >= galleries[id].photos.length) {
            currentImage = 0;
        }
    }
    else {
        currentImage--;
        if(currentImage < 0){
            currentImage = galleries[id].photos.length - 1;
        }
    }
    elem.src = beforeDir + galleries[id].dir + galleries[id].photos[currentImage];
    let str = ImageViewID + "HREF";
    document.getElementById(str).href = elem.src;
}