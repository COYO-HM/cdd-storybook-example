import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ backgroundColor, color, label, ...props }) => {
  return (
    <DefaultButton
      type={"button"}
      color={color}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </DefaultButton>
  );
};

const DefaultButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "navy"};
  color: ${(props) => props.color || "white"};
  font-family: "Nunito Sans", "Helvetica Neue", H elvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  onClick: undefined,
};
