import { useState } from "react";
import { MouseEvent } from "react";
import axios from "axios";
import FormPage from "./FormPage";
import ForgotPass from "./ForgotPass";

function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [validState, setvalidState] = useState(true);
  const [formState, setformState] = useState(true);
  const [passStatus, setpassStatus] = useState(false);

  const submitClick = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login`,
        {
          email: email,
          password: pass,
        }
        );
        console.log(response)
      setvalidState(true);
      setformState(false);
    } catch (err) {
      setvalidState(false);
    }
  };
  return (
    <div>
      {formState && !passStatus ? (
        <div className="flex items-center flex-col">
          <div className="flex justify-center p-10 w-fit space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
            <form>
              <div>
                <p>EMAIL</p>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  className={
                    validState
                      ? " focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
                      : " focus:outline-none border-b-2 h-8 text-red-800 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
                  }
                  type="email"
                  name="email"
                ></input>
              </div>
              <div className="mt-3">
                <p>PASSWORD</p>
                <input
                  onChange={(e) => setpass(e.target.value)}
                  className={
                    validState
                      ? " focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
                      : " focus:outline-none border-b-2 h-8 text-red-800 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
                  }
                  type="password"
                  name="password"
                ></input>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={submitClick}
                  className="bg-transparent hover:bg-black text-black hover:text-white mt-7 px-3 border w-fit border-black hover:border-transparent rounded"
                >
                  SUBMIT
                </button>
                {!validState ? (
                  <p className="text-red-800 text-xs mt-2">
                    Invalid Email Or Password
                  </p>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setpassStatus(true)}
              className=" text-white text-xs mt-1 "
            >
              Forgot Password ?
            </button>
          </div>
        </div>
      ) : !passStatus && !formState ? (
        <FormPage logout={() => setformState(true)} />
      ) : (
        ""
      )}
      {passStatus ? <ForgotPass backlog={()=>setpassStatus(false)}/> : ""}
    </div>
  );
}

export default Login;
