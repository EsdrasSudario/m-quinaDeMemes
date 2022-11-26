function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input");
    imageInput.addEventListener("change", function() {
        const reader = new FileReader();
        reader.addEventListener("load", ()=> {
            const uploadImage = reader.result;
            changeMemePicture(uploadImage)
            //document.querySelector("#display-image").style
            //.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0]);
    })
}
async function mapImageList() {
    const memesObject = [
        {
            "name":"chapolin.jpg",
            "path":"pictures/chapolin.jpg"
        },
        {
            "name":"chloe.jpg",
            "path":"pictures/chloe.jpg"
        },
        {
            "name":"funny-cat1.png",
            "path":"pictures/funny-cat1.png"
        },
        {
            "name":"funny-cat2.png",
            "path":"pictures/funny-cat2.png"
        }
    ];

    return memesObject;
}
async function createGallery(imageList) {
    const memeSelector = document.querySelector("#memes-list");
    imageList.forEach(picture => {
        let newOption = document.createElement("option");
        newOption.text = picture.name.toUpperCase();
        newOption.value = picture.path;
        memeSelector.appendChild(newOption);
    });
}
async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image");
    displayImage.style.backgroundImage = `url('${photo}')`
}
async function main() {
    const mamesImageList = await mapImageList();
    enablePhotoUpload();
    await createGallery(mamesImageList);
    await changeMemePicture(mamesImageList[0].path);
}
main();