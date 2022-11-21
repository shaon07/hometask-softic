import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../Layout";
import { store } from "../redux/store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ConfigProvider direction="ltr">
          <Component {...pageProps} />
        </ConfigProvider>
      </Layout>
    </Provider>
  );
}
