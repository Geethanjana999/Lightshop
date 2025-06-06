import { useContext } from "react";
import { StoreContextx } from "../../ContextAndReducer/StoreContext";
import "./CartLamp.css";

function CartLamp({ item }) {
  const { removeFromCart } = useContext(StoreContextx);

  const handleRemove = () => {
    removeFromCart(item);
  };

  return (
    <div className="cartOneLampItem">
      <table className="cartTable">
        <tr>
          <td className="cartImageCell">
            <img src={item.src} alt={item.name} className="cartLampImage" />
          </td>
          <td className="cartDetailsCell">
            <div className="cartLampDetails">
              <h3 className="name">{item.name}</h3>
              <h4 className="price">${item.price}</h4>
            </div>
          </td>
          <td className="cartQuantityCell">
            <span className="quantity">Qty: {item.quantity}</span>
          </td>
          <td className="cartSubtotalCell">
            <span className="subtotal">${item.price * item.quantity}</span>
          </td>
          <td className="cartRemoveCell">
            <button onClick={handleRemove} className="removeButton">
              ╳
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CartLamp;
