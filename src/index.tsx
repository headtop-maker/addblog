import React from "react";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "./Containers/App/App";
import "./assets/style/main.scss";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
