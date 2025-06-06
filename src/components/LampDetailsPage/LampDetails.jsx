import "./LampDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { lampData } from "../../LampData/lampData.js";
import { useContext } from "react";
import { StoreContextx } from "../../ContextAndReducer/StoreContext.jsx";
import Navbar from "../Navbar/Navbar.jsx";

function LampDetails() {
  const { id } = useParams();
  const lamp = lampData.find((lamp) => lamp.id === parseInt(id)); //Find lamp according to id in my lampData.js file

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { addToCart } = useContext(StoreContextx);

  const handleAdd = () => {
    addToCart(lamp);
  };

  if (!lamp) return <h2>Lamp Not Found</h2>;

  return (
    <div>
      <Navbar />

      <div className="lampDetails">
        <button className="goBackBtn" onClick={goBack}>
          ‹
        </button>
        <div className="lampDetailsLeft">
          <img src={lamp.src} alt={lamp.name} />
        </div>

        <div className="lampDetailsRight">
          <div className="lampDetailsRightContent">
            <h1>{lamp.name}</h1>
            <p>Price: ${lamp.price}</p>
            {console.log(lamp)}

            <button onClick={handleAdd} className="addToCartLamp">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LampDetails;
