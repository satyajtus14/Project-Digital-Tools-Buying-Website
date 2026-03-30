
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './component/Banner'
import Footer from './component/Footer'
import NavBar from './component/NavBar'
import DigiModel from './component/DigiModel'
import Cart from './component/Cart'


const getModels = async () => {
  const res =  await fetch("/models.json");
  return res.json();
}





function App() {
  const modelPromise = getModels();

// This State need for active Tab
const [activeTab,setActiveTab] = useState('products')

// This State need for Cart
const [carts,setCarts] = useState([])


  return (
    <>
    <NavBar carts={carts}/>
    <Banner/>

    {/* Create Tabs for toggling cards and count value */}
    
    <div className="tabs tabs-box  gap-6 justify-center bg-transparent max-w-7xl mx-auto">
 
    <input type="radio" name="my_tabs_1"  aria-label="Products"  onChange={() => setActiveTab("products")}
    checked={activeTab === 'products'}
    className={`tab rounded-full w-40 font-bold text-xl
    ${activeTab === 'products' ? "bg-[#4f39f6] text-white" : "bg-white text-black border-2" } `} />


    <input type="radio" name="my_tabs_1" aria-label={`Cart (${carts.length})`} onChange={() => setActiveTab("cart")} checked={activeTab === 'cart'}
    className={`tab rounded-full w-40 font-bold text-xl
     ${activeTab === 'cart' ? "bg-[#4f39f6] text-white" : "bg-white text-black border-2" }` }  />
   </div>
    <Suspense>
      {activeTab === 'products' && <DigiModel modelPromise={modelPromise} carts={carts}setCarts={setCarts}/> }
      {activeTab === 'cart' && <Cart carts={carts} setCarts={setCarts} />}
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
