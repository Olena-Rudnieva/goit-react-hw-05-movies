import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;

export const List = styled.ul`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  min-height: 34px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const ListLink = styled.li`
  background-color: #ffffff;
  padding: 10px;
  border: 0;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  border-radius: 8px;

  &:hover {
    opacity: 1;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: #3f51b5;
`;
