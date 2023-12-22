import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleProps } from '../interface/interface';
import { oswald, cinzel } from '../fonts';

const Title = (props: TitleProps) => {
  return (
    <TitleWrap className={props.class}>
      <TopTitle className={cinzel.className}>{props.topTitle}</TopTitle>
      <MainTitle fontWeight={props.fontWeight} fontSize={props.fontSize} className={oswald.className}>
        {props.title}
      </MainTitle>
      <SubTitle className={cinzel.className}>{props.subTitle}</SubTitle>
    </TitleWrap>
  );
};
export default Title;

const TopTitle = styled.div<TitleProps>``;
const TitleWrap = styled.div<TitleProps>`
  display: inline-block;
`;
const SubTitle = styled.div<TitleProps>`
  display: flex;
  justify-content: end;
  color: rgb(116, 116, 118);
  font-size: 14px;
  margin-top: 6px;
`;
const MainTitle = styled.div<TitleProps>`
  font-size: ${(props) => props.fontSize || '50px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  line-height: 1;
`;
