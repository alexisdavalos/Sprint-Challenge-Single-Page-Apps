import React from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardImg 
  } from 'reactstrap';
import styled from 'styled-components';

export default function LocationCard(props) {

  //styled components
  const NewCard = styled(Card)`
    width:25%;
    margin:3%;
    box-shadow: 6px 6px 20px 0px #000000ba;
    background: #97ce4cc2 !important;

  `
  const Title = styled(CardTitle)`
      font-weight:bold;
      color:#02afc5;
  `
  const Subtitle = styled(CardSubtitle)`
      color:white;
  `
  //styled components end

  return(
    <NewCard id="newCard">
        <CardBody>
          <Title>{props.data.name}</Title>
            <Subtitle style={{color:"white"}}>Type: {props.data.type}</Subtitle>
            <Subtitle>Dimension: {(!props.data.dimension) ? props.data.dimension : `No Dimension`}</Subtitle>
           
        </CardBody>
      </NewCard>
  )
}
