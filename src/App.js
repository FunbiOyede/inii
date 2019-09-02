import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Layout />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
