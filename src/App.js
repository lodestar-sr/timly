import AppBar from 'components/AppBar';
import Boards from 'components/Boards';
import React from 'react';
import {Container} from 'react-bootstrap';
import './App.scss';

function App() {
  return (
    <div>
      <AppBar/>
      <Container>
        <Boards/>
      </Container>
    </div>
  );
}

export default App;
