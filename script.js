const carousel = document.querySelector(".carrousel");
const firstImg = carousel.querySelectorAll("img")[0];
const arrowicons = document.querySelectorAll(".container i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowicons.forEach(icon => {

    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })

});


const dragStart = (e) => {

    isDragStart = true;
    prevScrollLeft = carousel.scrollLeft;
    prevPageX = e.pageX;

}

const dragging = (e) => {

    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;

}

const dragStop = () => {

    isDragStart = false;

}

carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);
