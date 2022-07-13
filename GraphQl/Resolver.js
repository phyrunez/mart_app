import moment from 'moment'

const data = [
  {
    date: "2022-01-13T09:24:12.300Z",
    transactions: [
      {
        id: "66fccad1a573a32bad53f51d",
        name: "Neal Greenfelder",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/142.jpg",
        amount: "685.00",
        productName: "Luxurious Steel Chicken",
        productTags: ['computers', 'electronics'],
        productCategories: "Games",
        discount: "553.00",
        amountPaid: "167.00",
        balance: "454.00",
        transactionId: "0d4f2cadb2f1ac19f1b3dad2",
        date: "2022-07-13T08:31:43.656Z",
        quantity: "8",
      },
      {
        id: "ca611dbc5eaba1f85bfb0ecf",
        name: "Gail Hermann DVM",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/672.jpg",
        amount: "510.00",
        productName: "Elegant Wooden Hat",
        productTags: ['computers', 'electronics'],
        productCategories: "Baby",
        discount: "300.00",
        amountPaid: "484.00",
        balance: "528.00",
        transactionId: "2dab108d6e1a4bbde8cff0f9",
        date: "2022-07-13T02:35:00.048Z",
        quantity: "7",
      },
      {
        id: "6fb3d05ccbcebaefa36c437a",
        name: "Ian Labadie",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg",
        amount: "283.00",
        productName: "Rustic Cotton Shirt",
        productTags: ['computers', 'electronics'],
        productCategories: "Books",
        discount: "812.00",
        amountPaid: "333.00",
        balance: "363.00",
        transactionId: "1a4fc1b67778b07aa5533a4b",
        date: "2022-07-13T17:29:17.109Z",
        quantity: "8",
      },
    ],
  },
  {
    date: "2022-04-12T23:08:11.224Z",
    transactions: [
      {
        id: "7e1c23bcf26da47ec19c6f1d",
        name: "Miss Yolanda Schroeder",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1131.jpg",
        amount: "138.00",
        productName: "Oriental Cotton Cheese",
        productTags: ['computers', 'electronics'],
        productCategories: "Music",
        discount: "16.00",
        amountPaid: "203.00",
        balance: "206.00",
        transactionId: "3d1ee94eda3cbcc8e59fccfc",
        date: "2022-07-13T14:40:41.553Z",
        quantity: "5",
      },
    ],
  },
  {
    date: "2022-07-13T07:01:32.735Z",
    transactions: [
      {
        id: "2ed90ccaf39ebf9cbb0df3c5",
        name: "Tommy Rempel",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/288.jpg",
        amount: "764.00",
        productName: "Practical Metal Shoes",
        productTags: ['computers', 'electronics'],
        productCategories: "Computers",
        discount: "16.00",
        amountPaid: "415.00",
        balance: "159.00",
        transactionId: "f932bebf33c0dfdf924b4aea",
        date: "2022-07-13T02:28:48.242Z",
        quantity: "5",
      },
      {
        id: "8b7abdfcd82de6ada588f9fd",
        name: "Jessie Crona",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/880.jpg",
        amount: "544.00",
        productName: "Small Wooden Fish",
        productTags: ['computers', 'electronics'],
        productCategories: "Clothing",
        discount: "69.00",
        amountPaid: "69.00",
        balance: "769.00",
        transactionId: "fc6bdeccc3c6fbcbebece6cb",
        date: "2022-07-13T06:59:47.749Z",
        quantity: "1",
      },
      {
        id: "9dbafbb0df7f581ff9976ddc",
        name: "Sheryl Kulas DDS",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/51.jpg",
        amount: "631.00",
        productName: "Rustic Rubber Fish",
        productTags: ['computers', 'electronics'],
        productCategories: "Shoes",
        discount: "482.00",
        amountPaid: "45.00",
        balance: "833.00",
        transactionId: "d5aefee3d9cb2acd62bec189",
        date: "2022-07-13T14:23:24.394Z",
        quantity: "3",
      },
    ],
  },
  {
    date: "2022-11-13T07:29:13.201Z",
    transactions: [
      {
        id: "6dc5f7d281ebf150d4beaf2b",
        name: "Rene Heidenreich",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg",
        amount: "671.00",
        productName: "Fantastic Frozen Pants",
        productTags: ['computers', 'electronics'],
        productCategories: "Garden",
        discount: "564.00",
        amountPaid: "145.00",
        balance: "555.00",
        transactionId: "fce8bba8a40a5db3e2c1ec6b",
        date: "2022-07-13T09:53:25.075Z",
        quantity: "9",
      },
      {
        id: "6fb3d05ccbcebaefa36c437a",
        name: "Ian Labadie",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg",
        amount: "283.00",
        productName: "Rustic Cotton Shirt",
        productTags: ['computers', 'electronics'],
        productCategories: "Books",
        discount: "812.00",
        amountPaid: "333.00",
        balance: "363.00",
        transactionId: "1a4fc1b67778b07aa5533a4b",
        date: "2022-07-13T17:29:17.109Z",
        quantity: "8",
      },
      {
        id: "6dc5f7d281ebf150d4beaf2b",
        name: "Rene Heidenreich",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/847.jpg",
        amount: "671.00",
        productName: "Fantastic Frozen Pants",
        productTags: ['computers', 'electronics'],
        productCategories: "Garden",
        discount: "564.00",
        amountPaid: "145.00",
        balance: "555.00",
        transactionId: "fce8bba8a40a5db3e2c1ec6b",
        date: "2022-07-13T09:53:25.075Z",
        quantity: "9",
      },
      {
        id: "fabebf3f018b0b8dbffc2b6d",
        name: "Lisa Hoppe III",
        avatarUrl:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/68.jpg",
        amount: "284.00",
        productName: "Handmade Soft Tuna",
        productTags: ['computers', 'electronics'],
        productCategories: "Home",
        discount: "834.00",
        amountPaid: "887.00",
        balance: "181.00",
        transactionId: "e80e2dcfacebab45315a3396",
        date: "2022-07-13T21:14:24.703Z",
        quantity: "5",
      },
    ],
  },
];
const Resolver = {
  Query: {
    getData(parent, args, context) {
      if(args){
        const {search, month} = args
        if (search) {
          let searchData = []
          data.forEach((item) => {
            let transactions = []
            item.transactions.forEach((transaction) => {
              if (transaction.name.toLowerCase().match(new RegExp(`^.*${search.toLowerCase()}.*$`))) {
                transactions.push(transaction);
              }
            })
            if (transactions.length) {
              const formatData = {
                date: item.date,
                transactions
              }
              searchData.push(formatData)
            }
          })
          return searchData
        } else if (month) {
          const filterData = []
          data.forEach((item) => {
            const itemMonth = moment(item.date).format('MMMM')
            if (itemMonth.toLowerCase() === month.toLowerCase()) {
              const formatData = {
                date: item.date,
                transactions: item.transactions,
              };
              filterData.push(formatData);
            }
          })
          return filterData;
        } else {
          return data;
        }
      }
    },
  },
};

export default Resolver;
