import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./layout/index";
import { Chapters, Exercices, Lessons } from "./pages/index";
import Error from "./pages/error/Error";

function App() {
  //
  return (
    <BrowserRouter>
      <div className="layout">
        <div className="sidebar__container">
          <Sidebar />
        </div>
        <div className="navbar__container">
          <Navbar />
        </div>
        <div className="outlet">
          <Routes>
            <Route path="/" element={<Chapters />} />
            <Route path="/lessons/:id" element={<Lessons />} />
            <Route path="/lessons/:id/:id1" element={<Exercices />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
