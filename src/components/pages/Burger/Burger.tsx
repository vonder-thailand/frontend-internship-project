import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import styled, { css } from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const Navbar = styled.div`
    background-color: #9696f1;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    z-index: 99;
`;
const Navmenu = styled.nav<{ active: 'active' | false }>`
    background-color: #9696f1;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: -500%;
    box-shadow: 5px 5px 5px #8080d4;
    transition: 850ms;
    z-index: 100;

    ${({ active }) => {
        if (active === 'active') {
            return css`
                left: 0;
                transition: 350ms;
                border-top-right-radius: 30px;
            `;
        }
    }}
`;
const Bar = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
`;
const ToggleClose = styled.li`
    background-color: #9696f1;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    border-top-right-radius: 30px;
`;
const Ul = styled.ul`
    width: 100%;
`;
const Listmenu = styled.li`
    &.nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 60px;
    }

    &.nav-text a {
        text-decoration: none;
        color: #ffffff;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-radius: 4px;
    }

    &.nav-text a:hover {
        background-color: #ffffff;
        color: black;
    }
`;

const Span = styled.span`
    margin-left: 16px;
`;

const Overlay = styled.div<{ active: 'active' | false }>`
    ${({ active }) => {
        if (active === 'active') {
            return css`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0c1066;
  opacity: 0.3;
  z-index: 1;
  `
    }}}
`

const Burger = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <Navbar>
                <Bar to="#">
                    <MenuOutlined style={{ color: '#ffffff' }} onClick={showSidebar} />
                </Bar>
            </Navbar>
            <Overlay active={sidebar ? 'active' : false}/>
            <Navmenu active={sidebar ? 'active' : false}>
                <Ul onClick={showSidebar}>
                    <ToggleClose>
                        <Bar to="#">
                            <CloseOutlined style={{ color: '#ffffff' }} />
                        </Bar>
                    </ToggleClose>
                    {Menu.map((item, index) => {
                        return (
                            <Listmenu key={index} className={item.cName}>
                                <Bar to={item.path}>
                                    {item.icon}
                                    <Span>{item.title}</Span>
                                </Bar>
                            </Listmenu>
                        );
                    })}
                </Ul>
            </Navmenu>
        </div>
    );
};

export default Burger;
