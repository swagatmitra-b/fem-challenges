import "./Wrapper1.css";

interface Props {
  path: string;
}

const Wrapper1 = ({ path }: Props) => {
  return (
    <div className="wrapper1">
      <div className="steps">
        <div
          className="circle"
          style={{ backgroundColor: path == "/" ? "hsl(206, 94%, 87%)" : "" }}
        >
          <p style={{ color: path == "/" ? "hsl(213, 96%, 18%)" : "" }}>1</p>
        </div>
        <div className="content">
          <h4>STEP 1</h4>
          <h3>YOUR INFO</h3>
        </div>
      </div>
      <div className="steps">
        <div
          className="circle"
          style={{
            backgroundColor: path == "/plan" ? "hsl(206, 94%, 87%)" : "",
          }}
        >
          <p style={{ color: path == "/plan" ? "hsl(213, 96%, 18%)" : "" }}>
            2
          </p>
        </div>
        <div className="content">
          <h4>STEP 2</h4>
          <h3>SELECT PLAN</h3>
        </div>
      </div>
      <div className="steps">
        <div
          className="circle"
          style={{
            backgroundColor: path == "/addons" ? "hsl(206, 94%, 87%)" : "",
          }}
        >
          <p style={{ color: path == "/addons" ? "hsl(213, 96%, 18%)" : "" }}>
            3
          </p>
        </div>
        <div className="content">
          <h4>STEP 3</h4>
          <h3>ADD-ONS</h3>
        </div>
      </div>
      <div className="steps">
        <div
          className="circle"
          style={{
            backgroundColor:
              path == "/summary" || path == "/thankyou"
                ? "hsl(206, 94%, 87%)"
                : "",
          }}
        >
          <p
            style={{
              color:
                path == "/summary" || path == "/thankyou"
                  ? "hsl(213, 96%, 18%)"
                  : "",
            }}
          >
            4
          </p>
        </div>
        <div className="content">
          <h4>STEP 4</h4>
          <h3>SUMMARY</h3>
        </div>
      </div>
    </div>
  );
};

export default Wrapper1;
