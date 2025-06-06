import Lamp from "../../../components/Lamp/Lamp";
import { lampData } from "../../../LampData/lampData";
import "./NewArrival.css";

function NewArrival() {
  return (
    <div>
      <section className="newArrival">
        <h1 className="newArrivalTitle">New Arrival</h1>
        <div className="lampItemList">
          {lampData.map((item, i) => (
            <Lamp key={i} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewArrival;
