import styled from 'styled-components';

export const CardTemplate = ({image_url, name, text}) => {
    if(image_url){
        return(
            <CardImage src={image_url} />
        )
    }
    else{
        return(
            <CardNoImage>
                <h1>{name}</h1>
                <p>{text}</p>
            </CardNoImage>
        )
    }
}

const CardImage = styled.img`
    height:3.5in;
    margin-top:1%;
`
const CardNoImage = styled.div`
    margin-top:1%;
    width:2.5in;
    height:3.5in;
    border:1px solid black;
`