import React from 'react';
import Routing from './routes/index';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Theme from 'shared/style/theme/theme';
import GlobalStyle from 'shared/style/theme/globalStyle';

const NavLink_custom = styled(NavLink)`
    margin: 0;
    padding: 0;
    font-family: ${({ theme: { fonts } }) => fonts.sans};
    font-weight: bolder;
    height: 50px;
    width: 130px;
    justify-content: center;
`;

const Container_App = styled.div`
@media (min-width: ${({
      theme: {
        breakPoints: { mobileS }
      }
    }) => mobileS}) {
    fontSize: ${({ theme: { fontSizes } }) => `${fontSizes[1]}px` }
  }
    display: flex;
    flex-direction: column;
`;

const App = () => {
  return (
      <>
      <GlobalStyle/>
    <Theme>
    <Container_App className="my-app">
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-menu">
                <div className="navbar-end">
                    <NavLink_custom exact to="/" activeClassName="is-active" className="navbar-item">
                        Home
                    </NavLink_custom>
                    <NavLink_custom exact to="/board" activeClassName="is-active" className="navbar-item">
                        Board
                    </NavLink_custom>
                    <NavLink_custom exact to="/profile" activeClassName="is-active" className="navbar-item">
                        Profile
                    </NavLink_custom>
                    <NavLink_custom exact to="/login" activeClassName="is-active" className="navbar-item">
                        Login
                    </NavLink_custom>
                    <NavLink_custom exact to="/register" activeClassName="is-active" className="navbar-item">
                        Register
                    </NavLink_custom>
                </div>
            </div>
        </div>
    </nav>
    <Routing />
</Container_App>
</Theme>
</>
  );
}

export default App;
