import { gql } from "apollo-server-micro";

export const GET_DATA = gql`
  query Data($search: String, $month: String){
    getData (search: $search, month: $month) {
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
