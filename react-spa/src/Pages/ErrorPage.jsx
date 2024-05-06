import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  console.log("ERROR : ", error);

  let errorMessage = "Oops! Something went wrong.";
  let status = "400";

  if (error) {
    errorMessage = error.data.message;
    status = error.status;
  }
  return (
    <div className="text-center mb-4">
      <h1 className="display-3">{errorMessage}</h1>
      <p className="lead">Status : {status}</p>
      <p>
        Click <Link to="/">here </Link> to go back to the application
      </p>
    </div>
  );
}

export default ErrorPage;
