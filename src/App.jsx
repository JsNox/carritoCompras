import { useState } from "react"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { db } from "./data/db"


function App() {

    const [data, setData] = useState(db)
    console.log(data)

    return (
        <>
            <Header />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((product) => (
                        <Products
                            key={ product.id } 
                            product={ product }                                         
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
