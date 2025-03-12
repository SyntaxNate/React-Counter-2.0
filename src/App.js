import React, {useState} from 'react';
import './App.css';


 const StepCounter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Counter: {count}</h2>\

            <label>
                Step: <select onChange={(e) => setStep(Number(e.target.value))} value={step}>
                  {[1,2,5,10].map((num) => (<option key={num} value={num}></option>))}</select>
            </label>

            <div style={{ marginTop: "10px" }}>
              
                <button onClick={() => setCount((prev) => Math.max(0, prev - step))}>Decrease</button>
                <button onClick={() => setCount((prev) => prev + step)}>Increase</button>

                <button onClick={() => setCount(0)}>Reset</button>
            </div>
      </div>
    )
 } 

export default StepCounter;