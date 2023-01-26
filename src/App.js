import "./AppStyle.scss";
import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState();

  const [tip, setTip] = useState();

  const [people, setPeople] = useState();

  //state tipo amount y total

  if (bill || people || tip) {

    console.log(bill);
    console.log(tip);
    console.log(people);
  }
  return (
    <div className="App">
      <div className="h1">
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className="container">
        <div className="column">
            <p>Bill</p>
            <div className="input-wrapper">
              <input
                type={"number"}
                placeholder="0"
                id="bill"
                onChange={(event) => setBill(event.target.value)}
                min="1"
                pattern="^[0-9]+"
              />
              <svg
                stroke="currentColor"
                className="input-icon"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"></path>
              </svg>
            </div>
        
            <p>Select Tip %</p>
            <div className="buttons">
              <button
                className="button"
                type={"button"}
                value="5%"
                id="5"
                name="tip"
                onClick={(event) => setTip(event.target.id)}
              >
                5%
              </button>
              <button
                className="button"
                type={"button"}
                value="10%"
                id="10"
                name="tip"
                onClick={(event) => setTip(event.target.id)}
              >
                10%
              </button>
              <button
                className="button"
                type={"button"}
                value="15%"
                id="15"
                name="tip"
                onClick={(event) => setTip(event.target.id)}
              >
                15%
              </button>
              <button
                className="button"
                type={"button"}
                value="25%"
                id="25"
                name="tip"
                onClick={(event) => setTip(event.target.id)}
              >
                25%
              </button>
              <button
                className="button"
                type={"button"}
                value="50%"
                id="50"
                name="tip"
                onClick={(event) => setTip(event.target.id)}
              >
                50%
              </button>
              <input
                type={"number"}
                className="custom"
                placeholder="Custom"
                id="tipCustom"
                name="tipCust"
                onChange={(event) => setTip(event.target.value)}
                pattern="^[0-9]+"
              ></input>
            </div>
       
            <p>Number of People</p>
            <p className="error" id="error">
              Can't be zero or decimal
            </p>
            <div className="input-wrapper">
              <input
                type={"number"}
                placeholder="0"
                id="numP"
                min="0"
                pattern="^[0-9]+"
                onChange={(event) => setPeople(event.target.value)}
              />
              <svg
                stroke="currentColor"
                className="input-icon"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
            </div>
        </div>
        <div className="column">
        <div className="container2">
          <div className="column-result">
            <div className="row-result1">
              <p>Tip Amount</p>
              <p className="per-person">/ person</p>
              <p>Total</p>
              <p className="per-person">/ person</p>
            </div>
            <div className="row-result2">
              <div className="result" id="resultTipAmount">
                $0.00
              </div>
              <div className="result" id="resultTotal">
                $0.00
              </div>
            </div>
          </div>
          <div className="column-result">
            <input
              type={"reset"}
              className="reset"
              value={"RESET"}
              //onClick={() => window.location.reload()}
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default App;
