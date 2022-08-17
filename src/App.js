import React from "react";
import Create from "./pages/Create";
import Main from "./pages/Main";
import Nav from "./ui/Nav";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import View from "./pages/View";

const App = () => {
  return (
    <>
      <Router>
        <AppContainer>
          <Nav/>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/view/:id" element={<View/>}></Route>
          </Routes>
        </AppContainer>
      </Router>
    </>
  );
};

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
