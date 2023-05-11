import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order online" element={<OrderOnline />} />
        </Routes>
      </div>

      <main>
        <section className="banner">
          <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur aing elit.br<br></br> Vero,
              dolore ut nam<br></br>tempore a quaerat eveniet<br></br> earum
              illo quia repellat eos culpa <br></br>veritatis ducimus soluta.
              Dicta, iusto.
            </p>
            <button className="button" type="">
              start free trial
            </button>
          </article>
          <img src={require("./icons_assets/d53d7e068df24dfe82c1893a8f3167f3.jpg")} alt=" " />
        </section>
        <section className="banner2">
          <div className="nav_header">
            <h2>Our Specials</h2>
            <button>On the menu</button>
          </div>
          <section className="cardOfThree">
            <div className="card">
              <div className="cardImage image1"></div>
              <h2>lemon dessert</h2>
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="orderingDelivery">
                <p>Order a delivery</p>
                <button>+1</button>
              </div>
            </div>
            <div className="card">
              <div className="cardImage image2"></div>
              <h2>greek salad</h2>
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="orderingDelivery">
                <p>Order a delivery</p>
                <button>+1</button>
              </div>
            </div>
            <div className="card">
              <div className="cardImage image3"></div>
              <h2>burger</h2>
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <div className="orderingDelivery">
                <p>Order a delivery</p>
                <button>+1</button>
              </div>
            </div>
          </section>
        </section>

        <section className="tintForNewBanner">
          <div className="box box1">
            <h3>rating</h3>
            <p>
              "I had an amazing experience at this restaurant. The food was
              delicious and the service was top-notch"
            </p>
          </div>
          <div className="box box2">
            <h3>rating</h3>
            <p>
              "The atmosphere was perfect for a romantic dinner. I highly
              recommend this place."
            </p>
          </div>
          <div className="box box3">
            <h3>rating</h3>
            <p>
              "I was impressed by the variety of dishes on the menu. Everything
              we ordered was cooked to perfection."
            </p>
          </div>
          <div className="box box4">
            <h3>rating</h3>
            <p>
              "This restaurant exceeded my expectations. The staff was friendly
              and attentive, and the food was out of this world.”
            </p>
          </div>
        </section>

        <section className="aboutLittleLemon">
          <div>
            <article>
              <h1>Little Lemon</h1>
              <h3>chicago</h3>
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </article>
            <img src={require("./icons_assets/restauranfood.jpg")} alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
