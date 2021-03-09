let nightmode = document.getElementById('nightmode');
let BGColor = document.querySelector('body');


function changeHeader(){

    let header = document.querySelector('h1');

    if (header.innerHTML === "Alex Contell"){
        header.innerHTML = "Francisco Contell";
    } else {
        header.innerHTML = "Alex Contell";
    }

    
};


function changeBackground() {
    
    
    if (BGColor.style.background !== "black"){
        BGColor.style.background = 'black';


    } else {
        BGColor.style.background = 'rgb(247, 247, 247)';


    }   

    }


nightmode.addEventListener('click', changeBackground);
