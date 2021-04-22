import "../styles/globals.css";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
//reducers
import root from "../reducers/root";

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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
