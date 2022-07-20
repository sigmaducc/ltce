import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar, Content } from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <div className="wrapper_inner">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
