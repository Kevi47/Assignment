import { useState } from "react";
import { MouseEvent } from "react";

function ForgotPass(props) {
  const [femail, setfemail] = useState("");
  const [fpass, setfpass] = useState("");
  const [fcpass, setfcpass] = useState("");
  const [passError, setpassError] = useState(false);

  const submitPass = (e: MouseEvent) => {
    e.preventDefault();
    if (femail != "" && fpass != "" && fcpass != "") {
      if (fpass === fcpass) {
        setpassError(false);
        props.backlog()
      } else {
        setpassError(true);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center p-10 w-fit space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
        <form>
          <div>
            <p>EMAIL</p>
            <input
              onChange={(e) => setfemail(e.target.value)}
              className=" focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
              type="email"
              name="email"
            ></input>
          </div>
          <div className="mt-3">
            <p>NEW PASSWORD</p>
            <input
              onChange={(e) => setfpass(e.target.value)}
              className={
                !passError
                  ? " focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
                  : " focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent mt-1 pl-1"
              }
              type="password"
              name="password"
            ></input>
          </div>
          <div className="mt-3">
            <p>CONFIRM PASSWORD</p>
            <input
              onChange={(e) => setfcpass(e.target.value)}
              className={
                !passError
                  ? " focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent mt-1 pl-1"
                  : " focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent mt-1 pl-1"
              }
              type="password"
              name="password"
            ></input>
            {passError ? (
              <p className="text-red-800 text-xs mt-2 flex justify-center">
                Password Mismatch
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center">
            <button
              onClick={submitPass}
              className="bg-transparent hover:bg-black text-black hover:text-white mt-7 px-3 border border-black hover:border-transparent rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
