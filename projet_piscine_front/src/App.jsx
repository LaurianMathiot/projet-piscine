import "./App.scss";
import "./Buttons.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/public/HomePage";
import LoginPage from "./pages/public/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
