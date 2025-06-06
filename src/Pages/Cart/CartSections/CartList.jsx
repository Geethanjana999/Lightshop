import { useContext } from "react";
import { StoreContextx } from "../../../ContextAndReducer/StoreContext";
import CartLamp from "../../../components/Lamp/CartLamp";
import "./CartList.css";

function CartList() {
  const { products } = useContext(StoreContextx);
  return (
    <div>
      <section className="cartList">
        <h1 className="cartTitle">Your Cart</h1>
        <div className="cartLampItemList">
          {products.map((item, i) => (
            <CartLamp key={i} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CartList;
