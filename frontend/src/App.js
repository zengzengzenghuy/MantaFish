import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { MendableSearchBar } from '@mendable/search';
import AskAndEarn from './components/Ask-And-Earn';
import AddMantleNetwork from './components/AddMantleNetwork';
import Home from "./Home";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/askandearn" element={<AskAndEarn/>}/>
          <Route path="/connectWallet" element={<AddMantleNetwork/>}/>
        </Routes>
      </Router>
   
   
      </header>
    </div>
  );
}

export default App;
