import React from 'react'

const TransactionFilter = ({filterHandler}) => {
  return (
    <>
      <div className="main-filter">
        <div className="january" onClick={() => filterHandler("january")}>
          January
        </div>
        <div className="february" onClick={() => filterHandler("february")}>
          February
        </div>
        <div className="march" onClick={() => filterHandler("march")}>
          March
        </div>
        <div className="april" onClick={() => filterHandler("april")}>
          April
        </div>
        <div className="may" onClick={() => filterHandler("may")}>
          May
        </div>
        <div className="june" onClick={() => filterHandler("june")}>
          June
        </div>
        <div className="july" onClick={() => filterHandler("july")}>
          July
        </div>
        <div className="august" onClick={() => filterHandler("august")}>
          August
        </div>
        <div className="september" onClick={() => filterHandler("september")}>
          September
        </div>
        <div className="october" onClick={() => filterHandler("october")}>
          October
        </div>
        <div className="november" onClick={() => filterHandler("november")}>
          November
        </div>
        <div className="december" onClick={() => filterHandler("december")}>
          December
        </div>
      </div>
    </>
  );
}

export default TransactionFilter