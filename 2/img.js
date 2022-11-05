const addImageButton = document.getElementById("js-btn");
const removeImageButton = document.getElementById("js-image-remove-btn");
const imageContainerElement = document.getElementById("js-image-container");

const imageURLs = Array.from(
    new Set([
        "https://picsum.photos/200/300/?blur",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/536/354",
        "https://picsum.photos/id/237/536/354",
        "https://picsum.photos/id/870/536/354?grayscale&blur=2"

       


    ])

);
function addImage(){
    if (!imageURLs.length) return alert("resim bitti");
    const index = Math.floor(Math.random() * imageURLs.length);

    imageContainerElement.insertAdjacentHTML(
        "afterbegin",
        `<img id="ruloresim" src="${imageURLs[index]}" />`
    );
    imageURLs.splice(index, 1);

}

function removeImage () {
    const {children} = imageContainerElement
    if(!children.length) return alert ('lürfen resim ekleyin');
    const [firstImage] = children
    imageURLs.push(firstImage.src)
    firstImage.remove()
}
    

addImageButton.addEventListener("click", addImage);
removeImageButton.addEventListener("click", removeImage)