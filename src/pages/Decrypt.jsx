import "./ToolPage.css";
import { useState } from "react";

function Decrypt() {
  const [fileUrl, setFileUrl] = useState("");
  const [key, setKey] = useState("");

  const handleDecrypt = () => {
    if (!fileUrl || !key) {
      alert("Please enter URL and decryption key");
      return;
    }

    console.log("Decrypting file from:", fileUrl);
    console.log("Using key:", key);

    // 🔥 Later you will call backend API here
  };

  return (
    <div className="tool-container">
      <div className="tool-header">
        <h1>Decrypt File</h1>
        <p>Paste the encrypted file URL and enter your key.</p>
      </div>

      <div className="tool-card">
        <input
          type="text"
          placeholder="Enter Encrypted File URL"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Decryption Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <button onClick={handleDecrypt}>
          Decrypt File
        </button>
      </div>
    </div>
  );
}

export default Decrypt;
