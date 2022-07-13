const { faker } = require('@faker-js/faker')

const Generator = {
    date: faker.date.recent(),
    transactions: [
      {
        id: faker.database.mongodbObjectId(),
        name: faker.name.findName(),
        avatarUrl: faker.image.avatar(),
        amount: faker.commerce.price(),
        productName: faker.commerce.productName(),
        productTags: [
          faker.commerce.product(),
          faker.commerce.product(),
          faker.commerce.product(),
        ],
        productCategories: faker.commerce.department(),
        discount: faker.commerce.price(),
        amountPaid: faker.commerce.price(),
        balance: faker.commerce.price(),
        transactionId: faker.database.mongodbObjectId(),
        date: faker.date.recent(),
        quantity: faker.random.numeric(),
      },
     
    ],
  }

console.log(Generator);