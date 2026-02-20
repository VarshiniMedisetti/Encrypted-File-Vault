import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Otp.css";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  // If user refreshes or comes directly
  if (!email) {
    return (
      <div className="otp-container">
        <div className="otp-card">
          <h2>Session Expired</h2>
          <button onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    if (otp === "123456") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <h2>Verify OTP</h2>

        <p>
          Enter the 6-digit OTP sent to <b>{email}</b>
        </p>

        <input
          type="text"
          maxLength="6"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
}

export default VerifyOtp;