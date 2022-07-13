import { gql } from "apollo-server-micro";

const Schema = gql`
    type Data {
        id: ID!
        name: String
        avatarUrl: String!
        amount: Int!
        productName: String!
        productTags: [String]!
        productCategories: String!
        discount: Int!
        amountPaid: Int!
        balance: Int!
        transactionId: ID!
        date: String!
        quantity: Int!
    }

    type GroupedData {
         
        date: String! 
        transactions: [Data]
        
    }
    
    type Query {
        getData: [GroupedData]
    }
`

export default Schema;