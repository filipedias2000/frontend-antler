import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Homepage from "./components/pages/HomePage";
import BecomePartnerPage from "./components/pages/BecomePartnerPage";
import PartnersLoginPage from "./components/pages/PartnersLoginPage";

import { Routes, Route} from "react-router-dom";

import {useState} from "react";


function App() {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/become-partner" element={<BecomePartnerPage />} />
        <Route path="/partners-login" element={<PartnersLoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
