import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Modules from "./Modules";
import NewNavbar from "./navbar";



const App = () => (
  <div className="bg-black">
  <NewNavbar/>
  <Modules/>
   
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;
