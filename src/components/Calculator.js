import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

const Display = ({ inputs }) => (<div className="span4col griditem2 weirdgray">{ inputs }</div>);
Display.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

const Calculator = () => (
  <div className="grid4x6">
    <Display inputs={[4, 5, 8]} />
    <div className="griditem softgray">AC</div>
    <div className="griditem softgray">+/-</div>
    <div className="griditem softgray">%</div>
    <div className="griditem weirdorange">÷</div>
    <div className="griditem softgray">7</div>
    <div className="griditem softgray">8</div>
    <div className="griditem softgray">9</div>
    <div className="griditem weirdorange">*</div>
    <div className="griditem softgray">4</div>
    <div className="griditem softgray">5</div>
    <div className="griditem softgray">6</div>
    <div className="griditem weirdorange">-</div>
    <div className="griditem softgray">1</div>
    <div className="griditem softgray">2</div>
    <div className="griditem softgray">3</div>
    <div className="griditem weirdorange">+</div>
    <div className="span2col griditem softgray">0</div>
    <div className="griditem softgray">.</div>
    <div className="griditem weirdorange">=</div>
  </div>
);

export default Calculator;
