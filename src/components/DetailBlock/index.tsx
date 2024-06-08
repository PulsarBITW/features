import React, { ReactNode } from "react";

import {
  OperationInfo,
  Root,
  OperationName,
  OperationRow,
  DetailTitle,
} from "./styled";

enum OperationTypes {
  text = "text",
  money = "money",
  date = "date",
  percent = "percent",
}

// Разобраться зачем нужен id
interface Props<T extends Record<string, any>> {
  operation: { [id: string]: any } & T;
  title: string | ReactNode;
  fields: DetailBlockField<T>[];
  className?: string;
}

export interface DetailBlockField<T> {
  label: string;
  key: keyof T;
  type?: OperationTypes;
  color?: string;
}

type GetOperationInfoProps<T extends Record<string, any>> = Pick<
  Props<T>,
  "operation"
> &
  DetailBlockField<T>;

const getOperationInfo = <T extends Record<string, any>>({
  operation,
  key,
  type,
  color,
}: GetOperationInfoProps<T>): ReactNode => {
  if (!operation[key]) return "Данного ключа нет в ответе от сервера ";

  switch (type) {
    case OperationTypes.money:
      return <OperationInfo color={color}>{operation[key]}</OperationInfo>;
    case OperationTypes.date:
      return <OperationInfo>{operation[key]}</OperationInfo>;
    case OperationTypes.percent:
      return <OperationInfo>{`${operation[key]} %`}</OperationInfo>;
    default:
      return <OperationInfo color={color}>{operation[key]}</OperationInfo>;
  }
};

// Main Component
export const DetailBlock = <T extends Record<string, any>>({
  fields,
  title,
  operation,
  className,
}: Props<T>) => {
  return (
    <Root className={className}>
      <DetailTitle>{title}</DetailTitle>
      {fields.map((field) => {
        return (
          <OperationRow key={field.key as string}>
            <OperationName>{field.label}</OperationName>
            {getOperationInfo<T>({ ...field, operation })}
          </OperationRow>
        );
      })}
    </Root>
  );
};
