import { Outlet } from 'react-router-dom';
import { List, ListLink, StyledLink, Wrapper } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <List>
        <ListLink>
          <StyledLink to="/">Home page</StyledLink>
        </ListLink>
        <ListLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </ListLink>
      </List>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </div>
  );
};

export default Layout;
