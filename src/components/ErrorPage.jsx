import "../styles/ErrorPage.css";
import Header from "./Header";

function ErrorPage() {
  return (
    <div>
      <Header />
      <main id="error-cont">
        <h1>
          Uh oh.. Looks like this page doesn't exist or is under construction!
        </h1>
        <img className="error-img" src="/error.png" />
      </main>
    </div>
  );
}

export default ErrorPage;
