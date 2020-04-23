require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.handler = function (event, context, callback) {
  const axios = require("axios")

  const data = {
    POSKey: process.env.BARION_POS,
    PaymentType: "Immediate",
    PaymentWindow: "00:30:00",

    GuestCheckout: "True",
    FundingSources: ["All"],

    PaymentRequestId: "payment-25",
    OrderNumber: "order-25",
    PayerHint: "joseph-schmidt@example.com",
    ShippingAddress: {
      Country: "AT",
      City: "Vienna",
      Region: "",
      Zip: "1234",
      Street: "13 Etwas Strasse",
      Street2: "",
      FullName: "Joseph Schmidt",
      Phone: "43259123456789",
    },

    RedirectUrl: "http://shop.example.com/danke-fur-den-kauf",
    CallbackUrl: "http://shop.example.com/api/callback",

    Locale: "de-AT",
    Currency: "EUR",

    Transactions: [
      {
        POSTransactionId: "tr-25",
        Payee: "eshop@example.com",
        Total: 400,
        Items: [
          {
            Name: "Digital Camera",
            Description: "Canon D500",
            Quantity: 1,
            Unit: "pcs",
            UnitPrice: 300,
            ItemTotal: 300,
            SKU: "cn-d500-fxc3",
          },
          {
            Name: "SD Card",
            Description: "SanDisk SD mini 512GB - 3 year garantee",
            Quantity: 2,
            Unit: "pcs",
            UnitPrice: 50,
            ItemTotal: 100,
            SKU: "snd-sd-500gm",
          },
        ],
      },
    ],
  }

  axios.post("https://api.test.barion.com/v2/Payment/Start", data)
}
