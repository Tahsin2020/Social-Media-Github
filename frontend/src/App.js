import { useState } from "react";
import Form from "./Components/Form";
import Webpage from "./Components/Webpage";

function App() {
  const [Registered, setRegistered] = useState(true);
  return (
    <>
      {Registered ? (
        <Webpage Registered={Registered} />
      ) : (
        <Form Registered={Registered} setRegistered={setRegistered} />
      )}
    </>
  );
}

export default App;
