import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavBox>
      <Logo
        onClick={() => {
          navigate('/');
        }}
      >
        ma<span>CC</span>hu
      </Logo>
      <NavList>
        <li
          onClick={() => {
            navigate('/list');
          }}
        >
          리스트
        </li>
        <li
          onClick={() => {
            navigate('/mypage');
          }}
        >
          마이페이지
        </li>
        <li>로그인</li>
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
  padding: 10px;
  background-color: #e4971c;
  color: #fff;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Logo = styled.h1`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'SBAggroB';
  font-size: 25px;

  span {
    color: #e72e2e;
  }
`;
