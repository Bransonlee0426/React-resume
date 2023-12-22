import React, { useState } from 'react';
import styled from 'styled-components';
import { VerticalLineProps } from '../interface/interface';

const VerticalLine = (props: VerticalLineProps) => {
  return <VerticalLineWrap className={props.class} height={props.height}></VerticalLineWrap>;
};
export default VerticalLine;

const VerticalLineWrap = styled.div<VerticalLineProps>`
  border-left: 2px solid #000;
  height: ${(props) => props.height || '40px'};
  width: auto;
`;
