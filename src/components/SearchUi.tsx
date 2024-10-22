import React from "react";
import "../styles/search-ui.css";
import images from '../constants/images';

const SearchUi = () => {
  return (
    <div className="searchUi">
        <img className="searchUi" src={images.search} alt='Search' width={16} height={16}/>
        <input className="input" type="text" placeholder="Search transactions, invoices or help" />
    </div>
  )
}

export default SearchUi