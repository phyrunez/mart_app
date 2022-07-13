import React from 'react';
import TransactionMain from '../components/transactionMain/TransactionMain'
import TransactionSidebar from '../components/transactionSidebar/TransactionSidebar'

function App() {

  return (
   <div className="app">
      <TransactionMain />
      <TransactionSidebar />
   </div>
  );
}

export default App;
