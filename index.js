let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')

let sliderDom = document.querySelector('.slider')
let sliderListDom = document.querySelector('.slider .list')
let sliderThumbnailDom = document.querySelector('.slider .thumnail-slider .thumnail-list')

nextBtn.onclick = function () {
    showSlider('next')
}
prevBtn.onclick = function () {
    showSlider('prev')
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.slider .list .item')
    let thumbnailSlider = document.querySelectorAll('.slider .thumnail-slider .thumnail-list .thumnail-item')

    if (type == 'next') {
        sliderListDom.appendChild(itemSlider[0])
        sliderThumbnailDom.appendChild(thumbnailSlider[0])
        sliderDom.classList.add('next')
        setTimeout(() => {
            sliderDom.classList.remove('next')
        }, 500)
    } else {
        let lastItemSlider = itemSlider.length - 1
        let lastItemThumbnail = thumbnailSlider.length - 1
        sliderListDom.prepend(itemSlider[lastItemSlider])
        sliderThumbnailDom.prepend(thumbnailSlider[lastItemThumbnail])
        sliderDom.classList.add('prev')
        setTimeout(() => {
            sliderDom.classList.remove('next')
            sliderDom.classList.remove('prev')
        }, 500)
    }

}
// setInterval(()=>{
//     nextBtn.click();
// },5000)