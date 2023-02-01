import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./layout/index";
import { Chapters, Lessons } from "./pages/index";

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
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/lessons/:id" element={<Lessons />} />
            <Route path="/lesson/:id/id1" element={<Lessons />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
