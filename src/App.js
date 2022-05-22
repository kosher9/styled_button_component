import './App.css';
import styled from 'styled-components';

function App() {

  const StyleButton = styled.div`
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 16px;
    margin: 16px;
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;

// Think about how you will style your components

  return (
    <div className="App">
      <StyleButton>
        <h1>Hello World!</h1>
      </StyleButton>
    </div>
  );
}

export default App;
