import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import {Featured} from "./components/Featured";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Featured />} />
        <Route path="/services" element={<Featured />} />
        <Route path="/contact" element={<Featured />} />
      </Routes>
    </Router>
  );
}

export default App;
