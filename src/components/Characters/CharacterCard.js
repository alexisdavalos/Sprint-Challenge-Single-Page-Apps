import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardImg 
  } from 'reactstrap';
import styled from 'styled-components';

export default function CharacterCard(props) {

  //styled components
  const NewCard = styled(Card)`
    width:30%;
    margin:3%;
    box-shadow: 6px 6px 20px 0px #000000ba;
    background: #000000ad !important;

  `
  const Title = styled(CardTitle)`
      font-weight:bold;
      color:#c81f26;
  `
  const Subtitle = styled(CardSubtitle)`
      color:white;
  `
  //styled components end

  return(
    <NewCard id="newCard">
        <CardBody>
          <CardImg top width="100%" src={props.data.image} alt={props.data.name} />
          <Title>{props.data.name}</Title>
            <Subtitle style={{color:"white"}}>Status: {props.data.status}</Subtitle>
            <Subtitle>Species: {(props.data.species !== "") ? props.data.species : `No Species`}</Subtitle>
            <Subtitle>Gender: {(props.data.gender !== "") ? props.data.gender : `No Gender`}</Subtitle>
            <Subtitle>Origin: {(props.data.origin.name !== "") ? props.data.origin.name : `No Origin`}</Subtitle>
           
        </CardBody>
      </NewCard>
  )
}
