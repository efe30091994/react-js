import React from "react";
import {InputGroup,FormControl} from "react-bootstrap";

const Search = ({handleInput, search}) =>{
    return  <InputGroup size="lg">
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Searching"  onChange={handleInput} onKeyPress={search}/>
    </InputGroup>
}

export default Search;
