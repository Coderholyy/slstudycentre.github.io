import React from 'react';
import styled from '@emotion/styled';
import { NavigationBar } from '../../components/NavigationBar';
import logo from '../../icons/logowhite.jpg';

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  border-radius: 50%;
  position: relative;
  padding: 0 24px;
`;

const Brand = styled.h2`
  color: white;
`;

const Head = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;
  background-color: #0C090A;
  colour: white;
  width: 100%;
  box-shadow: ${props => props.extraClass ? '0 2px 4px 0 rgba(0, 0, 0, 0.1)' : ''};
  justify-content: space-between;
`;

export const Header = ({ extraClass }) => {
  return (
    <Head extraClass={extraClass} >
      <BrandContainer>
        <Logo src = {logo} />
        <Brand>SL STUDY CENTRE</Brand>
      </BrandContainer>
      <NavigationBar />
    </Head>
  );
}