import "./App.scss";
import "./Buttons.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/public/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
