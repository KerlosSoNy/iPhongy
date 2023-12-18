import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from './BaseCompo/Navbar';
import Home from "./Home/Home";
import Footer from "./BaseCompo/Footer";
import ProductsList from "./Products/ProductList";
import Contact from "./BranchPages/Contact";
import Accessorize from "./Products/Accessorize";


import '../Css/index.css'
import Cart from "./Products/Cart";
import NewProduct from "./Products/NewProducts";
import About from "./BranchPages/About";
export default function App(){
    return(
        <div className="relative">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Outlet/>}>
                    <Route path="usedphones" element={<ProductsList/>}/>
                    <Route path="newphones" element={<NewProduct/>}/>
                    <Route path="accessorize" element={<Accessorize/>}/>
                </Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}