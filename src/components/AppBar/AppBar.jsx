import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { MainPageLink, HeroAddPageLink, HeaderTitle } from "./AppBar.styled";

const HeaderAppBar = () => { 

  return (
    <>
      <AppBar position="sticky" component="header" sx={{
        fontfamily: 'Raleway',
        marginBottom: '60px',
      }}>
        <Container maxWidth={'sm'}>
          <Toolbar disableGutters aria-label="ToolBar"
            sx={{
              'justifyContent': 'space-between',
            }}
          >
              <HeaderTitle>Superhero App</HeaderTitle>
      <MainPageLink to="/" >
        Hero list
      </MainPageLink>
        <HeroAddPageLink to="/add">
          Add Hero
        </HeroAddPageLink>
          </Toolbar>  
          </Container>
      </AppBar>
      <Outlet />
      </>
  );
};

export default HeaderAppBar;