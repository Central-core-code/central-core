import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import Layout from "@components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, disable: "mobile" });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
