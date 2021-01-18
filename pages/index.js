import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
