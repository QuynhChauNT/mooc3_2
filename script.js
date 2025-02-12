
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    console.log("Image updated: " + previewPic.alt);
}

function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Image reset to default");
}

function initializeGallery() {
    let images = document.querySelectorAll(".preview");
    images.forEach(img => {
        img.setAttribute("tabindex", "0");
        console.log("Tabindex added to: " + img.alt);
    });
}
