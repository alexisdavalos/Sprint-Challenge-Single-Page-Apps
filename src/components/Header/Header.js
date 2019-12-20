import React from 'react';
import styled from 'styled-components';
import {Badge} from 'reactstrap';
import {Link} from "react-router-dom";

const HeadingWrapper = styled.div`
    background: #ffffffd6;
    padding: 3% 0;
`

export default function Header(props) {
  return (
    <>
     <nav>
     <Link to='/'>Home</Link>
     <Link to='/characters'>Characters</Link>
     <Link to='locations'>Locations</Link>
    </nav>
    <HeadingWrapper>
      <h1>Rick and Morty <Badge color="danger">{props.heading}</Badge></h1>
    </HeadingWrapper>
   </>
);

}
