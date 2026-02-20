import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Encrypt from "./pages/Encrypt";
import Decrypt from "./pages/Decrypt";
import Activity from "./pages/Activity";
import Instructions from "./pages/Instructions";
import Contact from "./pages/Contact";
import EncryptSuccess from "./pages/EncryptSuccess";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/decrypt" element={<Decrypt />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/encrypt-success" element={<EncryptSuccess />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;