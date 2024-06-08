import React from "react";
import { PAGES } from "../../Routes";
import { CustomLink, LinksContainer } from "./styled";

export const MainPage = () => {
  console.log(Object.values(PAGES));
  return (
    <div>
      <h1> Главная страница</h1>
      <LinksContainer>
        {Object.values(PAGES).map((el) => (
          <CustomLink to={el.url} key={el.url}>
            {el.title}
          </CustomLink>
        ))}
      </LinksContainer>
    </div>
  );
};
