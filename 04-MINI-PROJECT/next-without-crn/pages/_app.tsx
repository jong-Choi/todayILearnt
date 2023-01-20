import { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "./Header";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default app;
