import "./Thankyou.css";
import { useEffect } from "react";
import { useOctx } from "../App";

const Thankyou = () => {
  const { setShowBack, setShowButton } = useOctx();

  useEffect(() => {
    setShowBack(false);
    setShowButton(false);
  }, []);

  return (
    <div className="wrapper">
      <div className="leader">
        <img src="\images\icon-thank-you.svg" alt="" />
        <h1>Thank you!</h1>
      </div>
      <div className="message">
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loregaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
