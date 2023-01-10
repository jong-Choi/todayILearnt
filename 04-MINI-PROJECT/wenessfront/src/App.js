import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MeetingPage from "./pages/MeetingPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="meeting" element={<MeetingPage />} />
        <Route path="my" element={<MyPage />} />
      </Routes>
    </div>
  );
}
export default App;
