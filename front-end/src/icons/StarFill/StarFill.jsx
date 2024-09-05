/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StarFill = ({ color = "black", className }) => {
  return (
    <svg
      className={`star-fill ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.6123 15.5472C3.22586 15.7458 2.78829 15.3987 2.86609 14.9552L3.69582 10.2258L0.173489 6.86911C-0.155692 6.55542 0.0147086 5.98186 0.455698 5.91921L5.35417 5.22334L7.53829 0.896797C7.73504 0.507057 8.26801 0.507057 8.46476 0.896797L10.6489 5.22334L15.5474 5.91921C15.9883 5.98186 16.1587 6.55542 15.8296 6.86911L12.3072 10.2258L13.137 14.9552C13.2148 15.3987 12.7772 15.7458 12.3908 15.5472L8.00153 13.2913L3.6123 15.5472Z"
        fill={color}
      />
    </svg>
  );
};

StarFill.propTypes = {
  color: PropTypes.string,
};
