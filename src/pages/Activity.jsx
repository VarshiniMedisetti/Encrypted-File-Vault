import "./ToolPage.css";
import { useNavigate } from "react-router-dom";


function Activity() {
    const navigate = useNavigate();

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h1>Activity Logs</h1>
        <p>Track your encryption and decryption history.</p>
      </div>

      <div className="tool-card activity-card">
        <div className="activity-item">
          <span>Encrypted: report.pdf</span>
          <span>19 Feb 2026</span>
        </div>

        <div className="activity-item">
          <span>Decrypted: image.png</span>
          <span>18 Feb 2026</span>
        </div>
      </div>
    </div>
  );
}

export default Activity;
