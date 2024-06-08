import styled from "styled-components";

const colors = {
  detailsTitle: "black",
  operationName: "grey",
  operationInfo: "black",
};

export const Root = styled.div`
  margin: 30px auto;
  width: 400px;
  border: 1px solid orange;
  padding: 10px;
  border-radius: 10px;
`;

export const DetailTitle = styled.div`
  font-size: 14px;
  line-height: 1.3;
  font-weight: 500;
  color: ${colors.detailsTitle};
  margin-bottom: 15px;
`;

export const OperationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const OperationName = styled.div`
  flex: 0 0 200px;
  font-size: 12px;
  line-height: 1.25;
  margin-right: 15px;
  text-align: left;
  color: ${colors.operationName};
`;

interface OperationInfoProps {
  color?: string;
  fontSize?: string;
}

export const OperationInfo = styled.div<OperationInfoProps>`
  flex: 2 1 auto;
  font-size: 12px;
  line-height: 1.25;
  text-align: right;
  color: ${(props) => props.color && props.color};
  font-size: ${(props) => props.fontSize && props.color};
`;
