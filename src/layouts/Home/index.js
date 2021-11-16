import React from 'react';
import styled from '@emotion/styled';
import video from '../../videos/video-1.mp4';
import { NotFoundComponent } from '../../lotteComponents/NotFound';

const Body = styled.div`
  overflow: inherit;
  background-color: #004f52;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  color: white;
  flex-direction: column;
  position: relative;
  // padding-top: 68px;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 35%;
  top: 20%;
`;

const BodyText = styled.h1`
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodySubText = styled.h4`
  position: absolute;
  top: 47%;
  left: 37%;
  font-size: 1.5em;
`;

const Home = () => {
  return (
    <>
      <Body>
        <Video
          autoPlay
          loop
          muted
          src = {video}
          type = "video/mp4"
        />
        <TextWrapper>
          <BodyText>Easy & Efficient Learning</BodyText>
          <BodySubText>SignUp to learn more content</BodySubText>
        </TextWrapper>        
      </Body>
      <h2>About Us</h2>
      <h2>Stay Tuned for Online Video Tutorials</h2>
      <NotFoundComponent />
      </>
  );
};

export default Home;
