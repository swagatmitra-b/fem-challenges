import { Link, Outlet, useOutletContext } from "react-router-dom";
import "./App.css";
import Wrapper1 from "./components/Wrapper1";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type outletCtx = {
  setShowBack: React.Dispatch<React.SetStateAction<boolean>>, 
  setShowButton: React.Dispatch<React.SetStateAction<boolean>>, 
  setBackVar : React.Dispatch<React.SetStateAction<string>>, 
  setConfirm : React.Dispatch<React.SetStateAction<boolean>>, 
  setLocation : React.Dispatch<React.SetStateAction<string>>
}

const App = () => {
  const [showBack, setShowBack] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [backVar, setBackVar] = useState("");
  const [confirm, setConfirm] = useState(false);
  const path = useLocation().pathname;
  const [location, setLocation] = useState<string>('');
  const navigate = useNavigate();

  // useEffect(() => {
    // path !== "/" && path !== "/thankyou"
    //   ? setShowBack(true)
    //   : setShowBack(false);
    // path === "/summary" ? setConfirm(true) : setConfirm(false);
    // path === "/thankyou" ? setShowButton(false) : setShowButton(true);
    // switch (path) {
    //   case "/plan":
    //     setBackVar("/");
    //     break;
    //   case "/addons":
    //     setBackVar("/plan");
    //     break;
    //   case "/summary":
    //     setBackVar("/addons");
    //     break;
    // }
    // console.log(path);
  // }, [path]);

  // const naviHelper = () => {
    // switch (path) {
    //   case "/":
    //     navigate("/plan");
    //     break;
    //   case "/plan":
    //     navigate("/addons");
    //     break;
    //   case "/addons":
    //     navigate("/summary");
    //     break;
    //   case "/summary":
    //     navigate("/thankyou");
    //     break;
    //   default: 
    //     break;
    // }
  // };

  return (
    <div className="container">
      <Wrapper1 path={path} />
      <div className="outlet">
        <Outlet context={{setShowBack, setShowButton, setBackVar, setConfirm, setLocation, path}} />
        {showButton && (
          <button
            className="next-step"
            onClick={() => navigate(`${location}`)}
            style={{ backgroundColor: confirm ? "hsl(243, 100%, 62%)" : "" }}
          >
            {confirm ? "Confirm" : "Next Step"}
          </button>
        )}
        {showBack && (
          <Link to={backVar}>
            <p className="link">Go Back</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export function useOctx () {
  return useOutletContext<outletCtx>();
}

export default App;
