import Head from "next/head";
import Link from "next/link";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { useRouter } from "next/router";
import translations from "../translations";

export default function Home() {
  let router = useRouter();
  const locale = router.locale;

  return (
    <div>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {translations[locale].helloWorld} <br />
        <LanguageSwitcher />
        <br />
        <br />
        <br />
        <Link href="#footer">
          <a>that one now works</a>
        </Link>
        <h1>MAIN HEADER</h1>
        <div style={{ height: "3000px", backgroundColor: "red" }} />
      </main>

      <footer id="footer" name="footer">
        FOOTER
      </footer>
    </div>
  );
}
