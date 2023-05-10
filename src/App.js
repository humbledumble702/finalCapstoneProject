import './App.css';
import banner from './icons_assets/restaurant.jpg'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order online' element={<OrderOnline />} />
      </Routes>
    </div>
    
    <main>
      <section className='banner'>
        <article>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet consectetur aing elit.br<br></br> Vero, dolore ut nam<br></br>tempore a quaerat eveniet<br></br> earum illo quia repellat eos culpa <br></br>veritatis ducimus soluta. Dicta, iusto.</p>
          <button className='button' type=''>start free trial</button>
        </article>
        <img src={banner} alt=" "/>
      </section>
      <section className='banner2'>
        <div className='nav_header'>
          <h2>Our Specials</h2>
          <button>On the menu</button>
        </div>
          <section className='cardOfThree'>
            <div className='card'>
              <div className="cardImage image1"></div>
              <h2>lemon dessert</h2>
              <p>bgtdbbrs</p>
            </div>
            <div className='card'>
              <div className="cardImage image2"></div>
              <h2>greek salad</h2>
              <p>at5gt5e4wdf</p>
            </div>
            <div className='card'>
              <div className="cardImage image3"></div>
              <h2>burger</h2>
              <p>awfega</p>
            </div>
          </section>
      </section>
    </main>
  </>
  );
}

export default App;
