function showMenu(){
    const nav= document.querySelector('.nav')
    const menu=document.querySelector('.nav__menu')

// Ahora creamos un controlador (handler) para poder manejar el evento al escuchar un click en el boton    
    nav.addEventListener('click', function(e){
        if(e.target.closest('.btn--menu')){
            menu.classList.toggle('show--menu')
        }

        if(e.target.closest('.btn--close')){
            menu.classList.remove('show--menu')
        }

        if(e.target.closest('.btn--darkmode')){
           document.body.classList.toggle('darkmode')
        }

        if(e.target.closest('.nav__link')){
            menu.classList.remove('show--menu')
        }

       
    })
}

export default showMenu