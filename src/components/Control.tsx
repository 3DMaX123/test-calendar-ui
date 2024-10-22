import React from 'react'
import "../styles/control.css";
import SearchUi from "./SearchUi";
import UserUi from "./UserUi";

const Control = () => {
  return (
    <div className='control'>
        <SearchUi />
        <UserUi />
    </div>
  )
}

export default Control