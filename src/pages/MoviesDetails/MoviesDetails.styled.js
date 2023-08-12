import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  background-color: #ffffff;
  padding: 10px;
  border: 0;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
  background-color: #3f51b5;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;

  &:hover {
    background-color: #13247e;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Subtitle = styled.h3`
  color: #3f51b5;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const AddWrapper = styled.div`
  background-color: rgba(63, 81, 181, 0.1);

  &::before {
    content: '';
    display: flex;
    width: 100%;
    height: 1px;
    background-color: #3f51b5;
  }

  &::after {
    content: '';
    display: flex;
    width: 100%;
    height: 1px;
    background-color: #3f51b5;
    margin-top: 10px;
  }
`;

export const AddTitle = styled.p`
  padding-left: 10px;
`;

export const AddLink = styled(Link)`
  color: #3f51b5;
  font-weight: bold;
  text-decoration-line: #3f51b5;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-left: 10px;

  &:hover {
    color: #13247e;
  }
`;
