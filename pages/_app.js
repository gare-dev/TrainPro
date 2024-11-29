import AlertProvider from "../context/AlertContext";
import "../src/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AlertProvider>
        <Component {...pageProps} />
      </AlertProvider>
    </>
  );
}
