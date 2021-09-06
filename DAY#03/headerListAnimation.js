//* Web Elements
let weHeaderLinks = document.querySelector('#header-links-list')
let weMenuLinks = document.querySelector('.menu-icon')
weHeaderLinks.style.maxHeight = '0px'

//* Events
weMenuLinks.addEventListener('click', displayHeaderLinks)

//* Functions
function displayHeaderLinks() {
    if (weHeaderLinks.style.maxHeight === "0px"){
        weHeaderLinks.style.maxHeight = "120px"
    }else{
        weHeaderLinks.style.maxHeight = "0px"
    }
}