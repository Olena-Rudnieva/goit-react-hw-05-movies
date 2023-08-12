import { styled } from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 16px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  text-align: center;
`;

export const Name = styled.p`
  font-weight: bold;
`;
