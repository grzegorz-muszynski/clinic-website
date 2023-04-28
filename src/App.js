import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Clinics from "./pages/Clinics";
import Contact from "./pages/Contact";
import Diagnostics from "./pages/Diagnostics";
import Footer from "./components/Footer";
import ForPatient from "./pages/ForPatient";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route path='/clinics' element={<Clinics />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/diagnostics' element={<Diagnostics />} />
        <Route path='/forpatient' element={<ForPatient />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;