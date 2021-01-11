import '../App.css'
import styled from 'styled-components'


export const SearchBar = props => {

  return (
        <Form>
            <Input type='text' 
                onChange={e => props.handleChange(e)}
                onSubmit={e => {
                    e.preventDefault();
                    props.handleSubmit(e)}
                }
            />
            <Button type='submit' onClick={e => {
                e.preventDefault();
                props.handleSubmit(e)}
            }>O</Button>
            <Button type='edit' onClick={e => {
                e.preventDefault(); 
                props.displayRefine()}
            }>R</Button>
        </Form>
    )
}

const Form = styled.form`
    margin:2% 0;
    height:3vh;
    width:100%;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Input = styled.input`
    width:25%;
    height:1.8rem;
`

const Button = styled.button`
    padding:.5rem;
    padding-left:.6rem;
    padding-right:.6rem;
`