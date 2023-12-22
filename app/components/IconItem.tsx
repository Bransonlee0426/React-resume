import React from 'react';
import styled from 'styled-components';
import { IconItemProps } from '../interface/interface';

const IconItem = (props: IconItemProps) => {
  return (
    <IconItemWrap className={props.class}>
      <Icon src={props.icon} $iconSize={props.iconSize}></Icon>
      <Content $fontSize={props.fontSize}>{props.content}</Content>
    </IconItemWrap>
  );
};

export default IconItem;

interface IconType {
  $iconSize?: string;
  $fontSize?: string;
}

const IconItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img<IconType>`
  margin-right: 16px;
  width: ${(props) => props.$iconSize || '18px'};
  height: ${(props) => props.$iconSize || '18px'};
`;
const Content = styled.div<IconType>`
  color: rgb(116, 116, 118);
  font-size: ${(props) => props.$fontSize};
`;
