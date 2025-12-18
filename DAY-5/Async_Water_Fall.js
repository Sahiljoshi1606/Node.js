const async = require('async');

async.waterfall([

    // 1️ Validate user
    function (callback) {
        console.log("...validating user");
        setTimeout(() => {
            const user = { id: 1, name: "om" };
            console.log("validated user:", user);
            callback(null, user);
        }, 2000);
    },

    // 2️ Calculate cart total
    function (user, callback) {
        console.log("calculating cart total");
        setTimeout(() => {
            const cartTotal = 100;
            console.log("total amount:", cartTotal);
            callback(null, user, cartTotal);
        }, 3000);
    },

    // 3️ Process payment
    function (user, cartTotal, callback) {
        console.log("payment processing");
        setTimeout(() => {
            const payment = { status: "success", amount: cartTotal };
            console.log("payment completed:", payment);
            callback(null, user, payment);
        }, 4000);
    },

    // 4️ Send confirmation
    function (user, payment, callback) {
        console.log("sending payment confirmation");
        setTimeout(() => {
            const paymentConfirmation = {
                user: user,
                status: "confirmed",
                payment: payment
            };
            console.log("confirmation sent:", paymentConfirmation);
            callback(null, paymentConfirmation);
        }, 3000);
    }

], function (err, result) {
    if (err) {
        console.log("error occurred:", err);
    } else {
        console.log("product purchased successfully");
        console.log("final result:", result);
    }
});
