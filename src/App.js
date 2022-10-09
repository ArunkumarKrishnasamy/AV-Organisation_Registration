import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Registration from "./Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
