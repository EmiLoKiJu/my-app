import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

const OperationPlus = () => <div className="griditem weirdorange">+</div>;
const OperationMinus = () => <div className="griditem weirdorange">-</div>;
const OperationMultiply = () => <div className="griditem weirdorange">*</div>;
const OperationDivide = () => <div className="griditem weirdorange">÷</div>;
const Equals = () => <div className="griditem weirdorange">=</div>;
const AC = () => <div className="griditem softgray">AC</div>;
const Rest = () => <div className="griditem softgray">%</div>;
const PulsDividedByMinus = () => <div className="griditem softgray">+/-</div>;
const Numb1 = () => <div className="griditem softgray">1</div>;
const Numb2 = () => <div className="griditem softgray">2</div>;
const Numb3 = () => <div className="griditem softgray">3</div>;
const Numb4 = () => <div className="griditem softgray">4</div>;
const Numb5 = () => <div className="griditem softgray">5</div>;
const Numb6 = () => <div className="griditem softgray">6</div>;
const Numb7 = () => <div className="griditem softgray">7</div>;
const Numb8 = () => <div className="griditem softgray">8</div>;
const Numb9 = () => <div className="griditem softgray">9</div>;
const Numb0 = () => <div className="span2col griditem softgray">0</div>;
const Dot = () => <div className="griditem softgray">.</div>;
const Display = ({ inputs }) => (<div className="span4col griditem2 weirdgray">{ inputs }</div>);
Display.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const Calculator = () => (
  <div className="grid4x6">
    <Display inputs={[4, 5, 8]} />
    <AC />
    <PulsDividedByMinus />
    <Rest />
    <OperationDivide />
    <Numb7 />
    <Numb8 />
    <Numb9 />
    <OperationMultiply />
    <Numb4 />
    <Numb5 />
    <Numb6 />
    <OperationMinus />
    <Numb1 />
    <Numb2 />
    <Numb3 />
    <OperationPlus />
    <Numb0 />
    <Dot />
    <Equals />
  </div>
);

export default Calculator;
