import React, { useState } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Display = ({ inputs, whoChanged }) => {
  let finaloutput = '';
  if (!inputs.total && !inputs.operation && !inputs.next) finaloutput = '0';
  else if (whoChanged.dot) {
    if (!inputs.operation) finaloutput = inputs.next;
    else {
      finaloutput = !inputs.operation ? inputs.next : `${inputs.total || ''} ${inputs.operation || ''} ${inputs.next || ''}`;
    }
  } else {
    finaloutput = `${inputs.total || ''} ${inputs.operation || ''} ${inputs.next || ''}`;
  }
  return (
    <div className="span4col griditem2 weirdgray">
      {finaloutput}
    </div>
  );
};

Display.propTypes = {
  inputs: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  whoChanged: PropTypes.shape({
    total: PropTypes.bool.isRequired,
    next: PropTypes.bool.isRequired,
    operation: PropTypes.bool.isRequired,
    dot: PropTypes.bool.isRequired,
  }).isRequired,
};

const Calculator = () => {
  const [inputs, setInputs] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const [whoChanged, setWhoChanged] = useState({
    total: false,
    next: false,
    operation: false,
    dot: false,
  });

  const handleButtonClick = (inputs, value) => {
    const newInputs = calculate(inputs, value);
    setWhoChanged({
      total: inputs.total !== newInputs.total,
      next: inputs.next !== newInputs.next,
      operation: inputs.operation !== newInputs.operation,
      dot: value === '.',
    });
    setInputs(newInputs);
  };
  handleButtonClick.propTypes = {
    value: PropTypes.string.isRequired,
  };

  return (
    <>
      <h2 className="welcome">Let&apos;s do some math!</h2>
      <div className="grid4x6">
        <Display inputs={inputs} whoChanged={whoChanged} />
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, 'AC')}>AC</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '+/-')}>+/-</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '%')}>%</button>
        <button type="button" className="griditem weirdorange" onClick={() => handleButtonClick(inputs, '÷')}>÷</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '7')}>7</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '8')}>8</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '9')}>9</button>
        <button type="button" className="griditem weirdorange" onClick={() => handleButtonClick(inputs, 'x')}>x</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '4')}>4</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '5')}>5</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '6')}>6</button>
        <button type="button" className="griditem weirdorange" onClick={() => handleButtonClick(inputs, '-')}>-</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '1')}>1</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '2')}>2</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '3')}>3</button>
        <button type="button" className="griditem weirdorange" onClick={() => handleButtonClick(inputs, '+')}>+</button>
        <button type="button" className="span2col griditem softgray" onClick={() => handleButtonClick(inputs, '0')}>0</button>
        <button type="button" className="griditem softgray" onClick={() => handleButtonClick(inputs, '.')}>.</button>
        <button type="button" className="griditem weirdorange" onClick={() => handleButtonClick(inputs, '=')}>=</button>
      </div>
    </>

  );
};

export default Calculator;
