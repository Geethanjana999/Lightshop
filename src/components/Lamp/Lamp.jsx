import { useContext } from "react";
import { StoreContextx } from "../../ContextAndReducer/StoreContext";
import "./Lamp.css";
import { Link } from "react-router-dom";

function Lamp({ item }) {
  const { addToCart } = useContext(StoreContextx);

  const handleAdd = () => {
    addToCart(item);
  };
  return (
    <div className="oneLampItem">
      <div className="shopCard">
        <div className="shopLamp">
          <Link
            to={`/lamp/${item.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={item.src} alt={item.name} />{" "}
          </Link>
          <div className="shopLampInfo">
            <div className="shopLampDetails">
              <h3 className="name">{item.name}</h3>
              <h4 className="price">${item.price}</h4>
            </div>
            <button onClick={handleAdd} className="addToCartLamp">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lamp;
