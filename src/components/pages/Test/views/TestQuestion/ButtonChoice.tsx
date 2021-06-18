import { ButtonChoiceStlyed, ContainerButton } from '../../shared/styles/testQuestion.styled';
import { SmileFilled, MehFilled, FrownFilled } from '@ant-design/icons';
import useTest from './useTest';

function ButtonChoice() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //

    const { setValueTest } = useTest();
    

    return (
    <>
            <ContainerButton>
            <ButtonChoiceStlyed onClick={setValueTest.bind(null, 3)} icon={<SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} />}>
                ใช่มาก
            </ButtonChoiceStlyed>
            <ButtonChoiceStlyed onClick={setValueTest.bind(null, 2)} icon={<MehFilled style={{ fontSize: '20px', paddingRight: '25px', color: '#FFF566' }} />}>
                ใช่
            </ButtonChoiceStlyed>
            <ButtonChoiceStlyed onClick={setValueTest.bind(null, 1)} icon={<MehFilled style={{ fontSize: '20px', paddingRight: '10px', color: '#FFF566' }} />}>
                น้อย
            </ButtonChoiceStlyed>
            <ButtonChoiceStlyed onClick={setValueTest.bind(null, 0)} icon={<FrownFilled style={{ fontSize: '20px', color: '#FFF566' }} />}>
                ไม่เลย
            </ButtonChoiceStlyed>
        </ContainerButton>

    </>
    
    );
}

export default ButtonChoice;
