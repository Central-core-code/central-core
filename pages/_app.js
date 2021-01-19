import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
