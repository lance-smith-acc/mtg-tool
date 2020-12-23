import {useState} from 'react';
import '../App.css'
import styled from 'styled-components'


export default function SearchBar() {

  const [card, setCard] = useState('')

  const handleChange = e => {
    setCard(e.target.value);
    console.log(card);
  }
  
  return (
        <Form>
            <Input type='text' value={card} onChange={e => handleChange(e)} />
            <p>{card}</p>
        </Form>
    )
}

const Form = styled.form`
height:15vh;
width:100%;
align-self:center;
text-align:center;
`
const Input = styled.input`
width:50%;
height:30%;
margin-top:.5%;
`