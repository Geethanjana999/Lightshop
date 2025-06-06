import "./Shop.css";
import Navbar from "../../components/Navbar/Navbar";

import NewArrival from "./ShopSections/NewArrival";

function Shop() {
  return (
    <div className="shop">
      <Navbar />
      <main className="mainShopSection">
        <NewArrival />
      </main>
    </div>
  );
}

export default Shop;
