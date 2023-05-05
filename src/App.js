import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Clinics from "./pages/Clinics";
import Contact from "./pages/Contact";
import Diagnostics from "./pages/Diagnostics";
import DoctorPage from "./pages/DoctorPage";
import Footer from "./components/Footer";
import JoinUs from "./pages/JoinUs";
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
        <Route path='/doctorpage/:id' element={<DoctorPage />} />
        <Route path='/joinus' element={<JoinUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;