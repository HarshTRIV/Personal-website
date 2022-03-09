var r = document.querySelector(':root');
var rs = getComputedStyle(r);

const hamburger = document.querySelector('.hamburger')
hamburger.onclick = () => {
    //hamburger animation
    hamburger.classList.toggle("active");
    r.style.setProperty('--open',rs.getPropertyValue('--open') == "none"?"block":"none")  
}