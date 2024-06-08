import { DetailBlockField } from "./components/DetailBlock";

export interface IMockOpetation {
  summ: number;
  typeOperation: string;
  code: number;
  value: number;
}

export const mockDetailOperation: IMockOpetation = {
  summ: 10000,
  typeOperation: "Income",
  code: 10,
  value: 141415,
};

export const mockDetailBlockData: DetailBlockField<IMockOpetation>[] = [
  { label: "Сумма", key: "summ", color: "red" },
  { label: "Тип операции", key: "typeOperation" },
  { label: "Код", key: "code" },
  { label: "Значение", key: "value" },
];
