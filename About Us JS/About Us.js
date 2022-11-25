
// const hover = document.getElementById('ourTeamImg');

// hover.onmouseover = () => {
//     document.getElementById('ourTeamImg').style.transform = "rotate3d(1, 1, 1, 120deg)"; 
//     document.getElementById('ourTeamImg').style.transition = "0.8s"; 
//     hover.onmouseleave = () => {
//         document.getElementById('ourTeamImg').style.transform = "rotate3d(1, 1, 1, 0deg)"; 
//         document.getElementById('ourTeamImg').style.transition = "0.8s"; 
//     };
// };

// console.log(hover);

let hover = document.querySelectorAll('.ourTeamImg')
let overlay = document.querySelectorAll('.card-info')

function hoverImg0() {;
    hover[0].style.transition = "ease-in 0.5s";
    hover[0].style.opacity = "0.2"
    overlay[0].style.opacity = "1";
    overlay[0].style.transition = "1.8s"
}

function leaveImg0() {
    hover[0].style.transform = "ease-out 0.5s"; 
    hover[0].style.transition = "0.8s"; 
    hover[0].style.opacity = "1"
    overlay[0].style.opacity = "0";
}

function hoverImg1() {
    hover[1].style.transform = "ease-in 0.5s";
    hover[1].style.transition = "0.8s"; 
    hover[1].style.opacity = "0.2"
    overlay[1].style.opacity = "1";
    overlay[1].style.transition = "1.8s"
}

function leaveImg1() {
    hover[1].style.transform = "ease-out 0.5s"; 
    hover[1].style.transition = "0.8s"; 
    hover[1].style.opacity = "1"
    overlay[1].style.opacity = "0";
}

function hoverImg2() {
    hover[2].style.transform = "ease-in 0.5s";
    hover[2].style.transition = "0.8s"; 
    hover[2].style.opacity = "0.2"
    overlay[2].style.opacity = "1";
    overlay[2].style.transition = "1.8s"
}

function leaveImg2() {
    hover[2].style.transform = "ease-out 0.5s"; 
    hover[2].style.transition = "0.8s"; 
    hover[2].style.opacity = "1"
    overlay[2].style.opacity = "0";
}

function hoverImg3() {
    hover[3].style.transform = "ease-in 0.5s";
    hover[3].style.transition = "0.8s"; 
    hover[3].style.opacity = "0.2"
    overlay[3].style.opacity = "1";
    overlay[3].style.transition = "1.8s"
}

function leaveImg3() {
    hover[3].style.transform = "ease-out 0.5s"; 
    hover[3].style.transition = "0.8s"; 
    hover[3].style.opacity = "1"
    overlay[3].style.opacity = "0";
}

function hoverImg4() {
    hover[4].style.transform = "ease-in 0.5s";
    hover[4].style.transition = "0.8s"; 
    hover[4].style.opacity = "0.2"
    overlay[4].style.opacity = "1";
    overlay[4].style.transition = "1.8s"
}

function leaveImg4() {
    hover[4].style.transform = "ease-out 0.5s"; 
    hover[4].style.transition = "0.8s"; 
    hover[4].style.opacity = "1"
    overlay[4].style.opacity = "0";
}