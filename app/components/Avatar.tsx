import React from 'react';
import styled from 'styled-components';

const avatar = () => {
  return (
    <AvatarWrap>
      <AvatarImage src={'images/avatar.png'}></AvatarImage>
    </AvatarWrap>
  );
};

export default avatar;

const AvatarWrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ccc;
`;
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  transform: translate(15px, 0px) scale(3);
  filter: grayscale(100%);
`;
