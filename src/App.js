import './App.css';
import Home from './Components/Home/Home';
import Homeone from './Components/Landing/Homeone';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Components/Product list/Products';
import Product from './Components/Product Details/Product';
import Basket from './Components/Cart/Basket';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Signin/Signin';
import Signout from './Components/Signout/Signout';
import Signup from "./Components/Create/Create";
import Navbarone from './Components/Navbar/Navbarone';
import Checkout from './Components/Checkout';
import Checkoutone from './Components/Checkoutone';
import Checkouttwo from './Components/Checkouttwo';
import Checkoutthree from './Components/Checkoutthree';
import Ordersucessful from './Components/Ordersucessful';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("");
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  console.log({cartItems});
  const getCategory = () => category;
  return (
    <>
      <Navbar countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
      <Navbarone countCartItems={cartItems.length} setCategory={setCategory} selectedCategory={category} />
   
      <Routes>
        <Route exact path='/' element={<Homeone/>} />
        <Route exact path='/home' element={<Home category={category} />} />
        <Route exact path='/filter'element={<Filter />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/signin' element={<Signin />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/Checkout' element={<Checkout />} />
        <Route exact path='/Checkoutone' element={<Checkoutone />} />
        <Route exact path='/Checkouttwo' element={<Checkouttwo />} />
        <Route exact path='/Checkoutthree' element={<Checkoutthree />} />
        <Route exact path='/Ordersucessful' element={<Ordersucessful />} />
        <Route exact path='/signout' element={<Signout />} />
        <Route exact path='/products/:id' element={<Product cartItems={cartItems} category={category} onAdd={onAdd} onRemove={onRemove} />} />
        <Route exact path='/cart' element={<Basket  cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer/>
   
    </>
  );
}

export default App;
