import { useState } from "react"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { db } from "./data/db"


function App() {

    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])
    console.log(data)
    const MIN_ITEMS = 1
    const MAX_ITEMNS = 5
    

    function addToCart(item){
        const itemExists = cart.findIndex( product => product.id === item.id )

        if(itemExists >= 0){
            if(cart[itemExists].quantity >= MAX_ITEMNS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        }else{
            item.quantity = 1
            setCart ([...cart, item])
        }       
    }

    function removeFromCart(id){
        console.log("eliminando")
        setCart(prevCart => prevCart.filter(product => product.id !== id))
    }

    function decreaseQuantity(id){
        console.log("decremento de ", id)
        const updatedCart = cart.map ( item => {
            if(item.id === id && item.quantity > MIN_ITEMS){
                return{
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id){
        const updatedCart = cart.map ( item => {
            if(item.id === id && item.quantity < MAX_ITEMNS){
                return{
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function cleanCart() {
        setCart([])
    }

    return (
        <>
            <Header
              cart = { cart }
              removeFromCart = { removeFromCart }
              decreaseQuantity = { decreaseQuantity }
              increaseQuantity = { increaseQuantity }
              cleanCart = { cleanCart }

            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((product) => (
                        <Products
                            key = { product.id } 
                            product ={ product }  
                            setCart = { setCart } 
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
