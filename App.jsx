import { Route, Routes } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import Products from "./views/Products";
import Product from "./views/Product";
import Page404 from "./views/Page404";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
