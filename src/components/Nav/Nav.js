import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBox>
      <Logo>
        ma<span>CC</span>hu
      </Logo>
      <NavList>
        <Link to="/list">리스트</Link>
        <Link to="/">마이페이지</Link>
        <li>카카오 로그인</li>
      </NavList>
    </NavBox>
  );
};

export default Nav;

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: #e4971c;
`;

const Logo = styled.h1`
  font-size: 20px;
  color: #fff;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
  color: #fff;
`;
