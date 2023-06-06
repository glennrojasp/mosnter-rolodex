import ReactFragment from "react";

import './search-box.style.css';

export const SearchBox = ({placeHolder, handlerChange}) =>  (
    <input 
        className = "search"
        type="search" 
        placeholder={placeHolder} onChange={handlerChange}/>
);