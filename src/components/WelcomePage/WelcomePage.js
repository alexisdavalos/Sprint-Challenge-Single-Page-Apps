import React from "react";
import Header from '../Header/Header'
import styled from 'styled-components';

const Section = styled.section`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

export default function WelcomePage() {
  return (
    <>
    <Header title='Rick and Morty'/>
    <Section className="welcome-page">
        <h1>Ultimate Rick and Morty Fan Page</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </Section>
    </>
  );
}
