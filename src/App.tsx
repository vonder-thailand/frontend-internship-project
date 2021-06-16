import Routing from './routes/index';
import styled from 'styled-components';
import Burger from 'components/pages/Burger/Burger';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;
const Container = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;
const MainContent = styled(Content)`
    height: calc(100vh - 80px);
    width: 100%;
    margin-top: 80px;
    overflow-y: scroll;
`;

const App = () => {
    return (
        <>
            <Container>
                <Burger />
                <MainContent>
                    <Routing />
                </MainContent>
            </Container>
        </>
    );
};

export default App;
