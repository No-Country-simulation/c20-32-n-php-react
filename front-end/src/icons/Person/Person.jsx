/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Person = ({ color = "black", className }) => {
  return (
    <svg
      className={`person ${className}`}
      fill="none"
      height="13"
      viewBox="0 0 12 13"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6 6.10449C7.65685 6.10449 9 4.76135 9 3.10449C9 1.44764 7.65685 0.104492 6 0.104492C4.34315 0.104492 3 1.44764 3 3.10449C3 4.76135 4.34315 6.10449 6 6.10449ZM8 3.10449C8 4.20906 7.10457 5.10449 6 5.10449C4.89543 5.10449 4 4.20906 4 3.10449C4 1.99992 4.89543 1.10449 6 1.10449C7.10457 1.10449 8 1.99992 8 3.10449Z"
        fill={color}
      />
      <path
        className="path"
        d="M12 11.1045C12 12.1045 11 12.1045 11 12.1045H1C1 12.1045 0 12.1045 0 11.1045C0 10.1045 1 7.10449 6 7.10449C11 7.10449 12 10.1045 12 11.1045ZM11 11.101C10.9986 10.8542 10.8462 10.1149 10.1679 9.4366C9.51563 8.78434 8.2891 8.10449 5.99999 8.10449C3.71088 8.10449 2.48435 8.78434 1.8321 9.4366C1.15375 10.1149 1.00142 10.8542 1 11.101H11Z"
        fill={color}
      />
    </svg>
  );
};

Person.propTypes = {
  color: PropTypes.string,
};
