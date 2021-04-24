import "../styles/globals.css";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
//reducers
import root from "../reducers/root";
import Layout from "../components/Layout";

const store = configureStore({
  reducer: root,
  middleware: [...getDefaultMiddleware({
    serializableCheck: false
  }), logger],
  devTools: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
