import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import styled from '@emotion/styled';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';
import Home from '../layouts/Home';
import Classroom from '../layouts/Classroom';
import StudentCorner from '../layouts/StudentCorner';
import TLM from '../layouts/TLM';
import LatestUpdates from '../layouts/LatestUpdates';
import Auth from '../layouts/Auth';

const Main = styled.div`
  overflow: inherit;
  // height: 80%;
  // width: 100%;
`;

export const Slsc = () => {
  const [ extraClass, setExtraClass] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      var scroll = window.pageYOffset;
      if (scroll > 0) {
        setExtraClass(true);
      }
      else {
        setExtraClass(false);
      }
    }
  }, []);

  return (
    <Main >
      <Header extraClass={extraClass}/>
      {/* Routes is wrapper over useRoutes hook in react Router v6*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classroom" element={<Classroom />} />
        <Route path="student" element={<StudentCorner />} />
        <Route path="teacher" element={<TLM />} />
        <Route path="updates" element={<LatestUpdates />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
      <Footer />
    </Main>
  );
}