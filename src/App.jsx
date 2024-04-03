import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Homepage from "./components/pages/HomePage";
import BecomePartnerPage from "./components/pages/BecomePartnerPage";
import PartnersLoginPage from "./components/pages/PartnersLoginPage";
import Login from "./components/auth/Login/";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Signup from "./components/auth/Signup";

function App() {
  return (
    <div className=" grid h-screen grid-rows-[auto_1fr_auto]">
      <AuthProvider>
        <Navbar />
      </AuthProvider>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/become-partner" element={<BecomePartnerPage />} />
        <Route path="/partners-login" element={<PartnersLoginPage />} />
        <Route
          path="/login"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthProvider>
              <Signup />
            </AuthProvider>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
