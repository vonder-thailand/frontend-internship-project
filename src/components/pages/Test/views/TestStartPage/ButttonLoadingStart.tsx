import { Spin } from 'antd';
import { useState } from 'react';
import { ButtonLoading, IsLoadingSpinner, TextIsLoading } from '../../shared/styles/testPage.styled';
import { useHistory } from 'react-router-dom';

function ButtonLoadingStart() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        console.log(isLoading);
        setLoading(true);
        setTimeout(() => {
            console.log('set Loading:', isLoading);
            setLoading(false);
            history.push('/testquestion');
        }, 1500);
    };

    return (
        <div>
            {isLoading ? '' : <ButtonLoading onClick={fetchData}>เริ่มการทดสอบ</ButtonLoading>}
            {isLoading ? (
                <IsLoadingSpinner>
                    <TextIsLoading>Fetching Data</TextIsLoading>
                    <Spin size="large" />
                </IsLoadingSpinner>
            ) : (
                ''
            )}
        </div>
    );
}

export default ButtonLoadingStart;
