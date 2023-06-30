const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active");
    })
}

const smallImage=document.querySelectorAll('.small-img-col img');
const mainImage = document.querySelector('.single-image img');
smallImage.forEach((smallImage)=>{
    smallImage.addEventListener('click',()=>{
        const newImageSrc = smallImage.src;
        mainImage.src = newImageSrc;
    })
})