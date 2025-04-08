
/* OPEN MENU */

const btnMenu = document.querySelector('.button-menu');

let isBtnMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isBtnMenuClicked = !isBtnMenuClicked;

    if(isBtnMenuClicked){

        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.button-menu img').src = './assets/shared/icon-close.svg';

        document.querySelector('.menu').classList.add('anim-menu');
        document.querySelector('.menu').classList.remove('anim-menu-reverse');

    }

    else{

        setTimeout(() => {

            document.querySelector('.menu').style.display = 'none';
            document.querySelector('.button-menu img').src = './assets/shared/icon-hamburger.svg';

        }, 400);

        document.querySelector('.menu').classList.add('anim-menu-reverse'); 
        document.querySelector('.menu').classList.remove('anim-menu');

    }

});

/****/

function choosePlanet(data, index){

    for(let i = 0; i < 4; i++){
        i === index ? document.querySelectorAll('.destination .container-text .li-planet')[i].classList.add('selected') : document.querySelectorAll('.destination .container-text .li-planet')[i].classList.remove('selected');
    }

    document.querySelector('.destination .planet-title').classList.add('anim-opacity');
    document.querySelector('.destination .page-container .text').classList.add('anim-opacity');
    document.querySelector('.destination .container-info .info:nth-of-type(1) span:nth-of-type(2)').classList.add('anim-opacity');
    document.querySelector('.destination .container-info .info:nth-of-type(2) span:nth-of-type(2)').classList.add('anim-opacity');
    document.querySelector('.destination .image-planet').classList.add('anim-opacity');

    setTimeout(() => {

        switch(index){

            case 0:
                document.querySelector('.destination .planet-title').textContent = `${data.destinations[index].name}`;
                document.querySelector('.destination .page-container .text').textContent = `${data.destinations[index].description}`;
                document.querySelector('.destination .container-info .info:nth-of-type(1) span:nth-of-type(2)').textContent =  `${data.destinations[index].distance}`;
                document.querySelector('.destination .container-info .info:nth-of-type(2) span:nth-of-type(2)').textContent =  `${data.destinations[index].travel}`;
                document.querySelector('.destination .image-planet').src = `${data.destinations[index].images.png}`;
                break;
    
    
            case 1:
                document.querySelector('.destination .planet-title').textContent = `${data.destinations[index].name}`;
                document.querySelector('.destination .page-container .text').textContent = `${data.destinations[index].description}`;
                document.querySelector('.destination .container-info .info:nth-of-type(1) span:nth-of-type(2)').textContent =  `${data.destinations[index].distance}`;
                document.querySelector('.destination .container-info .info:nth-of-type(2) span:nth-of-type(2)').textContent =  `${data.destinations[index].travel}`;
                document.querySelector('.destination .image-planet').src = `${data.destinations[index].images.png}`;
                break;
    
    
            case 2:
                document.querySelector('.destination .planet-title').textContent = `${data.destinations[index].name}`;
                document.querySelector('.destination .page-container .text').textContent = `${data.destinations[index].description}`;
                document.querySelector('.destination .container-info .info:nth-of-type(1) span:nth-of-type(2)').textContent =  `${data.destinations[index].distance}`;
                document.querySelector('.destination .container-info .info:nth-of-type(2) span:nth-of-type(2)').textContent =  `${data.destinations[index].travel}`;
                document.querySelector('.destination .image-planet').src = `${data.destinations[index].images.png}`;
                break;
    
    
            case 3:
                document.querySelector('.destination .planet-title').textContent = `${data.destinations[index].name}`;
                document.querySelector('.destination .page-container .text').textContent = `${data.destinations[index].description}`;
                document.querySelector('.destination .container-info .info:nth-of-type(1) span:nth-of-type(2)').textContent =  `${data.destinations[index].distance}`;
                document.querySelector('.destination .container-info .info:nth-of-type(2) span:nth-of-type(2)').textContent =  `${data.destinations[index].travel}`;
                document.querySelector('.destination .image-planet').src = `${data.destinations[index].images.png}`;
                break;    
    
        }
                 
    }, 800);



    setTimeout(() => {

        document.querySelector('.destination .planet-title').classList.remove('anim-opacity');
        document.querySelector('.destination .page-container .text').classList.remove('anim-opacity');
        document.querySelector('.destination .container-info .info:nth-of-type(1) span:nth-of-type(2)').classList.remove('anim-opacity');
        document.querySelector('.destination .container-info .info:nth-of-type(2) span:nth-of-type(2)').classList.remove('anim-opacity');
        document.querySelector('.destination .image-planet').classList.remove('anim-opacity');

    }, 2000);

}


function chooseTechno(data, index){

    for(let i = 0; i < 3; i++){
        i === index ? document.querySelectorAll('.technology .button-techno')[i].classList.add('selected') : document.querySelectorAll('.technology .button-techno')[i].classList.remove('selected');
    }

    document.querySelector('.technology .sub-title span:nth-of-type(2)').classList.add('anim-opacity');
    document.querySelector('.technology .container-text .text').classList.add('anim-opacity');
    document.querySelector('.technology .container-image-techno').classList.add('anim-opacity');


    setTimeout(() => {

        switch(index){

            case 0:
                document.querySelector('.technology .sub-title span:nth-of-type(2)').textContent = `${data.technology[index].name}`;
                document.querySelector('.technology .container-text .text').textContent = `${data.technology[index].description}`;

                if(window.innerWidth < 580){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat bottom center / cover`;
                }
                else if(window.innerWidth >= 580 && window.innerWidth < 1200){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait})  no-repeat center / cover`;
                }
                else if(window.innerWidth >= 1200){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat center / cover`;
                }
                break;


            case 1:
                document.querySelector('.technology .sub-title span:nth-of-type(2)').textContent = `${data.technology[index].name}`;
                document.querySelector('.technology .container-text .text').textContent = `${data.technology[index].description}`;

                if(window.innerWidth < 580){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat bottom center / cover`;
                }
                else if(window.innerWidth >= 580 && window.innerWidth < 1200){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat center calc(100% + 3.5rem) / cover`;
                }
                else if(window.innerWidth >= 1200){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat center calc(100% + 3.5rem) / cover`;
                }
                break;


            case 2:
                document.querySelector('.technology .sub-title span:nth-of-type(2)').textContent = `${data.technology[index].name}`;
                document.querySelector('.technology .container-text .text').textContent = `${data.technology[index].description}`;

                if(window.innerWidth < 580){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat center / cover`;
                }
                else if(window.innerWidth >= 580 && window.innerWidth < 1200){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.landscape}) no-repeat center / cover`;
                }
                else if(window.innerWidth >= 1200){
                    document.querySelector('.technology .container-image-techno').style.background = `url(${data.technology[index].images.portrait}) no-repeat center / cover`;
                }
                break;

        }
        
    }, 800);


    setTimeout(() => {

        document.querySelector('.technology .sub-title span:nth-of-type(2)').classList.remove('anim-opacity');
        document.querySelector('.technology .container-text .text').classList.remove('anim-opacity');
        document.querySelector('.technology .container-image-techno').classList.remove('anim-opacity');

    }, 2000);

}



function chooseCrew(data, index){


    for(let i = 0; i < 4; i++){
        i === index ? document.querySelectorAll('.crew .clip')[i].classList.add('selected') : document.querySelectorAll('.crew .clip')[i].classList.remove('selected');
    }

    const picture = document.querySelector('picture');


    document.querySelector('.crew .sub-title span:nth-of-type(1)').classList.add('anim-opacity');
    document.querySelector('.crew .sub-title span:nth-of-type(2)').classList.add('anim-opacity');
    document.querySelector('.crew .container-text .text').classList.add('anim-opacity');

    document.querySelector('picture').classList.add('anim-opacity');



    setTimeout(() => {

        switch(index){

            case 0:
    
                document.querySelector('.crew .sub-title span:nth-of-type(1)').textContent = `${data.crew[index].role}`;
                document.querySelector('.crew .sub-title span:nth-of-type(2)').textContent = `${data.crew[index].name}`;
                document.querySelector('.crew .container-text .text').textContent = `${data.crew[index].bio}`;
    
                picture.innerHTML = `
                    <source srcset="${data.crew[index].images.webp}" type="image/webp">
                    <img class="crew-image" src="${data.crew[index].images.png}" alt="hero">                
                `;
    
                break;
    
    
            case 1:
    
                document.querySelector('.crew .sub-title span:nth-of-type(1)').textContent = `${data.crew[index].role}`;
                document.querySelector('.crew .sub-title span:nth-of-type(2)').textContent = `${data.crew[index].name}`;
                document.querySelector('.crew .container-text .text').textContent = `${data.crew[index].bio}`;
    
                picture.innerHTML = `
                    <source srcset="${data.crew[index].images.webp}" type="image/webp">
                    <img class="crew-image" src="${data.crew[index].images.png}" alt="hero">                
                `;
    
                break;
    
    
            case 2:
    
                document.querySelector('.crew .sub-title span:nth-of-type(1)').textContent = `${data.crew[index].role}`;
                document.querySelector('.crew .sub-title span:nth-of-type(2)').textContent = `${data.crew[index].name}`;
                document.querySelector('.crew .container-text .text').textContent = `${data.crew[index].bio}`;
    
                picture.innerHTML = `
                    <source srcset="${data.crew[index].images.webp}" type="image/webp">
                    <img class="crew-image" src="${data.crew[index].images.png}" alt="hero">                
                `;
     
                break;
    
    
    
            case 3:
    
                document.querySelector('.crew .sub-title span:nth-of-type(1)').textContent = `${data.crew[index].role}`;
                document.querySelector('.crew .sub-title span:nth-of-type(2)').textContent = `${data.crew[index].name}`;
                document.querySelector('.crew .container-text .text').textContent = `${data.crew[index].bio}`;
    
                picture.innerHTML = `
                    <source srcset="${data.crew[index].images.webp}" type="image/webp">
                    <img class="crew-image" src="${data.crew[index].images.png}" alt="hero">                
                `;
    
                break;
    
        }


        
    }, 800);


    setTimeout(() => {

        document.querySelector('.crew .sub-title span:nth-of-type(1)').classList.remove('anim-opacity');
        document.querySelector('.crew .sub-title span:nth-of-type(2)').classList.remove('anim-opacity');
        document.querySelector('.crew .container-text .text').classList.remove('anim-opacity'); 

        document.querySelector('picture').classList.remove('anim-opacity');
          
    }, 2000);

}





/* FETCH DATA */

async function fetchData () {

    try{

        response = await fetch('./data.json', {
            method: 'GET',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            throw(`Error loading data : ${response.status}`);
        }

        const data = await response.json();

        return data;

    }
    catch(error){
        console.error('Error: ', error);
    }

}





/* AUTOSLIDE */

let slide = 0;

slide = sessionStorage.getItem('mySessionVar');
slide = Number(slide);

let indexSlide = 0;
let interval;


if(slide === 1){

    if(document.querySelector('.destination')){

        interval = setInterval(() => {
    
            indexSlide++;

            fetchData().then( (data) => 
            { 
                choosePlanet(data, indexSlide);
            });


            if(indexSlide === 3){

                clearInterval(interval);

                setTimeout(() => {
                    indexSlide = 4;
                    window.location.href = './crew.html';   
                }, 3000);

            } 
            
        }, 4000);

    }


    if(document.querySelector('.crew')){

        interval = setInterval(() => {
        
            indexSlide++;

            fetchData().then( (data) => 
            { 
                chooseCrew(data, indexSlide);
            });


            if(indexSlide === 3){

                clearInterval(interval);

                setTimeout(() => {
                    window.location.href = './technology.html';   
                }, 3000);

            }   

        }, 4000);

    }


    if(document.querySelector('.technology')){

        interval = setInterval(() => {
        
            indexSlide++;

            fetchData().then( (data) => 
            { 
                chooseTechno(data, indexSlide);
            });


            if(indexSlide === 2){

                clearInterval(interval);
                slide = 0;
                sessionStorage.setItem('mySessionVar', slide);

            }     

        }, 4000);

    }

}


/* SPHERE EFFECT HOME PAGE */

if(document.querySelector('.home')){  

    slide = 0;

    sessionStorage.setItem('mySessionVar', slide);

    document.querySelector('.button-explore').addEventListener('mousemove', (event) => {

        const rect = document.querySelector('.button-explore').getBoundingClientRect();

        const mouseXRelative = event.clientX - rect.left;
        const mouseYRelative = event.clientY - rect.top;

        event.target.style.background = `radial-gradient(circle at ${mouseXRelative}px ${mouseYRelative}px, #ffffff 40%, hsla(234, 26%, 7%, 1) 70%)`;

    });


    document.querySelector('.button-explore').addEventListener('click', () => {

        window.location.href = './destination.html';
        slide = 1;
        sessionStorage.setItem('mySessionVar', slide);

    });


}




if(document.querySelector('.destination')){

    document.querySelectorAll('.button-planet').forEach((item, index) => {

        item.addEventListener('click', () => { 


            slide = 0;
            sessionStorage.setItem('mySessionVar', slide);

            clearInterval(interval);

            fetchData().then( (data) => 
            { 
                choosePlanet(data, index);
            });

        });

    })

}



if(document.querySelector('.crew')){

    document.querySelectorAll('.clip').forEach((item, index) => {


        item.addEventListener('click', () => {

            slide = 0;
            sessionStorage.setItem('mySessionVar', slide);
            clearInterval(interval);

            fetchData().then( data => chooseCrew(data, index) ) ;
            
        });

    })

}


if(document.querySelector('.technology')){

    document.querySelectorAll('.button-techno').forEach((item, index) => {

        item.addEventListener('click', () =>  {
            
            slide = 0;
            sessionStorage.setItem('mySessionVar', slide);
            clearInterval(interval);

            fetchData().then( data => chooseTechno(data, index) );

        });
    })

}



// if( !window.matchMedia('(prefers-reduced-motion: no-preference)').matches ){

//     console.log('no animation');

// }