import React, { ReactNode } from "react";
import { DetailBlock } from "./components/DetailBlock";
import {
  IMockOpetation,
  mockDetailBlockData,
  mockDetailOperation,
} from "./mockData";
import { MainPage } from "./Pages/MainPage/MainPage";

interface PagesData {
  url: string;
  component: ReactNode;
  title?: ReactNode;
  exact?: boolean;
}

// const CustomDetailBlock = styled(DetailBlock)`
//   ${OperationInfo} {
//     background: blue; // проверка долетает ли className - ответа да
//   }
// `;

export const ROUTES = {
  MAIN: "/",
  DetailBlock: "/detailBlock",
  Test: "/test",
};

export const PAGES: PagesData[] = [
  {
    url: "/",
    component: <MainPage />,
    exact: true,
    title: "Main",
  },
  {
    url: ROUTES.DetailBlock,
    component: (
      <DetailBlock<IMockOpetation>
        title={"Детализация"}
        operation={mockDetailOperation}
        fields={mockDetailBlockData} // as Detail...
      />
    ),
    title: "DetailBlock",
  },
  {
    url: ROUTES.Test,
    component: <div>test page</div>,
    title: "Test",
  },
];
