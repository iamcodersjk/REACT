import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header"

import Menu from "./menu";
import { BrowserRouter } from "react-router-dom";
import Hook from "./Hook";
import Abc from "./Abc";
import Cat from "./Cat";





ReactDOM.createRoot(document.getElementById("root")).render(<div>
  <BrowserRouter>
  <Header/>
 <Hook/>
 <Abc/>
 <Cat/>
  <Menu/>
  </BrowserRouter>
</div>)
