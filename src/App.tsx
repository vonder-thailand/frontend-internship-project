import Routing from './routes/index';
import styled from 'styled-components';
import Burger from 'components/pages/Burger/Burger';
import Flexbox from 'shared/style/theme/Flexbox';
import Typography from 'shared/style/theme/Typograhy';

const Container = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    z-index: 0;
`;


const App = () => {
    return (
        <>
        {/* <Flexbox.Box align="center" justify="center">
            <Typography.Body>5555555</Typography.Body>
        </Flexbox.Box>
         */}
            <Burger />
        <Container>
            <Routing />
        </Container>
        </>
    );
};

export default App;
