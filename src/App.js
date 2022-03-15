import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Shopping from "./component/Shopping";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Shopping/>} />
          <Route exact path='/shopping' element={<Shopping/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
