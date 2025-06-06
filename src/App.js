// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import StoreProvider from "./ContextAndReducer/StoreContext";
import LampDetails from "./components/LampDetailsPage/LampDetails";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/lamp/:id" element={<LampDetails />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}
export default App;

// :id: This is a dynamic segment in React Router.
