import React, { useState, useRef } from 'react'
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../../Queries/queries'

const TransactionNav = (props) => {
  const inputEl = useRef("")
  const {loading, error, data} = useQuery(GET_DATA);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = data.getData.filter((data) => {
      return data.data.search(value) != -1;
    });
    setFilteredData(data);
  }

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <div className="tranc-nav">
        <div className="navLeft">
            <img src="/trancIcon.png" alt="" />
            <h3>Mx Mart</h3>
        </div>
        <div className="navRight">
            <input 
              ref={inputEl}
              type="text" 
              placeholder="search by Username" 
              onChange={getSearchTerm}
            />
            <button type="button" onClick={(e) => handleSearch(e)}>Search</button>
        </div>
    </div>
  )
}

export default TransactionNav