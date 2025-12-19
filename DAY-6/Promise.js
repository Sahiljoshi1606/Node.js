var validateUser = () => {
  console.log("validating user ...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 1, name: "om" };
      console.log("user validated", user);
      resolve(user);
    }, 2000);
  });
};

var calculateCartTotal = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var cartTotal = 100;
      console.log("calculate cart total");
      resolve({ user, cartTotal });
    }, 2000);
  });
};

var PaymentProcess = ({ user, cartTotal }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var payment = { status: "success", amount: cartTotal };
      console.log("payment processing ...");
      resolve({ user, payment });
    }, 2000);
  });
};

var sendOrderConfirmation = ({ user, payment }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var confirmation = { status: "confirm", payment };
      console.log("order confirmed ");
      resolve({ user, confirmation });
    }, 2000);
  });
};

validateUser()
  .then(user => calculateCartTotal(user))
  .then(data => PaymentProcess(data))
  .then(data => sendOrderConfirmation(data))
  .then(result => {
    console.log("Final Result:", result);
  })
  .catch(err => {
    console.log("Error:", err);
  });
