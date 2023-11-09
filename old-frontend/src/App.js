import { useState } from "react";
import Form from "./Components/Form";
import Webpage from "./Components/Webpage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Registered, setRegistered] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path="" element={<Webpage Registered={Registered} />} />
        <Route path="/" element={<Webpage Registered={Registered} />} />
        <Route path="/home" element={<Webpage Registered={Registered} />} />
        <Route
          path="/sign-up"
          element={
            <Form Registered={Registered} setRegistered={setRegistered} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
