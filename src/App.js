import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./layout/index";
import { Chapters } from "./pages/index";

function App() {
  //
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="right">
          <Sidebar />
        </div>
        <div className="left">
          <Navbar />
          <Routes>
            <Route path="/" element={<Chapters />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
