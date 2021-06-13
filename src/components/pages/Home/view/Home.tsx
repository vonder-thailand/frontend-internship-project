/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { API_getStatistics } from '../apis/home.api';
import { useHistory } from 'react-router-dom';
import { Input, Row, List } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { SearchField, TagFilter, ButtonTagFilter, ImageTestPage, TextBoard, ButtonSeeAllBoard, ListItemBoard } from '../shared/homepage.styles';

const { Search } = Input;
const onSearch = (value: any) => console.log(value);

const tagsData = ['Linguistic', 'Mathematical', 'Musical', 'Visual-Spatial', 'Naturist', 'Bodily-Kinesthetic', 'Interpersonal', 'Intrapersonal'];

//
// ─── Set interface ───────────────────────────────────────────────────────────────────
//
interface IListData {
    href: string;
    title: string;
    avatar: string;
    image: string;
    description: string;
}
interface IIconText {
    icon: React.ForwardRefExoticComponent<any>;
    text: string;
}

const listData: Array<IListData> = [];
for (let i = 1; i < 10; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `แนะนำกระทู้เรียน ${i}`,
        avatar: 'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.6435-9/59064493_437047506858059_6394542383404417024_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=aMf0eSHrFroAX87NAZJ&tn=CeGl5CLqXgfyZu7t&_nc_ht=scontent.fbkk12-1.fna&oh=2b1b5b5642904a40a58edd5a57f17a7e&oe=60CB2D93',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        description: 'Coming soon ... บทความ  สายวิทย์-คณิต  วิศวะ  หนังสือ',
    });
}

const IconText = ({ icon, text }: IIconText) => (
    <SearchField>
        {React.createElement(icon)}
        {text}
    </SearchField>
);

function Home() {
    //get Data from home.api
    async function getStatictisData() {
        const response = await API_getStatistics();
        if (response.success) {
            console.log(response.data);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getStatictisData();
    }, []);

    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();

    return (
        <div className="App">
            <SearchField>
                <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 250 }} />
            </SearchField>
            <TagFilter className="site-button-ghost-wrapper">
                <ButtonTagFilter type="primary" ghost>
                    {tagsData[0]}
                </ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[1]}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[2]}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[3]}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[4]}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[5]}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[6]}</ButtonTagFilter>
                <ButtonTagFilter ghost>{tagsData[7]}</ButtonTagFilter>
            </TagFilter>
            <div>
                <ImageTestPage className="center" onClick={() => history.push('/test')} src="https://miro.medium.com/max/1838/1*QOXeKdR7RUeD4TvC070sbA.png" />
            </div>
            <Row>
                <TextBoard xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    กระทู้
                </TextBoard>
                <TextBoard xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <ButtonSeeAllBoard onClick={() => history.push('/board')}>ดูทั้งหมด</ButtonSeeAllBoard>
                </TextBoard>
            </Row>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={listData}
                renderItem={(item) => (
                    <ListItemBoard
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="199" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="150" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                    >
                        <div>
                            <List.Item.Meta avatar={<img src={item.avatar} width={100} />} title={<a href={item.href}>{item.title}</a>} description={item.description} />
                        </div>
                    </ListItemBoard>
                )}
            />
        </div>
    );
}

export default Home;
