require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = function (event, context, callback) {
  let orderPayment = {
    OrderNumber: "O-2019-0001",
    PaymentRequestId: "O-2019-0001-1",
    PaymentType: "Immediate",
    Transactions: [
      {
        POSTransactionId: "O-2019-0001",
        Payee: "info@example.com",
        Total: 210,
        Items: [
          {
            Name: "Egg",
            Description: "Child of chicken",
            Quantity: 3,
            Unit: "pcs",
            UnitPrice: 70,
            ItemTotal: 210,
          },
        ],
      },
    ],
    ShippingAddress: {
      FullName: "Andrew Jones",
      Zip: "1000",
      City: "Budapest",
      Street: "Kossuth Street 2.",
    },
    Currency: "HUF",
    RedirectUrl: "https://google.com",
    CallbackUrl: "https://google.com",
  }
  // 1) Import the 'node-barion' module
  const Barion = require("node-barion")

  // 2) Instantiate a Barion object
  let barion = new Barion({
    POSKey: process.env.BARION_POS,
    Environment: "test",
  })

  barion.startPayment(orderPayment, function (err, data) {
    console.log(data)
  })
}
