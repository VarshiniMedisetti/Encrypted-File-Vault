import { useLocation, useNavigate } from "react-router-dom";
import "./EncryptSuccess.css";

function EncryptSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const fileUrl = location.state?.fileUrl;
  const key = location.state?.key;


  if (!fileUrl || !key) {
    return (
      <div className="success-container">
        <h2>Invalid Access</h2>
        <button onClick={() => navigate("/dashboard")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>✅ Encryption Successful</h1>

        <p className="warning">
          Please save the URL and password carefully. These are required for decryption.
        </p>

        <div className="detail-box">
          <label>Encrypted File URL</label>
          <input type="text" value={fileUrl} readOnly />
        </div>

        <div className="detail-box">
          <label>Encryption Key</label>
          <input type="text" value={key} readOnly />
        </div>

        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default EncryptSuccess;
