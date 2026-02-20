import "./ToolPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Encrypt() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [key, setKey] = useState("");

  const handleEncrypt = () => {
    if (!file || !key) {
      alert("Please select a file and enter encryption key.");
      return;
    }

    const fakeCloudinaryUrl =
      "https://res.cloudinary.com/demo/encrypted-file-sample";

    navigate("/encrypt-success", {
      state: {
        fileUrl: fakeCloudinaryUrl,
        key: key,
      },
    });
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h1>Encrypt File</h1>
        <p>Upload a file and secure it using advanced encryption.</p>
      </div>

      <div className="tool-card">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <input
          type="password"
          placeholder="Enter Encryption Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <button type="button" onClick={handleEncrypt}>
          Encrypt File
        </button>
      </div>
    </div>
  );
}

export default Encrypt;
