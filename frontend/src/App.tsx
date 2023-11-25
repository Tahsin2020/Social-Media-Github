import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Notfound from "./pages/Notfound";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Settings from "./pages/Settings";
import Marketplace from "./pages/Marketplace";

function App() {
  const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn &&
          auth.user && <Route path="/chat" element={<Chat />} /> && (
            <Route path="/settings" element={<Settings />} />
          )}
        <Route path="/" element={<Marketplace />} />
        <Route path="/:username" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default App;
