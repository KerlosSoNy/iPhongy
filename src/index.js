import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";

import './Css/index.css'

import App from "./Component/App";
import { Provider } from "react-redux";
import { mainStore } from "./Store/store";


ReactDOM.createRoot(document.querySelector('#root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={mainStore}>  
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>
)
