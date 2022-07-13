import React from 'react'
import TrancDate from '../transactionData/TrancDate/TrancDate'
import { useQuery } from '@apollo/client';
import { GET_DATA } from '../../Queries/queries'

const TransactionData = () => {
  const {loading, error, data} = useQuery(GET_DATA);

    if(loading) {
        return( <div className="loading">Loading...</div>)
    }else {

  return data.getData.map(group => (
    <>
        <TrancDate date={group.date} />
        <div className="main-data">
            {group.transactions.map(result => (
                <div className="flex-data">
                    <div className="main-data-img">
                        <img src={result.avatarUrl} alt="" height="80px" width="80px" />
                    </div>
                    <div className="main-data-display">
                        <ul>
                            <li>Name <span className="name">{result.name}</span></li>
                            <li>Amount <span className="name">${result.amount}</span></li>
                            <li>Product Name <span className="name">{result.productName}</span></li>
                            <li>Product Tags <span className="name">{result.productTags}</span></li>
                            <li>Product Categories <span className="name">{result.productCategories}</span></li>
                            <li>Discount <span className="name">${result.discount}</span></li>
                            <li>Amount Paid <span className="name">${result.amountPaid}</span></li>
                            <li>Balance <span className="name">${result.balance}</span></li>
                            <li>Date <span className="name">{result.date}</span></li>
                            <li>Quantity <span className="name">{result.quantity}</span></li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
  ))
}}

export default TransactionData