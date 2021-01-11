import React,{useState} from 'react';
import './App.css';
import Whiteboard from './whiteboard'
import styled from 'styled-components';
import {SearchBar} from './components/SearchBar';
import {CardTemplate} from './components/cardTemplate'

function App() {

  // State for searching for cards
  const [cardName, setCard] = useState('')
  const [cardData, setData] = useState([])
  const mtg = require('mtgsdk')

  // Change handler for search form
  const handleChange = e => {
    setCard(e.target.value);
    console.log(cardName);
  }
  
  // Submission handler for search form
  const handleSubmit = async a => {
    a.preventDefault();
    setData([])
    mtg.card.where({name:cardName})
    .then(cards => {
        console.log('made it to promise')
        console.log(cards)
        let filteredCards = cards.filter( (ele, ind) => ind === cards.findIndex(elem => elem.name === ele.name && elem.manaCost === ele.manaCost))
        setData(filteredCards)
        console.log(filteredCards)
    })
    console.log(`test success \n${cardData}`)
  }

  // Refine search handler
  const [refine, setRefine] = useState(false)
  const displayRefine = e => {
    setRefine(!refine)
    console.log(refine)
  }


  return (
    <Container className="App">
      
      <Header className="App-header">
       <h1 className="Title">MTG Card Tool</h1>
      </Header>

      <SearchContainer>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} displayRefine={displayRefine}/>
        
        {refine && 
          <RefinePanel>Refine Panel</RefinePanel>
        }

        <CardContainer>
          {cardData.length > 0 &&
              cardData.map(card => (
              <CardTemplate name={card.name} text={card.text} image_url={card.imageUrl} />
            ))
          }
        </CardContainer>
        
      </SearchContainer>
      <Footer>Copyright Lance Smith 2020</Footer>
        
    </Container>
  );
}

export default App;

const Container = styled.div`
    width:80%;
    margin-left:5%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:rgba(255, 255, 255, 0.5);
    border-radius:1rem;
  `

  const Header = styled.header`
    height:5vh;
    width:100%;
    margin:0 auto;
    padding-top:1%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:rgba(255, 255, 255, 0.45);
    border-radius:1rem 1rem 0 0;
  `

  const Footer = styled.footer`
    padding:1%;
    text-align:center;
    background-color:rgba(255, 255, 255, 0.1);
    border-radius:0 0 1rem 1rem;
  `

  const SearchContainer = styled.div`
    width:100%;
    height:100%;
    margin:0 auto;
    background-color:rgba(255, 255, 255, 0.30);
  `

  const CardContainer = styled.div`
    width:95%;
    padding:1% 0 1%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
  `

  const RefinePanel = styled.div`
    position:absolute;
    top:0;
    right:0;
    width:15%;
    height:100%;
    background:white;
  `
