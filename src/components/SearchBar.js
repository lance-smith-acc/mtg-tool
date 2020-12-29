import '../App.css'
import styled from 'styled-components'


export const SearchBar = props => {

  return (
        <Form>
            <Input type='text' onChange={e => props.handleChange(e)}
                onSubmit={e => {
                    e.preventDefault();
                    props.handleSubmit(e)}
                }
            />
            <Button type='button' onClick={e => {
                 e.preventDefault();
                props.handleSubmit(e)}
                }>Big Test Button</Button>
        </Form>
    )
}

const Form = styled.form`
height:20vh;
width:100%;
align-self:center;
text-align:center;
`
const Input = styled.input`
width:50%;
height:15%;
margin:1% 25%;
text-align:center;
font: 24px black Arial;
`

const Button = styled.button`
width:15%;
height:15%;
`