import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./page/Home";
import {About} from "./page/About";
import {Products} from "./page/Products";
import {Contact} from "./page/Contact";
import {SingleProduct} from "./page/SingleProduct";
import {Cart} from "./page/Cart"
import {ErrorPage} from "./page/ErrorPage"
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>

                <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>


        </Router>
    );
};

export default App;
