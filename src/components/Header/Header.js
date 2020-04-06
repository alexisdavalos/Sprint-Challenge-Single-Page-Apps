import React from 'react';
import styled from 'styled-components';
import {Badge} from 'reactstrap';
import {Link} from "react-router-dom";
import logo from '../../imgs/rick_n_morty_logo.png'

const HeadingWrapper = styled.div`
    background: ##1a8f95b3;
    padding: 3% 0;
    width:100%;
    display:flex;
    justify-content:center;
    background-color:#19888de8;
    margin-bottom:2%;
`
const Nav = styled.nav`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F606%2F606020.jpg&f=1&nofb=1');
  background-size:cover;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  padding: 1%;
`
const StyledLink = styled(Link)`
  text-decoration:none !important;
  color: black;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-weight:bold;
`

export default function Header(props) {
  return (
    <>
     <Nav>
      <img src={logo}></img>
      <LinkWrapper>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/characters'>Characters</StyledLink>
        <StyledLink to='locations'>Locations</StyledLink>
      </LinkWrapper>
    </Nav>
    <HeadingWrapper>
  <h1 style={{color:'white'}}><b>{props.title}</b><Badge style={{color:'white', backgroundColor:'#f17e1b'}}>{props.heading}</Badge></h1>
    </HeadingWrapper>
   </>
);

}
