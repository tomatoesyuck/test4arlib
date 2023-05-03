import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginpage";
import { HomePage } from "./pages/homepage";

function App() {
  return (
    // <LoginPage />
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
