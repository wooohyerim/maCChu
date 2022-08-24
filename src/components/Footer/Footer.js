import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBox>
      <Logo>{/* <img src="/images/" alt=""> */}</Logo>
      <CopyBox>
        <div>Copyright &copy; 2022 maCChu. All Rights Reserved.</div>
        <div>
          본 사이트는 미니 프로젝트 목적으로 제작되어 상업적 목적이 아님을
          밝힙니다.
        </div>
      </CopyBox>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  width: 100%;
  height: 200px;
  padding: 10px;
  border-top: 1px solid #e6e6e6;
  /* background-color: #e4971c; */
  font-size: 14px;
  line-height: 2;
`;

const Logo = styled.h1`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  color: #fff;
  font-family: 'SBAggroB';
  font-size: 30px;
`;

const CopyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  color: #333;
`;
