import React from 'react';
import Routing from './routes/index';
import styled from 'styled-components';
import Burger from 'components/pages/Burger';

const Container_App = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
`;

const App = () => {
  return (
    <Container_App className="my-app">
    <Burger />
    <Routing />
</Container_App>
  );
}

export default App;
