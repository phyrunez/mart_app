import React, { useState } from 'react'
import TransactionNav from '../transactionNav/TransactionNav'
import TransactionFilter from '../transactionFilter/TransactionFilter'
import TransactionData from '../transactionData/TransactionData'
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../../Queries/queries'


const TransactionMain = () => {
  const {loading, error, data} = useQuery(GET_DATA);

  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTransactionList = data.filter(transac => {
        return Object.values(transac).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResults(newTransactionList);
    }else {
      setSearchResults(data)
    }
  }

  return (
    <div className="main_main">
        <TransactionNav 
          searchKeyword={searchHandler} 
          transacs={searchTerm.length < 1 ? data : searchResults }
        />
        <TransactionFilter />
        <TransactionData />
    </div>
  )
}

export default TransactionMain