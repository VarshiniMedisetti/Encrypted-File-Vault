import "./Auth.css";
import { Link } from "react-router-dom";


function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="auth-btn">
            Signup
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>

        </p>
      </div>
    </div>
  );
}

export default Signup;
