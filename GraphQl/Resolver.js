import { faker } from '@faker-js/faker'

const Resolver = {
    Query: {
        getData(parent, args, context) {
            return  [{ 
                date: faker.date.birthdate(),
                transactions: [{
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                }
            ]},
            { 
                date: faker.date.birthdate(),
                transactions: [{
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                }
            ]},
            { 
                date: faker.date.birthdate(),
                transactions: [{
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                }
            ]},
            { 
                date: faker.date.birthdate(),
                transactions: [{
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                }
            ]},
            { 
                date: faker.date.birthdate(),
                transactions: [{
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                },
                {
                    id: faker.database.mongodbObjectId(),
                    name: faker.name.findName(),
                    avatarUrl: faker.image.avatar(),
                    amount: faker.commerce.price(),
                    productName: faker.commerce.productName(),
                    productTags: [faker.commerce.product(), faker.commerce.product(), faker.commerce.product()],
                    productCategories: faker.commerce.department(),
                    discount: faker.commerce.price(),
                    amountPaid: faker.commerce.price(),
                    balance: faker.commerce.price(),
                    transactionId: faker.database.mongodbObjectId(),
                    date: faker.date.recent(),
                    quantity: faker.random.numeric()
                }
            ]}
        ]
            
        }
    }
}

export default Resolver;