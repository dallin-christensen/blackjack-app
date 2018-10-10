import React, { Component } from 'react';
import './App.css';
import Table from './components/Table/Table'
import styled from 'react-emotion'

const Container = styled('div')`
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Table />
      </Container>
    );
  }
}

export default App;
