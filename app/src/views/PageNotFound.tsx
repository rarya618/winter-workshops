import { Link } from "react-router-dom";

// if there is no existing page
function PageNotFound() {
  return (
    <div>
      <h2>Error 404: Page not found!</h2>
      <p>
          Go <Link to="/">home</Link>.
      </p>
    </div>
  );
}

export default PageNotFound;