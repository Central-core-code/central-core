import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.scss";
import Layout from "@components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/") {
      window.scroll({ top: 0, left: 0 });
    }
  }, [router.asPath]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
