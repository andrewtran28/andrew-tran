import "../styles/ErrorPage.css";
import Header from "./Header";

function ErrorPage() {
  return (
    <>
      <Header />

      <main className="error-cont">
        <h1>
          Uh oh.. Looks like this page doesn't exist or is under construction!
        </h1>
        <img className="error-img" src="/error.png" />
      </main>
    </>
  );
}

export default ErrorPage;
