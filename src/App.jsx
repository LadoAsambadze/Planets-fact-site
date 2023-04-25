import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";

import Systam from "./pages/systam";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/systam" />} />
        <Route path="/systam" element={<Systam />} />
        <Route path="/systam/:name" element={<Systam />} />
      </Routes>
    </>
  );
}

export default App;
