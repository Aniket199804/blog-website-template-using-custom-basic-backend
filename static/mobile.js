
burger= document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
logo=document.querySelector('.logo')

burger.addEventListener('click', ()=>{

    navlist.classList.toggle('navlistresp');
    navbar.classList.toggle('navbarresp');
    logo.classList.toggle('logoresp')
})

function toggleHide(){
    
    let butt = document.getElementById('drop-content')
    if (butt.style.display != 'block'){

        butt.style.display = 'block';
    } else{
        butt.style.display = 'none';
    }   
}