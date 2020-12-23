import './App.css';
import Whiteboard from './whiteboard'
import styled from 'styled-components';

function App() {

  const AppWrapper = styled.div`
    margin:0 auto;
    width:80%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:gray;
  `

  const Header = styled.header`
    width:70%;
    height:20vh;
    margin:0% 15%;
    background:slategrey;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `
  const Body = styled.body`
    width:70%;
    height:80vh;
    background:white;
    align-self:center;
  `

  return (
    <AppWrapper className="App">
      <Header className="App-header">
       <h1 className="Title">MTG Card Tool</h1>
       <Whiteboard />
      </Header>
      <Body>
          
      </Body>
    </AppWrapper>
  );
}

export default App;
