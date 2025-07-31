import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="error-message">
    <h2>404 - Page Not Found</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

export default NotFound;