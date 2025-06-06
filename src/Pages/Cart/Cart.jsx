import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { StoreContextx } from "../../ContextAndReducer/StoreContext";
import CartList from "./CartSections/CartList";
import "./Cart.css";

function Cart() {
  const { total } = useContext(StoreContextx);
  return (
    <div>
      <Navbar />
      <main className="mainCartSection">
        <CartList />
        <h1 className="grandTotal">
          Total: <span>$ {total}</span>
        </h1>
      </main>
    </div>
  );
}

export default Cart;
