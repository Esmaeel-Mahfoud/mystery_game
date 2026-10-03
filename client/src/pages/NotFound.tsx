import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="card center">
      <h1>Wrong door, Inspector.</h1>
      <p>This page does not exist.</p>
      <Link className="btn" to="/">
        Back to the harbour
      </Link>
    </div>
  );
}

export default NotFound;
