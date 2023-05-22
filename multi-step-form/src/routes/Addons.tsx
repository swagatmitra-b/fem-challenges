import "./Addons.css";
import { useState } from "react";
import { useEffect } from "react";
import { useOctx } from "../App";

const Addons = () => {
  const { setShowBack, setBackVar, setLocation } = useOctx();

  useEffect(() => {
    setShowBack(true);
    setBackVar('/plan');    
    setLocation('/summary');
  }, [])

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const checkHandler = () => {
    setIsChecked1(!isChecked1);
  };

  const checkHandler2 = () => {
    setIsChecked2(!isChecked2);
  };
  const checkHandler3 = () => {
    setIsChecked3(!isChecked3);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enchance your gaming experience.</p>
      </div>
      <div className="form3">
        <div
          className="box box1"
          style={{
            border: isChecked1 ? "1px solid hsl(243, 100%, 62%)" : "",
            backgroundColor: isChecked1 ? "hsl(217, 100%, 97%)" : "",
          }}
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="add-on"
            onChange={checkHandler}
          />
          <div className="text">
            <h4>Online Service</h4>
            <p>Access to multiplayer games</p>
          </div>
          <h4 className="price">+1$/mo</h4>
        </div>
        <div
          className="box box2"
          style={{
            border: isChecked2 ? "1px solid hsl(243, 100%, 62%)" : "",
            backgroundColor: isChecked2 ? "hsl(217, 100%, 97%)" : "",
          }}
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="add-on"
            onChange={checkHandler2}
          />
          <div className="text">
            <h4>Larger Storage</h4>
            <p>Extra 1TB of cloud save</p>
          </div>
          <h4 className="price">+$2/mo</h4>
        </div>
        <div
          className="box box3"
          style={{
            border: isChecked3 ? "1px solid hsl(243, 100%, 62%)" : "",
            backgroundColor: isChecked3 ? "hsl(217, 100%, 97%)" : "",
          }}
        >
          <input
            type="checkbox"
            name=""
            id=""
            className="add-on"
            onChange={checkHandler3}
          />
          <div className="text">
            <h4>Customizable Profile</h4>
            <p>Custom theme on your profile</p>
          </div>
          <h4 className="price">+$2/mo</h4>
        </div>
      </div>
    </div>
  );
};

export default Addons;
