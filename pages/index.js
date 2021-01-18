import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Central corp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <h1>MAIN HEADER</h1>
        </div>
      </main>

      <footer>FOOTER</footer>
    </div>
  );
}
