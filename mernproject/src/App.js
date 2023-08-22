import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navb from "./component/Navb";
import Footer from "./component/Footer";
import Signup from "./component/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navb />
        <Routes>
          <Route path="/" element={<h1>products</h1>} />
          <Route path="/add" element={<h1>Add products</h1>} />
          <Route path="/update" element={<h1>Update products</h1>} />
          <Route path="/logout" element={<h1>Logout </h1>} />
          <Route path="/profile" element={<h1>Profile </h1>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
