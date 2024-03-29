import './App.css';
import {useState} from 'react';

function App() {
  const [expression, setExpression] = useState('');
  const [output, setOutput] = useState();

  const handleClick = (e)=>{
    if(e.target.name === 'num' || e.target.name === 'opr')
      setExpression((prevExpression) => prevExpression + e.target.value);
    else if(e.target.name === 'clear'){
      setExpression("");
      setOutput('');
    }
      
  }

  const calculate = ()=>{
    if(expression === '')
      setOutput("Error");
    else{
      setOutput(eval(expression));
    }
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type='text' name='expression' value={expression} readOnly/>
      { <div className='output' >{output}</div>}
      <div className='buttons'>
          <button type='button' name='num' value='7' onClick={handleClick}>7</button>
          <button type='button' name='num' value='8' onClick={handleClick}>8</button>
          <button type='button' name='num' value='9' onClick={handleClick}>9</button>
          <button type='button' name='opr' value='+' onClick={handleClick}>+</button>

          <button type='button' name='num' value='4' onClick={handleClick}>4</button>
          <button type='button' name='num' value='5' onClick={handleClick}>5</button>
          <button type='button' name='num' value='6' onClick={handleClick}>6</button>
          <button type='button' name='opr' value='-' onClick={handleClick}>-</button>
          
          <button type='button' name='num' value='1' onClick={handleClick}>1</button>
          <button type='button' name='num' value='2' onClick={handleClick}>2</button>
          <button type='button' name='num' value='3' onClick={handleClick}>3</button>
          <button type='button' name='opr' value='*' onClick={handleClick}>*</button>

          <button type='button' name='clear' value='' onClick={handleClick}>C</button>
          <button type='button' name='num' value='0' onClick={handleClick}>0</button>
          <button type='button' name='opr' value='=' onClick={calculate}>=</button>
          <button type='button' name='opr' value='/' onClick={handleClick}>/</button>
      </div>
    </div>
  );
}

export default App;
