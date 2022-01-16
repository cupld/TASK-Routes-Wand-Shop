
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import wands from './wands';
import Sticks from './components/Sticks';
import {Routes, Route} from "react-router-dom";
import StickItem from './components/StickItem';
import StickDetails from './components/StickDetails';

function App() {

  return (
    <div className="App">

      <Routes>
        
        <Route path="/" element={<Home />} />
        {/* <Route path="/sticks" element={<Sticks />} /> */}
        {/* <Route path="/StickItem" element={<StickItem />} /> */}
        <Route path="/wands/:stickSlug" element={<StickDetails />} />
        
      </Routes>
    </div>
  );
}

export default App;
