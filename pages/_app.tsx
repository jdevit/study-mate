import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/common/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
