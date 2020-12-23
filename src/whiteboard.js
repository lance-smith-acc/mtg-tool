
import './App.css';
import styled from 'styled-components'

export default function Whiteboard() {

    return(
        <WhiteboardWrapper>
            <h2 className="WhiteboardTitle">Whiteboard</h2>
            <h3>Things to Do</h3>
            <ul>
                <li>Make a search bar</li>
                <li>Make API Calls</li>
                <li>Make a card object</li>
                <li>Display card objects</li>
            </ul>
        </WhiteboardWrapper>
    )
}

const WhiteboardWrapper = styled.div`
width:100%;
height:100%;
padding-top:2%;
justify-content:center;
background:papayawhip;
align-items:center;
text-align:center;
`