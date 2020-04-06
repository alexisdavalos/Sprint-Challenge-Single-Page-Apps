import React, { useState } from "react";
import {Form, Input, Label} from 'reactstrap';
import styled from 'styled-components';
const SearchForm = ({query, handleInputChange}) =>{
  const Wrapper = styled.div`
  width:50%;
  margin: 0 auto;
`
  return (
        <Form style={{width:"50%", margin:"0 auto"}}key='searchForm' name='search' id='search' className="search">
                  <Input
                    key='searchField'
                    type="text"
                    name='searchField'
                    id='searchField'
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                  />
                </Form>
  );
}

export default SearchForm;