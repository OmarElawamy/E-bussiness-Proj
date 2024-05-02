import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
import './about.css';
import './contact.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
