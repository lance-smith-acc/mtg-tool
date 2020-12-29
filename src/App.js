import React,{useState, useEffect} from 'react';
import './App.css';
import Whiteboard from './whiteboard'
import styled from 'styled-components';
import {SearchBar} from './components/SearchBar';
import {CardTemplate} from './components/cardTemplate'

function App() {

  const [cardName, setCard] = useState('')
  const [cardData, setData] = useState([''])
  const mtg = require('mtgsdk')

  const handleChange = e => {
    setCard(e.target.value);
    console.log(cardName);
  }
  
  const handleSubmit = async a => {
    a.preventDefault();
    mtg.card.where({name:cardName})
    .then(cards => {
        console.log('made it to promise')
        console.log(cards)
        setData(cards)
    })
    console.log(`test success \n${cardData}`)
  }

  return (
    <AppWrapper className="App">
      <Header className="App-header">
       <h1 className="Title">MTG Card Tool</h1>
       <Whiteboard />
      </Header>
      <Body>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        { cardData.map(card => (
          <CardTemplate name={card.name} text={card.text} image_url={card.imageUrl} />
        ))
          }
      </Body>
    </AppWrapper>
  );
}

const AppWrapper = styled.body`
    margin:0 auto;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background:gray;
  `

  const Header = styled.header`
    width:90%;
    height:20vh;
    margin:0 auto;
    background:slategrey;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  `
  const Body = styled.div`
    width:90%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    background:white;
    margin:0 auto;
    justify-content:space-around;
  `

export default App;
