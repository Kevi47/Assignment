import ForgotPass from "./Components/ForgotPass";
import Login from "./Components/Login";
import { useState } from "react";

function App() {
  const [passStatus, setpassStatus] = useState(false);

  return (
    <div className="bg-wall-paper bg-cover w-screen flex flex-col justify-center w-screen h-screen text-sm font-semibold">
      <Login />
    </div>
  );
}

export default App;
