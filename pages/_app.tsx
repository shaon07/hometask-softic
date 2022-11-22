import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../Layout";
import { store } from "../redux/store";
import "../styles/globals.css";

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <ConfigProvider direction="ltr">
            <Component {...pageProps} />
          </ConfigProvider>
        </Layout>
      </PersistGate>
    </Provider>
  );
}
