import './Summary.css'
import { useEffect } from "react";
import { useOctx } from '../App';

const Summary = () => {
  const { setShowBack, setBackVar, setConfirm, setLocation } = useOctx();

  useEffect(() => {
    setShowBack(true); 
    setBackVar('/addons');
    setConfirm(true);
    setLocation('/thankyou');
  }, [])

  return (
    <div className="wrapper">
      <div className="header">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="form4">
      </div>
    </div>
  );
};

export default Summary;
