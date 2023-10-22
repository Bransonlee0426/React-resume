'use client';

import * as React from 'react';

import { useGetCardDataQuery } from '../redux/api/card';

function Card() {
  const { data, refetch } = useGetCardDataQuery();
  return <div>Card{data?.message}</div>;
}

export default Card;
