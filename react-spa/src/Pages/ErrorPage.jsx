import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="text-center mb-4">
      <h1 className="display-3">Oops! Something went wrong.</h1>
      <p>
        Click <Link to="/">here </Link> to go back to the application
      </p>
    </div>
  );
}

export default ErrorPage;
