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
    margin:1% 0;
    height:8vh;
    width:100%;
    align-self:center;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`
const Input = styled.input`
    width:25%;
    height:30%;
    text-align:center;
    font: 24px black Arial;
`

const Button = styled.button`
    padding:.2%;
    text-align:center;
    margin:0 auto;
`