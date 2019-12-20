import React, { useState } from "react";
import {Form, Input} from 'reactstrap';
export default function SearchForm({query, handleInputChange}) {
 
  return (
    <section className="search-form">
        <Form className="search">
                  <Input
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    placeholder="search by name"
                    autoComplete="off"
                  />
                </Form>
    </section>
  );
}
