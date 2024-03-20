let paraHeading = document.getElementById( "para-heading" );
let bottomLink = document.getElementById( "bottom-link" );
let parallax = document.getElementById( "parallax" );
let modal = document.getElementById( "modal" );
let blackBackground = document.getElementsByClassName("black-background" )[0];


window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    let offsetTop = parallax.offsetTop;
    let offsetHeight = blackBackground.offsetHeight;

    parallax.style.backgroundSize = `cover`;
    paraHeading.style.marginTop = value * 2.5 + 'px';

    let newSize = Math.max(125, 105 + value / 4);
    parallax.style.backgroundSize = `${newSize}%`;

    if(value >= (offsetTop+100)){
        bottomLink.classList.add("remove");
    } else{
        bottomLink.classList.remove("remove");
    }

    if(value >= offsetHeight){
        modal.classList.add("open")
    } else{
        modal.classList.remove("open");
    }

});