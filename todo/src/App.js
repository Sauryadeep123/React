import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import React from 'react'
import AddTodos from './components/AddTodos';
import DisplayTodos from './components/DisplayTodos';
import DisplayCount from './components/DisplayCount';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Container>
           <DisplayCount/>
                <AddTodos/>
          <DisplayTodos/>
     </Container>
    </Provider>
  )
}

export default App