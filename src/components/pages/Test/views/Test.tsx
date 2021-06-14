import TestAnimation from './TestAnimation';
import ButtonLoadingStart from './ButttonLoadingStart';
import { TextHeader, TextDescription } from '../shared/testPage.styled';

function Test() {
    return (
        <div className="App">
            <TextHeader>แบบทดสอบความถนัด</TextHeader>
            <TestAnimation />
            <TextDescription>
                แบบทดสอบนี้ทำขึ้นเพื่อ ... lorem ipsum is simply dummy text of the printing and typesetting industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </TextDescription>
            <ButtonLoadingStart />
        </div>
    );
}

export default Test;
