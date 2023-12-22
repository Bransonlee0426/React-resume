'use client';

import Card from './components/Card';
import Paper from './components/Paper';
import styled from 'styled-components';

export default function Home() {
  return (
    <MainPageWrap>
      <Paper></Paper>
    </MainPageWrap>
  );
}
const MainPageWrap = styled.div`
  display: flex;
  height: 1800px;
`;
