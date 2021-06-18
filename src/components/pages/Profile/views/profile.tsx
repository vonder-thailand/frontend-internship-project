import { Link } from 'react-router-dom';
//import * as data from '../mocks/user.json';
// import useSWR from 'swr';
// import axios from 'axios';
import { API_Profile_Data } from '../apis/profile.api';
import { Form } from 'antd';
import { useEffect } from 'react';
import { IProfile } from '../shared/Profile.interface';
import { useState } from 'react';
import {
    Container,
    MoveCenter,
    AlignRight,
    ButtonSubmit,
    BgColor,
    TextUserInfo,
    TextTopic,
    TextUsername,
    ResultCard,
    UserImage,
    TextTopic2,
    AlignLeft,
    ResultImage,
    CardText,
    IconArrow,
    LinkResult
} from '../shared/Profile.styles';

//const { Content } = Layout;

function Profile() {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            console.log(response.name);
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    return (
        <div>
            <BgColor>
                <Container>
                    <MoveCenter>
                        <TextTopic>ข้อมูลส่วนตัว</TextTopic>
                        <UserImage src={cred.pic} />
                        <TextUsername>{cred.username}</TextUsername>
                    </MoveCenter>
                    <TextUserInfo>
                        ชื่อ-นามสกุล :
                        <AlignRight>
                            {cred.name} {cred.surname}
                        </AlignRight>
                    </TextUserInfo>
                    <TextUserInfo>
                        อีเมล : <AlignRight>{cred.email}</AlignRight>
                    </TextUserInfo>
                    <Link to="/editProfile">
                        <Form.Item>
                            <MoveCenter>
                                <ButtonSubmit>แก้ไขข้อมูลส่วนตัว</ButtonSubmit>
                            </MoveCenter>
                        </Form.Item>
                    </Link>
                    <TextTopic2>ผลลัพธ์จากแบบทดสอบ</TextTopic2>
                    <MoveCenter>
                        <LinkResult to="/">
                            <ResultCard>
                                <AlignLeft>
                                    <ResultImage src="https://www.datanovia.com/en/wp-content/uploads/2020/12/radar-chart-in-r-customized-fmstb-radar-chart-1.png" />
                                </AlignLeft>
                                <CardText>
                                    ลักษณะเด่นของคุณ
                                    <br />
                                    วันที่ 15 มิ.ย. 2564
                                </CardText>
                                <IconArrow />
                            </ResultCard>
                        </LinkResult>
                    </MoveCenter>
                    <TextTopic2>ประวัติการสร้างกระทู้</TextTopic2>
                </Container>
            </BgColor>
        </div>
    );
}

export default Profile;
