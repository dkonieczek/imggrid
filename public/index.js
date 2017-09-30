const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

let image = new Image();
image.src = 'img.png';
image.crossOrigin = "Anonymous";
image.setAttribute('crossOrigin', '');


image.onload =  () => {
    const height = canvas.height = image.height;
    const width = canvas.width = image.width;
    ctx.drawImage(image, 0, 0);

    let data = ctx.getImageData(0, 0, width, height);
    console.log(data);
}