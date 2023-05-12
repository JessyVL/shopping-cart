async function getProducts(){
    // return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    // .then((res) => res.json())
    // .then((data) => data)
    // .catch((err) => {console.log(err); }) // Esta es la forma tradicional de obtener informacion usando 'then' y 'catch' que son parte de las promesas.

    // const res =  await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    // const data = await res.json()
    // return data
    // // esperara la informacion que recibirá de la solicitud , una vez que lo obtengas lo guardará en res. Luego convierte el json a codigo Js, una vez que lo convierta esperará para retornarlo en data.

    try {
        const res =  await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
} 

export default getProducts