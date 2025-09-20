import React from "react";
import styled from "styled-components";




const SIZES = {
  small: {
    "--height": "8px",
    "--radius": "4px ",
  },
  medium: {
    "--height": "12px",
    "--radius": "4px ",
  },
  large: {
    "--height": "24px",
    "--radius": "8px",
    "--padding":"4px"
  },
};

const ProgressBar = ({ value, size }) => {
  const percentage = value;


  return (
    <Wrapper size={size} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <Bar style={{ "--width": `${percentage}%`  } } 
      
      isComplete={percentage === 100}
      />
    </Wrapper>
  );
};



const Wrapper = styled.div`
  background: #80808026;
  border-radius: var(--radius);
  height: var(--height);
  width: 185px;
  padding: var(--padding);
 
  overflow: hidden;
  box-shadow: 0px 2px 4px 0px #80808059 inset;

  ${({ size }) => SIZES[size]} // this to add the styles directly we dont need to make compoition style 
`;

const Bar = styled.div`
  background: #4747EB;
  width: var(--width);
  height: 100%;
  border-radius: 4px 0 0 4px;
  ${({ isComplete }) =>
    isComplete &&
    `
     border-radius: 4px ;
    `}
  
`;

export default ProgressBar;
