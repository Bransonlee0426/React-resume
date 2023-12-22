import * as React from 'react';
import styled from 'styled-components';
import VerticalLine from './VerticalLine';
import Title from './Title';
import Avatar from './Avatar';
import IconItem from './IconItem';
import TimeSection from './TimeSection';
import { useGetUserDataQuery } from '../redux/api/user';

export default function Paper() {
  const { data, refetch } = useGetUserDataQuery();
  return (
    <PaperWrap>
      <div className="h-full">
        <VerticalLine height="40px"></VerticalLine>
        <div className="flex justify-between items-center">
          <Title class="mt-5 mb-5" topTitle={data?.first_name} title={data?.name.split('').join(' ')} subTitle={data?.position}></Title>
          <Avatar></Avatar>
        </div>
        <div className="relative">
          <VerticalLine class="absolute bottom-[-15px]" height="50px"></VerticalLine>
        </div>
        <div className="grid grid-cols-3 mt-8 gap-2">
          <div className="row-span-1">
            <Title title="C O N T A C T" fontSize="18px"></Title>
            <IconItem class="mt-2" icon="images/place.png" iconSize="18px" content={data?.place || null}></IconItem>
            <IconItem class="mt-2" icon="images/phone.png" iconSize="18px" content={data?.phone || null}></IconItem>
            <IconItem class="mt-2" icon="images/email.png" iconSize="18px" content={data?.email || null}></IconItem>
          </div>
          <div className="col-span-2">
            <Title title="P R O F I L E" fontSize="18px"></Title>
            <ProfileText className="mt-2 text-slate-500">{data?.profile && data.profile.replace(/\./g, '.\n')}</ProfileText>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-14 gap-2 h-[880px]">
          <div className="flex justify-between flex-col row-span-1">
            <div className="flex flex-col">
              <Title class="mb-5" title="S K I L L S" fontSize="18px"></Title>
              <Title title="P R O F E S S I O N A L" fontSize="16px" fontWeight="500"></Title>
              {data?.skills?.map((item, index) => {
                return <IconItem key={index} class="mt-2" icon="images/rec.png" iconSize="12px" content={item}></IconItem>;
              })}
            </div>
            <div className="flex flex-col">
              <Title title="E D U C A T I O N" fontSize="16px"></Title>
              <p className="text-slate-500">{data?.education}</p>
            </div>
          </div>
          <div className="flex flex-col col-span-2">
            <Title title="E X P E R I E N C E" fontSize="16px"></Title>
            {data?.experience?.map((item, index) => {
              return (
                <TimeSection
                  key={index}
                  jobTitle={item?.job_title}
                  companyName={item?.company_name}
                  content={item?.content}
                  lineHeight={'100%'}
                ></TimeSection>
              );
            })}
          </div>
        </div>
      </div>
    </PaperWrap>
  );
}

const PaperWrap = styled.div`
  width: 1000px;
  height: 1600px;
  background-color: rgb(226, 224, 227);
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -15%);
  padding: 0px 70px;
  box-shadow: 7px 6px 13px -1px rgba(0, 0, 0, 0.51);
`;

const ProfileText = styled.div`
  white-space: pre-line;
`;
