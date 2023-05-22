import { useState } from "react";
import "./Plan.css";
import { useEffect } from "react";
import { useOctx } from "../App";

const Plan = () => {
  const { setShowBack, setBackVar, setLocation } = useOctx();

  useEffect(() => {
    setShowBack(true);
    setBackVar("/");
    setLocation("/addons");
  }, []);

  const [state, setState] = useState({
    check: false,
    selectedPlan: 1,
  });

  const checkCheck = () => {
    setState((prevState) => ({
      ...prevState,
      check: !prevState.check,
    }));
  };

  const clickHandler = (planId: number) => {
    setState((prevState) => ({
      ...prevState,
      selectedPlan: planId,
    }));
  };

  const { check, selectedPlan } = state;

  return (
    <div className="wrapper">
      <div className="header">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="form2">
        <div
          className="plan-boxes"
          onClick={() => clickHandler(1)}
          style={{
            border: selectedPlan === 1 ? "1px solid hsl(243, 100%, 62%)" : "",
            backgroundColor: selectedPlan === 1 ? "hsl(217, 100%, 97%)" : "",
          }}
        >
          <img src="images\icon-arcade.svg" alt="" />
          <div className="content2">
            <h4>Arcade</h4>
            <h4 className="price">$9/mo</h4>
          </div>
        </div>
        <div
          className="plan-boxes"
          onClick={() => clickHandler(2)}
          style={{
            border: selectedPlan === 2 ? "1px solid hsl(243, 100%, 62%)" : "",
            backgroundColor: selectedPlan === 2 ? "hsl(217, 100%, 97%)" : "",
          }}
        >
          <img src="images\icon-advanced.svg" alt="" />
          <div className="content2">
            <h4>Advanced</h4>
            <h4 className="price">$12/mo</h4>
          </div>
        </div>
        <div
          className="plan-boxes"
          onClick={() => clickHandler(3)}
          style={{
            border: selectedPlan === 3 ? "1px solid hsl(243, 100%, 62%)" : "",
            backgroundColor: selectedPlan === 3 ? "hsl(217, 100%, 97%)" : "",
          }}
        >
          <img src="images\icon-pro.svg" alt="" />
          <div className="content2">
            <h4>Pro</h4>
            <h4 className="price">$12/mo</h4>
          </div>
        </div>
      </div>
      <div className="toggle">
        <h4
          style={{ color: check ? "hsl(229, 24%, 87%)" : "hsl(213, 96%, 18%)" }}
        >
          Monthly
        </h4>
        <label className="switch">
          <input type="checkbox" checked={check} onChange={checkCheck} />
          <span className="slider round"></span>
        </label>
        <h4
          style={{ color: check ? "hsl(213, 96%, 18%)" : "hsl(229, 24%, 87%)" }}
        >
          Yearly
        </h4>
      </div>
    </div>
  );
};

export default Plan;
