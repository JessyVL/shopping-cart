// Aquí estamos indicando que en la lista de clases de loader , estamos agregando otro llamado loader-hidden
function loader(){
    window.addEventListener('load',function(){
        const loader= document.querySelector('.loader')
        loader.classList.add('loader--hidden')
    })
}

export default loader