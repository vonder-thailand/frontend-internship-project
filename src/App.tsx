import Routing from './routes/index';
import styled from 'styled-components';
import Burger from 'components/pages/Burger/Burger';

const Container = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const App = () => {
    return (
        <Container>
            <Burger />
            <Routing />
        </Container>
    );
};

export default App;
