import "./Info.css";
import { useEffect } from "react";
import { useOctx } from "../App";

const Info = () => {
  const { setShowBack, setLocation } = useOctx();

  useEffect(() => {
    console.log(' Info component rendered')
    setShowBack(false);
    setLocation('/plan');
  }, [])

  return (
    <div className="wrapper">
      <div className="header">
        <h2>Personal Info</h2>
        <p>Please provide your name, email address and phone number.</p>
      </div>
      <div className="form">
        <label htmlFor="name">
          Name
          <input type="text" name="name" required />
        </label>
        <label htmlFor="mail">
          Email Address
          <input type="text" name="mail" />
        </label>
        <label htmlFor="phone">
          Phone Number
          <input type="text" name="phone" />
        </label>
      </div>
    </div>
  );
};

export default Info;
