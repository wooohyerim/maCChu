import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBox>
      <Logo>
        ma<span>CC</span>hu
      </Logo>
      <ul>
        <li>리스트</li>
        <li>마이페이지</li>
        <li>카카오 로그인</li>
      </ul>
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
