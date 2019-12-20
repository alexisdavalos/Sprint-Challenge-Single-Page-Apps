import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Spinner} from 'reactstrap';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';
import SearchForm from '../SearchForm/SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charData, setCharData] = useState([]);
  const [page, setNextPage] = useState('https://rickandmortyapi.com/api/character/')
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(page)
    .then(response =>{
      console.log(`Response From API: \n`, response)
      const data = response.data.results;
      //filter data from endpoint
      const result = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
        );
      setCharData(result)
    })
  }, [query]);

  const handleInputChange = e =>{
    setQuery(e.target.value);
  }
  
  //styled components
  const Container = styled.div`
       display:flex;
       justify-content:center;
       flex-wrap:wrap;
    `
    const Wrapper = styled.div`
        width:80%;
        margin: 0 auto;
    `
    const CharCard = styled(CharacterCard)`
        width: 33%;
    `
    const Loader = styled.div`
        display:flex;
        justify-content:center;
        align-item:center;
        padding:10%;
    `
  //styled components end
  return (
    <section className="character-list">
      <Wrapper>
      <SearchForm handleInputChange={handleInputChange} query={query}/>
            <Container>
                   {/* //pass character data into CharacterCard Component */}
                {charData.map((item,index) =>{
                    // console.log('This is a Card Item', item)
                    return <CharCard key ={item.url} data={item}/>
                })}   
            </Container>
            {/* <Paginations page={page} setNextPage={setNextPage} charData={charData}/> */}
        </Wrapper>
    </section>
  );
}
