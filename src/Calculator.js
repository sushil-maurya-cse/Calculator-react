import React, { useState } from 'react'
import { Button, Alert, Card, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Calculator () {

    // useState Hook
    const [result, setResult] = useState("");
    
    // target name get and concatenating them
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    // all clear
    const clear = (e) => {
        setResult("")
    }
    // clearing the last element using slice -1
    const backspace = (e) => {
        setResult(result.slice(0, -1))
    }
    // calculating the result using eval function
    const calculate = (e) => {
        setResult(eval(result).toString());
    }

    return (
            <div className="calculator">
                <input type="text" className="calculator-screen z-depth-1" value={result} disabled />
                <div>
                    <div className="calculator-keys">
                        {/* calculator keys */}

                        <button type="button" onClick={handleClick} className="operator btn btn-info" name="+">+</button>
                        <button type="button" onClick={handleClick} className="operator btn btn-info" name="-">-</button>
                        <button type="button" onClick={handleClick} className="operator btn btn-info" name="*">&times;</button>
                        <button type="button" onClick={handleClick} className="operator btn btn-info" name="/">&divide;</button>

                        <button type="button" name="9" onClick={handleClick} className="btn btn-light waves-effect">9</button>
                        <button type="button" name="8" onClick={handleClick} className="btn btn-light waves-effect">8</button>
                        <button type="button" name="7" onClick={handleClick} className="btn btn-light waves-effect">7</button>


                        <button type="button" name="6" onClick={handleClick} className="btn btn-light waves-effect">6</button>
                        <button type="button" name="5" onClick={handleClick} className="btn btn-light waves-effect">5</button>
                        <button type="button" name="4" onClick={handleClick} className="btn btn-light waves-effect">4</button>

                        <button type="button" name="3" onClick={handleClick} className="btn btn-light waves-effect">3</button>
                        <button type="button" name="2" onClick={handleClick} className="btn btn-light waves-effect">2</button>
                        <button type="button" name="1" onClick={handleClick} className="btn btn-light waves-effect">1</button>

                        <button type="button" name="0" onClick={handleClick} className="btn btn-light waves-effect">0</button>
                        <button type="button" className="decimal function btn btn-secondary" onClick={handleClick} name=".">.</button>
                        <button type="button" className="all-clear function btn btn-danger btn-sm" onClick={clear}>AC</button>
                        <button type="button" className="all-clear function btn btn-danger btn-sm" onClick={backspace}>C</button>
                        <button type="button" className="equal-sign operator btn btn-default btn-success" name="=" onClick={calculate}>=</button>

                    </div>
                </div>
            </div >

    )
}
