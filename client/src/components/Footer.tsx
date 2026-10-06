import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-mark">MR</span>
          <div>
            <strong>Mystery Room</strong>
            <p>Follow every clue. Uncover the truth.</p>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Home</Link>
          <Link to="/mysteries">Mysteries</Link>
          <Link to="/how-to-play">How to play</Link>
          <Link to="/about-us">About Us</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Mystery Room</span>
        <span>Every clue brings you closer to the truth.</span>
      </div>
    </footer>
  );
}

export default Footer;
