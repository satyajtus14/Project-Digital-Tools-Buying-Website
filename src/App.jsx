
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

  return (
    <>
    <NavBar/>
    <Banner/>

    {/* Create Tabs for toggling cards and count value */}
    
    <div className="tabs tabs-box  gap-6 justify-center bg-transparent max-w-7xl mx-auto">
 
    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold text-xl bg-[#4f39f6] text-white" aria-label="Products" defaultChecked onClick={() => setActiveTab("products")} />
    <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold text-xl text-black border border-2 " aria-label="Cart" onClick={() => setActiveTab("cart")} />
   </div>
    <Suspense>
      {activeTab === 'products' && <DigiModel modelPromise={modelPromise}/> }
      {activeTab === 'cart' && <Cart/>}
    </Suspense>
    <Footer/>
    </>
  )
}

export default App
