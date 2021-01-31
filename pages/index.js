import Head from "next/head";
import Homepage from "@components/Homepage";

export default function Home() {
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

      <main>
        <Homepage />
      </main>
    </div>
  );
}
