import styled from 'styled-components';
import IconItem from './IconItem';
import VerticalLine from './VerticalLine';
import Title from './Title';
import { TimeSectionProps } from '../interface/interface';

const TimeSection = (props: TimeSectionProps) => {
  return (
    <div className="flex flex-col">
      <div className="row-span-1">
        <IconItem class="mt-4" icon="images/points.png" iconSize="18px" fontSize="18px" content={props.jobTitle || null}></IconItem>
      </div>
      <div className="flex flex-row">
        <div className="pl-2 pr-6">
          <VerticalLine height={props.lineHeight}></VerticalLine>
        </div>
        <div className="mt-2">
          <Title title={props.companyName} fontSize="18px" fontWeight="500"></Title>
          <Content>{props.content?.replace(/\. /g, '.\n')}</Content>
        </div>
      </div>
    </div>
  );
};
export default TimeSection;

const Content = styled.p`
  padding-top: 6px;
  line-height: 1.4;
  white-space: pre-line;
  font-size: 14px;
`;
