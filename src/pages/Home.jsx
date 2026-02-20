import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Secure Your Files with <span>Encrypted File Vault</span>
          </h1>
          <p>Military grade encrypted file vault for ultimate protection.</p>
          <Link to="/signup">
            <button className="primary-btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="cards">
          <div className="card">Upload File</div>
          <div className="card">Encrypt</div>
          <div className="card">Store Securely</div>
          <div className="card">Decrypt Anytime</div>
        </div>
      </section>

    </div>
  );
}

export default Home;
