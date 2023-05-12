import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
// en esta parte trabajaremos los UI Elements

// Ocultar loader
loader()

// Mostrar menu
showMenu()

// Mostrar carrito
showCart()

// Fin de los elementos UI

// Products


// Esperará que regrese la informacion al mismo tiempo ayuda a Js a que siga trabajando mas tareas que tenga por delante → products(await getProducts())

const {db,printProducts} = products(await getProducts())

// Carrito
cart(db,printProducts)