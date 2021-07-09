import React from 'react';
import styled from '@emotion/styled';
import image from '../../icons/comingsoon2.jpg';

const Img = styled.img`
  margin-top: 10em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  overflow-y: hidden;
`;

const Classroom = () => {
  return (
    <Img src= {image} />
  );
};

export default Classroom;