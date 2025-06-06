import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Gallary from "../../components/Gallary/Gallary";

function Home() {
  return (
    <div className="homePage">
      <nav className="navbar">
        <Navbar />
      </nav>
      <section className="mainSection">
        <div className="homeLeft">
          <div className="descriptionBox">
            <h1>
              Light <br />
              Your <br />
              Dreams <br />
            </h1>
            <h3 className="subtitle">
              Brighten every corner of your home with our stylish,
              energy-efficient lamps. Experience elegance and warmth with every
              light.
            </h3>
            <button className="shopNowButton">
              <h4>
                <Link to="/Shop">Shop Now</Link>
              </h4>
            </button>
          </div>
        </div>
        <div className="homeRight">
          <div className="places">
            <ul>
              <li>
                <h1>Living Room </h1>
              </li>
              <li>
                <h1>Bedroom </h1>
              </li>
              <li>
                <h1>Kitchen</h1>
              </li>
              <li>
                <h1>Office </h1>
              </li>
            </ul>
          </div>
        </div>
        <Gallary />
      </section>
    </div>
  );
}

export default Home;
