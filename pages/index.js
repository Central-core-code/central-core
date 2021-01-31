import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import translations from "../translations";
import ContactForm from "@components/ContactForm";

export default function Home() {
  let router = useRouter();
  const locale = router.locale;

  return (
    <div>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      {/* <div className="load-wrap">
        <div className="load-wrap__content">
          <h1>Hello</h1>
        </div>
      </div> */}
      <ContactForm />

      <main>
        <p>to tlumaczymy</p>
        {translations[locale].helloWorld} <br />
        <br />
        <br />
        <br />
        <Link href="#footer">
          <a>that one now works</a>
        </Link>
        <h1>MAIN HEADER</h1>
      </main>
    </div>
  );
}
