import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    paddingY: 2,
    paddingLeft: 28,
    borderWidth: 1,
    iconSize: 16,
  },
  large: {
    fontSize: 18,
    paddingY: 6,
    paddingLeft: 36,
    borderWidth: 2,
    iconSize: 24,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={{ "--width": `${width}px` }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SearchInput
        placeholder={placeholder}
        style={{
          "--font-size": styles.fontSize + "px",
          "--padding-y": styles.paddingY + "px",
          "--padding-left": styles.paddingLeft + "px",
          "--border-width": styles.borderWidth + "px",
        }}
      />
      <ICON id={icon} size={styles.iconSize} />
    </Wrapper>
  );
};
const ICON = styled(Icon)`
  position: absolute;
  top:3px;
  left: 0;

  color: ${COLORS.gray500};
  pointer-events: none;

  &:hover {
  color: black; 
}


`;

const Wrapper = styled.div`
  width: var(--width);
  position: relative;
    &:hover ${ICON} {
    color: black;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.gray700};
  font-size: var(--font-size);
  padding: var(--padding-y) 2px var(--padding-y) var(--padding-left);
  color: #818181;

  &:focus {
    outline-color: #4374cb;
    outline-offset: 4px;
  }
  &:hover {
    color: black;
  }


&:hover::placeholder {
  color: black; /* placeholder text */
}



`;



export default IconInput;
