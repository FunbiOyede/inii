import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import ContextProvider from "./component/Context/ContextProvider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ContextProvider>
            <Layout />
          </ContextProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
