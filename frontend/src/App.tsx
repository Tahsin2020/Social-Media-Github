import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Notfound from "./pages/Notfound";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default App;
