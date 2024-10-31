let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');
let searchbar = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');

menubar.onclick = () =>{
    mynav.classList.toggle('active');
}
searchbar.onclick = () =>{
    searchbox.classList.toggle('active')
}

