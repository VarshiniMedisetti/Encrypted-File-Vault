import "./Dashboard.css";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      

      <div className="dashboard-header">
        <h1>
          Welcome to <span>Encrypted File Vault Dashboard</span>
        </h1>
        <p>Manage your encrypted files securely.</p>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Encrypt Files</h3>
          <p>Secure your sensitive data with advanced encryption.</p>
          <button onClick={() => navigate("/encrypt")}>Encrypt</button>
        </div>

        <div className="dashboard-card">
          <h3>Decrypt Files</h3>
          <p>Access and decrypt your stored encrypted files.</p>
          <button onClick={() => navigate("/decrypt")}>Decrypt</button>
        </div>

        <div className="dashboard-card">
          <h3>Activity Logs</h3>
          <p>Monitor all encryption and decryption activities.</p>
          <button onClick={() => navigate("/activity")}>View Activity</button>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
