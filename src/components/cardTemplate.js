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
    width:30%;
    height:100%;
`
const CardNoImage = styled.div`
    width:30%;
    height:100%;
    border:1px solid black;
`