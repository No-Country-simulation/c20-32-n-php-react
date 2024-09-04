/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Search2 = ({ color = "#090073", className }) => {
  return (
    <svg
      className={`search-2 ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.6132 16.0158C18.7994 14.401 19.5 12.4073 19.5 10.25C19.5 4.86522 15.1348 0.5 9.75 0.5C4.36522 0.5 0 4.86522 0 10.25C0 15.6348 4.36522 20 9.75 20C11.9079 20 13.902 19.299 15.5171 18.1123L15.5158 18.1132C15.5601 18.1732 15.6093 18.2307 15.6636 18.285L21.4393 24.0607C22.0251 24.6465 22.9749 24.6465 23.5607 24.0607C24.1465 23.4749 24.1465 22.5251 23.5607 21.9393L17.785 16.1636C17.7307 16.1093 17.6732 16.0601 17.6132 16.0158ZM18 10.25C18 14.8063 14.3063 18.5 9.75 18.5C5.19365 18.5 1.5 14.8063 1.5 10.25C1.5 5.69365 5.19365 2 9.75 2C14.3063 2 18 5.69365 18 10.25Z"
        fill={color}
      />
    </svg>
  );
};

Search2.propTypes = {
  color: PropTypes.string,
};
