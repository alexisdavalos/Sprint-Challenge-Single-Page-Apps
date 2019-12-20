import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import styled from 'styled-components';

const Paginations = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Pages = styled(Pagination)`
    display:flex;
    justify-content:center;
  `
  const AnchorLink = styled(PaginationLink)`
    background-color: #00000085;
    border: 1px solid #00000000;
    color:white;
  `
//   console.log(`This is loggin from Pagination.js`);
  console.log('these are the props in Paginations',props);
  console.log(props.charData);
  const nextPage = () =>{
      props.setNextPage(props.setNextPage);
    console.log(`This is loggin After NextPage Click`);
      console.log(props.charData);
  }
  const lastPage = () =>{
    if(props.charData.previous !== null){
        props.setNextPage(props.charData.previous);
    }
    console.log(`This is loggin After LastPage Click`);
      console.log(props.charData.previous);
  
}

if(props.charData.previous === null){ //if first page only render next button
  return (
    <Pages aria-label="Page navigation example">
      <PaginationItem>
        <AnchorLink last href="#" onClick={() => nextPage()} />
      </PaginationItem>
    </Pages>
  );//end return
}else if(props.charData.next === null){ //if last page only render last button
  return (
    <Pages aria-label="Page navigation example">
    <PaginationItem>
        <AnchorLink first href="#" onClick={() => lastPage()} />
      </PaginationItem>
    </Pages>
  );//end return
}else{ //otherwise render both
  return (
    <Pages aria-label="Page navigation example">
    <PaginationItem>
        <AnchorLink first href="#" onClick={() => lastPage()} />
      </PaginationItem>
      <PaginationItem>
        <AnchorLink last href="#" onClick={() => nextPage()} />
      </PaginationItem>
    </Pages>
  );//end return
}
 
}

export default Paginations;
