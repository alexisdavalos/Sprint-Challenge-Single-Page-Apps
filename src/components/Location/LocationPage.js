import React from "react";
import Header from '../Header/Header';
import styled from 'styled-components';
import LocationList from "./LocationList";

const Wrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

export default function LocationPage() {
  return (
    <section className="welcome-page">
      <Wrapper>
         <Header title='Rick and Morty' heading='Locations'/>
      </Wrapper>
      <LocationList/>
    </section>
  );
}
