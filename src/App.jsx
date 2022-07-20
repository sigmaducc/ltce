import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components";
import "./App.css";

function App() {
  const wrapper = document.querySelector(".hamburger");
  return (
    <BrowserRouter>
      <div className="App">
        <Page />
      </div>
    </BrowserRouter>
  );
}

export default App;
