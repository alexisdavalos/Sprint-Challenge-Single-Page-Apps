import React, { useState } from "react";
import {Form, Input, Label} from 'reactstrap';
export default function SearchForm({query, handleInputChange}) {
 
  return (
    <section className="search-form">
        <Form key='search' name='search' id='search' className="search">
                  <Input
                    type="text"
                    name='character'
                    id='character'
                    placeholder="Search"
                    value={query}
                    onChange={handleInputChange}
                  />
                </Form>
    </section>
  );
}
