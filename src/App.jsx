
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { useCart } from "./hooks/useCart"


function App() {

    const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart,
        isEmpty, cartTotal } = useCart()
    

    return (
        <>
            <Header
              cart = { cart }
              removeFromCart = { removeFromCart }
              decreaseQuantity = { decreaseQuantity }
              increaseQuantity = { increaseQuantity }
              cleanCart = { cleanCart }
              isEmpty = { isEmpty }
              cartTotal = { cartTotal }

            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((product) => (
                        <Products
                            key = { product.id } 
                            product ={ product }  
                            cart = { cart }
                            addToCart = {addToCart}

                        />
                    ))}

                </div>
            </main>


            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">Perfume - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default App
