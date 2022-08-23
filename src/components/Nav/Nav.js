import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavBox>
      <h1
        onClick={() => {
          navigate('/');
        }}
      >
        <Logo src="/images/macchu_logo.png" alt="" />
      </h1>
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
  height: 50px;
  padding: 20px;
  background-color: #e4971c;
  color: #fff;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const Logo = styled.img`
  width: 135px;
`;
