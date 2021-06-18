import { useState, useEffect, useCallback, useContext } from 'react';
import { API_Profile_Data } from '../apis/profile.api';
//import * as data from '../mocks/user.json';
import { IProfile } from '../shared/Profile.interface';
import { Form } from 'antd';
import { Container, MoveCenter, ButtonSubmit, BgColor , FormInput , UserImage , TextTopic , TextUserInfo} from '../shared/Profile.styles';
//import { ProfileContext, ProfileProvider } from '../shared/ProfileContext';

//const { Content } = Layout;

function EditProfile() {
    const [cred, setCred] = useState<IProfile>({ name: '', surname: '', email: '', result: '', pic: '', username: '' });
    const [userName, setUserName] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    // setUserName(cred.username);
    // setName(cred.name);
    // setSurname(cred.surname);
    // setEmail(cred.email);
    const handleOnChange = (name: string , value: string) => {
        setCred(prev => ({...prev , [name]: value}));
        console.log(cred.username) 
    }

    const editedUser = () => {
        console.log(cred)
    }

    // useEffect(() => {
    //     setUserName(cred.username);
    //     console.log(userName);
        
    // }, []);

    async function getStatisticData() {
        const response = await API_Profile_Data();
        if (response) {
            setCred((prevState) => ({ ...prevState, name: response.name, surname: response.surname, email: response.email, result: response.result, pic: response.pic, username: response.username }));
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatisticData();
    }, []);

    // const { addUser } = useContext(ProfileContext);
    // const [userName, setUserName] = useState<string>('');
    // const [name, setName] = useState<string>('');
    // const [surname, setSurname] = useState<string>('');
    // const [email, setEmail] = useState<string>('');

    // const addUserToList = useCallback(() => {
    //     addUser({ userName, name, surname, email });
    //     setUserName('');
    //     setName('');
    //     setSurname('');
    //     setEmail('');
    // }, [addUser, userName, name, surname, email]);

    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not a valid email!',
    //         number: '${label} is not a valid number!',
    //     },
    //     number: {
    //         range: '${label} must be between ${min} and ${max}',
    //     },
    // };
    // {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
    // const Demo = () => {
    //     const onFinish = (values: any) => {
    //         console.log(values);
    //     };

    return (
        <div>
            <BgColor>
                <Container>
                    <MoveCenter>
                        <TextTopic>แก้ไขข้อมูลส่วนตัว</TextTopic>
                        <UserImage src={cred.pic}/>
                        <form>
                            <TextUserInfo>ชื่อผู้ใช้</TextUserInfo>
                            <FormInput name="username" value={cred.username} onChange={({ target: { value , name } }) => {handleOnChange( name , value )}} />
                            <TextUserInfo>อีเมล</TextUserInfo>
                            <FormInput name="email" value={cred.email} onChange={({ target: { value , name } }) => {handleOnChange( name , value )}} disabled/>
                            <TextUserInfo>ชื่อจริง</TextUserInfo>
                            <FormInput name="name" value={cred.name} onChange={({ target: { value , name } }) => {handleOnChange( name , value )}} />
                            <TextUserInfo>นามสกุล</TextUserInfo>
                            <FormInput name="surname" value={cred.surname} onChange={({ target: { value , name } }) => {handleOnChange( name , value )}} />
                        </form>
                        <br />
                        <Form.Item>
                            <ButtonSubmit onClick={editedUser}>ยืนยันการเปลี่ยนแปลง</ButtonSubmit>
                        </Form.Item>
                    </MoveCenter>
                </Container>
            </BgColor>
        </div>
    );
}

export default EditProfile;
