import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ScrollToTop from "./components/ScrollToTop";
import Home from "././pages/Home";
import Gallery from "././pages/Gallery";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Gallery />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
