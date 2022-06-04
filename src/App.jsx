import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurents from './components/Restaurents';
// import Restaurent from './components/Restaurent';
import userInfo from "./data/userInfo.json";
import offers from './data/offers.json';
import restaurents from "./data/restaurents.json";
function App() {
  return (
    <div>
     <Navbar {...userInfo.location}/>
     <Offers offers={offers}/>
     <section className="near-you">
     <Filters/>
     {/* <Restaurent/> */}
     <Restaurents restaurents={restaurents}/>
     </section>
    </div>
  );
}

export default App;
