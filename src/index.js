import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import rootReducer from "./modules"
import { legacy_createStore as createStore} from 'redux';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// index.js 에 provider 컴포넌트를 불러와서 app 컴포넌트 감싸주기, provider props 에 store 넣어주기
const store = createStore(rootReducer)
console.log(store.getState())