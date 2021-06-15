import { Spin } from 'antd';
import { useState } from 'react';
import { ButtonLoading, IsLoadingSpinner, TextIsLoading } from '../shared/testPage.styled';

function ButtonLoadingStart() {
    const [isLoading, setLoading] = useState(false);

    const fetchData = () => {
        console.log(isLoading);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
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
