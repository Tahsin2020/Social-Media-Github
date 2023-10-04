import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [Registered, setRegistered] = useState(False);
  return (
    <>
      {Registered ? (
        <Form Registered={Registered} setRegistered={setRegistered} />
      ) : (
        <Form Registered={Registered} setRegistered={setRegistered} />
      )}
    </>
  );
}

export default App;
