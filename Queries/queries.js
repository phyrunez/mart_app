import { gql } from "apollo-server-micro";

export const GET_DATA = gql`
  {
    getData {
        date
        transactions {
            id
            name
            avatarUrl
            amount
            productName
            productTags
            productCategories
            discount
            amountPaid
            balance
            transactionId
            date
            quantity
        }
    }
  }
`;
