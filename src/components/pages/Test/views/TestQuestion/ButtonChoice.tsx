import { ButtonChoiceStlyed, ContainerButton } from '../../shared/styles/testQuestion.styled';
import { SmileFilled, MehFilled, FrownFilled } from '@ant-design/icons';
import useTest from './useTest';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Spin } from 'antd';

function ButtonChoice() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //

    const history = useHistory();
    const [isLoading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const fetchData = () => {
        console.log(isLoading);
        setLoading(true);
        setIsModalVisible(true);
        setTimeout(() => {
            console.log('set Loading:', isLoading);
            setLoading(false);
            history.push('/result');
        }, 1500);
    };

    const { setValueTest } = useTest();
    

    return (
    <>
        {isLoading ? (
            <Modal title="Basic Modal" visible={isModalVisible} >
                 <Spin size="large" />
            </Modal>

        ) :
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
            <ButtonChoiceStlyed onClick={fetchData} >
                ส่งคำตอบ
            </ButtonChoiceStlyed>
        </ContainerButton>

        }
    </>
    
    );
}

export default ButtonChoice;
