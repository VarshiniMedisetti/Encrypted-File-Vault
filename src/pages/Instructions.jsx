import "./InfoPages.css";

function Instructions() {
  return (
    <div className="info-container">
      <h1>How to Use Encrypted File Vault</h1>

      <div className="info-grid">

        <div className="info-card">
          <h3>1. Upload File</h3>
          <p>Select the file you want to encrypt from your system.</p>
        </div>

        <div className="info-card">
          <h3>2. Set Encryption Key</h3>
          <p>Create a strong password to secure your file.</p>
        </div>

        <div className="info-card">
          <h3>3. Download Encrypted File</h3>
          <p>Store your encrypted file safely.</p>
        </div>

        <div className="info-card">
          <h3>4. Decrypt Anytime</h3>
          <p>Use your key to decrypt the file whenever needed.</p>
        </div>

      </div>
    </div>
  );
}

export default Instructions;
