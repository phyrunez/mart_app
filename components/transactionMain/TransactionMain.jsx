import React, { useEffect, useState } from 'react'
import TransactionNav from '../transactionNav/TransactionNav'
import TransactionFilter from '../transactionFilter/TransactionFilter'
import TransactionData from '../transactionData/TransactionData'
import { useLazyQuery } from '@apollo/client';
import { GET_DATA } from '../../Queries/queries'


const TransactionMain = () => {
  const [getData, { loading, error, data } ]= useLazyQuery(GET_DATA);

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const searchHandler = (month) => {
    getData({variables: {month}})
  }

  const filterHandler = (month) => {
    getData({ variables: { month } });
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="main_main">
      <TransactionNav searchHandler={searchHandler} />
      <TransactionFilter filterHandler={filterHandler} />
      {!loading && data ? (
        <TransactionData data={data} />
      ) : !loading && !data ? (
        <div>Unexpected Error!</div>
      ) : loading && !data ? (
        <div className="loading">No Results Found...</div>
      ) : (<div className="loading">Loading...</div>)
      }
    
    </div>
  )    
}

export default TransactionMain