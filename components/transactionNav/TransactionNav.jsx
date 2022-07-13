import React, { useState, useRef } from 'react'
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../../Queries/queries'

const TransactionNav = ({searchHandler}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    searchHandler(query)
    setQuery('')
  }

  return (
    <div className="tranc-nav">
        <div className="navLeft">
            <img src="/trancIcon.png" alt="" />
            <h3>Mx Mart</h3>
        </div>
        <div className="navRight">
            <input 
              type="text" 
              value={query}
              placeholder="search by Username" 
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" onClick={ handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default TransactionNav