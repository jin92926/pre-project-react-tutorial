import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const ChangeValueButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const incrementClick = () => {
    setCounter(counter + 1);
  };

  const decrementClick = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{counter}</span>
        <ButtonWrapper>
          <ChangeValueButton
            aria-label="Increment value"
            onClick={incrementClick}
          >
            +
          </ChangeValueButton>
          <ChangeValueButton
            aria-label="Decrement value"
            onClick={decrementClick}
          >
            -
          </ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
