import React, {useState} from 'react';
import './App.css';


 const StepCounter = () => {
    const [count, setCount] = useState(0); // Count stores the Counter value and setCount updates it
    const [step, setStep] = useState(1); // Step Stores the Step value and setStep updates it

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Counter: {count}</h2>

            <label>
                Step: <select onChange={(e) => setStep(Number(e.target.value))} value={step}>
                        {/* This allows the user to choose how much they want to increase. setStep updates this and 
                           e.target.value gives the selected option's value a string and we use Number() to convert it. */}
                       {[1,2,5,10].map((num) => (<option key={num} value={num}></option>))}</select>
            </label>

            <div style={{ marginTop: "10px" }}>
              
                <button onClick={() => setCount((prev) => Math.max(0, prev - step))}>Decrease</button>
                                {/*Decreases Count by Step and uses Math.max to prevent negative numbers. */}
                <button onClick={() => setCount((prev) => prev + step)}>Increase</button>
                                {/* Increases Count by Step */}
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
      </div>
    )
 } 

export default StepCounter;