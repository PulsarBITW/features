import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinksContainer = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
  margin: 30px auto;
  gap: 30px;
  border: 3px solid #166bf5;
  padding: 20px;
  border-radius: 10px;
`;

export const CustomLink = styled(Link)`
  color: #5091fa;
  font-size: 20px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
