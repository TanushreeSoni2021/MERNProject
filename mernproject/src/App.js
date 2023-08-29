import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navb from "./component/Navb";
import Footer from "./component/Footer";
import Signup from "./component/Signup";
import PrivateCom from "./component/PrivateCom";
import Login from "./component/Login";
import NavBar from "./component/NavBar";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";
import UpdatePro from "./component/UpdatePro";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PrivateCom />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdatePro />} />
            <Route path="/logout" element={<h1>Logout </h1>} />
            <Route path="/profile" element={<h1>Profile </h1>} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
