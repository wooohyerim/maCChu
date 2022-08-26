import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBox>
      {/* <h1>
        <Logo src="/images/macchu_logo.png" alt="" />
      </h1> */}
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
  background-color: #eee;
  font-size: 14px;
  line-height: 2;
`;

const Logo = styled.img`
  width: 200px;
`;

const CopyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  color: #ccc;
`;
