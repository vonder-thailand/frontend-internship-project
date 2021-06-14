import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";
import styled, { css } from "styled-components";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = styled.div`
  background-color: #060b26;
  height: 80px;

  display: flex;
  justify-content: start;
  align-items: center;
`;
const Navmenu = styled.nav<{ active: "active" | false }>`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  ${({ active }) => {
    if (active === "active") {
      return css`
          left: 0;
          transition: 350ms;
      `
    }
  }} 
`;
const Bar = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`;
const ToggleClose = styled.li`
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
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
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  &.nav-text a:hover {
    background-color: #1a83ff;
  }
`;

const Span = styled.span`
  margin-left: 16px;
`;

const Burger = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Navbar>
        <Bar to="#">
          <MenuOutlined onClick={showSidebar} />
        </Bar>
      </Navbar>
      <Navmenu active={sidebar ? "active": false }>
        <Ul onClick={showSidebar}>
          <ToggleClose>
            <Bar to="#">
              <CloseOutlined />
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
