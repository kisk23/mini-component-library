import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const spanRef = useRef(null);
  const [width, setWidth] = useState(100); // fallback width

  useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth + 40); // text width + padding + space for icon
    }
  }, [displayedValue]);

  return (
    <Wrapper style={{ width }}>
      {/* hidden mirror span to measure text */}
      <HiddenSpan ref={spanRef}>{displayedValue}</HiddenSpan>

      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>

      <IconWrapper>
        <Icon id="chevron-down" size={20} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 43px;
  border-radius: 8px;
  background-color: #80808026;
  display: inline-block;
  transition: width 0.2s ease;
`;

const NativeSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 100%;
  padding: 12px 40px 12px 16px; /* space for icon */
  border: none;
  border-radius: 8px;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: 2px solid #4747eb;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #4747eb;
`;

const HiddenSpan = styled.span`
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-size: 16px;
  padding: 12px 16px; /* same padding as select */
`;

export default Select;
