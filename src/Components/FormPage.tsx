import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import axios from "axios";

function FormPage(props) {
  const [nextC, setnextC] = useState(false);
  const [nextC1, setnextC1] = useState(false);
  const [nextC2, setnextC2] = useState(false);
  const [barStatus, setbarStatus] = useState(0);
  const [loc, setloc] = useState("");

  const [ename, setename] = useState("");
  const [eemail, seteemail] = useState("");
  const [ephno, setephno] = useState();
  const [add1, setadd1] = useState("");
  const [add2, setadd2] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [country, setcountry] = useState("");
  const [file1, setfile1] = useState("");
  const [file2, setfile2] = useState("");
  const [final, setfinal] = useState(false);

  const form1 = () => {
    if (ename != "" && eemail != "" && ephno != "") {
      setnextC(true);
      setbarStatus(1);
      seteemail("");
      setename("");
      setephno("");
    }
  };

  const form2 = () => {
    if (
      add1 != "" &&
      add2 != "" &&
      city != "" &&
      state != "" &&
      pincode != "" &&
      country != ""
    ) {
      setnextC1(true);
      setbarStatus(2);
      setadd1("");
      setadd2("");
      setcity("");
      setstate("");
      setpincode("");
      setcountry("");
    }
  };

  const form3 = () => {
    if (file1 != "") {
      setnextC2(true);
      setbarStatus(3);
      setfile1("");
    }
  };

  const form4 = () => {
    if (file2 != "") {
      setfinal(true);
      setbarStatus(4);
      setfile2("");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setloc(location.data.city);
  };

  return (
    <div className="flex justify-center w-screen">
      <div className="w-fit">
        {/* STEP 1 : BASIC DETAILS */}
        {!nextC ? (
          <div className="flex justify-center flex-col p-10 space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
            <div className="bg-white/30 rounded-xl">
              <p className="flex justify-center text-lg">BASIC DETAILS</p>
            </div>
            <div className="flex flex-col m-5">
              <p className="mt-3">NAME</p>
              <input
                onChange={(e) => setename(e.target.value)}
                className={
                  ename == ""
                    ? " focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : " focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">EMAIL</p>
              <input
                onChange={(e) => seteemail(e.target.value)}
                className={
                  eemail == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">PHONE NUMBER</p>

              <PhoneInput
                defaultCountry="IN"
                value={ephno}
                onChange={(ephno) => setephno(ephno)}
                className={
                  ephno == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              />
              <div className="flex justify-center">
                <button
                  onClick={form1}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 border border-black hover:border-transparent rounded"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* STEP 2 : ADDRESS */}
        {nextC && !nextC1 ? (
          <div className="flex justify-center flex-col p-5 space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
            <div className="bg-white/30 rounded-xl">
              <p className="flex justify-center text-lg">ADDRESS</p>
            </div>
            <div className="flex flex-col m-4">
              <p className="mt-3">ADDRESS 1</p>
              <input
                onChange={(e) => setadd1(e.target.value)}
                className={
                  add1 == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">ADDRESS 2</p>
              <input
                onChange={(e) => setadd2(e.target.value)}
                className={
                  add2 == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">CITY</p>
              <input
                onChange={(e) => setcity(e.target.value)}
                className={
                  city == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">STATE</p>
              <input
                onChange={(e) => setstate(e.target.value)}
                className={
                  state == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">PINCODE</p>
              <input
                onChange={(e) => setpincode(e.target.value)}
                className={
                  pincode == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p className="mt-3">COUNTRY</p>
              <input
                onChange={(e) => setcountry(e.target.value)}
                className={
                  country == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setnextC(false);
                    setbarStatus(0);
                    setadd1("");
                    setadd2("");
                    setcity("");
                    setstate("");
                    setpincode("");
                    setcountry("");
                  }}
                  className="bg-transparent hover:bg-black text-black hover:text-white ml-2 p-1 mt-7 border border-black hover:border-transparent rounded"
                >
                  PREVIOUS
                </button>{" "}
                <button
                  onClick={form2}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 border border-black hover:border-transparent rounded"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* STEP 3 : FILE UPLOAD */}
        {nextC1 && nextC && !nextC2 ? (
          <div className="flex justify-center flex-col p-10 space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
            <div className="bg-white/30 rounded-xl">
              <p className="flex justify-center text-lg">SINGLE FILE UPLOAD</p>
            </div>
            <div className="flex flex-col m-5">
              <p>SINGLE FILE</p>
              <input
                onChange={(e) => setfile1(e.target.value)}
                type="file"
                className={
                  file1 == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setnextC1(false);
                    setbarStatus(1);
                    setfile1("");
                  }}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 border border-black hover:border-transparent rounded"
                >
                  PREVIOUS
                </button>{" "}
                <button
                  onClick={form3}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 border border-black hover:border-transparent rounded"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* STEP 4 :MULTIPLE FILE UPLOAD */}
        {nextC2 && !final ? (
          <div className="flex justify-center flex-col p-10 space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
            <div className="bg-white/30 rounded-xl">
              <p className="flex justify-center text-lg">MULTI FILE UPLOAD</p>
            </div>
            <div className="flex flex-col m-5">
              <p>MULTI FILE</p>
              <input
                onChange={(e) => setfile2(e.target.value)}
                type="file"
                multiple
                className={
                  file2 == ""
                    ? "focus:outline-none border-b-2 h-8 border-red-800 rounded-md w-6/7 bg-transparent pl-1"
                    : "focus:outline-none border-b-2 h-8 border-slate-600 rounded-md w-6/7 bg-transparent pl-1"
                }
              ></input>
              <p>GEOLOCATION</p>
              <p>{loc}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setnextC2(false);
                    setbarStatus(2);
                    setfile1("");
                  }}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 border border-black hover:border-transparent rounded"
                >
                  PREVIOUS
                </button>{" "}
                <button
                  onClick={form4}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 px-3 border border-black hover:border-transparent rounded"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* STEP 5 :CONFIRMATION */}

        {final ? (
          <div className="flex justify-center flex-col p-10 space-y-4 backdrop-blur-sm bg-white/30 rounded-xl">
            <div className="flex flex-col m-5">
              <p>FORM SUBMITTED</p>

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    setnextC1(false);
                    setnextC(false);
                    setnextC2(false);
                    setbarStatus(0);
                    setfile1("");
                    setfinal(false);
                    props.logout();
                  }}
                  className="bg-transparent hover:bg-black text-black ml-2 p-1 hover:text-white mt-7 border border-black hover:border-transparent rounded"
                >
                  OK
                </button>{" "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-row w-full h-3">
          <div
            className={
              barStatus < 5 && barStatus != 0
                ? "w-1/4 rounded-lg bg-cyan-400 m-1"
                : "w-1/4 rounded-lg bg-white/30 m-1"
            }
          ></div>
          <div
            className={
              barStatus < 5 && barStatus > 1
                ? "w-1/4 rounded-lg bg-cyan-400 m-1"
                : "w-1/4 rounded-lg bg-white/30 m-1"
            }
          ></div>
          <div
            className={
              barStatus < 5 && barStatus > 2
                ? "w-1/4 rounded-lg bg-cyan-400 m-1"
                : "w-1/4 rounded-lg bg-white/30 m-1"
            }
          ></div>
          <div
            className={
              barStatus < 5 && barStatus > 3
                ? "w-1/4 rounded-lg bg-cyan-400 m-1"
                : "w-1/4 rounded-lg bg-white/30 m-1"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
